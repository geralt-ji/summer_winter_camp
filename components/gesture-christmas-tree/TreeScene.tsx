"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

interface TreeSceneProps {
  isScattered: boolean;
}

function ParticleTree({ isScattered }: { isScattered: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Tree Parameters
  const particleCount = 3000;
  const treeHeight = 10;
  const baseRadius = 4;
  
  // Generate particles
  const { originalPositions, currentPositions, targetPositions, colors } = useMemo(() => {
    const originalPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3); // For rendering
    const targetPositions = new Float32Array(particleCount * 3); // "Exploded" positions
    const colors = new Float32Array(particleCount * 3);
    
    const colorObj = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      // 1. Generate Tree Shape (Cone/Spiral)
      // y goes from -height/2 to height/2
      const yRatio = Math.random();
      const y = (yRatio - 0.5) * treeHeight;
      
      // Radius decreases as y increases (cone)
      // (1 - yRatio) * baseRadius
      const r = (1 - yRatio) * baseRadius * Math.sqrt(Math.random()); // sqrt for uniform distribution
      
      const theta = Math.random() * Math.PI * 2 * 10; // 10 windings
      
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);
      
      // Store original position
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Initialize current positions to original
      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;
      
      // 2. Generate Scattered Position
      // Random direction outwards
      const scatterDist = 5 + Math.random() * 15;
      const scatterDir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      
      targetPositions[i * 3] = x + scatterDir.x * scatterDist;
      targetPositions[i * 3 + 1] = y + scatterDir.y * scatterDist;
      targetPositions[i * 3 + 2] = z + scatterDir.z * scatterDist;

      // 3. Colors (Green/Red/Gold/White mix)
      const rand = Math.random();
      if (rand > 0.9) colorObj.set("#FFD700"); // Gold ornaments
      else if (rand > 0.8) colorObj.set("#FF0000"); // Red ornaments
      else if (rand > 0.7) colorObj.set("#FFFFFF"); // Snow
      else colorObj.setHSL(0.3 + Math.random() * 0.1, 0.8, 0.4); // Various greens
      
      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
    }
    
    return { originalPositions, currentPositions, targetPositions, colors };
  }, []);

  // Animation Loop
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const positionsAttribute = pointsRef.current.geometry.attributes.position;
    const currentArray = positionsAttribute.array as Float32Array;
    
    // Speed of interpolation
    const speed = 3.0 * delta;
    
    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      
      // Determine target based on state
      // IMPORTANT: Use originalPositions for assembled state, NOT currentArray
      const targetX = isScattered ? targetPositions[ix] : originalPositions[ix];
      const targetY = isScattered ? targetPositions[iy] : originalPositions[iy];
      const targetZ = isScattered ? targetPositions[iz] : originalPositions[iz];
      
      // Lerp current to target
      currentArray[ix] += (targetX - currentArray[ix]) * speed;
      currentArray[iy] += (targetY - currentArray[iy]) * speed;
      currentArray[iz] += (targetZ - currentArray[iz]) * speed;
    }
    
    positionsAttribute.needsUpdate = true;
    
    // Slowly rotate the tree
    pointsRef.current.rotation.y += delta * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-position"
          count={currentPositions.length / 3}
          array={currentPositions} // Use the mutable array
          itemSize={3}
        />
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function TreeScene({ isScattered }: TreeSceneProps) {
  return (
    <div className="w-full h-[600px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#020617']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ParticleTree isScattered={isScattered} />
        
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white/50 text-xs pointer-events-none">
        Drag to rotate • Gestures control particles
      </div>
    </div>
  );
}
