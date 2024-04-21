export class Triangle {
  private readonly sides: number[];
  
  constructor(...sides: number[]) {
    this.sides = sides;
  }

  public get isTriangle(): boolean {
    // Side lengths should be positive numbers greater than zero*.
    const validSideCount: number = this.sides.filter((side) => side > 0).length;
    // A triangle should have exactly 3 sides of valid length.
    if (this.sides.length !== 3 || validSideCount !== 3) {
      return false;
    }
    // Inequality Test: a + b >= c for any side length a, b, c.
    const [a, b, c] = this.sides;
    return (a + b >= c && b + c >= a && c + a >= b);
  }

  private get distinctSideCount(): number {
    return new Set(this.sides).size;
  }

  public get isEquilateral(): boolean {
    // An equilateral triangle has all three sides the same length.
    return this.isTriangle && this.distinctSideCount === 1;
  }

  public get isIsosceles(): boolean {
    // An isosceles triangle has at least two sides the same length.
    return this.isTriangle && this.distinctSideCount <= 2;
  }

  public get isScalene(): boolean {
    // A scalene triangle has all sides of different lengths.
    return this.isTriangle && this.distinctSideCount === 3;
  }
}
