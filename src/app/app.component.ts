// import { FormGroup, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit , Input} from '@angular/core';
// import {MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// // Depending on whether rollup is used, moment needs to be imported differently.
// // Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// // syntax. However, rollup creates a synthetic default module and we thus need to import it using
// // the `default as` syntax.
// import * as _moment from 'moment';
// // tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;

// // See the Moment.js docs for the meaning of these formats:
// // https://momentjs.com/docs/#/displaying/format/
// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MM YYYY',
//     dateA11yLabel: 'DD/MM/YYYY',
//     monthYearA11yLabel: 'MM YYYY',
//   },
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
  //   // application's root module. We provide it at the component level here, due to limitations of
  //   // our example generation script.
  //   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})

export class AppComponent implements OnInit {

  title = 'Login';

  // dateForm: FormGroup;
  // constructor(private fb: FormBuilder) {}
  ngOnInit() {
  //   this.dateForm = this.fb.group({
  //     date: ['']
  //   });
   }


}
