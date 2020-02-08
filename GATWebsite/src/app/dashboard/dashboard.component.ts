import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

declare var jQuery: any;
declare var AOS: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    (function ($) {
      $(document).ready(function () {
        var els = document.querySelectorAll('.speak');
        [].forEach.call(els, function (el) {
          el.addEventListener('click', function () {
            [].forEach.call(els, function (clk) {
              clk.classList.remove('active');
            });
            el.classList.add('active');
          });
        });
        AOS.init();
        $("#slideshow > div:gt(0)").hide();

        setInterval(function () {
          $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        }, 8000);
      });
    })(jQuery);

  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'name': ['', Validators.required],
      'emailId': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'phoneNo': ['', Validators.required],
      'department': [''],
      'message': ['', Validators.required],
    });
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }
}
