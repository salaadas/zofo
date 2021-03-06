import * as THREE from 'three';

export default class Tictactoe {
  constructor() {
    this.lineSize = {
      depth: 4,
      width: 4,
      height: 64,
    };
    this.lineOffset = 12;

    this.board = new THREE.Group();
    this.lines = new THREE.Group();
    this.hiddenTiles = new THREE.Group();

    this._createBoard();
    this.board.add(this.lines);
    this.board.add(this.hiddenTiles);
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

    this.hiddenTiles.add(this._createHiddenTile(-24, 24));
    this.hiddenTiles.add(this._createHiddenTile(0, 24));
    this.hiddenTiles.add(this._createHiddenTile(24, 24));

    this.hiddenTiles.add(this._createHiddenTile(-24, 0));
    this.hiddenTiles.add(this._createHiddenTile(0, 0));
    this.hiddenTiles.add(this._createHiddenTile(24, 0));

    this.hiddenTiles.add(this._createHiddenTile(-24, -24));
    this.hiddenTiles.add(this._createHiddenTile(0, -24));
    this.hiddenTiles.add(this._createHiddenTile(24, -24));
  }

  _createHiddenTile(offsetX, offsetY) {
    const tileGeometry = new THREE.BoxGeometry(12, 12, 1);
    const tileMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const tile = new THREE.Mesh(tileGeometry, tileMaterial);
    tile.position.setX(offsetX);
    tile.position.setY(offsetY);
    return tile;
  }

  _createLine(width, height, depth, offsetX, offsetY) {
    const lineGeometry = new THREE.BoxGeometry(width, height, depth);
    const lineMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const newLine = new THREE.Mesh(lineGeometry, lineMaterial);
    newLine.position.setX(offsetX);
    newLine.position.setY(offsetY);
    newLine.scale.x = 0;
    newLine.scale.y = 0;
    newLine.scale.z = 0;
    return newLine;
  }
}
