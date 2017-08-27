import TitleBar from '../ui/title-bar.js';

export default class ApplcationBase {

		constructor(title) {
			this.title = title;
			this.titleBar = new TitleBar(this.title);
			this.routeMap = {};
			this.defaultRoute = null;
		}

		show(element) {
			this.titleBar.appendToElement(element);

			this.titleBar.element.find('.mdl-navigation__link').click((event) => {
					event.preventDefault();
					let route = event.target.innerHTML;
					this.activateRoute(route);
			});

			if(this.defaultRoute) {
				this.activateRoute(this.defaultRoute);
			}
		}

		addRoute(id, pageObject, defaultRoute = false) {
				this.titleBar.addLink(id, "javascript:void(0)");
				this.routeMap[id] = pageObject;

				if(defaultRoute) {
					this.defaultRoute = id;
				}
		}

		activateRoute(route) {

				let content = this.titleBar.element.find('.page-content');
				content.empty();

				this.routeMap[route].appendToElement(content);
		}

}
