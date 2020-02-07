import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var AOS: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
        }, 6000);
      });
    })(jQuery);

  }

}
