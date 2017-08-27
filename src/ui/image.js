import BaseElement from './base-element.js';

export default class Image extends BaseElement {

		constructor(fileName) {
			super();
			this.fileName = fileName;
		}

		getElementString() {
				return `
						<img src="${this.fileName}" />
				`;
		}

}
