"use client";

import { useEffect, useRef } from "react";

const LINE_GAP = 54;
const SAMPLE_GAP = 28;
const INFLUENCE_RADIUS = 240;

export default function MagnetLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    let ripple = { x: -1000, y: -1000, startedAt: -Infinity };
    let pointerActive = false;
    let width = 0;
    let height = 0;
    let frame = 0;
    let pixelRatio = 1;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const bendPoint = (x: number, y: number, time: number) => {
      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const distance = Math.hypot(dx, dy);
      const pull = Math.exp(-((distance / INFLUENCE_RADIUS) ** 2)) * 46;
      let nextX = x + (distance ? (dx / distance) * pull : 0);
      let nextY = y + (distance ? (dy / distance) * pull : 0);

      if (!motionQuery.matches) {
        const age = (time - ripple.startedAt) / 1000;
        if (age >= 0 && age < 1.4) {
          const rippleDistance = Math.hypot(x - ripple.x, y - ripple.y);
          const wave = Math.sin(rippleDistance / 18 - age * 9) * 17;
          const fade = (1 - age / 1.4) * Math.exp(-rippleDistance / 650);
          const direction = rippleDistance ? wave * fade / rippleDistance : 0;
          nextX += (x - ripple.x) * direction;
          nextY += (y - ripple.y) * direction;
        }

        const drift = Math.sin(time / 2600 + y / 180 + x / 240) * 2;
        nextX += drift;
      }

      return { x: nextX, y: nextY };
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.strokeStyle = "rgba(238, 177, 69, 0.2)";
      context.lineWidth = 0.8;

      for (let x = 0; x <= width; x += LINE_GAP) {
        context.beginPath();
        for (let y = 0; y <= height; y += SAMPLE_GAP) {
          const point = bendPoint(x, y, time);
          if (y === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.stroke();
      }

      for (let y = 0; y <= height; y += LINE_GAP) {
        context.beginPath();
        for (let x = 0; x <= width; x += SAMPLE_GAP) {
          const point = bendPoint(x, y, time);
          if (x === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }
        context.stroke();
      }
    };

    const animate = (time: number) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;
      draw(time);
      frame = window.requestAnimationFrame(animate);
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
      if (inside) {
        pointer.targetX = event.clientX - bounds.left;
        pointer.targetY = event.clientY - bounds.top;
        if (!pointerActive) {
          pointer.x = pointer.targetX;
          pointer.y = pointer.targetY;
        }
        pointerActive = true;
      } else {
        pointer.targetX = -1000;
        pointer.targetY = -1000;
        pointerActive = false;
      }
      if (motionQuery.matches) {
        pointer.x = pointer.targetX;
        pointer.y = pointer.targetY;
        draw(performance.now());
      }
    };

    const updateRipple = (event: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        return;
      }
      ripple = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        startedAt: performance.now(),
      };
    };

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(frame);
      if (motionQuery.matches) {
        draw(performance.now());
      } else {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const observer = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    observer.observe(canvas);
    resize();
    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("click", updateRipple);
    motionQuery.addEventListener("change", handleMotionPreference);
    handleMotionPreference();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("click", updateRipple);
      motionQuery.removeEventListener("change", handleMotionPreference);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
    />
  );
}
