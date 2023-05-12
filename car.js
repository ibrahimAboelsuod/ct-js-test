(()=>{var t={5426:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(8081),o=e.n(n),a=e(3645),i=e.n(a)()(o());i.push([t.id,":root {\r\n  --header-background: #444444;\r\n  --white: #fff;\r\n\r\n  --light: #f4f4f4;\r\n  --light-contrast-rgb: 0, 0, 0;\r\n  --text-opacity: 0.85;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light);\r\n}\r\n\r\napp-looper {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-gap: 1rem;\r\n  grid-template-columns: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  app-looper {\r\n    display: grid;\r\n    grid-gap: 1rem;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  }\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.card-page-content {\r\n  padding: 1rem;\r\n}\r\n",""]);const s=i},3645:t=>{"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e="",n=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),n&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=t(r),n&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(t,e,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<t.length;p++){var u=[].concat(t[p]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},1989:(t,r,e)=>{var n=e(1789),o=e(401),a=e(7667),i=e(1327),s=e(1866);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},8407:(t,r,e)=>{var n=e(7040),o=e(4125),a=e(2117),i=e(7518),s=e(4705);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},7071:(t,r,e)=>{var n=e(852)(e(5639),"Map");t.exports=n},3369:(t,r,e)=>{var n=e(4785),o=e(1285),a=e(6e3),i=e(9916),s=e(5265);function c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},2705:(t,r,e)=>{var n=e(5639).Symbol;t.exports=n},9932:t=>{t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}},8470:(t,r,e)=>{var n=e(7813);t.exports=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1}},7786:(t,r,e)=>{var n=e(1811),o=e(327);t.exports=function(t,r){for(var e=0,a=(r=n(r,t)).length;null!=t&&e<a;)t=t[o(r[e++])];return e&&e==a?t:void 0}},4239:(t,r,e)=>{var n=e(2705),o=e(9607),a=e(2333),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},8458:(t,r,e)=>{var n=e(3560),o=e(5346),a=e(3218),i=e(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,u=c.toString,l=p.hasOwnProperty,d=RegExp("^"+u.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?d:s).test(i(t))}},531:(t,r,e)=>{var n=e(2705),o=e(9932),a=e(1469),i=e(3448),s=n?n.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(r){if("string"==typeof r)return r;if(a(r))return o(r,t)+"";if(i(r))return c?c.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e}},1811:(t,r,e)=>{var n=e(1469),o=e(5403),a=e(5514),i=e(9833);t.exports=function(t,r){return n(t)?t:o(t,r)?[t]:a(i(t))}},4429:(t,r,e)=>{var n=e(5639)["__core-js_shared__"];t.exports=n},1957:(t,r,e)=>{var n="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=n},5050:(t,r,e)=>{var n=e(7019);t.exports=function(t,r){var e=t.__data__;return n(r)?e["string"==typeof r?"string":"hash"]:e.map}},852:(t,r,e)=>{var n=e(8458),o=e(7801);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},9607:(t,r,e)=>{var n=e(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var r=a.call(t,s),e=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(r?t[s]=e:delete t[s]),o}},7801:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},1789:(t,r,e)=>{var n=e(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},7667:(t,r,e)=>{var n=e(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(n){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return o.call(r,t)?r[t]:void 0}},1327:(t,r,e)=>{var n=e(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return n?void 0!==r[t]:o.call(r,t)}},1866:(t,r,e)=>{var n=e(4536);t.exports=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=n&&void 0===r?"__lodash_hash_undefined__":r,this}},5403:(t,r,e)=>{var n=e(1469),o=e(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,r){if(n(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=r&&t in Object(r)}},7019:t=>{t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},5346:(t,r,e)=>{var n,o=e(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,r,e)=>{var n=e(8470),o=Array.prototype.splice;t.exports=function(t){var r=this.__data__,e=n(r,t);return!(e<0||(e==r.length-1?r.pop():o.call(r,e,1),--this.size,0))}},2117:(t,r,e)=>{var n=e(8470);t.exports=function(t){var r=this.__data__,e=n(r,t);return e<0?void 0:r[e][1]}},7518:(t,r,e)=>{var n=e(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,r,e)=>{var n=e(8470);t.exports=function(t,r){var e=this.__data__,o=n(e,t);return o<0?(++this.size,e.push([t,r])):e[o][1]=r,this}},4785:(t,r,e)=>{var n=e(1989),o=e(8407),a=e(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(t,r,e)=>{var n=e(5050);t.exports=function(t){var r=n(this,t).delete(t);return this.size-=r?1:0,r}},6e3:(t,r,e)=>{var n=e(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,r,e)=>{var n=e(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,r,e)=>{var n=e(5050);t.exports=function(t,r){var e=n(this,t),o=e.size;return e.set(t,r),this.size+=e.size==o?0:1,this}},4523:(t,r,e)=>{var n=e(8306);t.exports=function(t){var r=n(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}},4536:(t,r,e)=>{var n=e(852)(Object,"create");t.exports=n},2333:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},5639:(t,r,e)=>{var n=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},5514:(t,r,e)=>{var n=e(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=n((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(o,(function(t,e,n,o){r.push(n?o.replace(a,"$1"):e||t)})),r}));t.exports=i},327:(t,r,e)=>{var n=e(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},346:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7813:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},7361:(t,r,e)=>{var n=e(7786);t.exports=function(t,r,e){var o=null==t?void 0:n(t,r);return void 0===o?e:o}},1469:t=>{var r=Array.isArray;t.exports=r},3560:(t,r,e)=>{var n=e(4239),o=e(3218);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},3218:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3448:(t,r,e)=>{var n=e(4239),o=e(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},8306:(t,r,e)=>{var n=e(3369);function o(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(o.Cache||n),e}o.Cache=n,t.exports=o},9833:(t,r,e)=>{var n=e(531);t.exports=function(t){return null==t?"":n(t)}},3379:t=>{"use strict";var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],p=n.base?c[0]+n.base:c[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=e(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(h);else{var f=o(h,n);n.byIndex=s,r.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,r){var e=r.domAPI(r);return e.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;e.update(t=r)}else e.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=n(t,o),p=0;p<a.length;p++){var u=e(a[p]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:t=>{"use strict";var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},9216:t=>{"use strict";t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},3565:(t,r,e)=>{"use strict";t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(e){!function(t,r,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,t,r.options)}(r,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},4589:t=>{"use strict";t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0,(()=>{"use strict";const t=e(7361);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}getTemplateContent(t){const r=document.createElement("template");return r.innerHTML=this.bindDataToTemplate(t.trim()),{css:r.content.firstChild,html:r.content.lastChild}}render(t){const{css:r,html:e}=this.getTemplateContent(t);this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(r),this.shadowRoot.appendChild(e)}bindDataToTemplate(r){return r.replace(/\{{(.*?)}}/g,((r,e)=>t(this,e.trim(),r)))}}class n extends r{static name="app-looper";get itemDataKey(){return this.innerItemDataKey||this.getAttribute("itemDataKey")}set itemDataKey(t){this.innerItemDataKey=t,this.render()}get list(){return this.innerList||[]}set list(t){if(!Array.isArray(t))throw new Error(`${n.name} list must be an array!}`);this.innerList=t,this.render()}render(t="<style></style> <slot></slot> "){if(super.render(t),!this.startingInnerHTML&&this.children.length>1)throw new Error(`${n.name} can only have one child!`);if(this.startingInnerHTML=this.children[0].cloneNode(),this.list.length){const t=document.createDocumentFragment();this.list.forEach((r=>{const e=this.startingInnerHTML.cloneNode();e[this.itemDataKey]=r,t.appendChild(e)})),this.innerHTML="",this.appendChild(t)}}}customElements.define(n.name,n);class o extends r{static name="app-car-card";get car(){return this.innerCar}set car(t){this.innerCar=t,this.render()}render(t='<style>:host{max-width:100%}.car-card{background-color:var(--white);color:rgba(var(--light-contrast-rgb),var(--text-opacity));box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;display:grid;grid-template-rows:300px 250px;overflow:hidden}.car-card:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.4)}.car-card__image-wrapper{width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(var(--light-contrast-rgb),.5)}.car-card__image-wrapper img{width:100%;height:auto}.car-card__info-list{overflow-y:auto;overflow-x:hidden;padding:.7rem;display:grid;grid-gap:0.5rem;grid-template-columns:50% 50%;grid-template-rows:2rem}.car-card__info-list p{margin:0}a{text-decoration:none}</style> <a href="./car?id={{ car.id }}"> <section class="car-card"> <div class="car-card__image-wrapper"> <img src="{{ car.Vehicle.PictureURL }}" alt="{{car.Vehicle.VehMakeModel.@Name}}"/> </div> <div class="car-card__info-list"> <p> <strong>Make Model:</strong> {{car.Vehicle.VehMakeModel.@Name}} </p> <p> <strong>Status:</strong> {{car.@Status}} </p> <p> <strong>Price:</strong> {{car.TotalCharge.@RateTotalAmount}} </p> <p> <strong>Vendor:</strong> {{car.Vendor.@Name}} </p> <p> <strong>Passengers:</strong> {{car.Vehicle.@PassengerQuantity}} </p> <p> <strong>Air Condition:</strong> {{car.Vehicle.@AirConditionInd}} </p> <p> <strong>Baggage:</strong> {{car.Vehicle.@BaggageQuantity}} </p> <p> <strong>Doors:</strong> {{car.Vehicle.@DoorCount}} </p> <p> <strong>Drive:</strong> {{car.Vehicle.@DriveType}} </p> <p> <strong>Fuel:</strong> {{car.Vehicle.@FuelType}} </p> <p> <strong>Transmission:</strong> {{car.Vehicle.@TransmissionType}} </p> <p> <strong>Code:</strong> {{car.Vehicle.@Code}} </p> <p> <strong>Code Context:</strong> {{car.Vehicle.@CodeContext}} </p> </div> </section> </a> '){this.car&&super.render(t)}}customElements.define(o.name,o);class a extends r{static name="app-legend";get info(){return this.innerInfo}set info(t){this.innerInfo=t,this.innerInfo["@PickUpDateTime"]=new Date(this.innerInfo["@PickUpDateTime"]).toLocaleString(),this.innerInfo["@ReturnDateTime"]=new Date(this.innerInfo["@ReturnDateTime"]).toLocaleString(),this.render()}render(t='<style>.legend{display:grid;grid-template-columns:50% 50%;padding:0 1rem}</style> <section class="legend"> <div> <h3>Pickup</h3> <p> <strong>Location:</strong> {{info.PickUpLocation.@Name}} </p> <p> <strong>Time:</strong> {{info.@PickUpDateTime}} </p> </div> <div> <h3>Return</h3> <p> <strong>Location:</strong> {{info.ReturnLocation.@Name}} </p> <p> <strong>Time:</strong> {{info.@ReturnDateTime}} </p> </div> </section> '){this.info&&super.render(t)}}customElements.define(a.name,a),e.p;var i=e(3379),s=e.n(i),c=e(7795),p=e.n(c),u=e(569),l=e.n(u),d=e(3565),h=e.n(d),f=e(9216),g=e.n(f),v=e(4589),m=e.n(v),y=e(5426),x={};async function _(){const t=new Proxy(new URLSearchParams(window.location.search),{get:(t,r)=>t.get(r)}),[r]=await async function(){const t=[],r=(await async function(){try{const t=await fetch("/ct-js-test/assets/cars.json");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return t}}())[0].VehAvailRSCore;return r.VehVendorAvails.forEach(((r,e)=>{r.VehAvails.forEach(((n,o)=>{t.push({...n,id:`${e}-${o}`,Vendor:r.Vendor})}))})),[t,r.VehRentalCore]}();document.getElementById("car-card").car=r.find((r=>r.id===t.id))}x.styleTagTransform=m(),x.setAttributes=h(),x.insert=l().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),s()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,window.onload=()=>{_()}})()})();