import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {
    sidenavOpen                 : boolean = false;
    paymentSidenavOpen          : boolean = false;

    slideConfig = {
          slidesToShow: 4,
          slidesToScroll:4,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          responsive: [
             {
                breakpoint: 992,
                settings: {
                   arrows: false,
                   slidesToShow: 2,
                   slidesToScroll:1
                }
             },
             {
                breakpoint: 768,
                settings: {
                   arrows: false,
                   slidesToShow: 2,
                   slidesToScroll:2
                }
                },
             {
                breakpoint: 480,
                settings: {
                   arrows: false,
                   slidesToShow: 1,
                   slidesToScroll:1
                }
             }
          ]
    };   

    category_product_list = [
       "688cec094054641b0cc3e093", 
       "688cec3c4054641b0cc3e096", 
       "688cec444054641b0cc3e099", 
       "688cec4e4054641b0cc3e09c", 
       "688cec574054641b0cc3e09f"
    ]

    category_machinery_list = [
       "688e4b92ae6c2d1a6cbff2ef", 
       "688e4ba5ae6c2d1a6cbff2f2", 
       "688e4bb3ae6c2d1a6cbff2f5", 
       "688e4bc2ae6c2d1a6cbff2f8"
    ]
}