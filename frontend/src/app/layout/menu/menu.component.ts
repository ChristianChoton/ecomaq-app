import { Component } from '@angular/core';
import { MenuItems } from '../../core/constants/menu-items';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lmenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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
export class MenuComponent {
expanded       : boolean;

   constructor(public menuItems: MenuItems,public router: Router) {}

   public onItemSelected(item: any) {
      if (item.children && item.children.length) {
         this.expanded = !this.expanded;
      }
    }


   public redirectTo(subchildState){
      console.log(subchildState)
      this.router.navigate([subchildState.state],{ queryParams:{ category: subchildState.id }});
   }
}
