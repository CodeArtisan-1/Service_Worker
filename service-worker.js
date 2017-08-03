importScripts('js/cache-polyfill.js');

var CACHE_VERSION = 'app-v1';
var CACHE_FILES = [
	'/',
	'images/background.jpeg',
	'js/app.js',
	'css/styles.css',
	'https://fonts.googleapis.com/css?family=Roboto:100'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_VERSION)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(CACHE_FILES);
			})
	);
});

self.addEventListener('activate', function(event) {

});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
});