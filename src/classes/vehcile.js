export class Vehcile {

	constructor(license, model, latLong) {
			this._license = license;
			this._model = model;
			this._latLong = latLong;
	}

	get license() {
		return this._license;
	}

	get model() {
		return this._model;
	}

	get latLong() {
		return this._latLong;
	}

	set license(license) {
		this._license = license;
	}

	set model(model) {
		this._model = model;
	}

	set latLong(latLong) {
		this._latLong = latLong;
	}

}
