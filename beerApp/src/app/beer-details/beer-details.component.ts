import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  @Input() beer: any;

  constructor() { }

  ngOnInit(): void {
  }
}
