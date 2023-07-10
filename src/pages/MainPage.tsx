import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Sphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Object3D>();
  const [isLarge, setIsLarge] = useState<boolean>(false);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let light: THREE.DirectionalLight;

    const init = () => {
      // Set up the scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // 흰색 배경 설정

      // Set up the camera
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 3;

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      // Add lighting
      light = new THREE.DirectionalLight(0xffffff, 60);
      light.position.set(3, 2, 2);
      scene.add(light);

      // Load the scene.gltf model
      const loader = new GLTFLoader();
      loader.load(
        'src/planet/scene.gltf',
        (gltf) => {
          const model = gltf.scene;

          if (model) {
            modelRef.current = model;
            scene.add(model);

            // Add reflective material
            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const material = new THREE.MeshPhysicalMaterial({
                  color: 'skyblue',
                  metalness: 0.99, // 조정 가능
                  roughness: 0.001, // 조정 가능
                });
                child.material = material;
              }
            });
            

            // Animation loop
            const animate = () => {
              requestAnimationFrame(animate);

              // Rotate the model
              if (model) {
                model.rotation.x += 0.02;
                model.rotation.y += 0.01;
              }

              // Change background color gradually
              const backgroundColor = new THREE.Color().lerpColors(new THREE.Color(0x000000), new THREE.Color(0xffffff), model.scale.x / 3.5);
              scene.background = backgroundColor;

              renderer.render(scene, camera);
            };

            animate();
          }
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF file:', error);
        }
      );
    };

    init();
  }, []);

  const handleModelClick = () => {
    const model = modelRef.current;

    if (model) {
      const targetScale = isLarge ? new THREE.Vector3(0.1, 0.1, 0.1) : new THREE.Vector3(1.5, 1.5, 1.5);
      const initialScale = model.scale.clone();
      const animationDuration = 1500; // 애니메이션 지속 시간 (밀리초)
      const frameRate = 70; // 프레임 속도 (프레임/초)
      const totalFrames = animationDuration / (1000 / frameRate);
      let currentFrame = 0;

      const animateScale = () => {
        if (currentFrame >= totalFrames) {
          setIsLarge(!isLarge);
          return;
        }

        const t = currentFrame / totalFrames;
        const scale = initialScale.clone().lerp(targetScale, t);

        model.scale.copy(scale);

        currentFrame++;

        requestAnimationFrame(animateScale);
      };

      animateScale();
    }
  };

  return <div ref={containerRef} style={{ marginTop: '0px', marginBottom: '0px' }} onClick={handleModelClick} />;
};

export default Sphere;
