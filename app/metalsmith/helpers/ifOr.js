'use strict';

module.exports = {

	ifOr(a, b, opts) {

		if (a || b) {
			return opts.fn(this);
		} else {
			return opts.inverse(this);
		}

	}

};