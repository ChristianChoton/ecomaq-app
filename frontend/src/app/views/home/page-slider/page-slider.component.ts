import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'page-slider',
  templateUrl: './page-slider.component.html',
  styleUrls: ['./page-slider.component.scss']
})
export class PageSliderComponent implements OnChanges {
   @Input() isRTL : boolean = false;

   slideConfig : any;

   constructor() { }

   ngOnChanges() {
      this.slideConfig = {
         slidesToShow: 1,
         slidesToScroll:1,
         autoplay: true,
         autoplaySpeed: 2000,
         dots: false,
         rtl: this.isRTL,
         responsive: [
          {
             breakpoint: 768,
             settings: {
                arrows: false,
                slidesToShow: 1
             }
             },
          {
             breakpoint: 480,
             settings: {
                arrows: false,
                slidesToShow: 1
             }
          }
         ]
      };
   }
}
