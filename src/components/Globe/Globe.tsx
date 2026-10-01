import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points } from "three";
import * as THREE from "three";

import useBreakpoints from "@hooks/useBreakpoints";
import useTheme from "@hooks/useTheme";

import {
  CAMERA_FOV,
  CAMERA_Z,
  DIAMOND_RADIUS,
  FIGURE_SCALE_DESKTOP,
  FIGURE_SCALE_MOBILE,
  HELIX_HEIGHT,
  HELIX_RADIUS,
  HELIX_TURNS,
  INTERACTION_PLANE_SIZE,
  KLEIN_RADIUS,
  KLEIN_SCALE_X,
  KLEIN_SCALE_Y,
  KLEIN_SCALE_Z,
  KLEIN_U_MULTIPLIER,
  MAX_PIXEL_RATIO,
  MIN_DIAMOND_SCALE,
  MIN_MOUSE_DISTANCE,
  MORPH_SPEED,
  MOUSE_COLOR_RADIUS,
  MOUSE_COLOR_STRENGTH,
  MOUSE_POSITION_LERP,
  MOUSE_RADIUS,
  MOUSE_RETURN_SPEED,
  MOUSE_STRENGTH,
  NEON_COLORS,
  ORGANIC_BASE_RADIUS,
  ORGANIC_WAVE_AMPLITUDE,
  ORGANIC_WAVE_FREQUENCY,
  PARTICLE_CIRCLE_CENTER,
  PARTICLE_CIRCLE_RADIUS,
  PARTICLE_COLOR_DARK,
  PARTICLE_COLOR_LIGHT,
  PARTICLE_HOVER_SIZE,
  PARTICLE_SIZE,
  PARTICLE_SIZE_MOBILE,
  POINT_COUNT,
  ROTATION_SPEED,
  ROTATION_X_AMOUNT,
  ROTATION_X_SPEED,
  ROTATION_Z_AMOUNT,
  ROTATION_Z_SPEED,
  SHAPE_COUNT,
  SPHERE_PHI_AMPLITUDE,
  SPHERE_PHI_FREQUENCY,
  SPHERE_RADIUS,
  SPHERE_THETA_AMPLITUDE,
  SPHERE_THETA_FREQUENCY,
  STAR_BASE_RADIUS,
  STAR_SPIKE_COUNT,
  STAR_SPIKE_RADIUS,
  STAR_SPIKE_SHARPNESS,
  TORUS_KNOT_DEPTH_SCALE,
  TORUS_KNOT_P,
  TORUS_KNOT_Q,
  TORUS_KNOT_RADIUS,
  TORUS_KNOT_SCALE,
  TORUS_KNOT_TUBE,
} from "./Globe.constants";

import styles from "./Globe.module.scss";

interface GlobeMeshProps {
  size: number;
}

const createShapes = () => {
  const shapes = Array.from(
    { length: SHAPE_COUNT },
    () => new Float32Array(POINT_COUNT * 3),
  );

  for (let i = 0; i < POINT_COUNT; i += 1) {
    const index = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const sinPhi = Math.sin(phi);
    const x = sinPhi * Math.cos(theta);
    const y = sinPhi * Math.sin(theta);
    const z = Math.cos(phi);

    // Icosphere
    const sphereRadius =
      SPHERE_RADIUS +
      Math.sin(theta * SPHERE_THETA_FREQUENCY) * SPHERE_THETA_AMPLITUDE +
      Math.sin(phi * SPHERE_PHI_FREQUENCY) * SPHERE_PHI_AMPLITUDE;

    shapes[0][index] = x * sphereRadius;
    shapes[0][index + 1] = y * sphereRadius;
    shapes[0][index + 2] = z * sphereRadius;

    // Torus knot
    const u = theta;

    const knotX =
      (TORUS_KNOT_RADIUS + TORUS_KNOT_TUBE * Math.cos(TORUS_KNOT_Q * u)) *
      Math.cos(TORUS_KNOT_P * u);

    const knotY =
      (TORUS_KNOT_RADIUS + TORUS_KNOT_TUBE * Math.cos(TORUS_KNOT_Q * u)) *
      Math.sin(TORUS_KNOT_P * u);

    const knotZ = TORUS_KNOT_TUBE * Math.sin(TORUS_KNOT_Q * u);

    const knotScale = TORUS_KNOT_SCALE + (z + 1) * TORUS_KNOT_DEPTH_SCALE;

    shapes[1][index] = knotX * knotScale;
    shapes[1][index + 1] = knotY * knotScale;
    shapes[1][index + 2] = knotZ * knotScale;

    // Diamond
    const diamond = Math.abs(x) + Math.abs(y) + Math.abs(z);
    const diamondScale = DIAMOND_RADIUS / Math.max(diamond, MIN_DIAMOND_SCALE);

    shapes[2][index] = x * diamondScale;
    shapes[2][index + 1] = y * diamondScale;
    shapes[2][index + 2] = z * diamondScale;

    // Helix
    const helixAngle = theta * HELIX_TURNS;
    const helixHeight = (y + 1) * HELIX_HEIGHT - HELIX_HEIGHT / 2;

    shapes[3][index] = Math.cos(helixAngle) * HELIX_RADIUS;
    shapes[3][index + 1] = helixHeight;
    shapes[3][index + 2] = Math.sin(helixAngle) * HELIX_RADIUS;

    // Klein-style surface
    const kleinU = theta * KLEIN_U_MULTIPLIER;
    const kleinV = phi;

    const kleinX =
      (KLEIN_RADIUS +
        Math.cos(kleinU / 2) * Math.sin(kleinV) -
        Math.sin(kleinU / 2) * Math.sin(2 * kleinV)) *
      Math.cos(kleinU);

    const kleinY =
      (KLEIN_RADIUS +
        Math.cos(kleinU / 2) * Math.sin(kleinV) -
        Math.sin(kleinU / 2) * Math.sin(2 * kleinV)) *
      Math.sin(kleinU);

    const kleinZ =
      Math.cos(kleinU / 2) * Math.sin(kleinV) +
      Math.sin(kleinU / 2) * Math.sin(2 * kleinV);

    shapes[4][index] = kleinX * KLEIN_SCALE_X;
    shapes[4][index + 1] = kleinY * KLEIN_SCALE_Y;
    shapes[4][index + 2] = kleinZ * KLEIN_SCALE_Z;

    // Spiky star
    const spike =
      STAR_BASE_RADIUS +
      Math.pow(
        Math.abs(Math.sin(theta * STAR_SPIKE_COUNT)),
        STAR_SPIKE_SHARPNESS,
      ) *
        STAR_SPIKE_RADIUS;

    shapes[5][index] = x * spike;
    shapes[5][index + 1] = y * spike;
    shapes[5][index + 2] = z * spike;

    // Organic form
    const wave =
      Math.sin(x * ORGANIC_WAVE_FREQUENCY) *
      Math.cos(y * ORGANIC_WAVE_FREQUENCY) *
      Math.sin(z * ORGANIC_WAVE_FREQUENCY);

    const organicScale = ORGANIC_BASE_RADIUS + wave * ORGANIC_WAVE_AMPLITUDE;

    shapes[6][index] = x * organicScale;
    shapes[6][index + 1] = y * organicScale;
    shapes[6][index + 2] = z * organicScale;
  }

  return shapes;
};

const easeInOut = (value: number) => value * value * (3 - 2 * value);

const GlobeMesh = ({ size }: GlobeMeshProps) => {
  const pointsRef = useRef<Points>(null);
  const currentShape = useRef(0);
  const progress = useRef(0);
  const rotationTime = useRef(0);

  const { isMobile } = useBreakpoints();
  const { camera, pointer, raycaster } = useThree();
  const { theme } = useTheme();

  const baseColor = useMemo(
    () =>
      new THREE.Color(
        theme === "dark" ? PARTICLE_COLOR_LIGHT : PARTICLE_COLOR_DARK,
      ),
    [theme],
  );

  const mouseWorld = useRef(new THREE.Vector3());
  const mouseLocal = useRef(new THREE.Vector3());
  const mouseTarget = useRef(new THREE.Vector3());
  const mousePlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    [],
  );
  const mouseActive = useRef(false);

  const shapes = useMemo(() => createShapes(), []);

  const neonColors = useMemo(
    () => NEON_COLORS.map((color) => new THREE.Color(color)),
    [],
  );

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(shapes[0].slice(), 3),
    );

    const colors = new Float32Array(POINT_COUNT * 3);

    for (let i = 0; i < POINT_COUNT; i += 1) {
      const index = i * 3;

      colors[index] = baseColor.r;
      colors[index + 1] = baseColor.g;
      colors[index + 2] = baseColor.b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const sizes = new Float32Array(POINT_COUNT);
    const baseSize = isMobile ? PARTICLE_SIZE_MOBILE : PARTICLE_SIZE;

    sizes.fill(baseSize);

    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    return geometry;
  }, [shapes, isMobile, baseColor]);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    rotationTime.current += delta;

    const time = rotationTime.current;

    // Continuous rotation
    pointsRef.current.rotation.y = time * ROTATION_SPEED;

    // Secondary rotation
    pointsRef.current.rotation.x =
      Math.sin(time * ROTATION_X_SPEED) * ROTATION_X_AMOUNT;

    pointsRef.current.rotation.z =
      Math.cos(time * ROTATION_Z_SPEED) * ROTATION_Z_AMOUNT;

    // Morph progression
    progress.current += delta * MORPH_SPEED;

    if (progress.current >= 1) {
      progress.current = 0;
      currentShape.current = (currentShape.current + 1) % SHAPE_COUNT;
    }

    const currentIndex = currentShape.current;
    const nextIndex = (currentIndex + 1) % SHAPE_COUNT;
    const current = shapes[currentIndex];
    const next = shapes[nextIndex];
    const eased = easeInOut(progress.current);

    const position = pointsRef.current.geometry.attributes.position;
    const color = pointsRef.current.geometry.attributes.color;
    const particleSize = pointsRef.current.geometry.attributes.size;

    // Mouse interaction is desktop only
    if (!isMobile && mouseActive.current) {
      raycaster.setFromCamera(pointer, camera);
      raycaster.ray.intersectPlane(mousePlane, mouseWorld.current);

      mouseTarget.current.copy(mouseWorld.current);
      pointsRef.current.worldToLocal(mouseTarget.current);

      mouseLocal.current.lerp(mouseTarget.current, MOUSE_POSITION_LERP);
    }

    for (let i = 0; i < position.count; i += 1) {
      const index = i * 3;

      const baseX = current[index] + (next[index] - current[index]) * eased;
      const baseY =
        current[index + 1] + (next[index + 1] - current[index + 1]) * eased;
      const baseZ =
        current[index + 2] + (next[index + 2] - current[index + 2]) * eased;

      let finalX = baseX;
      let finalY = baseY;
      let finalZ = baseZ;

      // Mobile has no interaction or hover
      if (isMobile) {
        position.array[index] = baseX;
        position.array[index + 1] = baseY;
        position.array[index + 2] = baseZ;

        color.array[index] = baseColor.r;
        color.array[index + 1] = baseColor.g;
        color.array[index + 2] = baseColor.b;

        particleSize.array[i] = PARTICLE_SIZE_MOBILE;

        continue;
      }

      let colorStrength = 0;

      if (mouseActive.current) {
        const dx = baseX - mouseLocal.current.x;
        const dy = baseY - mouseLocal.current.y;
        const dz = baseZ - mouseLocal.current.z;

        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Particle repulsion
        if (distance < MOUSE_RADIUS) {
          const influence = 1 - distance / MOUSE_RADIUS;
          const safeDistance = Math.max(distance, MIN_MOUSE_DISTANCE);
          const push = influence * MOUSE_STRENGTH;

          finalX += (dx / safeDistance) * push;
          finalY += (dy / safeDistance) * push;
          finalZ += (dz / safeDistance) * push;
        }

        // Neon hover
        if (distance < MOUSE_COLOR_RADIUS) {
          const influence = 1 - distance / MOUSE_COLOR_RADIUS;
          colorStrength = influence * influence * MOUSE_COLOR_STRENGTH;
        }
      }

      position.array[index] = finalX;
      position.array[index + 1] = finalY;
      position.array[index + 2] = finalZ;

      // Neon color
      const neonColor = neonColors[i % neonColors.length];

      color.array[index] = THREE.MathUtils.lerp(
        color.array[index],
        neonColor.r,
        colorStrength,
      );

      color.array[index + 1] = THREE.MathUtils.lerp(
        color.array[index + 1],
        neonColor.g,
        colorStrength,
      );

      color.array[index + 2] = THREE.MathUtils.lerp(
        color.array[index + 2],
        neonColor.b,
        colorStrength,
      );

      // Desktop particle size
      const targetSize =
        colorStrength > 0 ? PARTICLE_HOVER_SIZE : PARTICLE_SIZE;

      particleSize.array[i] = THREE.MathUtils.lerp(
        particleSize.array[i],
        targetSize,
        colorStrength > 0 ? MOUSE_POSITION_LERP : MOUSE_RETURN_SPEED,
      );

      // Return color to base
      if (colorStrength === 0) {
        color.array[index] = THREE.MathUtils.lerp(
          color.array[index],
          baseColor.r,
          MOUSE_RETURN_SPEED,
        );

        color.array[index + 1] = THREE.MathUtils.lerp(
          color.array[index + 1],
          baseColor.g,
          MOUSE_RETURN_SPEED,
        );

        color.array[index + 2] = THREE.MathUtils.lerp(
          color.array[index + 2],
          baseColor.b,
          MOUSE_RETURN_SPEED,
        );
      }
    }

    position.needsUpdate = true;
    color.needsUpdate = !isMobile;
    particleSize.needsUpdate = true;
  });

  const shaderUniforms = useMemo(
    () => ({
      uPixelRatio: {
        value: Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO),
      },
    }),
    [],
  );

  return (
    <>
      <points ref={pointsRef} geometry={geometry} scale={size}>
        <shaderMaterial
          vertexColors
          transparent
          depthWrite={false}
          uniforms={shaderUniforms}
          vertexShader={`
            attribute float size;
            varying vec3 vColor;
            uniform float uPixelRatio;

            void main() {
              vColor = color;

              vec4 mvPosition =
                modelViewMatrix *
                vec4(position, 1.0);

              gl_PointSize =
                size *
                uPixelRatio;

              gl_Position =
                projectionMatrix *
                mvPosition;
            }
          `}
          fragmentShader={`
            varying vec3 vColor;

            void main() {
              vec2 point =
                gl_PointCoord -
                vec2(${PARTICLE_CIRCLE_CENTER});

              float distance =
                length(point);

              if (
                distance >
                ${PARTICLE_CIRCLE_RADIUS}
              ) {
                discard;
              }

              gl_FragColor =
                vec4(vColor, 1.0);
            }
          `}
        />
      </points>

      {!isMobile && (
        <mesh
          position={[0, 0, 0]}
          onPointerEnter={() => {
            mouseActive.current = true;
          }}
          onPointerMove={() => {
            mouseActive.current = true;
          }}
          onPointerLeave={() => {
            mouseActive.current = false;
          }}
        >
          <planeGeometry
            args={[INTERACTION_PLANE_SIZE, INTERACTION_PLANE_SIZE]}
          />

          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      )}
    </>
  );
};

const Globe = () => {
  const { isMobile } = useBreakpoints();

  return (
    <div className={styles.globe}>
      <Canvas
        camera={{
          position: [0, 0, CAMERA_Z],
          fov: CAMERA_FOV,
        }}
      >
        <GlobeMesh
          size={isMobile ? FIGURE_SCALE_MOBILE : FIGURE_SCALE_DESKTOP}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
