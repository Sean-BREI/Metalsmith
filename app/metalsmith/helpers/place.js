'use strict';

module.exports = {

	place(w, h, text) {

		const handlebars = require('handlebars');

		const isValid = function isValid(str) {
			return typeof str !== 'undefined' && str !== '' && typeof str.data === 'undefined';
		};

		const width = (isValid(w)) ? w : '300';
		const height = (isValid(h)) ? 'x' + h : '';
		const txt = (isValid(text)) ? `?text=${encodeURI(text)}` : '';

		const url = `http://placehold.it/${width}${height}${txt}`;

		return new handlebars.SafeString(`<img src="${url}" alt="Placeholder Image" />`);

	}

};