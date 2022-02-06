import * as THREE from 'three';

export default class Lighting {
  constructor(color = 0xfefefe, intensity = 0.7, light) {
    this.light = light;
    this.color = color;
    this.intensity = intensity;
  }

  createSpotLight(x = 0, y = 0, z = 0) {
    const spotLight = new THREE.SpotLight(this.color, this.intensity);
    spotLight.position.set(x, y, z);
    this.light = spotLight;
  }

  createAmbientLight() {
    const ambientLight = new THREE.AmbientLight(this.color, this.intensity);
    this.light = ambientLight;
  }

  createPointLight(x = 0, y = 0, z = 0) {
    const pointLight = new THREE.PointLight(this.color, this.intensity);
    pointLight.position.set(x, y, z);
    this.light = pointLight;
  }
}
