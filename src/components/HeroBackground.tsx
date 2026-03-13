"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);
  const pointerTarget = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  // Static grid background
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

  // Cursor-following light
  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 3;

    const animate = () => {
      if (!pointerTarget.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const { x, y } = pointerTarget.current;
      const lerp = 0.14;
      currentX += (x - currentX) * lerp;
      currentY += (y - currentY) * lerp;

      light.style.transform = `translate3d(${currentX - 200}px, ${
        currentY - 200
      }px, 0)`;
      light.style.opacity = "1";

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (event: PointerEvent) => {
      pointerTarget.current = { x: event.clientX, y: event.clientY };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleLeave = () => {
      pointerTarget.current = null;
      light.style.opacity = "0";
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
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

      <div
        ref={lightRef}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.28), rgba(37,99,235,0.1), transparent 70%)",
          filter: "blur(6px)",
          opacity: 0,
          pointerEvents: "none",
          mixBlendMode: "screen",
          transition: "opacity 220ms ease-out",
          zIndex: 2,
        }}
      />
    </div>
  );
}


