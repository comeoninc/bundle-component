import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
entry: ['./app.scss', './app.js']
output: {
  filename: 'bundle.js'
}
