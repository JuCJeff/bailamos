import{r as mt,j as Pe,R as N}from"./index-BsdhmCxN.js";import{l as wf,u as Af,b as bf,d as Rf,P as ci,m as eu,n as Sf,o as Pf,f as Hi,g as Cf,c as xt,_ as Oo,p as kf}from"./HeadBar-CUMT4-EZ.js";/*! js-cookie v3.0.5 | MIT */function ws(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}var Df={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function oo(n,e){function t(s,i,a){if(!(typeof document>"u")){a=ws({},e,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,a[u]!==!0&&(c+="="+a[u].split(";")[0]));return document.cookie=s+"="+n.write(i,s)+c}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],a={},c=0;c<i.length;c++){var u=i[c].split("="),d=u.slice(1).join("=");try{var m=decodeURIComponent(u[0]);if(a[m]=n.read(d,m),s===m)break}catch{}}return s?a[s]:a}}return Object.create({set:t,get:r,remove:function(s,i){t(s,"",ws({},i,{expires:-1}))},withAttributes:function(s){return oo(this.converter,ws({},this.attributes,s))},withConverter:function(s){return oo(ws({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(n)}})}var WI=oo(Df,{path:"/"}),xo="Tabs",[Nf,GI]=bf(xo,[eu]),tu=eu(),[Vf,Mo]=Nf(xo),nu=mt.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,onValueChange:s,defaultValue:i,orientation:a="horizontal",dir:c,activationMode:u="automatic",...d}=n,m=wf(c),[f,A]=Af({prop:r,onChange:s,defaultProp:i});return Pe.jsx(Vf,{scope:t,baseId:Rf(),value:f,onValueChange:A,orientation:a,dir:m,activationMode:u,children:Pe.jsx(ci.div,{dir:m,"data-orientation":a,...d,ref:e})})});nu.displayName=xo;var ru="TabsList",su=mt.forwardRef((n,e)=>{const{__scopeTabs:t,loop:r=!0,...s}=n,i=Mo(ru,t),a=tu(t);return Pe.jsx(Sf,{asChild:!0,...a,orientation:i.orientation,dir:i.dir,loop:r,children:Pe.jsx(ci.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:e})})});su.displayName=ru;var iu="TabsTrigger",ou=mt.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,disabled:s=!1,...i}=n,a=Mo(iu,t),c=tu(t),u=lu(a.baseId,r),d=uu(a.baseId,r),m=r===a.value;return Pe.jsx(Pf,{asChild:!0,...c,focusable:!s,active:m,children:Pe.jsx(ci.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:u,...i,ref:e,onMouseDown:Hi(n.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?a.onValueChange(r):f.preventDefault()}),onKeyDown:Hi(n.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&a.onValueChange(r)}),onFocus:Hi(n.onFocus,()=>{const f=a.activationMode!=="manual";!m&&!s&&f&&a.onValueChange(r)})})})});ou.displayName=iu;var au="TabsContent",cu=mt.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,forceMount:s,children:i,...a}=n,c=Mo(au,t),u=lu(c.baseId,r),d=uu(c.baseId,r),m=r===c.value,f=mt.useRef(m);return mt.useEffect(()=>{const A=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(A)},[]),Pe.jsx(Cf,{present:s||m,children:({present:A})=>Pe.jsx(ci.div,{"data-state":m?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":u,hidden:!A,id:d,tabIndex:0,...a,ref:e,style:{...n.style,animationDuration:f.current?"0s":void 0},children:A&&i})})});cu.displayName=au;function lu(n,e){return`${n}-trigger-${e}`}function uu(n,e){return`${n}-content-${e}`}var Of=nu,xf=su,Mf=ou,Lf=cu;function QI({className:n,...e}){return Pe.jsx(Of,{"data-slot":"tabs",className:xt("flex flex-col gap-2",n),...e})}function YI({className:n,...e}){return Pe.jsx(xf,{"data-slot":"tabs-list",className:xt("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",n),...e})}function XI({className:n,...e}){return Pe.jsx(Mf,{"data-slot":"tabs-trigger",className:xt("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...e})}function JI({className:n,...e}){return Pe.jsx(Lf,{"data-slot":"tabs-content",className:xt("flex-1 outline-none",n),...e})}function ZI({className:n,...e}){return Pe.jsx("div",{"data-slot":"card",className:xt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...e})}function ew({className:n,...e}){return Pe.jsx("div",{"data-slot":"card-header",className:xt("flex flex-col gap-1.5 px-6",n),...e})}function tw({className:n,...e}){return Pe.jsx("div",{"data-slot":"card-title",className:xt("leading-none font-semibold",n),...e})}function nw({className:n,...e}){return Pe.jsx("div",{"data-slot":"card-content",className:xt("px-6",n),...e})}function rw({className:n,...e}){return Pe.jsx("div",{"data-slot":"card-footer",className:xt("flex items-center px-6",n),...e})}/**
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
 */const Ff=()=>{};var Tc={};/**
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
 */const hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Uf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,f=(i&3)<<4|c>>4;let A=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(A=64)),r.push(t[m],t[f],t[A],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Uf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||f==null)throw new Bf;const A=i<<2|c>>4;if(r.push(A),d!==64){const R=c<<4&240|d>>2;if(r.push(R),f!==64){const k=d<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jf=function(n){const e=hu(n);return du.encodeByteArray(e,!0)},Bs=function(n){return jf(n).replace(/\./g,"")},fu=function(n){try{return du.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $f(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qf=()=>$f().__FIREBASE_DEFAULTS__,zf=()=>{if(typeof process>"u"||typeof Tc>"u")return;const n=Tc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fu(n[1]);return e&&JSON.parse(e)},li=()=>{try{return Ff()||qf()||zf()||Hf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pu=n=>{var e,t;return(t=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kf=n=>{const e=pu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mu=()=>{var n;return(n=li())===null||n===void 0?void 0:n.config},gu=n=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Wf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bs(JSON.stringify(t)),Bs(JSON.stringify(a)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Yf(){var n;const e=(n=li())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _u(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zf(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ep(){return!Yf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function tp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const np="FirebaseError";class lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=np,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nn.prototype.create)}}class Nn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?rp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new lt(s,c,r)}}function rp(n,e){return n.replace(sp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sp=/\{\$([^}]+)}/g;function ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ec(i)&&Ec(a)){if(!nn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ec(n){return n!==null&&typeof n=="object"}/**
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
 */function Kr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function br(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function op(n,e){const t=new ap(n,e);return t.subscribe.bind(t)}class ap{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ki),s.error===void 0&&(s.error=Ki),s.complete===void 0&&(s.complete=Ki);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ki(){}/**
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
 */const lp=1e3,up=2,hp=4*60*60*1e3,dp=.5;function Ic(n,e=lp,t=up){const r=e*Math.pow(t,n),s=Math.round(dp*r*(Math.random()-.5)*2);return Math.min(hp,r+s)}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class ct{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mp(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(n){return n===En?void 0:n}function mp(n){return n.instantiationMode==="EAGER"}/**
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
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const _p={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},yp=K.INFO,vp={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Tp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=vp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ui{constructor(e){this.name=e,this._logLevel=yp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Ep=(n,e)=>e.some(t=>n instanceof t);let wc,Ac;function Ip(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tu=new WeakMap,ao=new WeakMap,Eu=new WeakMap,Wi=new WeakMap,Lo=new WeakMap;function Ap(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Jt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Tu.set(t,n)}).catch(()=>{}),Lo.set(e,n),e}function bp(n){if(ao.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ao.set(n,e)}let co={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rp(n){co=n(co)}function Sp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gi(this),e,...t);return Eu.set(r,e.sort?e.sort():[e]),Jt(r)}:wp().includes(n)?function(...e){return n.apply(Gi(this),e),Jt(Tu.get(this))}:function(...e){return Jt(n.apply(Gi(this),e))}}function Pp(n){return typeof n=="function"?Sp(n):(n instanceof IDBTransaction&&bp(n),Ep(n,Ip())?new Proxy(n,co):n)}function Jt(n){if(n instanceof IDBRequest)return Ap(n);if(Wi.has(n))return Wi.get(n);const e=Pp(n);return e!==n&&(Wi.set(n,e),Lo.set(e,n)),e}const Gi=n=>Lo.get(n);function Iu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Jt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Jt(a.result),u.oldVersion,u.newVersion,Jt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Cp=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Qi=new Map;function bc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=kp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Qi.set(e,i),i}Rp(n=>({...n,get:(e,t,r)=>bc(e,t)||n.get(e,t,r),has:(e,t)=>!!bc(e,t)||n.has(e,t)}));/**
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
 */class Dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",Rc="0.11.2";/**
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
 */const Dt=new ui("@firebase/app"),Vp="@firebase/app-compat",Op="@firebase/analytics-compat",xp="@firebase/analytics",Mp="@firebase/app-check-compat",Lp="@firebase/app-check",Fp="@firebase/auth",Up="@firebase/auth-compat",Bp="@firebase/database",jp="@firebase/data-connect",$p="@firebase/database-compat",qp="@firebase/functions",zp="@firebase/functions-compat",Hp="@firebase/installations",Kp="@firebase/installations-compat",Wp="@firebase/messaging",Gp="@firebase/messaging-compat",Qp="@firebase/performance",Yp="@firebase/performance-compat",Xp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/vertexai",rm="@firebase/firestore-compat",sm="firebase",im="11.4.0";/**
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
 */const uo="[DEFAULT]",om={[lo]:"fire-core",[Vp]:"fire-core-compat",[xp]:"fire-analytics",[Op]:"fire-analytics-compat",[Lp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Fp]:"fire-auth",[Up]:"fire-auth-compat",[Bp]:"fire-rtdb",[jp]:"fire-data-connect",[$p]:"fire-rtdb-compat",[qp]:"fire-fn",[zp]:"fire-fn-compat",[Hp]:"fire-iid",[Kp]:"fire-iid-compat",[Wp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Qp]:"fire-perf",[Yp]:"fire-perf-compat",[Xp]:"fire-rc",[Jp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[rm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[sm]:"fire-js-all"};/**
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
 */const js=new Map,am=new Map,ho=new Map;function Sc(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(ho.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,n);for(const t of js.values())Sc(t,n);for(const t of am.values())Sc(t,n);return!0}function Vn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Nn("app","Firebase",cm);/**
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
 */class lm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const or=im;function wu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(t||(t=mu()),!t)throw Zt.create("no-options");const i=js.get(s);if(i){if(nn(t,i.options)&&nn(r,i.config))return i;throw Zt.create("duplicate-app",{appName:s})}const a=new gp(s);for(const u of ho.values())a.addComponent(u);const c=new lm(t,r,a);return js.set(s,c),c}function Fo(n=uo){const e=js.get(n);if(!e&&n===uo&&mu())return wu();if(!e)throw Zt.create("no-app",{appName:n});return e}function rt(n,e,t){var r;let s=(r=om[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(c.join(" "));return}Tt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const um="firebase-heartbeat-database",hm=1,Mr="firebase-heartbeat-store";let Yi=null;function Au(){return Yi||(Yi=Iu(um,hm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Yi}async function dm(n){try{const t=(await Au()).transaction(Mr),r=await t.objectStore(Mr).get(bu(n));return await t.done,r}catch(e){if(e instanceof lt)Dt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function Pc(n,e){try{const r=(await Au()).transaction(Mr,"readwrite");await r.objectStore(Mr).put(e,bu(n)),await r.done}catch(t){if(t instanceof lt)Dt.warn(t.message);else{const r=Zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(r.message)}}}function bu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fm=1024,pm=30;class mm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _m(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pm){const a=ym(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cc(),{heartbeatsToSend:r,unsentEntries:s}=gm(this._heartbeatsCache.heartbeats),i=Bs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function Cc(){return new Date().toISOString().substring(0,10)}function gm(n,e=fm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),kc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),kc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kc(n){return Bs(JSON.stringify({version:2,heartbeats:n})).length}function ym(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function vm(n){Tt(new ct("platform-logger",e=>new Dp(e),"PRIVATE")),Tt(new ct("heartbeat",e=>new mm(e),"PRIVATE")),rt(lo,Rc,n),rt(lo,Rc,"esm2017"),rt("fire-js","")}vm("");var Tm="firebase",Em="11.4.0";/**
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
 */rt(Tm,Em,"app");function Ru(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Im=Ru,Su=new Nn("auth","Firebase",Ru());/**
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
 */const $s=new ui("@firebase/auth");function wm(n,...e){$s.logLevel<=K.WARN&&$s.warn(`Auth (${or}): ${n}`,...e)}function Ds(n,...e){$s.logLevel<=K.ERROR&&$s.error(`Auth (${or}): ${n}`,...e)}/**
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
 */function st(n,...e){throw Bo(n,...e)}function at(n,...e){return Bo(n,...e)}function Uo(n,e,t){const r=Object.assign(Object.assign({},Im()),{[e]:t});return new Nn("auth","Firebase",r).create(e,{appName:n.name})}function kt(n){return Uo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(n,"argument-error"),Uo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Su.create(n,...e)}function L(n,e,...t){if(!n)throw Bo(e,...t)}function St(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ds(e),new Error(e)}function Nt(n,e){n||St(e)}/**
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
 */function fo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bm(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Rm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bm()||_u()||"connection"in navigator)?navigator.onLine:!0}function Sm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Wr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||Jf()}get(){return Rm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jo(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Pu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cm=new Wr(3e4,6e4);function Mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Lt(n,e,t,r,s={}){return Cu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Kr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Xf()||(d.referrerPolicy="no-referrer"),Pu.fetch()(ku(n,n.config.apiHost,t,c),d)})}async function Cu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Pm),e);try{const s=new Dm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw As(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw As(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw As(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Uo(n,m,d);st(n,m)}}catch(s){if(s instanceof lt)throw s;st(n,"network-request-failed",{message:String(s)})}}async function Gr(n,e,t,r,s={}){const i=await Lt(n,e,t,r,s);return"mfaPendingCredential"in i&&st(n,"multi-factor-auth-required",{_serverResponse:i}),i}function ku(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?jo(n.config,s):`${n.config.apiScheme}://${s}`}function km(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Dm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Cm.get())})}}function As(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=at(n,e,r);return s.customData._tokenResponse=t,s}function Nc(n){return n!==void 0&&n.enterprise!==void 0}class Nm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return km(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vm(n,e){return Lt(n,"GET","/v2/recaptchaConfig",Mt(n,e))}/**
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
 */async function Om(n,e){return Lt(n,"POST","/v1/accounts:delete",e)}async function Du(n,e){return Lt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function kr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xm(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),s=$o(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kr(Xi(s.auth_time)),issuedAtTime:kr(Xi(s.iat)),expirationTime:kr(Xi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xi(n){return Number(n)*1e3}function $o(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const s=fu(t);return s?JSON.parse(s):(Ds("Failed to decode base64 JWT payload"),null)}catch(s){return Ds("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vc(n){const e=$o(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof lt&&Mm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Mm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class po{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Lr(n,Du(t,{idToken:r}));L(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nu(i.providerUserInfo):[],c=Um(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new po(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,f)}async function Fm(n){const e=Ie(n);await qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Um(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nu(n){return n.map(e=>{var{providerId:t}=e,r=Oo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bm(n,e){const t=await Cu(n,{},async()=>{const r=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=ku(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Pu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jm(n,e){return Lt(n,"POST","/v2/accounts:revokeToken",Mt(n,e))}/**
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
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Vc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Qn;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
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
 */function Kt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new po(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xm(this,e)}reload(){return Fm(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Lr(this,Om(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,m;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,B=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:z,emailVerified:re,isAnonymous:ie,providerData:ee,stsTokenManager:E}=t;L(z&&E,e,"internal-error");const g=Qn.fromJSON(this.name,E);L(typeof z=="string",e,"internal-error"),Kt(f,e.name),Kt(A,e.name),L(typeof re=="boolean",e,"internal-error"),L(typeof ie=="boolean",e,"internal-error"),Kt(R,e.name),Kt(k,e.name),Kt(O,e.name),Kt(P,e.name),Kt(B,e.name),Kt(H,e.name);const y=new Pt({uid:z,auth:e,email:A,emailVerified:re,displayName:f,isAnonymous:ie,photoURL:k,phoneNumber:R,tenantId:O,stsTokenManager:g,createdAt:B,lastLoginAt:H});return ee&&Array.isArray(ee)&&(y.providerData=ee.map(v=>Object.assign({},v))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qn;s.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];L(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qn;c.updateFromIdToken(r);const u=new Pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new po(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Oc=new Map;function Ct(n){Nt(n instanceof Function,"Expected a class definition");let e=Oc.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oc.set(n,e),e)}/**
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
 */class Vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vu.type="NONE";const xc=Vu;/**
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
 */function Ns(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ns(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ns("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yn(Ct(xc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ct(xc);const a=Ns(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){const f=Pt._fromJSON(e,m);d!==i&&(c=f),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Yn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Yn(i,e,r))}}/**
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
 */function Mc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if(Bu(e))return"Webos";if(xu(e))return"Safari";if((e.includes("chrome/")||Mu(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ou(n=Me()){return/firefox\//i.test(n)}function xu(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mu(n=Me()){return/crios\//i.test(n)}function Lu(n=Me()){return/iemobile/i.test(n)}function Fu(n=Me()){return/android/i.test(n)}function Uu(n=Me()){return/blackberry/i.test(n)}function Bu(n=Me()){return/webos/i.test(n)}function qo(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $m(n=Me()){var e;return qo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qm(){return Zf()&&document.documentMode===10}function ju(n=Me()){return qo(n)||Fu(n)||Bu(n)||Uu(n)||/windows phone/i.test(n)||Lu(n)}/**
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
 */function $u(n,e=[]){let t;switch(n){case"Browser":t=Mc(Me());break;case"Worker":t=`${Mc(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${r}`}/**
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
 */class zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hm(n,e={}){return Lt(n,"GET","/v2/passwordPolicy",Mt(n,e))}/**
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
 */const Km=6;class Wm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Km,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Gm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lc(this),this.idTokenSubscription=new Lc(this),this.beforeStateQueue=new zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Du(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(kt(this));const t=e?Ie(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hm(this),t=new Wm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ft(n){return Ie(n)}class Lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=op(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qm(n){hi=n}function qu(n){return hi.loadJS(n)}function Ym(){return hi.recaptchaEnterpriseScript}function Xm(){return hi.gapiScript}function Jm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Zm{constructor(){this.enterprise=new eg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tg="recaptcha-enterprise",zu="NO_RECAPTCHA";class ng{constructor(e){this.type=tg,this.auth=Ft(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Vm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Nm(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Nc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(zu)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Nc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ym();u.length!==0&&(u+=c),qu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Fc(n,e,t,r=!1,s=!1){const i=new ng(n);let a;if(s)a=zu;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zs(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Fc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Fc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function rg(n,e){const t=Vn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(nn(i,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function sg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ig(n,e,t){const r=Ft(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hu(e),{host:a,port:c}=og(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(nn(d,r.config.emulator)&&nn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ag()}function Hu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function og(n){const e=Hu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Uc(a)}}}function Uc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ag(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function cg(n,e){return Lt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lg(n,e){return Gr(n,"POST","/v1/accounts:signInWithPassword",Mt(n,e))}async function ug(n,e){return Lt(n,"POST","/v1/accounts:sendOobCode",Mt(n,e))}async function hg(n,e){return ug(n,e)}/**
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
 */async function dg(n,e){return Gr(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}async function fg(n,e){return Gr(n,"POST","/v1/accounts:signInWithEmailLink",Mt(n,e))}/**
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
 */class Fr extends zo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Fr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zs(e,t,"signInWithPassword",lg);case"emailLink":return dg(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zs(e,r,"signUpPassword",cg);case"emailLink":return fg(e,{idToken:t,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xn(n,e){return Gr(n,"POST","/v1/accounts:signInWithIdp",Mt(n,e))}/**
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
 */const pg="http://localhost";class bn extends zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Oo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new bn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}buildRequest(){const e={requestUri:pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kr(t)}return e}}/**
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
 */function mg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gg(n){const e=br(Rr(n)).link,t=e?br(Rr(e)).deep_link_id:null,r=br(Rr(n)).deep_link_id;return(r?br(Rr(r)).link:null)||r||t||e||n}class Ho{constructor(e){var t,r,s,i,a,c;const u=br(Rr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,f=mg((s=u.mode)!==null&&s!==void 0?s:null);L(d&&m&&f,"argument-error"),this.apiKey=d,this.operation=f,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=gg(e);try{return new Ho(t)}catch{return null}}}/**
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
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,t){return Fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ho.parseLink(t);return L(r,"argument-error"),Fr._fromEmailAndCode(e,r.code,r.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ko{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qr extends Ko{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends Qr{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gt.credential(t,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class Qt extends Qr{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Yt extends Qr{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
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
 */async function _g(n,e){return Gr(n,"POST","/v1/accounts:signUp",Mt(n,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),a=Bc(r);return new Rn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bc(r);return new Rn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Hs extends lt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Hs(e,t,r,s)}}function Ku(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(n,i,e,r):i})}async function yg(n,e,t=!1){const r=await Lr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",r)}/**
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
 */async function vg(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(kt(r));const s="reauthenticate";try{const i=await Lr(n,Ku(r,s,e,n),t);L(i.idToken,r,"internal-error");const a=$o(i.idToken);L(a,r,"internal-error");const{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),Rn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function Wu(n,e,t=!1){if(Xe(n.app))return Promise.reject(kt(n));const r="signIn",s=await Ku(n,r,e),i=await Rn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Tg(n,e){return Wu(Ft(n),e)}/**
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
 */async function Gu(n){const e=Ft(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sw(n,e,t){const r=Ft(n);await zs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hg)}async function iw(n,e,t){if(Xe(n.app))return Promise.reject(kt(n));const r=Ft(n),a=await zs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_g).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Gu(n),u}),c=await Rn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ow(n,e,t){return Xe(n.app)?Promise.reject(kt(n)):Tg(Ie(n),ar.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gu(n),r})}function Eg(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function Ig(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function aw(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}function cw(n){return Ie(n).signOut()}const Ks="__sak";/**
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
 */class Qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wg=1e3,Ag=10;class Yu extends Qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);qm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ag):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yu.type="LOCAL";const bg=Yu;/**
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
 */class Xu extends Qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xu.type="SESSION";const Ju=Xu;/**
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
 */function Rg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new di(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await Rg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}di.receivers=[];/**
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
 */function Wo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Wo("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const A=f;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gt(){return window}function Pg(n){gt().location.href=n}/**
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
 */function Zu(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function Cg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dg(){return Zu()?self:null}/**
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
 */const eh="firebaseLocalStorageDb",Ng=1,Ws="firebaseLocalStorage",th="fbase_key";class Yr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fi(n,e){return n.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function Vg(){const n=indexedDB.deleteDatabase(eh);return new Yr(n).toPromise()}function mo(){const n=indexedDB.open(eh,Ng);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ws,{keyPath:th})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await Vg(),e(await mo()))})})}async function jc(n,e,t){const r=fi(n,!0).put({[th]:e,value:t});return new Yr(r).toPromise()}async function Og(n,e){const t=fi(n,!1).get(e),r=await new Yr(t).toPromise();return r===void 0?null:r.value}function $c(n,e){const t=fi(n,!0).delete(e);return new Yr(t).toPromise()}const xg=800,Mg=3;class nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=di._getInstance(Dg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Cg(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mo();return await jc(e,Ks,"1"),await $c(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Og(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fi(s,!1).getAll();return new Yr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nh.type="LOCAL";const Lg=nh;new Wr(3e4,6e4);/**
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
 */function rh(n,e){return e?Ct(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Go extends zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fg(n){return Wu(n.auth,new Go(n),n.bypassAuthState)}function Ug(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),vg(t,new Go(n),n.bypassAuthState)}async function Bg(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),yg(t,new Go(n),n.bypassAuthState)}/**
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
 */class sh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fg;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return Ug;default:st(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jg=new Wr(2e3,1e4);async function lw(n,e,t){if(Xe(n.app))return Promise.reject(at(n,"operation-not-supported-in-this-environment"));const r=Ft(n);Am(n,e,Ko);const s=rh(r,t);return new In(r,"signInViaPopup",e,s).executeNotNull()}class In extends sh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jg.get())};e()}}In.currentPopupAction=null;/**
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
 */const $g="pendingRedirect",Vs=new Map;class qg extends sh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{const r=await zg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zg(n,e){const t=Wg(e),r=Kg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Hg(n,e){Vs.set(n._key(),e)}function Kg(n){return Ct(n._redirectPersistence)}function Wg(n){return Ns($g,n.config.apiKey,n.name)}async function Gg(n,e,t=!1){if(Xe(n.app))return Promise.reject(kt(n));const r=Ft(n),s=rh(r,e),a=await new qg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Qg=10*60*1e3;class Yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ih(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qg&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}}function qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(n);default:return!1}}/**
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
 */async function Jg(n,e={}){return Lt(n,"GET","/v1/projects",e)}/**
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
 */const Zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e_=/^https?/;async function t_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jg(n);for(const t of e)try{if(n_(t))return}catch{}st(n,"unauthorized-domain")}function n_(n){const e=fo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!e_.test(t))return!1;if(Zg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const r_=new Wr(3e4,6e4);function zc(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function s_(n){return new Promise((e,t)=>{var r,s,i;function a(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),t(at(n,"network-request-failed"))},timeout:r_.get()})}if(!((s=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gt().gapi)===null||i===void 0)&&i.load)a();else{const c=Jm("iframefcb");return gt()[c]=()=>{gapi.load?a():t(at(n,"network-request-failed"))},qu(`${Xm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Os=null,e})}let Os=null;function i_(n){return Os=Os||s_(n),Os}/**
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
 */const o_=new Wr(5e3,15e3),a_="__/auth/iframe",c_="emulator/auth/iframe",l_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h_(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jo(e,c_):`https://${n.config.authDomain}/${a_}`,r={apiKey:e.apiKey,appName:n.name,v:or},s=u_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Kr(r).slice(1)}`}async function d_(n){const e=await i_(n),t=gt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:h_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=at(n,"network-request-failed"),c=gt().setTimeout(()=>{i(a)},o_.get());function u(){gt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const f_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p_=500,m_=600,g_="_blank",__="http://localhost";class Hc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y_(n,e,t,r=p_,s=m_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},f_),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Me().toLowerCase();t&&(c=Mu(d)?g_:t),Ou(d)&&(e=e||__,u.scrollbars="yes");const m=Object.entries(u).reduce((A,[R,k])=>`${A}${R}=${k},`,"");if($m(d)&&c!=="_self")return v_(e||"",c),new Hc(null);const f=window.open(e||"",c,m);L(f,n,"popup-blocked");try{f.focus()}catch{}return new Hc(f)}function v_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const T_="__/auth/handler",E_="emulator/auth/handler",I_=encodeURIComponent("fac");async function Kc(n,e,t,r,s,i){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:or,eventId:s};if(e instanceof Ko){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ip(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries({}))a[m]=f}if(e instanceof Qr){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${I_}=${encodeURIComponent(u)}`:"";return`${w_(n)}?${Kr(c).slice(1)}${d}`}function w_({config:n}){return n.emulator?jo(n,E_):`https://${n.authDomain}/${T_}`}/**
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
 */const Ji="webStorageSupport";class A_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ju,this._completeRedirectFn=Gg,this._overrideRedirectResult=Hg}async _openPopup(e,t,r,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Kc(e,t,r,fo(),s);return y_(e,a,Wo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Kc(e,t,r,fo(),s);return Pg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await d_(e),r=new Yg(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ji,{type:Ji},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ji];a!==void 0&&t(!!a),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=t_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ju()||xu()||qo()}}const b_=A_;var Wc="@firebase/auth",Gc="1.9.1";/**
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
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P_(n){Tt(new ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(n)},d=new Gm(r,s,i,u);return sg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tt(new ct("auth-internal",e=>{const t=Ft(e.getProvider("auth").getImmediate());return(r=>new R_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Wc,Gc,S_(n)),rt(Wc,Gc,"esm2017")}/**
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
 */const C_=5*60,k_=gu("authIdTokenMaxAge")||C_;let Qc=null;const D_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>k_)return;const s=t==null?void 0:t.token;Qc!==s&&(Qc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function N_(n=Fo()){const e=Vn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rg(n,{popupRedirectResolver:b_,persistence:[Lg,bg,Ju]}),r=gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=D_(i.toString());Ig(t,a,()=>a(t.currentUser)),Eg(t,c=>a(c))}}const s=pu("auth");return s&&ig(t,`http://${s}`),t}function V_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Qm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",V_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P_("Browser");const oh="@firebase/installations",Qo="0.6.13";/**
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
 */const ah=1e4,ch=`w:${Qo}`,lh="FIS_v2",O_="https://firebaseinstallations.googleapis.com/v1",x_=60*60*1e3,M_="installations",L_="Installations";/**
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
 */const F_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sn=new Nn(M_,L_,F_);function uh(n){return n instanceof lt&&n.code.includes("request-failed")}/**
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
 */function hh({projectId:n}){return`${O_}/projects/${n}/installations`}function dh(n){return{token:n.token,requestStatus:2,expiresIn:B_(n.expiresIn),creationTime:Date.now()}}async function fh(n,e){const r=(await e.json()).error;return Sn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ph({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function U_(n,{refreshToken:e}){const t=ph(n);return t.append("Authorization",j_(e)),t}async function mh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function B_(n){return Number(n.replace("s","000"))}function j_(n){return`${lh} ${n}`}/**
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
 */async function $_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=hh(n),s=ph(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:lh,appId:n.appId,sdkVersion:ch},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await mh(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:dh(d.authToken)}}else throw await fh("Create Installation",u)}/**
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
 */function gh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function q_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const z_=/^[cdef][\w-]{21}$/,go="";function H_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=K_(n);return z_.test(t)?t:go}catch{return go}}function K_(n){return q_(n).substr(0,22)}/**
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
 */function pi(n){return`${n.appName}!${n.appId}`}/**
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
 */const _h=new Map;function yh(n,e){const t=pi(n);vh(t,e),W_(t,e)}function vh(n,e){const t=_h.get(n);if(t)for(const r of t)r(e)}function W_(n,e){const t=G_();t&&t.postMessage({key:n,fid:e}),Q_()}let wn=null;function G_(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=n=>{vh(n.data.key,n.data.fid)}),wn}function Q_(){_h.size===0&&wn&&(wn.close(),wn=null)}/**
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
 */const Y_="firebase-installations-database",X_=1,Pn="firebase-installations-store";let Zi=null;function Yo(){return Zi||(Zi=Iu(Y_,X_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pn)}}})),Zi}async function Gs(n,e){const t=pi(n),s=(await Yo()).transaction(Pn,"readwrite"),i=s.objectStore(Pn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&yh(n,e.fid),e}async function Th(n){const e=pi(n),r=(await Yo()).transaction(Pn,"readwrite");await r.objectStore(Pn).delete(e),await r.done}async function mi(n,e){const t=pi(n),s=(await Yo()).transaction(Pn,"readwrite"),i=s.objectStore(Pn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&yh(n,c.fid),c}/**
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
 */async function Xo(n){let e;const t=await mi(n.appConfig,r=>{const s=J_(r),i=Z_(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===go?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function J_(n){const e=n||{fid:H_(),registrationStatus:0};return Eh(e)}function Z_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ey(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ty(n)}:{installationEntry:e}}async function ey(n,e){try{const t=await $_(n,e);return Gs(n.appConfig,t)}catch(t){throw uh(t)&&t.customData.serverCode===409?await Th(n.appConfig):await Gs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ty(n){let e=await Yc(n.appConfig);for(;e.registrationStatus===1;)await gh(100),e=await Yc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Xo(n);return r||t}return e}function Yc(n){return mi(n,e=>{if(!e)throw Sn.create("installation-not-found");return Eh(e)})}function Eh(n){return ny(n)?{fid:n.fid,registrationStatus:0}:n}function ny(n){return n.registrationStatus===1&&n.registrationTime+ah<Date.now()}/**
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
 */async function ry({appConfig:n,heartbeatServiceProvider:e},t){const r=sy(n,t),s=U_(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:ch,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await mh(()=>fetch(r,c));if(u.ok){const d=await u.json();return dh(d)}else throw await fh("Generate Auth Token",u)}function sy(n,{fid:e}){return`${hh(n)}/${e}/authTokens:generate`}/**
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
 */async function Jo(n,e=!1){let t;const r=await mi(n.appConfig,i=>{if(!Ih(i))throw Sn.create("not-registered");const a=i.authToken;if(!e&&ay(a))return i;if(a.requestStatus===1)return t=iy(n,e),i;{if(!navigator.onLine)throw Sn.create("app-offline");const c=ly(i);return t=oy(n,c),c}});return t?await t:r.authToken}async function iy(n,e){let t=await Xc(n.appConfig);for(;t.authToken.requestStatus===1;)await gh(100),t=await Xc(n.appConfig);const r=t.authToken;return r.requestStatus===0?Jo(n,e):r}function Xc(n){return mi(n,e=>{if(!Ih(e))throw Sn.create("not-registered");const t=e.authToken;return uy(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oy(n,e){try{const t=await ry(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Gs(n.appConfig,r),t}catch(t){if(uh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Th(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gs(n.appConfig,r)}throw t}}function Ih(n){return n!==void 0&&n.registrationStatus===2}function ay(n){return n.requestStatus===2&&!cy(n)}function cy(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+x_}function ly(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function uy(n){return n.requestStatus===1&&n.requestTime+ah<Date.now()}/**
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
 */async function hy(n){const e=n,{installationEntry:t,registrationPromise:r}=await Xo(e);return r?r.catch(console.error):Jo(e).catch(console.error),t.fid}/**
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
 */async function dy(n,e=!1){const t=n;return await fy(t),(await Jo(t,e)).token}async function fy(n){const{registrationPromise:e}=await Xo(n);e&&await e}/**
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
 */function py(n){if(!n||!n.options)throw eo("App Configuration");if(!n.name)throw eo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw eo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function eo(n){return Sn.create("missing-app-config-values",{valueName:n})}/**
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
 */const wh="installations",my="installations-internal",gy=n=>{const e=n.getProvider("app").getImmediate(),t=py(e),r=Vn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_y=n=>{const e=n.getProvider("app").getImmediate(),t=Vn(e,wh).getImmediate();return{getId:()=>hy(t),getToken:s=>dy(t,s)}};function yy(){Tt(new ct(wh,gy,"PUBLIC")),Tt(new ct(my,_y,"PRIVATE"))}yy();rt(oh,Qo);rt(oh,Qo,"esm2017");/**
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
 */const Qs="analytics",vy="firebase_id",Ty="origin",Ey=60*1e3,Iy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zo="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new ui("@firebase/analytics");/**
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
 */const wy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ze=new Nn("analytics","Analytics",wy);/**
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
 */function Ay(n){if(!n.startsWith(Zo)){const e=Ze.create("invalid-gtag-resource",{gtagURL:n});return We.warn(e.message),""}return n}function Ah(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function by(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Ry(n,e){const t=by("firebase-js-sdk-policy",{createScriptURL:Ay}),r=document.createElement("script"),s=`${Zo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Sy(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Py(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Ah(t)).find(d=>d.measurementId===s);u&&await e[u.appId]}}catch(c){We.error(c)}n("config",s,i)}async function Cy(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Ah(t);for(const u of a){const d=c.find(f=>f.measurementId===u),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){We.error(i)}}function ky(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await Cy(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await Py(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){We.error(c)}}return s}function Dy(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ky(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Ny(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Zo)&&t.src.includes(n))return t;return null}/**
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
 */const Vy=30,Oy=1e3;class xy{constructor(e={},t=Oy){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bh=new xy;function My(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ly(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:My(r)},i=Iy.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Fy(n,e=bh,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Ze.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ze.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new jy;return setTimeout(async()=>{c.abort()},Ey),Rh({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Rh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=bh){var i;const{appId:a,measurementId:c}=n;try{await Uy(r,e)}catch(u){if(c)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await Ly(n);return s.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!By(d)){if(s.deleteThrottleMetadata(a),c)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw u}const m=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ic(t,s.intervalMillis,Vy):Ic(t,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(a,f),We.debug(`Calling attemptFetch again in ${m} millis`),Rh(n,f,r,s)}}function Uy(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function By(n){if(!(n instanceof lt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class jy{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $y(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function qy(){if(yu())try{await vu()}catch(n){return We.warn(Ze.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return We.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zy(n,e,t,r,s,i,a){var c;const u=Fy(n);u.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>We.error(R)),e.push(u);const d=qy().then(R=>{if(R)return r.getId()}),[m,f]=await Promise.all([u,d]);Ny(i)||Ry(i,m.measurementId),s("js",new Date);const A=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return A[Ty]="firebase",A.update=!0,f!=null&&(A[vy]=f),s("config",m.measurementId,A),m.measurementId}/**
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
 */class Hy{constructor(e){this.app=e}_delete(){return delete Dr[this.app.options.appId],Promise.resolve()}}let Dr={},Jc=[];const Zc={};let to="dataLayer",Ky="gtag",el,Sh,tl=!1;function Wy(){const n=[];if(_u()&&n.push("This is a browser extension environment."),tp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Ze.create("invalid-analytics-context",{errorInfo:e});We.warn(t.message)}}function Gy(n,e,t){Wy();const r=n.options.appId;if(!r)throw Ze.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(Dr[r]!=null)throw Ze.create("already-exists",{id:r});if(!tl){Sy(to);const{wrappedGtag:i,gtagCore:a}=Dy(Dr,Jc,Zc,to,Ky);Sh=i,el=a,tl=!0}return Dr[r]=zy(n,Jc,Zc,e,el,to,t),new Hy(n)}function Qy(n=Fo()){n=Ie(n);const e=Vn(n,Qs);return e.isInitialized()?e.getImmediate():Yy(n)}function Yy(n,e={}){const t=Vn(n,Qs);if(t.isInitialized()){const s=t.getImmediate();if(nn(e,t.getOptions()))return s;throw Ze.create("already-initialized")}return t.initialize({options:e})}function Xy(n,e,t,r){n=Ie(n),$y(Sh,Dr[n.app.options.appId],e,t,r).catch(s=>We.error(s))}const nl="@firebase/analytics",rl="0.10.12";function Jy(){Tt(new ct(Qs,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Gy(r,s,t)},"PUBLIC")),Tt(new ct("analytics-internal",n,"PRIVATE")),rt(nl,rl),rt(nl,rl,"esm2017");function n(e){try{const t=e.getProvider(Qs).getImmediate();return{logEvent:(r,s,i)=>Xy(t,r,s,i)}}catch(t){throw Ze.create("interop-component-reg-failed",{reason:t})}}}Jy();var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var en,Ph;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,T,w){for(var _=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)_[Ge-2]=arguments[Ge];return g.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)v[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)v[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],T=E.g[2];var w=E.g[3],_=g+(w^y&(T^w))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=w+(T^g&(y^T))+v[1]+3905402710&4294967295,w=g+(_<<12&4294967295|_>>>20),_=T+(y^w&(g^y))+v[2]+606105819&4294967295,T=w+(_<<17&4294967295|_>>>15),_=y+(g^T&(w^g))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(w^y&(T^w))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=w+(T^g&(y^T))+v[5]+1200080426&4294967295,w=g+(_<<12&4294967295|_>>>20),_=T+(y^w&(g^y))+v[6]+2821735955&4294967295,T=w+(_<<17&4294967295|_>>>15),_=y+(g^T&(w^g))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(w^y&(T^w))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=w+(T^g&(y^T))+v[9]+2336552879&4294967295,w=g+(_<<12&4294967295|_>>>20),_=T+(y^w&(g^y))+v[10]+4294925233&4294967295,T=w+(_<<17&4294967295|_>>>15),_=y+(g^T&(w^g))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(w^y&(T^w))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=w+(T^g&(y^T))+v[13]+4254626195&4294967295,w=g+(_<<12&4294967295|_>>>20),_=T+(y^w&(g^y))+v[14]+2792965006&4294967295,T=w+(_<<17&4294967295|_>>>15),_=y+(g^T&(w^g))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^w&(y^T))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=w+(y^T&(g^y))+v[6]+3225465664&4294967295,w=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(w^g))+v[11]+643717713&4294967295,T=w+(_<<14&4294967295|_>>>18),_=y+(w^g&(T^w))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^w&(y^T))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=w+(y^T&(g^y))+v[10]+38016083&4294967295,w=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(w^g))+v[15]+3634488961&4294967295,T=w+(_<<14&4294967295|_>>>18),_=y+(w^g&(T^w))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^w&(y^T))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=w+(y^T&(g^y))+v[14]+3275163606&4294967295,w=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(w^g))+v[3]+4107603335&4294967295,T=w+(_<<14&4294967295|_>>>18),_=y+(w^g&(T^w))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^w&(y^T))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=w+(y^T&(g^y))+v[2]+4243563512&4294967295,w=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(w^g))+v[7]+1735328473&4294967295,T=w+(_<<14&4294967295|_>>>18),_=y+(w^g&(T^w))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^w)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=w+(g^y^T)+v[8]+2272392833&4294967295,w=g+(_<<11&4294967295|_>>>21),_=T+(w^g^y)+v[11]+1839030562&4294967295,T=w+(_<<16&4294967295|_>>>16),_=y+(T^w^g)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^w)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=w+(g^y^T)+v[4]+1272893353&4294967295,w=g+(_<<11&4294967295|_>>>21),_=T+(w^g^y)+v[7]+4139469664&4294967295,T=w+(_<<16&4294967295|_>>>16),_=y+(T^w^g)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^w)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=w+(g^y^T)+v[0]+3936430074&4294967295,w=g+(_<<11&4294967295|_>>>21),_=T+(w^g^y)+v[3]+3572445317&4294967295,T=w+(_<<16&4294967295|_>>>16),_=y+(T^w^g)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^w)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=w+(g^y^T)+v[12]+3873151461&4294967295,w=g+(_<<11&4294967295|_>>>21),_=T+(w^g^y)+v[15]+530742520&4294967295,T=w+(_<<16&4294967295|_>>>16),_=y+(T^w^g)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~w))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=w+(y^(g|~T))+v[7]+1126891415&4294967295,w=g+(_<<10&4294967295|_>>>22),_=T+(g^(w|~y))+v[14]+2878612391&4294967295,T=w+(_<<15&4294967295|_>>>17),_=y+(w^(T|~g))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~w))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=w+(y^(g|~T))+v[3]+2399980690&4294967295,w=g+(_<<10&4294967295|_>>>22),_=T+(g^(w|~y))+v[10]+4293915773&4294967295,T=w+(_<<15&4294967295|_>>>17),_=y+(w^(T|~g))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~w))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=w+(y^(g|~T))+v[15]+4264355552&4294967295,w=g+(_<<10&4294967295|_>>>22),_=T+(g^(w|~y))+v[6]+2734768916&4294967295,T=w+(_<<15&4294967295|_>>>17),_=y+(w^(T|~g))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~w))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=w+(y^(g|~T))+v[11]+3174756917&4294967295,w=g+(_<<10&4294967295|_>>>22),_=T+(g^(w|~y))+v[2]+718787259&4294967295,T=w+(_<<15&4294967295|_>>>17),_=y+(w^(T|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,v=this.B,T=this.h,w=0;w<g;){if(T==0)for(;w<=y;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<g;)if(v[T++]=E.charCodeAt(w++),T==this.blockSize){s(this,v),T=0;break}}else for(;w<g;)if(v[T++]=E[w++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)E[y++]=this.g[g]>>>v&255;return E};function i(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;for(var y=[],v=!0,T=E.length-1;0<=T;T--){var w=E[T]|0;v&&w==g||(y[T]=w,v=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return P(d(-E));for(var g=[],y=1,v=0;E>=y;v++)g[v]=E/y|0,y*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return P(m(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=f,T=0;T<E.length;T+=8){var w=Math.min(8,E.length-T),_=parseInt(E.substring(T,T+w),g);8>w?(w=d(Math.pow(g,w)),v=v.j(w).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var f=u(0),A=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-P(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(O(this))return"-"+P(this).toString(E);for(var g=d(Math.pow(E,6)),y=this,v="";;){var T=re(y,g).g;y=B(y,T.j(g));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,k(y))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=B(this,E),O(E)?-1:k(E)?0:1};function P(E){for(var g=E.g.length,y=[],v=0;v<g;v++)y[v]=~E.g[v];return new a(y,~E.h).add(A)}n.abs=function(){return O(this)?P(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0,T=0;T<=g;T++){var w=v+(this.i(T)&65535)+(E.i(T)&65535),_=(w>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=_>>>16,w&=65535,_&=65535,y[T]=_<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(E,g){return E.add(P(g))}n.j=function(E){if(k(this)||k(E))return f;if(O(this))return O(E)?P(this).j(P(E)):P(P(this).j(E));if(O(E))return P(this.j(P(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var w=this.i(v)>>>16,_=this.i(v)&65535,Ge=E.i(T)>>>16,ke=E.i(T)&65535;y[2*v+2*T]+=_*ke,H(y,2*v+2*T),y[2*v+2*T+1]+=w*ke,H(y,2*v+2*T+1),y[2*v+2*T+1]+=_*Ge,H(y,2*v+2*T+1),y[2*v+2*T+2]+=w*Ge,H(y,2*v+2*T+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function H(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function z(E,g){this.g=E,this.h=g}function re(E,g){if(k(g))throw Error("division by zero");if(k(E))return new z(f,f);if(O(E))return g=re(P(E),g),new z(P(g.g),P(g.h));if(O(g))return g=re(E,P(g)),new z(P(g.g),g.h);if(30<E.g.length){if(O(E)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,v=g;0>=v.l(E);)y=ie(y),v=ie(v);var T=ee(y,1),w=ee(v,1);for(v=ee(v,2),y=ee(y,2);!k(v);){var _=w.add(v);0>=_.l(E)&&(T=T.add(y),w=_),v=ee(v,1),y=ee(y,1)}return g=B(E,T.j(g)),new z(T,g)}for(T=f;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(y),_=w.j(g);O(_)||0<_.l(E);)y-=v,w=d(y),_=w.j(g);k(w)&&(w=A),T=T.add(w),E=B(E,_)}return new z(T,E)}n.A=function(E){return re(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&E.i(v);return new a(y,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|E.i(v);return new a(y,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^E.i(v);return new a(y,this.h^E.h)};function ie(E){for(var g=E.g.length+1,y=[],v=0;v<g;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(y,E.h)}function ee(E,g){var y=g>>5;g%=32;for(var v=E.g.length-y,T=[],w=0;w<v;w++)T[w]=0<g?E.i(w+y)>>>g|E.i(w+y+1)<<32-g:E.i(w+y);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ph=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,en=a}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ch,Sr,kh,xs,_o,Dh,Nh,Vh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var I=o[p];if(!(I in h))break e;h=h[I]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,I={next:function(){if(!p&&h<o.length){var b=h++;return{value:l(b,o[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,p),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function A(o,l,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:f,A.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,I,b){for(var D=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)D[ne-2]=arguments[ne];return l.prototype[I].apply(p,D)}}function O(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const I=o.length||0,b=p.length||0;o.length=I+b;for(let D=0;D<b;D++)o[I+D]=p[D]}else o.push(p)}}class B{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function H(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function re(o){return re[" "](o),o}re[" "]=function(){};var ie=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ee(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)o[h]=p[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function T(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function w(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Ue;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ge{constructor(){this.h=this.g=null}add(l,h){const p=ke.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ke=new B(()=>new Y,o=>o.reset());class Y{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Fe=!1,Ue=new Ge,Ut=()=>{const o=c.Promise.resolve(void 0);Le=()=>{o.then(te)}};var te=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){w(h)}var l=ke;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Fe=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var je=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Qe(o,l){if(q.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ie){e:{try{re(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ae[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qe.aa.h.call(this)}}k(Qe,q);var ae={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Bt=0;function dn(o,l,h,p,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=I,this.key=++Bt,this.da=this.fa=!1}function ht(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Mn(o){this.src=o,this.g={},this.h=0}Mn.prototype.add=function(o,l,h,p,I){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var D=dr(o,l,p,I);return-1<D?(l=o[D],h||(l.fa=!1)):(l=new dn(l,this.src,b,!!p,I),l.fa=h,o.push(l)),l};function Ln(o,l){var h=l.type;if(h in o.g){var p=o.g[h],I=Array.prototype.indexOf.call(p,l,void 0),b;(b=0<=I)&&Array.prototype.splice.call(p,I,1),b&&(ht(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function dr(o,l,h,p){for(var I=0;I<o.length;++I){var b=o[I];if(!b.da&&b.listener==l&&b.capture==!!h&&b.ha==p)return I}return-1}var fn="closure_lm_"+(1e6*Math.random()|0),fr={};function pr(o,l,h,p,I){if(Array.isArray(l)){for(var b=0;b<l.length;b++)pr(o,l[b],h,p,I);return null}return h=rs(h),o&&o[ut]?o.K(l,h,d(p)?!!p.capture:!1,I):pn(o,l,h,!1,p,I)}function pn(o,l,h,p,I,b){if(!l)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,ne=dt(o);if(ne||(o[fn]=ne=new Mn(o)),h=ne.add(l,h,p,D,b),h.proxy)return h;if(p=ts(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)je||(I=D),I===void 0&&(I=!1),o.addEventListener(l.toString(),p,I);else if(o.attachEvent)o.attachEvent(ns(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ts(){function o(h){return l.call(o.src,o.listener,h)}const l=$e;return o}function tt(o,l,h,p,I){if(Array.isArray(l))for(var b=0;b<l.length;b++)tt(o,l[b],h,p,I);else p=d(p)?!!p.capture:!!p,h=rs(h),o&&o[ut]?(o=o.i,l=String(l).toString(),l in o.g&&(b=o.g[l],h=dr(b,h,p,I),-1<h&&(ht(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[l],o.h--)))):o&&(o=dt(o))&&(l=o.g[l.toString()],o=-1,l&&(o=dr(l,h,p,I)),(h=-1<o?l[o]:null)&&mr(h))}function mr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ut])Ln(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(ns(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=dt(l))?(Ln(h,o),h.h==0&&(h.src=null,l[fn]=null)):ht(o)}}}function ns(o){return o in fr?fr[o]:fr[o]="on"+o}function $e(o,l){if(o.da)o=!0;else{l=new Qe(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&mr(o),o=h.call(p,l)}return o}function dt(o){return o=o[fn],o instanceof Mn?o:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function rs(o){return typeof o=="function"?o:(o[gr]||(o[gr]=function(l){return o.handleEvent(l)}),o[gr])}function de(){J.call(this),this.i=new Mn(this),this.M=this,this.F=null}k(de,J),de.prototype[ut]=!0,de.prototype.removeEventListener=function(o,l,h,p){tt(this,o,l,h,p)};function we(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new q(l,o);else if(l instanceof q)l.target=l.target||o;else{var I=l;l=new q(p,o),v(l,I)}if(I=!0,h)for(var b=h.length-1;0<=b;b--){var D=l.g=h[b];I=mn(D,p,!0,l)&&I}if(D=l.g=o,I=mn(D,p,!0,l)&&I,I=mn(D,p,!1,l)&&I,h)for(b=0;b<h.length;b++)D=l.g=h[b],I=mn(D,p,!1,l)&&I}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)ht(h[p]);delete o.g[l],o.h--}}this.F=null},de.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},de.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function mn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,b=0;b<l.length;++b){var D=l[b];if(D&&!D.da&&D.capture==h){var ne=D.listener,be=D.ha||D.src;D.fa&&Ln(o.i,D),I=ne.call(be,p)!==!1&&I}}return I&&!p.defaultPrevented}function Fn(o,l,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function wt(o){o.g=Fn(()=>{o.g=null,o.i&&(o.i=!1,wt(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ss extends J{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:wt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){J.call(this),this.h=o,this.g={}}k(nt,J);var is=[];function os(o){ee(o.g,function(l,h){this.g.hasOwnProperty(h)&&mr(l)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),os(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=c.JSON.stringify,as=c.JSON.parse,Ni=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function gn(){}gn.prototype.h=null;function it(o){return o.h||(o.h=o.i())}function cs(){}var jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){q.call(this,"d")}k(Bn,q);function j(){q.call(this,"c")}k(j,q);var se={},ge=null;function Te(){return ge=ge||new de}se.La="serverreachability";function _n(o){q.call(this,se.La,o)}k(_n,q);function ce(o){const l=Te();we(l,new _n(l))}se.STAT_EVENT="statevent";function Be(o,l){q.call(this,se.STAT_EVENT,o),this.stat=l}k(Be,q);function pe(o){const l=Te();we(l,new Be(l,o))}se.Ma="timingevent";function qe(o,l){q.call(this,se.Ma,o),this.size=l}k(qe,q);function Ae(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function $t(){this.g=!0}$t.prototype.xa=function(){this.g=!1};function At(o,l,h,p,I,b){o.info(function(){if(o.g)if(b)for(var D="",ne=b.split("&"),be=0;be<ne.length;be++){var X=ne[be].split("=");if(1<X.length){var De=X[0];X=X[1];var Ne=De.split("_");D=2<=Ne.length&&Ne[1]=="type"?D+(De+"="+X+"&"):D+(De+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+l+`
`+h+`
`+D})}function Oa(o,l,h,p,I,b,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+l+`
`+h+`
`+b+" "+D})}function jn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+nf(o,h)+(p?" "+p:"")})}function tf(o,l){o.info(function(){return"TIMEOUT: "+l})}$t.prototype.info=function(){};function nf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var I=p[1];if(Array.isArray(I)&&!(1>I.length)){var b=I[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Un(h)}catch{return l}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vi;function us(){}k(us,gn),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},Vi=new us;function qt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ma}function Ma(){this.i=null,this.g="",this.h=!1}var La={},Oi={};function xi(o,l,h){o.L=1,o.v=ps(bt(l)),o.m=h,o.P=!0,Fa(o,null)}function Fa(o,l){o.F=Date.now(),hs(o),o.A=bt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ja(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Ma,o.g=gc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new ss(A(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(is[0]=I.toString()),I=is);for(var b=0;b<I.length;b++){var D=pr(h,I[b],p||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ce(),At(o.i,o.u,o.A,o.l,o.R,o.m)}qt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Rt(o)==3?l.j():this.Y(o)},qt.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=Rt(this.g);var l=this.g.Ba();const zn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||ic(this.g)))){this.J||Ne!=4||l==7||(l==8||0>=zn?ce(3):ce(2)),Mi(this);var h=this.g.Z();this.X=h;t:if(Ua(this)){var p=ic(this.g);o="";var I=p.length,b=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),_r(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(b&&l==I-1)});p.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Oa(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,be=this.g;if((ne=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(ne)){var X=ne;break t}}X=null}if(h=X)jn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Li(this,h);else{this.o=!1,this.s=3,pe(12),yn(this),_r(this);break e}}if(this.P){h=!0;let ot;for(;!this.J&&this.C<D.length;)if(ot=rf(this,D),ot==Oi){Ne==4&&(this.s=4,pe(14),h=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==La){this.s=4,pe(15),jn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else jn(this.i,this.l,ot,null),Li(this,ot);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||D.length!=0||this.h.h||(this.s=1,pe(16),h=!1),this.o=this.o&&h,!h)jn(this.i,this.l,D,"[Invalid Chunked Response]"),yn(this),_r(this);else if(0<D.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),qi(De),De.M=!0,pe(11))}}else jn(this.i,this.l,D,null),Li(this,D);Ne==4&&yn(this),this.o&&!this.J&&(Ne==4?dc(this.j,this):(this.o=!1,hs(this)))}else Ef(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,pe(12)):(this.s=0,pe(13)),yn(this),_r(this)}}}catch{}finally{}};function Ua(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function rf(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Oi:(h=Number(l.substring(h,p)),isNaN(h)?La:(p+=1,p+h>l.length?Oi:(l=l.slice(p,p+h),o.C=p+h,l)))}qt.prototype.cancel=function(){this.J=!0,yn(this)};function hs(o){o.S=Date.now()+o.I,Ba(o,o.I)}function Ba(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ae(A(o.ba,o),l)}function Mi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}qt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(tf(this.i,this.A),this.L!=2&&(ce(),pe(17)),yn(this),this.s=2,_r(this)):Ba(this,this.S-o)};function _r(o){o.j.G==0||o.J||dc(o.j,o)}function yn(o){Mi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,os(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Li(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Fi(h.h,o))){if(!o.K&&Fi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ts(h),ys(h);else break e;$i(h),pe(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ae(A(h.Za,h),6e3));if(1>=qa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Tn(h,11)}else if((o.K||h.g==o)&&Ts(h),!H(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let X=I[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const De=X[3];De!=null&&(h.la=De,h.j.info("VER="+h.la));const Ne=X[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));const zn=X[5];zn!=null&&typeof zn=="number"&&0<zn&&(p=1.5*zn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ot=o.g;if(ot){const Is=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var b=p.h;b.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ui(b,b.h),b.h=null))}if(p.D){const zi=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;zi&&(p.ya=zi,oe(p.I,p.D,zi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var D=o;if(p.qa=mc(p,p.J?p.ia:null,p.W),D.K){za(p.h,D);var ne=D,be=p.L;be&&(ne.I=be),ne.B&&(Mi(ne),hs(ne)),p.g=D}else uc(p);0<h.i.length&&vs(h)}else X[0]!="stop"&&X[0]!="close"||Tn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Tn(h,7):ji(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}ce(4)}catch{}}var sf=class{constructor(o,l){this.g=o,this.map=l}};function ja(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $a(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qa(o){return o.h?1:o.g?o.g.size:0}function Fi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ui(o,l){o.g?o.g.add(l):o.h=l}function za(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ja.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ha(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return O(o.i)}function of(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function af(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Ka(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=af(o),p=of(o),I=p.length,b=0;b<I;b++)l.call(void 0,p[b],h&&h[b],o)}var Wa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),I=null;if(0<=p){var b=o[h].substring(0,p);I=o[h].substring(p+1)}else b=o[h];l(b,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof vn){this.h=o.h,ds(this,o.j),this.o=o.o,this.g=o.g,fs(this,o.s),this.l=o.l;var l=o.i,h=new Tr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ga(this,h),this.m=o.m}else o&&(l=String(o).match(Wa))?(this.h=!1,ds(this,l[1]||"",!0),this.o=yr(l[2]||""),this.g=yr(l[3]||"",!0),fs(this,l[4]),this.l=yr(l[5]||"",!0),Ga(this,l[6]||"",!0),this.m=yr(l[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}vn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(vr(l,Qa,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(vr(l,Qa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(vr(h,h.charAt(0)=="/"?hf:uf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",vr(h,ff)),o.join("")};function bt(o){return new vn(o)}function ds(o,l,h){o.j=h?yr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function fs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ga(o,l,h){l instanceof Tr?(o.i=l,pf(o.i,o.h)):(h||(l=vr(l,df)),o.i=new Tr(l,o.h))}function oe(o,l,h){o.i.set(l,h)}function ps(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function yr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,lf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Qa=/[#\/\?@]/g,uf=/[#\?:]/g,hf=/[#\?]/g,df=/[#\?@]/g,ff=/#/g;function Tr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&cf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Tr.prototype,n.add=function(o,l){zt(this),this.i=null,o=$n(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ya(o,l){zt(o),l=$n(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Xa(o,l){return zt(o),l=$n(o,l),o.g.has(l)}n.forEach=function(o,l){zt(this),this.g.forEach(function(h,p){h.forEach(function(I){o.call(l,I,p,this)},this)},this)},n.na=function(){zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const I=o[p];for(let b=0;b<I.length;b++)h.push(l[p])}return h},n.V=function(o){zt(this);let l=[];if(typeof o=="string")Xa(this,o)&&(l=l.concat(this.g.get($n(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return zt(this),this.i=null,o=$n(this,o),Xa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ja(o,l,h){Ya(o,l),0<h.length&&(o.i=null,o.g.set($n(o,l),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const b=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var I=b;D[p]!==""&&(I+="="+encodeURIComponent(String(D[p]))),o.push(I)}}return this.i=o.join("&")};function $n(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function pf(o,l){l&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(h,p){var I=p.toLowerCase();p!=I&&(Ya(this,p),Ja(this,I,h))},o)),o.j=l}function mf(o,l){const h=new $t;if(c.Image){const p=new Image;p.onload=R(Ht,h,"TestLoadImage: loaded",!0,l,p),p.onerror=R(Ht,h,"TestLoadImage: error",!1,l,p),p.onabort=R(Ht,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(Ht,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function gf(o,l){const h=new $t,p=new AbortController,I=setTimeout(()=>{p.abort(),Ht(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(b=>{clearTimeout(I),b.ok?Ht(h,"TestPingServer: ok",!0,l):Ht(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Ht(h,"TestPingServer: error",!1,l)})}function Ht(o,l,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function _f(){this.g=new Ni}function yf(o,l,h){const p=h||"";try{Ka(o,function(I,b){let D=I;d(I)&&(D=Un(I)),l.push(p+b+"="+encodeURIComponent(D))})}catch(I){throw l.push(p+"type="+encodeURIComponent("_badmap")),I}}function ms(o){this.l=o.Ub||null,this.j=o.eb||!1}k(ms,gn),ms.prototype.g=function(){return new gs(this.l,this.j)},ms.prototype.i=function(o){return function(){return o}}({});function gs(o,l){de.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(gs,de),n=gs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Za(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Za(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Er(this):Ir(this),this.readyState==3&&Za(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Er(this))},n.Qa=function(o){this.g&&(this.response=o,Er(this))},n.ga=function(){this.g&&Er(this)};function Er(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ir(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ec(o){let l="";return ee(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Bi(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ec(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):oe(o,l,h))}function ue(o){de.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ue,de);var vf=/^https?$/i,Tf=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vi.g(),this.v=this.o?it(this.o):it(Vi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(b){tc(this,b);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Tf,l,void 0))||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sc(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){tc(this,b)}};function tc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,nc(o),_s(o)}function nc(o){o.A||(o.A=!0,we(o,"complete"),we(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,we(this,"complete"),we(this,"abort"),_s(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_s(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?rc(this):this.bb())},n.bb=function(){rc(this)};function rc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Rt(o)!=4||o.Z()!=2)){if(o.u&&Rt(o)==4)Fn(o.Ea,0,o);else if(we(o,"readystatechange"),Rt(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=D===0){var I=String(o.D).match(Wa)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),p=!vf.test(I?I.toLowerCase():"")}h=p}if(h)we(o,"complete"),we(o,"success");else{o.m=6;try{var b=2<Rt(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",nc(o)}}finally{_s(o)}}}}function _s(o,l){if(o.g){sc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||we(o,"ready");try{h.onreadystatechange=p}catch{}}}function sc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),as(l)}};function ic(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(o){const l={};o=(o.g&&2<=Rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(H(o[p]))continue;var h=T(o[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=l[I]||[];l[I]=b,b.push(h)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function oc(o){this.Aa=0,this.i=[],this.j=new $t,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wr("baseRetryDelayMs",5e3,o),this.cb=wr("retryDelaySeedMs",1e4,o),this.Wa=wr("forwardChannelMaxRetries",2,o),this.wa=wr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ja(o&&o.concurrentRequestLimit),this.Da=new _f,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){pe(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=mc(this,null,this.W),vs(this)};function ji(o){if(ac(o),o.G==3){var l=o.U++,h=bt(o.I);if(oe(h,"SID",o.K),oe(h,"RID",l),oe(h,"TYPE","terminate"),Ar(o,h),l=new qt(o,o.j,l),l.L=2,l.v=ps(bt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=gc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),hs(l)}pc(o)}function ys(o){o.g&&(qi(o),o.g.cancel(),o.g=null)}function ac(o){ys(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function vs(o){if(!$a(o.h)&&!o.s){o.s=!0;var l=o.Ga;Le||Ut(),Fe||(Le(),Fe=!0),Ue.add(l,o),o.B=0}}function If(o,l){return qa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ae(A(o.Ga,o,l),fc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new qt(this,this.j,o);let b=this.o;if(this.S&&(b?(b=g(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(I.H=b,b=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=lc(this,I,l),h=bt(this.I),oe(h,"RID",o),oe(h,"CVER",22),this.D&&oe(h,"X-HTTP-Session-Id",this.D),Ar(this,h),b&&(this.O?l="headers="+encodeURIComponent(String(ec(b)))+"&"+l:this.m&&Bi(h,this.m,b)),Ui(this.h,I),this.Ua&&oe(h,"TYPE","init"),this.P?(oe(h,"$req",l),oe(h,"SID","null"),I.T=!0,xi(I,h,null)):xi(I,h,l),this.G=2}}else this.G==3&&(o?cc(this,o):this.i.length==0||$a(this.h)||cc(this))};function cc(o,l){var h;l?h=l.l:h=o.U++;const p=bt(o.I);oe(p,"SID",o.K),oe(p,"RID",h),oe(p,"AID",o.T),Ar(o,p),o.m&&o.o&&Bi(p,o.m,o.o),h=new qt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=lc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ui(o.h,h),xi(h,p,l)}function Ar(o,l){o.H&&ee(o.H,function(h,p){oe(l,p,h)}),o.l&&Ka({},function(h,p){oe(l,p,h)})}function lc(o,l,h){h=Math.min(o.i.length,h);var p=o.l?A(o.l.Na,o.l,o):null;e:{var I=o.i;let b=-1;for(;;){const D=["count="+h];b==-1?0<h?(b=I[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let ne=!0;for(let be=0;be<h;be++){let X=I[be].g;const De=I[be].map;if(X-=b,0>X)b=Math.max(0,I[be].g-100),ne=!1;else try{yf(De,D,"req"+X+"_")}catch{p&&p(De)}}if(ne){p=D.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function uc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Le||Ut(),Fe||(Le(),Fe=!0),Ue.add(l,o),o.v=0}}function $i(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ae(A(o.Fa,o),fc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,hc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ae(A(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pe(10),ys(this),hc(this))};function qi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function hc(o){o.g=new qt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=bt(o.qa);oe(l,"RID","rpc"),oe(l,"SID",o.K),oe(l,"AID",o.T),oe(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(l,"TO",o.ja),oe(l,"TYPE","xmlhttp"),Ar(o,l),o.m&&o.o&&Bi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ps(bt(l)),h.m=null,h.P=!0,Fa(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ys(this),$i(this),pe(19))};function Ts(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function dc(o,l){var h=null;if(o.g==l){Ts(o),qi(o),o.g=null;var p=2}else if(Fi(o.h,l))h=l.D,za(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;p=Te(),we(p,new qe(p,h)),vs(o)}else uc(o);else if(I=l.s,I==3||I==0&&0<l.X||!(p==1&&If(o,l)||p==2&&$i(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:Tn(o,5);break;case 4:Tn(o,10);break;case 3:Tn(o,6);break;default:Tn(o,2)}}}function fc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Tn(o,l){if(o.j.info("Error code "+l),l==2){var h=A(o.fb,o),p=o.Xa;const I=!p;p=new vn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ds(p,"https"),ps(p),I?mf(p.toString(),h):gf(p.toString(),h)}else pe(2);o.G=0,o.l&&o.l.sa(l),pc(o),ac(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function pc(o){if(o.G=0,o.ka=[],o.l){const l=Ha(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function mc(o,l,h){var p=h instanceof vn?bt(h):new vn(h);if(p.g!="")l&&(p.g=l+"."+p.g),fs(p,p.s);else{var I=c.location;p=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var b=new vn(null);p&&ds(b,p),l&&(b.g=l),I&&fs(b,I),h&&(b.l=h),p=b}return h=o.D,l=o.ya,h&&l&&oe(p,h,l),oe(p,"VER",o.la),Ar(o,p),p}function gc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ue(new ms({eb:h})):new ue(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _c(){}n=_c.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Es(){}Es.prototype.g=function(o,l){return new Ye(o,l)};function Ye(o,l){de.call(this),this.g=new oc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!H(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!H(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new qn(this)}k(Ye,de),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){ji(this.g)},Ye.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Un(o),o=h);l.i.push(new sf(l.Ya++,o)),l.G==3&&vs(l)},Ye.prototype.N=function(){this.g.l=null,delete this.j,ji(this.g),delete this.g,Ye.aa.N.call(this)};function yc(o){Bn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}k(yc,Bn);function vc(){j.call(this),this.status=1}k(vc,j);function qn(o){this.g=o}k(qn,_c),qn.prototype.ua=function(){we(this.g,"a")},qn.prototype.ta=function(o){we(this.g,new yc(o))},qn.prototype.sa=function(o){we(this.g,new vc)},qn.prototype.ra=function(){we(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Vh=function(){return new Es},Nh=function(){return Te()},Dh=se,_o={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,xs=ls,xa.COMPLETE="complete",kh=xa,cs.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",de.prototype.listen=de.prototype.K,Sr=cs,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Ch=ue}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const il="@firebase/firestore",ol="4.7.9";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let cr="11.4.0";/**
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
 */const Cn=new ui("@firebase/firestore");function Hn(){return Cn.logLevel}function V(n,...e){if(Cn.logLevel<=K.DEBUG){const t=e.map(ea);Cn.debug(`Firestore (${cr}): ${n}`,...t)}}function Vt(n,...e){if(Cn.logLevel<=K.ERROR){const t=e.map(ea);Cn.error(`Firestore (${cr}): ${n}`,...t)}}function Zn(n,...e){if(Cn.logLevel<=K.WARN){const t=e.map(ea);Cn.warn(`Firestore (${cr}): ${n}`,...t)}}function ea(n){if(typeof n=="string")return n;try{/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function Z(n,e){n||F()}function $(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class ev{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tv{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new Oh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Oe(e)}}class nv{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new nv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class al{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sv{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Xe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new al(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new al(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function er(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const cl=-62135596800,ll=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ll);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cl)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ll}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ye(0,0))}static max(){return new U(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ul="__name__";class pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(),r===void 0?r=e.length-t:r>e.length-t&&F(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=pt.isNumericId(e),s=pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?pt.extractNumericId(e).compare(pt.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return en.fromString(e.substring(4,e.length-2))}}class he extends pt{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const ov=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends pt{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return ov.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ul}static keyField(){return new Se([ul])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(he.fromString(e))}static fromName(e){return new M(he.fromString(e).popFirst(5))}static empty(){return new M(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new he(e.slice()))}}/**
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
 */const Ur=-1;function av(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new rn(s,M.empty(),e)}function cv(n){return new rn(n.readTime,n.key,Ur)}class rn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rn(U.min(),M.empty(),Ur)}static max(){return new rn(U.max(),M.empty(),Ur)}}function lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const uv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==uv)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function dv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class gi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}gi.ae=-1;/**
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
 */const ta=-1;function _i(n){return n==null}function Ys(n){return n===0&&1/n==-1/0}function fv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mh="";function pv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hl(e)),e=mv(n.get(t),e);return hl(e)}function mv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Mh:t+="";break;default:t+=i}}return t}function hl(n){return n+Mh+""}/**
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
 */function dl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Re.RED,this.left=s??Re.EMPTY,this.right=i??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Re(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fl(this.data.getIterator())}getIteratorFrom(e){return new fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Je{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Je([])}unionWith(e){let t=new ve(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fh("Invalid base64 string: "+i):i}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const gv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(n){if(Z(!!n),typeof n=="string"){let e=0;const t=gv.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
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
 */const Uh="server_timestamp",Bh="__type__",jh="__previous_value__",$h="__local_write_time__";function na(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bh])===null||t===void 0?void 0:t.stringValue)===Uh}function yi(n){const e=n.mapValue.fields[jh];return na(e)?yi(e):e}function Br(n){const e=sn(n.mapValue.fields[$h].timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class _v{constructor(e,t,r,s,i,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const Xs="(default)";class jr{constructor(e,t){this.projectId=e,this.database=t||Xs}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database===Xs}isEqual(e){return e instanceof jr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qh="__type__",yv="__max__",Ss={mapValue:{}},zh="__vector__",Js="value";function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?na(n)?4:Tv(n)?9007199254740991:vv(n)?10:11:F()}function Et(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=sn(s.timestampValue),c=sn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=fe(s.doubleValue),c=fe(i.doubleValue);return a===c?Ys(a)===Ys(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return er(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(dl(a)!==dl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Et(a[u],c[u])))return!1;return!0}(n,e);default:return F()}}function $r(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function tr(n,e){if(n===e)return 0;const t=an(n),r=an(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=fe(i.integerValue||i.doubleValue),u=fe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return pl(n.timestampValue,e.timestampValue);case 4:return pl(Br(n),Br(e));case 5:return G(n.stringValue,e.stringValue);case 6:return function(i,a){const c=on(i),u=on(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=G(c[d],u[d]);if(m!==0)return m}return G(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=G(fe(i.latitude),fe(a.latitude));return c!==0?c:G(fe(i.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ml(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,d,m;const f=i.fields||{},A=a.fields||{},R=(c=f[Js])===null||c===void 0?void 0:c.arrayValue,k=(u=A[Js])===null||u===void 0?void 0:u.arrayValue,O=G(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:ml(R,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ss.mapValue&&a===Ss.mapValue)return 0;if(i===Ss.mapValue)return 1;if(a===Ss.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let f=0;f<u.length&&f<m.length;++f){const A=G(u[f],m[f]);if(A!==0)return A;const R=tr(c[u[f]],d[m[f]]);if(R!==0)return R}return G(u.length,m.length)}(n.mapValue,e.mapValue);default:throw F()}}function pl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=sn(n),r=sn(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function ml(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=tr(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function nr(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=sn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=yo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${yo(t.fields[a])}`;return s+"}"}(n.mapValue):F()}function Ms(n){switch(an(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yi(n);return e?16+Ms(e):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ms(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return un(r.fields,(i,a)=>{s+=i.length+Ms(a)}),s}(n.mapValue);default:throw F()}}function vo(n){return!!n&&"integerValue"in n}function ra(n){return!!n&&"arrayValue"in n}function gl(n){return!!n&&"nullValue"in n}function _l(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function vv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qh])===null||t===void 0?void 0:t.stringValue)===zh}function Nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Nr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Tv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yv}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nr(t)}setAll(e){let t=Se.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Nr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ls(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){un(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(Nr(this.value))}}function Hh(n){const e=[];return un(n.fields,(t,r)=>{const s=new Se([t]);if(Ls(r)){const i=Hh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Je(e)}/**
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
 */class xe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new xe(e,0,U.min(),U.min(),U.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new xe(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new xe(e,2,t,U.min(),U.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,U.min(),U.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zs{constructor(e,t){this.position=e,this.inclusive=t}}function yl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=tr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ei{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ev(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kh{}class _e extends Kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wv(e,t,r):t==="array-contains"?new Rv(e,r):t==="in"?new Sv(e,r):t==="not-in"?new Pv(e,r):t==="array-contains-any"?new Cv(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Av(e,r):new bv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(tr(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(tr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends Kh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new It(e,t)}matches(e){return Wh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Wh(n){return n.op==="and"}function Gh(n){return Iv(n)&&Wh(n)}function Iv(n){for(const e of n.filters)if(e instanceof It)return!1;return!0}function To(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+nr(n.value);if(Gh(n))return n.filters.map(e=>To(e)).join(",");{const e=n.filters.map(t=>To(t)).join(",");return`${n.op}(${e})`}}function Qh(n,e){return n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(n,e):n instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Qh(a,s.filters[c]),!0):!1}(n,e):void F()}function Yh(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${nr(t.value)}`}(n):n instanceof It?function(t){return t.op.toString()+" {"+t.getFilters().map(Yh).join(" ,")+"}"}(n):"Filter"}class wv extends _e{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Av extends _e{constructor(e,t){super(e,"in",t),this.keys=Xh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bv extends _e{constructor(e,t){super(e,"not-in",t),this.keys=Xh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Rv extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ra(t)&&$r(t.arrayValue,this.value)}}class Sv extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class Pv extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$r(this.value.arrayValue,t)}}class Cv extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
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
 */class kv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.le=null}}function Tl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new kv(n,e,t,r,s,i,a)}function sa(n){const e=$(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>To(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>nr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>nr(r)).join(",")),e.le=t}return e.le}function ia(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ev(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vl(n.startAt,e.startAt)&&vl(n.endAt,e.endAt)}function Eo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vi{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Dv(n,e,t,r,s,i,a,c){return new vi(n,e,t,r,s,i,a,c)}function oa(n){return new vi(n)}function El(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nv(n){return n.collectionGroup!==null}function Vr(n){const e=$(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ve(Se.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new ei(i,r))}),t.has(Se.keyField().canonicalString())||e.he.push(new ei(Se.keyField(),r))}return e.he}function _t(n){const e=$(n);return e.Pe||(e.Pe=Vv(e,Vr(n))),e.Pe}function Vv(n,e){if(n.limitType==="F")return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ei(s.field,i)});const t=n.endAt?new Zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zs(n.startAt.position,n.startAt.inclusive):null;return Tl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Io(n,e,t){return new vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ti(n,e){return ia(_t(n),_t(e))&&n.limitType===e.limitType}function Jh(n){return`${sa(_t(n))}|lt:${n.limitType}`}function Kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Yh(s)).join(", ")}]`),_i(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>nr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>nr(s)).join(",")),`Target(${r})`}(_t(n))}; limitType=${n.limitType})`}function Ei(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=yl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,Vr(r),s)||r.endAt&&!function(a,c,u){const d=yl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,Vr(r),s))}(n,e)}function Ov(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zh(n){return(e,t)=>{let r=!1;for(const s of Vr(n)){const i=xv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xv(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?tr(u,d):F()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class On{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Lh(this.inner)}size(){return this.innerSize}}/**
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
 */const Mv=new le(M.comparator);function Ot(){return Mv}const ed=new le(M.comparator);function Pr(...n){let e=ed;for(const t of n)e=e.insert(t.key,t);return e}function td(n){let e=ed;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function An(){return Or()}function nd(){return Or()}function Or(){return new On(n=>n.toString(),(n,e)=>n.isEqual(e))}const Lv=new le(M.comparator),Fv=new ve(M.comparator);function W(...n){let e=Fv;for(const t of n)e=e.add(t);return e}const Uv=new ve(G);function Bv(){return Uv}/**
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
 */function aa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(e)?"-0":e}}function rd(n){return{integerValue:""+n}}function jv(n,e){return fv(e)?rd(e):aa(n,e)}/**
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
 */class Ii{constructor(){this._=void 0}}function $v(n,e,t){return n instanceof ti?function(s,i){const a={fields:{[Bh]:{stringValue:Uh},[$h]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&na(i)&&(i=yi(i)),i&&(a.fields[jh]=i),{mapValue:a}}(t,e):n instanceof qr?id(n,e):n instanceof zr?od(n,e):function(s,i){const a=sd(s,i),c=Il(a)+Il(s.Ie);return vo(a)&&vo(s.Ie)?rd(c):aa(s.serializer,c)}(n,e)}function qv(n,e,t){return n instanceof qr?id(n,e):n instanceof zr?od(n,e):t}function sd(n,e){return n instanceof ni?function(r){return vo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ti extends Ii{}class qr extends Ii{constructor(e){super(),this.elements=e}}function id(n,e){const t=ad(e);for(const r of n.elements)t.some(s=>Et(s,r))||t.push(r);return{arrayValue:{values:t}}}class zr extends Ii{constructor(e){super(),this.elements=e}}function od(n,e){let t=ad(e);for(const r of n.elements)t=t.filter(s=>!Et(s,r));return{arrayValue:{values:t}}}class ni extends Ii{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Il(n){return fe(n.integerValue||n.doubleValue)}function ad(n){return ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qr&&s instanceof qr||r instanceof zr&&s instanceof zr?er(r.elements,s.elements,Et):r instanceof ni&&s instanceof ni?Et(r.Ie,s.Ie):r instanceof ti&&s instanceof ti}(n.transform,e.transform)}class Hv{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function cd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ud(n.key,yt.none()):new Xr(n.key,n.data,yt.none());{const t=n.data,r=Ke.empty();let s=new ve(Se.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new hn(n.key,r,new Je(s.toArray()),yt.none())}}function Kv(n,e,t){n instanceof Xr?function(s,i,a){const c=s.value.clone(),u=Al(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hn?function(s,i,a){if(!Fs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Al(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ld(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function xr(n,e,t,r){return n instanceof Xr?function(i,a,c,u){if(!Fs(i.precondition,a))return c;const d=i.value.clone(),m=bl(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof hn?function(i,a,c,u){if(!Fs(i.precondition,a))return c;const d=bl(i.fieldTransforms,u,a),m=a.data;return m.setAll(ld(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,a,c){return Fs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Wv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=sd(r.transform,s||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,i))}return t||null}function wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&er(r,s,(i,a)=>zv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hn extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ld(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Al(n,e,t){const r=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,qv(a,c,t[s]))}return r}function bl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,$v(i,a,e))}return r}class ud extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gv extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Kv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=nd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=cd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(t,r)=>wl(t,r))&&er(this.baseMutations,e.baseMutations,(t,r)=>wl(t,r))}}class ca{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length);let s=function(){return Lv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ca(e,t,r,s)}}/**
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
 */class Yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var me,Q;function Jv(n){switch(n){case C.OK:return F();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F()}}function hd(n){if(n===void 0)return Vt("GRPC error has no .code"),C.UNKNOWN;switch(n){case me.OK:return C.OK;case me.CANCELLED:return C.CANCELLED;case me.UNKNOWN:return C.UNKNOWN;case me.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case me.INTERNAL:return C.INTERNAL;case me.UNAVAILABLE:return C.UNAVAILABLE;case me.UNAUTHENTICATED:return C.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case me.NOT_FOUND:return C.NOT_FOUND;case me.ALREADY_EXISTS:return C.ALREADY_EXISTS;case me.PERMISSION_DENIED:return C.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case me.ABORTED:return C.ABORTED;case me.OUT_OF_RANGE:return C.OUT_OF_RANGE;case me.UNIMPLEMENTED:return C.UNIMPLEMENTED;case me.DATA_LOSS:return C.DATA_LOSS;default:return F()}}(Q=me||(me={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Zv(){return new TextEncoder}/**
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
 */const eT=new en([4294967295,4294967295],0);function Rl(n){const e=Zv().encode(n),t=new Ph;return t.update(e),new Uint8Array(t.digest())}function Sl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new en([t,r],0),new en([s,i],0)]}class la{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Cr(`Invalid padding: ${t}`);if(r<0)throw new Cr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Cr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=en.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(en.fromNumber(r)));return s.compare(eT)===1&&(s=new en([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Rl(e),[r,s]=Sl(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new la(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const t=Rl(e),[r,s]=Sl(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ai(U.min(),s,new le(G),Ot(),W())}}class Jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Jr(r,t,W(),W(),W())}}/**
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
 */class Us{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class dd{constructor(e,t){this.targetId=e,this.ge=t}}class fd{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pl{constructor(){this.pe=0,this.ye=Cl(),this.we=Ce.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=W(),t=W(),r=W();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F()}}),new Jr(this.we,this.be,e,t,r)}Me(){this.Se=!1,this.ye=Cl()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Z(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class tT{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ot(),this.$e=Ps(),this.Ke=Ps(),this.Ue=new le(G)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(Eo(i))if(r===0){const a=new M(i.path);this.ze(t,a,xe.newNoDocument(a,U.min()))}else Z(r===1);else{const a=this.et(t);if(a!==r){const c=this.tt(e),u=c?this.nt(c,e,a):1;if(u!==0){this.Ye(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,d)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=on(r).toUint8Array()}catch(u){if(u instanceof Fh)return Zn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new la(a,s,i)}catch(u){return Zn(u instanceof Cr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const c=this.Xe(a);if(c){if(i.current&&Eo(c.target)){const u=new M(c.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,xe.newNoDocument(u,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=W();this.Ke.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Xe(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new Ai(e,t,this.Ue,this.Qe,r);return this.Qe=Ot(),this.$e=Ps(),this.Ke=Ps(),this.Ue=new le(G),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Pl,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new ve(G),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ve(G),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Pl),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ps(){return new le(M.comparator)}function Cl(){return new le(M.comparator)}const nT={asc:"ASCENDING",desc:"DESCENDING"},rT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sT={and:"AND",or:"OR"};class iT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wo(n,e){return n.useProto3Json||_i(e)?e:{value:e}}function ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oT(n,e){return ri(n,e.toTimestamp())}function vt(n){return Z(!!n),U.fromTimestamp(function(t){const r=sn(t);return new ye(r.seconds,r.nanos)}(n))}function ua(n,e){return Ao(n,e).canonicalString()}function Ao(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function md(n){const e=he.fromString(n);return Z(Td(e)),e}function bo(n,e){return ua(n.databaseId,e.path)}function no(n,e){const t=md(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(_d(t))}function gd(n,e){return ua(n.databaseId,e)}function aT(n){const e=md(n);return e.length===4?he.emptyPath():_d(e)}function Ro(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _d(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kl(n,e,t){return{name:bo(n,e),fields:t.value.mapValue.fields}}function cT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(Z(m===void 0||typeof m=="string"),Ce.fromBase64String(m||"")):(Z(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ce.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:hd(d.code);return new x(m,d.message||"")}(a);t=new fd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=no(n,r.document.name),i=vt(r.document.updateTime),a=r.document.createTime?vt(r.document.createTime):U.min(),c=new Ke({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Us(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=no(n,r.document),i=r.readTime?vt(r.readTime):U.min(),a=xe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Us([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=no(n,r.document),i=r.removedTargetIds||[];t=new Us([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Xv(s,i),c=r.targetId;t=new dd(c,a)}}return t}function lT(n,e){let t;if(e instanceof Xr)t={update:kl(n,e.key,e.value)};else if(e instanceof ud)t={delete:bo(n,e.key)};else if(e instanceof hn)t={update:kl(n,e.key,e.data),updateMask:yT(e.fieldMask)};else{if(!(e instanceof Gv))return F();t={verify:bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof qr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ni)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw F()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(n,e.precondition)),t}function uT(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?vt(s.updateTime):vt(i);return a.isEqual(U.min())&&(a=vt(i)),new Hv(a,s.transformResults||[])}(t,e))):[]}function hT(n,e){return{documents:[gd(n,e.path)]}}function dT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gd(n,s);const i=function(d){if(d.length!==0)return vd(It.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:Wn(A.field),direction:mT(A.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=wo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ht:t,parent:s}}function fT(n){let e=aT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(f){const A=yd(f);return A instanceof It&&Gh(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(f){return f.map(A=>function(k){return new ei(Gn(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(f){let A;return A=typeof f=="object"?f.value:f,_i(A)?null:A}(t.limit));let u=null;t.startAt&&(u=function(f){const A=!!f.before,R=f.values||[];return new Zs(R,A)}(t.startAt));let d=null;return t.endAt&&(d=function(f){const A=!f.before,R=f.values||[];return new Zs(R,A)}(t.endAt)),Dv(e,s,a,i,c,"F",u,d)}function pT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Gn(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gn(t.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gn(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gn(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(Gn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return It.create(t.compositeFilter.filters.map(r=>yd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function mT(n){return nT[n]}function gT(n){return rT[n]}function _T(n){return sT[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Gn(n){return Se.fromServerFormat(n.fieldPath)}function vd(n){return n instanceof _e?function(t){if(t.op==="=="){if(_l(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(gl(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_l(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(gl(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:gT(t.op),value:t.value}}}(n):n instanceof It?function(t){const r=t.getFilters().map(s=>vd(s));return r.length===1?r[0]:{compositeFilter:{op:_T(t.op),filters:r}}}(n):F()}function yT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Td(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xt{constructor(e,t,r,s,i=U.min(),a=U.min(),c=Ce.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vT{constructor(e){this.Tt=e}}function TT(n){const e=fT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Io(e,e.limit,"L"):e}/**
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
 */class ET{constructor(){this.Tn=new IT}addToCollectionParentIndex(e,t){return this.Tn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(rn.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class IT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(he.comparator)).toArray()}}/**
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
 */const Dl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ed=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Ed,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
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
 */class rr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new rr(0)}static Un(){return new rr(-1)}}/**
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
 */const Nl="LruGarbageCollector",wT=1048576;function Vl([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class AT{constructor(e){this.Hn=e,this.buffer=new ve(Vl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){V(Nl,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ur(t)?V(Nl,"Ignoring IndexedDB error during garbage collection: ",t):await lr(t)}await this.er(3e5)})}}class RT{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(gi.ae);const r=new AT(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Dl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dl):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,a=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),Hn()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function ST(n,e){return new RT(n,e)}/**
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
 */class PT{constructor(){this.changes=new On(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&xr(r.mutation,s,Je.empty(),ye.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=An();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Pr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=An();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Ot();const a=Or(),c=function(){return Or()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof hn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),xr(m.mutation,d,m.mutation.getFieldMask(),ye.now())):a.set(d.key,Je.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var f;return c.set(d,new CT(m,(f=a.get(d))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Or();let s=new le((a,c)=>a-c),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Je.empty();m=c.applyToLocalView(d,m),r.set(u,m);const f=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,f)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,f=nd();m.forEach(A=>{if(!i.has(A)){const R=cd(t.get(A),r.get(A));R!==null&&f.set(A,R),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,f))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(An());let c=Ur,u=i;return a.next(d=>S.forEach(d,(m,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(m)?S.resolve():this.remoteDocumentCache.getEntry(e,m).next(A=>{u=u.insert(m,A)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(m=>({batchId:c,changes:td(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=Pr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Pr();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,u=>{const d=function(f,A){return new vi(A,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((f,A)=>{a=a.insert(f,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,xe.newInvalidDocument(m)))});let c=Pr();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&xr(m.mutation,d,Je.empty(),ye.now()),Ei(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class DT{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return S.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:vt(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:TT(s.bundledQuery),readTime:vt(s.readTime)}}(t)),S.resolve()}}/**
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
 */class NT{constructor(){this.overlays=new le(M.comparator),this.Rr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=An();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=An(),i=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new le((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=An(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=An(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return S.resolve(c)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Yv(t,r));let i=this.Rr.get(t);i===void 0&&(i=W(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class VT{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class ha{constructor(){this.Vr=new ve(Ee.mr),this.gr=new ve(Ee.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Ee(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new M(new he([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new M(new he([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=W();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return M.comparator(e.key,t.key)||G(e.Cr,t.Cr)}static pr(e,t){return G(e.Cr,t.Cr)||M.comparator(e.key,t.key)}}/**
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
 */class OT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ve(Ee.mr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ta:this.Fr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(G);return t.forEach(s=>{const i=new Ee(s,0),a=new Ee(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],c=>{r=r.add(c.Cr)})}),S.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new Ee(new M(i),0);let c=new ve(G);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Cr)),!0)},a),S.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return S.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Ee(t,0),s=this.Mr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xT{constructor(e){this.kr=e,this.docs=function(){return new le(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xe.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ot();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||lv(cv(m),r)<=0||(s.has(m.key)||Ei(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F()}qr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new MT(this)}getSize(e){return S.resolve(this.size)}}class MT extends PT{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class LT{constructor(e){this.persistence=e,this.Qr=new On(t=>sa(t),ia),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ha,this.targetCount=0,this.Ur=rr.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),S.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.zn(t),S.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Kr.containsKey(t))}}/**
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
 */class Id{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new gi(0),this.zr=!1,this.zr=!0,this.jr=new VT,this.referenceDelegate=e(this),this.Hr=new LT(this),this.indexManager=new ET,this.remoteDocumentCache=function(s){return new xT(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new vT(t),this.Yr=new DT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new OT(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new FT(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return S.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class FT extends hv{constructor(e){super(),this.currentSequenceNumber=e}}class da{constructor(e){this.persistence=e,this.ti=new ha,this.ni=null}static ri(e){return new da(e)}get ii(){if(this.ni)return this.ni;throw F()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),S.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ii,r=>{const s=M.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return S.or([()=>S.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class si{constructor(e,t){this.persistence=e,this.oi=new On(r=>pv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ST(this,t)}static ri(e,t){return new si(e,t)}Zr(){}Xr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return S.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),S.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ms(e.data.value)),t}ar(e,t,r){return S.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fa(e,t.fromCache,r,s)}}/**
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
 */class UT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BT{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ep()?8:dv(Me())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new UT;return this._s(e,t,a).next(c=>{if(i.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Hn()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),S.resolve()):(Hn()<=K.DEBUG&&V("QueryEngine","Query:",Kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Hn()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):S.resolve())}rs(e,t){if(El(t))return S.resolve(null);let r=_t(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Io(t,null,"F"),r=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,a,u.readTime)?this.rs(e,Io(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,s){return El(t)||s.isEqual(U.min())?S.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?S.resolve(null):(Hn()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(t)),this.hs(e,a,t,av(s,Ur)).next(c=>c))})}cs(e,t){let r=new ve(Zh(e));return t.forEach((s,i)=>{Ei(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Hn()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.ns.getDocumentsMatchingQuery(e,t,rn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const pa="LocalStore",jT=3e8;class $T{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new le(G),this.Is=new On(i=>sa(i),ia),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kT(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function qT(n,e,t,r){return new $T(n,e,t,r)}async function wd(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=W();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function zT(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const f=d.batch,A=f.keys();let R=S.resolve();return A.forEach(k=>{R=R.next(()=>m.getEntry(u,k)).next(O=>{const P=d.docVersions.get(k);Z(P!==null),O.version.compareTo(P)<0&&(f.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ad(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function HT(n,e){const t=$(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const c=[];e.targetChanges.forEach((m,f)=>{const A=s.get(f);if(!A)return;c.push(t.Hr.removeMatchingKeys(i,m.removedDocuments,f).next(()=>t.Hr.addMatchingKeys(i,m.addedDocuments,f)));let R=A.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?R=R.withResumeToken(Ce.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(f,R),function(O,P,B){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=jT?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,R,m)&&c.push(t.Hr.updateTargetData(i,R))});let u=Ot(),d=W();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(KT(i,a,e.documentUpdates).next(m=>{u=m.Vs,d=m.fs})),!r.isEqual(U.min())){const m=t.Hr.getLastRemoteSnapshotVersion(i).next(f=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ts=s,i))}function KT(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Ot();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):V(pa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function WT(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ta),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GT(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function So(n,e,t){const r=$(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ur(a))throw a;V(pa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Ol(n,e,t){const r=$(n);let s=U.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const f=$(u),A=f.Is.get(m);return A!==void 0?S.resolve(f.Ts.get(A)):f.Hr.getTargetData(d,m)}(r,a,_t(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:W())).next(c=>(QT(r,Ov(e),c),{documents:c,gs:i})))}function QT(n,e,t){let r=n.Es.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class xl{constructor(){this.activeTargetIds=Bv()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YT{constructor(){this.ho=new xl,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new xl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XT{To(e){}shutdown(){}}/**
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
 */const Ml="ConnectivityMonitor";class Ll{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(Ml,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){V(Ml,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cs=null;function Po(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
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
 */const ro="RestConnection",JT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZT{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,t,r,s,i){const a=Po(),c=this.So(e,t.toUriEncodedString());V(ro,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(e,c,u,r).then(d=>(V(ro,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Zn(ro,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,s,i,a){return this.bo(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,t){const r=JT[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class eE{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Ve="WebChannelConnection";class tE extends ZT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=Po();return new Promise((a,c)=>{const u=new Ch;u.setWithCredentials(!0),u.listenOnce(kh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case xs.NO_ERROR:const m=u.getResponseJson();V(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case xs.TIMEOUT:V(Ve,`RPC '${e}' ${i} timed out`),c(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const f=u.getStatus();if(V(Ve,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const k=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(B)>=0?B:C.UNKNOWN}(R.status);c(new x(k,R.message))}else c(new x(C.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new x(C.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{V(Ve,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);V(Ve,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const s=Po(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vh(),c=Nh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");V(Ve,`Creating RPC '${e}' stream ${s}: ${m}`,u);const f=a.createWebChannel(m,u);let A=!1,R=!1;const k=new eE({Fo:P=>{R?V(Ve,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(A||(V(Ve,`Opening RPC '${e}' stream ${s} transport.`),f.open(),A=!0),V(Ve,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Mo:()=>f.close()}),O=(P,B,H)=>{P.listen(B,z=>{try{H(z)}catch(re){setTimeout(()=>{throw re},0)}})};return O(f,Sr.EventType.OPEN,()=>{R||(V(Ve,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),O(f,Sr.EventType.CLOSE,()=>{R||(R=!0,V(Ve,`RPC '${e}' stream ${s} transport closed`),k.Ko())}),O(f,Sr.EventType.ERROR,P=>{R||(R=!0,Zn(Ve,`RPC '${e}' stream ${s} transport errored:`,P),k.Ko(new x(C.UNAVAILABLE,"The operation could not be completed")))}),O(f,Sr.EventType.MESSAGE,P=>{var B;if(!R){const H=P.data[0];Z(!!H);const z=H,re=(z==null?void 0:z.error)||((B=z[0])===null||B===void 0?void 0:B.error);if(re){V(Ve,`RPC '${e}' stream ${s} received error:`,re);const ie=re.status;let ee=function(y){const v=me[y];if(v!==void 0)return hd(v)}(ie),E=re.message;ee===void 0&&(ee=C.INTERNAL,E="Unknown error status: "+ie+" with message "+re.message),R=!0,k.Ko(new x(ee,E)),f.close()}else V(Ve,`RPC '${e}' stream ${s} received:`,H),k.Uo(H)}}),O(c,Dh.STAT_EVENT,P=>{P.stat===_o.PROXY?V(Ve,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===_o.NOPROXY&&V(Ve,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function so(){return typeof document<"u"?document:null}/**
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
 */function bi(n){return new iT(n,!0)}/**
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
 */class bd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Fl="PersistentStream";class Rd{constructor(e,t,r,s,i,a,c,u){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new bd(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return V(Fl,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(V(Fl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nE extends Rd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=cT(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?vt(a.readTime):U.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Ro(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Eo(u)?{documents:hT(i,u)}:{query:dT(i,u).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=pd(i,a.resumeToken);const d=wo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=ri(i,a.snapshotVersion.toTimestamp());const d=wo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=pT(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Ro(this.serializer),t.removeTarget=e,this.I_(t)}}class rE extends Rd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uT(e.writeResults,e.commitTime),r=vt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Ro(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>lT(this.serializer,r))};this.I_(t)}}/**
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
 */class sE{}class iE extends sE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,Ao(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(C.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,Ao(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class oE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):V("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const kn="RemoteStore";class aE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{xn(this)&&(V(kn,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.W_.add(4),await Zr(d),d.j_.set("Unknown"),d.W_.delete(4),await Ri(d)}(this))})}),this.j_=new oE(r,s)}}async function Ri(n){if(xn(n))for(const e of n.G_)await e(!0)}async function Zr(n){for(const e of n.G_)await e(!1)}function Sd(n,e){const t=$(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),ya(t)?_a(t):hr(t).c_()&&ga(t,e))}function ma(n,e){const t=$(n),r=hr(t);t.U_.delete(e),r.c_()&&Pd(t,e),t.U_.size===0&&(r.c_()?r.P_():xn(t)&&t.j_.set("Unknown"))}function ga(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(n).y_(e)}function Pd(n,e){n.H_.Ne(e),hr(n).w_(e)}function _a(n){n.H_=new tT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.j_.B_()}function ya(n){return xn(n)&&!hr(n).u_()&&n.U_.size>0}function xn(n){return $(n).W_.size===0}function Cd(n){n.H_=void 0}async function cE(n){n.j_.set("Online")}async function lE(n){n.U_.forEach((e,t)=>{ga(n,e)})}async function uE(n,e){Cd(n),ya(n)?(n.j_.q_(e),_a(n)):n.j_.set("Unknown")}async function hE(n,e,t){if(n.j_.set("Online"),e instanceof fd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.U_.delete(c),s.H_.removeTarget(c))}(n,e)}catch(r){V(kn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ii(n,r)}else if(e instanceof Us?n.H_.We(e):e instanceof dd?n.H_.Ze(e):n.H_.je(e),!t.isEqual(U.min()))try{const r=await Ad(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.H_.ot(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.U_.get(d);m&&i.U_.set(d,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const m=i.U_.get(u);if(!m)return;i.U_.set(u,m.withResumeToken(Ce.EMPTY_BYTE_STRING,m.snapshotVersion)),Pd(i,u);const f=new Xt(m.target,u,d,m.sequenceNumber);ga(i,f)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){V(kn,"Failed to raise snapshot:",r),await ii(n,r)}}async function ii(n,e,t){if(!ur(e))throw e;n.W_.add(1),await Zr(n),n.j_.set("Offline"),t||(t=()=>Ad(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(kn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ri(n)})}function kd(n,e){return e().catch(t=>ii(n,t,e))}async function Si(n){const e=$(n),t=cn(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:ta;for(;dE(e);)try{const s=await WT(e.localStore,r);if(s===null){e.K_.length===0&&t.P_();break}r=s.batchId,fE(e,s)}catch(s){await ii(e,s)}Dd(e)&&Nd(e)}function dE(n){return xn(n)&&n.K_.length<10}function fE(n,e){n.K_.push(e);const t=cn(n);t.c_()&&t.b_&&t.S_(e.mutations)}function Dd(n){return xn(n)&&!cn(n).u_()&&n.K_.length>0}function Nd(n){cn(n).start()}async function pE(n){cn(n).C_()}async function mE(n){const e=cn(n);for(const t of n.K_)e.S_(t.mutations)}async function gE(n,e,t){const r=n.K_.shift(),s=ca.from(r,e,t);await kd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Si(n)}async function _E(n,e){e&&cn(n).b_&&await async function(r,s){if(function(a){return Jv(a)&&a!==C.ABORTED}(s.code)){const i=r.K_.shift();cn(r).h_(),await kd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Si(r)}}(n,e),Dd(n)&&Nd(n)}async function Ul(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),V(kn,"RemoteStore received new credentials");const r=xn(t);t.W_.add(3),await Zr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ri(t)}async function yE(n,e){const t=$(n);e?(t.W_.delete(2),await Ri(t)):e||(t.W_.add(2),await Zr(t),t.j_.set("Unknown"))}function hr(n){return n.J_||(n.J_=function(t,r,s){const i=$(t);return i.M_(),new nE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:cE.bind(null,n),No:lE.bind(null,n),Lo:uE.bind(null,n),p_:hE.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ya(n)?_a(n):n.j_.set("Unknown")):(await n.J_.stop(),Cd(n))})),n.J_}function cn(n){return n.Y_||(n.Y_=function(t,r,s){const i=$(t);return i.M_(),new rE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:pE.bind(null,n),Lo:_E.bind(null,n),D_:mE.bind(null,n),v_:gE.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Si(n)):(await n.Y_.stop(),n.K_.length>0&&(V(kn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class va{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new va(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),ur(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jn{static emptySet(e){return new Jn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Pr(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Bl{constructor(){this.Z_=new le(M.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):F():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class sr{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new sr(e,t,Jn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vE{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class TE{constructor(){this.queries=jl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=jl(),i.forEach((a,c)=>{for(const u of c.ta)u.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function jl(){return new On(n=>Jh(n),Ti)}async function EE(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new vE,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ta(a,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Ea(t)}async function IE(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function wE(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&Ea(t)}function AE(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function Ea(n){n.ia.forEach(e=>{e.next()})}var Co,$l;($l=Co||(Co={}))._a="default",$l.Cache="cache";class bE{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new sr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Co.Cache}}/**
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
 */class Vd{constructor(e){this.key=e}}class Od{constructor(e){this.key=e}}class RE{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=W(),this.mutatedKeys=W(),this.ya=Zh(e),this.wa=new Jn(this.ya)}get ba(){return this.fa}Sa(e,t){const r=t?t.Da:new Bl,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,f)=>{const A=s.get(m),R=Ei(this.query,f)?f:null,k=!!A&&this.mutatedKeys.has(A.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;A&&R?A.data.isEqual(R.data)?k!==O&&(r.track({type:3,doc:R}),P=!0):this.va(A,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.ya(R,u)>0||d&&this.ya(R,d)<0)&&(c=!0)):!A&&R?(r.track({type:0,doc:R}),P=!0):A&&!R&&(r.track({type:1,doc:A}),P=!0,(u||d)&&(c=!0)),P&&(R?(a=a.add(R),i=O?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{wa:a,Da:r,ls:c,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((m,f)=>function(R,k){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return O(R)-O(k)}(m.type,f.type)||this.ya(m.doc,f.doc)),this.Ca(r),s=s!=null&&s;const c=t&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,d=u!==this.ga;return this.ga=u,a.length!==0||d?{snapshot:new sr(this.query,e.wa,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Bl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=W(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Od(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Vd(r))}),t}Oa(e){this.fa=e.gs,this.pa=W();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return sr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ia="SyncEngine";class SE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class PE{constructor(e){this.key=e,this.Ba=!1}}class CE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new On(c=>Jh(c),Ti),this.qa=new Map,this.Qa=new Set,this.$a=new le(M.comparator),this.Ka=new Map,this.Ua=new ha,this.Wa={},this.Ga=new Map,this.za=rr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kE(n,e,t=!0){const r=Bd(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await xd(r,e,t,!0),s}async function DE(n,e){const t=Bd(n);await xd(t,e,!0,!1)}async function xd(n,e,t,r){const s=await GT(n.localStore,_t(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await NE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Sd(n.remoteStore,s),c}async function NE(n,e,t,r,s){n.Ha=(f,A,R)=>async function(O,P,B,H){let z=P.view.Sa(B);z.ls&&(z=await Ol(O.localStore,P.query,!1).then(({documents:E})=>P.view.Sa(E,z)));const re=H&&H.targetChanges.get(P.targetId),ie=H&&H.targetMismatches.get(P.targetId)!=null,ee=P.view.applyChanges(z,O.isPrimaryClient,re,ie);return zl(O,P.targetId,ee.Ma),ee.snapshot}(n,f,A,R);const i=await Ol(n.localStore,e,!0),a=new RE(e,i.gs),c=a.Sa(i.documents),u=Jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);zl(n,t,d.Ma);const m=new SE(e,t,a);return n.ka.set(e,m),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),d.snapshot}async function VE(n,e,t){const r=$(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!Ti(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await So(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ma(r.remoteStore,s.targetId),ko(r,s.targetId)}).catch(lr)):(ko(r,s.targetId),await So(r.localStore,s.targetId,!0))}async function OE(n,e){const t=$(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ma(t.remoteStore,r.targetId))}async function xE(n,e,t){const r=$E(n);try{const s=await function(a,c){const u=$(a),d=ye.now(),m=c.reduce((R,k)=>R.add(k.key),W());let f,A;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Ot(),O=W();return u.ds.getEntries(R,m).next(P=>{k=P,k.forEach((B,H)=>{H.isValidDocument()||(O=O.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(P=>{f=P;const B=[];for(const H of c){const z=Wv(H,f.get(H.key).overlayedDocument);z!=null&&B.push(new hn(H.key,z,Hh(z.value.mapValue),yt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,B,c)}).next(P=>{A=P;const B=P.applyToLocalDocumentSet(f,O);return u.documentOverlayCache.saveOverlays(R,P.batchId,B)})}).then(()=>({batchId:A.batchId,changes:td(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Wa[a.currentUser.toKey()];d||(d=new le(G)),d=d.insert(c,u),a.Wa[a.currentUser.toKey()]=d}(r,s.batchId,t),await es(r,s.changes),await Si(r.remoteStore)}catch(s){const i=Ta(s,"Failed to persist write");t.reject(i)}}async function Md(n,e){const t=$(n);try{const r=await HT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ka.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Z(a.Ba):s.removedDocuments.size>0&&(Z(a.Ba),a.Ba=!1))}),await es(t,r,e)}catch(r){await lr(r)}}function ql(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const c=a.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach((m,f)=>{for(const A of f.ta)A.sa(c)&&(d=!0)}),d&&Ea(u)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ME(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ka.get(e),i=s&&s.key;if(i){let a=new le(M.comparator);a=a.insert(i,xe.newNoDocument(i,U.min()));const c=W().add(i),u=new Ai(U.min(),new Map,new le(G),a,c);await Md(r,u),r.$a=r.$a.remove(i),r.Ka.delete(e),wa(r)}else await So(r.localStore,e,!1).then(()=>ko(r,e,t)).catch(lr)}async function LE(n,e){const t=$(n),r=e.batch.batchId;try{const s=await zT(t.localStore,e);Fd(t,r,null),Ld(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await es(t,s)}catch(s){await lr(s)}}async function FE(n,e,t){const r=$(n);try{const s=await function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(f=>(Z(f!==null),m=f.keys(),u.mutationQueue.removeMutationBatch(d,f))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Fd(r,e,t),Ld(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await es(r,s)}catch(s){await lr(s)}}function Ld(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Fd(n,e,t){const r=$(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(r=>{n.Ua.containsKey(r)||Ud(n,r)})}function Ud(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(ma(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),wa(n))}function zl(n,e,t){for(const r of t)r instanceof Vd?(n.Ua.addReference(r.key,e),UE(n,r)):r instanceof Od?(V(Ia,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||Ud(n,r.key)):F()}function UE(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(V(Ia,"New document in limbo: "+t),n.Qa.add(r),wa(n))}function wa(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new M(he.fromString(e)),r=n.za.next();n.Ka.set(r,new PE(t)),n.$a=n.$a.insert(t,r),Sd(n.remoteStore,new Xt(_t(oa(t.path)),r,"TargetPurposeLimboResolution",gi.ae))}}async function es(n,e,t){const r=$(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{a.push(r.Ha(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=fa.Yi(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,d){const m=$(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>S.forEach(d,A=>S.forEach(A.Hi,R=>m.persistence.referenceDelegate.addReference(f,A.targetId,R)).next(()=>S.forEach(A.Ji,R=>m.persistence.referenceDelegate.removeReference(f,A.targetId,R)))))}catch(f){if(!ur(f))throw f;V(pa,"Failed to update sequence numbers: "+f)}for(const f of d){const A=f.targetId;if(!f.fromCache){const R=m.Ts.get(A),k=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(k);m.Ts=m.Ts.insert(A,O)}}}(r.localStore,i))}async function BE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){V(Ia,"User change. New user:",e.toKey());const r=await wd(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(c=>{c.forEach(u=>{u.reject(new x(C.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await es(t,r.Rs)}}function jE(n,e){const t=$(n),r=t.Ka.get(e);if(r&&r.Ba)return W().add(r.key);{let s=W();const i=t.qa.get(e);if(!i)return s;for(const a of i){const c=t.ka.get(a);s=s.unionWith(c.view.ba)}return s}}function Bd(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Md.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ME.bind(null,e),e.La.p_=wE.bind(null,e.eventManager),e.La.Ja=AE.bind(null,e.eventManager),e}function $E(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FE.bind(null,e),e}class oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return qT(this.persistence,new BT,e.initialUser,this.serializer)}Xa(e){return new Id(da.ri,this.serializer)}Za(e){return new YT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oi.provider={build:()=>new oi};class qE extends oi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Z(this.persistence.referenceDelegate instanceof si);const r=this.persistence.referenceDelegate.garbageCollector;return new bT(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Id(r=>si.ri(r,t),this.serializer)}}class Do{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await yE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TE}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=function(i){return new tE(i)}(e.databaseInfo);return function(i,a,c,u){return new iE(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new aE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ql(this.syncEngine,t,0),function(){return Ll.D()?new Ll:new XT}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,m){const f=new CE(s,i,a,c,u,d);return m&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);V(kn,"RemoteStore shutting down."),i.W_.add(5),await Zr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Do.provider={build:()=>new Do};/**
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
 */class zE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ln="FirestoreClient";class HE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=xh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{V(ln,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(ln,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ta(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function io(n,e){n.asyncQueue.verifyOperationInProgress(),V(ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await KE(n);V(ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ul(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ul(e.remoteStore,s)),n._onlineComponents=e}async function KE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(ln,"Using user provided OfflineComponentProvider");try{await io(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Zn("Error using user provided cache. Falling back to memory cache: "+t),await io(n,new oi)}}else V(ln,"Using default OfflineComponentProvider"),await io(n,new qE(void 0));return n._offlineComponents}async function jd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(ln,"Using user provided OnlineComponentProvider"),await Hl(n,n._uninitializedComponentsProvider._online)):(V(ln,"Using default OnlineComponentProvider"),await Hl(n,new Do))),n._onlineComponents}function WE(n){return jd(n).then(e=>e.syncEngine)}async function GE(n){const e=await jd(n),t=e.eventManager;return t.onListen=kE.bind(null,e.syncEngine),t.onUnlisten=VE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OE.bind(null,e.syncEngine),t}function QE(n,e,t={}){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new zE({next:A=>{m.su(),a.enqueueAndForget(()=>IE(i,f));const R=A.docs.has(c);!R&&A.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&u&&u.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),f=new bE(oa(c.path),m,{includeMetadataChanges:!0,Ta:!0});return EE(i,f)}(await GE(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function $d(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Kl=new Map;/**
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
 */function YE(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XE(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wl(n){if(!M.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Aa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Aa(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const qd="firestore.googleapis.com",Gl=!0;class Ql{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qd,this.ssl=Gl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gl;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ed;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wT)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$d((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zy;switch(r.type){case"firstParty":return new rv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Kl.get(t);r&&(V("ComponentProvider","Removing Datastore"),Kl.delete(t),r.terminate())}(this),Promise.resolve()}}function JE(n,e,t,r={}){var s;const i=(n=Dn(n,ba))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i.host!==qd&&i.host!==c&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!nn(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Oe.MOCK_USER;else{d=Gf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Oe(f)}n._authCredentials=new ev(new Oh(d,m))}}/**
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
 */class Ra{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ra(this.firestore,e,this._query)}}class et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Hr extends Ra{constructor(e,t,r){super(e,t,oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new M(e))}withConverter(e){return new Hr(this.firestore,e,this._path)}}function hw(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=xh.newId()),YE("doc","path",e),n instanceof ba){const r=he.fromString(e,...t);return Wl(r),new et(n,null,new M(r))}{if(!(n instanceof et||n instanceof Hr))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Wl(r),new et(n.firestore,n instanceof Hr?n.converter:null,new M(r))}}/**
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
 */const Yl="AsyncQueue";class Xl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new bd(this,"async_queue_retry"),this.bu=()=>{const r=so();r&&V(Yl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=so();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=so();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new tn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ur(e))throw e;V(Yl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=va.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&F()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Pi extends ba{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xl(e),this._firestoreClient=void 0,await e}}}function ZE(n,e){const t=typeof n=="object"?n:Fo(),r=typeof n=="string"?n:Xs,s=Vn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kf("firestore");i&&JE(s,...i)}return s}function zd(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eI(n),n._firestoreClient}function eI(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,d,m){return new _v(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,$d(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new HE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(Ce.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ci{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sa{constructor(e){this._methodName=e}}/**
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
 */class Pa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
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
 */class Ca{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const tI=/^__.*__$/;class nI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xr(e,this.data,t,this.fieldTransforms)}}class Hd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ka{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ai(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Kd(this.Lu)&&tI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class rI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}ju(e,t,r,s=!1){return new ka({Lu:e,methodName:t,zu:r,path:Se.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new rI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sI(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);Da("Data must be an object, but it was:",a,r);const c=Gd(r,a);let u,d;if(i.merge)u=new Je(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const f of i.mergeFields){const A=No(e,f,t);if(!a.contains(A))throw new x(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Yd(m,A)||m.push(A)}u=new Je(m),d=a.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,d=a.fieldTransforms;return new nI(new Ke(c),u,d)}class ki extends Sa{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ki}}function iI(n,e,t,r){const s=n.ju(1,e,t);Da("Data must be an object, but it was:",s,r);const i=[],a=Ke.empty();un(r,(u,d)=>{const m=Na(e,u,t);d=Ie(d);const f=s.Ku(m);if(d instanceof ki)i.push(m);else{const A=Di(d,f);A!=null&&(i.push(m),a.set(m,A))}});const c=new Je(i);return new Hd(a,c,s.fieldTransforms)}function oI(n,e,t,r,s,i){const a=n.ju(1,e,t),c=[No(e,r,t)],u=[s];if(i.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)c.push(No(e,i[A])),u.push(i[A+1]);const d=[],m=Ke.empty();for(let A=c.length-1;A>=0;--A)if(!Yd(d,c[A])){const R=c[A];let k=u[A];k=Ie(k);const O=a.Ku(R);if(k instanceof ki)d.push(R);else{const P=Di(k,O);P!=null&&(d.push(R),m.set(R,P))}}const f=new Je(d);return new Hd(m,f,a.fieldTransforms)}function Di(n,e){if(Qd(n=Ie(n)))return Da("Unsupported field value:",e,n),Gd(n,e);if(n instanceof Sa)return function(r,s){if(!Kd(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Di(c,s.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:ri(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ri(s.serializer,i)}}if(r instanceof Pa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ir)return{bytesValue:pd(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ua(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ca)return function(a,c){return{mapValue:{fields:{[qh]:{stringValue:zh},[Js]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return aa(c.serializer,d)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Aa(r)}`)}(n,e)}function Gd(n,e){const t={};return Lh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,s)=>{const i=Di(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Qd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof Pa||n instanceof ir||n instanceof et||n instanceof Sa||n instanceof Ca)}function Da(n,e,t){if(!Qd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Aa(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function No(n,e,t){if((e=Ie(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return Na(n,e);throw ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const aI=new RegExp("[~\\*/\\[\\]]");function Na(n,e,t){if(e.search(aI)>=0)throw ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ci(...e.split("."))._internalPath}catch{throw ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ai(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new x(C.INVALID_ARGUMENT,c+n+u)}function Yd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Xd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cI extends Xd{data(){return super.data()}}function Jd(n,e){return typeof e=="string"?Na(n,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}class lI{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Js].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>fe(a.doubleValue));return new Ca(i)}convertGeoPoint(e){return new Pa(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Br(e));default:return null}}convertTimestamp(e){const t=sn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);Z(Td(r));const s=new jr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||Vt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function uI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class hI{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zd extends Xd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class dI extends Zd{data(e={}){return super.data(e)}}/**
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
 */function dw(n){n=Dn(n,et);const e=Dn(n.firestore,Pi);return QE(zd(e),n._key).then(t=>pI(e,n,t))}class fI extends lI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}function fw(n,e,t){n=Dn(n,et);const r=Dn(n.firestore,Pi),s=uI(n.converter,e);return ef(r,[sI(Wd(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,yt.none())])}function pw(n,e,t,...r){n=Dn(n,et);const s=Dn(n.firestore,Pi),i=Wd(s);let a;return a=typeof(e=Ie(e))=="string"||e instanceof Ci?oI(i,"updateDoc",n._key,e,t,r):iI(i,"updateDoc",n._key,e),ef(s,[a.toMutation(n._key,yt.exists(!0))])}function ef(n,e){return function(r,s){const i=new tn;return r.asyncQueue.enqueueAndForget(async()=>xE(await WE(r),s,i)),i.promise}(zd(n),e)}function pI(n,e,t){const r=t.docs.get(e._key),s=new fI(n);return new Zd(n,s,e._key,r,new hI(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){cr=s})(or),Tt(new ct("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Pi(new tv(r.getProvider("auth-internal")),new sv(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),rt(il,ol,e),rt(il,ol,"esm2017")})();const mI={apiKey:"AIzaSyDSpR59UMQiiurZi8Xfcx1XK07XxnsfzA4",authDomain:"bailamos-7ca0a.firebaseapp.com",projectId:"bailamos-7ca0a",storageBucket:"bailamos-7ca0a.firebasestorage.app",messagingSenderId:"699079333565",appId:"1:699079333565:web:379fecc565baed3e8709d4",measurementId:"G-8EH4DY8MEQ"},Va=wu(mI);Qy(Va);const mw=N_(Va),gw=ZE(Va);var gI=(n,e,t,r,s,i,a,c)=>{let u=document.documentElement,d=["light","dark"];function m(R){(Array.isArray(n)?n:[n]).forEach(k=>{let O=k==="class",P=O&&i?s.map(B=>i[B]||B):s;O?(u.classList.remove(...P),u.classList.add(i[R]||R)):u.setAttribute(k,R)}),f(R)}function f(R){c&&d.includes(R)&&(u.style.colorScheme=R)}function A(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(r)m(r);else try{let R=localStorage.getItem(e)||t,k=a&&R==="system"?A():R;m(k)}catch{}},_I=mt.createContext(void 0),yI={setTheme:n=>{},themes:[]},_w=()=>{var n;return(n=mt.useContext(_I))!=null?n:yI};mt.memo(({forcedTheme:n,storageKey:e,attribute:t,enableSystem:r,enableColorScheme:s,defaultTheme:i,value:a,themes:c,nonce:u,scriptProps:d})=>{let m=JSON.stringify([t,e,i,n,c,a,r,s]).slice(1,-1);return mt.createElement("script",{...d,suppressHydrationWarning:!0,nonce:typeof window>"u"?u:"",dangerouslySetInnerHTML:{__html:`(${gI.toString()})(${m})`}})});function vI(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const TI=n=>{switch(n){case"success":return wI;case"info":return bI;case"warning":return AI;case"error":return RI;default:return null}},EI=Array(12).fill(0),II=({visible:n,className:e})=>N.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},N.createElement("div",{className:"sonner-spinner"},EI.map((t,r)=>N.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),wI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),AI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),bI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),RI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),SI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},N.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),N.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),PI=()=>{const[n,e]=N.useState(document.hidden);return N.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Vo=1;class CI{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...s}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Vo++,a=this.toasts.find(u=>u.id===i),c=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),a?this.toasts=this.toasts.map(u=>u.id===i?(this.publish({...u,...e,id:i,title:r}),{...u,...e,id:i,dismissible:c,title:r}):u):this.addToast({title:r,...s,dismissible:c,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0}))),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const s=Promise.resolve(e instanceof Function?e():e);let i=r!==void 0,a;const c=s.then(async d=>{if(a=["resolve",d],N.isValidElement(d))i=!1,this.create({id:r,type:"default",message:d});else if(DI(d)&&!d.ok){i=!1;const f=typeof t.error=="function"?await t.error(`HTTP error! status: ${d.status}`):t.error,A=typeof t.description=="function"?await t.description(`HTTP error! status: ${d.status}`):t.description,R=typeof f=="object"?f:{message:f};this.create({id:r,type:"error",description:A,...R})}else if(d instanceof Error){i=!1;const f=typeof t.error=="function"?await t.error(d):t.error,A=typeof t.description=="function"?await t.description(d):t.description,R=typeof f=="object"?f:{message:f};this.create({id:r,type:"error",description:A,...R})}else if(t.success!==void 0){i=!1;const f=typeof t.success=="function"?await t.success(d):t.success,A=typeof t.description=="function"?await t.description(d):t.description,R=typeof f=="object"?f:{message:f};this.create({id:r,type:"success",description:A,...R})}}).catch(async d=>{if(a=["reject",d],t.error!==void 0){i=!1;const m=typeof t.error=="function"?await t.error(d):t.error,f=typeof t.description=="function"?await t.description(d):t.description,A=typeof m=="object"?m:{message:m};this.create({id:r,type:"error",description:f,...A})}}).finally(()=>{i&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),u=()=>new Promise((d,m)=>c.then(()=>a[0]==="reject"?m(a[1]):d(a[1])).catch(m));return typeof r!="string"&&typeof r!="number"?{unwrap:u}:Object.assign(r,{unwrap:u})},this.custom=(e,t)=>{const r=(t==null?void 0:t.id)||Vo++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ze=new CI,kI=(n,e)=>{const t=(e==null?void 0:e.id)||Vo++;return ze.addToast({title:n,...e,id:t}),t},DI=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",NI=kI,VI=()=>ze.toasts,OI=()=>ze.getActiveToasts(),yw=Object.assign(NI,{success:ze.success,info:ze.info,warning:ze.warning,error:ze.error,custom:ze.custom,message:ze.message,promise:ze.promise,dismiss:ze.dismiss,loading:ze.loading},{getHistory:VI,getToasts:OI});vI("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ks(n){return n.label!==void 0}const xI=3,MI="24px",LI="16px",Jl=4e3,FI=356,UI=14,BI=45,jI=200;function ft(...n){return n.filter(Boolean).join(" ")}function $I(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const qI=n=>{var e,t,r,s,i,a,c,u,d;const{invert:m,toast:f,unstyled:A,interacting:R,setHeights:k,visibleToasts:O,heights:P,index:B,toasts:H,expanded:z,removeToast:re,defaultRichColors:ie,closeButton:ee,style:E,cancelButtonStyle:g,actionButtonStyle:y,className:v="",descriptionClassName:T="",duration:w,position:_,gap:Ge,expandByDefault:ke,classNames:Y,icons:Le,closeButtonAriaLabel:Fe="Close toast"}=n,[Ue,Ut]=N.useState(null),[te,J]=N.useState(null),[q,je]=N.useState(!1),[Qe,ae]=N.useState(!1),[ut,Bt]=N.useState(!1),[dn,ht]=N.useState(!1),[Mn,Ln]=N.useState(!1),[dr,fn]=N.useState(0),[fr,pr]=N.useState(0),pn=N.useRef(f.duration||w||Jl),ts=N.useRef(null),tt=N.useRef(null),mr=B===0,ns=B+1<=O,$e=f.type,dt=f.dismissible!==!1,gr=f.className||"",rs=f.descriptionClassName||"",de=N.useMemo(()=>P.findIndex(j=>j.toastId===f.id)||0,[P,f.id]),we=N.useMemo(()=>{var j;return(j=f.closeButton)!=null?j:ee},[f.closeButton,ee]),mn=N.useMemo(()=>f.duration||w||Jl,[f.duration,w]),Fn=N.useRef(0),wt=N.useRef(0),ss=N.useRef(0),nt=N.useRef(null),[is,os]=_.split("-"),Un=N.useMemo(()=>P.reduce((j,se,ge)=>ge>=de?j:j+se.height,0),[P,de]),as=PI(),Ni=f.invert||m,gn=$e==="loading";wt.current=N.useMemo(()=>de*Ge+Un,[de,Un]),N.useEffect(()=>{pn.current=mn},[mn]),N.useEffect(()=>{je(!0)},[]),N.useEffect(()=>{const j=tt.current;if(j){const se=j.getBoundingClientRect().height;return pr(se),k(ge=>[{toastId:f.id,height:se,position:f.position},...ge]),()=>k(ge=>ge.filter(Te=>Te.toastId!==f.id))}},[k,f.id]),N.useLayoutEffect(()=>{if(!q)return;const j=tt.current,se=j.style.height;j.style.height="auto";const ge=j.getBoundingClientRect().height;j.style.height=se,pr(ge),k(Te=>Te.find(ce=>ce.toastId===f.id)?Te.map(ce=>ce.toastId===f.id?{...ce,height:ge}:ce):[{toastId:f.id,height:ge,position:f.position},...Te])},[q,f.title,f.description,k,f.id]);const it=N.useCallback(()=>{ae(!0),fn(wt.current),k(j=>j.filter(se=>se.toastId!==f.id)),setTimeout(()=>{re(f)},jI)},[f,re,k,wt]);N.useEffect(()=>{if(f.promise&&$e==="loading"||f.duration===1/0||f.type==="loading")return;let j;return z||R||as?(()=>{if(ss.current<Fn.current){const Te=new Date().getTime()-Fn.current;pn.current=pn.current-Te}ss.current=new Date().getTime()})():(()=>{pn.current!==1/0&&(Fn.current=new Date().getTime(),j=setTimeout(()=>{f.onAutoClose==null||f.onAutoClose.call(f,f),it()},pn.current))})(),()=>clearTimeout(j)},[z,R,f,$e,as,it]),N.useEffect(()=>{f.delete&&it()},[it,f.delete]);function cs(){var j;if(Le!=null&&Le.loading){var se;return N.createElement("div",{className:ft(Y==null?void 0:Y.loader,f==null||(se=f.classNames)==null?void 0:se.loader,"sonner-loader"),"data-visible":$e==="loading"},Le.loading)}return N.createElement(II,{className:ft(Y==null?void 0:Y.loader,f==null||(j=f.classNames)==null?void 0:j.loader),visible:$e==="loading"})}var jt,Bn;return N.createElement("li",{tabIndex:0,ref:tt,className:ft(v,gr,Y==null?void 0:Y.toast,f==null||(e=f.classNames)==null?void 0:e.toast,Y==null?void 0:Y.default,Y==null?void 0:Y[$e],f==null||(t=f.classNames)==null?void 0:t[$e]),"data-sonner-toast":"","data-rich-colors":(jt=f.richColors)!=null?jt:ie,"data-styled":!(f.jsx||f.unstyled||A),"data-mounted":q,"data-promise":!!f.promise,"data-swiped":Mn,"data-removed":Qe,"data-visible":ns,"data-y-position":is,"data-x-position":os,"data-index":B,"data-front":mr,"data-swiping":ut,"data-dismissible":dt,"data-type":$e,"data-invert":Ni,"data-swipe-out":dn,"data-swipe-direction":te,"data-expanded":!!(z||ke&&q),style:{"--index":B,"--toasts-before":B,"--z-index":H.length-B,"--offset":`${Qe?dr:wt.current}px`,"--initial-height":ke?"auto":`${fr}px`,...E,...f.style},onDragEnd:()=>{Bt(!1),Ut(null),nt.current=null},onPointerDown:j=>{gn||!dt||(ts.current=new Date,fn(wt.current),j.target.setPointerCapture(j.pointerId),j.target.tagName!=="BUTTON"&&(Bt(!0),nt.current={x:j.clientX,y:j.clientY}))},onPointerUp:()=>{var j,se,ge;if(dn||!dt)return;nt.current=null;const Te=Number(((j=tt.current)==null?void 0:j.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),_n=Number(((se=tt.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),ce=new Date().getTime()-((ge=ts.current)==null?void 0:ge.getTime()),Be=Ue==="x"?Te:_n,pe=Math.abs(Be)/ce;if(Math.abs(Be)>=BI||pe>.11){fn(wt.current),f.onDismiss==null||f.onDismiss.call(f,f),J(Ue==="x"?Te>0?"right":"left":_n>0?"down":"up"),it(),ht(!0);return}else{var qe,Ae;(qe=tt.current)==null||qe.style.setProperty("--swipe-amount-x","0px"),(Ae=tt.current)==null||Ae.style.setProperty("--swipe-amount-y","0px")}Ln(!1),Bt(!1),Ut(null)},onPointerMove:j=>{var se,ge,Te;if(!nt.current||!dt||((se=window.getSelection())==null?void 0:se.toString().length)>0)return;const ce=j.clientY-nt.current.y,Be=j.clientX-nt.current.x;var pe;const qe=(pe=n.swipeDirections)!=null?pe:$I(_);!Ue&&(Math.abs(Be)>1||Math.abs(ce)>1)&&Ut(Math.abs(Be)>Math.abs(ce)?"x":"y");let Ae={x:0,y:0};const $t=At=>1/(1.5+Math.abs(At)/20);if(Ue==="y"){if(qe.includes("top")||qe.includes("bottom"))if(qe.includes("top")&&ce<0||qe.includes("bottom")&&ce>0)Ae.y=ce;else{const At=ce*$t(ce);Ae.y=Math.abs(At)<Math.abs(ce)?At:ce}}else if(Ue==="x"&&(qe.includes("left")||qe.includes("right")))if(qe.includes("left")&&Be<0||qe.includes("right")&&Be>0)Ae.x=Be;else{const At=Be*$t(Be);Ae.x=Math.abs(At)<Math.abs(Be)?At:Be}(Math.abs(Ae.x)>0||Math.abs(Ae.y)>0)&&Ln(!0),(ge=tt.current)==null||ge.style.setProperty("--swipe-amount-x",`${Ae.x}px`),(Te=tt.current)==null||Te.style.setProperty("--swipe-amount-y",`${Ae.y}px`)}},we&&!f.jsx&&$e!=="loading"?N.createElement("button",{"aria-label":Fe,"data-disabled":gn,"data-close-button":!0,onClick:gn||!dt?()=>{}:()=>{it(),f.onDismiss==null||f.onDismiss.call(f,f)},className:ft(Y==null?void 0:Y.closeButton,f==null||(r=f.classNames)==null?void 0:r.closeButton)},(Bn=Le==null?void 0:Le.close)!=null?Bn:SI):null,$e||f.icon||f.promise?N.createElement("div",{"data-icon":"",className:ft(Y==null?void 0:Y.icon,f==null||(s=f.classNames)==null?void 0:s.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||cs():null,f.type!=="loading"?f.icon||(Le==null?void 0:Le[$e])||TI($e):null):null,N.createElement("div",{"data-content":"",className:ft(Y==null?void 0:Y.content,f==null||(i=f.classNames)==null?void 0:i.content)},N.createElement("div",{"data-title":"",className:ft(Y==null?void 0:Y.title,f==null||(a=f.classNames)==null?void 0:a.title)},f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title),f.description?N.createElement("div",{"data-description":"",className:ft(T,rs,Y==null?void 0:Y.description,f==null||(c=f.classNames)==null?void 0:c.description)},typeof f.description=="function"?f.description():f.description):null),N.isValidElement(f.cancel)?f.cancel:f.cancel&&ks(f.cancel)?N.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||g,onClick:j=>{ks(f.cancel)&&dt&&(f.cancel.onClick==null||f.cancel.onClick.call(f.cancel,j),it())},className:ft(Y==null?void 0:Y.cancelButton,f==null||(u=f.classNames)==null?void 0:u.cancelButton)},f.cancel.label):null,N.isValidElement(f.action)?f.action:f.action&&ks(f.action)?N.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||y,onClick:j=>{ks(f.action)&&(f.action.onClick==null||f.action.onClick.call(f.action,j),!j.defaultPrevented&&it())},className:ft(Y==null?void 0:Y.actionButton,f==null||(d=f.classNames)==null?void 0:d.actionButton)},f.action.label):null)};function Zl(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function zI(n,e){const t={};return[n,e].forEach((r,s)=>{const i=s===1,a=i?"--mobile-offset":"--offset",c=i?LI:MI;function u(d){["top","right","bottom","left"].forEach(m=>{t[`${a}-${m}`]=typeof d=="number"?`${d}px`:d})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(d=>{r[d]===void 0?t[`${a}-${d}`]=c:t[`${a}-${d}`]=typeof r[d]=="number"?`${r[d]}px`:r[d]}):u(c)}),t}const vw=N.forwardRef(function(e,t){const{invert:r,position:s="bottom-right",hotkey:i=["altKey","KeyT"],expand:a,closeButton:c,className:u,offset:d,mobileOffset:m,theme:f="light",richColors:A,duration:R,style:k,visibleToasts:O=xI,toastOptions:P,dir:B=Zl(),gap:H=UI,icons:z,containerAriaLabel:re="Notifications"}=e,[ie,ee]=N.useState([]),E=N.useMemo(()=>Array.from(new Set([s].concat(ie.filter(te=>te.position).map(te=>te.position)))),[ie,s]),[g,y]=N.useState([]),[v,T]=N.useState(!1),[w,_]=N.useState(!1),[Ge,ke]=N.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Y=N.useRef(null),Le=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),Fe=N.useRef(null),Ue=N.useRef(!1),Ut=N.useCallback(te=>{ee(J=>{var q;return(q=J.find(je=>je.id===te.id))!=null&&q.delete||ze.dismiss(te.id),J.filter(({id:je})=>je!==te.id)})},[]);return N.useEffect(()=>ze.subscribe(te=>{if(te.dismiss){const J=ie.map(q=>q.id===te.id?{...q,delete:!0}:q);requestAnimationFrame(()=>{ee(J)});return}setTimeout(()=>{kf.flushSync(()=>{ee(J=>{const q=J.findIndex(je=>je.id===te.id);return q!==-1?[...J.slice(0,q),{...J[q],...te},...J.slice(q+1)]:[te,...J]})})})}),[ie]),N.useEffect(()=>{if(f!=="system"){ke(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ke("dark"):ke("light")),typeof window>"u")return;const te=window.matchMedia("(prefers-color-scheme: dark)");try{te.addEventListener("change",({matches:J})=>{ke(J?"dark":"light")})}catch{te.addListener(({matches:q})=>{try{ke(q?"dark":"light")}catch(je){console.error(je)}})}},[f]),N.useEffect(()=>{ie.length<=1&&T(!1)},[ie]),N.useEffect(()=>{const te=J=>{var q;if(i.every(ae=>J[ae]||J.code===ae)){var Qe;T(!0),(Qe=Y.current)==null||Qe.focus()}J.code==="Escape"&&(document.activeElement===Y.current||(q=Y.current)!=null&&q.contains(document.activeElement))&&T(!1)};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[i]),N.useEffect(()=>{if(Y.current)return()=>{Fe.current&&(Fe.current.focus({preventScroll:!0}),Fe.current=null,Ue.current=!1)}},[Y.current]),N.createElement("section",{ref:t,"aria-label":`${re} ${Le}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((te,J)=>{var q;const[je,Qe]=te.split("-");return ie.length?N.createElement("ol",{key:te,dir:B==="auto"?Zl():B,tabIndex:-1,ref:Y,className:u,"data-sonner-toaster":!0,"data-sonner-theme":Ge,"data-y-position":je,"data-lifted":v&&ie.length>1&&!a,"data-x-position":Qe,style:{"--front-toast-height":`${((q=g[0])==null?void 0:q.height)||0}px`,"--width":`${FI}px`,"--gap":`${H}px`,...k,...zI(d,m)},onBlur:ae=>{Ue.current&&!ae.currentTarget.contains(ae.relatedTarget)&&(Ue.current=!1,Fe.current&&(Fe.current.focus({preventScroll:!0}),Fe.current=null))},onFocus:ae=>{ae.target instanceof HTMLElement&&ae.target.dataset.dismissible==="false"||Ue.current||(Ue.current=!0,Fe.current=ae.relatedTarget)},onMouseEnter:()=>T(!0),onMouseMove:()=>T(!0),onMouseLeave:()=>{w||T(!1)},onDragEnd:()=>T(!1),onPointerDown:ae=>{ae.target instanceof HTMLElement&&ae.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},ie.filter(ae=>!ae.position&&J===0||ae.position===te).map((ae,ut)=>{var Bt,dn;return N.createElement(qI,{key:ae.id,icons:z,index:ut,toast:ae,defaultRichColors:A,duration:(Bt=P==null?void 0:P.duration)!=null?Bt:R,className:P==null?void 0:P.className,descriptionClassName:P==null?void 0:P.descriptionClassName,invert:r,visibleToasts:O,closeButton:(dn=P==null?void 0:P.closeButton)!=null?dn:c,interacting:w,position:te,style:P==null?void 0:P.style,unstyled:P==null?void 0:P.unstyled,classNames:P==null?void 0:P.classNames,cancelButtonStyle:P==null?void 0:P.cancelButtonStyle,actionButtonStyle:P==null?void 0:P.actionButtonStyle,closeButtonAriaLabel:P==null?void 0:P.closeButtonAriaLabel,removeToast:Ut,toasts:ie.filter(ht=>ht.position==ae.position),heights:g.filter(ht=>ht.position==ae.position),setHeights:y,expandByDefault:a,gap:H,expanded:v,swipeDirections:e.swipeDirections})})):null}))});export{ZI as C,lt as F,Gt as G,vw as T,mw as a,WI as b,gw as c,hw as d,ew as e,tw as f,dw as g,nw as h,rw as i,ye as j,QI as k,YI as l,XI as m,JI as n,aw as o,ow as p,iw as q,fw as r,cw as s,yw as t,pw as u,lw as v,sw as w,_w as z};
