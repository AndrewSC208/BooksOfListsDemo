import { Component, OnInit } from '@angular/core';
import { VerticalService } from './vertical.service';
import { Vertical } from './vertical';
 
@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
  providers: [VerticalService]
})
export class VerticalComponent implements OnInit {
	title: string = 'Verical List';
	errorMessage: string;
	verticals: Vertical[];

	constructor(private verticalService: VerticalService) {}
	
	ngOnInit() {
		this.getVerticals();
	}

	// *** PROMISE VERSION *** //
	// getVerticals(): void {
	// 	this.verticalService.getVerticals().then((verticals) => {
	// 		//this.printVerticals(verticals);
	// 		this.verticals = verticals;
	// 	})
	// }

	printVerticals(data) {
		console.log(data);
	}

	getVerticals() {
		this.verticalService.getVerticals()
			.subscribe(
				verticals => this.verticals = verticals,
				error => this.errorMessage = <any>error
			);

		// test
		this.printVerticals(this.verticals);
	}
}
