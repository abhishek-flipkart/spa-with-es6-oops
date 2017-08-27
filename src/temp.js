class Drone {

	static getCompany() {
		return Drone.company;
	}

	constructor(id, name){
		if(Drone.singleton == undefined){
			this.id = id;
			this.name = name;
			Drone.singleton = this;
		} else {
			console.error("This is a singleton class");
			return Drone.singleton;
		}

	}
}
Drone.company = "ACME";
Drone.singleton = undefined;

let drone = new Drone('236A7', "Eagle");
console.log(drone.name);
drone.name = "Kite";
console.log(drone.name);
console.log(Drone.getCompany());


let drone1 = new Drone('236A3', "Hawk");
console.log(drone1);
