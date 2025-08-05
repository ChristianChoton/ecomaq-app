import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector:'lfooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public translate: TranslateService) {}
}
