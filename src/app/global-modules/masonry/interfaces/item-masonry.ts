import {MasonryOptions} from "./masonry-options";
import {Type} from "@angular/core";

export interface ItemMasonry extends Type<{}>{
  options?: MasonryOptions;
}
