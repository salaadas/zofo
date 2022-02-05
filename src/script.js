import './style.css';
import * as THREE from 'three';
import MyScene from './MyScene';

const test = new MyScene();
test.init();
test.animate();

const sunGeometry = new THREE.SphereGeometry(8, 32, 64);
const sunTexture = new THREE.TextureLoader().load('sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});
/**
 * Mesh is like an object of things:
 * It needs:
 *  - a geometry (aka shape/body)
 *  - a material (aka skin)
 */
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

/**
 * We use Group to pack together similar objects/mesh
 */
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);

test.scene.add(solarSystem);

const spinning = () => {
  sunMesh.rotation.y += 0.01;
  window.requestAnimationFrame(spinning);
};
window.requestAnimationFrame(spinning);
