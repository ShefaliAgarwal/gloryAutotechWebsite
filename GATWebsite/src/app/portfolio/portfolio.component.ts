import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jQuery: any;
declare var AOS: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  id;
  slideIndex = 1;
  constructor(private activateRoute: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.showDivs(this.slideIndex);
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    (function ($) {
      $(document).ready(function () {
        AOS.init();
      });
    })(jQuery);
  }
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  showDivs(n) {
    var i;
    var x: any = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
  }
}
