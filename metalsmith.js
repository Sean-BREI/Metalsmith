'use strict';

const metalsmith = require('metalsmith');
const beautify = require('metalsmith-beautify'); // See "https://github.com/beautify-web/js-beautify" for options
const collections = require('metalsmith-collections');
const discoverPartials = require('metalsmith-discover-partials');
const inPlace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const models = require('metalsmith-models');
const registerHelpers = require('metalsmith-register-helpers');

metalsmith(__dirname)
	.source('./app/metalsmith/templates')
	.destination('./app/dist')
	.clean(true)
	.use(models({
		directory: './app/metalsmith/models'
	}))
	.use(discoverPartials({
		directory: './app/metalsmith/partials',
		pattern: /\.hbs$/
	}))
	.use(registerHelpers({
		directory: './app/metalsmith/helpers'
	}))
	.use(inPlace())
	.use(collections({	
		template: {
			pattern: '*.html.hbs',
			sortBy: 'title'
		}
	}))
	.use(layouts({
		engine: 'handlebars',
		directory: './app/metalsmith/layouts',
		default: 'default.html'
		// ,
		// pattern: ['*.html'],
		// partials: './app/metalsmith/partials'
	}))
	.use(beautify({
		css: false,
		html: {
			indent_with_tabs: true
		},
		js: false
	}))
	.build(function (err, files) {

		const message = (err) ? err : 'Build complete!';

		console.log(message);

	});