"use client";

import React, { useState } from "react";
import { GestureControl } from "./GestureControl";
import { TreeScene } from "./TreeScene";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";

export function GestureChristmasTree() {
  const [isScattered, setIsScattered] = useState(false);
  const [manualOverride, setManualOverride] = useState(false);

  const handleGestureChange = (isOpen: boolean) => {
    if (!manualOverride) {
      setIsScattered(isOpen);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto p-4">
      {/* Left Side: Controls & Camera */}
      <div className="w-full lg:w-1/3 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Gesture Control</CardTitle>
            <CardDescription>
              Use your hand to control the Christmas Tree particles.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <GestureControl onGestureChange={handleGestureChange} />
            
            <div className="flex items-center justify-between w-full px-4 py-2 bg-muted rounded-md">
              <span className="text-sm font-medium">Current State:</span>
              <Badge variant={isScattered ? "destructive" : "default"}>
                {isScattered ? "Scattered (Open Hand)" : "Assembled (Closed Hand)"}
              </Badge>
            </div>

            <div className="w-full pt-4 border-t">
              <p className="text-xs text-muted-foreground mb-2">Manual Override (Debug)</p>
              <div className="flex gap-2">
                <Button 
                  variant={manualOverride && isScattered ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setManualOverride(true);
                    setIsScattered(true);
                  }}
                  className="flex-1"
                >
                  <Maximize2 className="w-4 h-4 mr-2" />
                  Scatter
                </Button>
                <Button 
                  variant={manualOverride && !isScattered ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setManualOverride(true);
                    setIsScattered(false);
                  }}
                  className="flex-1"
                >
                  <Minimize2 className="w-4 h-4 mr-2" />
                  Assemble
                </Button>
              </div>
              {manualOverride && (
                 <Button 
                 variant="ghost" 
                 size="sm" 
                 className="w-full mt-2 text-xs h-6"
                 onClick={() => setManualOverride(false)}
               >
                 Reset to Camera Control
               </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Instructions</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>1. Allow camera access.</p>
            <p>2. Show your hand to the camera.</p>
            <p>3. <strong>Open Hand</strong>: The tree particles scatter into chaos.</p>
            <p>4. <strong>Close Hand (Fist)</strong>: The particles reassemble into a Christmas tree.</p>
          </CardContent>
        </Card>
      </div>

      {/* Right Side: 3D Scene */}
      <div className="w-full lg:w-2/3">
        <TreeScene isScattered={isScattered} />
      </div>
    </div>
  );
}
