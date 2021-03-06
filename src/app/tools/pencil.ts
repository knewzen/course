import { AbstractTool } from './tool';

export class Pencil extends AbstractTool {

  down(x: number, y: number): void {
    const context = this.canvas.getContext('2d');
    context.beginPath();
    context.moveTo(x, y);
    this.draw(x, y);
  }

  move(x: number, y: number): void {
    this.draw(x, y);
  }

  up(x: number, y: number): void {
    // no-op
  }

  private draw(x: number, y: number): void {
    const context = this.canvas.getContext('2d');
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = this.tool.size;
    context.strokeStyle = this.tool.color;
    context.lineTo(x, y);
    context.stroke();
  }

}
