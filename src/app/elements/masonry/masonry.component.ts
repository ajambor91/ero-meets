import { Component, OnInit } from '@angular/core';

import {PhotoOnPageComponent} from "./items/photo-on-page/photo-on-page.component";
import {MasonryModule} from "../../global-modules/masonry/masonry.module";
import {MasonryOptions} from "../../global-modules/masonry/interfaces/masonry-options";
import {MasonryData} from "../../global-modules/masonry/interfaces/masonry-data";
import {AbstractDynamicContainer} from "../../global-modules/masonry/classes/abstract-dynamic-container";
@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent extends AbstractDynamicContainer implements OnInit {
  masonryItems: MasonryData[] = [
    {
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"
      }


    } ,{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"
      }


    }, {
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },{
      htmlElement: PhotoOnPageComponent,
      options: {
        title: "kobieta",
        isActive: false,
        image: "assets/img/girl1.jpg"}


    },
  ];
  constructor(private masonryModule: MasonryModule) {
    super();
  }

  ngOnInit() {

  }

}
