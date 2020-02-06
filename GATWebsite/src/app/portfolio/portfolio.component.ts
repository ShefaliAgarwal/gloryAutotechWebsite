import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  id;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
  }

}
