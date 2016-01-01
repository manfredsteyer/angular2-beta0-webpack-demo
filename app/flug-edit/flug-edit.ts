import {Component} from 'angular2/core';
import {RouteParams } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
@Component({
	templateUrl: 'app/flug-edit/flug-edit.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FlugEdit {
	
	info = "FlugEdit!";
	id;
	flug = {};
	flugService: FlugService;
	message;
	
	constructor(params: RouteParams, flugService: FlugService) {
		
		this.id = params.get('id');
        var that = this;
		flugService
			.findById(this.id)
			.subscribe(
				f => {
					that.flug = f;
				}
			)
			
		this.flugService = flugService;	
	}
	
	save() {
		this
			.flugService
			.save(this.flug)
			.subscribe(r => {
				if (r.status >= 400) {
					this.message = r.text();
				}
				else {
					this.message = "Flug gespeichert!";				
				}
			},
			err => {
				this.message = err.text();
			})
	}
	
}