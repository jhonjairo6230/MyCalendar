/* eslint-disable no-restricted-globals */

// Importa las funciones de Workbox
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Precaching
precacheAndRoute(self.__WB_MANIFEST);

// Caching for API calls
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new CacheFirst({
    cacheName: 'api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Caching for images and fonts
registerRoute(
  ({ request }) =>
    request.destination === 'font' || request.destination === 'image',
  new CacheFirst({
    cacheName: 'static-resources',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);
