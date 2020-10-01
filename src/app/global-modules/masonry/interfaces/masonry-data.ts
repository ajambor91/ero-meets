import {Type, ViewRef} from "@angular/core";
import {MasonryOptions} from "./masonry-options";
import {ItemMasonry} from "./item-masonry";
import {PhotoOnPageComponent} from "../../../elements/masonry/items/photo-on-page/photo-on-page.component";
import {ClassShema} from "./class-shema";

export interface MasonryData {
  htmlElement: Type<ClassShema>;
  options: MasonryOptions;


}
