import 'regenerator-runtime/runtime';
import CONFIG from './global/config';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';

setCacheNameDetails({
	prefix: CONFIG.CACHE_NAME,
	precache: 'precache',
	runtime: 'runtime',
});

precacheAndRoute(
	[
		...self.__WB_MANIFEST,
		{
			url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
			revision: 1,
		},
		{
			url: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
			revision: 1,
		},
	],
	{
		ignoreURLParametersMatching: [/.*/],
	}
);
registerRoute(
	/^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail|review|search))/,
	new StaleWhileRevalidate({
		cacheName: 'restaurant-data',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 100,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	})
);

registerRoute(
	({ request }) => request.destination === 'image',
	new CacheFirst({
		cacheName: 'image-data',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60,
			}),
		],
	})
);

self.skipWaiting();
clientsClaim();

cleanupOutdatedCaches();
