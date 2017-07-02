import { Component } from '@angular/core';

@Component({
	selector: 'app-404',
	template: `
		<md-card>
			<h1>404 Page Not Found</h1>
		</md-card>
	`,
	styles: [
	`
	h1 {
		text-align: center;
	}
	`]
})
export class PageNotFoundComponent {}