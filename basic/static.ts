class Grid {
  static Origin = { x: 2, y: 5 };

  area(point: { x: number; y: number }) {
    let xPoint = point.x * Grid.Origin.x;
    let yPoint = point.y * Grid.Origin.y;
    return xPoint * yPoint;
  }
}

let grid = new Grid();
