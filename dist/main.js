(()=>{"use strict";var n={656:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),a=t.n(o)()((function(n){return n[1]}));a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n",""]);const i=a},247:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(645),a=t.n(o),i=t(656),c=t(667),s=t.n(c),r=t(204),d=t(355),l=t(353),u=a()((function(n){return n[1]}));u.i(i.Z),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Allura&display=swap);"]),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=McLaren&display=swap);"]),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]);var p=s()(r.Z),f=s()(d.Z),m=s()(l.Z);u.push([n.id,"/* @import '~font-awesome/css/font-awesome.css'; */\n\n.nav-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n}\n\n.pg-bg {\n  background-color: #81a678;\n  background-image: url(\"https://www.transparenttextures.com/patterns/asfalt-dark.png\");\n  background-size: cover;\n  height: 100%;\n}\n\n.logo-item{\n  font-family: 'Allura', cursive;\n  font-size: 50px;\n  color: #242b4c;\n}\n\n.pri {\n  color: #fff;\n}\n\n.tabs-container {\n  list-style-type: none;\n  width: 40%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.tabs-item {\n  cursor: pointer;\n  padding: 10px 12px;\n  transition: 0.2s ease-in-out;\n}\n\n.tabs-item:hover {\n  background-color: #00fb9e6b;\n  color: #242b4c;\n}\n\n.tabs-items {\n  font-family: 'McLaren', cursive;\n  color: #fff;\n  font-size: 1.4em;\n}\n\n/* Main styles */\n.top-container {\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url("+p+") no-repeat center center/cover;\n  height: 85vh;\n}\n\n.top-container__menu {\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url("+f+") no-repeat center center/cover;\n  height: 60vh;\n}\n\n.top-container__contact {\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7) ), url("+m+") no-repeat center center/cover;\n  height: 60vh;\n}\n\n.top-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  color: #fff;\n  font-size: 2em;\n  font-family: 'Pacifico', cursive;\n  padding-top: 45px;\n}\n\n.top-head {\n  font-size: 3em;\n  margin: 20px 0;\n  color:  #abfd53c7;\n}\n\n.menu-btn {\n  font-family: 'Pacifico', cursive;\n  cursor: pointer; \n  border: 1px solid #00fb9ec7;\n  border-radius: 5px;\n  background-color: transparent; \n  padding: 10px 25px;\n  color: #f1faee;\n  font-size: 1.1em; \n  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6); \n  outline: none;\n  transition: 0.2s ease-in-out;\n}\n\n.menu-btn:hover {\n  background-color: #00fb9e6b;\n}\n\n.bottom-container {\n  padding-bottom: 25px;\n}\n\n.bottom-content {\n  max-width: 1000px;\n  margin: auto;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about {\n  font-size: 3em;\n  margin: 25px 0;\n  font-family: 'McLaren', cursive;\n}\n\n.about-content {\n  font-family: 'McLaren', cursive;\n}\n\n.abt-content-pg {\n  font-size: 1.25em;\n}\n\n.footer-container {\n  height: 20%;\n}\n\n.footer-contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  width: 100%;\n}\n\n.contacts-container {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-family: 'McLaren', cursive;\n  color: #fff;\n  font-size: 1em;\n}\n\n.contacts-items {\n  display: flex;\n  justify-content: space-around;\n  width: 54%;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact .fas {\n  color: #242b4c;\n  font-size: 2.3em;\n  padding-bottom: 10px;\n}\n\n.contact address, object {\n  font-size: 1.1em;\n}\n\n.socials {\n  display: flex;\n  justify-content: space-around;\n  width: 14%;\n  margin-top: 20px;\n}\n\n.socials i {\n  border: 1px solid #fff;\n  border-radius: 50%;\n  padding: 15px;\n  color: #fff;\n}\n\n.none {\n  display: none;\n}\n\n.menu {\n  font-size: 2em;\n  font-family: 'McLaren', cursive;\n  padding: 20px 0;\n  margin-bottom: 25px;\n}\n\n.foods-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.food-item {\n  flex: 0 0 25%;\n  display: flex;\n  flex-flow: column;\n  padding: 10px;\n  max-width: 220px;\n  margin: 5px 0;\n}\n\n.food {\n  width: 100%;\n  border-radius: 50%;\n}\n\n.food-caption {\n  background-color: #222;\n  color: #fff;\n  font: italic smaller sans-serif;\n  padding: 3px;\n  text-align: center;\n}",""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var r=[].concat(n[s]);o&&a[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},355:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"ee6ffc10d384d3cb9014896a3cae6632.jpg"},204:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"890c128e44a3a6d1d235c6fcc8ac1925.jpg"},353:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"790a17d18eb964c167706c8f350d6a21.jpg"},379:(n,e,t)=>{var o,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],a=0;a<n.length;a++){var s=n[a],r=e.base?s[0]+e.base:s[0],d=t[r]||0,l="".concat(r," ").concat(d);t[r]=d+1;var u=c(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,e),references:1}),o.push(l)}return o}function r(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var c=a(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,a);else{var i=document.createTextNode(a),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function g(n,e){var t,o,a;if(e.singleton){var i=m++;t=f||(f=r(e)),o=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=r(e),o=p.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=c(t[o]);i[a].references--}for(var r=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=r}}}}},e={};function t(o){if(e[o])return e[o].exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(247);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a=()=>{const n=document.createElement("nav");n.classList.add("nav-container","pg-bg");const e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("p"),a=document.createElement("span");e.classList.add("logo-container"),t.classList.add("logo-items"),o.classList.add("logo-item"),a.classList.add("pri"),a.textContent="Naija's",o.append(a,"Delicacies");const i=document.createElement("ul");return i.classList.add("tabs-container"),["Home","Menu","Contact"].forEach((n=>{const e=document.createElement("li"),t=document.createElement("a");e.classList.add("tabs-items"),t.classList.add("tabs-item"),t.textContent=n,e.appendChild(t),i.appendChild(e)})),t.appendChild(o),e.appendChild(t),n.append(e,i),{navTag:n,logoContainer:e}},i=t.p+"e51df857ba01f0523b9d96f4b918cffe.jpg",c=t.p+"46b1407e7225507d16ffb844e998deb2.jpg",s=t.p+"fae13d706c92c20d32828f32c903bcb8.jpg",r=t.p+"a7d3880c51f06d841800752e19ad6dab.jpg",d=t.p+"79dcdc5c3c4949452acd4be233a964fc.jpg",l=t.p+"627c969e2f0f2b13b149e0b0d48f517b.jpg",u=t.p+"3dfca0ffa4bd03c9ca4fefb43de708e7.jpg",p=t.p+"761e7b11948957a5a51a57f09632bf62.jpg",f=()=>{const n=document.createElement("section");n.classList.add("bottom-container__menu");const e=document.createElement("div");e.classList.add("bottom-content");const t=document.createElement("h2");t.classList.add("menu"),t.textContent="What would you like to eat?";const o=document.createElement("div");return o.classList.add("menu-content"),o.innerHTML=`\n  <div class="foods-container">\n    <figure class="food-item">\n      <img src=${i} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Asun 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${c} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Efo 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${s} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Efoo 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${r} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Melon Soup 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${d} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Fisherman Soup 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${l} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Jollof 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${u} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Okro 1$</figcaption>\n    </figure>\n    <figure class="food-item">\n      <img src=${p} alt="Asun" class="food"/>\n      <figcaption class="food-caption">Semo 1$</figcaption>\n    </figure>\n  </div>`,e.append(t,o),n.appendChild(e),{sect2m:n}},m=()=>{const n=document.createElement("main");n.classList.add("main-container");const e=document.createElement("section");e.classList.add("top-container");const t=document.createElement("div");t.classList.add("top-content");const o=document.createElement("p");o.classList.add("para-1"),o.textContent="Welcome To";const a=document.createElement("h1");a.classList.add("top-head","logo-item");const i=document.createElement("span");i.classList.add("pri"),i.textContent="Naija's",a.append(i,"Delicacies");const c=document.createElement("button");c.classList.add("menu-btn"),c.textContent="Choose your Favorite Delicacy",t.append(o,a,c),e.appendChild(t);const s=document.createElement("section");s.classList.add("bottom-container");const r=document.createElement("div");r.classList.add("bottom-content");const d=document.createElement("h2");d.classList.add("about"),d.textContent="About";const l=document.createElement("div");l.classList.add("about-content");const u=document.createElement("p");u.classList.add("abt-content-pg"),u.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit earum. Quae voluptate voluptas distinctio eos dolores, illum placeat perferendis ex aperiam laudantium repellat, autem obcaecati sequi harum omnis et?\n  Exercitationem recusandae totam aspernatur, possimus illo assumenda libero, asperiores, beatae ullam aliquid nisi minima similique ipsum magnam aut odit vitae dicta et porro inventore animi autem cum molestiae. Quae, iste.\n  Nihil officiis itaque veniam blanditiis odio dolorem maxime iusto. Nam, voluptatem quaerat itaque ea suscipit expedita fugiat eos nisi doloribus vero animi, voluptas veritatis porro hic delectus quod est debitis.\n  Sit necessitatibus adipisci, iusto sint quia sequi. Cupiditate suscipit voluptatum ratione harum provident, labore sapiente vero quo quasi exercitationem laudantium iure distinctio officia tempore architecto. Culpa nihil nesciunt ratione odio.\n  Vero minus repudiandae minima, nobis quidem suscipit nihil in fuga provident! Eum debitis non culpa, quos quod libero cupiditate fugit iure sequi! Quis commodi accusamus quae nulla ut tenetur voluptatibus!",l.appendChild(u),r.append(d,l),s.appendChild(r),n.append(e,s);const p=()=>{const t=n.lastChild;e.classList.contains("top-container")&&(e.classList.replace("top-container","top-container__menu"),c.classList.replace("menu-btn","none"),n.replaceChild(f().sect2m,t))};return c.addEventListener("click",p),{mainContainer:n,sect2:s,showMenu:p}};document.querySelector("#content").append(a().navTag,m().mainContainer,(()=>{const n=document.createElement("footer");n.classList.add("footer-container","pg-bg");const e=document.createElement("footer");e.classList.add("footer-contents");const t=document.createElement("div");t.classList.add("contacts-container");const o=document.createElement("ul");o.classList.add("contacts-items"),["address","phone","email"].forEach((n=>{const e=document.createElement("li");e.classList.add("contact");const t=document.createElement("i");if(t.classList.add("fas"),"address"===n){t.classList.add("fa-map-marker-alt");const n=document.createElement("address");n.textContent="Jurgen Kloop Way, Estate Osogbo",e.append(t,n)}if("phone"===n){t.classList.add("fa-mobile");const n=document.createElement("object");n.textContent="+234-8031170480",e.append(t,n)}if("email"===n){t.classList.add("fa-envelope");const n=document.createElement("object");n.textContent="didymus7007@gmail.com",e.append(t,n)}o.appendChild(e)}));const i=document.createElement("div");return i.classList.add("socials"),["facebook","instagram","twitter"].forEach((n=>{const e=document.createElement("i");"facebook"===n&&(e.classList.add("fab","fa-facebook-f"),i.append(e)),"instagram"===n&&(e.classList.add("fab","fa-instagram"),i.append(e)),"twitter"===n&&(e.classList.add("fab","fa-twitter"),i.append(e))})),t.appendChild(o),e.append(a().logoContainer,t,i),n.appendChild(e),n})());const g=[...document.querySelectorAll(".tabs-item")],b=document.querySelector(".main-container"),h=document.querySelector(".top-container"),v=document.querySelector(".menu-btn");g.forEach((n=>{n.addEventListener("click",(e=>{const{target:t}=e;return"Home"===n.textContent&&"Home"===t.textContent?(()=>{const n=b.firstChild.className,e=h.classList,t=b.lastChild;e.contains("top-container")||(h.classList.replace(n,"top-container"),b.replaceChild(m().sect2,t))})():"Menu"===n.textContent&&"Menu"===t.textContent||"Choose your favorite delicacy"===t.textContent?(()=>{const n=b.firstChild.className,e=h.classList,t=document.querySelector(`.${n} .para-1`),o=document.querySelector(`.${n} .top-head`);t.textContent="Hmmmn Yummy!",o.textContent="Menu...";const a=b.lastChild;e.contains("top-container__menu")||(e.replace(n,"top-container__menu"),v.classList.replace("menu-btn","none"),b.replaceChild(f().sect2m,a))})():(()=>{const n=b.firstChild.className,e=h.classList,t=document.querySelector(`.${n} .para-1`),o=document.querySelector(`.${n} .top-head`);t.textContent="Say Hi",o.textContent="Send Us a Message";const a=b.lastChild;e.contains("top-container__contact")||(e.replace(n,"top-container__contact"),v.classList.replace("menu-btn","none"),b.replaceChild(f().sect2m,a))})(),n}))}))})()})();