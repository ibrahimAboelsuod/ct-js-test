(()=>{var t={5426:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([t.id,":root {\r\n  --header-background: #444444;\r\n  --white: #fff;\r\n\r\n  --light: #f4f4f4;\r\n  --light-contrast-rgb: 0, 0, 0;\r\n  --text-opacity: 0.85;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light);\r\n}\r\n\r\napp-looper {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-gap: 1rem;\r\n  grid-template-columns: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  app-looper {\r\n    display: grid;\r\n    grid-gap: 1rem;\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  }\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.card-page-content {\r\n  padding: 1rem;\r\n}\r\n",""]);const s=i},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<t.length;p++){var u=[].concat(t[p]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},1989:(t,e,r)=>{var n=r(1789),o=r(401),a=r(7667),i=r(1327),s=r(1866);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},8407:(t,e,r)=>{var n=r(7040),o=r(4125),a=r(2117),i=r(7518),s=r(4705);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},7071:(t,e,r)=>{var n=r(852)(r(5639),"Map");t.exports=n},3369:(t,e,r)=>{var n=r(4785),o=r(1285),a=r(6e3),i=r(9916),s=r(5265);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},2705:(t,e,r)=>{var n=r(5639).Symbol;t.exports=n},9932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},8470:(t,e,r)=>{var n=r(7813);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},7786:(t,e,r)=>{var n=r(1811),o=r(327);t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;null!=t&&r<a;)t=t[o(e[r++])];return r&&r==a?t:void 0}},4239:(t,e,r)=>{var n=r(2705),o=r(9607),a=r(2333),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},8458:(t,e,r)=>{var n=r(3560),o=r(5346),a=r(3218),i=r(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,u=c.toString,l=p.hasOwnProperty,d=RegExp("^"+u.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?d:s).test(i(t))}},531:(t,e,r)=>{var n=r(2705),o=r(9932),a=r(1469),i=r(3448),s=n?n.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},1811:(t,e,r)=>{var n=r(1469),o=r(5403),a=r(5514),i=r(9833);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(i(t))}},4429:(t,e,r)=>{var n=r(5639)["__core-js_shared__"];t.exports=n},1957:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},5050:(t,e,r)=>{var n=r(7019);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},852:(t,e,r)=>{var n=r(8458),o=r(7801);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},9607:(t,e,r)=>{var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[s]=r:delete t[s]),o}},7801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},1789:(t,e,r)=>{var n=r(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},1327:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},1866:(t,e,r)=>{var n=r(4536);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},5403:(t,e,r)=>{var n=r(1469),o=r(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=e&&t in Object(e)}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,r)=>{var n,o=r(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,r)=>{var n=r(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},2117:(t,e,r)=>{var n=r(8470);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},7518:(t,e,r)=>{var n=r(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,r)=>{var n=r(8470);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},4785:(t,e,r)=>{var n=r(1989),o=r(8407),a=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(t,e,r)=>{var n=r(5050);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},6e3:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,r)=>{var n=r(5050);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},4523:(t,e,r)=>{var n=r(8306);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},4536:(t,e,r)=>{var n=r(852)(Object,"create");t.exports=n},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:(t,e,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},5514:(t,e,r)=>{var n=r(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(a,"$1"):r||t)})),e}));t.exports=i},327:(t,e,r)=>{var n=r(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:(t,e,r)=>{var n=r(7786);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},1469:t=>{var e=Array.isArray;t.exports=e},3560:(t,e,r)=>{var n=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3448:(t,e,r)=>{var n=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},8306:(t,e,r)=>{var n=r(3369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},9833:(t,e,r)=>{var n=r(531);t.exports=function(t){return null==t?"":n(t)}},3379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],p=n.base?c[0]+n.base:c[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=r(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var f=o(h,n);n.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=n(t,o),p=0;p<a.length;p++){var u=r(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.nc=void 0,(()=>{"use strict";const t=r(7361);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}getTemplateContent(t){const e=document.createElement("template");return e.innerHTML=this.bindDataToTemplate(t.trim()),{css:e.content.firstChild,html:e.content.lastChild}}render(t){const{css:e,html:r}=this.getTemplateContent(t);this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(r)}bindDataToTemplate(e){return e.replace(/\{{(.*?)}}/g,((e,r)=>t(this,r.trim(),e)))}}class n extends e{static name="app-looper";get itemDataKey(){return this.innerItemDataKey||this.getAttribute("itemDataKey")}set itemDataKey(t){this.innerItemDataKey=t,this.render()}get list(){return this.innerList||[]}set list(t){if(!Array.isArray(t))throw new Error(`${n.name} list must be an array!}`);this.innerList=t,this.render()}render(t="<style></style> <slot></slot> "){if(super.render(t),!this.startingInnerHTML&&this.children.length>1)throw new Error(`${n.name} can only have one child!`);if(this.startingInnerHTML=this.children[0].cloneNode(),this.list.length){const t=document.createDocumentFragment();this.list.forEach((e=>{const r=this.startingInnerHTML.cloneNode();r[this.itemDataKey]=e,t.appendChild(r)})),this.innerHTML="",this.appendChild(t)}}}customElements.define(n.name,n);class o extends e{static name="app-car-card";get car(){return this.innerCar}set car(t){this.innerCar=t,this.render()}render(t='<style>:host{max-width:100%}.car-card{background-color:var(--white);color:rgba(var(--light-contrast-rgb),var(--text-opacity));box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;display:grid;grid-template-rows:300px 250px;overflow:hidden}.car-card:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.4)}.car-card__image-wrapper{width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(var(--light-contrast-rgb),.5)}.car-card__image-wrapper img{width:100%;height:auto}.car-card__info-list{overflow-y:auto;overflow-x:hidden;padding:.7rem;display:grid;grid-gap:0.5rem;grid-template-columns:50% 50%;grid-template-rows:2rem}.car-card__info-list p{margin:0}a{text-decoration:none}</style> <a href="./car?id={{ car.id }}"> <section class="car-card"> <div class="car-card__image-wrapper"> <img src="{{ car.Vehicle.PictureURL }}" alt="{{car.Vehicle.VehMakeModel.@Name}}"/> </div> <div class="car-card__info-list"> <p> <strong>Make Model:</strong> {{car.Vehicle.VehMakeModel.@Name}} </p> <p> <strong>Status:</strong> {{car.@Status}} </p> <p> <strong>Price:</strong> {{car.TotalCharge.@RateTotalAmount}} </p> <p> <strong>Vendor:</strong> {{car.Vendor.@Name}} </p> <p> <strong>Passengers:</strong> {{car.Vehicle.@PassengerQuantity}} </p> <p> <strong>Air Condition:</strong> {{car.Vehicle.@AirConditionInd}} </p> <p> <strong>Baggage:</strong> {{car.Vehicle.@BaggageQuantity}} </p> <p> <strong>Doors:</strong> {{car.Vehicle.@DoorCount}} </p> <p> <strong>Drive:</strong> {{car.Vehicle.@DriveType}} </p> <p> <strong>Fuel:</strong> {{car.Vehicle.@FuelType}} </p> <p> <strong>Transmission:</strong> {{car.Vehicle.@TransmissionType}} </p> <p> <strong>Code:</strong> {{car.Vehicle.@Code}} </p> <p> <strong>Code Context:</strong> {{car.Vehicle.@CodeContext}} </p> </div> </section> </a> '){this.car&&super.render(t)}}customElements.define(o.name,o);class a extends e{static name="app-legend";get info(){return this.innerInfo}set info(t){this.innerInfo=t,this.innerInfo["@PickUpDateTime"]=new Date(this.innerInfo["@PickUpDateTime"]).toLocaleString(),this.innerInfo["@ReturnDateTime"]=new Date(this.innerInfo["@ReturnDateTime"]).toLocaleString(),this.render()}render(t='<style>.legend{display:grid;grid-template-columns:50% 50%;padding:0 1rem}</style> <section class="legend"> <div> <h3>Pickup</h3> <p> <strong>Location:</strong> {{info.PickUpLocation.@Name}} </p> <p> <strong>Time:</strong> {{info.@PickUpDateTime}} </p> </div> <div> <h3>Return</h3> <p> <strong>Location:</strong> {{info.ReturnLocation.@Name}} </p> <p> <strong>Time:</strong> {{info.@ReturnDateTime}} </p> </div> </section> '){this.info&&super.render(t)}}function i(t,e){return e.sort(((e,r)=>{let n=1;const[o,a]=t.split("_");switch(o){case"price":n=Number(e.TotalCharge["@RateTotalAmount"])-Number(r.TotalCharge["@RateTotalAmount"]);break;case"vendor":n=e.Vendor["@Name"].localeCompare(r.Vendor["@Name"])}return"up"===a?n:-1*n}))}customElements.define(a.name,a),r.p;var s=r(3379),c=r.n(s),p=r(7795),u=r.n(p),l=r(569),d=r.n(l),h=r(3565),f=r.n(h),g=r(9216),v=r.n(g),m=r(4589),y=r.n(m),x=r(5426),_={};let b,w,T,C;function j(t){b.list=i(t.target.value,b.list)}_.styleTagTransform=y(),_.setAttributes=f(),_.insert=d().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=v(),c()(x.Z,_),x.Z&&x.Z.locals&&x.Z.locals,window.onload=()=>{!async function(){b=document.querySelector("#cars-looper"),w=document.querySelector("#cars-legend"),[C,T]=await async function(){const t=[],e=(await async function(){try{const t=await fetch("assets/data/cars.json");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return t}}())[0].VehAvailRSCore;return e.VehVendorAvails.forEach(((e,r)=>{e.VehAvails.forEach(((n,o)=>{t.push({...n,id:`${r}-${o}`,Vendor:e.Vendor})}))})),[t,e.VehRentalCore]}(),b.list=i("price_up",C),w.info=T}(),document.querySelector("#order-filter").addEventListener("change",j)}})()})();