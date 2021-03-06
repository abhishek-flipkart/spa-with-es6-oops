import BaseElement from './base-element.js';

export default class DataTable extends BaseElement {

		constructor(headers, data) {
			super();
			this.headers = headers;
			this.data = data;
		}




		getElementString() {

			let thTags = "";
			for(let h of this.headers) {
				thTags += `<th class="mdl-data-table__cell--non-numeric">${h.toUpperCase()}</th>\n`;
			}

			let trTags = "";
			for(let r of this.data) {
				trTags += `<tr>`;
				for(let property of this.headers){
					let field = r[property];
					trTags += `<td class="mdl-data-table__cell--non-numeric">${field}</td>\n`
				}
				trTags += `</tr>\n`;
			}

			return `
					<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<thead>
							<tr>
								${thTags}
							</tr>
						</thead>
						<tbody>
								${trTags}
						</tbody>
					</table>
			`;
		}

}
