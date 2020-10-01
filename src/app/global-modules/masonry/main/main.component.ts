import {
  Component,
  ComponentFactoryResolver, EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PhotoOnPageComponent} from "../../../elements/masonry/items/photo-on-page/photo-on-page.component";
import {MasonryData } from "../interfaces/masonry-data";
import {MasonryOptions} from "../interfaces/masonry-options";
import {ItemMasonry} from "../interfaces/item-masonry";
import {ClassShema} from "../interfaces/class-shema";

@Component({
  selector: 'mansory-module',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  @ViewChild('container') layoutContainer;
  @Input() colNumber: number;
  @Input() private options: MasonryData[] = [];
  @Output() eventEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

  private colHeight: number;
  // private container: ViewContainerRef;
  colsNumber: number[] = new Array(3);
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit() {
    this.count();
  }

  private count(): void {
    const colHeigt: number[][] = [];
    this.options.forEach((res: MasonryData, i: number) => {
      const order = i % this.colNumber;
      this.colsNumber.fill(0);
      let resolvedComponent = this.resolver.resolveComponentFactory(res.htmlElement);
      const component = this.container.createComponent<ClassShema>(resolvedComponent);
      component.instance.options = res.options;
      console.log(component.instance,'chuj')
      component.instance.clientHeight.subscribe(res => {
        console.log(order,res,'res')
        this.colsNumber[order] += res;
        this.eventEmitter.emit(this.colsNumber);

        console.log('dupasdssdsadsad', this.colsNumber)
      });
    })
    // this.layoutContainer.nativeElement.style.height = Math.max(...colHeigt);


    // Array.from(container.children).forEach((child, i) => {
    //   const order = i % numCols;
    //   child.style.order = order;
    //   colHeights[order] += parseFloat(child.clientHeight);
    // })
    // container.style.height = Math.max(...colHeights) + 'px';
  }

}
