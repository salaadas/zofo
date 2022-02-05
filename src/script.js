import './style.css';
import * as THREE from 'three';
import MyScene from './MyScene';
import Planet from './Planet';

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

const mecury = new Planet(2, 16, 'mecury.jpg');
const mecuryMesh = mecury.mesh();
const mecurySystem = new THREE.Group();
mecurySystem.add(mecuryMesh);

const earth = new Planet(4, 48, 'earth.jpg');
const earthMesh = earth.mesh();
const earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

solarSystem.add(sunMesh, mecurySystem, earthSystem);

test.scene.add(solarSystem);

const EARTH_YEAR = 2 * Math.PI * Math.pow(1 / 60, 2);
const spinning = () => {
  sunMesh.rotation.y += 0.001;
  mecurySystem.rotation.y += EARTH_YEAR * 4;
  earthSystem.rotation.y += EARTH_YEAR;
  window.requestAnimationFrame(spinning);
};
window.requestAnimationFrame(spinning);
