import Page from '../framework/page.js';
import Image from '../ui/image.js';
import Button from '../ui/button.js';
import {application} from '../app.js';

export default class HomePage extends Page {

		constructor() {
			super('Home');
		}

		createElement() {
			super.createElement();

			let i = new Image('../../images/saibaba.jpg');
			i.appendToElement(this.element);

			let b = new Button('Cars');
			b.appendToElement(this.element);
			b.addClickEvent(function(){
				this.element.click((event) => {
					event.preventDefault();
					let route = this.title;
					application.activateRoute(route);
				});
			}.bind(b));

			let c = new Button('Drones');
			c.appendToElement(this.element);
			c.addClickEvent(function(){
				this.element.click((event) => {
					event.preventDefault();
					let route = this.title;
					application.activateRoute(route);
				});
			}.bind(c));
		}

		getElementString() {
				return `<div style="text-align:center;"></div>`;
		}
}
