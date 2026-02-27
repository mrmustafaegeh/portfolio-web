/// <reference types="@react-three/fiber" />
import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

const ParticlesSystem = ({ isMobile, prefersReduced }: { isMobile: boolean, prefersReduced: boolean }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? 500 : 3000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.5); // blues/purples
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current || prefersReduced) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const LiquidPlane = ({ darkMode, prefersReduced }: { darkMode: boolean, prefersReduced: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(darkMode ? '#0f172a' : '#f8fafc') }
  }), [darkMode]);

  useEffect(() => {
    uniforms.uColor.value.set(darkMode ? '#0f172a' : '#f8fafc');
  }, [darkMode, uniforms]);

  useFrame((state) => {
    if (uniforms.uTime && !prefersReduced) {
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <planeGeometry args={[150, 150, 64, 64]} />
      <shaderMaterial
        wireframe={false}
        transparent
        opacity={darkMode ? 0.3 : 0.8}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 0.05 + uTime * 0.5) * 3.0;
            pos.z += cos(pos.y * 0.05 + uTime * 0.4) * 3.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float alpha = 1.0 - smoothstep(0.0, 0.5, length(vUv - 0.5));
            gl_FragColor = vec4(uColor, alpha * 0.6);
          }
        `}
      />
    </mesh>
  );
};

const HeroGeometries = ({ isMobile, prefersReduced }: { isMobile: boolean, prefersReduced: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 15 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      type: Math.floor(Math.random() * 3),
      scale: Math.random() * 0.5 + 0.5
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || prefersReduced) return;
    
    // Slight leaning toward cursor using lerp
    const targetX = (mouse.x * viewport.width) / 10;
    const targetY = (mouse.y * viewport.height) / 10;
    
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.02);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.02);

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x += delta * 0.2 * (i % 2 === 0 ? 1 : -1);
      child.rotation.y += delta * 0.3;
      child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.01;
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => {
        let Geometry;
        if (shape.type === 0) Geometry = <icosahedronGeometry args={[1, 0]} />;
        else if (shape.type === 1) Geometry = <torusGeometry args={[0.8, 0.3, 16, 32]} />;
        else Geometry = <octahedronGeometry args={[1, 0]} />;

        return (
          <mesh key={i} position={shape.position} rotation={shape.rotation} scale={shape.scale * (isMobile ? 0.6 : 1)}>
            {Geometry}
            <meshStandardMaterial color={0x00f0ff} wireframe transparent opacity={0.3} emissive={0x00ffff} emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
};

const ThreeScene = ({ darkMode, isMobile, prefersReduced }: { darkMode: boolean, isMobile: boolean, prefersReduced: boolean }) => {
  const { camera } = useThree();
  const sceneGroupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!sceneGroupRef.current) return;
    
    // Scroll driven drift for particles + scene upward
    const st1 = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      animation: gsap.to(sceneGroupRef.current.position, {
        y: 15,
        ease: "none"
      })
    });
    
    // Zoom in camera on hero scroll
    const st2 = ScrollTrigger.create({
      trigger: "body", // Wait, hero trigger won't work perfectly globally unless we pin or specify hero height
      start: "top top",
      end: "+=1000",
      scrub: 1,
      animation: gsap.to(camera.position, {
        z: 8, // zoom in
        ease: "power1.inOut"
      })
    });
    
    return () => {
      st1.kill();
      st2.kill();
    };
  }, [camera]);

  return (
    <group ref={sceneGroupRef}>
      <ParticlesSystem isMobile={isMobile} prefersReduced={prefersReduced} />
      <LiquidPlane darkMode={darkMode} prefersReduced={prefersReduced} />
      <HeroGeometries isMobile={isMobile} prefersReduced={prefersReduced} />
      <ambientLight intensity={darkMode ? 0.5 : 1} />
      <directionalLight position={[10, 10, 5]} intensity={darkMode ? 1 : 1.5} />
    </group>
  );
};

const AnimatedBackground = ({ darkMode }: AnimatedBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showThree = !isMobile && !prefersReduced;

  return (
    <div className="fixed inset-0 -z-10 bg-transparent overflow-hidden pointer-events-none">
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          darkMode ? "bg-slate-950" : "bg-slate-50"
        }`} 
      />

      {showThree ? (
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }} className="absolute inset-0 z-0">
          <ThreeScene darkMode={darkMode} isMobile={isMobile} prefersReduced={prefersReduced} />
        </Canvas>
      ) : (
        <div className="absolute inset-0 overflow-hidden opacity-30 z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] ${
            darkMode ? "bg-blue-900/40" : "bg-blue-400/30"
          }`} />
          <div className={`absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] ${
            darkMode ? "bg-purple-900/40" : "bg-purple-400/30"
          }`} />
        </div>
      )}
      <div 
        className={`absolute inset-0 z-10 opacity-[0.05] pointer-events-none ${
          darkMode ? "invert" : ""
        }`}
        style={{
          backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)',
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
