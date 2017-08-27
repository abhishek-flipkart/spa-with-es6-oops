import BaseElement from './base-element.js';

export default class Button extends BaseElement {

		constructor(title) {
			super();
			this.title = title;
		}

		addClickEvent(callback) {
			callback();
		}

		getElementString() {
				return `
						<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-navigation__link">
								${this.title}
						</button>
				`;
		}

}
