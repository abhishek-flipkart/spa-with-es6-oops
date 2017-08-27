import BaseElement from './base-element.js';

export default class GoogleMap extends BaseElement {

		constructor(centerOfMap, data) {
			super();
			this.centerOfMap = centerOfMap;
			this.data = data;
		}

		createElement() {
			super.createElement();

			setTimeout(()=>{
				let map = new google.maps.Map(this.element[0], {
					center: this.centerOfMap,
					zoom: 2
				});

				for (let vehcile of this.data) {
					let [lat, lng] = vehcile.latLong.split(" ");
					let position = {
						lat:  parseFloat(lat),
						lng:  parseFloat(lng)
					};
					let marker = new google.maps.Marker({
						position: position,
						map: map,
						title: vehcile.make
					});
				}

			},0);


		}

		getElementString() {
			return `
					<div id="map" style="width:800px;height:400px;"></div>
			`;
		}

}


/*

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});


*/
