import {Vehcile} from './vehcile.js';

export class Drone extends Vehcile {

	constructor(license, model, latLong) {
		super(license, model, latLong);
		this._airTimeHours = null;
		this._base = null;
	}

	set airTimeHours(airTimeHours) {
		this._airTimeHours = airTimeHours;
	}

	set base(base) {
		this._base = base;
	}

	get airTimeHours() {
		return this._airTimeHours;
	}

	get base() {
		return this._base;
	}

}
