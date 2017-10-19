'use strict';

var marble = require('marble');
var path = require('path');

var billboardDistPath = path.join(require.resolve('billboard.js'), '..');

module.exports = {
	metalComponents: ['electric-marble-components', 'metal-charts'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	codeMirrorLanguages: ['javascript', 'jsx', 'soy', 'xml'],
	vendorSrc: [
		'node_modules/marble/build/fonts/**',
		'node_modules/metal-charts/lib/css/*'
	]
};
