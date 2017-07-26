'use strict';

module.exports = {

	replaceStr(haystack, needle, replacement) {

		if (haystack && needle) {
			return haystack.replace(needle, replacement);
		} else {
			return '';
		}

	}

};