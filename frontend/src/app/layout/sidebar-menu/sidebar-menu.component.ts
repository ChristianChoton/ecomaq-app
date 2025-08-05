import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmbryoService } from '../../services/Embryo.service';
import { TranslateService } from '@ngx-translate/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  animations: [
     trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
     ])
    ]
})
export class SidebarMenuComponent {
  public expanded       : boolean;
  @Input() item  : any;
  @Input() depth : number;
  @HostBinding('attr.aria-expanded') ariaExpanded;

  constructor(public router: Router, public embryoService: EmbryoService, public translate: TranslateService) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      if(item.type == 'link'){
        this.router.navigate([item.state]);
      } else {
        this.router.navigate([item.state],{ queryParams:{ category: item.queryState }});
      }
      this.embryoService.sidenavOpen = false;
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
