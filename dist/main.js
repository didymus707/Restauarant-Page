(()=>{"use strict";var n={656:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(645),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n",""]);const i=o},247:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(645),o=t.n(a),i=t(656),s=t(667),r=t.n(s),c=t(204),d=o()((function(n){return n[1]}));d.i(i.Z),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Allura&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=McLaren&display=swap);"]),d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]);var l=r()(c.Z);d.push([n.id,"/* @import '~font-awesome/css/font-awesome.css'; */\n\n.nav-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n}\n\n.pg-bg {\n  background-color: #81a678;\n  background-image: url(\"https://www.transparenttextures.com/patterns/asfalt-dark.png\");\n  background-size: cover;\n  height: 100%;\n}\n\n.logo-item{\n  font-family: 'Allura', cursive;\n  font-size: 50px;\n  color: #242b4c;\n}\n\n.pri {\n  color: #fff;\n}\n\n.tabs-container {\n  list-style-type: none;\n  width: 40%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.tabs-item {\n  cursor: pointer;\n  padding: 10px 12px;\n  transition: 0.2s ease-in-out;\n}\n\n.tabs-item:hover {\n  background-color: #00fb9e6b;\n  color: #242b4c;\n}\n\n.tabs-items {\n  font-family: 'McLaren', cursive;\n  color: #fff;\n  font-size: 1.4em;\n}\n\n/* Main styles */\n.top-container {\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url("+l+") no-repeat center center/cover;\n  height: 90vh;\n}\n\n.top-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  color: #fff;\n  font-size: 2em;\n  font-family: 'Pacifico', cursive;\n}\n\n.top-head {\n  font-size: 3em;\n  margin: 20px 0;\n  color:  #abfd53c7;\n}\n\n.menu-btn {\n  font-family: 'Pacifico', cursive;\n  cursor: pointer; \n  border: 1px solid #00fb9ec7;\n  border-radius: 5px;\n  background-color: transparent; \n  padding: 10px 25px;\n  color: #f1faee;\n  font-size: 1.1em; \n  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6); \n  outline: none;\n  transition: 0.2s ease-in-out;\n}\n\n.menu-btn:hover {\n  background-color: #00fb9e6b;\n}\n\n.bottom-container {\n  background: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) );\n  padding-bottom: 25px;\n}\n\n.bottom-content {\n  max-width: 1000px;\n  margin: auto;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about {\n  font-size: 3em;\n  margin: 25px 0;\n  font-family: 'McLaren', cursive;\n}\n\n.about-content {\n  font-family: 'McLaren', cursive;\n}\n\n.abt-content-pg {\n  font-size: 1.25em;\n}\n\n.footer-container {\n  height: 20%;\n}\n\n.footer-contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  width: 100%;\n}\n\n.contacts-container {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-family: 'McLaren', cursive;\n  color: #fff;\n  font-size: 1em;\n}\n\n.contacts-items {\n  display: flex;\n  justify-content: space-around;\n  width: 54%;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact .fas {\n  color: #242b4c;\n  font-size: 2.3em;\n  padding-bottom: 10px;\n}\n\n.contact address, object {\n  font-size: 1.1em;\n}\n\n.socials {\n  display: flex;\n  justify-content: space-around;\n  width: 14%;\n  margin-top: 20px;\n}\n\n.socials i {\n  border: 1px solid #fff;\n  border-radius: 50%;\n  padding: 15px;\n  color: #fff;\n}\n",""]);const u=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var r=0;r<n.length;r++){var c=[].concat(n[r]);a&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},204:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"890c128e44a3a6d1d235c6fcc8ac1925.jpg"},379:(n,e,t)=>{var a,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function r(n,e){for(var t={},a=[],o=0;o<n.length;o++){var r=n[o],c=e.base?r[0]+e.base:r[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:b(p,e),references:1}),a.push(l)}return a}function c(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var a=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var m=null,f=0;function b(n,e){var t,a,o;if(e.singleton){var i=f++;t=m||(m=c(e)),a=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),a=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=r(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var o=s(t[a]);i[o].references--}for(var c=r(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(a){if(e[a])return e[a].exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),a=t(247);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const o=()=>{const n=document.createElement("nav");n.classList.add("nav-container","pg-bg");const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("p"),o=document.createElement("span");e.classList.add("logo-container"),t.classList.add("logo-items"),a.classList.add("logo-item"),o.classList.add("pri"),o.textContent="Naija's",a.append(o,"Delicacies");const i=document.createElement("ul");return i.classList.add("tabs-container"),["Home","Menu","Contact"].forEach((n=>{const e=document.createElement("li"),t=document.createElement("a");e.classList.add("tabs-items"),t.classList.add("tabs-item"),t.textContent=n,e.appendChild(t),i.appendChild(e)})),t.appendChild(a),e.appendChild(t),n.append(e,i),{navTag:n,logoContainer:e}};document.querySelector("#content").append(o().navTag,(()=>{const n=document.createElement("main");n.classList.add("main-container");const e=document.createElement("section");e.classList.add("top-container");const t=document.createElement("div");t.classList.add("top-content");const a=document.createElement("p");a.classList.add("para-1"),a.textContent="Welcome To";const o=document.createElement("h1");o.classList.add("top-head","logo-item");const i=document.createElement("span");i.classList.add("pri"),i.textContent="Naija's",o.append(i,"Delicacies");const s=document.createElement("button");s.classList.add("menu-btn"),s.textContent="Choose your Favorite Delicacy",t.append(a,o,s),e.appendChild(t);const r=document.createElement("section");r.classList.add("bottom-container");const c=document.createElement("div");c.classList.add("bottom-content");const d=document.createElement("h2");d.classList.add("about"),d.textContent="About";const l=document.createElement("div");l.classList.add("about-content");const u=document.createElement("p");return u.classList.add("abt-content-pg"),u.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit earum. Quae voluptate voluptas distinctio eos dolores, illum placeat perferendis ex aperiam laudantium repellat, autem obcaecati sequi harum omnis et?\n  Exercitationem recusandae totam aspernatur, possimus illo assumenda libero, asperiores, beatae ullam aliquid nisi minima similique ipsum magnam aut odit vitae dicta et porro inventore animi autem cum molestiae. Quae, iste.\n  Nihil officiis itaque veniam blanditiis odio dolorem maxime iusto. Nam, voluptatem quaerat itaque ea suscipit expedita fugiat eos nisi doloribus vero animi, voluptas veritatis porro hic delectus quod est debitis.\n  Sit necessitatibus adipisci, iusto sint quia sequi. Cupiditate suscipit voluptatum ratione harum provident, labore sapiente vero quo quasi exercitationem laudantium iure distinctio officia tempore architecto. Culpa nihil nesciunt ratione odio.\n  Vero minus repudiandae minima, nobis quidem suscipit nihil in fuga provident! Eum debitis non culpa, quos quod libero cupiditate fugit iure sequi! Quis commodi accusamus quae nulla ut tenetur voluptatibus!",l.appendChild(u),c.append(d,l),r.appendChild(c),n.append(e,r),n})(),(()=>{const n=document.createElement("footer");n.classList.add("footer-container","pg-bg");const e=document.createElement("footer");e.classList.add("footer-contents");const t=document.createElement("div");t.classList.add("contacts-container");const a=document.createElement("ul");a.classList.add("contacts-items"),["address","phone","email"].forEach((n=>{const e=document.createElement("li");e.classList.add("contact");const t=document.createElement("i");if(t.classList.add("fas"),"address"===n){t.classList.add("fa-map-marker-alt");const n=document.createElement("address");n.textContent="Jurgen Kloop Way, Estate Osogbo",e.append(t,n)}if("phone"===n){t.classList.add("fa-mobile");const n=document.createElement("object");n.textContent="+234-8031170480",e.append(t,n)}if("email"===n){t.classList.add("fa-envelope");const n=document.createElement("object");n.textContent="didymus7007@gmail.com",e.append(t,n)}a.appendChild(e)}));const i=document.createElement("div");return i.classList.add("socials"),["facebook","instagram","twitter"].forEach((n=>{const e=document.createElement("i");"facebook"===n&&(e.classList.add("fab","fa-facebook-f"),i.append(e)),"instagram"===n&&(e.classList.add("fab","fa-instagram"),i.append(e)),"twitter"===n&&(e.classList.add("fab","fa-twitter"),i.append(e))})),t.appendChild(a),e.append(o().logoContainer,t,i),n.appendChild(e),n})())})()})();