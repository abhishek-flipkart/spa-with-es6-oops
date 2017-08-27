import $ from 'jquery';

export default class BaseElement {

		constructor() {
				this.element = null; //jQuery Object
		}

		appendToElement(el) {	// el is jQuery Object
			this.createElement();
			el.append(this.element);
			this.enableJS();
		}

		createElement() {
			let s = this.getElementString();
			this.element = $(s);
		}

		getElementString() {
				throw 'Please override getElementString() in BaseElement';
		}

		// this function is specific to material-design-lite
		enableJS() {
				componentHandler.upgradeElement(this.element[0]);
		}

}
