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
  constructor(private activateRoute: ActivatedRoute) {
  }

  ngAfterViewInit() {
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log('id', this.id);
    (function ($) {
      $(document).ready(function () {
        AOS.init();
      });
    })(jQuery);
  }
}
