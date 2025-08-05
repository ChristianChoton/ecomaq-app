import { Component } from '@angular/core';
import { EmbryoService } from '../../services/Embryo.service';

@Component({
  selector: 'lfixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss']
})
export class FixedHeaderComponent {
constructor(private embryoService : EmbryoService) { }


  public toggleSidebar()
  {
    this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
  }

}
