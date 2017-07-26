'use strict';

module.exports = {

	svg(name) {

		const handlebars = require('handlebars');

		return new handlebars.SafeString(`<svg class="icon icon-${name}"><use xlink:href="#icon-${name}"></use></svg>`);

	}

};