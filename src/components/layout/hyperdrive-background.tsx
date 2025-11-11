"use client";

import React, {useEffect, useRef} from "react";

const HyperdriveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const numStars = 1000;
        const speed = 2;

        type Star = {
            x: number;
            y: number;
            z: number;
            color: string;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(createStar());
            }
        };

        const createStar = (z?: number): Star => {
            const randomValue = Math.random();
            let color = "#FFFFFF";
            if (randomValue > 0.98) {
                color = "#7AECFB"; // Primary Accent
            } else if (randomValue > 0.96) {
                color = "#C3A9FB"; // Secondary Accent
            }

            return {
                x: Math.random() * canvas.width - canvas.width / 2,
                y: Math.random() * canvas.height - canvas.height / 2,
                z: z || Math.random() * canvas.width,
                color: color,
            };
        };

        const draw = () => {
            if (!ctx) return;

            // Create background gradient
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height,
                0,
                canvas.width / 2,
                canvas.height,
                canvas.height,
            );
            gradient.addColorStop(0, "#081329"); // Midnight Blue
            gradient.addColorStop(1, "#091220"); // Very Dark Navy
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);

            stars.forEach((star, index) => {
                star.z -= speed;

                if (star.z <= 0) {
                    stars[index] = createStar(canvas.width);
                }

                const fov = canvas.width * 0.8;
                const scale = fov / (fov + star.z);
                const sx = star.x * scale;
                const sy = star.y * scale;
                const radius = Math.max(0, scale * 1.5);
                const opacity = 1 - star.z / canvas.width;

                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${opacity})`;

                // Add a subtle glow
                if (star.color !== "#FFFFFF") {
                    ctx.shadowColor = star.color;
                    ctx.shadowBlur = 10;
                } else {
                    ctx.shadowColor = "transparent";
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
            });

            ctx.restore();
            animationFrameId = requestAnimationFrame(draw);
        };

        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
                    result[3],
                    16,
                )}`
                : "255, 255, 255";
        };

        const handleResize = () => {
            resizeCanvas();
            initStars();
        };

        window.addEventListener("resize", handleResize);
        resizeCanvas();
        initStars();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        />
    );
};

export default HyperdriveBackground;