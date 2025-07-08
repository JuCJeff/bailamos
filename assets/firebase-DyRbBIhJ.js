import{o as hf,_ as oo}from"./vendor-DUxuRwNf.js";import{r as un}from"./react-BV_0FzY6.js";/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=()=>{};var hc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ff=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,g=(i&3)<<4|u>>4;let v=(u&15)<<2|d>>6,b=d&63;l||(b=64,a||(v=64)),r.push(t[p],t[g],t[v],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ff(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||d==null||g==null)throw new pf;const v=i<<2|u>>4;if(r.push(v),d!==64){const b=u<<4&240|d>>2;if(r.push(b),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(n){const e=$u(n);return zu.encodeByteArray(e,!0)},ms=function(n){return mf(n).replace(/\./g,"")},Hu=function(n){try{return zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=()=>gf().__FIREBASE_DEFAULTS__,yf=()=>{if(typeof process>"u"||typeof hc>"u")return;const n=hc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hu(n[1]);return e&&JSON.parse(e)},Os=()=>{try{return df()||_f()||yf()||vf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wu=n=>{var e,t;return(t=(e=Os())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gu=n=>{const e=Wu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ku=()=>{var n;return(n=Os())===null||n===void 0?void 0:n.config},Qu=n=>{var e;return(e=Os())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ao(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ms(JSON.stringify(t)),ms(JSON.stringify(a)),""].join(".")}const nr={};function Tf(){const n={prod:[],emulator:[]};for(const e of Object.keys(nr))nr[e]?n.emulator.push(e):n.prod.push(e);return n}function If(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let dc=!1;function co(n,e){if(typeof window>"u"||typeof document>"u"||!Lt(window.location.host)||nr[n]===e||nr[n]||dc)return;nr[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=Tf().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,b){v.setAttribute("width","24"),v.setAttribute("id",b),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{dc=!0,a()},v}function p(v,b){v.setAttribute("id",b),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=If(r),b=t("text"),C=document.getElementById(b)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),q=t("preprendIcon"),U=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const F=v.element;u(F),p(k,D);const z=d();l(U,q),F.append(U,C,k,z),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Af(){var n;const e=(n=Os())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pf(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cf(){return!Af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="FirebaseError";class Ye extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vf,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Df(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,u,r)}}function Df(n,e){return n.replace(Of,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Of=/\{\$([^}]+)}/g;function Lf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(fc(i)&&fc(a)){if(!Gt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function fc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Jn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Mf(n,e){const t=new xf(n,e);return t.subscribe.bind(t)}class xf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Uf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ri),s.error===void 0&&(s.error=Ri),s.complete===void 0&&(s.complete=Ri);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ri(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class St{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ef;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jf(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bf(n){return n===qt?void 0:n}function jf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ff(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const $f={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},zf=H.INFO,Hf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Wf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Hf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=zf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Kf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Kf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Li="@firebase/app",pc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new uo("@firebase/app"),Qf="@firebase/app-compat",Xf="@firebase/analytics-compat",Jf="@firebase/analytics",Yf="@firebase/app-check-compat",Zf="@firebase/app-check",ep="@firebase/auth",tp="@firebase/auth-compat",np="@firebase/database",rp="@firebase/data-connect",sp="@firebase/database-compat",ip="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",cp="@firebase/installations-compat",up="@firebase/messaging",lp="@firebase/messaging-compat",hp="@firebase/performance",dp="@firebase/performance-compat",fp="@firebase/remote-config",pp="@firebase/remote-config-compat",mp="@firebase/storage",gp="@firebase/storage-compat",_p="@firebase/firestore",yp="@firebase/ai",vp="@firebase/firestore-compat",Ep="firebase",Tp="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]",Ip={[Li]:"fire-core",[Qf]:"fire-core-compat",[Jf]:"fire-analytics",[Xf]:"fire-analytics-compat",[Zf]:"fire-app-check",[Yf]:"fire-app-check-compat",[ep]:"fire-auth",[tp]:"fire-auth-compat",[np]:"fire-rtdb",[rp]:"fire-data-connect",[sp]:"fire-rtdb-compat",[ip]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[cp]:"fire-iid-compat",[up]:"fire-fcm",[lp]:"fire-fcm-compat",[hp]:"fire-perf",[dp]:"fire-perf-compat",[fp]:"fire-rc",[pp]:"fire-rc-compat",[mp]:"fire-gcs",[gp]:"fire-gcs-compat",[_p]:"fire-fst",[vp]:"fire-fst-compat",[yp]:"fire-vertex","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,wp=new Map,xi=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(xi.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;xi.set(e,n);for(const t of gs.values())mc(t,n);for(const t of wp.values())mc(t,n);return!0}function Ls(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ke(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Er("app","Firebase",Ap);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=Tp;function bp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mi,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(t||(t=Ku()),!t)throw At.create("no-options");const i=gs.get(s);if(i){if(Gt(t,i.options)&&Gt(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const a=new qf(s);for(const l of xi.values())a.addComponent(l);const u=new Rp(t,r,a);return gs.set(s,u),u}function lo(n=Mi){const e=gs.get(n);if(!e&&n===Mi&&Ku())return bp();if(!e)throw At.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let s=(r=Ip[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(u.join(" "));return}Kt(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="firebase-heartbeat-database",Pp=1,ur="firebase-heartbeat-store";let bi=null;function Ju(){return bi||(bi=hf(Sp,Pp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),bi}async function Cp(n){try{const t=(await Ju()).transaction(ur),r=await t.objectStore(ur).get(Yu(n));return await t.done,r}catch(e){if(e instanceof Ye)ot.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(t.message)}}}async function gc(n,e){try{const r=(await Ju()).transaction(ur,"readwrite");await r.objectStore(ur).put(e,Yu(n)),await r.done}catch(t){if(t instanceof Ye)ot.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ot.warn(r.message)}}}function Yu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=1024,Np=30;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Op(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_c();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Np){const a=Lp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_c(),{heartbeatsToSend:r,unsentEntries:s}=Dp(this._heartbeatsCache.heartbeats),i=ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ot.warn(t),""}}}function _c(){return new Date().toISOString().substring(0,10)}function Dp(n,e=kp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),yc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),yc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yc(n){return ms(JSON.stringify({version:2,heartbeats:n})).length}function Lp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n){Kt(new St("platform-logger",e=>new Gf(e),"PRIVATE")),Kt(new St("heartbeat",e=>new Vp(e),"PRIVATE")),ze(Li,pc,n),ze(Li,pc,"esm2017"),ze("fire-js","")}Mp("");var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,Zu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,I,A){for(var _=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)_[Ze-2]=arguments[Ze];return m.prototype[I].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],_=m+(A^y&(I^A))+E[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(I^A&(y^I))+E[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(y^I^A)+E[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(I^(y|~A))+E[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,E=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<m;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)T[y++]=this.g[m]>>>E&255;return T};function i(T,m){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==m||(y[I]=A,E=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return k(d(-T));for(var m=[],y=1,E=0;T>=y;E++)m[E]=T/y|0,y*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),E=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),_=parseInt(T.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),E=E.j(A).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=l(0),v=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(D(this))return"-"+k(this).toString(T);for(var m=d(Math.pow(T,6)),y=this,E="";;){var I=z(y,m).g;y=q(y,I.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,C(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=q(this,T),D(T)?-1:C(T)?0:1};function k(T){for(var m=T.g.length,y=[],E=0;E<m;E++)y[E]=~T.g[E];return new a(y,~T.h).add(v)}n.abs=function(){return D(this)?k(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0,I=0;I<=m;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(T,m){return T.add(k(m))}n.j=function(T){if(C(this)||C(T))return g;if(D(this))return D(T)?k(this).j(k(T)):k(k(this).j(T));if(D(T))return k(this.j(k(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,_=this.i(E)&65535,Ze=T.i(I)>>>16,Vn=T.i(I)&65535;y[2*E+2*I]+=_*Vn,U(y,2*E+2*I),y[2*E+2*I+1]+=A*Vn,U(y,2*E+2*I+1),y[2*E+2*I+1]+=_*Ze,U(y,2*E+2*I+1),y[2*E+2*I+2]+=A*Ze,U(y,2*E+2*I+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function U(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function F(T,m){this.g=T,this.h=m}function z(T,m){if(C(m))throw Error("division by zero");if(C(T))return new F(g,g);if(D(T))return m=z(k(T),m),new F(k(m.g),k(m.h));if(D(m))return m=z(T,k(m)),new F(k(m.g),m.h);if(30<T.g.length){if(D(T)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,E=m;0>=E.l(T);)y=fe(y),E=fe(E);var I=Y(y,1),A=Y(E,1);for(E=Y(E,2),y=Y(y,2);!C(E);){var _=A.add(E);0>=_.l(T)&&(I=I.add(y),A=_),E=Y(E,1),y=Y(y,1)}return m=q(T,I.j(m)),new F(I,m)}for(I=g;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(y),_=A.j(m);D(_)||0<_.l(T);)y-=E,A=d(y),_=A.j(m);C(A)&&(A=v),I=I.add(A),T=q(T,_)}return new F(I,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function fe(T){for(var m=T.g.length+1,y=[],E=0;E<m;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function Y(T,m){var y=m>>5;m%=32;for(var E=T.g.length-y,I=[],A=0;A<E;A++)I[A]=0<m?T.i(A+y)>>>m|T.i(A+y+1)<<32-m:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Rt=a}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var el,Yn,tl,is,Ui,nl,rl,sl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,R){for(var N=Array(arguments.length-2),X=2;X<arguments.length;X++)N[X-2]=arguments[X];return c.prototype[w].apply(f,N)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=o.length||0,R=f.length||0;o.length=w+R;for(let N=0;N<R;N++)o[w+N]=f[N]}else o.push(f)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var fe=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function Y(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function _(){var o=ti;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,h){const f=Vn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Vn=new q(()=>new Cd,o=>o.reset());class Cd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Dn,On=!1,ti=new Ze,ha=()=>{const o=u.Promise.resolve(void 0);Dn=()=>{o.then(kd)}};var kd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=Vn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}On=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Nd=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Ln(o,c){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(fe){e:{try{z(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Vd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ln.aa.h.call(this)}}C(Ln,ye);var Vd={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Vr="closure_listenable_"+(1e6*Math.random()|0),Dd=0;function Od(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++Dd,this.da=this.fa=!1}function Dr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Or(o){this.src=o,this.g={},this.h=0}Or.prototype.add=function(o,c,h,f,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var N=ri(o,c,f,w);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Od(c,this.src,R,!!f,w),c.fa=h,o.push(c)),c};function ni(o,c){var h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Dr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ri(o,c,h,f){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return w}return-1}var si="closure_lm_"+(1e6*Math.random()|0),ii={};function da(o,c,h,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)da(o,c[R],h,f,w);return null}return h=ma(h),o&&o[Vr]?o.K(c,h,d(f)?!!f.capture:!1,w):Ld(o,c,h,!1,f,w)}function Ld(o,c,h,f,w,R){if(!c)throw Error("Invalid event type");var N=d(w)?!!w.capture:!!w,X=ai(o);if(X||(o[si]=X=new Or(o)),h=X.add(c,h,f,N,R),h.proxy)return h;if(f=Md(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Nd||(w=N),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(pa(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Md(){function o(h){return c.call(o.src,o.listener,h)}const c=xd;return o}function fa(o,c,h,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)fa(o,c[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=ma(h),o&&o[Vr]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=ri(R,h,f,w),-1<h&&(Dr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=ai(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ri(c,h,f,w)),(h=-1<o?c[o]:null)&&oi(h))}function oi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Vr])ni(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(pa(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ai(c))?(ni(h,o),h.h==0&&(h.src=null,c[si]=null)):Dr(o)}}}function pa(o){return o in ii?ii[o]:ii[o]="on"+o}function xd(o,c){if(o.da)o=!0;else{c=new Ln(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&oi(o),o=h.call(f,c)}return o}function ai(o){return o=o[si],o instanceof Or?o:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function ma(o){return typeof o=="function"?o:(o[ci]||(o[ci]=function(c){return o.handleEvent(c)}),o[ci])}function ve(){ft.call(this),this.i=new Or(this),this.M=this,this.F=null}C(ve,ft),ve.prototype[Vr]=!0,ve.prototype.removeEventListener=function(o,c,h,f){fa(this,o,c,h,f)};function be(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ye(c,o);else if(c instanceof ye)c.target=c.target||o;else{var w=c;c=new ye(f,o),E(c,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var N=c.g=h[R];w=Lr(N,f,!0,c)&&w}if(N=c.g=o,w=Lr(N,f,!0,c)&&w,w=Lr(N,f,!1,c)&&w,h)for(R=0;R<h.length;R++)N=c.g=h[R],w=Lr(N,f,!1,c)&&w}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Dr(h[f]);delete o.g[c],o.h--}}this.F=null},ve.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},ve.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Lr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var N=c[R];if(N&&!N.da&&N.capture==h){var X=N.listener,pe=N.ha||N.src;N.fa&&ni(o.i,N),w=X.call(pe,f)!==!1&&w}}return w&&!f.defaultPrevented}function ga(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function _a(o){o.g=ga(()=>{o.g=null,o.i&&(o.i=!1,_a(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ud extends ft{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:_a(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(o){ft.call(this),this.h=o,this.g={}}C(Mn,ft);var ya=[];function va(o){Y(o.g,function(c,h){this.g.hasOwnProperty(h)&&oi(c)},o),o.g={}}Mn.prototype.N=function(){Mn.aa.N.call(this),va(this)},Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=u.JSON.stringify,Fd=u.JSON.parse,Bd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function li(){}li.prototype.h=null;function Ea(o){return o.h||(o.h=o.i())}function Ta(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hi(){ye.call(this,"d")}C(hi,ye);function di(){ye.call(this,"c")}C(di,ye);var Ut={},Ia=null;function Mr(){return Ia=Ia||new ve}Ut.La="serverreachability";function wa(o){ye.call(this,Ut.La,o)}C(wa,ye);function Un(o){const c=Mr();be(c,new wa(c))}Ut.STAT_EVENT="statevent";function Aa(o,c){ye.call(this,Ut.STAT_EVENT,o),this.stat=c}C(Aa,ye);function Se(o){const c=Mr();be(c,new Aa(c,o))}Ut.Ma="timingevent";function Ra(o,c){ye.call(this,Ut.Ma,o),this.size=c}C(Ra,ye);function Fn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function jd(o,c,h,f,w,R){o.info(function(){if(o.g)if(R)for(var N="",X=R.split("&"),pe=0;pe<X.length;pe++){var K=X[pe].split("=");if(1<K.length){var Ee=K[0];K=K[1];var Te=Ee.split("_");N=2<=Te.length&&Te[1]=="type"?N+(Ee+"="+K+"&"):N+(Ee+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+N})}function qd(o,c,h,f,w,R,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+R+" "+N})}function sn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+zd(o,h)+(f?" "+f:"")})}function $d(o,c){o.info(function(){return"TIMEOUT: "+c})}Bn.prototype.info=function(){};function zd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return ui(h)}catch{return c}}var xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fi;function Ur(){}C(Ur,li),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},fi=new Ur;function pt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sa}function Sa(){this.i=null,this.g="",this.h=!1}var Pa={},pi={};function mi(o,c,h){o.L=1,o.v=qr(et(c)),o.m=h,o.P=!0,Ca(o,null)}function Ca(o,c){o.F=Date.now(),Fr(o),o.A=et(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),$a(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Sa,o.g=ac(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ud(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(ya[0]=w.toString()),w=ya);for(var R=0;R<w.length;R++){var N=da(h,w[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Un(),jd(o.i,o.u,o.A,o.l,o.R,o.m)}pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&tt(o)==3?c.j():this.Y(o)},pt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=tt(this.g);var c=this.g.Ba();const cn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Xa(this.g)))){this.J||Te!=4||c==7||(c==8||0>=cn?Un(3):Un(2)),gi(this);var h=this.g.Z();this.X=h;t:if(ka(this)){var f=Xa(this.g);o="";var w=f.length,R=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),jn(this);var N="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,qd(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,pe=this.g;if((X=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(X)){var K=X;break t}}K=null}if(h=K)sn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_i(this,h);else{this.o=!1,this.s=3,Se(12),Ft(this),jn(this);break e}}if(this.P){h=!0;let xe;for(;!this.J&&this.C<N.length;)if(xe=Hd(this,N),xe==pi){Te==4&&(this.s=4,Se(14),h=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Pa){this.s=4,Se(15),sn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else sn(this.i,this.l,xe,null),_i(this,xe);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||N.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)sn(this.i,this.l,N,"[Invalid Chunked Response]"),Ft(this),jn(this);else if(0<N.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),wi(Ee),Ee.M=!0,Se(11))}}else sn(this.i,this.l,N,null),_i(this,N);Te==4&&Ft(this),this.o&&!this.J&&(Te==4?rc(this.j,this):(this.o=!1,Fr(this)))}else uf(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Ft(this),jn(this)}}}catch{}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Hd(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?pi:(h=Number(c.substring(h,f)),isNaN(h)?Pa:(f+=1,f+h>c.length?pi:(c=c.slice(f,f+h),o.C=f+h,c)))}pt.prototype.cancel=function(){this.J=!0,Ft(this)};function Fr(o){o.S=Date.now()+o.I,Na(o,o.I)}function Na(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fn(v(o.ba,o),c)}function gi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?($d(this.i,this.A),this.L!=2&&(Un(),Se(17)),Ft(this),this.s=2,jn(this)):Na(this,this.S-o)};function jn(o){o.j.G==0||o.J||rc(o.j,o)}function Ft(o){gi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,va(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function _i(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||yi(h.h,o))){if(!o.K&&yi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Kr(h),Wr(h);else break e;Ii(h),Se(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Fn(v(h.Za,h),6e3));if(1>=Oa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else jt(h,11)}else if((o.K||h.g==o)&&Kr(h),!U(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let K=w[c];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const Ee=K[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const Te=K[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const cn=K[5];cn!=null&&typeof cn=="number"&&0<cn&&(f=1.5*cn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const xe=o.g;if(xe){const Xr=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var R=f.h;R.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(vi(R,R.h),R.h=null))}if(f.D){const Ai=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ai&&(f.ya=Ai,Z(f.I,f.D,Ai))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=o;if(f.qa=oc(f,f.J?f.ia:null,f.W),N.K){La(f.h,N);var X=N,pe=f.L;pe&&(X.I=pe),X.B&&(gi(X),Fr(X)),f.g=N}else tc(f);0<h.i.length&&Gr(h)}else K[0]!="stop"&&K[0]!="close"||jt(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?jt(h,7):Ti(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}Un(4)}catch{}}var Wd=class{constructor(o,c){this.g=o,this.map=c}};function Va(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Da(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Oa(o){return o.h?1:o.g?o.g.size:0}function yi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function vi(o,c){o.g?o.g.add(c):o.h=c}function La(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Va.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function Gd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Kd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function xa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Kd(o),f=Gd(o),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],h&&h[R],o)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var R=o[h].substring(0,f);w=o[h].substring(f+1)}else R=o[h];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Bt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Bt){this.h=o.h,Br(this,o.j),this.o=o.o,this.g=o.g,jr(this,o.s),this.l=o.l;var c=o.i,h=new zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Fa(this,h),this.m=o.m}else o&&(c=String(o).match(Ua))?(this.h=!1,Br(this,c[1]||"",!0),this.o=qn(c[2]||""),this.g=qn(c[3]||"",!0),jr(this,c[4]),this.l=qn(c[5]||"",!0),Fa(this,c[6]||"",!0),this.m=qn(c[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}Bt.prototype.toString=function(){var o=[],c=this.j;c&&o.push($n(c,Ba,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push($n(c,Ba,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push($n(h,h.charAt(0)=="/"?Yd:Jd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",$n(h,ef)),o.join("")};function et(o){return new Bt(o)}function Br(o,c,h){o.j=h?qn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function jr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Fa(o,c,h){c instanceof zn?(o.i=c,tf(o.i,o.h)):(h||(c=$n(c,Zd)),o.i=new zn(c,o.h))}function Z(o,c,h){o.i.set(c,h)}function qr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function qn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Xd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Xd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ba=/[#\/\?@]/g,Jd=/[#\?:]/g,Yd=/[#\?]/g,Zd=/[#\?@]/g,ef=/#/g;function zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function mt(o){o.g||(o.g=new Map,o.h=0,o.i&&Qd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=zn.prototype,n.add=function(o,c){mt(this),this.i=null,o=on(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ja(o,c){mt(o),c=on(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function qa(o,c){return mt(o),c=on(o,c),o.g.has(c)}n.forEach=function(o,c){mt(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)},n.na=function(){mt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=o[f];for(let R=0;R<w.length;R++)h.push(c[f])}return h},n.V=function(o){mt(this);let c=[];if(typeof o=="string")qa(this,o)&&(c=c.concat(this.g.get(on(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return mt(this),this.i=null,o=on(this,o),qa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function $a(o,c,h){ja(o,c),0<h.length&&(o.i=null,o.g.set(on(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var w=R;N[f]!==""&&(w+="="+encodeURIComponent(String(N[f]))),o.push(w)}}return this.i=o.join("&")};function on(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function tf(o,c){c&&!o.j&&(mt(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(ja(this,f),$a(this,w,h))},o)),o.j=c}function nf(o,c){const h=new Bn;if(u.Image){const f=new Image;f.onload=b(gt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=b(gt,h,"TestLoadImage: error",!1,c,f),f.onabort=b(gt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(gt,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function rf(o,c){const h=new Bn,f=new AbortController,w=setTimeout(()=>{f.abort(),gt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?gt(h,"TestPingServer: ok",!0,c):gt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),gt(h,"TestPingServer: error",!1,c)})}function gt(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function sf(){this.g=new Bd}function of(o,c,h){const f=h||"";try{xa(o,function(w,R){let N=w;d(w)&&(N=ui(w)),c.push(f+R+"="+encodeURIComponent(N))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function $r(o){this.l=o.Ub||null,this.j=o.eb||!1}C($r,li),$r.prototype.g=function(){return new zr(this.l,this.j)},$r.prototype.i=function(o){return function(){return o}}({});function zr(o,c){ve.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zr,ve),n=zr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Wn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;za(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function za(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hn(this):Wn(this),this.readyState==3&&za(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Qa=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Wn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ha(o){let c="";return Y(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ei(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ha(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,c,h))}function ne(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ne,ve);var af=/^https?$/i,cf=["POST","PUT"];n=ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fi.g(),this.v=this.o?Ea(this.o):Ea(fi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Wa(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(cf,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of h)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qa(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Wa(this,R)}};function Wa(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Ga(o),Hr(o)}function Ga(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),Hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hr(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ka(this):this.bb())},n.bb=function(){Ka(this)};function Ka(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tt(o)!=4||o.Z()!=2)){if(o.u&&tt(o)==4)ga(o.Ea,0,o);else if(be(o,"readystatechange"),tt(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var w=String(o.D).match(Ua)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!af.test(w?w.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var R=2<tt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Ga(o)}}finally{Hr(o)}}}}function Hr(o,c){if(o.g){Qa(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||be(o,"ready");try{h.onreadystatechange=f}catch{}}}function Qa(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Fd(c)}};function Xa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function uf(o){const c={};o=(o.g&&2<=tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(U(o[f]))continue;var h=I(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[w]||[];c[w]=R,R.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ja(o){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,o),this.cb=Gn("retryDelaySeedMs",1e4,o),this.Wa=Gn("forwardChannelMaxRetries",2,o),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Va(o&&o.concurrentRequestLimit),this.Da=new sf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ja.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Se(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=oc(this,null,this.W),Gr(this)};function Ti(o){if(Ya(o),o.G==3){var c=o.U++,h=et(o.I);if(Z(h,"SID",o.K),Z(h,"RID",c),Z(h,"TYPE","terminate"),Kn(o,h),c=new pt(o,o.j,c),c.L=2,c.v=qr(et(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=ac(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fr(c)}ic(o)}function Wr(o){o.g&&(wi(o),o.g.cancel(),o.g=null)}function Ya(o){Wr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Kr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Gr(o){if(!Da(o.h)&&!o.s){o.s=!0;var c=o.Ga;Dn||ha(),On||(Dn(),On=!0),ti.add(c,o),o.B=0}}function lf(o,c){return Oa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fn(v(o.Ga,o,c),sc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new pt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ec(this,w,c),h=et(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Kn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Ha(R)))+"&"+c:this.m&&Ei(h,this.m,R)),vi(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",c),Z(h,"SID","null"),w.T=!0,mi(w,h,null)):mi(w,h,c),this.G=2}}else this.G==3&&(o?Za(this,o):this.i.length==0||Da(this.h)||Za(this))};function Za(o,c){var h;c?h=c.l:h=o.U++;const f=et(o.I);Z(f,"SID",o.K),Z(f,"RID",h),Z(f,"AID",o.T),Kn(o,f),o.m&&o.o&&Ei(f,o.m,o.o),h=new pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ec(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),vi(o.h,h),mi(h,f,c)}function Kn(o,c){o.H&&Y(o.H,function(h,f){Z(c,f,h)}),o.l&&xa({},function(h,f){Z(c,f,h)})}function ec(o,c,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const N=["count="+h];R==-1?0<h?(R=w[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let X=!0;for(let pe=0;pe<h;pe++){let K=w[pe].g;const Ee=w[pe].map;if(K-=R,0>K)R=Math.max(0,w[pe].g-100),X=!1;else try{of(Ee,N,"req"+K+"_")}catch{f&&f(Ee)}}if(X){f=N.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function tc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Dn||ha(),On||(Dn(),On=!0),ti.add(c,o),o.v=0}}function Ii(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fn(v(o.Fa,o),sc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Wr(this),nc(this))};function wi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function nc(o){o.g=new pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=et(o.qa);Z(c,"RID","rpc"),Z(c,"SID",o.K),Z(c,"AID",o.T),Z(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(c,"TO",o.ja),Z(c,"TYPE","xmlhttp"),Kn(o,c),o.m&&o.o&&Ei(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=qr(et(c)),h.m=null,h.P=!0,Ca(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Wr(this),Ii(this),Se(19))};function Kr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function rc(o,c){var h=null;if(o.g==c){Kr(o),wi(o),o.g=null;var f=2}else if(yi(o.h,c))h=c.D,La(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;f=Mr(),be(f,new Ra(f,h)),Gr(o)}else tc(o);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&lf(o,c)||f==2&&Ii(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:jt(o,5);break;case 4:jt(o,10);break;case 3:jt(o,6);break;default:jt(o,2)}}}function sc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function jt(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),f=o.Xa;const w=!f;f=new Bt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Br(f,"https"),qr(f),w?nf(f.toString(),h):rf(f.toString(),h)}else Se(2);o.G=0,o.l&&o.l.sa(c),ic(o),Ya(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function ic(o){if(o.G=0,o.ka=[],o.l){const c=Ma(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function oc(o,c,h){var f=h instanceof Bt?et(h):new Bt(h);if(f.g!="")c&&(f.g=c+"."+f.g),jr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Bt(null);f&&Br(R,f),c&&(R.g=c),w&&jr(R,w),h&&(R.l=h),f=R}return h=o.D,c=o.ya,h&&c&&Z(f,h,c),Z(f,"VER",o.la),Kn(o,f),f}function ac(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ne(new $r({eb:h})):new ne(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cc(){}n=cc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qr(){}Qr.prototype.g=function(o,c){return new Ve(o,c)};function Ve(o,c){ve.call(this),this.g=new Ja(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new an(this)}C(Ve,ve),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){Ti(this.g)},Ve.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ui(o),o=h);c.i.push(new Wd(c.Ya++,o)),c.G==3&&Gr(c)},Ve.prototype.N=function(){this.g.l=null,delete this.j,Ti(this.g),delete this.g,Ve.aa.N.call(this)};function uc(o){hi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(uc,hi);function lc(){di.call(this),this.status=1}C(lc,di);function an(o){this.g=o}C(an,cc),an.prototype.ua=function(){be(this.g,"a")},an.prototype.ta=function(o){be(this.g,new uc(o))},an.prototype.sa=function(o){be(this.g,new lc)},an.prototype.ra=function(){be(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,sl=function(){return new Qr},rl=function(){return Mr()},nl=Ut,Ui={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xr.NO_ERROR=0,xr.TIMEOUT=8,xr.HTTP_ERROR=6,is=xr,ba.COMPLETE="complete",tl=ba,Ta.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Yn=Ta,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,el=ne}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});const Ec="@firebase/firestore",Tc="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new uo("@firebase/firestore");function ln(){return Qt.logLevel}function O(n,...e){if(Qt.logLevel<=H.DEBUG){const t=e.map(ho);Qt.debug(`Firestore (${Rn}): ${n}`,...t)}}function at(n,...e){if(Qt.logLevel<=H.ERROR){const t=e.map(ho);Qt.error(`Firestore (${Rn}): ${n}`,...t)}}function Pt(n,...e){if(Qt.logLevel<=H.WARN){const t=e.map(ho);Qt.warn(`Firestore (${Rn}): ${n}`,...t)}}function ho(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,il(n,r,t)}function il(n,e,t){let r=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw at(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||il(e,s,r)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ye{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class Up{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Fp{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class Bp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jp{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Bp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$p(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function Fi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return $(r,s);{const i=al(),a=zp(i.encode(wc(n,t)),i.encode(wc(e,t)));return a!==0?a:$(r,s)}}t+=r>65535?2:1}return $(n.length,e.length)}function wc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function zp(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return $(n[t],e[t]);return $(n.length,e.length)}function En(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="__name__";class qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=qe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return $(e.length,t.length)}static compareSegments(e,t){const r=qe.isNumericId(e),s=qe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qe.extractNumericId(e).compare(qe.extractNumericId(t)):Fi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rt.fromString(e.substring(4,e.length-2))}}class J extends qe{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new J(t)}static emptyPath(){return new J([])}}const Hp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends qe{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return Hp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ac}static keyField(){return new ge([Ac])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wp(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rc(n){if(!L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bc(n){if(L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ul(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ir(n,e){if(!ul(n))throw new V(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=-62135596800,Pc=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pc);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sc)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pc}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ir(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:le("string",ee._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ee(0,0))}static max(){return new B(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=-1;function Gp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new Ct(s,L.empty(),e)}function Kp(n){return new Ct(n.readTime,n.key,lr)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct(B.min(),L.empty(),lr)}static max(){return new Ct(B.max(),L.empty(),lr)}}function Qp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Xp)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++u,u===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Yp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}xs.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=-1;function Us(n){return n==null}function _s(n){return n===0&&1/n==-1/0}function Zp(n){return typeof n=="number"&&Number.isInteger(n)&&!_s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="";function em(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cc(e)),e=tm(n.get(t),e);return Cc(e)}function tm(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ll:t+="";break;default:t+=i}}return t}function Cc(n){return n+ll+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yr(this.root,e,this.comparator,!0)}}class Yr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new De([])}unionWith(e){let t=new he(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dl("Invalid base64 string: "+i):i}}(e);return new _e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const nm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=nm.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="server_timestamp",pl="__type__",ml="__previous_value__",gl="__local_write_time__";function mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pl])===null||t===void 0?void 0:t.stringValue)===fl}function Fs(n){const e=n.mapValue.fields[ml];return mo(e)?Fs(e):e}function hr(n){const e=kt(n.mapValue.fields[gl].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,s,i,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const ys="(default)";class dr{constructor(e,t){this.projectId=e,this.database=t||ys}static empty(){return new dr("","")}get isDefaultDatabase(){return this.database===ys}isEqual(e){return e instanceof dr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="__type__",sm="__max__",Zr={mapValue:{}},yl="__vector__",vs="value";function Vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mo(n)?4:om(n)?9007199254740991:im(n)?10:11:x(28295,{value:n})}function Je(n,e){if(n===e)return!0;const t=Vt(n);if(t!==Vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hr(n).isEqual(hr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=kt(s.timestampValue),u=kt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Nt(s.bytesValue).isEqual(Nt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),u=oe(i.doubleValue);return a===u?_s(a)===_s(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(kc(a)!==kc(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Je(a[l],u[l])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function fr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Vt(n),r=Vt(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(i,a){const u=oe(i.integerValue||i.doubleValue),l=oe(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Vc(n.timestampValue,e.timestampValue);case 4:return Vc(hr(n),hr(e));case 5:return Fi(n.stringValue,e.stringValue);case 6:return function(i,a){const u=Nt(i),l=Nt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=$(u[d],l[d]);if(p!==0)return p}return $(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const u=$(oe(i.latitude),oe(a.latitude));return u!==0?u:$(oe(i.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var u,l,d,p;const g=i.fields||{},v=a.fields||{},b=(u=g[vs])===null||u===void 0?void 0:u.arrayValue,C=(l=v[vs])===null||l===void 0?void 0:l.arrayValue,D=$(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Dc(b,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Zr.mapValue&&a===Zr.mapValue)return 0;if(i===Zr.mapValue)return 1;if(a===Zr.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const v=Fi(l[g],p[g]);if(v!==0)return v;const b=Tn(u[l[g]],d[p[g]]);if(b!==0)return b}return $(l.length,p.length)}(n.mapValue,e.mapValue);default:throw x(23264,{le:t})}}function Vc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=kt(n),r=kt(e),s=$(t.seconds,r.seconds);return s!==0?s:$(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Tn(t[s],r[s]);if(i)return i}return $(t.length,r.length)}function In(n){return Bi(n)}function Bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Nt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bi(t.fields[a])}`;return s+"}"}(n.mapValue):x(61005,{value:n})}function os(n){switch(Vt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fs(n);return e?16+os(e):16;case 5:return 2*n.stringValue.length;case 6:return Nt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+os(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Mt(r.fields,(i,a)=>{s+=i.length+os(a)}),s}(n.mapValue);default:throw x(13486,{value:n})}}function Oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ji(n){return!!n&&"integerValue"in n}function go(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function Mc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function as(n){return!!n&&"mapValue"in n}function im(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_l])===null||t===void 0?void 0:t.stringValue)===yl}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function om(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=rr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];as(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Mt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ne(rr(this.value))}}function vl(n){const e=[];return Mt(n.fields,(t,r)=>{const s=new ge([t]);if(as(r)){const i=vl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ae(e,0,B.min(),B.min(),B.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,B.min(),B.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,B.min(),B.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.position=e,this.inclusive=t}}function xc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t="asc"){this.field=e,this.dir=t}}function am(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{}class ue extends El{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new um(e,t,r):t==="array-contains"?new dm(e,r):t==="in"?new fm(e,r):t==="not-in"?new pm(e,r):t==="array-contains-any"?new mm(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lm(e,r):new hm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Tn(t,this.value)):t!==null&&Vt(this.value)===Vt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends El{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new je(e,t)}matches(e){return Tl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Tl(n){return n.op==="and"}function Il(n){return cm(n)&&Tl(n)}function cm(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function qi(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+In(n.value);if(Il(n))return n.filters.map(e=>qi(e)).join(",");{const e=n.filters.map(t=>qi(t)).join(",");return`${n.op}(${e})`}}function wl(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Je(r.value,s.value)}(n,e):n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,u)=>i&&wl(a,s.filters[u]),!0):!1}(n,e):void x(19439)}function Al(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${In(t.value)}`}(n):n instanceof je?function(t){return t.op.toString()+" {"+t.getFilters().map(Al).join(" ,")+"}"}(n):"Filter"}class um extends ue{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class lm extends ue{constructor(e,t){super(e,"in",t),this.keys=Rl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hm extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Rl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class dm extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return go(t)&&fr(t.arrayValue,this.value)}}class fm extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fr(this.value.arrayValue,t)}}class pm extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fr(this.value.arrayValue,t)}}class mm extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!go(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function Fc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new gm(n,e,t,r,s,i,a)}function _o(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>qi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Us(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>In(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>In(r)).join(",")),e.Pe=t}return e.Pe}function yo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!am(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function $i(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _m(n,e,t,r,s,i,a,u){return new Pn(n,e,t,r,s,i,a,u)}function vo(n){return new Pn(n)}function Bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bl(n){return n.collectionGroup!==null}function sr(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new he(ge.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new pr(i,r))}),t.has(ge.keyField().canonicalString())||e.Te.push(new pr(ge.keyField(),r))}return e.Te}function He(n){const e=j(n);return e.Ie||(e.Ie=ym(e,sr(n))),e.Ie}function ym(n,e){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pr(s.field,i)});const t=n.endAt?new Es(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Es(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function zi(n,e){const t=n.filters.concat([e]);return new Pn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Hi(n,e,t){return new Pn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bs(n,e){return yo(He(n),He(e))&&n.limitType===e.limitType}function Sl(n){return`${_o(He(n))}|lt:${n.limitType}`}function hn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Al(s)).join(", ")}]`),Us(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>In(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>In(s)).join(",")),`Target(${r})`}(He(n))}; limitType=${n.limitType})`}function js(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,l){const d=xc(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,sr(r),s)||r.endAt&&!function(a,u,l){const d=xc(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,sr(r),s))}(n,e)}function vm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pl(n){return(e,t)=>{let r=!1;for(const s of sr(n)){const i=Em(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Em(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?Tn(l,d):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new te(L.comparator);function ct(){return Tm}const Cl=new te(L.comparator);function Zn(...n){let e=Cl;for(const t of n)e=e.insert(t.key,t);return e}function kl(n){let e=Cl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $t(){return ir()}function Nl(){return ir()}function ir(){return new tn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Im=new te(L.comparator),wm=new he(L.comparator);function W(...n){let e=wm;for(const t of n)e=e.add(t);return e}const Am=new he($);function Rm(){return Am}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(e)?"-0":e}}function Vl(n){return{integerValue:""+n}}function bm(n,e){return Zp(e)?Vl(e):Eo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this._=void 0}}function Sm(n,e,t){return n instanceof mr?function(s,i){const a={fields:{[pl]:{stringValue:fl},[gl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mo(i)&&(i=Fs(i)),i&&(a.fields[ml]=i),{mapValue:a}}(t,e):n instanceof gr?Ol(n,e):n instanceof _r?Ll(n,e):function(s,i){const a=Dl(s,i),u=jc(a)+jc(s.Ee);return ji(a)&&ji(s.Ee)?Vl(u):Eo(s.serializer,u)}(n,e)}function Pm(n,e,t){return n instanceof gr?Ol(n,e):n instanceof _r?Ll(n,e):t}function Dl(n,e){return n instanceof Ts?function(r){return ji(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mr extends qs{}class gr extends qs{constructor(e){super(),this.elements=e}}function Ol(n,e){const t=Ml(e);for(const r of n.elements)t.some(s=>Je(s,r))||t.push(r);return{arrayValue:{values:t}}}class _r extends qs{constructor(e){super(),this.elements=e}}function Ll(n,e){let t=Ml(e);for(const r of n.elements)t=t.filter(s=>!Je(s,r));return{arrayValue:{values:t}}}class Ts extends qs{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jc(n){return oe(n.integerValue||n.doubleValue)}function Ml(n){return go(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t){this.field=e,this.transform=t}}function km(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof gr&&s instanceof gr||r instanceof _r&&s instanceof _r?En(r.elements,s.elements,Je):r instanceof Ts&&s instanceof Ts?Je(r.Ee,s.Ee):r instanceof mr&&s instanceof mr}(n.transform,e.transform)}class Nm{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $s{}function xl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new To(n.key,Fe.none()):new wr(n.key,n.data,Fe.none());{const t=n.data,r=Ne.empty();let s=new he(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new xt(n.key,r,new De(s.toArray()),Fe.none())}}function Vm(n,e,t){n instanceof wr?function(s,i,a){const u=s.value.clone(),l=$c(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof xt?function(s,i,a){if(!cs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=$c(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Ul(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function or(n,e,t,r){return n instanceof wr?function(i,a,u,l){if(!cs(i.precondition,a))return u;const d=i.value.clone(),p=zc(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof xt?function(i,a,u,l){if(!cs(i.precondition,a))return u;const d=zc(i.fieldTransforms,l,a),p=a.data;return p.setAll(Ul(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,u){return cs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Dm(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Dl(r.transform,s||null);i!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,i))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&En(r,s,(i,a)=>km(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends $s{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xt extends $s{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ul(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $c(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,Pm(a,u,t[s]))}return r}function zc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Sm(i,a,e))}return r}class To extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Om extends $s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vm(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nl();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=xl(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,r)=>qc(t,r))&&En(this.baseMutations,e.baseMutations,(t,r)=>qc(t,r))}}class Io{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return Im}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Io(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,G;function Um(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Fl(n){if(n===void 0)return at("GRPC error has no .code"),S.UNKNOWN;switch(n){case ce.OK:return S.OK;case ce.CANCELLED:return S.CANCELLED;case ce.UNKNOWN:return S.UNKNOWN;case ce.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ce.INTERNAL:return S.INTERNAL;case ce.UNAVAILABLE:return S.UNAVAILABLE;case ce.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ce.NOT_FOUND:return S.NOT_FOUND;case ce.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ce.ABORTED:return S.ABORTED;case ce.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ce.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(G=ce||(ce={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Rt([4294967295,4294967295],0);function Hc(n){const e=al().encode(n),t=new Zu;return t.update(e),new Uint8Array(t.digest())}function Wc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rt([t,r],0),new Rt([s,i],0)]}class wo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new er(`Invalid padding: ${t}`);if(r<0)throw new er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new er(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new er(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Rt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Rt.fromNumber(r)));return s.compare(Fm)===1&&(s=new Rt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Hc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new wo(i,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;const t=Hc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ar.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zs(B.min(),s,new te($),ct(),W())}}class Ar{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ar(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Bl{constructor(e,t){this.targetId=e,this.De=t}}class jl{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gc{constructor(){this.ve=0,this.Ce=Kc(),this.Fe=_e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:i})}}),new Ar(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Kc()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Bm{constructor(e){this.We=e,this.Ge=new Map,this.ze=ct(),this.je=es(),this.Je=es(),this.He=new te($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if($i(i))if(r===0){const a=new L(i.path);this.Xe(t,a,Ae.newNoDocument(a,B.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=Nt(r).toUint8Array()}catch(l){if(l instanceof dl)return Pt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new wo(a,s,i)}catch(l){return Pt(l instanceof er?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const u=this.st(a);if(u){if(i.current&&$i(u.target)){const l=new L(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ae.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=W();this.Je.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new zs(e,t,this.He,this.ze,r);return this.ze=ct(),this.je=es(),this.Je=es(),this.He=new te($),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Gc,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new he($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new he($),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Gc),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function es(){return new te(L.comparator)}function Kc(){return new te(L.comparator)}const jm={asc:"ASCENDING",desc:"DESCENDING"},qm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$m={and:"AND",or:"OR"};class zm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wi(n,e){return n.useProto3Json||Us(e)?e:{value:e}}function Is(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ql(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hm(n,e){return Is(n,e.toTimestamp())}function We(n){return Q(!!n,49232),B.fromTimestamp(function(t){const r=kt(t);return new ee(r.seconds,r.nanos)}(n))}function Ao(n,e){return Gi(n,e).canonicalString()}function Gi(n,e){const t=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $l(n){const e=J.fromString(n);return Q(Kl(e),10190,{key:e.toString()}),e}function Ki(n,e){return Ao(n.databaseId,e.path)}function Si(n,e){const t=$l(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Hl(t))}function zl(n,e){return Ao(n.databaseId,e)}function Wm(n){const e=$l(n);return e.length===4?J.emptyPath():Hl(e)}function Qi(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hl(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qc(n,e,t){return{name:Ki(n,e),fields:t.value.mapValue.fields}}function Gm(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),_e.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),_e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Fl(d.code);return new V(p,d.message||"")}(a);t=new jl(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Si(n,r.document.name),i=We(r.document.updateTime),a=r.document.createTime?We(r.document.createTime):B.min(),u=new Ne({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(s,i,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new us(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Si(n,r.document),i=r.readTime?We(r.readTime):B.min(),a=Ae.newNoDocument(s,i),u=r.removedTargetIds||[];t=new us([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Si(n,r.document),i=r.removedTargetIds||[];t=new us([],i,s,null)}else{if(!("filter"in e))return x(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new xm(s,i),u=r.targetId;t=new Bl(u,a)}}return t}function Km(n,e){let t;if(e instanceof wr)t={update:Qc(n,e.key,e.value)};else if(e instanceof To)t={delete:Ki(n,e.key)};else if(e instanceof xt)t={update:Qc(n,e.key,e.data),updateMask:rg(e.fieldMask)};else{if(!(e instanceof Om))return x(16599,{Rt:e.type});t={verify:Ki(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const u=a.transform;if(u instanceof mr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof _r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ts)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw x(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x(27497)}(n,e.precondition)),t}function Qm(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?We(s.updateTime):We(i);return a.isEqual(B.min())&&(a=We(i)),new Nm(a,s.transformResults||[])}(t,e))):[]}function Xm(n,e){return{documents:[zl(n,e.path)]}}function Jm(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zl(n,s);const i=function(d){if(d.length!==0)return Gl(je.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:dn(v.field),direction:eg(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Wi(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:s}}function Ym(n){let e=Wm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const v=Wl(g);return v instanceof je&&Il(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(C){return new pr(fn(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let u=null;t.limit&&(u=function(g){let v;return v=typeof g=="object"?g.value:g,Us(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(g){const v=!!g.before,b=g.values||[];return new Es(b,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,b=g.values||[];return new Es(b,v)}(t.endAt)),_m(e,s,a,i,u,"F",l,d)}function Zm(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return ue.create(fn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return je.create(t.compositeFilter.filters.map(r=>Wl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function eg(n){return jm[n]}function tg(n){return qm[n]}function ng(n){return $m[n]}function dn(n){return{fieldPath:n.canonicalString()}}function fn(n){return ge.fromServerFormat(n.fieldPath)}function Gl(n){return n instanceof ue?function(t){if(t.op==="=="){if(Mc(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mc(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(t.field),op:tg(t.op),value:t.value}}}(n):n instanceof je?function(t){const r=t.getFilters().map(s=>Gl(s));return r.length===1?r[0]:{compositeFilter:{op:ng(t.op),filters:r}}}(n):x(54877,{filter:n})}function rg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t,r,s,i=B.min(),a=B.min(),u=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.gt=e}}function ig(n){const e=Ym({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.Dn=new ag}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ct.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class ag{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ql=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Ql,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new wn(0)}static ur(){return new wn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="LruGarbageCollector",cg=1048576;function Yc([n,e],[t,r]){const s=$(n,t);return s===0?$(e,r):s}class ug{constructor(e){this.Tr=e,this.buffer=new he(Yc),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(Jc,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sn(t)?O(Jc,"Ignoring IndexedDB error during garbage collection: ",t):await bn(t)}await this.Rr(3e5)})}}class hg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(xs.ue);const r=new ug(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Xc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xc):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,u=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),ln()<=H.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function dg(n,e){return new hg(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.changes=new tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&or(r.mutation,s,De.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=$t();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Zn();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=$t();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let i=ct();const a=ir(),u=function(){return ir()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof xt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),or(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,De.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return u.set(d,new pg(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const r=ir();let s=new te((a,u)=>a-u),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||De.empty();p=u.applyToLocalView(d,p),r.set(l,p);const g=(s.get(u.batchId)||W()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,g=Nl();p.forEach(v=>{if(!i.has(v)){const b=xl(t.get(v),r.get(v));b!==null&&g.set(v,b),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve($t());let u=lr,l=i;return a.next(d=>P.forEach(d,(p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{l=l.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,W())).next(p=>({batchId:u,changes:kl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=Zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Zn();return this.indexManager.getCollectionParents(e,i).next(u=>P.forEach(u,l=>{const d=function(g,v){return new Pn(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let u=Zn();return a.forEach((l,d)=>{const p=i.get(l);p!==void 0&&or(p.mutation,d,De.empty(),ee.now()),js(t,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:ig(s.bundledQuery),readTime:We(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.overlays=new te(L.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$t();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=$t(),i=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new te((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=$t(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=$t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return P.resolve(u)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Mm(t,r));let i=this.kr.get(t);i===void 0&&(i=W(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.qr=new he(de.Qr),this.$r=new he(de.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new de(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new de(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new L(new J([])),r=new de(t,e),s=new de(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new L(new J([])),r=new de(t,e),s=new de(t,e+1);let i=W();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new de(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return L.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new he(de.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Lm(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new de(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?po:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),s=new de(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);i.push(u)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);return t.forEach(s=>{const i=new de(s,0),a=new de(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],u=>{r=r.add(u.Hr)})}),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new de(new L(i),0);let u=new he($);return this.Yr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)},a),P.resolve(this.ei(u))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,s=>{const i=new de(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new de(t,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.ni=e,this.docs=function(){return new te(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ct();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Qp(Kp(p),r)<=0||(s.has(p.key)||js(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){x(9500)}ri(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Tg(this)}getSize(e){return P.resolve(this.size)}}class Tg extends fg{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.persistence=e,this.ii=new tn(t=>_o(t),yo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new Ro,this.targetCount=0,this._i=wn.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new wn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.ai={},this.overlays={},this.ui=new xs(0),this.ci=!1,this.ci=!0,this.li=new yg,this.referenceDelegate=e(this),this.hi=new Ig(this),this.indexManager=new og,this.remoteDocumentCache=function(s){return new Eg(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new sg(t),this.Ti=new gg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _g,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new vg(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new wg(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class wg extends Jp{constructor(e){super(),this.currentSequenceNumber=e}}class bo{constructor(e){this.persistence=e,this.Ai=new Ro,this.Ri=null}static Vi(e){return new bo(e)}get mi(){if(this.Ri)return this.Ri;throw x(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,r=>{const s=L.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ws{constructor(e,t){this.persistence=e,this.gi=new tn(r=>em(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dg(this,t)}static Vi(e,t){return new ws(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return P.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=os(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new So(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Cf()?8:Yp(Re())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ag;return this.ws(e,t,a).next(u=>{if(i.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ln()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(ln()<=H.DEBUG&&O("QueryEngine","Query:",hn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ln()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):P.resolve())}ps(e,t){if(Bc(t))return P.resolve(null);let r=He(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Hi(t,null,"F"),r=He(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,Hi(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,s){return Bc(t)||s.isEqual(B.min())?P.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?P.resolve(null):(ln()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hn(t)),this.vs(e,a,t,Gp(s,lr)).next(u=>u))})}bs(e,t){let r=new he(Pl(e));return t.forEach((s,i)=>{js(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return ln()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",hn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ct.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="LocalStore",bg=3e8;class Sg{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new te($),this.Ms=new tn(i=>_o(i),yo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mg(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Pg(n,e,t,r){return new Sg(n,e,t,r)}async function Jl(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],u=[];let l=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Cg(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){const g=d.batch,v=g.keys();let b=P.resolve();return v.forEach(C=>{b=b.next(()=>p.getEntry(l,C)).next(D=>{const k=d.docVersions.get(C);Q(k!==null,48541),D.version.compareTo(k)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=W();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Yl(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function kg(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const u=[];e.targetChanges.forEach((p,g)=>{const v=s.get(g);if(!v)return;u.push(t.hi.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.hi.addMatchingKeys(i,p.addedDocuments,g)));let b=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(_e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(g,b),function(D,k,q){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=bg?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(v,b,p)&&u.push(t.hi.updateTargetData(i,b))});let l=ct(),d=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(Ng(i,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(B.min())){const p=t.hi.getLastRemoteSnapshotVersion(i).next(g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.Fs=s,i))}function Ng(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ct();return t.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):O(Po,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:s}})}function Vg(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=po),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dg(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new wt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Xi(n,e,t){const r=j(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Sn(a))throw a;O(Po,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Zc(n,e,t){const r=j(n);let s=B.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const g=j(l),v=g.Ms.get(p);return v!==void 0?P.resolve(g.Fs.get(v)):g.hi.getTargetData(d,p)}(r,a,He(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:W())).next(u=>(Og(r,vm(e),u),{documents:u,qs:i})))}function Og(n,e,t){let r=n.xs.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class eu{constructor(){this.activeTargetIds=Rm()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lg{constructor(){this.Fo=new eu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new eu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="ConnectivityMonitor";class nu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(tu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(tu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts=null;function Ji(){return ts===null?ts=function(){return 268435456+Math.round(2147483648*Math.random())}():ts++,"0x"+ts.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="RestConnection",xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ug{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ys?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Ji(),u=this.Go(e,t.toUriEncodedString());O(Pi,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(u),p=Lt(d);return this.jo(e,u,l,r,p).then(g=>(O(Pi,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Pt(Pi,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",r),g})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=xg[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class Bg extends Ug{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Ji();return new Promise((u,l)=>{const d=new el;d.setWithCredentials(!0),d.listenOnce(tl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case is.NO_ERROR:const g=d.getResponseJson();O(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case is.TIMEOUT:O(Ie,`RPC '${e}' ${a} timed out`),l(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const v=d.getStatus();if(O(Ie,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b==null?void 0:b.error;if(C&&C.status&&C.message){const D=function(q){const U=q.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN}(C.status);l(new V(D,C.message))}else l(new V(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new V(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Ie,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);O(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}P_(e,t,r){const s=Ji(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sl(),u=rl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");O(Ie,`Creating RPC '${e}' stream ${s}: ${p}`,l);const g=a.createWebChannel(p,l);this.T_(g);let v=!1,b=!1;const C=new Fg({Ho:k=>{b?O(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(v||(O(Ie,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),O(Ie,`RPC '${e}' stream ${s} sending:`,k),g.send(k))},Yo:()=>g.close()}),D=(k,q,U)=>{k.listen(q,F=>{try{U(F)}catch(z){setTimeout(()=>{throw z},0)}})};return D(g,Yn.EventType.OPEN,()=>{b||(O(Ie,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),D(g,Yn.EventType.CLOSE,()=>{b||(b=!0,O(Ie,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(g))}),D(g,Yn.EventType.ERROR,k=>{b||(b=!0,Pt(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.__(new V(S.UNAVAILABLE,"The operation could not be completed")))}),D(g,Yn.EventType.MESSAGE,k=>{var q;if(!b){const U=k.data[0];Q(!!U,16349);const F=U,z=(F==null?void 0:F.error)||((q=F[0])===null||q===void 0?void 0:q.error);if(z){O(Ie,`RPC '${e}' stream ${s} received error:`,z);const fe=z.status;let Y=function(y){const E=ce[y];if(E!==void 0)return Fl(E)}(fe),T=z.message;Y===void 0&&(Y=S.INTERNAL,T="Unknown error status: "+fe+" with message "+z.message),b=!0,C.__(new V(Y,T)),g.close()}else O(Ie,`RPC '${e}' stream ${s} received:`,U),C.a_(U)}}),D(u,nl.STAT_EVENT,k=>{k.stat===Ui.PROXY?O(Ie,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ui.NOPROXY&&O(Ie,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n){return new zm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="PersistentStream";class eh{constructor(e,t,r,s,i,a,u,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Zl(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return O(ru,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(O(ru,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jg extends eh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Gm(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?We(a.readTime):B.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Qi(this.serializer),t.addTarget=function(i,a){let u;const l=a.target;if(u=$i(l)?{documents:Xm(i,l)}:{query:Jm(i,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=ql(i,a.resumeToken);const d=Wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Is(i,a.snapshotVersion.toTimestamp());const d=Wi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=Zm(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Qi(this.serializer),t.removeTarget=e,this.k_(t)}}class qg extends eh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Qm(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Qi(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Km(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{}class zg extends $g{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Gi(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(S.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,Gi(t,r),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Hg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(at(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="RemoteStore";class Wg{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{nn(this)&&(O(Xt,"Restarting streams for network reachability change."),await async function(l){const d=j(l);d.Ia.add(4),await Rr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ws(d)}(this))})}),this.Aa=new Hg(r,s)}}async function Ws(n){if(nn(n))for(const e of n.da)await e(!0)}async function Rr(n){for(const e of n.da)await e(!1)}function th(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vo(t)?No(t):Cn(t).x_()&&ko(t,e))}function Co(n,e){const t=j(n),r=Cn(t);t.Ta.delete(e),r.x_()&&nh(t,e),t.Ta.size===0&&(r.x_()?r.B_():nn(t)&&t.Aa.set("Unknown"))}function ko(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cn(n).H_(e)}function nh(n,e){n.Ra.$e(e),Cn(n).Y_(e)}function No(n){n.Ra=new Bm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Cn(n).start(),n.Aa.aa()}function Vo(n){return nn(n)&&!Cn(n).M_()&&n.Ta.size>0}function nn(n){return j(n).Ia.size===0}function rh(n){n.Ra=void 0}async function Gg(n){n.Aa.set("Online")}async function Kg(n){n.Ta.forEach((e,t)=>{ko(n,e)})}async function Qg(n,e){rh(n),Vo(n)?(n.Aa.la(e),No(n)):n.Aa.set("Unknown")}async function Xg(n,e,t){if(n.Aa.set("Online"),e instanceof jl&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,e)}catch(r){O(Xt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await As(n,r)}else if(e instanceof us?n.Ra.Ye(e):e instanceof Bl?n.Ra.it(e):n.Ra.et(e),!t.isEqual(B.min()))try{const r=await Yl(n.localStore);t.compareTo(r)>=0&&await function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ta.get(d);p&&i.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const p=i.Ta.get(l);if(!p)return;i.Ta.set(l,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),nh(i,l);const g=new wt(p.target,l,d,p.sequenceNumber);ko(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){O(Xt,"Failed to raise snapshot:",r),await As(n,r)}}async function As(n,e,t){if(!Sn(e))throw e;n.Ia.add(1),await Rr(n),n.Aa.set("Offline"),t||(t=()=>Yl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(Xt,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ws(n)})}function sh(n,e){return e().catch(t=>As(n,t,e))}async function Gs(n){const e=j(n),t=Dt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:po;for(;Jg(e);)try{const s=await Vg(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Yg(e,s)}catch(s){await As(e,s)}ih(e)&&oh(e)}function Jg(n){return nn(n)&&n.Pa.length<10}function Yg(n,e){n.Pa.push(e);const t=Dt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function ih(n){return nn(n)&&!Dt(n).M_()&&n.Pa.length>0}function oh(n){Dt(n).start()}async function Zg(n){Dt(n).na()}async function e_(n){const e=Dt(n);for(const t of n.Pa)e.X_(t.mutations)}async function t_(n,e,t){const r=n.Pa.shift(),s=Io.from(r,e,t);await sh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function n_(n,e){e&&Dt(n).Z_&&await async function(r,s){if(function(a){return Um(a)&&a!==S.ABORTED}(s.code)){const i=r.Pa.shift();Dt(r).N_(),await sh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gs(r)}}(n,e),ih(n)&&oh(n)}async function su(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),O(Xt,"RemoteStore received new credentials");const r=nn(t);t.Ia.add(3),await Rr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ws(t)}async function r_(n,e){const t=j(n);e?(t.Ia.delete(2),await Ws(t)):e||(t.Ia.add(2),await Rr(t),t.Aa.set("Unknown"))}function Cn(n){return n.Va||(n.Va=function(t,r,s){const i=j(t);return i.ia(),new jg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Gg.bind(null,n),e_:Kg.bind(null,n),n_:Qg.bind(null,n),J_:Xg.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Vo(n)?No(n):n.Aa.set("Unknown")):(await n.Va.stop(),rh(n))})),n.Va}function Dt(n){return n.ma||(n.ma=function(t,r,s){const i=j(t);return i.ia(),new qg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Zg.bind(null,n),n_:n_.bind(null,n),ea:e_.bind(null,n),ta:t_.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Gs(n)):(await n.ma.stop(),n.Pa.length>0&&(O(Xt,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new Do(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oo(n,e){if(at("AsyncQueue",`${e}: ${n}`),Sn(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{static emptySet(e){return new mn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Zn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.fa=new te(L.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):x(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class An{constructor(e,t,r,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new An(e,t,mn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class i_{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=ou(),i.forEach((a,u)=>{for(const l of u.wa)l.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function ou(){return new tn(n=>Sl(n),Bs)}async function ah(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new s_,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Oo(a,`Initialization of query '${hn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Lo(t)}async function ch(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function o_(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&Lo(t)}function a_(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Lo(n){n.Da.forEach(e=>{e.next()})}var Yi,au;(au=Yi||(Yi={})).Fa="default",au.Cache="cache";class uh{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new An(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=An.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.key=e}}class hh{constructor(e){this.key=e}}class c_{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Pl(e),this.eu=new mn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new iu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const v=s.get(p),b=js(this.query,g)?g:null,C=!!v&&this.mutatedKeys.has(v.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;v&&b?v.data.isEqual(b.data)?C!==D&&(r.track({type:3,doc:b}),k=!0):this.iu(v,b)||(r.track({type:2,doc:b}),k=!0,(l&&this.Xa(b,l)>0||d&&this.Xa(b,d)<0)&&(u=!0)):!v&&b?(r.track({type:0,doc:b}),k=!0):v&&!b&&(r.track({type:1,doc:v}),k=!0,(l||d)&&(u=!0)),k&&(b?(a=a.add(b),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((p,g)=>function(b,C){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{At:k})}};return D(b)-D(C)}(p.type,g.type)||this.Xa(p.doc,g.doc)),this.su(r),s=s!=null&&s;const u=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new An(this.query,e.eu,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new iu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new hh(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new lh(r))}),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return An.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mo="SyncEngine";class u_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class l_{constructor(e){this.key=e,this.lu=!1}}class h_{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new tn(u=>Sl(u),Bs),this.Tu=new Map,this.Iu=new Set,this.du=new te(L.comparator),this.Eu=new Map,this.Au=new Ro,this.Ru={},this.Vu=new Map,this.mu=wn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function d_(n,e,t=!0){const r=_h(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await dh(r,e,t,!0),s}async function f_(n,e){const t=_h(n);await dh(t,e,!0,!1)}async function dh(n,e,t,r){const s=await Dg(n.localStore,He(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await p_(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&th(n.remoteStore,s),u}async function p_(n,e,t,r,s){n.gu=(g,v,b)=>async function(D,k,q,U){let F=k.view.nu(q);F.Ds&&(F=await Zc(D.localStore,k.query,!1).then(({documents:T})=>k.view.nu(T,F)));const z=U&&U.targetChanges.get(k.targetId),fe=U&&U.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(F,D.isPrimaryClient,z,fe);return uu(D,k.targetId,Y._u),Y.snapshot}(n,g,v,b);const i=await Zc(n.localStore,e,!0),a=new c_(e,i.qs),u=a.nu(i.documents),l=Ar.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);uu(n,t,d._u);const p=new u_(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function m_(n,e,t){const r=j(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Bs(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Co(r.remoteStore,s.targetId),Zi(r,s.targetId)}).catch(bn)):(Zi(r,s.targetId),await Xi(r.localStore,s.targetId,!0))}async function g_(n,e){const t=j(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Co(t.remoteStore,r.targetId))}async function __(n,e,t){const r=A_(n);try{const s=await function(a,u){const l=j(a),d=ee.now(),p=u.reduce((b,C)=>b.add(C.key),W());let g,v;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=ct(),D=W();return l.Os.getEntries(b,p).next(k=>{C=k,C.forEach((q,U)=>{U.isValidDocument()||(D=D.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,C)).next(k=>{g=k;const q=[];for(const U of u){const F=Dm(U,g.get(U.key).overlayedDocument);F!=null&&q.push(new xt(U.key,F,vl(F.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,q,u)}).next(k=>{v=k;const q=k.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(b,k.batchId,q)})}).then(()=>({batchId:v.batchId,changes:kl(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new te($)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,t),await br(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=Oo(s,"Failed to persist write");t.reject(i)}}async function fh(n,e){const t=j(n);try{const r=await kg(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Q(a.lu,14607):s.removedDocuments.size>0&&(Q(a.lu,42227),a.lu=!1))}),await br(t,r,e)}catch(r){await bn(r)}}function cu(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=j(a);l.onlineState=u;let d=!1;l.queries.forEach((p,g)=>{for(const v of g.wa)v.va(u)&&(d=!0)}),d&&Lo(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y_(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new te(L.comparator);a=a.insert(i,Ae.newNoDocument(i,B.min()));const u=W().add(i),l=new zs(B.min(),new Map,new te($),a,u);await fh(r,l),r.du=r.du.remove(i),r.Eu.delete(e),xo(r)}else await Xi(r.localStore,e,!1).then(()=>Zi(r,e,t)).catch(bn)}async function v_(n,e){const t=j(n),r=e.batch.batchId;try{const s=await Cg(t.localStore,e);mh(t,r,null),ph(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await br(t,s)}catch(s){await bn(s)}}async function E_(n,e,t){const r=j(n);try{const s=await function(a,u){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(Q(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);mh(r,e,t),ph(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await br(r,s)}catch(s){await bn(s)}}function ph(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function mh(n,e,t){const r=j(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Zi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||gh(n,r)})}function gh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Co(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),xo(n))}function uu(n,e,t){for(const r of t)r instanceof lh?(n.Au.addReference(r.key,e),T_(n,r)):r instanceof hh?(O(Mo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||gh(n,r.key)):x(19791,{yu:r})}function T_(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(Mo,"New document in limbo: "+t),n.Iu.add(r),xo(n))}function xo(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(J.fromString(e)),r=n.mu.next();n.Eu.set(r,new l_(t)),n.du=n.du.insert(t,r),th(n.remoteStore,new wt(He(vo(t.path)),r,"TargetPurposeLimboResolution",xs.ue))}}async function br(n,e,t){const r=j(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=So.Es(l.targetId,d);i.push(g)}}))}),await Promise.all(a),r.hu.J_(s),await async function(l,d){const p=j(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>P.forEach(d,v=>P.forEach(v.Is,b=>p.persistence.referenceDelegate.addReference(g,v.targetId,b)).next(()=>P.forEach(v.ds,b=>p.persistence.referenceDelegate.removeReference(g,v.targetId,b)))))}catch(g){if(!Sn(g))throw g;O(Po,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const b=p.Fs.get(v),C=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(v,D)}}}(r.localStore,i))}async function I_(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){O(Mo,"User change. New user:",e.toKey());const r=await Jl(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(u=>{u.forEach(l=>{l.reject(new V(S.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await br(t,r.Bs)}}function w_(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let s=W();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const u=t.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function _h(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=w_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y_.bind(null,e),e.hu.J_=o_.bind(null,e.eventManager),e.hu.pu=a_.bind(null,e.eventManager),e}function A_(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E_.bind(null,e),e}class Rs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hs(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Pg(this.persistence,new Rg,e.initialUser,this.serializer)}Du(e){return new Xl(bo.Vi,this.serializer)}bu(e){return new Lg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rs.provider={build:()=>new Rs};class R_ extends Rs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Q(this.persistence.referenceDelegate instanceof ws,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lg(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Xl(r=>ws.Vi(r,t),this.serializer)}}class eo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I_.bind(null,this.syncEngine),await r_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i_}()}createDatastore(e){const t=Hs(e.databaseInfo.databaseId),r=function(i){return new Bg(i)}(e.databaseInfo);return function(i,a,u,l){return new zg(i,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,u){return new Wg(r,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>cu(this.syncEngine,t,0),function(){return nu.C()?new nu:new Mg}())}createSyncEngine(e,t){return function(s,i,a,u,l,d,p){const g=new h_(s,i,a,u,l,d);return p&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=j(s);O(Xt,"RemoteStore shutting down."),i.Ia.add(5),await Rr(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}eo.provider={build:()=>new eo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="FirestoreClient";class b_{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=fo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O(Ot,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(Ot,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ki(n,e){n.asyncQueue.verifyOperationInProgress(),O(Ot,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jl(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Pt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Pt("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function lu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await S_(n);O(Ot,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>su(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>su(e.remoteStore,s)),n._onlineComponents=e}async function S_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Ot,"Using user provided OfflineComponentProvider");try{await ki(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Pt("Error using user provided cache. Falling back to memory cache: "+t),await ki(n,new Rs)}}else O(Ot,"Using default OfflineComponentProvider"),await ki(n,new R_(void 0));return n._offlineComponents}async function vh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Ot,"Using user provided OnlineComponentProvider"),await lu(n,n._uninitializedComponentsProvider._online)):(O(Ot,"Using default OnlineComponentProvider"),await lu(n,new eo))),n._onlineComponents}function P_(n){return vh(n).then(e=>e.syncEngine)}async function Eh(n){const e=await vh(n),t=e.eventManager;return t.onListen=d_.bind(null,e.syncEngine),t.onUnlisten=m_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=f_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=g_.bind(null,e.syncEngine),t}function C_(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new yh({next:v=>{p.Ou(),a.enqueueAndForget(()=>ch(i,g));const b=v.docs.has(u);!b&&v.fromCache?d.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&v.fromCache&&l&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new uh(vo(u.path),p,{includeMetadataChanges:!0,ka:!0});return ah(i,g)}(await Eh(n),n.asyncQueue,e,t,r)),r.promise}function k_(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new yh({next:v=>{p.Ou(),a.enqueueAndForget(()=>ch(i,g)),v.fromCache&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new uh(u,p,{includeMetadataChanges:!0,ka:!0});return ah(i,g)}(await Eh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firestore.googleapis.com",du=!0;class fu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ih,this.ssl=du}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:du;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ql;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cg)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ks{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xp;switch(r.type){case"firstParty":return new jp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hu.get(t);r&&(O("ComponentProvider","Removing Datastore"),hu.delete(t),r.terminate())}(this),Promise.resolve()}}function N_(n,e,t,r={}){var s;n=Xe(n,Ks);const i=Lt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(ao(`https://${l}`),co("Firestore",!0)),a.host!==Ih&&a.host!==l&&Pt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Gt(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=we.MOCK_USER;else{p=Xu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new we(v)}n._authCredentials=new Up(new ol(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rn(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ir(t,ae._jsonSchema))return new ae(e,r||null,new L(J.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:le("string",ae._jsonSchemaVersion),referencePath:le("string")};class bt extends rn{constructor(e,t,r){super(e,t,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new L(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function RT(n,e,...t){if(n=re(n),cl("collection","path",e),n instanceof Ks){const r=J.fromString(e,...t);return bc(r),new bt(n,null,r)}{if(!(n instanceof ae||n instanceof bt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return bc(r),new bt(n.firestore,null,r)}}function bT(n,e,...t){if(n=re(n),arguments.length===1&&(e=fo.newId()),cl("doc","path",e),n instanceof Ks){const r=J.fromString(e,...t);return Rc(r),new ae(n,null,new L(r))}{if(!(n instanceof ae||n instanceof bt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Rc(r),new ae(n.firestore,n instanceof bt?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="AsyncQueue";class mu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Zl(this,"async_queue_retry"),this.oc=()=>{const r=Ci();r&&O(pu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ci();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new st;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Sn(e))throw e;O(pu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,at("INTERNAL UNHANDLED ERROR: ",gu(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Do.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&x(47125,{hc:gu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function gu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kn extends Ks{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new mu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mu(e),this._firestoreClient=void 0,await e}}}function ST(n,e){const t=typeof n=="object"?n:lo(),r=typeof n=="string"?n:ys,s=Ls(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gu("firestore");i&&N_(s,...i)}return s}function Uo(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||V_(n),n._firestoreClient}function V_(n){var e,t,r;const s=n._freezeSettings(),i=function(u,l,d,p){return new rm(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Th(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new b_(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(_e.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ir(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:le("string",Le._jsonSchemaVersion),bytes:le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ge._jsonSchemaVersion}}static fromJSON(e){if(Ir(e,Ge._jsonSchema))return new Ge(e.latitude,e.longitude)}}Ge._jsonSchemaVersion="firestore/geoPoint/1.0",Ge._jsonSchema={type:le("string",Ge._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ir(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ke(e.vectorValues);throw new V(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:le("string",Ke._jsonSchemaVersion),vectorValues:le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^__.*__$/;class O_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}class wh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ah(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ec:n})}}class Fo{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Fo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return bs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ah(this.Ec)&&D_.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class L_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hs(e)}Dc(e,t,r,s=!1){return new Fo({Ec:e,methodName:t,bc:r,path:ge.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=Hs(n._databaseId);return new L_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function M_(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);qo("Data must be an object, but it was:",a,r);const u=Rh(r,a);let l,d;if(i.merge)l=new De(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const v=to(e,g,t);if(!a.contains(v))throw new V(S.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Sh(p,v)||p.push(v)}l=new De(p),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new O_(new Ne(u),l,d)}class Js extends Xs{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Js}}class jo extends Xs{_toFieldTransform(e){return new Cm(e.path,new mr)}isEqual(e){return e instanceof jo}}function x_(n,e,t,r){const s=n.Dc(1,e,t);qo("Data must be an object, but it was:",s,r);const i=[],a=Ne.empty();Mt(r,(l,d)=>{const p=$o(e,l,t);d=re(d);const g=s.gc(p);if(d instanceof Js)i.push(p);else{const v=Sr(d,g);v!=null&&(i.push(p),a.set(p,v))}});const u=new De(i);return new wh(a,u,s.fieldTransforms)}function U_(n,e,t,r,s,i){const a=n.Dc(1,e,t),u=[to(e,r,t)],l=[s];if(i.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)u.push(to(e,i[v])),l.push(i[v+1]);const d=[],p=Ne.empty();for(let v=u.length-1;v>=0;--v)if(!Sh(d,u[v])){const b=u[v];let C=l[v];C=re(C);const D=a.gc(b);if(C instanceof Js)d.push(b);else{const k=Sr(C,D);k!=null&&(d.push(b),p.set(b,k))}}const g=new De(d);return new wh(p,g,a.fieldTransforms)}function F_(n,e,t,r=!1){return Sr(t,n.Dc(r?4:3,e))}function Sr(n,e){if(bh(n=re(n)))return qo("Unsupported field value:",e,n),Rh(n,e);if(n instanceof Xs)return function(r,s){if(!Ah(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const u of r){let l=Sr(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:Is(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Is(s.serializer,i)}}if(r instanceof Ge)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:ql(s.serializer,r._byteString)};if(r instanceof ae){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ao(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ke)return function(a,u){return{mapValue:{fields:{[_l]:{stringValue:yl},[vs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Eo(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ms(r)}`)}(n,e)}function Rh(n,e){const t={};return hl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(n,(r,s)=>{const i=Sr(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Ge||n instanceof Le||n instanceof ae||n instanceof Xs||n instanceof Ke)}function qo(n,e,t){if(!bh(t)||!ul(t)){const r=Ms(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function to(n,e,t){if((e=re(e))instanceof Qs)return e._internalPath;if(typeof e=="string")return $o(n,e);throw bs("Field path arguments must be of type string or ",n,!1,void 0,t)}const B_=new RegExp("[~\\*/\\[\\]]");function $o(n,e,t){if(e.search(B_)>=0)throw bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qs(...e.split("."))._internalPath}catch{throw bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new V(S.INVALID_ARGUMENT,u+n+l)}function Sh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class j_ extends Ph{data(){return super.data()}}function zo(n,e){return typeof e=="string"?$o(n,e):e instanceof Qs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ho{}class Ch extends Ho{}function PT(n,e,...t){let r=[];e instanceof Ho&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Go).length,u=i.filter(l=>l instanceof Wo).length;if(a>1||a>0&&u>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Wo extends Ch{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){const t=this._parse(e);return kh(e._query,t),new rn(e.firestore,e.converter,zi(e._query,t))}_parse(e){const t=Bo(e.firestore);return function(i,a,u,l,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){yu(g,p);const C=[];for(const D of g)C.push(_u(l,i,D));v={arrayValue:{values:C}}}else v=_u(l,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||yu(g,p),v=F_(u,a,g,p==="in"||p==="not-in");return ue.create(d,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Go extends Ho{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Go(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)kh(a,l),a=zi(a,l)}(e._query,t),new rn(e.firestore,e.converter,zi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ko extends Ch{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ko(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pr(i,a)}(e._query,this._field,this._direction);return new rn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Pn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function CT(n,e="asc"){const t=e,r=zo("orderBy",n);return Ko._create(r,t)}function _u(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bl(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!L.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oc(n,new L(r))}if(t instanceof ae)return Oc(n,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(t)}.`)}function yu(n,e){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kh(n,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $_{convertValue(e,t="none"){switch(Vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Mt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[vs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Ke(i)}convertGeoPoint(e){return new Ge(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hr(e));default:return null}}convertTimestamp(e){const t=kt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);Q(Kl(r),9688,{name:e});const s=new dr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||at(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ht extends Ph{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ht._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ht._jsonSchema={type:le("string",Ht._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class ls extends Ht{data(e={}){return super.data(e)}}class gn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ls(this._firestore,this._userDataWriter,r.key,r,new tr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new tr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:H_(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function H_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){n=Xe(n,ae);const e=Xe(n.firestore,kn);return C_(Uo(e),n._key).then(t=>W_(e,n,t))}gn._jsonSchemaVersion="firestore/querySnapshot/1.0",gn._jsonSchema={type:le("string",gn._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class Nh extends $_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function NT(n){n=Xe(n,rn);const e=Xe(n.firestore,kn),t=Uo(e),r=new Nh(e);return q_(n._query),k_(t,n._query).then(s=>new gn(e,r,n,s))}function VT(n,e,t){n=Xe(n,ae);const r=Xe(n.firestore,kn),s=z_(n.converter,e);return Qo(r,[M_(Bo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Fe.none())])}function DT(n,e,t,...r){n=Xe(n,ae);const s=Xe(n.firestore,kn),i=Bo(s);let a;return a=typeof(e=re(e))=="string"||e instanceof Qs?U_(i,"updateDoc",n._key,e,t,r):x_(i,"updateDoc",n._key,e),Qo(s,[a.toMutation(n._key,Fe.exists(!0))])}function OT(n){return Qo(Xe(n.firestore,kn),[new To(n._key,Fe.none())])}function Qo(n,e){return function(r,s){const i=new st;return r.asyncQueue.enqueueAndForget(async()=>__(await P_(r),s,i)),i.promise}(Uo(n),e)}function W_(n,e,t){const r=t.docs.get(e._key),s=new Nh(n);return new Ht(n,s,e._key,r,new tr(t.hasPendingWrites,t.fromCache),e.converter)}function LT(){return new jo("serverTimestamp")}(function(e,t=!0){(function(s){Rn=s})(en),Kt(new St("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new kn(new Fp(r.getProvider("auth-internal")),new qp(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),ze(Ec,Tc,e),ze(Ec,Tc,"esm2017")})();var G_="firebase",K_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(G_,K_,"app");function Vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q_=Vh,Dh=new Er("auth","Firebase",Vh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new uo("@firebase/auth");function X_(n,...e){Ss.logLevel<=H.WARN&&Ss.warn(`Auth (${en}): ${n}`,...e)}function hs(n,...e){Ss.logLevel<=H.ERROR&&Ss.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,...e){throw Jo(n,...e)}function Be(n,...e){return Jo(n,...e)}function Xo(n,e,t){const r=Object.assign(Object.assign({},Q_()),{[e]:t});return new Er("auth","Firebase",r).create(e,{appName:n.name})}function it(n){return Xo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function J_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Me(n,"argument-error"),Xo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Dh.create(n,...e)}function M(n,e,...t){if(!n)throw Jo(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hs(e),new Error(e)}function ut(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Y_(){return vu()==="http:"||vu()==="https:"}function vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y_()||bf()||"connection"in navigator)?navigator.onLine:!0}function ey(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=wf()||Sf()}get(){return Z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ry=new Pr(3e4,6e4);function lt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ht(n,e,t,r,s={}){return Lh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=Tr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Rf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Lt(n.emulatorConfig.host)&&(d.credentials="include"),Oh.fetch()(await Mh(n,n.config.apiHost,t,u),d)})}async function Lh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ty),e);try{const s=new iy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ns(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ns(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ns(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Xo(n,p,d);Me(n,p)}}catch(s){if(s instanceof Ye)throw s;Me(n,"network-request-failed",{message:String(s)})}}async function Cr(n,e,t,r,s={}){const i=await ht(n,e,t,r,s);return"mfaPendingCredential"in i&&Me(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Mh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Yo(n.config,s):`${n.config.apiScheme}://${s}`;return ny.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function sy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),ry.get())})}}function ns(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}function Eu(n){return n!==void 0&&n.enterprise!==void 0}class oy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ay(n,e){return ht(n,"GET","/v2/recaptchaConfig",lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e){return ht(n,"POST","/v1/accounts:delete",e)}async function Ps(n,e){return ht(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uy(n,e=!1){const t=re(n),r=await t.getIdToken(e),s=Zo(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ar(Ni(s.auth_time)),issuedAtTime:ar(Ni(s.iat)),expirationTime:ar(Ni(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(n){return Number(n)*1e3}function Zo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return hs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hu(t);return s?JSON.parse(s):(hs("Failed to decode base64 JWT payload"),null)}catch(s){return hs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tu(n){const e=Zo(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ye&&ly(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yr(n,Ps(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xh(i.providerUserInfo):[],u=fy(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new ro(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function dy(n){const e=re(n);await Cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xh(n){return n.map(e=>{var{providerId:t}=e,r=oo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e){const t=await Lh(n,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Mh(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Lt(n.emulatorConfig.host)&&(l.credentials="include"),Oh.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function my(n,e){return ht(n,"POST","/v2/accounts:revokeToken",lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await py(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new _n;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _n,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ro(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uy(this,e)}reload(){return dy(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ke(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await yr(this,cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,l,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(u=t.tenantId)!==null&&u!==void 0?u:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:F,emailVerified:z,isAnonymous:fe,providerData:Y,stsTokenManager:T}=t;M(F&&T,e,"internal-error");const m=_n.fromJSON(this.name,T);M(typeof F=="string",e,"internal-error"),_t(g,e.name),_t(v,e.name),M(typeof z=="boolean",e,"internal-error"),M(typeof fe=="boolean",e,"internal-error"),_t(b,e.name),_t(C,e.name),_t(D,e.name),_t(k,e.name),_t(q,e.name),_t(U,e.name);const y=new Ue({uid:F,auth:e,email:v,emailVerified:z,displayName:g,isAnonymous:fe,photoURL:C,phoneNumber:b,tenantId:D,stsTokenManager:m,createdAt:q,lastLoginAt:U});return Y&&Array.isArray(Y)&&(y.providerData=Y.map(E=>Object.assign({},E))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new _n;s.updateFromServerResponse(t);const i=new Ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new _n;u.updateFromIdToken(r);const l=new Ue({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ro(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map;function rt(n){ut(n instanceof Function,"Expected a class definition");let e=Iu.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Iu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uh.type="NONE";const wu=Uh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e,t){return`firebase:${n}:${e}:${t}`}class yn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=ds("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ps(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new yn(rt(wu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||rt(wu);const a=ds(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const v=await Ps(e,{idToken:p}).catch(()=>{});if(!v)break;g=await Ue._fromGetAccountInfoResponse(e,v,p)}else g=Ue._fromJSON(e,p);d!==i&&(u=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new yn(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new yn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zh(e))return"Blackberry";if(Hh(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||jh(e))&&!e.includes("edge/"))return"Chrome";if($h(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fh(n=Re()){return/firefox\//i.test(n)}function Bh(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jh(n=Re()){return/crios\//i.test(n)}function qh(n=Re()){return/iemobile/i.test(n)}function $h(n=Re()){return/android/i.test(n)}function zh(n=Re()){return/blackberry/i.test(n)}function Hh(n=Re()){return/webos/i.test(n)}function ea(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gy(n=Re()){var e;return ea(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _y(){return Pf()&&document.documentMode===10}function Wh(n=Re()){return ea(n)||$h(n)||Hh(n)||zh(n)||/windows phone/i.test(n)||qh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e=[]){let t;switch(n){case"Browser":t=Au(Re());break;case"Worker":t=`${Au(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(n,e={}){return ht(n,"GET","/v2/passwordPolicy",lt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=6;class Ty{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Ey,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ps(this,{idToken:e}),r=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ke(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ke(this.app))return Promise.reject(it(this));const t=e?re(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ke(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ke(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vy(this),t=new Ty(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await my(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&X_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function dt(n){return re(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wy(n){Ys=n}function Kh(n){return Ys.loadJS(n)}function Ay(){return Ys.recaptchaEnterpriseScript}function Ry(){return Ys.gapiScript}function by(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Sy{constructor(){this.enterprise=new Py}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Py{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Cy="recaptcha-enterprise",Qh="NO_RECAPTCHA";class ky{constructor(e){this.type=Cy,this.auth=dt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{ay(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new oy(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;Eu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Qh)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(u=>{if(!t&&Eu(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ay();l.length!==0&&(l+=u),Kh(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function bu(n,e,t,r=!1,s=!1){const i=new ky(n);let a;if(s)a=Qh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function ks(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await bu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await bu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n,e){const t=Ls(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Gt(i,e??{}))return s;Me(s,"already-initialized")}return t.initialize({options:e})}function Vy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Dy(n,e,t){const r=dt(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xh(e),{host:a,port:u}=Oy(e),l=u===null?"":`:${u}`,d={url:`${i}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Gt(d,r.config.emulator)&&Gt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Lt(a)?(ao(`${i}//${a}${l}`),co("Auth",!0)):Ly()}function Xh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Oy(n){const e=Xh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Su(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Su(a)}}}function Su(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ly(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function My(n,e){return ht(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,e){return Cr(n,"POST","/v1/accounts:signInWithPassword",lt(n,e))}async function Uy(n,e){return ht(n,"POST","/v1/accounts:sendOobCode",lt(n,e))}async function Fy(n,e){return Uy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(n,e){return Cr(n,"POST","/v1/accounts:signInWithEmailLink",lt(n,e))}async function jy(n,e){return Cr(n,"POST","/v1/accounts:signInWithEmailLink",lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ta{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ks(e,t,"signInWithPassword",xy);case"emailLink":return By(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ks(e,r,"signUpPassword",My);case"emailLink":return jy(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e){return Cr(n,"POST","/v1/accounts:signInWithIdp",lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="http://localhost";class Jt extends ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=oo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Jt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:qy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zy(n){const e=Xn(Jn(n)).link,t=e?Xn(Jn(e)).deep_link_id:null,r=Xn(Jn(n)).deep_link_id;return(r?Xn(Jn(r)).link:null)||r||t||e||n}class na{constructor(e){var t,r,s,i,a,u;const l=Xn(Jn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,g=$y((s=l.mode)!==null&&s!==void 0?s:null);M(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=zy(e);try{return new na(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=na.parseLink(t);return M(r,"argument-error"),vr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends kr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends kr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends kr{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){return Cr(n,"POST","/v1/accounts:signUp",lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ue._fromIdTokenResponse(e,r,s),a=Pu(r);return new Yt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Ye{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ns(e,t,r,s)}}function Jh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(n,i,e,r):i})}async function Wy(n,e,t=!1){const r=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e,t=!1){const{auth:r}=n;if(ke(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await yr(n,Jh(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=Zo(i.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),Yt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(n,e,t=!1){if(ke(n.app))return Promise.reject(it(n));const r="signIn",s=await Jh(n,r,e),i=await Yt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Ky(n,e){return Yh(dt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(n){const e=dt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MT(n,e,t){const r=dt(n);await ks(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fy)}async function xT(n,e,t){if(ke(n.app))return Promise.reject(it(n));const r=dt(n),a=await ks(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Zh(n),l}),u=await Yt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function UT(n,e,t){return ke(n.app)?Promise.reject(it(n)):Ky(re(n),Nn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zh(n),r})}function Qy(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function Xy(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function Jy(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function FT(n){return re(n).signOut()}const Vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=1e3,Zy=10;class td extends ed{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);_y()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}td.type="LOCAL";const ev=td;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends ed{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nd.type="SESSION";const rd=nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Zs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await tv(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=sa("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(v.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function rv(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function sv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ov(){return sd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="firebaseLocalStorageDb",av=1,Ds="firebaseLocalStorage",od="fbase_key";class Nr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Ds],e?"readwrite":"readonly").objectStore(Ds)}function cv(){const n=indexedDB.deleteDatabase(id);return new Nr(n).toPromise()}function so(){const n=indexedDB.open(id,av);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ds,{keyPath:od})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ds)?e(r):(r.close(),await cv(),e(await so()))})})}async function Cu(n,e,t){const r=ei(n,!0).put({[od]:e,value:t});return new Nr(r).toPromise()}async function uv(n,e){const t=ei(n,!1).get(e),r=await new Nr(t).toPromise();return r===void 0?null:r.value}function ku(n,e){const t=ei(n,!0).delete(e);return new Nr(t).toPromise()}const lv=800,hv=3;class ad{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(ov()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sv(),!this.activeServiceWorker)return;this.sender=new nv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await Cu(e,Vs,"1"),await ku(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ku(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ei(s,!1).getAll();return new Nr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ad.type="LOCAL";const dv=ad;new Pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n,e){return e?rt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fv(n){return Yh(n.auth,new ia(n),n.bypassAuthState)}function pv(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Gy(t,new ia(n),n.bypassAuthState)}async function mv(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Wy(t,new ia(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fv;case"linkViaPopup":case"linkViaRedirect":return mv;case"reauthViaPopup":case"reauthViaRedirect":return pv;default:Me(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Pr(2e3,1e4);async function BT(n,e,t){if(ke(n.app))return Promise.reject(Be(n,"operation-not-supported-in-this-environment"));const r=dt(n);J_(n,e,ra);const s=cd(r,t);return new zt(r,"signInViaPopup",e,s).executeNotNull()}class zt extends ud{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gv.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="pendingRedirect",fs=new Map;class yv extends ud{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await vv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vv(n,e){const t=Iv(e),r=Tv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ev(n,e){fs.set(n._key(),e)}function Tv(n){return rt(n._redirectPersistence)}function Iv(n){return ds(_v,n.config.apiKey,n.name)}async function wv(n,e,t=!1){if(ke(n.app))return Promise.reject(it(n));const r=dt(n),s=cd(r,e),a=await new yv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=10*60*1e3;class Rv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ld(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Av&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}saveEventToCache(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}function Nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ld({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ld(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,e={}){return ht(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cv=/^https?/;async function kv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Sv(n);for(const t of e)try{if(Nv(t))return}catch{}Me(n,"unauthorized-domain")}function Nv(n){const e=no(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Cv.test(t))return!1;if(Pv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Pr(3e4,6e4);function Vu(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Dv(n){return new Promise((e,t)=>{var r,s,i;function a(){Vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vu(),t(Be(n,"network-request-failed"))},timeout:Vv.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)a();else{const u=by("iframefcb");return Qe()[u]=()=>{gapi.load?a():t(Be(n,"network-request-failed"))},Kh(`${Ry()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw ps=null,e})}let ps=null;function Ov(n){return ps=ps||Dv(n),ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Pr(5e3,15e3),Mv="__/auth/iframe",xv="emulator/auth/iframe",Uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bv(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,xv):`https://${n.config.authDomain}/${Mv}`,r={apiKey:e.apiKey,appName:n.name,v:en},s=Fv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Tr(r).slice(1)}`}async function jv(n){const e=await Ov(n),t=Qe().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Bv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),u=Qe().setTimeout(()=>{i(a)},Lv.get());function l(){Qe().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$v=500,zv=600,Hv="_blank",Wv="http://localhost";class Du{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gv(n,e,t,r=$v,s=zv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},qv),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Re().toLowerCase();t&&(u=jh(d)?Hv:t),Fh(d)&&(e=e||Wv,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[b,C])=>`${v}${b}=${C},`,"");if(gy(d)&&u!=="_self")return Kv(e||"",u),new Du(null);const g=window.open(e||"",u,p);M(g,n,"popup-blocked");try{g.focus()}catch{}return new Du(g)}function Kv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="__/auth/handler",Xv="emulator/auth/handler",Jv=encodeURIComponent("fac");async function Ou(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:en,eventId:s};if(e instanceof ra){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Lf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof kr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${Jv}=${encodeURIComponent(l)}`:"";return`${Yv(n)}?${Tr(u).slice(1)}${d}`}function Yv({config:n}){return n.emulator?Yo(n,Xv):`https://${n.authDomain}/${Qv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="webStorageSupport";class Zv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rd,this._completeRedirectFn=wv,this._overrideRedirectResult=Ev}async _openPopup(e,t,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ou(e,t,r,no(),s);return Gv(e,a,sa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ou(e,t,r,no(),s);return rv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jv(e),r=new Rv(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vi,{type:Vi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vi];a!==void 0&&t(!!a),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wh()||Bh()||ea()}}const eE=Zv;var Lu="@firebase/auth",Mu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rE(n){Kt(new St("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gh(n)},d=new Iy(r,s,i,l);return Vy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new St("auth-internal",e=>{const t=dt(e.getProvider("auth").getImmediate());return(r=>new tE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Lu,Mu,nE(n)),ze(Lu,Mu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=5*60,iE=Qu("authIdTokenMaxAge")||sE;let xu=null;const oE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>iE)return;const s=t==null?void 0:t.token;xu!==s&&(xu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jT(n=lo()){const e=Ls(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ny(n,{popupRedirectResolver:eE,persistence:[dv,ev,rd]}),r=Qu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=oE(i.toString());Xy(t,a,()=>a(t.currentUser)),Qy(t,u=>a(u))}}const s=Wu("auth");return s&&Dy(t,`http://${s}`),t}function aE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}wy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",aE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rE("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="firebasestorage.googleapis.com",dd="storageBucket",cE=2*60*1e3,uE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends Ye{constructor(e,t,r=0){super(Di(e),`Firebase Storage: ${t} (${Di(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Di(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Di(n){return"storage/"+n}function oa(){const n="An unknown error occurred, please check the error payload for server response.";return new ie(se.UNKNOWN,n)}function lE(n){return new ie(se.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function hE(n){return new ie(se.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ie(se.UNAUTHENTICATED,n)}function fE(){return new ie(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pE(n){return new ie(se.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function mE(){return new ie(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gE(){return new ie(se.CANCELED,"User canceled the upload/download.")}function _E(n){return new ie(se.INVALID_URL,"Invalid URL '"+n+"'.")}function yE(n){return new ie(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function vE(){return new ie(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dd+"' property when initializing the app?")}function EE(){return new ie(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TE(){return new ie(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function IE(n){return new ie(se.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function io(n){return new ie(se.INVALID_ARGUMENT,n)}function fd(){return new ie(se.APP_DELETED,"The Firebase app was deleted.")}function wE(n){return new ie(se.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cr(n,e){return new ie(se.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Qn(n){throw new ie(se.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Oe.makeFromUrl(e,t)}catch{return new Oe(e,"")}if(r.path==="")return r;throw yE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",b=new RegExp(`^https?://${g}/${p}/b/${s}/o${v}`,"i"),C={bucket:1,path:3},D=t===hd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",q=new RegExp(`^https?://${D}/${s}/${k}`,"i"),F=[{regex:u,indices:l,postModify:i},{regex:b,indices:C,postModify:d},{regex:q,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<F.length;z++){const fe=F[z],Y=fe.regex.exec(e);if(Y){const T=Y[fe.indices.bucket];let m=Y[fe.indices.path];m||(m=""),r=new Oe(T,m),fe.postModify(r);break}}if(r==null)throw _E(e);return r}}class AE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n,e,t){let r=1,s=null,i=null,a=!1,u=0;function l(){return u===2}let d=!1;function p(...k){d||(d=!0,e.apply(null,k))}function g(k){s=setTimeout(()=>{s=null,n(b,l())},k)}function v(){i&&clearTimeout(i)}function b(k,...q){if(d){v();return}if(k){v(),p.call(null,k,...q);return}if(l()||a){v(),p.call(null,k,...q);return}r<64&&(r*=2);let F;u===1?(u=2,F=0):F=(r+Math.random())*1e3,g(F)}let C=!1;function D(k){C||(C=!0,v(),!d&&(s!==null?(k||(u=2),clearTimeout(s),g(0)):k||(u=1)))}return g(0),i=setTimeout(()=>{a=!0,D(!0)},t),D}function bE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n){return n!==void 0}function PE(n){return typeof n=="object"&&!Array.isArray(n)}function aa(n){return typeof n=="string"||n instanceof String}function Uu(n){return ca()&&n instanceof Blob}function ca(){return typeof Blob<"u"}function Fu(n,e,t,r){if(r<e)throw io(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw io(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function pd(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Wt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wt||(Wt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,r,s,i,a,u,l,d,p,g,v=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=g,this.retry=v,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,D)=>{this.resolve_=C,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new rs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===Wt.NO_ERROR,l=i.getStatus();if(!u||CE(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Wt.ABORT;r(!1,new rs(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new rs(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());SE(l)?i(l):i()}catch(l){a(l)}else if(u!==null){const l=oa();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(s.canceled){const l=this.appDelete_?fd():gE();a(l)}else{const l=mE();a(l)}};this.canceled_?t(!1,new rs(!1,null,!0)):this.backoffId_=RE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function NE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function VE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function OE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function LE(n,e,t,r,s,i,a=!0,u=!1){const l=pd(n.urlParams),d=n.url+l,p=Object.assign({},n.headers);return DE(p,e),NE(p,t),VE(p,i),OE(p,r),new kE(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xE(...n){const e=ME();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ca())return new Blob(n);throw new ie(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){if(typeof atob>"u")throw IE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oi{constructor(e,t){this.data=e,this.contentType=t||null}}function BE(n,e){switch(n){case $e.RAW:return new Oi(md(e));case $e.BASE64:case $e.BASE64URL:return new Oi(gd(n,e));case $e.DATA_URL:return new Oi(qE(e),$E(e))}throw oa()}function md(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jE(n){let e;try{e=decodeURIComponent(n)}catch{throw cr($e.DATA_URL,"Malformed data URL.")}return md(e)}function gd(n,e){switch(n){case $e.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw cr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $e.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw cr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=FE(e)}catch(s){throw s.message.includes("polyfill")?s:cr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class _d{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cr($e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=zE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qE(n){const e=new _d(n);return e.base64?gd($e.BASE64,e.rest):jE(e.rest)}function $E(n){return new _d(n).contentType}function zE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){let r=0,s="";Uu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Uu(this.data_)){const r=this.data_,s=UE(r,e,t);return s===null?null:new It(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new It(r,!0)}}static getBlob(...e){if(ca()){const t=e.map(r=>r instanceof It?r.data_:r);return new It(xE.apply(null,t))}else{const t=e.map(a=>aa(a)?BE($e.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)s[i++]=a[u]}),new It(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){let e;try{e=JSON.parse(n)}catch{return null}return PE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function vd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e){return e}class Pe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||GE}}let ss=null;function KE(n){return!aa(n)||n.length<2?n:vd(n)}function Ed(){if(ss)return ss;const n=[];n.push(new Pe("bucket")),n.push(new Pe("generation")),n.push(new Pe("metageneration")),n.push(new Pe("name","fullPath",!0));function e(i,a){return KE(a)}const t=new Pe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Pe("size");return s.xform=r,n.push(s),n.push(new Pe("timeCreated")),n.push(new Pe("updated")),n.push(new Pe("md5Hash",null,!0)),n.push(new Pe("cacheControl",null,!0)),n.push(new Pe("contentDisposition",null,!0)),n.push(new Pe("contentEncoding",null,!0)),n.push(new Pe("contentLanguage",null,!0)),n.push(new Pe("contentType",null,!0)),n.push(new Pe("metadata","customMetadata",!0)),ss=n,ss}function QE(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Oe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function XE(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return QE(r,n),r}function Td(n,e,t){const r=yd(e);return r===null?null:XE(n,r,t)}function JE(n,e,t,r){const s=yd(e);if(s===null||!aa(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,g=n.fullPath,v="/b/"+a(p)+"/o/"+a(g),b=ua(v,t,r),C=pd({alt:"media",token:d});return b+C})[0]}function YE(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Id{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){if(!n)throw oa()}function ZE(n,e){function t(r,s){const i=Td(n,s,e);return wd(i!==null),i}return t}function eT(n,e){function t(r,s){const i=Td(n,s,e);return wd(i!==null),JE(i,s,n.host,n._protocol)}return t}function Ad(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=fE():s=dE():t.getStatus()===402?s=hE(n.bucket):t.getStatus()===403?s=pE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function tT(n){const e=Ad(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=lE(n.path)),i.serverResponse=s.serverResponse,i}return t}function nT(n,e,t){const r=e.fullServerUrl(),s=ua(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,u=new Id(s,i,eT(n,t),a);return u.errorHandler=tT(e),u}function rT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function sT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=rT(null,e)),r}function iT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let F="";for(let z=0;z<2;z++)F=F+Math.random().toString().slice(2);return F}const l=u();a["Content-Type"]="multipart/related; boundary="+l;const d=sT(e,r,s),p=YE(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+l+"--",b=It.getBlob(g,r,v);if(b===null)throw EE();const C={name:d.fullPath},D=ua(i,n.host,n._protocol),k="POST",q=n.maxUploadRetryTime,U=new Id(D,k,ZE(n,t),q);return U.urlParams=C,U.headers=a,U.body=b.uploadData(),U.errorHandler=Ad(e),U}class oT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Qn("cannot .send() more than once");if(Lt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aT extends oT{initXhr(){this.xhr_.responseType="text"}}function Rd(){return new aT}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this._service=e,t instanceof Oe?this._location=t:this._location=Oe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Zt(e,t)}get root(){const e=new Oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vd(this._location.path)}get storage(){return this._service}get parent(){const e=HE(this._location.path);if(e===null)return null;const t=new Oe(this._location.bucket,e);return new Zt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wE(e)}}function cT(n,e,t){n._throwIfRoot("uploadBytes");const r=iT(n.storage,n._location,Ed(),new It(e,!0),t);return n.storage.makeRequestWithTokens(r,Rd).then(s=>({metadata:s,ref:n}))}function uT(n){n._throwIfRoot("getDownloadURL");const e=nT(n.storage,n._location,Ed());return n.storage.makeRequestWithTokens(e,Rd).then(t=>{if(t===null)throw TE();return t})}function lT(n,e){const t=WE(n._location.path,e),r=new Oe(n._location.bucket,t);return new Zt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){return/^[A-Za-z]+:\/\//.test(n)}function dT(n,e){return new Zt(n,e)}function bd(n,e){if(n instanceof la){const t=n;if(t._bucket==null)throw vE();const r=new Zt(t,t._bucket);return e!=null?bd(r,e):r}else return e!==void 0?lT(n,e):n}function fT(n,e){if(e&&hT(e)){if(n instanceof la)return dT(n,e);throw io("To use ref(service, url), the first argument must be a Storage instance.")}else return bd(n,e)}function Bu(n,e){const t=e==null?void 0:e[dd];return t==null?null:Oe.makeFromBucketSpec(t,n)}function pT(n,e,t,r={}){n.host=`${e}:${t}`;const s=Lt(e);s&&(ao(`https://${n.host}/b`),co("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Xu(i,n.app.options.projectId))}class la{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=hd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cE,this._maxUploadRetryTime=uE,this._requests=new Set,s!=null?this._bucket=Oe.makeFromBucketSpec(s,this._host):this._bucket=Bu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Oe.makeFromBucketSpec(this._url,e):this._bucket=Bu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new AE(fd());{const a=LE(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ju="@firebase/storage",qu="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="storage";function qT(n,e,t){return n=re(n),cT(n,e,t)}function $T(n){return n=re(n),uT(n)}function zT(n,e){return n=re(n),fT(n,e)}function HT(n=lo(),e){n=re(n);const r=Ls(n,Sd).getImmediate({identifier:e}),s=Gu("storage");return s&&mT(r,...s),r}function mT(n,e,t,r={}){pT(n,e,t,r)}function gT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new la(t,r,s,e,en)}function _T(){Kt(new St(Sd,gT,"PUBLIC").setMultipleInstances(!0)),ze(ju,qu,""),ze(ju,qu,"esm2017")}_T();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function yT(n,e,t,r){function s(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function u(p){try{d(r.next(p))}catch(g){a(g)}}function l(p){try{d(r.throw(p))}catch(g){a(g)}}function d(p){p.done?i(p.value):s(p.value).then(u,l)}d((r=r.apply(n,[])).next())})}function vT(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(d){return function(p){return l([d,p])}}function l(d){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,s&&(i=d[0]&2?s.return:d[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,d[1])).done)return i;switch(s=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return t.label++,{value:d[1],done:!1};case 5:t.label++,s=d[1],d=[0];continue;case 7:d=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){t=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){t.label=d[1];break}if(d[0]===6&&t.label<i[1]){t.label=i[1],i=d;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(d);break}i[2]&&t.ops.pop(),t.trys.pop();continue}d=e.call(n,t)}catch(p){d=[6,p],s=0}finally{r=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pn=function(){return pn=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pn.apply(this,arguments)},Pd=function(n){return{loading:n==null,value:n}},ET=function(){return function(n,e){switch(e.type){case"error":return pn(pn({},n),{error:e.error,loading:!1,value:void 0});case"reset":return Pd(e.defaultValue);case"value":return pn(pn({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},TT=function(n){var e=n?n():void 0,t=un.useReducer(ET(),Pd(e)),r=t[0],s=t[1],i=un.useCallback(function(){var l=n?n():void 0;s({type:"reset",defaultValue:l})},[n]),a=un.useCallback(function(l){s({type:"error",error:l})},[]),u=un.useCallback(function(l){s({type:"value",value:l})},[]);return un.useMemo(function(){return{error:r.error,loading:r.loading,reset:i,setError:a,setValue:u,value:r.value}},[r.error,r.loading,i,a,u,r.value])},WT=function(n,e){var t=TT(function(){return n.currentUser}),r=t.error,s=t.loading,i=t.setError,a=t.setValue,u=t.value;return un.useEffect(function(){var l=Jy(n,function(d){return yT(void 0,void 0,void 0,function(){var p;return vT(this,function(g){switch(g.label){case 0:return[3,4];case 1:return g.trys.push([1,3,,4]),[4,e.onUserChanged(d)];case 2:return g.sent(),[3,4];case 3:return p=g.sent(),i(p),[3,4];case 4:return a(d),[2]}})})},i);return function(){l()}},[n]),[u,s,r]};export{Ye as F,vt as G,ST as a,HT as b,NT as c,RT as d,bT as e,kT as f,jT as g,qT as h,bp as i,$T as j,LT as k,VT as l,WT as m,CT as n,Jy as o,OT as p,PT as q,zT as r,FT as s,UT as t,DT as u,xT as v,BT as w,MT as x};
