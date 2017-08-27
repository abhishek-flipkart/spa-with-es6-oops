import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {
	constructor() {
		this.cars = [];
		this.drones = [];
		this.errors = [];
	}

	loadData(fleet) {
			for(let data of fleet) {
				switch (data.type) {
					case 'car':
						if(this.validateCarData(data)){
							let car = this.loadCar(data);
							this.cars.push(car);
						}
						else {
							let e = new DataError("Invalid car data",data);
							this.errors.push(e);
						}
						break;
					case 'drone':
						if(this.validateDroneData(data)){
							let drone = this.loadDrone(data);
							this.drones.push(drone);
						}
						else {
							let e = new DataError("Invalid drone data",data);
							this.errors.push(e);
						}
						break;
					default:
						let e = new DataError("Invalid vechile type", data);
						this.errors.push(e);
				}
			}
	}

	loadCar(car) {
		try {
			let c = new Car(car.license, car.model, car.latLong);
			c.miles = car.miles;
			c.make = car.make;
			return c;
		}
		catch(e){
			this.errors.push(new DataError("Error loading car", car));
		}
		return null;
	}

	loadDrone(drone) {
		try{
			let d = new Drone(drone.license, drone.model, drone.latLong);
			d.airTimeHours = drone.airTimeHours;
			d.base = drone.base;
			return d;
		}
		catch(e){
			this.errors.push(new DataError("Error loading drone", drone));
		}
		return null;

	}

	validateDroneData (drone) {
		let requiredProps = "license base airTimeHours model latLong ".split(" ");
		for(let field of requiredProps) {
			if(!drone[field] && field!="") {
				return false;
			}
		}
		return true;

	}

	validateCarData (car) {
		let requiredProps = "license make miles model latLong ".split(" ");
		for(let field of requiredProps) {
			if(!car[field] && field!="") {
				return false;
			}
		}
		return true;
	}

}
