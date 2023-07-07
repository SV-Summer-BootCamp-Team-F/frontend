import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Three = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene creation
    const scene = new THREE.Scene();

    // Size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight * 0.9 // Adjust the height by multiplying with a fraction
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(
      85,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 2.5;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 5));
    renderer.setClearColor(new THREE.Color('#ffffff'), 2); // Set background color to white
    canvasRef.current?.appendChild(renderer.domElement);

    // Resize handling
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight * 0.9; // Adjust the height by multiplying with a fraction

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Objects
    // Sphere
    const geometry = new THREE.IcosahedronGeometry(1);
    const material = new THREE.MeshStandardMaterial({ // Use MeshStandardMaterial for shadows
      color: 0x87ceeb, // Set sky blue color
      metalness: 1.6,
      roughness: 0.2,
      side: THREE.DoubleSide,
      envMapIntensity: 10,
      emissive: 'skyblue',
      emissiveIntensity: 0.9
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true; // Enable casting shadows
    sphere.receiveShadow = true; // Enable receiving shadows
    scene.add(sphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true; // Enable casting shadows
    scene.add(directionalLight);

    // Set up shadow properties for the light
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;

    // Mouse variables
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / sizes.width) * 5 - 1;
      mouse.y = -(event.clientY / sizes.height) * 5 + 1;
      const rotationSpeed = 0.06;
      targetRotation.x = mouse.x * rotationSpeed;
      targetRotation.y = mouse.y * rotationSpeed;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Spin
      sphere.rotation.x += 0.03;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up event listeners
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={canvasRef} style={{ marginTop: '-630px', marginBottom: '0px' }}></div>; // Adjust marginTop value as desired
};

export default Three;
