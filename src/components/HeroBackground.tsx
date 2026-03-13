"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      if (!canvas) return;

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      canvas.width = W;
      canvas.height = H;
      ctx.clearRect(0, 0, W, H);

      const STEP = 48;

      // base grid only – ultra subtle, no accent band
      ctx.strokeStyle = "rgba(80, 130, 160, 0.028)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= W; x += STEP) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      for (let y = 0; y <= H; y += STEP) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    drawGrid();

    const observer = new ResizeObserver(() => drawGrid());
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 120% 140% at 50% 0%, #0b1220 0%, #020617 55%, #020617 100%)",
          zIndex: 0,
        }}
      />

      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </div>
  );
}

