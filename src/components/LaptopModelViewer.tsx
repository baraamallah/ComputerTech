
"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader2 } from 'lucide-react';

const LaptopModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50, // FOV
      currentMount.clientWidth / currentMount.clientHeight, // Aspect Ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    // Initial camera position, will be adjusted after model loads
    camera.position.set(0, 1, 5); 

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 0.5; // Allow closer zoom
    controls.maxDistance = 30;  // Increased maxDistance for further zoom out
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      '/models/laptop.glb',
      (gltf) => {
        const model = gltf.scene;
        
        // Auto-centering and scaling
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Adjust model position to be centered at origin
        model.position.x += (model.position.x - center.x);
        model.position.y += (model.position.y - center.y);
        model.position.z += (model.position.z - center.z);
        
        // Calculate scale factor to fit model in view
        const maxSize = Math.max(size.x, size.y, size.z);
        const fitHeightDistance = maxSize / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
        const fitWidthDistance = fitHeightDistance / camera.aspect;
        const distance = Math.max(fitHeightDistance, fitWidthDistance);
        
        // Adjust camera position
        camera.position.copy(center); // Start at model center
        camera.position.z += distance * 1.6; // Move camera back (1.6 provides a comfortable margin)
        camera.lookAt(center);
        
        // Update controls target
        controls.target.copy(center);
        
        scene.add(model);
        setIsLoading(false);
      },
      undefined, 
      (errorEvent) => { 
        console.error('An error happened while loading the model:', errorEvent);
        setError('Failed to load 3D model. Please ensure "laptop.glb" is in public/models/.');
        setIsLoading(false);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        if (currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      // Dispose Three.js objects
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border bg-card shadow-inner">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Loading 3D Model...</p>
        </div>
      )}
      {error && !isLoading && (
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/10 p-4 z-10">
          <p className="text-destructive text-center font-medium">{error}</p>
          <div className="mt-4 w-32 h-32 bg-muted rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box-select text-muted-foreground"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M14 3h1"/><path d="M21 9v1"/><path d="M21 14v1"/><path d="M19 21h-1"/><path d="M14 21h-1"/><path d="M5 19v-1"/><path d="M5 14v-1"/><path d="M3 9v1"/><path d="M3 14v1"/></svg>
          </div>
        </div>
      )}
      <div ref={mountRef} className="w-full h-full" style={{ opacity: isLoading || error ? 0.2 : 1 }} />
    </div>
  );
};

export default LaptopModelViewer;
