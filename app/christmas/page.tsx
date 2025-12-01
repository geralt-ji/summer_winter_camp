import { GestureChristmasTree } from "@/components/gesture-christmas-tree";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gesture Controlled Christmas Tree",
  description: "A 3D particle Christmas tree controlled by hand gestures using MediaPipe and Three.js",
};

export default function ChristmasPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Magic Christmas Tree
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of the season. Control the stardust with your hands.
          </p>
        </div>
        
        <GestureChristmasTree />
      </div>
    </main>
  );
}
