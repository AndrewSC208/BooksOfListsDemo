import { Injectable } from '@angular/core';
import { Http, 
		 Response,
		 Headers,
		 RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Vertical } from './vertical';

// *** PROMISE VERSION *** //
//import { VERTICALS } from './mock-data-verticals';

@Injectable()
export class VerticalService {
	private verticalUrl = 'api/verticals';

	// *** PROMISE VERSION *** //
  	// getVerticals(): Promise<Vertical[]> {
  	// 	return Promise.resolve(VERTICALS);
  	// }

  	constructor(private http: Http) {}

  	getVerticals(): Observable<Vertical[]> {
  		return this.http.get(this.verticalUrl)
  			.map(this.extractData)
  			.catch(this.handleError);
  	}

  	private extractData(res: Response) {
  		let body = res.json();
  		return body.data || {}
  	}

  	private handleError(error: Response | any) {
  		// In a real world app, you might use a remote logging infrastructure
    	let errMsg: string;
    	if (error instanceof Response) {
      		const body = error.json() || '';
      		const err = body.error || JSON.stringify(body);
      		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} else {
      		errMsg = error.message ? error.message : error.toString();
    	}
    	
    	console.error(errMsg);
    	return Observable.throw(errMsg);

  	}

}