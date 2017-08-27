import Page from '../framework/page.js';
import DataTable from '../ui/data-table.js';
import {application} from '../app.js';

export default class DronesPage extends Page {

	constructor() {
		super('Drones');
	}

	createElement() {
			super.createElement();
			const headers = "license model latLong airTimeHours base".split(" ");
			const dt = new DataTable(headers, application.dataService.drones);
			dt.appendToElement(this.element);
	}

	getElementString() {
			return `<div style="margin:20px;"><h3>Cars</h3></div>`;
	}
}
