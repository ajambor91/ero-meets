import {MasonryOptions} from "./masonry-options";
import {Subject} from "rxjs";

export interface ClassShema {
  clientHeight: Subject<number>;
  options: MasonryOptions;
}
