'use strict';

module.exports = {

	parseFixture(file, options) {

		if (!file || typeof file !== 'string') {
			return false;
		}

		const fs = require('fs');
		const path = require('path');

		let fixture;

		file = path.join(__dirname, `../fixtures/${file}`);

		try {

			fixture = fs.readFileSync(file);
			fixture = fixture.toString('utf8');
			fixture = JSON.parse(fixture);

		} catch (err) {
			return console.error(err);
		}

		return options.fn(fixture);

	}

};