import * as THREE from 'three';

export default class Tictactoe {
  constructor() {
    this.lineSize = {
      depth: 8,
      width: 8,
      height: 64,
    };
    this.lineOffset = 12;
    this.board = new THREE.Group();
    this.lines = new THREE.Group();
    this._createBoard();
    this.board.add(this.lines);
  }

  _createBoard() {
    const left = this._createLine(
      this.lineSize.width,
      this.lineSize.height,
      this.lineSize.depth,
      -this.lineOffset,
      0
    );
    const right = this._createLine(
      this.lineSize.width,
      this.lineSize.height,
      this.lineSize.depth,
      this.lineOffset,
      0
    );

    const up = this._createLine(
      this.lineSize.height,
      this.lineSize.width,
      this.lineSize.depth,
      0,
      this.lineOffset
    );
    const down = this._createLine(
      this.lineSize.height,
      this.lineSize.width,
      this.lineSize.depth,
      0,
      -this.lineOffset
    );
    this.lines.add(left, right, up, down);
  }

  _createLine(width, height, depth, offsetX, offsetY) {
    const lineGeometry = new THREE.BoxGeometry(width, height, depth);
    const lineMaterial = new THREE.MeshNormalMaterial();
    const newLine = new THREE.Mesh(lineGeometry, lineMaterial);
    newLine.position.setX(offsetX);
    newLine.position.setY(offsetY);
    return newLine;
  }
}
