import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Work from Office Calendar';
  // items = ["01", "02", "03", "04", "05", "06", "07"];
  day = ["M", "T", "W", "T", "F", "S", "S"];
  week: any = [];
  fulldate: any = [];
  activeLink = this.week[0];
  background: any = undefined;
  constructor(private _route: Router) {
    console.log("Array of week", this.week);
    // console.log("Array of week items", this.items);
  }

  tabClick() {
    console.log('click');
  }

  // tabChanged(event) {
  //   console.log('Selected tab label: ' + this.tabGroup._tabs.first.textLabel);
  // }

  // currentWeek() {
  //   let curr = new Date
  //   let week = []

  //   for(let i=0; i<=6; i++) {
  //     let first = curr.getDate() - curr.getDay() + i
  //     let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  //     console.log("Array of day", day);
  //     week.push(day)
  //     console.log("Array of week", week);
  //   }
  // }

  
  

  ngOnInit() {
    let userAgent = window.navigator.userAgent;
    let mobileReg = /Android|iPhone|iPad|iPod|Blackberry|Windows Phone/gi;
    if (mobileReg.test(userAgent)) {
      console.log('mobile');
      this._route.navigate(['week-calendar']);
    } else {
      console.log('desktop');
      this._route.navigate(['week-calendar']);
    }

    let curr = new Date
    let info: any = []
    // let item = []

    for(let i=1; i<=7; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      let date = new Date(curr.setDate(first)).getUTCDate()
      var newdate
      if(date < 10) newdate = "0" + date;
      // let mydate = "0" + date.getDate().slice(-2)
      // let date = day.getUTCDate();
      // console.log("Array of day", day);
      this.fulldate.push(day)
      this.week.push(newdate)
    }
    // this.week.push(info)
    console.log("Array of week", this.week);
    console.log("Array of date", this.fulldate);
  }


}
