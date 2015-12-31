import { Component } from 'angular2/core';
import { NgIf, NgFor, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { OrtPipe } from '../pipes/ort-pipe';
import { FlugService } from '../services/flug-service';
import { Inject} from 'angular2/core';
import { OrtValidator } from '../validators/ort-validator';
import { ShowError } from '../validators/show-error';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { FlugCard } from '../flug-card/flug-card';
//import 'rxjs/add/operator/map';
import { toTemplateUrl, toAssetUrl } from '../tools/url-tools';

//alert(toAssetUrl(__filename, "logo.jpg"));

@Component({ 
	selector: 'flug-suchen',
	// template: require("./flug-suchen.html"), //'app/flug-suchen/flug-suchen.html',
    // templateUrl: toAssetUrl(__filename, "flug-suchen.html"),
    templateUrl: toTemplateUrl(__filename),
    styles: [require("./flug-suchen.css")],
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, OrtValidator, ShowError, ROUTER_DIRECTIVES, FlugCard],
	pipes: [OrtPipe]
})
export class FlugSuchen {
	
	von: string = "Graz";
	nach: string = "Hamburg";
	fluege = [];
	selectedFlug;
	flugService: FlugService;
	
	constructor(flugService: FlugService) {
		this.flugService = flugService;
	}
	
	suchen(f) {
		
		console.debug(f);
		
		this.flugService
			.find(this.von, this.nach)
			.subscribe((r) => {
				this.fluege = r;
			});
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}