'use strict';

var marble = require('marble');
var path = require('path');

var billboardDistPath = path.join(require.resolve('billboard.js'), '..');

module.exports = {
	metalComponents: ['electric-marble-components', 'metal-charts'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**', path.join(billboardDistPath, 'billboard.css')]
};
