import { Component, HostListener, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { finalize, interval, take, tap } from 'rxjs';
import { MenuItems } from '../core/constants/menu-items';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
   timer = 0;

   constructor(private loader : LoadingBarService, public menuItems: MenuItems, public helper: HelperService) {}

   ngOnInit() {
      this.startTimer();
      document.getElementById('html')!.classList.remove("admin-panel");
      document.getElementById('html')!.classList.add("user-end");
   }

   public startTimer() {
      this.timer = 0;
      interval(100).pipe(
      take(3),
      tap(value => { this.timer = value + 1; }),
       finalize(() => this.loader.complete()),
      ).subscribe();

      this.loader.start();
   }

   @HostListener('window:scroll', ['$event'])
   onScrollEvent($event){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop >= 200) {
           document.querySelector('app-main')!.classList.add("header-fixed");
       } else {
            document.querySelector('app-main')!.classList.remove("header-fixed");
       }
   }

   onActivate = (e) => window.scroll(0,0);
   
}
