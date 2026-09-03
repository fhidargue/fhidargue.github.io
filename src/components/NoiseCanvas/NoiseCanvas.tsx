import { useEffect, useRef } from "react";
import cx from "classnames";

import styles from "./NoiseCanvas.module.scss";

interface NoiseCanvasProps {
  opacity?: number;
  density?: number;
  speed?: number;
  pixelSize?: number;
  className?: string;
}

const NoiseCanvas = ({
  opacity = 0.5,
  density = 0.65,
  speed = 30,
  pixelSize = 1,
  className,
}: NoiseCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.ceil(rect.width * dpr);
      canvas.height = Math.ceil(rect.height * dpr);
    };

    const renderNoise = () => {
      const width = canvas.width;
      const height = canvas.height;
      const dpr = window.devicePixelRatio || 1;

      if (!width || !height) {
        return;
      }

      context.clearRect(0, 0, width, height);

      const size = Math.max(1, Math.round(pixelSize * dpr));

      const columns = Math.ceil(width / size);
      const rows = Math.ceil(height / size);

      const imageData = context.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          if (Math.random() > density) {
            continue;
          }

          // Dark grayscale noise
          const brightness = Math.floor(Math.random() * 35);

          // Consistent opacity
          const alpha = Math.floor(255 * opacity);

          for (let py = 0; py < size; py += 1) {
            for (let px = 0; px < size; px += 1) {
              const pixelX = x * size + px;
              const pixelY = y * size + py;

              if (pixelX >= width || pixelY >= height) {
                continue;
              }

              const index = (pixelY * width + pixelX) * 4;

              data[index] = brightness;
              data[index + 1] = brightness;
              data[index + 2] = brightness;
              data[index + 3] = alpha;
            }
          }
        }
      }

      context.putImageData(imageData, 0, 0);
    };

    resizeCanvas();
    renderNoise();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      renderNoise();
    });

    resizeObserver.observe(canvas);

    const interval = window.setInterval(renderNoise, speed);

    return () => {
      window.clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, [density, opacity, pixelSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cx(styles["noise-canvas"], className)}
    />
  );
};

export default NoiseCanvas;
