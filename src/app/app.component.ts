import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as moment from 'moment';

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
  // week: any = [];
  // fulldate: any = [];
  // weekdates: any = [];
  weekdates: { week: any, fulldate: any }[] = [];
  newformatdate: any= [];
  // dates: any= [];
  // newdates: any= [];
  // activeLink = this.week[0];
  // background: any = undefined;
  constructor(private _route: Router) {
    // console.log("Array of week", this.week);
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

//     const now = new Date()
// const startOfWeek = new Date(now.getDate())
// const endOfWeek = new Date(now.getDate());
// console.log("Start week date", startOfWeek);
// console.log("End week date", endOfWeek);

// let weekstartdate= moment().startOf("isoWeek").toDate();
// let startdate = weekstartdate.getDate();
// console.log("week start date from moment", startdate);
// let weekenddate= moment().endOf("isoWeek").toDate();
// let enddate = weekenddate.getDate();
// console.log("week end date from moment", enddate);

var startOfWeek = moment().startOf('isoWeek');
var endOfWeek = moment().endOf('isoWeek');
var date = startOfWeek;
var newdate;

while (date <= endOfWeek) {
  newdate = date.toDate().getDate();
   if(newdate < 10)
   newdate = "0" + newdate
   else
   newdate = newdate
   let D = new Date(date.toDate().toLocaleDateString())
   let converteddate = ((D.getDate() > 9) ? D.getDate() : ('0' + D.getDate())) + '/' + ((D.getMonth() > 8) ? (D.getMonth() + 1 ) : ('0' + (D.getMonth() + 1))) + '/' + D.getFullYear();  
  this.weekdates.push({week: newdate, fulldate: date.toDate().toLocaleDateString()});
  this.newformatdate.push(converteddate);
  date = date.clone().add(1, 'd');
}

console.log("Final Array with date formats for calendar view and Api", this.weekdates);
console.log("New date", this.newformatdate);
// this.weekdates.push({week: newdates, fulldate: dates})
// console.log(this.dates);
// console.log(this.newdates);

// this.weekdates.push({week: this.newdates, fulldate: this.dates});

// this.weekdates.push({week: this.newdates, fulldate: this.dates});
// console.log("New date", this.newformatdate);


  }
// DateTime startOfWeek = DateTime.Today.AddDays(
//   (int) CultureInfo.CurrentCulture.DateTimeFormat.FirstDayOfWeek - 
//   (int) DateTime.Today.DayOfWeek);

// string result = string.Join("," + Environment.NewLine, Enumerable
// .Range(0, 7)
// .Select(i => startOfWeek
//    .AddDays(i)
//    .ToString("dd-MMMM-yyyy")));


    // let curr = new Date
    // console.log("Date:", curr);
    // let converteddate: any = []
    // let item = []

    // for(let i=1; i<=7; i++) {
      // if(curr.getDay()!==0){
      // let first = curr.getDate() - curr.getDay() + i
      
     
      // let first =  29 - 1 + i
      // let weekstartdate= moment().startOf("isoWeek").toDate();
      // console.log("week start date from moment", weekstartdate);
      // let weekenddate= moment().endOf("isoWeek").toDate();
      // console.log("week end date from moment", weekenddate);
      // console.log("current date", curr);
      // console.log("get curr date", curr.getDate());
      // console.log("get curr day", curr.getDay());
      // console.log("get first day", first);
      // let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      // console.log("complete date of first", day);
      // console.log("get day final date", day);
      // let date = new Date(curr.setDate(first)).getUTCDate()
      // console.log("get utc date", date);
      // let D = new Date(day)
      // let converteddate = ((D.getDate() > 9) ? D.getDate() : ('0' + D.getDate())) + '/' + ((D.getMonth() > 8) ? (D.getMonth() + 1) : ('0' + (D.getMonth() + 1))) + '/' + D.getFullYear();
      // let converteddate = D.toLocaleDateString()
      // console.log("converted date", converteddate);
      // var newdate
      // if(date < 10) newdate = "0" + date;
      // else newdate = date;
      // console.log("new date", newdate);
      // let mydate = "0" + date.getDate().slice(-2)
      // let date = day.getUTCDate();
      // console.log("Array of day", day);
      // this.fulldate.push(day)
      
      // else{
      //   // let first = curr.getDate() - curr.getDay() + i - 7
      //   let first = 5
      //    - 0 + i - 7
      //   let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      // // console.log("get day final date", day);
      // let date = new Date(curr.setDate(first)).getUTCDate()
      // // console.log("get utc date", date);
      // let D = new Date(day)
      // // let converteddate = ((D.getDate() > 9) ? D.getDate() : ('0' + D.getDate())) + '/' + ((D.getMonth() > 8) ? (D.getMonth() + 1) : ('0' + (D.getMonth() + 1))) + '/' + D.getFullYear();
      // let converteddate = D.toLocaleDateString()
      // // console.log("converted date", converteddate);
      // var newdate
      // if(date < 10) newdate = "0" + date;
      // else newdate = date;
      // }
    //   this.weekdates.push({week: newdate, fulldate: day})
    //   this.newformatdate.push(converteddate)
    // }
    // this.week.push(info)
    // this.weekdates.push(this.week)
    // this.weekdates.push(this.fulldate)
    // console.log("Array of week", this.week);
    // console.log("Array of date", this.fulldate);
    // console.log("New date", this.newformatdate);
    // console.log("Final Array with date formats for calendar view and Api", this.weekdates);


    
//   }
}