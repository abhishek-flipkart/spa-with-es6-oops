import Page from '../framework/page.js';
import GoogleMap from '../ui/google-map.js';
import {application} from '../app.js';

export default class MapsPage extends Page {

		constructor() {
			super('Maps');
		}

		createElement() {
				super.createElement();
				const centreOfMap = {lat: 28.463630, lng: -16.251847};
				const map = new GoogleMap(centreOfMap, application.dataService.cars);
				map.appendToElement(this.element);

		}

		getElementString() {
			return `<div style="text-align:center;"><h3>Maps</h3></div>`;
		}
}
