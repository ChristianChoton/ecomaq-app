import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HelperService } from '../../services/helper.service';


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
  public expanded       : boolean = false;
  @Input() item  : any;
  @Input() depth : number | undefined;
  @HostBinding('attr.aria-expanded') ariaExpanded: any;

  constructor(public router: Router, public helper: HelperService) {
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
      this.helper.sidenavOpen = false;
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
