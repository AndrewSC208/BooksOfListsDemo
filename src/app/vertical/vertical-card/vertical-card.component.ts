import { Component, OnInit, Input, Output } from '@angular/core';
import { Vertical } from '../vertical';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
	@Input() vertical: Vertical;

  	constructor() { }

  	ngOnInit() {
  	}

  	// Just testing
  	view(link, id) {
  		console.log(link);
  		console.log(id);
  	}

}
