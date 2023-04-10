// Verifica si el navegador soporta service workers
export function register(config) {
    if ('serviceWorker' in navigator) {
      // Registra el service worker
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        navigator.serviceWorker
          .register(swUrl, config)
          .then(registration => {
            console.log('Service worker registrado:', registration);
          })
          .catch(error => {
            console.error('Error al registrar el service worker:', error);
          });
      });
    }
  }
  
  // Desregistra el service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error('Error al desregistrar el service worker:', error);
        });
    }
  }
  