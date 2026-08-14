"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  tx: number;
  ty: number;
  active: number;
  dot: number;
  r: number;
  closest: Point[];
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = canvas.parentElement!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let visible = false;
    let points: Point[] = [];
    const target = { x: -99999, y: -99999 };

    const sqDist = (a: { x: number; y: number }, b: { x: number; y: number }) =>
      (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);

    function retarget(p: Point) {
      p.tx = p.originX - 50 + Math.random() * 100;
      p.ty = p.originY - 50 + Math.random() * 100;
    }

    function init() {
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      if (!width || !height) return;
      canvas.width = width;
      canvas.height = height;
      target.x = width / 2;
      target.y = height / 2;

      const stepX = width / 15;
      const stepY = height / 15;
      points = [];
      for (let x = 0; x < width; x += stepX) {
        for (let y = 0; y < height; y += stepY) {
          const px = x + Math.random() * stepX;
          const py = y + Math.random() * stepY;
          const p: Point = {
            x: px, y: py, originX: px, originY: py, tx: px, ty: py,
            active: 0, dot: 0, r: 2 + Math.random() * 2, closest: [],
          };
          retarget(p);
          points.push(p);
        }
      }

      for (const p of points) {
        p.closest = points
          .map((q) => ({ q, d: sqDist(p, q) }))
          .sort((a, b) => a.d - b.d)
          .slice(1, 6)
          .map((e) => e.q);
      }
    }

    function draw() {
      rafId = requestAnimationFrame(draw);
      if (!visible || !width) return;

      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        p.x += (p.tx - p.x) * 0.02;
        p.y += (p.ty - p.y) * 0.02;
        if (Math.abs(p.tx - p.x) < 0.5 && Math.abs(p.ty - p.y) < 0.5) retarget(p);

        const d = sqDist(target, p);
        if (d < 4000) { p.active = 0.3; p.dot = 0.6; }
        else if (d < 20000) { p.active = 0.1; p.dot = 0.3; }
        else if (d < 40000) { p.active = 0.02; p.dot = 0.1; }
        else { p.active = 0; p.dot = 0; }

        if (p.active) {
          ctx.strokeStyle = `rgba(190,190,190,${p.active})`;
          for (const q of p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (p.dot) {
          ctx.fillStyle = `rgba(160,160,160,${p.dot})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(wrap);

    const resizeObserver = new ResizeObserver(() => init());
    resizeObserver.observe(wrap);

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    init();
    draw();

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
