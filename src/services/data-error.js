export class DataError {
	constructor(message, data) {
		this._message = message;
		this._data = data;
	}

	get message() {
		return this._message;
	}

	get data() {
		return this._data;
	}

	set message(message) {
		this._message = message;
	}

	set data(data) {
		this._data = data;
	}

}
