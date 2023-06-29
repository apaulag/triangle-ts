export class Triangle {
  constructor(...sides: number[]) {
    this.sides = sides;
  }

  get isTriangle(): boolean {
    // Side lengths should be positive numbers greater than zero*.
    const validSideCount: number = this.sides.filter((side) => side > 0).length;
    // A triangle should have exactly 3 sides of valid length.
    if (this.sides.length !== 3 || validSideCount !== 3) {
      return false;
    }
    // Inequality Test: a^2 + b^2 >= c^2 for any sides a, b, c.
    const [a, b, c] = this.sides;
    return (
      Math.pow(a, 2) + Math.pow(b, 2) >= Math.pow(c, 2) &&
      Math.pow(b, 2) + Math.pow(c, 2) >= Math.pow(a, 2) &&
      Math.pow(c, 2) + Math.pow(a, 2) >= Math.pow(b, 2)
    );
  }

  get distinctSideCount(): number {
    return new Set(this.sides).size;
  }

  get isEquilateral(): boolean {
    // An equilateral triangle has all three sides the same length.
    return this.isTriangle && this.distinctSideCount === 1;
  }

  get isIsosceles(): boolean {
    // An isosceles triangle has at least two sides the same length.
    return this.isTriangle && this.distinctSideCount <= 2;
  }

  get isScalene(): boolean {
    // A scalene triangle has all sides of different lengths.
    return this.isTriangle && this.distinctSideCount === 3;
  }
}
