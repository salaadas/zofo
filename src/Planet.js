import * as THREE from 'three';

export default class Planet {
  constructor(radius, xPos, texture) {
    this.radius = radius;
    this.xPos = xPos;
    this.texture = texture;
  }

  mesh() {
    if (this._mesh === undefined || this._mesh === null) {
      const geometry = new THREE.SphereGeometry(this.radius, 32, 64);
      const texture = new THREE.TextureLoader().load(this.texture);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      this._mesh = new THREE.Mesh(geometry, material);
      this._mesh.position.x += this.xPos;
    }

    return this._mesh;
  }
}
