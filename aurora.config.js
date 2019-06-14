/**
 * Gulp Configuration File
 *
 * @package Aurora
 */

module.exports = {
	// Project options.
	projectName: 'js-drum-kit',
	projectURL: 'http://localhost/js-drum-kit/', // Local project URL.
	productURL: './', // Project URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: false,
	injectChanges: true,

	// Pug options.
	pugSRC: 'src/pug/index.pug', // Path to main Pug file.
	pugDestination: './', // Path to place the compiled Pug file.

	// Style options.
	styleSRC: './src/scss/app.scss', // Path to main .scss file.
	styleDestination: './assets/css/', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'expanded', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Custom options.
	jsCustomSRC: './src/js/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './assets/js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'app', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	imgSRC: './src/images/**/*.{png,jpg,gif}', // Source folder of images which should be optimized and watched.
	imgDST: './assets/images/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Watch files paths.
	watchStyles: './src/scss/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	watchJsCustom: './src/js/*.js', // Path to all custom JS files.
	watchPhp: './**/*.php', // Path to all PHP files.
	watchPug: './**/*.pug', // Path to all PUG files.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	BROWSERS_LIST: [
		'last 10 version',
		'> 1%',
		'ie >= 9',
		'last 4 Android versions',
		'last 10 ChromeAndroid versions',
		'last 10 Chrome versions',
		'last 10 Firefox versions',
		'last 10 Safari versions',
		'last 10 iOS versions',
		'last 10 Edge versions',
		'last 10 Opera versions'
	]
};
