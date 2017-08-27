export class Singleton {
	constructor(id) {
		if(Singleton.instance) {
			this._id = Singleton.instance._id;
		} else {
				this._id = id;
				Singleton.instance = this;
		}
	}

	get id(){
		return this._id;
	}
}

Singleton.instance = undefined;
