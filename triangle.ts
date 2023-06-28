export class Triangle {
  constructor(...sides: number[]) {
    // Side lengths should be positive numbers greater than zero*.
    const validSideCount: number = sides.filter((side) => side > 0).length;
    // A triangle should have exactly 3 sides of valid length.
    let isTriangle: boolean = sides.length === 3 && validSideCount === 3;
    // The number of different side length determines the type of the triangle.
    const distinctSideCount: number = new Set(sides).size;

    // Inequality Test: a^2 + b^2 >= c^2 for any sides a, b, c.
    const [a, b, c] = sides;
    if (
      Math.pow(a, 2) + Math.pow(b, 2) < Math.pow(c, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) < Math.pow(a, 2) ||
      Math.pow(c, 2) + Math.pow(a, 2) < Math.pow(b, 2)
    ) {
      isTriangle = false;
    }

    // An equilateral triangle has all three sides the same length.
    this.isEquilateral = isTriangle && distinctSideCount === 1;
    // An isosceles triangle has at least two sides the same length.
    this.isIsosceles = isTriangle && distinctSideCount <= 2;
    // A scalene triangle has all sides of different lengths.
    this.isScalene = isTriangle && distinctSideCount === 3;
  }
}
