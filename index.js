import * as THREE from './includes/build/three.module.js';

const createCubeGeometry = (width, height, depth) => {
  return new THREE.BoxGeometry(width, height, depth);
};

const initializeShape = (scene, geometry, color, x = 0) => {
  const material = new THREE.MeshPhongMaterial({ color });

  const shape = new THREE.Mesh(geometry, material);
  scene.add(shape);

  shape.position.x = x;

  return shape;
};

const animateSpin = (shape, renderer, scene, camera) => {
  function render(time) {
    time *= 0.001; // miliseconds / 1000 = seconds

    shape.rotation.x = time;
    shape.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};

// main
(() => {
  const canvas = document.getElementById('c');
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const geometry = createCubeGeometry(1, 1, 1);
  const cubes = [
    initializeShape(scene, geometry, 'lightcoral'),
    initializeShape(scene, geometry, 'orange', -2),
    initializeShape(scene, geometry, 'lightblue', 2),
  ];

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(-1, 2, 4);
  scene.add(light);

  cubes.forEach((cube) => animateSpin(cube, renderer, scene, camera));
})();
