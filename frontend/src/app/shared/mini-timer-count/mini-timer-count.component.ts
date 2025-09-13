import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { interval as observableInterval } from "rxjs";

@Component({
  selector: 'mini-timer-count',
  templateUrl: './mini-timer-count.component.html',
  styleUrls: ['./mini-timer-count.component.scss']
})
export class MiniTimerCountComponent implements OnInit, OnDestroy {
  @Input() dateTime: any;
  @Input() message: string = '';
  @Input() showCalendar: boolean = false;


  private future: Date | undefined;
  private diff: number = 0;
  private $counter: Observable<number> | undefined;
  private subscription: Subscription | undefined;

  hours: any;
  minutes: any;
  seconds: any;

  day: any;
  dayName: any;
  month: any;
  year: any;

  days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado']

  constructor() {}

  dhms(t: any) {
    if (t && t > 0) {
      let days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;

      if (hours < 10) {
        this.hours = "0" + hours;
      } else {
        this.hours = hours;
      }

      if (minutes < 10) {
        this.minutes = "0" + minutes;
      } else {
        this.minutes = minutes;
      }

      if (seconds < 10) {
        this.seconds = "0" + seconds;
      } else {
        this.seconds = seconds;
      }
    } else {
      this.hours = "00";
      this.minutes = "00";
      this.seconds = "00";
      if(this.subscription)
        this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    if (this.dateTime) {
      this.future = this.dateTime;
      this.$counter = observableInterval(1000).pipe(
        map((x) => {
          this.diff = Math.floor(
            (this.future!.getTime() - new Date().getTime()) / 1000
          );
          return x;
        })
      );

      this.day = this.future!.getDate()
      this.dayName = this.days[this.future!.getDay()]
      this.month = this.future!.toLocaleString('default', { month: 'long' })
      this.year = this.future!.getFullYear()

      this.subscription = this.$counter.subscribe((x) => this.dhms(this.diff));
    }
  }

  ngOnDestroy(): void {7
    if(this.subscription) {
      this.subscription.unsubscribe();
    }    
  }
}
