import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import { FlugSuchen } from './flug-suchen/flug-suchen';
import { FlugService } from './services/flug-service';
import { BASE_URL } from './registry';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, CanActivate } from 'angular2/router';
import { Location, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import { Home } from './home/home';
import { FlugEdit } from './flug-edit/flug-edit';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/app.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'Home' },
	{ path: '/flug-suchen', component: FlugSuchen, as: 'FlugSuchen' },
	{ path: '/flug-edit/:id', component: FlugEdit, as: 'FlugEdit' }

])
@CanActivate((next, prev) => {
    return true;     
})
export class App {
	title;
	location: Location;
	
	constructor(location: Location) {
		this.title = "Flug-Demo-App";
		this.location = location;
	}
	
	isActive(path): boolean {
		return (this.location.path() == path);
	}
}

var service = [
	provide(FlugService, { useClass: FlugService }),
	provide(BASE_URL, { useValue: 'http://www.angular.at/api'}),
	HTTP_PROVIDERS,
	FORM_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
	Location
];

bootstrap(App, service);
