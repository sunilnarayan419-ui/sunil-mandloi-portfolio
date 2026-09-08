import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface NetworkFieldProps {
  className?: string;
  density?: "hero" | "ambient";
  /** "light" (default) draws dark ink nodes for use on warm-ivory
   *  surfaces; "dark" draws warm mist-toned nodes for use on the
   *  graphite anchor sections. */
  tone?: "light" | "dark";
}

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

/**
 * A quiet field of connected nodes suggesting a molecular / computational
 * network. Pure canvas 2D (no WebGL dependency) so it stays light and
 * predictable across devices. Node count and motion scale down on small
 * screens and switch off entirely under prefers-reduced-motion.
 */
export default function NetworkField({
  className = "",
  density = "ambient",
  tone = "light",
}: NetworkFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    let destroyed = false;

    const isSmall = window.innerWidth < 640;
    const baseCount = density === "hero" ? (isSmall ? 26 : 52) : isSmall ? 16 : 34;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes = Array.from({ length: baseCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        vz: (Math.random() - 0.5) * 0.0015,
      }));
    }

    function step() {
      if (destroyed) return;
      ctx!.clearRect(0, 0, width, height);

      const maxDist = Math.min(width, height) * 0.22;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        if (n.z < 0 || n.z > 1) n.vz *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.14 * ((a.z + b.z) / 2 + 0.3);
            ctx!.strokeStyle = `rgba(159, 18, 57, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      const nodeColor = tone === "dark" ? "243, 240, 232" : "27, 23, 18";
      for (const n of nodes) {
        const r = 0.6 + n.z * 1.8;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${nodeColor}, ${0.1 + n.z * 0.22})`;
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    seed();

    if (reduced) {
      // Draw a single static frame and stop — respects reduced-motion.
      step();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(step);
    }

    const handleResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, [density, reduced, tone]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
