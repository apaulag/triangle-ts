export class Triangle {
  constructor(...sides: number[]) {
    const nonZeroSideCount: number = sides.filter((side) => side !== 0).length;
    let isTriangle: boolean = sides.length === 3 && nonZeroSideCount === 3;
    const distinctSideCount: number = new Set(sides).size;
    // Inequality Test: a^2 + b^2 >= c^2
    if (
      Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2) ||
      Math.pow(sides[1], 2) + Math.pow(sides[2], 2) < Math.pow(sides[0], 2) ||
      Math.pow(sides[2], 2) + Math.pow(sides[0], 2) < Math.pow(sides[1], 2)
    ) {
      isTriangle = false;
    }

    this.isEquilateral = isTriangle && distinctSideCount === 1;
    this.isIsosceles = isTriangle && distinctSideCount <= 2;
    this.isScalene = isTriangle && distinctSideCount === 3;
  }
}
