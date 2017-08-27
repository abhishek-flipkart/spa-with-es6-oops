import {Vehcile} from './vehcile.js';

export class Car extends Vehcile {

	constructor(license, model, latLong) {
		super(license, model, latLong);
		this._miles = null;
		this._make = null;
	}

	set miles(miles) {
		this._miles = miles;
	}

	set make(make) {
		this._make = make;
	}

	get miles() {
		return this._miles;
	}

	get make() {
		return this._make;
	}


}
