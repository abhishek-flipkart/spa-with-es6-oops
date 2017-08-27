import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import ApplcationBase from './framework/application-base.js';
import HomePage from './pages/home-page.js';
import CarsPage from './pages/cars-page.js';
import DronesPage from './pages/drones-page.js';
import MapsPage from './pages/maps-page.js';



export class App extends ApplcationBase {

		constructor () {
			super('Fleet Manager');
			this.dataService = new FleetDataService();
			this.dataService.loadData(fleet);
			this.addRoute('Home', new HomePage(), true);
			this.addRoute('Cars', new CarsPage());
			this.addRoute('Drones', new DronesPage());
			this.addRoute('Map', new MapsPage());
		}
}

export let application = new App();
application.show($('body'));


/*
Sinlgeton example

import {App} from './classes/app.js';

let app1 = new App('277');
let app2 = new App('256');

console.log(app1.id);
console.log(app2.id);
*/
