"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  FilesetResolver,
  HandLandmarker,
  HandLandmarkerResult,
} from "@mediapipe/tasks-vision";

interface GestureControlProps {
  onGestureChange: (isOpen: boolean) => void;
}

export function GestureControl({ onGestureChange }: GestureControlProps) {
  const webcamRef = useRef<Webcam>(null);
  const [webcamRunning, setWebcamRunning] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("Waiting for hand...");
  const handLandmarkerRef = useRef<HandLandmarker | null>(null);
  const requestRef = useRef<number>(0);

  // Initialize MediaPipe HandLandmarker
  useEffect(() => {
    const loadHandLandmarker = async () => {
      try {
        // Use local WASM files
        const vision = await FilesetResolver.forVisionTasks(
          "/models/wasm"
        );
        
        const handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            // Use local model file
            modelAssetPath: "/models/hand_landmarker.task",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numHands: 2,
        });
        handLandmarkerRef.current = handLandmarker;
        setModelLoaded(true);
        console.log("HandLandmarker loaded from local assets");
      } catch (error: any) {
        console.error("Error loading HandLandmarker:", error);
        setError(`AI模型加载失败: ${error.message || error}`);
      }
    };

    loadHandLandmarker();

    return () => {
      if (handLandmarkerRef.current) {
        handLandmarkerRef.current.close();
      }
    };
  }, []);

  // Start prediction loop
  const predictWebcam = () => {
    if (
      !handLandmarkerRef.current ||
      !webcamRef.current ||
      !webcamRef.current.video ||
      webcamRef.current.video.readyState !== 4
    ) {
      requestRef.current = requestAnimationFrame(predictWebcam);
      return;
    }

    const video = webcamRef.current.video;
    const nowInMs = Date.now();

    const results = handLandmarkerRef.current.detectForVideo(video, nowInMs);

    processGesture(results);

    requestRef.current = requestAnimationFrame(predictWebcam);
  };

  // Gesture Logic
  const processGesture = (results: HandLandmarkerResult) => {
    if (results.landmarks && results.landmarks.length > 0) {
      // Use the first detected hand
      const landmarks = results.landmarks[0];
      const wrist = landmarks[0];

      // Helper to calculate distance
      const dist = (p1: any, p2: any) => {
        return Math.sqrt(
          Math.pow(p1.x - p2.x, 2) +
          Math.pow(p1.y - p2.y, 2) +
          Math.pow(p1.z - p2.z, 2)
        );
      };

      // Finger indices: [MCP, PIP, DIP, Tip]
      // We compare Tip distance to Wrist vs PIP distance to Wrist
      // If Tip is further than PIP, finger is extended.
      const fingerIndices = [
        [5, 6, 7, 8],   // Index
        [9, 10, 11, 12], // Middle
        [13, 14, 15, 16], // Ring
        [17, 18, 19, 20], // Pinky
      ];

      let extendedFingers = 0;

      fingerIndices.forEach((indices) => {
        const pip = landmarks[indices[1]];
        const tip = landmarks[indices[3]];
        
        // We use MCP as reference for scale invariant check, but comparing distances to wrist is robust enough for open/close
        if (dist(tip, wrist) > dist(pip, wrist)) {
          extendedFingers++;
        }
      });

      // Thumb check (Tip vs IP)
      const thumbTip = landmarks[4];
      const thumbIP = landmarks[3];
      const thumbMCP = landmarks[2];
      // Thumb is tricky, let's check if tip is further from pinky base than IP
      // Or just check if it's far from wrist
      if (dist(thumbTip, wrist) > dist(thumbMCP, wrist)) {
         extendedFingers++;
      }

      // Decision Logic
      // 5 fingers -> Open
      // 0-1 fingers -> Closed
      
      if (extendedFingers >= 4) {
        onGestureChange(true);
        setDebugInfo(`Open (${extendedFingers} fingers)`);
      } else if (extendedFingers <= 1) {
        onGestureChange(false);
        setDebugInfo(`Closed (${extendedFingers} fingers)`);
      } else {
        // 2-3 fingers: Hold state (prevent flicker)
        setDebugInfo(`Hold (${extendedFingers} fingers)`);
      }
      
    } else {
      // No hand detected, maybe default to closed (tree intact)
       onGestureChange(false);
       setDebugInfo("No hand detected - Auto Close");
    }
  };

  useEffect(() => {
    if (webcamRunning && modelLoaded) {
      requestRef.current = requestAnimationFrame(predictWebcam);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [webcamRunning, modelLoaded]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
        <Webcam
          ref={webcamRef}
          onUserMedia={() => setWebcamRunning(true)}
          className="w-64 h-48 object-cover transform scale-x-[-1]" // Mirror the video
          width={256}
          height={192}
        />
        {!modelLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
            Loading AI Model...
          </div>
        )}
        {error && (
           <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 text-white p-4 text-center text-xs">
           {error}
         </div>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {error ? "Model failed to load." : modelLoaded ? "Show your hand! Open to scatter, Close to assemble." : "Initializing..."}
      </p>
      {modelLoaded && !error && (
        <p className="text-xs font-mono text-primary mt-1">
          Status: {debugInfo}
        </p>
      )}
    </div>
  );
}
