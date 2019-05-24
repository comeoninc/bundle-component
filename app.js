// Use relative paths for peer dependencies
import 'element';

class OtherElement extends LitElement{
  render(){
    return html`
      <element></element>
    `;
  }
}
customElements.define('other-element', OtherElement);

import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
entry: ['./app.scss', './app.js']
output: {
  filename: 'bundle.js'
}
