class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getTheArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const rect = new Rectangle(10, 5);
console.log("Width:", rect.getWidth());
console.log("Height:", rect.getHeight());
console.log("Diện tích:", rect.getTheArea());
console.log("Chu vi:", rect.getPerimeter());

rect.setWidth(20);
rect.setHeight(15);
console.log("Updated Width:", rect.getWidth());
console.log("Updated Height:", rect.getHeight());
console.log("Updated Diện tích:", rect.getTheArea());
console.log("Updated Chu vi:", rect.getPerimeter());