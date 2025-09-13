import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
   @Input() heading    : string = '';
   @Input() subHeading : string = '';

   constructor() {}
}
