'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// eslint-disable-next-line import/no-extraneous-dependencies
import * as random from 'maath/random/dist/maath-random.esm';
import CanvasLoader from './Loader';

const StarBackground = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  // const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Update every other frame
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 75;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0" style={{ zIndex: 0 }}>
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      style={{ zIndex: 0 }}
    >
      <Suspense fallback={CanvasLoader}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
