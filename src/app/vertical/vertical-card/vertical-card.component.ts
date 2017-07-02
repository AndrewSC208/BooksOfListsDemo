import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
	@Input() vertical: string = 'Accouting';
	@Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vitae architecto nulla beatae sint deserunt consequatur blanditiis porro amet voluptates veritatis eum eligendi ullam quia, optio consectetur harum, autem laboriosam.';
	@Input() verticalLink: string;

  	constructor() { }

  	ngOnInit() {
  	}

}
