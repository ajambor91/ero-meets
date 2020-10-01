import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MasonryOptions} from "../../../../global-modules/masonry/interfaces/masonry-options";
import {MasonryData} from "../../../../global-modules/masonry/interfaces/masonry-data";
import {ItemMasonry} from "../../../../global-modules/masonry/interfaces/item-masonry";
import {ClassShema} from "../../../../global-modules/masonry/interfaces/class-shema";
import {Subject} from "rxjs";
import {AbstractDynamicComponent} from "../../../../global-modules/masonry/classes/abstract-dynamic-component";

@Component({
  selector: 'app-photo-on-page',
  templateUrl: './photo-on-page.component.html',
  styleUrls: ['./photo-on-page.component.scss']
})
export class PhotoOnPageComponent extends AbstractDynamicComponent implements AfterViewInit{

}
