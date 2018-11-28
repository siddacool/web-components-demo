import { name, isPwa } from './project.json';

// name
// name set deafult for gh-pages
/*
e.g. for https://siddacool.github.io/timeship/
name should be 'timeship'
*/

function pwa() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`/${name}/sw.js`).then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

if (isPwa) {
  pwa();
} else {
  console.log('no pwa');
}
