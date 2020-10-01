import {ClassShema} from "../interfaces/class-shema";
import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef, Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import {MasonryOptions} from "../interfaces/masonry-options";
import {Subject} from "rxjs";
export abstract class AbstractDynamicComponent implements ClassShema, AfterViewInit{
  @Input() options: MasonryOptions;
  @Input() clientHeight: Subject<number> = new Subject<number>();
  @ViewChild('card',{read: ElementRef}) card;
  constructor(private cdRef: ChangeDetectorRef) {
  }
  countChildHeight(): void {
    this.clientHeight.next(this.card.clientHeight);
    console.log(this.card.nativeElement.clientHeight,'native el client')
  }

  ngAfterViewInit(): void {
      this.cdRef.detectChanges();
      console.log(this.card.nativeElement.clientHeight,'cl')

  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewChecked(): void {

    // this.card.nativeElement.id = 'i';
    //
    // console.log(document.getElementById('id').clientHeight,'get by id');
    // this.card.nativeElement.style.backgroundColor = 'red';
    // this.countChildHeight();
  }
}
