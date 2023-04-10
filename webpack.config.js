const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    plugins: [
        new WebpackPwaManifest({
            name: 'My Progressive Web App',
            short_name: 'My App',
            description: 'My awesome PWA!',
            background_color: '#ffffff',
            theme_color: '#000000',
            crossorigin: 'use-credentials',
            icons: [
                {
                    src: 'icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};
