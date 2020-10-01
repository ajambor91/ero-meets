import {ViewChild} from "@angular/core";

export abstract class AbstractDynamicContainer {
  @ViewChild('layoutContainer') layoutContainer;
  colHeights: number[] = [];
  get height(): number {
    return this._height;
  }
  set setHeight(value: number){
    this._height = value;
  }

  private _height: number;


  setParams(value: number[]): void {
    this.colHeights = value;
    this.createLayout();
    console.log('setParams',value)
  }

  private createLayout(): void {
    this.layoutContainer.nativeElement.style.height = this.joinArrayAndReturnsPixels();
    console.log(this.layoutContainer,'lay cont', this.height);
  }

  private joinArrayAndReturnsPixels(): string {
    return `${Math.max(...this.colHeights)}px`
  }

}
