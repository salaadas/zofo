import './style.css';
import * as THREE from 'three';
import MyScene from './libs/MyScene';
import Lighting from './libs/Lighting';
import Tictactoe from './examples/Tictactoe';

const test = new MyScene();
test.init();
test.controls.autoRotate = true;
test.animate();

const tictactoe = new Tictactoe();
test.scene.add(tictactoe.board);

const scaleup = (line) => {
  if (line.scale.x < 1) {
    line.scale.x += 0.04;
  }
  if (line.scale.y < 1) {
    line.scale.y += 0.04;
  }
  if (line.scale.z < 1) {
    line.scale.z += 0.04;
  }
};
const animate = () => {
  tictactoe.lines.children.forEach(scaleup);
  window.requestAnimationFrame(animate);
};
animate();

/**
 * Lighting:
 * - Ambient light: lighting for the whole scenery
 * - Point light:   lighting which lits in a cone direction
 * - Spot light:    lighting which lits from a point to all direction
 */

// const ambientLight = new Lighting(0xfefefe, 0.7);
// ambientLight.createAmbientLight();
// ambientLight.light.castShadow = false;

// const spotLight = new Lighting(0xffffff, 0.6);
// spotLight.createSpotLight(10, 80, 10);

// test.scene.add(ambientLight.light);
// test.scene.add(spotLight.light);
