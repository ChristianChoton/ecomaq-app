import { Component, Input } from '@angular/core';

@Component({
  selector: 'l-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rate : any;
}
