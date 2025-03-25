import{r as Ot,j as $e,R as V}from"./index-BVgBzDmY.js";import{p as Rm,a as Sm,b as Cm,j as Pm,P as Ps,w as Eh,x as km,y as Dm,d as Oo,e as Nm,g as Xt,_ as ka,z as Vm}from"./HeadBar-DOZSPuws.js";/*! js-cookie v3.0.5 | MIT */function ri(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}var xm={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ta(n,e){function t(s,i,a){if(!(typeof document>"u")){a=ri({},e,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,a[u]!==!0&&(c+="="+a[u].split(";")[0]));return document.cookie=s+"="+n.write(i,s)+c}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],a={},c=0;c<i.length;c++){var u=i[c].split("="),h=u.slice(1).join("=");try{var p=decodeURIComponent(u[0]);if(a[p]=n.read(h,p),s===p)break}catch{}}return s?a[s]:a}}return Object.create({set:t,get:r,remove:function(s,i){t(s,"",ri({},i,{expires:-1}))},withAttributes:function(s){return ta(this.converter,ri({},this.attributes,s))},withConverter:function(s){return ta(ri({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(n)}})}var IA=ta(xm,{path:"/"}),Da="Tabs",[Om,bA]=Cm(Da,[Eh]),wh=Eh(),[Lm,Na]=Om(Da),Ih=Ot.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,onValueChange:s,defaultValue:i,orientation:a="horizontal",dir:c,activationMode:u="automatic",...h}=n,p=Rm(c),[f,w]=Sm({prop:r,onChange:s,defaultProp:i});return $e.jsx(Lm,{scope:t,baseId:Pm(),value:f,onValueChange:w,orientation:a,dir:p,activationMode:u,children:$e.jsx(Ps.div,{dir:p,"data-orientation":a,...h,ref:e})})});Ih.displayName=Da;var bh="TabsList",Ah=Ot.forwardRef((n,e)=>{const{__scopeTabs:t,loop:r=!0,...s}=n,i=Na(bh,t),a=wh(t);return $e.jsx(km,{asChild:!0,...a,orientation:i.orientation,dir:i.dir,loop:r,children:$e.jsx(Ps.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:e})})});Ah.displayName=bh;var Rh="TabsTrigger",Sh=Ot.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,disabled:s=!1,...i}=n,a=Na(Rh,t),c=wh(t),u=kh(a.baseId,r),h=Dh(a.baseId,r),p=r===a.value;return $e.jsx(Dm,{asChild:!0,...c,focusable:!s,active:p,children:$e.jsx(Ps.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":h,"data-state":p?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:u,...i,ref:e,onMouseDown:Oo(n.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?a.onValueChange(r):f.preventDefault()}),onKeyDown:Oo(n.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&a.onValueChange(r)}),onFocus:Oo(n.onFocus,()=>{const f=a.activationMode!=="manual";!p&&!s&&f&&a.onValueChange(r)})})})});Sh.displayName=Rh;var Ch="TabsContent",Ph=Ot.forwardRef((n,e)=>{const{__scopeTabs:t,value:r,forceMount:s,children:i,...a}=n,c=Na(Ch,t),u=kh(c.baseId,r),h=Dh(c.baseId,r),p=r===c.value,f=Ot.useRef(p);return Ot.useEffect(()=>{const w=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(w)},[]),$e.jsx(Nm,{present:s||p,children:({present:w})=>$e.jsx(Ps.div,{"data-state":p?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":u,hidden:!w,id:h,tabIndex:0,...a,ref:e,style:{...n.style,animationDuration:f.current?"0s":void 0},children:w&&i})})});Ph.displayName=Ch;function kh(n,e){return`${n}-trigger-${e}`}function Dh(n,e){return`${n}-content-${e}`}var Mm=Ih,Fm=Ah,Um=Sh,Bm=Ph;function AA({className:n,...e}){return $e.jsx(Mm,{"data-slot":"tabs",className:Xt("flex flex-col gap-2",n),...e})}function RA({className:n,...e}){return $e.jsx(Fm,{"data-slot":"tabs-list",className:Xt("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",n),...e})}function SA({className:n,...e}){return $e.jsx(Um,{"data-slot":"tabs-trigger",className:Xt("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...e})}function CA({className:n,...e}){return $e.jsx(Bm,{"data-slot":"tabs-content",className:Xt("flex-1 outline-none",n),...e})}function PA({className:n,...e}){return $e.jsx("div",{"data-slot":"card",className:Xt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...e})}function kA({className:n,...e}){return $e.jsx("div",{"data-slot":"card-header",className:Xt("flex flex-col gap-1.5 px-6",n),...e})}function DA({className:n,...e}){return $e.jsx("div",{"data-slot":"card-title",className:Xt("leading-none font-semibold",n),...e})}function NA({className:n,...e}){return $e.jsx("div",{"data-slot":"card-content",className:Xt("px-6",n),...e})}function VA({className:n,...e}){return $e.jsx("div",{"data-slot":"card-footer",className:Xt("flex items-center px-6",n),...e})}var ks=n=>n.type==="checkbox",rr=n=>n instanceof Date,at=n=>n==null;const Nh=n=>typeof n=="object";var xe=n=>!at(n)&&!Array.isArray(n)&&Nh(n)&&!rr(n),Vh=n=>xe(n)&&n.target?ks(n.target)?n.target.checked:n.target.value:n,jm=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,xh=(n,e)=>n.has(jm(e)),$m=n=>{const e=n.constructor&&n.constructor.prototype;return xe(e)&&e.hasOwnProperty("isPrototypeOf")},Va=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ht(n){let e;const t=Array.isArray(n),r=typeof FileList<"u"?n instanceof FileList:!1;if(n instanceof Date)e=new Date(n);else if(n instanceof Set)e=new Set(n);else if(!(Va&&(n instanceof Blob||r))&&(t||xe(n)))if(e=t?[]:{},!t&&!$m(n))e=n;else for(const s in n)n.hasOwnProperty(s)&&(e[s]=ht(n[s]));else return n;return e}var Gi=n=>Array.isArray(n)?n.filter(Boolean):[],Ne=n=>n===void 0,B=(n,e,t)=>{if(!e||!xe(n))return t;const r=Gi(e.split(/[,[\].]+?/)).reduce((s,i)=>at(s)?s:s[i],n);return Ne(r)||r===n?Ne(n[e])?t:n[e]:r},Ct=n=>typeof n=="boolean",xa=n=>/^\w*$/.test(n),Oh=n=>Gi(n.replace(/["|']|\]/g,"").split(/\.|\[/)),Te=(n,e,t)=>{let r=-1;const s=xa(e)?[e]:Oh(e),i=s.length,a=i-1;for(;++r<i;){const c=s[r];let u=t;if(r!==a){const h=n[c];u=xe(h)||Array.isArray(h)?h:isNaN(+s[r+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;n[c]=u,n=n[c]}return n};const Ii={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},xt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},rn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Lh=V.createContext(null),Oa=()=>V.useContext(Lh),xA=n=>{const{children:e,...t}=n;return V.createElement(Lh.Provider,{value:t},e)};var Mh=(n,e,t,r=!0)=>{const s={defaultValues:e._defaultValues};for(const i in n)Object.defineProperty(s,i,{get:()=>{const a=i;return e._proxyFormState[a]!==xt.all&&(e._proxyFormState[a]=!r||xt.all),t&&(t[a]=!0),n[a]}});return s},dt=n=>xe(n)&&!Object.keys(n).length,Fh=(n,e,t,r)=>{t(n);const{name:s,...i}=n;return dt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(a=>e[a]===(!r||xt.all))},us=n=>Array.isArray(n)?n:[n],Uh=(n,e,t)=>!n||!e||n===e||us(n).some(r=>r&&(t?r===e:r.startsWith(e)||e.startsWith(r)));function La(n){const e=V.useRef(n);e.current=n,V.useEffect(()=>{const t=!n.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{t&&t.unsubscribe()}},[n.disabled])}function qm(n){const e=Oa(),{control:t=e.control,disabled:r,name:s,exact:i}=n||{},[a,c]=V.useState(t._formState),u=V.useRef(!0),h=V.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=V.useRef(s);return p.current=s,La({disabled:r,next:f=>u.current&&Uh(p.current,f.name,i)&&Fh(f,h.current,t._updateFormState)&&c({...t._formState,...f}),subject:t._subjects.state}),V.useEffect(()=>(u.current=!0,h.current.isValid&&t._updateValid(!0),()=>{u.current=!1}),[t]),V.useMemo(()=>Mh(a,t,h.current,!1),[a,t])}var Ht=n=>typeof n=="string",Bh=(n,e,t,r,s)=>Ht(n)?(r&&e.watch.add(n),B(t,n,s)):Array.isArray(n)?n.map(i=>(r&&e.watch.add(i),B(t,i))):(r&&(e.watchAll=!0),t);function Hm(n){const e=Oa(),{control:t=e.control,name:r,defaultValue:s,disabled:i,exact:a}=n||{},c=V.useRef(r);c.current=r,La({disabled:i,subject:t._subjects.values,next:p=>{Uh(c.current,p.name,a)&&h(ht(Bh(c.current,t._names,p.values||t._formValues,!1,s)))}});const[u,h]=V.useState(t._getWatch(r,s));return V.useEffect(()=>t._removeUnmounted()),u}function zm(n){const e=Oa(),{name:t,disabled:r,control:s=e.control,shouldUnregister:i}=n,a=xh(s._names.array,t),c=Hm({control:s,name:t,defaultValue:B(s._formValues,t,B(s._defaultValues,t,n.defaultValue)),exact:!0}),u=qm({control:s,name:t,exact:!0}),h=V.useRef(s.register(t,{...n.rules,value:c,...Ct(n.disabled)?{disabled:n.disabled}:{}})),p=V.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!B(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!B(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!B(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!B(u.validatingFields,t)},error:{enumerable:!0,get:()=>B(u.errors,t)}}),[u,t]),f=V.useMemo(()=>({name:t,value:c,...Ct(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:w=>h.current.onChange({target:{value:Vh(w),name:t},type:Ii.CHANGE}),onBlur:()=>h.current.onBlur({target:{value:B(s._formValues,t),name:t},type:Ii.BLUR}),ref:w=>{const S=B(s._fields,t);S&&w&&(S._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:D=>w.setCustomValidity(D),reportValidity:()=>w.reportValidity()})}}),[t,s._formValues,r,u.disabled,c,s._fields]);return V.useEffect(()=>{const w=s._options.shouldUnregister||i,S=(D,M)=>{const P=B(s._fields,D);P&&P._f&&(P._f.mount=M)};if(S(t,!0),w){const D=ht(B(s._options.defaultValues,t));Te(s._defaultValues,t,D),Ne(B(s._formValues,t))&&Te(s._formValues,t,D)}return!a&&s.register(t),()=>{(a?w&&!s._state.action:w)?s.unregister(t):S(t,!1)}},[t,s,a,i]),V.useEffect(()=>{s._updateDisabledField({disabled:r,fields:s._fields,name:t})},[r,t,s]),V.useMemo(()=>({field:f,formState:u,fieldState:p}),[f,u,p])}const OA=n=>n.render(zm(n));var Wm=(n,e,t,r,s)=>e?{...t[n],types:{...t[n]&&t[n].types?t[n].types:{},[r]:s||!0}}:{},Rl=n=>({isOnSubmit:!n||n===xt.onSubmit,isOnBlur:n===xt.onBlur,isOnChange:n===xt.onChange,isOnAll:n===xt.all,isOnTouch:n===xt.onTouched}),Sl=(n,e,t)=>!t&&(e.watchAll||e.watch.has(n)||[...e.watch].some(r=>n.startsWith(r)&&/^\.\w+/.test(n.slice(r.length))));const hs=(n,e,t,r)=>{for(const s of t||Object.keys(n)){const i=B(n,s);if(i){const{_f:a,...c}=i;if(a){if(a.refs&&a.refs[0]&&e(a.refs[0],s)&&!r)return!0;if(a.ref&&e(a.ref,a.name)&&!r)return!0;if(hs(c,e))break}else if(xe(c)&&hs(c,e))break}}};var Km=(n,e,t)=>{const r=us(B(n,t));return Te(r,"root",e[t]),Te(n,t,r),n},Ma=n=>n.type==="file",qt=n=>typeof n=="function",bi=n=>{if(!Va)return!1;const e=n?n.ownerDocument:0;return n instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},fi=n=>Ht(n),Fa=n=>n.type==="radio",Ai=n=>n instanceof RegExp;const Cl={value:!1,isValid:!1},Pl={value:!0,isValid:!0};var jh=n=>{if(Array.isArray(n)){if(n.length>1){const e=n.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!Ne(n[0].attributes.value)?Ne(n[0].value)||n[0].value===""?Pl:{value:n[0].value,isValid:!0}:Pl:Cl}return Cl};const kl={isValid:!1,value:null};var $h=n=>Array.isArray(n)?n.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,kl):kl;function Dl(n,e,t="validate"){if(fi(n)||Array.isArray(n)&&n.every(fi)||Ct(n)&&!n)return{type:t,message:fi(n)?n:"",ref:e}}var Sr=n=>xe(n)&&!Ai(n)?n:{value:n,message:""},Nl=async(n,e,t,r,s,i)=>{const{ref:a,refs:c,required:u,maxLength:h,minLength:p,min:f,max:w,pattern:S,validate:D,name:M,valueAsNumber:P,mount:q}=n._f,U=B(t,M);if(!q||e.has(M))return{};const H=c?c[0]:a,G=E=>{s&&H.reportValidity&&(H.setCustomValidity(Ct(E)?"":E||""),H.reportValidity())},Q={},ie=Fa(a),b=ks(a),_=ie||b,y=(P||Ma(a))&&Ne(a.value)&&Ne(U)||bi(a)&&a.value===""||U===""||Array.isArray(U)&&!U.length,T=Wm.bind(null,M,r,Q),I=(E,g,de,fe=rn.maxLength,J=rn.minLength)=>{const _e=E?g:de;Q[M]={type:E?fe:J,message:_e,ref:a,...T(E?fe:J,_e)}};if(i?!Array.isArray(U)||!U.length:u&&(!_&&(y||at(U))||Ct(U)&&!U||b&&!jh(c).isValid||ie&&!$h(c).isValid)){const{value:E,message:g}=fi(u)?{value:!!u,message:u}:Sr(u);if(E&&(Q[M]={type:rn.required,message:g,ref:H,...T(rn.required,g)},!r))return G(g),Q}if(!y&&(!at(f)||!at(w))){let E,g;const de=Sr(w),fe=Sr(f);if(!at(U)&&!isNaN(U)){const J=a.valueAsNumber||U&&+U;at(de.value)||(E=J>de.value),at(fe.value)||(g=J<fe.value)}else{const J=a.valueAsDate||new Date(U),_e=ct=>new Date(new Date().toDateString()+" "+ct),ke=a.type=="time",De=a.type=="week";Ht(de.value)&&U&&(E=ke?_e(U)>_e(de.value):De?U>de.value:J>new Date(de.value)),Ht(fe.value)&&U&&(g=ke?_e(U)<_e(fe.value):De?U<fe.value:J<new Date(fe.value))}if((E||g)&&(I(!!E,de.message,fe.message,rn.max,rn.min),!r))return G(Q[M].message),Q}if((h||p)&&!y&&(Ht(U)||i&&Array.isArray(U))){const E=Sr(h),g=Sr(p),de=!at(E.value)&&U.length>+E.value,fe=!at(g.value)&&U.length<+g.value;if((de||fe)&&(I(de,E.message,g.message),!r))return G(Q[M].message),Q}if(S&&!y&&Ht(U)){const{value:E,message:g}=Sr(S);if(Ai(E)&&!U.match(E)&&(Q[M]={type:rn.pattern,message:g,ref:a,...T(rn.pattern,g)},!r))return G(g),Q}if(D){if(qt(D)){const E=await D(U,t),g=Dl(E,H);if(g&&(Q[M]={...g,...T(rn.validate,g.message)},!r))return G(g.message),Q}else if(xe(D)){let E={};for(const g in D){if(!dt(E)&&!r)break;const de=Dl(await D[g](U,t),H,g);de&&(E={...de,...T(g,de.message)},G(de.message),r&&(Q[M]=E))}if(!dt(E)&&(Q[M]={ref:H,...E},!r))return Q}}return G(!0),Q};function Gm(n,e){const t=e.slice(0,-1).length;let r=0;for(;r<t;)n=Ne(n)?r++:n[e[r++]];return n}function Qm(n){for(const e in n)if(n.hasOwnProperty(e)&&!Ne(n[e]))return!1;return!0}function Fe(n,e){const t=Array.isArray(e)?e:xa(e)?[e]:Oh(e),r=t.length===1?n:Gm(n,t),s=t.length-1,i=t[s];return r&&delete r[i],s!==0&&(xe(r)&&dt(r)||Array.isArray(r)&&Qm(r))&&Fe(n,t.slice(0,-1)),n}var Lo=()=>{let n=[];return{get observers(){return n},next:s=>{for(const i of n)i.next&&i.next(s)},subscribe:s=>(n.push(s),{unsubscribe:()=>{n=n.filter(i=>i!==s)}}),unsubscribe:()=>{n=[]}}},na=n=>at(n)||!Nh(n);function Sn(n,e){if(na(n)||na(e))return n===e;if(rr(n)&&rr(e))return n.getTime()===e.getTime();const t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(const s of t){const i=n[s];if(!r.includes(s))return!1;if(s!=="ref"){const a=e[s];if(rr(i)&&rr(a)||xe(i)&&xe(a)||Array.isArray(i)&&Array.isArray(a)?!Sn(i,a):i!==a)return!1}}return!0}var qh=n=>n.type==="select-multiple",Ym=n=>Fa(n)||ks(n),Mo=n=>bi(n)&&n.isConnected,Hh=n=>{for(const e in n)if(qt(n[e]))return!0;return!1};function Ri(n,e={}){const t=Array.isArray(n);if(xe(n)||t)for(const r in n)Array.isArray(n[r])||xe(n[r])&&!Hh(n[r])?(e[r]=Array.isArray(n[r])?[]:{},Ri(n[r],e[r])):at(n[r])||(e[r]=!0);return e}function zh(n,e,t){const r=Array.isArray(n);if(xe(n)||r)for(const s in n)Array.isArray(n[s])||xe(n[s])&&!Hh(n[s])?Ne(e)||na(t[s])?t[s]=Array.isArray(n[s])?Ri(n[s],[]):{...Ri(n[s])}:zh(n[s],at(e)?{}:e[s],t[s]):t[s]=!Sn(n[s],e[s]);return t}var ns=(n,e)=>zh(n,e,Ri(e)),Wh=(n,{valueAsNumber:e,valueAsDate:t,setValueAs:r})=>Ne(n)?n:e?n===""?NaN:n&&+n:t&&Ht(n)?new Date(n):r?r(n):n;function Fo(n){const e=n.ref;return Ma(e)?e.files:Fa(e)?$h(n.refs).value:qh(e)?[...e.selectedOptions].map(({value:t})=>t):ks(e)?jh(n.refs).value:Wh(Ne(e.value)?n.ref.value:e.value,n)}var Xm=(n,e,t,r)=>{const s={};for(const i of n){const a=B(e,i);a&&Te(s,i,a._f)}return{criteriaMode:t,names:[...n],fields:s,shouldUseNativeValidation:r}},rs=n=>Ne(n)?n:Ai(n)?n.source:xe(n)?Ai(n.value)?n.value.source:n.value:n;const Vl="AsyncFunction";var Jm=n=>!!n&&!!n.validate&&!!(qt(n.validate)&&n.validate.constructor.name===Vl||xe(n.validate)&&Object.values(n.validate).find(e=>e.constructor.name===Vl)),Zm=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate);function xl(n,e,t){const r=B(n,t);if(r||xa(t))return{error:r,name:t};const s=t.split(".");for(;s.length;){const i=s.join("."),a=B(e,i),c=B(n,i);if(a&&!Array.isArray(a)&&t!==i)return{name:t};if(c&&c.type)return{name:i,error:c};s.pop()}return{name:t}}var eg=(n,e,t,r,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(e||n):(t?r.isOnBlur:s.isOnBlur)?!n:(t?r.isOnChange:s.isOnChange)?n:!0,tg=(n,e)=>!Gi(B(n,e)).length&&Fe(n,e);const ng={mode:xt.onSubmit,reValidateMode:xt.onChange,shouldFocusError:!0};function rg(n={}){let e={...ng,...n},t={submitCount:0,isDirty:!1,isLoading:qt(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},s=xe(e.defaultValues)||xe(e.values)?ht(e.defaultValues||e.values)||{}:{},i=e.shouldUnregister?{}:ht(s),a={action:!1,mount:!1,watch:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,h=0;const p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Lo(),array:Lo(),state:Lo()},w=Rl(e.mode),S=Rl(e.reValidateMode),D=e.criteriaMode===xt.all,M=v=>R=>{clearTimeout(h),h=setTimeout(v,R)},P=async v=>{if(!e.disabled&&(p.isValid||v)){const R=e.resolver?dt((await _()).errors):await T(r,!0);R!==t.isValid&&f.state.next({isValid:R})}},q=(v,R)=>{!e.disabled&&(p.isValidating||p.validatingFields)&&((v||Array.from(c.mount)).forEach(k=>{k&&(R?Te(t.validatingFields,k,R):Fe(t.validatingFields,k))}),f.state.next({validatingFields:t.validatingFields,isValidating:!dt(t.validatingFields)}))},U=(v,R=[],k,j,L=!0,O=!0)=>{if(j&&k&&!e.disabled){if(a.action=!0,O&&Array.isArray(B(r,v))){const z=k(B(r,v),j.argA,j.argB);L&&Te(r,v,z)}if(O&&Array.isArray(B(t.errors,v))){const z=k(B(t.errors,v),j.argA,j.argB);L&&Te(t.errors,v,z),tg(t.errors,v)}if(p.touchedFields&&O&&Array.isArray(B(t.touchedFields,v))){const z=k(B(t.touchedFields,v),j.argA,j.argB);L&&Te(t.touchedFields,v,z)}p.dirtyFields&&(t.dirtyFields=ns(s,i)),f.state.next({name:v,isDirty:E(v,R),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else Te(i,v,R)},H=(v,R)=>{Te(t.errors,v,R),f.state.next({errors:t.errors})},G=v=>{t.errors=v,f.state.next({errors:t.errors,isValid:!1})},Q=(v,R,k,j)=>{const L=B(r,v);if(L){const O=B(i,v,Ne(k)?B(s,v):k);Ne(O)||j&&j.defaultChecked||R?Te(i,v,R?O:Fo(L._f)):fe(v,O),a.mount&&P()}},ie=(v,R,k,j,L)=>{let O=!1,z=!1;const re={name:v};if(!e.disabled){const se=!!(B(r,v)&&B(r,v)._f&&B(r,v)._f.disabled);if(!k||j){p.isDirty&&(z=t.isDirty,t.isDirty=re.isDirty=E(),O=z!==re.isDirty);const oe=se||Sn(B(s,v),R);z=!!(!se&&B(t.dirtyFields,v)),oe||se?Fe(t.dirtyFields,v):Te(t.dirtyFields,v,!0),re.dirtyFields=t.dirtyFields,O=O||p.dirtyFields&&z!==!oe}if(k){const oe=B(t.touchedFields,v);oe||(Te(t.touchedFields,v,k),re.touchedFields=t.touchedFields,O=O||p.touchedFields&&oe!==k)}O&&L&&f.state.next(re)}return O?re:{}},b=(v,R,k,j)=>{const L=B(t.errors,v),O=p.isValid&&Ct(R)&&t.isValid!==R;if(e.delayError&&k?(u=M(()=>H(v,k)),u(e.delayError)):(clearTimeout(h),u=null,k?Te(t.errors,v,k):Fe(t.errors,v)),(k?!Sn(L,k):L)||!dt(j)||O){const z={...j,...O&&Ct(R)?{isValid:R}:{},errors:t.errors,name:v};t={...t,...z},f.state.next(z)}},_=async v=>{q(v,!0);const R=await e.resolver(i,e.context,Xm(v||c.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return q(v),R},y=async v=>{const{errors:R}=await _(v);if(v)for(const k of v){const j=B(R,k);j?Te(t.errors,k,j):Fe(t.errors,k)}else t.errors=R;return R},T=async(v,R,k={valid:!0})=>{for(const j in v){const L=v[j];if(L){const{_f:O,...z}=L;if(O){const re=c.array.has(O.name),se=L._f&&Jm(L._f);se&&p.validatingFields&&q([j],!0);const oe=await Nl(L,c.disabled,i,D,e.shouldUseNativeValidation&&!R,re);if(se&&p.validatingFields&&q([j]),oe[O.name]&&(k.valid=!1,R))break;!R&&(B(oe,O.name)?re?Km(t.errors,oe,O.name):Te(t.errors,O.name,oe[O.name]):Fe(t.errors,O.name))}!dt(z)&&await T(z,R,k)}}return k.valid},I=()=>{for(const v of c.unMount){const R=B(r,v);R&&(R._f.refs?R._f.refs.every(k=>!Mo(k)):!Mo(R._f.ref))&&ye(v)}c.unMount=new Set},E=(v,R)=>!e.disabled&&(v&&R&&Te(i,v,R),!Sn(me(),s)),g=(v,R,k)=>Bh(v,c,{...a.mount?i:Ne(R)?s:Ht(v)?{[v]:R}:R},k,R),de=v=>Gi(B(a.mount?i:s,v,e.shouldUnregister?B(s,v,[]):[])),fe=(v,R,k={})=>{const j=B(r,v);let L=R;if(j){const O=j._f;O&&(!O.disabled&&Te(i,v,Wh(R,O)),L=bi(O.ref)&&at(R)?"":R,qh(O.ref)?[...O.ref.options].forEach(z=>z.selected=L.includes(z.value)):O.refs?ks(O.ref)?O.refs.length>1?O.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(L)?!!L.find(re=>re===z.value):L===z.value)):O.refs[0]&&(O.refs[0].checked=!!L):O.refs.forEach(z=>z.checked=z.value===L):Ma(O.ref)?O.ref.value="":(O.ref.value=L,O.ref.type||f.values.next({name:v,values:{...i}})))}(k.shouldDirty||k.shouldTouch)&&ie(v,L,k.shouldTouch,k.shouldDirty,!0),k.shouldValidate&&ct(v)},J=(v,R,k)=>{for(const j in R){const L=R[j],O=`${v}.${j}`,z=B(r,O);(c.array.has(v)||xe(L)||z&&!z._f)&&!rr(L)?J(O,L,k):fe(O,L,k)}},_e=(v,R,k={})=>{const j=B(r,v),L=c.array.has(v),O=ht(R);Te(i,v,O),L?(f.array.next({name:v,values:{...i}}),(p.isDirty||p.dirtyFields)&&k.shouldDirty&&f.state.next({name:v,dirtyFields:ns(s,i),isDirty:E(v,O)})):j&&!j._f&&!at(O)?J(v,O,k):fe(v,O,k),Sl(v,c)&&f.state.next({...t}),f.values.next({name:a.mount?v:void 0,values:{...i}})},ke=async v=>{a.mount=!0;const R=v.target;let k=R.name,j=!0;const L=B(r,k),O=()=>R.type?Fo(L._f):Vh(v),z=re=>{j=Number.isNaN(re)||rr(re)&&isNaN(re.getTime())||Sn(re,B(i,k,re))};if(L){let re,se;const oe=O(),Xe=v.type===Ii.BLUR||v.type===Ii.FOCUS_OUT,vn=!Zm(L._f)&&!e.resolver&&!B(t.errors,k)&&!L._f.deps||eg(Xe,B(t.touchedFields,k),t.isSubmitted,S,w),Et=Sl(k,c,Xe);Te(i,k,oe),Xe?(L._f.onBlur&&L._f.onBlur(v),u&&u(0)):L._f.onChange&&L._f.onChange(v);const Tn=ie(k,oe,Xe,!1),lt=!dt(Tn)||Et;if(!Xe&&f.values.next({name:k,type:v.type,values:{...i}}),vn)return p.isValid&&(e.mode==="onBlur"&&Xe?P():Xe||P()),lt&&f.state.next({name:k,...Et?{}:Tn});if(!Xe&&Et&&f.state.next({...t}),e.resolver){const{errors:Yn}=await _([k]);if(z(oe),j){const Er=xl(t.errors,r,k),Zt=xl(Yn,r,Er.name||k);re=Zt.error,k=Zt.name,se=dt(Yn)}}else q([k],!0),re=(await Nl(L,c.disabled,i,D,e.shouldUseNativeValidation))[k],q([k]),z(oe),j&&(re?se=!1:p.isValid&&(se=await T(r,!0)));j&&(L._f.deps&&ct(L._f.deps),b(k,se,re,Tn))}},De=(v,R)=>{if(B(t.errors,R)&&v.focus)return v.focus(),1},ct=async(v,R={})=>{let k,j;const L=us(v);if(e.resolver){const O=await y(Ne(v)?v:L);k=dt(O),j=v?!L.some(z=>B(O,z)):k}else v?(j=(await Promise.all(L.map(async O=>{const z=B(r,O);return await T(z&&z._f?{[O]:z}:z)}))).every(Boolean),!(!j&&!t.isValid)&&P()):j=k=await T(r);return f.state.next({...!Ht(v)||p.isValid&&k!==t.isValid?{}:{name:v},...e.resolver||!v?{isValid:k}:{},errors:t.errors}),R.shouldFocus&&!j&&hs(r,De,v?L:c.mount),j},me=v=>{const R={...a.mount?i:s};return Ne(v)?R:Ht(v)?B(R,v):v.map(k=>B(R,k))},ue=(v,R)=>({invalid:!!B((R||t).errors,v),isDirty:!!B((R||t).dirtyFields,v),error:B((R||t).errors,v),isValidating:!!B(t.validatingFields,v),isTouched:!!B((R||t).touchedFields,v)}),ne=v=>{v&&us(v).forEach(R=>Fe(t.errors,R)),f.state.next({errors:v?t.errors:{}})},ze=(v,R,k)=>{const j=(B(r,v,{_f:{}})._f||{}).ref,L=B(t.errors,v)||{},{ref:O,message:z,type:re,...se}=L;Te(t.errors,v,{...se,...R,ref:j}),f.state.next({name:v,errors:t.errors,isValid:!1}),k&&k.shouldFocus&&j&&j.focus&&j.focus()},st=(v,R)=>qt(v)?f.values.subscribe({next:k=>v(g(void 0,R),k)}):g(v,R,!0),ye=(v,R={})=>{for(const k of v?us(v):c.mount)c.mount.delete(k),c.array.delete(k),R.keepValue||(Fe(r,k),Fe(i,k)),!R.keepError&&Fe(t.errors,k),!R.keepDirty&&Fe(t.dirtyFields,k),!R.keepTouched&&Fe(t.touchedFields,k),!R.keepIsValidating&&Fe(t.validatingFields,k),!e.shouldUnregister&&!R.keepDefaultValue&&Fe(s,k);f.values.next({values:{...i}}),f.state.next({...t,...R.keepDirty?{isDirty:E()}:{}}),!R.keepIsValid&&P()},Tt=({disabled:v,name:R,field:k,fields:j})=>{(Ct(v)&&a.mount||v||c.disabled.has(R))&&(v?c.disabled.add(R):c.disabled.delete(R),ie(R,Fo(k?k._f:B(j,R)._f),!1,!1,!0))},Rt=(v,R={})=>{let k=B(r,v);const j=Ct(R.disabled)||Ct(e.disabled);return Te(r,v,{...k||{},_f:{...k&&k._f?k._f:{ref:{name:v}},name:v,mount:!0,...R}}),c.mount.add(v),k?Tt({field:k,disabled:Ct(R.disabled)?R.disabled:e.disabled,name:v}):Q(v,!0,R.value),{...j?{disabled:R.disabled||e.disabled}:{},...e.progressive?{required:!!R.required,min:rs(R.min),max:rs(R.max),minLength:rs(R.minLength),maxLength:rs(R.maxLength),pattern:rs(R.pattern)}:{},name:v,onChange:ke,onBlur:ke,ref:L=>{if(L){Rt(v,R),k=B(r,v);const O=Ne(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,z=Ym(O),re=k._f.refs||[];if(z?re.find(se=>se===O):O===k._f.ref)return;Te(r,v,{_f:{...k._f,...z?{refs:[...re.filter(Mo),O,...Array.isArray(B(s,v))?[{}]:[]],ref:{type:O.type,name:v}}:{ref:O}}}),Q(v,!1,void 0,O)}else k=B(r,v,{}),k._f&&(k._f.mount=!1),(e.shouldUnregister||R.shouldUnregister)&&!(xh(c.array,v)&&a.action)&&c.unMount.add(v)}}},Ut=()=>e.shouldFocusError&&hs(r,De,c.mount),St=v=>{Ct(v)&&(f.state.next({disabled:v}),hs(r,(R,k)=>{const j=B(r,k);j&&(R.disabled=j._f.disabled||v,Array.isArray(j._f.refs)&&j._f.refs.forEach(L=>{L.disabled=j._f.disabled||v}))},0,!1))},Jt=(v,R)=>async k=>{let j;k&&(k.preventDefault&&k.preventDefault(),k.persist&&k.persist());let L=ht(i);if(c.disabled.size)for(const O of c.disabled)Te(L,O,void 0);if(f.state.next({isSubmitting:!0}),e.resolver){const{errors:O,values:z}=await _();t.errors=O,L=z}else await T(r);if(Fe(t.errors,"root"),dt(t.errors)){f.state.next({errors:{}});try{await v(L,k)}catch(O){j=O}}else R&&await R({...t.errors},k),Ut(),setTimeout(Ut);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dt(t.errors)&&!j,submitCount:t.submitCount+1,errors:t.errors}),j)throw j},gn=(v,R={})=>{B(r,v)&&(Ne(R.defaultValue)?_e(v,ht(B(s,v))):(_e(v,R.defaultValue),Te(s,v,ht(R.defaultValue))),R.keepTouched||Fe(t.touchedFields,v),R.keepDirty||(Fe(t.dirtyFields,v),t.isDirty=R.defaultValue?E(v,ht(B(s,v))):E()),R.keepError||(Fe(t.errors,v),p.isValid&&P()),f.state.next({...t}))},_n=(v,R={})=>{const k=v?ht(v):s,j=ht(k),L=dt(v),O=L?s:j;if(R.keepDefaultValues||(s=k),!R.keepValues){if(R.keepDirtyValues){const z=new Set([...c.mount,...Object.keys(ns(s,i))]);for(const re of Array.from(z))B(t.dirtyFields,re)?Te(O,re,B(i,re)):_e(re,B(O,re))}else{if(Va&&Ne(v))for(const z of c.mount){const re=B(r,z);if(re&&re._f){const se=Array.isArray(re._f.refs)?re._f.refs[0]:re._f.ref;if(bi(se)){const oe=se.closest("form");if(oe){oe.reset();break}}}}r={}}i=e.shouldUnregister?R.keepDefaultValues?ht(s):{}:ht(O),f.array.next({values:{...O}}),f.values.next({values:{...O}})}c={mount:R.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!p.isValid||!!R.keepIsValid||!!R.keepDirtyValues,a.watch=!!e.shouldUnregister,f.state.next({submitCount:R.keepSubmitCount?t.submitCount:0,isDirty:L?!1:R.keepDirty?t.isDirty:!!(R.keepDefaultValues&&!Sn(v,s)),isSubmitted:R.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:L?{}:R.keepDirtyValues?R.keepDefaultValues&&i?ns(s,i):t.dirtyFields:R.keepDefaultValues&&v?ns(s,v):R.keepDirty?t.dirtyFields:{},touchedFields:R.keepTouched?t.touchedFields:{},errors:R.keepErrors?t.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Bt=(v,R)=>_n(qt(v)?v(i):v,R);return{control:{register:Rt,unregister:ye,getFieldState:ue,handleSubmit:Jt,setError:ze,_executeSchema:_,_getWatch:g,_getDirty:E,_updateValid:P,_removeUnmounted:I,_updateFieldArray:U,_updateDisabledField:Tt,_getFieldArray:de,_reset:_n,_resetDefaultValues:()=>qt(e.defaultValues)&&e.defaultValues().then(v=>{Bt(v,e.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:v=>{t={...t,...v}},_disableForm:St,_subjects:f,_proxyFormState:p,_setErrors:G,get _fields(){return r},get _formValues(){return i},get _state(){return a},set _state(v){a=v},get _defaultValues(){return s},get _names(){return c},set _names(v){c=v},get _formState(){return t},set _formState(v){t=v},get _options(){return e},set _options(v){e={...e,...v}}},trigger:ct,register:Rt,handleSubmit:Jt,watch:st,setValue:_e,getValues:me,reset:Bt,resetField:gn,clearErrors:ne,unregister:ye,setError:ze,setFocus:(v,R={})=>{const k=B(r,v),j=k&&k._f;if(j){const L=j.refs?j.refs[0]:j.ref;L.focus&&(L.focus(),R.shouldSelect&&qt(L.select)&&L.select())}},getFieldState:ue}}function LA(n={}){const e=V.useRef(void 0),t=V.useRef(void 0),[r,s]=V.useState({isDirty:!1,isValidating:!1,isLoading:qt(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,defaultValues:qt(n.defaultValues)?void 0:n.defaultValues});e.current||(e.current={...rg(n),formState:r});const i=e.current.control;return i._options=n,La({subject:i._subjects.state,next:a=>{Fh(a,i._proxyFormState,i._updateFormState,!0)&&s({...i._formState})}}),V.useEffect(()=>i._disableForm(n.disabled),[i,n.disabled]),V.useEffect(()=>{if(i._proxyFormState.isDirty){const a=i._getDirty();a!==r.isDirty&&i._subjects.state.next({isDirty:a})}},[i,r.isDirty]),V.useEffect(()=>{n.values&&!Sn(n.values,t.current)?(i._reset(n.values,i._options.resetOptions),t.current=n.values,s(a=>({...a}))):i._resetDefaultValues()},[n.values,i]),V.useEffect(()=>{n.errors&&i._setErrors(n.errors)},[n.errors,i]),V.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),V.useEffect(()=>{n.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})},[n.shouldUnregister,i]),e.current.formState=Mh(r,i),e.current}var sg="Label",Kh=Ot.forwardRef((n,e)=>$e.jsx(Ps.label,{...n,ref:e,onMouseDown:t=>{var s;t.target.closest("button, input, select, textarea")||((s=n.onMouseDown)==null||s.call(n,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Kh.displayName=sg;var ig=Kh;function MA({className:n,...e}){return $e.jsx(ig,{"data-slot":"label",className:Xt("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...e})}/**
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
 */const og=()=>{};var Ol={};/**
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
 */const Gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ag=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,p=i>>2,f=(i&3)<<4|c>>4;let w=(c&15)<<2|h>>6,S=h&63;u||(S=64,a||(w=64)),r.push(t[p],t[f],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ag(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||f==null)throw new cg;const w=i<<2|c>>4;if(r.push(w),h!==64){const S=c<<4&240|h>>2;if(r.push(S),f!==64){const D=h<<6&192|f;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lg=function(n){const e=Gh(n);return Qh.encodeByteArray(e,!0)},Si=function(n){return lg(n).replace(/\./g,"")},Yh=function(n){try{return Qh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ug(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hg=()=>ug().__FIREBASE_DEFAULTS__,dg=()=>{if(typeof process>"u"||typeof Ol>"u")return;const n=Ol.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yh(n[1]);return e&&JSON.parse(e)},Qi=()=>{try{return og()||hg()||dg()||fg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xh=n=>{var e,t;return(t=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jh=n=>{const e=Xh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zh=()=>{var n;return(n=Qi())===null||n===void 0?void 0:n.config},ed=n=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function td(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Si(JSON.stringify(t)),Si(JSON.stringify(a)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function gg(){var n;const e=(n=Qi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const n=rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Tg(){return!gg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function sd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Eg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wg="FirebaseError";class Dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wg,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Ig(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Dt(s,c,r)}}function Ig(n,e){return n.replace(bg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bg=/\{\$([^}]+)}/g;function Ag(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Un(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ll(i)&&Ll(a)){if(!Un(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ll(n){return n!==null&&typeof n=="object"}/**
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
 */function Ds(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Rg(n,e){const t=new Sg(n,e);return t.subscribe.bind(t)}class Sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Uo),s.error===void 0&&(s.error=Uo),s.complete===void 0&&(s.complete=Uo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uo(){}/**
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
 */const Pg=1e3,kg=2,Dg=4*60*60*1e3,Ng=.5;function Ml(n,e=Pg,t=kg){const r=e*Math.pow(t,n),s=Math.round(Ng*r*(Math.random()-.5)*2);return Math.min(Dg,r+s)}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class Pt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class Vg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new pg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Og(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xg(n){return n===nr?void 0:n}function Og(n){return n.instantiationMode==="EAGER"}/**
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
 */class Lg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Mg={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Fg=ae.INFO,Ug={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Bg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ug[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const jg=(n,e)=>e.some(t=>n instanceof t);let Fl,Ul;function $g(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qg(){return Ul||(Ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const id=new WeakMap,ra=new WeakMap,od=new WeakMap,Bo=new WeakMap,Ua=new WeakMap;function Hg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(xn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&id.set(t,n)}).catch(()=>{}),Ua.set(e,n),e}function zg(n){if(ra.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ra.set(n,e)}let sa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ra.get(n);if(e==="objectStoreNames")return n.objectStoreNames||od.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wg(n){sa=n(sa)}function Kg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(jo(this),e,...t);return od.set(r,e.sort?e.sort():[e]),xn(r)}:qg().includes(n)?function(...e){return n.apply(jo(this),e),xn(id.get(this))}:function(...e){return xn(n.apply(jo(this),e))}}function Gg(n){return typeof n=="function"?Kg(n):(n instanceof IDBTransaction&&zg(n),jg(n,$g())?new Proxy(n,sa):n)}function xn(n){if(n instanceof IDBRequest)return Hg(n);if(Bo.has(n))return Bo.get(n);const e=Gg(n);return e!==n&&(Bo.set(n,e),Ua.set(e,n)),e}const jo=n=>Ua.get(n);function ad(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=xn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(xn(a.result),u.oldVersion,u.newVersion,xn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Qg=["get","getKey","getAll","getAllKeys","count"],Yg=["put","add","delete","clear"],$o=new Map;function Bl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return $o.set(e,i),i}Wg(n=>({...n,get:(e,t,r)=>Bl(e,t)||n.get(e,t,r),has:(e,t)=>!!Bl(e,t)||n.has(e,t)}));/**
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
 */class Xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",jl="0.11.2";/**
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
 */const ln=new Yi("@firebase/app"),Zg="@firebase/app-compat",e_="@firebase/analytics-compat",t_="@firebase/analytics",n_="@firebase/app-check-compat",r_="@firebase/app-check",s_="@firebase/auth",i_="@firebase/auth-compat",o_="@firebase/database",a_="@firebase/data-connect",c_="@firebase/database-compat",l_="@firebase/functions",u_="@firebase/functions-compat",h_="@firebase/installations",d_="@firebase/installations-compat",f_="@firebase/messaging",p_="@firebase/messaging-compat",m_="@firebase/performance",g_="@firebase/performance-compat",__="@firebase/remote-config",y_="@firebase/remote-config-compat",v_="@firebase/storage",T_="@firebase/storage-compat",E_="@firebase/firestore",w_="@firebase/vertexai",I_="@firebase/firestore-compat",b_="firebase",A_="11.4.0";/**
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
 */const oa="[DEFAULT]",R_={[ia]:"fire-core",[Zg]:"fire-core-compat",[t_]:"fire-analytics",[e_]:"fire-analytics-compat",[r_]:"fire-app-check",[n_]:"fire-app-check-compat",[s_]:"fire-auth",[i_]:"fire-auth-compat",[o_]:"fire-rtdb",[a_]:"fire-data-connect",[c_]:"fire-rtdb-compat",[l_]:"fire-fn",[u_]:"fire-fn-compat",[h_]:"fire-iid",[d_]:"fire-iid-compat",[f_]:"fire-fcm",[p_]:"fire-fcm-compat",[m_]:"fire-perf",[g_]:"fire-perf-compat",[__]:"fire-rc",[y_]:"fire-rc-compat",[v_]:"fire-gcs",[T_]:"fire-gcs-compat",[E_]:"fire-fst",[I_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[b_]:"fire-js-all"};/**
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
 */const Ci=new Map,S_=new Map,aa=new Map;function $l(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(aa.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,n);for(const t of Ci.values())$l(t,n);for(const t of S_.values())$l(t,n);return!0}function Kn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const C_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new mr("app","Firebase",C_);/**
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
 */class P_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=A_;function cd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(t||(t=Zh()),!t)throw On.create("no-options");const i=Ci.get(s);if(i){if(Un(t,i.options)&&Un(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const a=new Lg(s);for(const u of aa.values())a.addComponent(u);const c=new P_(t,r,a);return Ci.set(s,c),c}function Xi(n=oa){const e=Ci.get(n);if(!e&&n===oa&&Zh())return cd();if(!e)throw On.create("no-app",{appName:n});return e}function _t(n,e,t){var r;let s=(r=R_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(c.join(" "));return}Ft(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const k_="firebase-heartbeat-database",D_=1,vs="firebase-heartbeat-store";let qo=null;function ld(){return qo||(qo=ad(k_,D_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw On.create("idb-open",{originalErrorMessage:n.message})})),qo}async function N_(n){try{const t=(await ld()).transaction(vs),r=await t.objectStore(vs).get(ud(n));return await t.done,r}catch(e){if(e instanceof Dt)ln.warn(e.message);else{const t=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(t.message)}}}async function ql(n,e){try{const r=(await ld()).transaction(vs,"readwrite");await r.objectStore(vs).put(e,ud(n)),await r.done}catch(t){if(t instanceof Dt)ln.warn(t.message);else{const r=On.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ln.warn(r.message)}}}function ud(n){return`${n.name}!${n.options.appId}`}/**
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
 */const V_=1024,x_=30;class O_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new M_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>x_){const a=F_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hl(),{heartbeatsToSend:r,unsentEntries:s}=L_(this._heartbeatsCache.heartbeats),i=Si(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ln.warn(t),""}}}function Hl(){return new Date().toISOString().substring(0,10)}function L_(n,e=V_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class M_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?sd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await N_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(n){return Si(JSON.stringify({version:2,heartbeats:n})).length}function F_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function U_(n){Ft(new Pt("platform-logger",e=>new Xg(e),"PRIVATE")),Ft(new Pt("heartbeat",e=>new O_(e),"PRIVATE")),_t(ia,jl,n),_t(ia,jl,"esm2017"),_t("fire-js","")}U_("");var B_="firebase",j_="11.4.0";/**
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
 */_t(B_,j_,"app");function hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $_=hd,dd=new mr("auth","Firebase",hd());/**
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
 */const Pi=new Yi("@firebase/auth");function q_(n,...e){Pi.logLevel<=ae.WARN&&Pi.warn(`Auth (${gr}): ${n}`,...e)}function pi(n,...e){Pi.logLevel<=ae.ERROR&&Pi.error(`Auth (${gr}): ${n}`,...e)}/**
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
 */function kt(n,...e){throw ja(n,...e)}function Lt(n,...e){return ja(n,...e)}function Ba(n,e,t){const r=Object.assign(Object.assign({},$_()),{[e]:t});return new mr("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return Ba(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(n,"argument-error"),Ba(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ja(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return dd.create(n,...e)}function Y(n,e,...t){if(!n)throw ja(e,...t)}function sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pi(e),new Error(e)}function un(n,e){n||sn(e)}/**
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
 */function ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function z_(){return Wl()==="http:"||Wl()==="https:"}function Wl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function W_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z_()||nd()||"connection"in navigator)?navigator.onLine:!0}function K_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=mg()||yg()}get(){return W_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $a(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const G_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q_=new Ns(3e4,6e4);function fn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pn(n,e,t,r,s={}){return pd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ds(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return _g()||(h.referrerPolicy="no-referrer"),fd.fetch()(md(n,n.config.apiHost,t,c),h)})}async function pd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},G_),e);try{const s=new X_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw si(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw si(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw si(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ba(n,p,h);kt(n,p)}}catch(s){if(s instanceof Dt)throw s;kt(n,"network-request-failed",{message:String(s)})}}async function Vs(n,e,t,r,s={}){const i=await pn(n,e,t,r,s);return"mfaPendingCredential"in i&&kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function md(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?$a(n.config,s):`${n.config.apiScheme}://${s}`}function Y_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Q_.get())})}}function si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Lt(n,e,r);return s.customData._tokenResponse=t,s}function Kl(n){return n!==void 0&&n.enterprise!==void 0}class J_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Z_(n,e){return pn(n,"GET","/v2/recaptchaConfig",fn(n,e))}/**
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
 */async function ey(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function gd(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ds(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ty(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=qa(r);Y(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ds(Ho(s.auth_time)),issuedAtTime:ds(Ho(s.iat)),expirationTime:ds(Ho(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ho(n){return Number(n)*1e3}function qa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return pi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yh(t);return s?JSON.parse(s):(pi("Failed to decode base64 JWT payload"),null)}catch(s){return pi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gl(n){const e=qa(n);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dt&&ny(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ny({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class la{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ki(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ts(n,gd(t,{idToken:r}));Y(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_d(i.providerUserInfo):[],c=iy(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?h:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new la(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,f)}async function sy(n){const e=Ae(n);await ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _d(n){return n.map(e=>{var{providerId:t}=e,r=ka(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function oy(n,e){const t=await pd(n,{},async()=>{const r=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=md(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",fd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ay(n,e){return pn(n,"POST","/v2/accounts:revokeToken",fn(n,e))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const t=Gl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Nr;return r&&(Y(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function Rn(n,e){Y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ka(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new la(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ty(this,e)}reload(){return sy(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ki(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Ts(this,ey(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,h,p;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:G,isAnonymous:Q,providerData:ie,stsTokenManager:b}=t;Y(H&&b,e,"internal-error");const _=Nr.fromJSON(this.name,b);Y(typeof H=="string",e,"internal-error"),Rn(f,e.name),Rn(w,e.name),Y(typeof G=="boolean",e,"internal-error"),Y(typeof Q=="boolean",e,"internal-error"),Rn(S,e.name),Rn(D,e.name),Rn(M,e.name),Rn(P,e.name),Rn(q,e.name),Rn(U,e.name);const y=new on({uid:H,auth:e,email:w,emailVerified:G,displayName:f,isAnonymous:Q,photoURL:D,phoneNumber:S,tenantId:M,stsTokenManager:_,createdAt:q,lastLoginAt:U});return ie&&Array.isArray(ie)&&(y.providerData=ie.map(T=>Object.assign({},T))),P&&(y._redirectEventId=P),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Nr;s.updateFromServerResponse(t);const i=new on({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ki(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_d(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Nr;c.updateFromIdToken(r);const u=new on({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new la(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Ql=new Map;function an(n){un(n instanceof Function,"Expected a class definition");let e=Ql.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ql.set(n,e),e)}/**
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
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yd.type="NONE";const Yl=yd;/**
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
 */function mi(n,e,t){return`firebase:${n}:${e}:${t}`}class Vr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mi(this.userKey,s.apiKey,i),this.fullPersistenceKey=mi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vr(an(Yl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||an(Yl);const a=mi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){const f=on._fromJSON(e,p);h!==i&&(c=f),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Vr(i,e,r))}}/**
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
 */function Xl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Ad(e))return"Webos";if(Td(e))return"Safari";if((e.includes("chrome/")||Ed(e))&&!e.includes("edge/"))return"Chrome";if(Id(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vd(n=rt()){return/firefox\//i.test(n)}function Td(n=rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ed(n=rt()){return/crios\//i.test(n)}function wd(n=rt()){return/iemobile/i.test(n)}function Id(n=rt()){return/android/i.test(n)}function bd(n=rt()){return/blackberry/i.test(n)}function Ad(n=rt()){return/webos/i.test(n)}function Ha(n=rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cy(n=rt()){var e;return Ha(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ly(){return vg()&&document.documentMode===10}function Rd(n=rt()){return Ha(n)||Id(n)||Ad(n)||bd(n)||/windows phone/i.test(n)||wd(n)}/**
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
 */function Sd(n,e=[]){let t;switch(n){case"Browser":t=Xl(rt());break;case"Worker":t=`${Xl(rt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gr}/${r}`}/**
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
 */class uy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hy(n,e={}){return pn(n,"GET","/v2/passwordPolicy",fn(n,e))}/**
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
 */const dy=6;class fy{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:dy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class py{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jl(this),this.idTokenSubscription=new Jl(this),this.beforeStateQueue=new uy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gd(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(cn(this));const t=e?Ae(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hy(this),t=new fy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ay(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&an(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&q_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mn(n){return Ae(n)}class Jl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rg(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function my(n){Ji=n}function Cd(n){return Ji.loadJS(n)}function gy(){return Ji.recaptchaEnterpriseScript}function _y(){return Ji.gapiScript}function yy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class vy{constructor(){this.enterprise=new Ty}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ty{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ey="recaptcha-enterprise",Pd="NO_RECAPTCHA";class wy{constructor(e){this.type=Ey,this.auth=mn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Z_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new J_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Kl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Pd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Kl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gy();u.length!==0&&(u+=c),Cd(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Zl(n,e,t,r=!1,s=!1){const i=new wy(n);let a;if(s)a=Pd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Di(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Zl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Iy(n,e){const t=Kn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Un(i,e??{}))return s;kt(s,"already-initialized")}return t.initialize({options:e})}function by(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(an);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ay(n,e,t){const r=mn(n);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=kd(e),{host:a,port:c}=Ry(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Un(h,r.config.emulator)&&Un(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Sy()}function kd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ry(n){const e=kd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:eu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:eu(a)}}}function eu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class za{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,t){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function Cy(n,e){return pn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Py(n,e){return Vs(n,"POST","/v1/accounts:signInWithPassword",fn(n,e))}async function ky(n,e){return pn(n,"POST","/v1/accounts:sendOobCode",fn(n,e))}async function Dy(n,e){return ky(n,e)}/**
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
 */async function Ny(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}async function Vy(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}/**
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
 */class Es extends za{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Es(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Es(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Di(e,t,"signInWithPassword",Py);case"emailLink":return Ny(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Di(e,r,"signUpPassword",Cy);case"emailLink":return Vy(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xr(n,e){return Vs(n,"POST","/v1/accounts:signInWithIdp",fn(n,e))}/**
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
 */const xy="http://localhost";class cr extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ka(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new cr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xr(e,t)}buildRequest(){const e={requestUri:xy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ds(t)}return e}}/**
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
 */function Oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(n){const e=is(os(n)).link,t=e?is(os(e)).deep_link_id:null,r=is(os(n)).deep_link_id;return(r?is(os(r)).link:null)||r||t||e||n}class Wa{constructor(e){var t,r,s,i,a,c;const u=is(os(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Oy((s=u.mode)!==null&&s!==void 0?s:null);Y(h&&p&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ly(e);try{return new Wa(t)}catch{return null}}}/**
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
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,t){return Es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wa.parseLink(t);return Y(r,"argument-error"),Es._fromEmailAndCode(e,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xs extends Ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends xs{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pn.credential(t,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class kn extends xs{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Dn extends xs{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dn.credential(t,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function My(n,e){return Vs(n,"POST","/v1/accounts:signUp",fn(n,e))}/**
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
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),a=tu(r);return new lr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tu(r);return new lr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ni extends Dt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ni(e,t,r,s)}}function Dd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(n,i,e,r):i})}async function Fy(n,e,t=!1){const r=await Ts(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lr._forOperation(n,"link",r)}/**
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
 */async function Uy(n,e,t=!1){const{auth:r}=n;if(mt(r.app))return Promise.reject(cn(r));const s="reauthenticate";try{const i=await Ts(n,Dd(r,s,e,n),t);Y(i.idToken,r,"internal-error");const a=qa(i.idToken);Y(a,r,"internal-error");const{sub:c}=a;return Y(n.uid===c,r,"user-mismatch"),lr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
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
 */async function Nd(n,e,t=!1){if(mt(n.app))return Promise.reject(cn(n));const r="signIn",s=await Dd(n,r,e),i=await lr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function By(n,e){return Nd(mn(n),e)}/**
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
 */async function Vd(n){const e=mn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FA(n,e,t){const r=mn(n);await Di(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Dy)}async function UA(n,e,t){if(mt(n.app))return Promise.reject(cn(n));const r=mn(n),a=await Di(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",My).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Vd(n),u}),c=await lr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function BA(n,e,t){return mt(n.app)?Promise.reject(cn(n)):By(Ae(n),qr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vd(n),r})}function jy(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function $y(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function jA(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function $A(n){return Ae(n).signOut()}const Vi="__sak";/**
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
 */class xd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qy=1e3,Hy=10;class Od extends xd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ly()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hy):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Od.type="LOCAL";const zy=Od;/**
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
 */class Ld extends xd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ld.type="SESSION";const Md=Ld;/**
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
 */function Wy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await Wy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zi.receivers=[];/**
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
 */function Ga(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Ga("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const w=f;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Wt(){return window}function Gy(n){Wt().location.href=n}/**
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
 */function Fd(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Qy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xy(){return Fd()?self:null}/**
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
 */const Ud="firebaseLocalStorageDb",Jy=1,xi="firebaseLocalStorage",Bd="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function eo(n,e){return n.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function Zy(){const n=indexedDB.deleteDatabase(Ud);return new Os(n).toPromise()}function ua(){const n=indexedDB.open(Ud,Jy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(xi,{keyPath:Bd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(xi)?e(r):(r.close(),await Zy(),e(await ua()))})})}async function nu(n,e,t){const r=eo(n,!0).put({[Bd]:e,value:t});return new Os(r).toPromise()}async function ev(n,e){const t=eo(n,!1).get(e),r=await new Os(t).toPromise();return r===void 0?null:r.value}function ru(n,e){const t=eo(n,!0).delete(e);return new Os(t).toPromise()}const tv=800,nv=3;class jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(Xy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qy(),!this.activeServiceWorker)return;this.sender=new Ky(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await nu(e,Vi,"1"),await ru(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ev(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ru(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=eo(s,!1).getAll();return new Os(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jd.type="LOCAL";const rv=jd;new Ns(3e4,6e4);/**
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
 */function $d(n,e){return e?an(e):(Y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Qa extends za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sv(n){return Nd(n.auth,new Qa(n),n.bypassAuthState)}function iv(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Uy(t,new Qa(n),n.bypassAuthState)}async function ov(n){const{auth:e,user:t}=n;return Y(t,e,"internal-error"),Fy(t,new Qa(n),n.bypassAuthState)}/**
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
 */class qd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sv;case"linkViaPopup":case"linkViaRedirect":return ov;case"reauthViaPopup":case"reauthViaRedirect":return iv;default:kt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const av=new Ns(2e3,1e4);async function qA(n,e,t){if(mt(n.app))return Promise.reject(Lt(n,"operation-not-supported-in-this-environment"));const r=mn(n);H_(n,e,Ka);const s=$d(r,t);return new sr(r,"signInViaPopup",e,s).executeNotNull()}class sr extends qd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,av.get())};e()}}sr.currentPopupAction=null;/**
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
 */const cv="pendingRedirect",gi=new Map;class lv extends qd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=gi.get(this.auth._key());if(!e){try{const r=await uv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}gi.set(this.auth._key(),e)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uv(n,e){const t=fv(e),r=dv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function hv(n,e){gi.set(n._key(),e)}function dv(n){return an(n._redirectPersistence)}function fv(n){return mi(cv,n.config.apiKey,n.name)}async function pv(n,e,t=!1){if(mt(n.app))return Promise.reject(cn(n));const r=mn(n),s=$d(r,e),a=await new lv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const mv=10*60*1e3;class gv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_v(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(su(e))}saveEventToCache(e){this.cachedEventUids.add(su(e)),this.lastProcessedEventTime=Date.now()}}function su(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _v(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hd(n);default:return!1}}/**
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
 */async function yv(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
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
 */const vv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tv=/^https?/;async function Ev(n){if(n.config.emulator)return;const{authorizedDomains:e}=await yv(n);for(const t of e)try{if(wv(t))return}catch{}kt(n,"unauthorized-domain")}function wv(n){const e=ca(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Tv.test(t))return!1;if(vv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Iv=new Ns(3e4,6e4);function iu(){const n=Wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bv(n){return new Promise((e,t)=>{var r,s,i;function a(){iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iu(),t(Lt(n,"network-request-failed"))},timeout:Iv.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)a();else{const c=yy("iframefcb");return Wt()[c]=()=>{gapi.load?a():t(Lt(n,"network-request-failed"))},Cd(`${_y()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw _i=null,e})}let _i=null;function Av(n){return _i=_i||bv(n),_i}/**
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
 */const Rv=new Ns(5e3,15e3),Sv="__/auth/iframe",Cv="emulator/auth/iframe",Pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dv(n){const e=n.config;Y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$a(e,Cv):`https://${n.config.authDomain}/${Sv}`,r={apiKey:e.apiKey,appName:n.name,v:gr},s=kv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ds(r).slice(1)}`}async function Nv(n){const e=await Av(n),t=Wt().gapi;return Y(t,n,"internal-error"),e.open({where:document.body,url:Dv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Lt(n,"network-request-failed"),c=Wt().setTimeout(()=>{i(a)},Rv.get());function u(){Wt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Vv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xv=500,Ov=600,Lv="_blank",Mv="http://localhost";class ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fv(n,e,t,r=xv,s=Ov){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Vv),{width:r.toString(),height:s.toString(),top:i,left:a}),h=rt().toLowerCase();t&&(c=Ed(h)?Lv:t),vd(h)&&(e=e||Mv,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[S,D])=>`${w}${S}=${D},`,"");if(cy(h)&&c!=="_self")return Uv(e||"",c),new ou(null);const f=window.open(e||"",c,p);Y(f,n,"popup-blocked");try{f.focus()}catch{}return new ou(f)}function Uv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Bv="__/auth/handler",jv="emulator/auth/handler",$v=encodeURIComponent("fac");async function au(n,e,t,r,s,i){Y(n.config.authDomain,n,"auth-domain-config-required"),Y(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gr,eventId:s};if(e instanceof Ka){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ag(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries({}))a[p]=f}if(e instanceof xs){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),h=u?`#${$v}=${encodeURIComponent(u)}`:"";return`${qv(n)}?${Ds(c).slice(1)}${h}`}function qv({config:n}){return n.emulator?$a(n,jv):`https://${n.authDomain}/${Bv}`}/**
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
 */const zo="webStorageSupport";class Hv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Md,this._completeRedirectFn=pv,this._overrideRedirectResult=hv}async _openPopup(e,t,r,s){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await au(e,t,r,ca(),s);return Fv(e,a,Ga())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await au(e,t,r,ca(),s);return Gy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Nv(e),r=new gv(e);return t.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zo,{type:zo},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zo];a!==void 0&&t(!!a),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ev(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rd()||Td()||Ha()}}const zv=Hv;var cu="@firebase/auth",lu="1.9.1";/**
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
 */class Wv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gv(n){Ft(new Pt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(n)},h=new py(r,s,i,u);return by(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new Pt("auth-internal",e=>{const t=mn(e.getProvider("auth").getImmediate());return(r=>new Wv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(cu,lu,Kv(n)),_t(cu,lu,"esm2017")}/**
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
 */const Qv=5*60,Yv=ed("authIdTokenMaxAge")||Qv;let uu=null;const Xv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Yv)return;const s=t==null?void 0:t.token;uu!==s&&(uu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jv(n=Xi()){const e=Kn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iy(n,{popupRedirectResolver:zv,persistence:[rv,zy,Md]}),r=ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Xv(i.toString());$y(t,a,()=>a(t.currentUser)),jy(t,c=>a(c))}}const s=Xh("auth");return s&&Ay(t,`http://${s}`),t}function Zv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}my({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Zv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gv("Browser");const zd="@firebase/installations",Ya="0.6.13";/**
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
 */const Wd=1e4,Kd=`w:${Ya}`,Gd="FIS_v2",eT="https://firebaseinstallations.googleapis.com/v1",tT=60*60*1e3,nT="installations",rT="Installations";/**
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
 */const sT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ur=new mr(nT,rT,sT);function Qd(n){return n instanceof Dt&&n.code.includes("request-failed")}/**
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
 */function Yd({projectId:n}){return`${eT}/projects/${n}/installations`}function Xd(n){return{token:n.token,requestStatus:2,expiresIn:oT(n.expiresIn),creationTime:Date.now()}}async function Jd(n,e){const r=(await e.json()).error;return ur.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function iT(n,{refreshToken:e}){const t=Zd(n);return t.append("Authorization",aT(e)),t}async function ef(n){const e=await n();return e.status>=500&&e.status<600?n():e}function oT(n){return Number(n.replace("s","000"))}function aT(n){return`${Gd} ${n}`}/**
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
 */async function cT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Yd(n),s=Zd(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Gd,appId:n.appId,sdkVersion:Kd},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await ef(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Xd(h.authToken)}}else throw await Jd("Create Installation",u)}/**
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
 */function tf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function lT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uT=/^[cdef][\w-]{21}$/,ha="";function hT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=dT(n);return uT.test(t)?t:ha}catch{return ha}}function dT(n){return lT(n).substr(0,22)}/**
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
 */function to(n){return`${n.appName}!${n.appId}`}/**
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
 */const nf=new Map;function rf(n,e){const t=to(n);sf(t,e),fT(t,e)}function sf(n,e){const t=nf.get(n);if(t)for(const r of t)r(e)}function fT(n,e){const t=pT();t&&t.postMessage({key:n,fid:e}),mT()}let ir=null;function pT(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=n=>{sf(n.data.key,n.data.fid)}),ir}function mT(){nf.size===0&&ir&&(ir.close(),ir=null)}/**
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
 */const gT="firebase-installations-database",_T=1,hr="firebase-installations-store";let Wo=null;function Xa(){return Wo||(Wo=ad(gT,_T,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hr)}}})),Wo}async function Oi(n,e){const t=to(n),s=(await Xa()).transaction(hr,"readwrite"),i=s.objectStore(hr),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&rf(n,e.fid),e}async function of(n){const e=to(n),r=(await Xa()).transaction(hr,"readwrite");await r.objectStore(hr).delete(e),await r.done}async function no(n,e){const t=to(n),s=(await Xa()).transaction(hr,"readwrite"),i=s.objectStore(hr),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&rf(n,c.fid),c}/**
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
 */async function Ja(n){let e;const t=await no(n.appConfig,r=>{const s=yT(r),i=vT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ha?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function yT(n){const e=n||{fid:hT(),registrationStatus:0};return af(e)}function vT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ur.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=TT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ET(n)}:{installationEntry:e}}async function TT(n,e){try{const t=await cT(n,e);return Oi(n.appConfig,t)}catch(t){throw Qd(t)&&t.customData.serverCode===409?await of(n.appConfig):await Oi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ET(n){let e=await hu(n.appConfig);for(;e.registrationStatus===1;)await tf(100),e=await hu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ja(n);return r||t}return e}function hu(n){return no(n,e=>{if(!e)throw ur.create("installation-not-found");return af(e)})}function af(n){return wT(n)?{fid:n.fid,registrationStatus:0}:n}function wT(n){return n.registrationStatus===1&&n.registrationTime+Wd<Date.now()}/**
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
 */async function IT({appConfig:n,heartbeatServiceProvider:e},t){const r=bT(n,t),s=iT(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Kd,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await ef(()=>fetch(r,c));if(u.ok){const h=await u.json();return Xd(h)}else throw await Jd("Generate Auth Token",u)}function bT(n,{fid:e}){return`${Yd(n)}/${e}/authTokens:generate`}/**
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
 */async function Za(n,e=!1){let t;const r=await no(n.appConfig,i=>{if(!cf(i))throw ur.create("not-registered");const a=i.authToken;if(!e&&ST(a))return i;if(a.requestStatus===1)return t=AT(n,e),i;{if(!navigator.onLine)throw ur.create("app-offline");const c=PT(i);return t=RT(n,c),c}});return t?await t:r.authToken}async function AT(n,e){let t=await du(n.appConfig);for(;t.authToken.requestStatus===1;)await tf(100),t=await du(n.appConfig);const r=t.authToken;return r.requestStatus===0?Za(n,e):r}function du(n){return no(n,e=>{if(!cf(e))throw ur.create("not-registered");const t=e.authToken;return kT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function RT(n,e){try{const t=await IT(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Oi(n.appConfig,r),t}catch(t){if(Qd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await of(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oi(n.appConfig,r)}throw t}}function cf(n){return n!==void 0&&n.registrationStatus===2}function ST(n){return n.requestStatus===2&&!CT(n)}function CT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tT}function PT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kT(n){return n.requestStatus===1&&n.requestTime+Wd<Date.now()}/**
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
 */async function DT(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ja(e);return r?r.catch(console.error):Za(e).catch(console.error),t.fid}/**
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
 */async function NT(n,e=!1){const t=n;return await VT(t),(await Za(t,e)).token}async function VT(n){const{registrationPromise:e}=await Ja(n);e&&await e}/**
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
 */function xT(n){if(!n||!n.options)throw Ko("App Configuration");if(!n.name)throw Ko("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ko(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ko(n){return ur.create("missing-app-config-values",{valueName:n})}/**
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
 */const lf="installations",OT="installations-internal",LT=n=>{const e=n.getProvider("app").getImmediate(),t=xT(e),r=Kn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},MT=n=>{const e=n.getProvider("app").getImmediate(),t=Kn(e,lf).getImmediate();return{getId:()=>DT(t),getToken:s=>NT(t,s)}};function FT(){Ft(new Pt(lf,LT,"PUBLIC")),Ft(new Pt(OT,MT,"PRIVATE"))}FT();_t(zd,Ya);_t(zd,Ya,"esm2017");/**
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
 */const Li="analytics",UT="firebase_id",BT="origin",jT=60*1e3,$T="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ec="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new Yi("@firebase/analytics");/**
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
 */const qT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},At=new mr("analytics","Analytics",qT);/**
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
 */function HT(n){if(!n.startsWith(ec)){const e=At.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(e.message),""}return n}function uf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function zT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function WT(n,e){const t=zT("firebase-js-sdk-policy",{createScriptURL:HT}),r=document.createElement("script"),s=`${ec}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function KT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function GT(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await uf(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(c){yt.error(c)}n("config",s,i)}async function QT(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await uf(t);for(const u of a){const h=c.find(f=>f.measurementId===u),p=h&&e[h.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){yt.error(i)}}function YT(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await QT(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await GT(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,h]=a;n("get",c,u,h)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){yt.error(c)}}return s}function XT(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=YT(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function JT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ec)&&t.src.includes(n))return t;return null}/**
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
 */const ZT=30,eE=1e3;class tE{constructor(e={},t=eE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hf=new tE;function nE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function rE(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:nE(r)},i=$T.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw At.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function sE(n,e=hf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw At.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw At.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new aE;return setTimeout(async()=>{c.abort()},jT),df({appId:r,apiKey:s,measurementId:i},a,c,e)}async function df(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=hf){var i;const{appId:a,measurementId:c}=n;try{await iE(r,e)}catch(u){if(c)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await rE(n);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!oE(h)){if(s.deleteThrottleMetadata(a),c)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw u}const p=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ml(t,s.intervalMillis,ZT):Ml(t,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return s.setThrottleMetadata(a,f),yt.debug(`Calling attemptFetch again in ${p} millis`),df(n,f,r,s)}}function iE(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(At.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oE(n){if(!(n instanceof Dt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class aE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cE(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function lE(){if(rd())try{await sd()}catch(n){return yt.warn(At.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(At.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uE(n,e,t,r,s,i,a){var c;const u=sE(n);u.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>yt.error(S)),e.push(u);const h=lE().then(S=>{if(S)return r.getId()}),[p,f]=await Promise.all([u,h]);JT(i)||WT(i,p.measurementId),s("js",new Date);const w=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return w[BT]="firebase",w.update=!0,f!=null&&(w[UT]=f),s("config",p.measurementId,w),p.measurementId}/**
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
 */class hE{constructor(e){this.app=e}_delete(){return delete fs[this.app.options.appId],Promise.resolve()}}let fs={},fu=[];const pu={};let Go="dataLayer",dE="gtag",mu,ff,gu=!1;function fE(){const n=[];if(nd()&&n.push("This is a browser extension environment."),Eg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=At.create("invalid-analytics-context",{errorInfo:e});yt.warn(t.message)}}function pE(n,e,t){fE();const r=n.options.appId;if(!r)throw At.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw At.create("no-api-key");if(fs[r]!=null)throw At.create("already-exists",{id:r});if(!gu){KT(Go);const{wrappedGtag:i,gtagCore:a}=XT(fs,fu,pu,Go,dE);ff=i,mu=a,gu=!0}return fs[r]=uE(n,fu,pu,e,mu,Go,t),new hE(n)}function mE(n=Xi()){n=Ae(n);const e=Kn(n,Li);return e.isInitialized()?e.getImmediate():gE(n)}function gE(n,e={}){const t=Kn(n,Li);if(t.isInitialized()){const s=t.getImmediate();if(Un(e,t.getOptions()))return s;throw At.create("already-initialized")}return t.initialize({options:e})}function _E(n,e,t,r){n=Ae(n),cE(ff,fs[n.app.options.appId],e,t,r).catch(s=>yt.error(s))}const _u="@firebase/analytics",yu="0.10.12";function yE(){Ft(new Pt(Li,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return pE(r,s,t)},"PUBLIC")),Ft(new Pt("analytics-internal",n,"PRIVATE")),_t(_u,yu),_t(_u,yu,"esm2017");function n(e){try{const t=e.getProvider(Li).getImmediate();return{logEvent:(r,s,i)=>_E(t,r,s,i)}}catch(t){throw At.create("interop-component-reg-failed",{reason:t})}}}yE();var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ln,pf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(T,I,E){for(var g=Array(arguments.length-2),de=2;de<arguments.length;de++)g[de-2]=arguments[de];return _.prototype[I].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,y){y||(y=0);var T=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)T[I]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(I=0;16>I;++I)T[I]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],I=b.g[2];var E=b.g[3],g=_+(E^y&(I^E))+T[0]+3614090360&4294967295;_=y+(g<<7&4294967295|g>>>25),g=E+(I^_&(y^I))+T[1]+3905402710&4294967295,E=_+(g<<12&4294967295|g>>>20),g=I+(y^E&(_^y))+T[2]+606105819&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(_^I&(E^_))+T[3]+3250441966&4294967295,y=I+(g<<22&4294967295|g>>>10),g=_+(E^y&(I^E))+T[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=E+(I^_&(y^I))+T[5]+1200080426&4294967295,E=_+(g<<12&4294967295|g>>>20),g=I+(y^E&(_^y))+T[6]+2821735955&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(_^I&(E^_))+T[7]+4249261313&4294967295,y=I+(g<<22&4294967295|g>>>10),g=_+(E^y&(I^E))+T[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=E+(I^_&(y^I))+T[9]+2336552879&4294967295,E=_+(g<<12&4294967295|g>>>20),g=I+(y^E&(_^y))+T[10]+4294925233&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(_^I&(E^_))+T[11]+2304563134&4294967295,y=I+(g<<22&4294967295|g>>>10),g=_+(E^y&(I^E))+T[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=E+(I^_&(y^I))+T[13]+4254626195&4294967295,E=_+(g<<12&4294967295|g>>>20),g=I+(y^E&(_^y))+T[14]+2792965006&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(_^I&(E^_))+T[15]+1236535329&4294967295,y=I+(g<<22&4294967295|g>>>10),g=_+(I^E&(y^I))+T[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(_^y))+T[6]+3225465664&4294967295,E=_+(g<<9&4294967295|g>>>23),g=I+(_^y&(E^_))+T[11]+643717713&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^_&(I^E))+T[0]+3921069994&4294967295,y=I+(g<<20&4294967295|g>>>12),g=_+(I^E&(y^I))+T[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(_^y))+T[10]+38016083&4294967295,E=_+(g<<9&4294967295|g>>>23),g=I+(_^y&(E^_))+T[15]+3634488961&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^_&(I^E))+T[4]+3889429448&4294967295,y=I+(g<<20&4294967295|g>>>12),g=_+(I^E&(y^I))+T[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(_^y))+T[14]+3275163606&4294967295,E=_+(g<<9&4294967295|g>>>23),g=I+(_^y&(E^_))+T[3]+4107603335&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^_&(I^E))+T[8]+1163531501&4294967295,y=I+(g<<20&4294967295|g>>>12),g=_+(I^E&(y^I))+T[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(_^y))+T[2]+4243563512&4294967295,E=_+(g<<9&4294967295|g>>>23),g=I+(_^y&(E^_))+T[7]+1735328473&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^_&(I^E))+T[12]+2368359562&4294967295,y=I+(g<<20&4294967295|g>>>12),g=_+(y^I^E)+T[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=E+(_^y^I)+T[8]+2272392833&4294967295,E=_+(g<<11&4294967295|g>>>21),g=I+(E^_^y)+T[11]+1839030562&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^_)+T[14]+4259657740&4294967295,y=I+(g<<23&4294967295|g>>>9),g=_+(y^I^E)+T[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=E+(_^y^I)+T[4]+1272893353&4294967295,E=_+(g<<11&4294967295|g>>>21),g=I+(E^_^y)+T[7]+4139469664&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^_)+T[10]+3200236656&4294967295,y=I+(g<<23&4294967295|g>>>9),g=_+(y^I^E)+T[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=E+(_^y^I)+T[0]+3936430074&4294967295,E=_+(g<<11&4294967295|g>>>21),g=I+(E^_^y)+T[3]+3572445317&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^_)+T[6]+76029189&4294967295,y=I+(g<<23&4294967295|g>>>9),g=_+(y^I^E)+T[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=E+(_^y^I)+T[12]+3873151461&4294967295,E=_+(g<<11&4294967295|g>>>21),g=I+(E^_^y)+T[15]+530742520&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^_)+T[2]+3299628645&4294967295,y=I+(g<<23&4294967295|g>>>9),g=_+(I^(y|~E))+T[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=E+(y^(_|~I))+T[7]+1126891415&4294967295,E=_+(g<<10&4294967295|g>>>22),g=I+(_^(E|~y))+T[14]+2878612391&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~_))+T[5]+4237533241&4294967295,y=I+(g<<21&4294967295|g>>>11),g=_+(I^(y|~E))+T[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=E+(y^(_|~I))+T[3]+2399980690&4294967295,E=_+(g<<10&4294967295|g>>>22),g=I+(_^(E|~y))+T[10]+4293915773&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~_))+T[1]+2240044497&4294967295,y=I+(g<<21&4294967295|g>>>11),g=_+(I^(y|~E))+T[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=E+(y^(_|~I))+T[15]+4264355552&4294967295,E=_+(g<<10&4294967295|g>>>22),g=I+(_^(E|~y))+T[6]+2734768916&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~_))+T[13]+1309151649&4294967295,y=I+(g<<21&4294967295|g>>>11),g=_+(I^(y|~E))+T[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=E+(y^(_|~I))+T[11]+3174756917&4294967295,E=_+(g<<10&4294967295|g>>>22),g=I+(_^(E|~y))+T[2]+718787259&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+E&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,T=this.B,I=this.h,E=0;E<_;){if(I==0)for(;E<=y;)s(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<_;)if(T[I++]=b.charCodeAt(E++),I==this.blockSize){s(this,T),I=0;break}}else for(;E<_;)if(T[I++]=b[E++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var T=0;32>T;T+=8)b[y++]=this.g[_]>>>T&255;return b};function i(b,_){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function a(b,_){this.h=_;for(var y=[],T=!0,I=b.length-1;0<=I;I--){var E=b[I]|0;T&&E==_||(y[I]=E,T=!1)}this.g=y}var c={};function u(b){return-128<=b&&128>b?i(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return P(h(-b));for(var _=[],y=1,T=0;b>=y;T++)_[T]=b/y|0,y*=4294967296;return new a(_,0)}function p(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return P(p(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),T=f,I=0;I<b.length;I+=8){var E=Math.min(8,b.length-I),g=parseInt(b.substring(I,I+E),_);8>E?(E=h(Math.pow(_,E)),T=T.j(E).add(h(g))):(T=T.j(y),T=T.add(h(g)))}return T}var f=u(0),w=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(M(this))return-P(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var T=this.i(y);b+=(0<=T?T:4294967296+T)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(M(this))return"-"+P(this).toString(b);for(var _=h(Math.pow(b,6)),y=this,T="";;){var I=G(y,_).g;y=q(y,I.j(_));var E=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=I,D(y))return E+T;for(;6>E.length;)E="0"+E;T=E+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function M(b){return b.h==-1}n.l=function(b){return b=q(this,b),M(b)?-1:D(b)?0:1};function P(b){for(var _=b.g.length,y=[],T=0;T<_;T++)y[T]=~b.g[T];return new a(y,~b.h).add(w)}n.abs=function(){return M(this)?P(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],T=0,I=0;I<=_;I++){var E=T+(this.i(I)&65535)+(b.i(I)&65535),g=(E>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);T=g>>>16,E&=65535,g&=65535,y[I]=g<<16|E}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(b,_){return b.add(P(_))}n.j=function(b){if(D(this)||D(b))return f;if(M(this))return M(b)?P(this).j(P(b)):P(P(this).j(b));if(M(b))return P(this.j(P(b)));if(0>this.l(S)&&0>b.l(S))return h(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<b.g.length;I++){var E=this.i(T)>>>16,g=this.i(T)&65535,de=b.i(I)>>>16,fe=b.i(I)&65535;y[2*T+2*I]+=g*fe,U(y,2*T+2*I),y[2*T+2*I+1]+=E*fe,U(y,2*T+2*I+1),y[2*T+2*I+1]+=g*de,U(y,2*T+2*I+1),y[2*T+2*I+2]+=E*de,U(y,2*T+2*I+2)}for(T=0;T<_;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=_;T<2*_;T++)y[T]=0;return new a(y,0)};function U(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function H(b,_){this.g=b,this.h=_}function G(b,_){if(D(_))throw Error("division by zero");if(D(b))return new H(f,f);if(M(b))return _=G(P(b),_),new H(P(_.g),P(_.h));if(M(_))return _=G(b,P(_)),new H(P(_.g),_.h);if(30<b.g.length){if(M(b)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,T=_;0>=T.l(b);)y=Q(y),T=Q(T);var I=ie(y,1),E=ie(T,1);for(T=ie(T,2),y=ie(y,2);!D(T);){var g=E.add(T);0>=g.l(b)&&(I=I.add(y),E=g),T=ie(T,1),y=ie(y,1)}return _=q(b,I.j(_)),new H(I,_)}for(I=f;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),E=h(y),g=E.j(_);M(g)||0<g.l(b);)y-=T,E=h(y),g=E.j(_);D(E)&&(E=w),I=I.add(E),b=q(b,g)}return new H(I,b)}n.A=function(b){return G(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)&b.i(T);return new a(y,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)|b.i(T);return new a(y,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)^b.i(T);return new a(y,this.h^b.h)};function Q(b){for(var _=b.g.length+1,y=[],T=0;T<_;T++)y[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(y,b.h)}function ie(b,_){var y=_>>5;_%=32;for(var T=b.g.length-y,I=[],E=0;E<T;E++)I[E]=0<_?b.i(E+y)>>>_|b.i(E+y+1)<<32-_:b.i(E+y);return new a(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Ln=a}).apply(typeof vu<"u"?vu:typeof self<"u"?self:typeof window<"u"?window:{});var ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mf,as,gf,yi,da,_f,yf,vf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ii=="object"&&ii];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,d){return o.call.apply(o.bind,arguments)}function f(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function w(o,l,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:f,w.apply(null,arguments)}function S(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function D(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,C){for(var F=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)F[ve-2]=arguments[ve];return l.prototype[A].apply(m,F)}}function M(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function P(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const A=o.length||0,C=m.length||0;o.length=A+C;for(let F=0;F<C;F++)o[A+F]=m[F]}else o.push(m)}}class q{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var Q=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ie(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function b(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let C=0;C<y.length;C++)d=y[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function E(o){c.setTimeout(()=>{throw o},0)}function g(){var o=De;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class de{constructor(){this.h=this.g=null}add(l,d){const m=fe.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var fe=new q(()=>new J,o=>o.reset());class J{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,ke=!1,De=new de,ct=()=>{const o=c.Promise.resolve(void 0);_e=()=>{o.then(me)}};var me=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(d){E(d)}var l=fe;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}ke=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function st(o,l){if(ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Q){e:{try{G(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ye[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&st.aa.h.call(this)}}D(st,ne);var ye={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Rt=0;function Ut(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++Rt,this.da=this.fa=!1}function St(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jt(o){this.src=o,this.g={},this.h=0}Jt.prototype.add=function(o,l,d,m,A){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=_n(o,l,m,A);return-1<F?(l=o[F],d||(l.fa=!1)):(l=new Ut(l,this.src,C,!!m,A),l.fa=d,o.push(l)),l};function gn(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),C;(C=0<=A)&&Array.prototype.splice.call(m,A,1),C&&(St(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _n(o,l,d,m){for(var A=0;A<o.length;++A){var C=o[A];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==m)return A}return-1}var Bt="closure_lm_"+(1e6*Math.random()|0),vr={};function Tr(o,l,d,m,A){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Tr(o,l[C],d,m,A);return null}return d=re(d),o&&o[Tt]?o.K(l,d,h(m)?!!m.capture:!1,A):yn(o,l,d,!1,m,A)}function yn(o,l,d,m,A,C){if(!l)throw Error("Invalid event type");var F=h(A)?!!A.capture:!!A,ve=O(o);if(ve||(o[Bt]=ve=new Jt(o)),d=ve.add(l,d,m,F,C),d.proxy)return d;if(m=v(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)ze||(A=F),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(j(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function v(){function o(d){return l.call(o.src,o.listener,d)}const l=L;return o}function R(o,l,d,m,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)R(o,l[C],d,m,A);else m=h(m)?!!m.capture:!!m,d=re(d),o&&o[Tt]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=_n(C,d,m,A),-1<d&&(St(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=O(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_n(l,d,m,A)),(d=-1<o?l[o]:null)&&k(d))}function k(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Tt])gn(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(j(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=O(l))?(gn(d,o),d.h==0&&(d.src=null,l[Bt]=null)):St(o)}}}function j(o){return o in vr?vr[o]:vr[o]="on"+o}function L(o,l){if(o.da)o=!0;else{l=new st(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&k(o),o=d.call(m,l)}return o}function O(o){return o=o[Bt],o instanceof Jt?o:null}var z="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(o){return typeof o=="function"?o:(o[z]||(o[z]=function(l){return o.handleEvent(l)}),o[z])}function se(){ue.call(this),this.i=new Jt(this),this.M=this,this.F=null}D(se,ue),se.prototype[Tt]=!0,se.prototype.removeEventListener=function(o,l,d,m){R(this,o,l,d,m)};function oe(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new ne(l,o);else if(l instanceof ne)l.target=l.target||o;else{var A=l;l=new ne(m,o),T(l,A)}if(A=!0,d)for(var C=d.length-1;0<=C;C--){var F=l.g=d[C];A=Xe(F,m,!0,l)&&A}if(F=l.g=o,A=Xe(F,m,!0,l)&&A,A=Xe(F,m,!1,l)&&A,d)for(C=0;C<d.length;C++)F=l.g=d[C],A=Xe(F,m,!1,l)&&A}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)St(d[m]);delete o.g[l],o.h--}}this.F=null},se.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},se.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Xe(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,C=0;C<l.length;++C){var F=l[C];if(F&&!F.da&&F.capture==d){var ve=F.listener,Ke=F.ha||F.src;F.fa&&gn(o.i,F),A=ve.call(Ke,m)!==!1&&A}}return A&&!m.defaultPrevented}function vn(o,l,d){if(typeof o=="function")d&&(o=w(o,d));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Et(o){o.g=vn(()=>{o.g=null,o.i&&(o.i=!1,Et(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Tn extends ue{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(o){ue.call(this),this.h=o,this.g={}}D(lt,ue);var Yn=[];function Er(o){ie(o.g,function(l,d){this.g.hasOwnProperty(d)&&k(l)},o),o.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Er(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zt=c.JSON.stringify,js=c.JSON.parse,wo=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Xn(){}Xn.prototype.h=null;function Nt(o){return o.h||(o.h=o.i())}function $s(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){ne.call(this,"d")}D(wr,ne);function ee(){ne.call(this,"c")}D(ee,ne);var Ee={},Me=null;function qe(){return Me=Me||new se}Ee.La="serverreachability";function Jn(o){ne.call(this,Ee.La,o)}D(Jn,ne);function be(o){const l=qe();oe(l,new Jn(l))}Ee.STAT_EVENT="statevent";function it(o,l){ne.call(this,Ee.STAT_EVENT,o),this.stat=l}D(it,ne);function Oe(o){const l=qe();oe(l,new it(l,o))}Ee.Ma="timingevent";function ut(o,l){ne.call(this,Ee.Ma,o),this.size=l}D(ut,ne);function We(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function en(o,l,d,m,A,C){o.info(function(){if(o.g)if(C)for(var F="",ve=C.split("&"),Ke=0;Ke<ve.length;Ke++){var pe=ve[Ke].split("=");if(1<pe.length){var Je=pe[0];pe=pe[1];var Ze=Je.split("_");F=2<=Ze.length&&Ze[1]=="type"?F+(Je+"="+pe+"&"):F+(Je+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+F})}function Bc(o,l,d,m,A,C,F){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+C+" "+F})}function Ir(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+om(o,d)+(m?" "+m:"")})}function im(o,l){o.info(function(){return"TIMEOUT: "+l})}wn.prototype.info=function(){};function om(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<A.length;F++)A[F]=""}}}}return Zt(d)}catch{return l}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Io;function Hs(){}D(Hs,Xn),Hs.prototype.g=function(){return new XMLHttpRequest},Hs.prototype.i=function(){return{}},Io=new Hs;function In(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var qc={},bo={};function Ao(o,l,d){o.L=1,o.v=Gs(tn(l)),o.m=d,o.P=!0,Hc(o,null)}function Hc(o,l){o.F=Date.now(),zs(o),o.A=tn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),sl(d.i,"t",m),o.C=0,d=o.j.J,o.h=new $c,o.g=wl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Tn(w(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Yn[0]=A.toString()),A=Yn);for(var C=0;C<A.length;C++){var F=Tr(d,A[C],m||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),be(),en(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const l=this.M;l&&nn(o)==3?l.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=nn(this.g);var l=this.g.Ba();const Rr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||hl(this.g)))){this.J||Ze!=4||l==7||(l==8||0>=Rr?be(3):be(2)),Ro(this);var d=this.g.Z();this.X=d;t:if(zc(this)){var m=hl(this.g);o="";var A=m.length,C=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),Gr(this);var F="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(C&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,Bc(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ke=this.g;if((ve=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ve)){var pe=ve;break t}}pe=null}if(d=pe)Ir(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,So(this,d);else{this.o=!1,this.s=3,Oe(12),Zn(this),Gr(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<F.length;)if(Vt=am(this,F),Vt==bo){Ze==4&&(this.s=4,Oe(14),d=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==qc){this.s=4,Oe(15),Ir(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Ir(this.i,this.l,Vt,null),So(this,Vt);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||F.length!=0||this.h.h||(this.s=1,Oe(16),d=!1),this.o=this.o&&d,!d)Ir(this.i,this.l,F,"[Invalid Chunked Response]"),Zn(this),Gr(this);else if(0<F.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Vo(Je),Je.M=!0,Oe(11))}}else Ir(this.i,this.l,F,null),So(this,F);Ze==4&&Zn(this),this.o&&!this.J&&(Ze==4?yl(this.j,this):(this.o=!1,zs(this)))}else bm(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Zn(this),Gr(this)}}}catch{}finally{}};function zc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function am(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?bo:(d=Number(l.substring(d,m)),isNaN(d)?qc:(m+=1,m+d>l.length?bo:(l=l.slice(m,m+d),o.C=m+d,l)))}In.prototype.cancel=function(){this.J=!0,Zn(this)};function zs(o){o.S=Date.now()+o.I,Wc(o,o.I)}function Wc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=We(w(o.ba,o),l)}function Ro(o){o.B&&(c.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(im(this.i,this.A),this.L!=2&&(be(),Oe(17)),Zn(this),this.s=2,Gr(this)):Wc(this,this.S-o)};function Gr(o){o.j.G==0||o.J||yl(o.j,o)}function Zn(o){Ro(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Er(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function So(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Co(d.h,o))){if(!o.K&&Co(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ei(d),Js(d);else break e;No(d),Oe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=We(w(d.Za,d),6e3));if(1>=Qc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((o.K||d.g==o)&&ei(d),!U(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let pe=A[l];if(d.T=pe[0],pe=pe[1],d.G==2)if(pe[0]=="c"){d.K=pe[1],d.ia=pe[2];const Je=pe[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=pe[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const Rr=pe[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(m=1.5*Rr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Vt=o.g;if(Vt){const ni=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var C=m.h;C.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Po(C,C.h),C.h=null))}if(m.D){const xo=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(m.ya=xo,we(m.I,m.D,xo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var F=o;if(m.qa=El(m,m.J?m.ia:null,m.W),F.K){Yc(m.h,F);var ve=F,Ke=m.L;Ke&&(ve.I=Ke),ve.B&&(Ro(ve),zs(ve)),m.g=F}else gl(m);0<d.i.length&&Zs(d)}else pe[0]!="stop"&&pe[0]!="close"||tr(d,7);else d.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?tr(d,7):Do(d):pe[0]!="noop"&&d.l&&d.l.ta(pe),d.v=0)}}be(4)}catch{}}var cm=class{constructor(o,l){this.g=o,this.map=l}};function Kc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qc(o){return o.h?1:o.g?o.g.size:0}function Co(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Po(o,l){o.g?o.g.add(l):o.h=l}function Yc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Kc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return M(o.i)}function lm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function um(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function Jc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=um(o),m=lm(o),A=m.length,C=0;C<A;C++)l.call(void 0,m[C],d&&d[C],o)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hm(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var C=o[d].substring(0,m);A=o[d].substring(m+1)}else C=o[d];l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,Ws(this,o.j),this.o=o.o,this.g=o.g,Ks(this,o.s),this.l=o.l;var l=o.i,d=new Xr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),el(this,d),this.m=o.m}else o&&(l=String(o).match(Zc))?(this.h=!1,Ws(this,l[1]||"",!0),this.o=Qr(l[2]||""),this.g=Qr(l[3]||"",!0),Ks(this,l[4]),this.l=Qr(l[5]||"",!0),el(this,l[6]||"",!0),this.m=Qr(l[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}er.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Yr(l,tl,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Yr(l,tl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Yr(d,d.charAt(0)=="/"?pm:fm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Yr(d,gm)),o.join("")};function tn(o){return new er(o)}function Ws(o,l,d){o.j=d?Qr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ks(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function el(o,l,d){l instanceof Xr?(o.i=l,_m(o.i,o.h)):(d||(l=Yr(l,mm)),o.i=new Xr(l,o.h))}function we(o,l,d){o.i.set(l,d)}function Gs(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,dm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tl=/[#\/\?@]/g,fm=/[#\?:]/g,pm=/[#\?]/g,mm=/[#\?@]/g,gm=/#/g;function Xr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function bn(o){o.g||(o.g=new Map,o.h=0,o.i&&hm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Xr.prototype,n.add=function(o,l){bn(this),this.i=null,o=br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function nl(o,l){bn(o),l=br(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function rl(o,l){return bn(o),l=br(o,l),o.g.has(l)}n.forEach=function(o,l){bn(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},n.na=function(){bn(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let C=0;C<A.length;C++)d.push(l[m])}return d},n.V=function(o){bn(this);let l=[];if(typeof o=="string")rl(this,o)&&(l=l.concat(this.g.get(br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return bn(this),this.i=null,o=br(this,o),rl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function sl(o,l,d){nl(o,l),0<d.length&&(o.i=null,o.g.set(br(o,l),M(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const C=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var A=C;F[m]!==""&&(A+="="+encodeURIComponent(String(F[m]))),o.push(A)}}return this.i=o.join("&")};function br(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _m(o,l){l&&!o.j&&(bn(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(nl(this,m),sl(this,A,d))},o)),o.j=l}function ym(o,l){const d=new wn;if(c.Image){const m=new Image;m.onload=S(An,d,"TestLoadImage: loaded",!0,l,m),m.onerror=S(An,d,"TestLoadImage: error",!1,l,m),m.onabort=S(An,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=S(An,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function vm(o,l){const d=new wn,m=new AbortController,A=setTimeout(()=>{m.abort(),An(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(A),C.ok?An(d,"TestPingServer: ok",!0,l):An(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),An(d,"TestPingServer: error",!1,l)})}function An(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Tm(){this.g=new wo}function Em(o,l,d){const m=d||"";try{Jc(o,function(A,C){let F=A;h(A)&&(F=Zt(A)),l.push(m+C+"="+encodeURIComponent(F))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function Qs(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Qs,Xn),Qs.prototype.g=function(){return new Ys(this.l,this.j)},Qs.prototype.i=function(o){return function(){return o}}({});function Ys(o,l){se.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ys,se),n=Ys.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Jr(this):Zr(this),this.readyState==3&&il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Qa=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Zr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ol(o){let l="";return ie(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function ko(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ol(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):we(o,l,d))}function Se(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Se,se);var wm=/^https?$/i,Im=["POST","PUT"];n=Se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Io.g(),this.v=this.o?Nt(this.o):Nt(Io),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){al(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Im,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of d)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ul(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){al(this,C)}};function al(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,cl(o),Xs(o)}function cl(o){o.A||(o.A=!0,oe(o,"complete"),oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,oe(this,"complete"),oe(this,"abort"),Xs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xs(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ll(this):this.bb())},n.bb=function(){ll(this)};function ll(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)vn(o.Ea,0,o);else if(oe(o,"readystatechange"),nn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=F===0){var A=String(o.D).match(Zc)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!wm.test(A?A.toLowerCase():"")}d=m}if(d)oe(o,"complete"),oe(o,"success");else{o.m=6;try{var C=2<nn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",cl(o)}}finally{Xs(o)}}}}function Xs(o,l){if(o.g){ul(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||oe(o,"ready");try{d.onreadystatechange=m}catch{}}}function ul(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),js(l)}};function hl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const l={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=I(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[A]||[];l[A]=C,C.push(d)}b(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function dl(o){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,o),this.cb=es("retryDelaySeedMs",1e4,o),this.Wa=es("forwardChannelMaxRetries",2,o),this.wa=es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Kc(o&&o.concurrentRequestLimit),this.Da=new Tm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=dl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,m){Oe(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=El(this,null,this.W),Zs(this)};function Do(o){if(fl(o),o.G==3){var l=o.U++,d=tn(o.I);if(we(d,"SID",o.K),we(d,"RID",l),we(d,"TYPE","terminate"),ts(o,d),l=new In(o,o.j,l),l.L=2,l.v=Gs(tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=wl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),zs(l)}Tl(o)}function Js(o){o.g&&(Vo(o),o.g.cancel(),o.g=null)}function fl(o){Js(o),o.u&&(c.clearTimeout(o.u),o.u=null),ei(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Zs(o){if(!Gc(o.h)&&!o.s){o.s=!0;var l=o.Ga;_e||ct(),ke||(_e(),ke=!0),De.add(l,o),o.B=0}}function Am(o,l){return Qc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=We(w(o.Ga,o,l),vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new In(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=ml(this,A,l),d=tn(this.I),we(d,"RID",o),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),ts(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(ol(C)))+"&"+l:this.m&&ko(d,this.m,C)),Po(this.h,A),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",l),we(d,"SID","null"),A.T=!0,Ao(A,d,null)):Ao(A,d,l),this.G=2}}else this.G==3&&(o?pl(this,o):this.i.length==0||Gc(this.h)||pl(this))};function pl(o,l){var d;l?d=l.l:d=o.U++;const m=tn(o.I);we(m,"SID",o.K),we(m,"RID",d),we(m,"AID",o.T),ts(o,m),o.m&&o.o&&ko(m,o.m,o.o),d=new In(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ml(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Po(o.h,d),Ao(d,m,l)}function ts(o,l){o.H&&ie(o.H,function(d,m){we(l,m,d)}),o.l&&Jc({},function(d,m){we(l,m,d)})}function ml(o,l,d){d=Math.min(o.i.length,d);var m=o.l?w(o.l.Na,o.l,o):null;e:{var A=o.i;let C=-1;for(;;){const F=["count="+d];C==-1?0<d?(C=A[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let ve=!0;for(let Ke=0;Ke<d;Ke++){let pe=A[Ke].g;const Je=A[Ke].map;if(pe-=C,0>pe)C=Math.max(0,A[Ke].g-100),ve=!1;else try{Em(Je,F,"req"+pe+"_")}catch{m&&m(Je)}}if(ve){m=F.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function gl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;_e||ct(),ke||(_e(),ke=!0),De.add(l,o),o.v=0}}function No(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=We(w(o.Fa,o),vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=We(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Js(this),_l(this))};function Vo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function _l(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=tn(o.qa);we(l,"RID","rpc"),we(l,"SID",o.K),we(l,"AID",o.T),we(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(l,"TO",o.ja),we(l,"TYPE","xmlhttp"),ts(o,l),o.m&&o.o&&ko(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Gs(tn(l)),d.m=null,d.P=!0,Hc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Js(this),No(this),Oe(19))};function ei(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function yl(o,l){var d=null;if(o.g==l){ei(o),Vo(o),o.g=null;var m=2}else if(Co(o.h,l))d=l.D,Yc(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=qe(),oe(m,new ut(m,d)),Zs(o)}else gl(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Am(o,l)||m==2&&No(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function vl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function tr(o,l){if(o.j.info("Error code "+l),l==2){var d=w(o.fb,o),m=o.Xa;const A=!m;m=new er(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ws(m,"https"),Gs(m),A?ym(m.toString(),d):vm(m.toString(),d)}else Oe(2);o.G=0,o.l&&o.l.sa(l),Tl(o),fl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Tl(o){if(o.G=0,o.ka=[],o.l){const l=Xc(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function El(o,l,d){var m=d instanceof er?tn(d):new er(d);if(m.g!="")l&&(m.g=l+"."+m.g),Ks(m,m.s);else{var A=c.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var C=new er(null);m&&Ws(C,m),l&&(C.g=l),A&&Ks(C,A),d&&(C.l=d),m=C}return d=o.D,l=o.ya,d&&l&&we(m,d,l),we(m,"VER",o.la),ts(o,m),m}function wl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new Se(new Qs({eb:d})):new Se(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}n=Il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ti(){}ti.prototype.g=function(o,l){return new wt(o,l)};function wt(o,l){se.call(this),this.g=new dl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ar(this)}D(wt,se),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Do(this.g)},wt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Zt(o),o=d);l.i.push(new cm(l.Ya++,o)),l.G==3&&Zs(l)},wt.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,wt.aa.N.call(this)};function bl(o){wr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(bl,wr);function Al(){ee.call(this),this.status=1}D(Al,ee);function Ar(o){this.g=o}D(Ar,Il),Ar.prototype.ua=function(){oe(this.g,"a")},Ar.prototype.ta=function(o){oe(this.g,new bl(o))},Ar.prototype.sa=function(o){oe(this.g,new Al)},Ar.prototype.ra=function(){oe(this.g,"b")},ti.prototype.createWebChannel=ti.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,vf=function(){return new ti},yf=function(){return qe()},_f=Ee,da={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,yi=qs,jc.COMPLETE="complete",gf=jc,$s.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",se.prototype.listen=se.prototype.K,as=$s,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,mf=Se}).apply(typeof ii<"u"?ii:typeof self<"u"?self:typeof window<"u"?window:{});const Tu="@firebase/firestore",Eu="4.7.9";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Hr="11.4.0";/**
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
 */const dr=new Yi("@firebase/firestore");function Cr(){return dr.logLevel}function $(n,...e){if(dr.logLevel<=ae.DEBUG){const t=e.map(tc);dr.debug(`Firestore (${Hr}): ${n}`,...t)}}function hn(n,...e){if(dr.logLevel<=ae.ERROR){const t=e.map(tc);dr.error(`Firestore (${Hr}): ${n}`,...t)}}function Lr(n,...e){if(dr.logLevel<=ae.WARN){const t=e.map(tc);dr.warn(`Firestore (${Hr}): ${n}`,...t)}}function tc(n){if(typeof n=="string")return n;try{/**
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
 */function X(n="Unexpected state"){const e=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: `+n;throw hn(e),new Error(e)}function ge(n,e){n||X()}function te(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Tf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class TE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class EE{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new Tf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new tt(e)}}class wE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class IE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new wE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bE{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,mt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new wu(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ge(typeof t.token=="string"),this.R=t.token,new wu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=AE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Mr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Iu=-62135596800,bu=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*bu);return new Be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Iu)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bu}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Iu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Be(0,0))}static max(){return new Z(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Au="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(),r===void 0?r=e.length-t:r>e.length-t&&X(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ln.fromString(e.substring(4,e.length-2))}}class Ie extends $t{construct(e,t,r){return new Ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ie(t)}static emptyPath(){return new Ie([])}}const RE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends $t{construct(e,t,r){return new Qe(e,t,r)}static isValidIdentifier(e){return RE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Au}static keyField(){return new Qe([Au])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}/**
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
 */const ws=-1;function SE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Bn(s,K.empty(),e)}function CE(n){return new Bn(n.readTime,n.key,ws)}class Bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bn(Z.min(),K.empty(),ws)}static max(){return new Bn(Z.max(),K.empty(),ws)}}function PE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const kE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==kE)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(p=>{a[h]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function NE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ro{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ro.ae=-1;/**
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
 */const nc=-1;function so(n){return n==null}function Mi(n){return n===0&&1/n==-1/0}function VE(n){return typeof n=="number"&&Number.isInteger(n)&&!Mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const wf="";function xE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ru(e)),e=OE(n.get(t),e);return Ru(e)}function OE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case wf:t+="";break;default:t+=i}}return t}function Ru(n){return n+wf+""}/**
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
 */function Su(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Re{constructor(e,t){this.comparator=e,this.root=t||Ge.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}}class oi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cu(this.data.getIterator())}getIteratorFrom(e){return new Cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class Cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new It([])}unionWith(e){let t=new je(Qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bf("Invalid base64 string: "+i):i}}(e);return new Ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const LE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(n){if(ge(!!n),typeof n=="string"){let e=0;const t=LE.exec(n);if(ge(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $n(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
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
 */const Af="server_timestamp",Rf="__type__",Sf="__previous_value__",Cf="__local_write_time__";function rc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rf])===null||t===void 0?void 0:t.stringValue)===Af}function io(n){const e=n.mapValue.fields[Sf];return rc(e)?io(e):e}function Is(n){const e=jn(n.mapValue.fields[Cf].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class ME{constructor(e,t,r,s,i,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}const Fi="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||Fi}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===Fi}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Pf="__type__",FE="__max__",ai={mapValue:{}},kf="__vector__",Ui="value";function qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rc(n)?4:BE(n)?9007199254740991:UE(n)?10:11:X()}function Qt(n,e){if(n===e)return!0;const t=qn(n);if(t!==qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Is(n).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=jn(s.timestampValue),c=jn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return $n(s.bytesValue).isEqual($n(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),c=Ve(i.doubleValue);return a===c?Mi(a)===Mi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Mr(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Su(a)!==Su(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Qt(a[u],c[u])))return!1;return!0}(n,e);default:return X()}}function As(n,e){return(n.values||[]).find(t=>Qt(t,e))!==void 0}function Fr(n,e){if(n===e)return 0;const t=qn(n),r=qn(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ve(i.integerValue||i.doubleValue),u=Ve(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Pu(n.timestampValue,e.timestampValue);case 4:return Pu(Is(n),Is(e));case 5:return le(n.stringValue,e.stringValue);case 6:return function(i,a){const c=$n(i),u=$n(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const p=le(c[h],u[h]);if(p!==0)return p}return le(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=le(Ve(i.latitude),Ve(a.latitude));return c!==0?c:le(Ve(i.longitude),Ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ku(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,h,p;const f=i.fields||{},w=a.fields||{},S=(c=f[Ui])===null||c===void 0?void 0:c.arrayValue,D=(u=w[Ui])===null||u===void 0?void 0:u.arrayValue,M=le(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:ku(S,D)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ai.mapValue&&a===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(a===ai.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let f=0;f<u.length&&f<p.length;++f){const w=le(u[f],p[f]);if(w!==0)return w;const S=Fr(c[u[f]],h[p[f]]);if(S!==0)return S}return le(u.length,p.length)}(n.mapValue,e.mapValue);default:throw X()}}function Pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=jn(n),r=jn(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function ku(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fr(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Ur(n){return fa(n)}function fa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=fa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${fa(t.fields[a])}`;return s+"}"}(n.mapValue):X()}function vi(n){switch(qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=io(n);return e?16+vi(e):16;case 5:return 2*n.stringValue.length;case 6:return $n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+vi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gn(r.fields,(i,a)=>{s+=i.length+vi(a)}),s}(n.mapValue);default:throw X()}}function pa(n){return!!n&&"integerValue"in n}function sc(n){return!!n&&"arrayValue"in n}function Du(n){return!!n&&"nullValue"in n}function Nu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ti(n){return!!n&&"mapValue"in n}function UE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pf])===null||t===void 0?void 0:t.stringValue)===kf}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function BE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===FE}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=Qe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ps(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(ps(this.value))}}function Df(n){const e=[];return Gn(n.fields,(t,r)=>{const s=new Qe([t]);if(Ti(r)){const i=Df(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new It(e)}/**
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
 */class nt{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new nt(e,0,Z.min(),Z.min(),Z.min(),gt.empty(),0)}static newFoundDocument(e,t,r,s){return new nt(e,1,t,Z.min(),r,s,0)}static newNoDocument(e,t){return new nt(e,2,t,Z.min(),Z.min(),gt.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,Z.min(),Z.min(),gt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bi{constructor(e,t){this.position=e,this.inclusive=t}}function Vu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),t.key):r=Fr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function jE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Nf{}class Ue extends Nf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qE(e,t,r):t==="array-contains"?new WE(e,r):t==="in"?new KE(e,r):t==="not-in"?new GE(e,r):t==="array-contains-any"?new QE(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new HE(e,r):new zE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fr(t,this.value)):t!==null&&qn(this.value)===qn(t)&&this.matchesComparison(Fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Nf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Yt(e,t)}matches(e){return Vf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Vf(n){return n.op==="and"}function xf(n){return $E(n)&&Vf(n)}function $E(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function ma(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+Ur(n.value);if(xf(n))return n.filters.map(e=>ma(e)).join(",");{const e=n.filters.map(t=>ma(t)).join(",");return`${n.op}(${e})`}}function Of(n,e){return n instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(n,e):n instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Of(a,s.filters[c]),!0):!1}(n,e):void X()}function Lf(n){return n instanceof Ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Ur(t.value)}`}(n):n instanceof Yt?function(t){return t.op.toString()+" {"+t.getFilters().map(Lf).join(" ,")+"}"}(n):"Filter"}class qE extends Ue{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class HE extends Ue{constructor(e,t){super(e,"in",t),this.keys=Mf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zE extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=Mf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>K.fromName(r.referenceValue))}class WE extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sc(t)&&As(t.arrayValue,this.value)}}class KE extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&As(this.value.arrayValue,t)}}class GE extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!As(this.value.arrayValue,t)}}class QE extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>As(this.value.arrayValue,r))}}/**
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
 */class YE{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.le=null}}function Ou(n,e=null,t=[],r=[],s=null,i=null,a=null){return new YE(n,e,t,r,s,i,a)}function ic(n){const e=te(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ma(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),so(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ur(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ur(r)).join(",")),e.le=t}return e.le}function oc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Of(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xu(n.startAt,e.startAt)&&xu(n.endAt,e.endAt)}function ga(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class oo{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function XE(n,e,t,r,s,i,a,c){return new oo(n,e,t,r,s,i,a,c)}function ac(n){return new oo(n)}function Lu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function JE(n){return n.collectionGroup!==null}function ms(n){const e=te(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new je(Qe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new ji(i,r))}),t.has(Qe.keyField().canonicalString())||e.he.push(new ji(Qe.keyField(),r))}return e.he}function Kt(n){const e=te(n);return e.Pe||(e.Pe=ZE(e,ms(n))),e.Pe}function ZE(n,e){if(n.limitType==="F")return Ou(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ji(s.field,i)});const t=n.endAt?new Bi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bi(n.startAt.position,n.startAt.inclusive):null;return Ou(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _a(n,e,t){return new oo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ao(n,e){return oc(Kt(n),Kt(e))&&n.limitType===e.limitType}function Ff(n){return`${ic(Kt(n))}|lt:${n.limitType}`}function Pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Lf(s)).join(", ")}]`),so(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ur(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ur(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function co(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Vu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,ms(r),s)||r.endAt&&!function(a,c,u){const h=Vu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,ms(r),s))}(n,e)}function ew(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uf(n){return(e,t)=>{let r=!1;for(const s of ms(n)){const i=tw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tw(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Fr(u,h):X()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class _r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return If(this.inner)}size(){return this.innerSize}}/**
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
 */const nw=new Re(K.comparator);function dn(){return nw}const Bf=new Re(K.comparator);function cs(...n){let e=Bf;for(const t of n)e=e.insert(t.key,t);return e}function jf(n){let e=Bf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function or(){return gs()}function $f(){return gs()}function gs(){return new _r(n=>n.toString(),(n,e)=>n.isEqual(e))}const rw=new Re(K.comparator),sw=new je(K.comparator);function ce(...n){let e=sw;for(const t of n)e=e.add(t);return e}const iw=new je(le);function ow(){return iw}/**
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
 */function cc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(e)?"-0":e}}function qf(n){return{integerValue:""+n}}function aw(n,e){return VE(e)?qf(e):cc(n,e)}/**
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
 */class lo{constructor(){this._=void 0}}function cw(n,e,t){return n instanceof Rs?function(s,i){const a={fields:{[Rf]:{stringValue:Af},[Cf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rc(i)&&(i=io(i)),i&&(a.fields[Sf]=i),{mapValue:a}}(t,e):n instanceof Ss?zf(n,e):n instanceof Cs?Wf(n,e):function(s,i){const a=Hf(s,i),c=Mu(a)+Mu(s.Ie);return pa(a)&&pa(s.Ie)?qf(c):cc(s.serializer,c)}(n,e)}function lw(n,e,t){return n instanceof Ss?zf(n,e):n instanceof Cs?Wf(n,e):t}function Hf(n,e){return n instanceof $i?function(r){return pa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rs extends lo{}class Ss extends lo{constructor(e){super(),this.elements=e}}function zf(n,e){const t=Kf(e);for(const r of n.elements)t.some(s=>Qt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Cs extends lo{constructor(e){super(),this.elements=e}}function Wf(n,e){let t=Kf(e);for(const r of n.elements)t=t.filter(s=>!Qt(s,r));return{arrayValue:{values:t}}}class $i extends lo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Mu(n){return Ve(n.integerValue||n.doubleValue)}function Kf(n){return sc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class uw{constructor(e,t){this.field=e,this.transform=t}}function hw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ss&&s instanceof Ss||r instanceof Cs&&s instanceof Cs?Mr(r.elements,s.elements,Qt):r instanceof $i&&s instanceof $i?Qt(r.Ie,s.Ie):r instanceof Rs&&s instanceof Rs}(n.transform,e.transform)}class dw{constructor(e,t){this.version=e,this.transformResults=t}}class Mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ei(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class uo{}function Gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yf(n.key,Mt.none()):new Ls(n.key,n.data,Mt.none());{const t=n.data,r=gt.empty();let s=new je(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qn(n.key,r,new It(s.toArray()),Mt.none())}}function fw(n,e,t){n instanceof Ls?function(s,i,a){const c=s.value.clone(),u=Uu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Qn?function(s,i,a){if(!Ei(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Uu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Qf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function _s(n,e,t,r){return n instanceof Ls?function(i,a,c,u){if(!Ei(i.precondition,a))return c;const h=i.value.clone(),p=Bu(i.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qn?function(i,a,c,u){if(!Ei(i.precondition,a))return c;const h=Bu(i.fieldTransforms,u,a),p=a.data;return p.setAll(Qf(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,a,c){return Ei(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function pw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Hf(r.transform,s||null);i!=null&&(t===null&&(t=gt.empty()),t.set(r.field,i))}return t||null}function Fu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mr(r,s,(i,a)=>hw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ls extends uo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends uo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uu(n,e,t){const r=new Map;ge(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,lw(a,c,t[s]))}return r}function Bu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,cw(i,a,e))}return r}class Yf extends uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mw extends uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$f();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Gf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Mr(this.mutations,e.mutations,(t,r)=>Fu(t,r))&&Mr(this.baseMutations,e.baseMutations,(t,r)=>Fu(t,r))}}class lc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ge(e.mutations.length===r.length);let s=function(){return rw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new lc(e,t,r,s)}}/**
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
 */class _w{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,he;function vw(n){switch(n){case x.OK:return X();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return X()}}function Xf(n){if(n===void 0)return hn("GRPC error has no .code"),x.UNKNOWN;switch(n){case Le.OK:return x.OK;case Le.CANCELLED:return x.CANCELLED;case Le.UNKNOWN:return x.UNKNOWN;case Le.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Le.INTERNAL:return x.INTERNAL;case Le.UNAVAILABLE:return x.UNAVAILABLE;case Le.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Le.NOT_FOUND:return x.NOT_FOUND;case Le.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Le.ABORTED:return x.ABORTED;case Le.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Le.DATA_LOSS:return x.DATA_LOSS;default:return X()}}(he=Le||(Le={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tw(){return new TextEncoder}/**
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
 */const Ew=new Ln([4294967295,4294967295],0);function ju(n){const e=Tw().encode(n),t=new pf;return t.update(e),new Uint8Array(t.digest())}function $u(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ln([t,r],0),new Ln([s,i],0)]}class uc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ls(`Invalid padding: ${t}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ls(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ln.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(Ln.fromNumber(r)));return s.compare(Ew)===1&&(s=new Ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=ju(e),[r,s]=$u(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new uc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const t=ju(e),[r,s]=$u(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ho{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ms.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ho(Z.min(),s,new Re(le),dn(),ce())}}class Ms{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ms(r,t,ce(),ce(),ce())}}/**
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
 */class wi{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Jf{constructor(e,t){this.targetId=e,this.ge=t}}class Zf{constructor(e,t,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class qu{constructor(){this.pe=0,this.ye=Hu(),this.we=Ye.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ce(),t=ce(),r=ce();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Ms(this.we,this.be,e,t,r)}Me(){this.Se=!1,this.ye=Hu()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ge(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class ww{constructor(e){this.ke=e,this.qe=new Map,this.Qe=dn(),this.$e=ci(),this.Ke=ci(),this.Ue=new Re(le)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:X()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(ga(i))if(r===0){const a=new K(i.path);this.ze(t,a,nt.newNoDocument(a,Z.min()))}else ge(r===1);else{const a=this.et(t);if(a!==r){const c=this.tt(e),u=c?this.nt(c,e,a):1;if(u!==0){this.Ye(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=$n(r).toUint8Array()}catch(u){if(u instanceof bf)return Lr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new uc(a,s,i)}catch(u){return Lr(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const c=this.Xe(a);if(c){if(i.current&&ga(c.target)){const u=new K(c.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,nt.newNoDocument(u,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=ce();this.Ke.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Xe(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new ho(e,t,this.Ue,this.Qe,r);return this.Qe=dn(),this.$e=ci(),this.Ke=ci(),this.Ue=new Re(le),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new qu,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new je(le),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new je(le),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new qu),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ci(){return new Re(K.comparator)}function Hu(){return new Re(K.comparator)}const Iw={asc:"ASCENDING",desc:"DESCENDING"},bw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Aw={and:"AND",or:"OR"};class Rw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(n,e){return n.useProto3Json||so(e)?e:{value:e}}function qi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ep(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sw(n,e){return qi(n,e.toTimestamp())}function Gt(n){return ge(!!n),Z.fromTimestamp(function(t){const r=jn(t);return new Be(r.seconds,r.nanos)}(n))}function hc(n,e){return va(n,e).canonicalString()}function va(n,e){const t=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tp(n){const e=Ie.fromString(n);return ge(op(e)),e}function Ta(n,e){return hc(n.databaseId,e.path)}function Qo(n,e){const t=tp(e);if(t.get(1)!==n.databaseId.projectId)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(rp(t))}function np(n,e){return hc(n.databaseId,e)}function Cw(n){const e=tp(n);return e.length===4?Ie.emptyPath():rp(e)}function Ea(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rp(n){return ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function zu(n,e,t){return{name:Ta(n,e),fields:t.value.mapValue.fields}}function Pw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ge(p===void 0||typeof p=="string"),Ye.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ye.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?x.UNKNOWN:Xf(h.code);return new W(p,h.message||"")}(a);t=new Zf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qo(n,r.document.name),i=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):Z.min(),c=new gt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new wi(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qo(n,r.document),i=r.readTime?Gt(r.readTime):Z.min(),a=nt.newNoDocument(s,i),c=r.removedTargetIds||[];t=new wi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qo(n,r.document),i=r.removedTargetIds||[];t=new wi([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new yw(s,i),c=r.targetId;t=new Jf(c,a)}}return t}function kw(n,e){let t;if(e instanceof Ls)t={update:zu(n,e.key,e.value)};else if(e instanceof Yf)t={delete:Ta(n,e.key)};else if(e instanceof Qn)t={update:zu(n,e.key,e.data),updateMask:Uw(e.fieldMask)};else{if(!(e instanceof mw))return X();t={verify:Ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $i)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw X()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(n,e.precondition)),t}function Dw(n,e){return n&&n.length>0?(ge(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Gt(s.updateTime):Gt(i);return a.isEqual(Z.min())&&(a=Gt(i)),new dw(a,s.transformResults||[])}(t,e))):[]}function Nw(n,e){return{documents:[np(n,e.path)]}}function Vw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=np(n,s);const i=function(h){if(h.length!==0)return ip(Yt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(p=>function(w){return{field:kr(w.field),direction:Lw(w.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ya(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:s}}function xw(n){let e=Cw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ge(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(f){const w=sp(f);return w instanceof Yt&&xf(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(f){return f.map(w=>function(D){return new ji(Dr(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(f){let w;return w=typeof f=="object"?f.value:f,so(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(f){const w=!!f.before,S=f.values||[];return new Bi(S,w)}(t.startAt));let h=null;return t.endAt&&(h=function(f){const w=!f.before,S=f.values||[];return new Bi(S,w)}(t.endAt)),XE(e,s,a,i,c,"F",u,h)}function Ow(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dr(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dr(t.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dr(t.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(t.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(t){return Ue.create(Dr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yt.create(t.compositeFilter.filters.map(r=>sp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(t.compositeFilter.op))}(n):X()}function Lw(n){return Iw[n]}function Mw(n){return bw[n]}function Fw(n){return Aw[n]}function kr(n){return{fieldPath:n.canonicalString()}}function Dr(n){return Qe.fromServerFormat(n.fieldPath)}function ip(n){return n instanceof Ue?function(t){if(t.op==="=="){if(Nu(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(Du(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nu(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(Du(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:Mw(t.op),value:t.value}}}(n):n instanceof Yt?function(t){const r=t.getFilters().map(s=>ip(s));return r.length===1?r[0]:{compositeFilter:{op:Fw(t.op),filters:r}}}(n):X()}function Uw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vn{constructor(e,t,r,s,i=Z.min(),a=Z.min(),c=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bw{constructor(e){this.Tt=e}}function jw(n){const e=xw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_a(e,e.limit,"L"):e}/**
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
 */class $w{constructor(){this.Tn=new qw}addToCollectionParentIndex(e,t){return this.Tn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Bn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class qw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new je(Ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(Ie.comparator)).toArray()}}/**
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
 */const Wu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ap=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(ap,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class Br{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Br(0)}static Un(){return new Br(-1)}}/**
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
 */const Ku="LruGarbageCollector",Hw=1048576;function Gu([n,e],[t,r]){const s=le(n,t);return s===0?le(e,r):s}class zw{constructor(e){this.Hn=e,this.buffer=new je(Gu),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ww{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){$(Ku,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wr(t)?$(Ku,"Ignoring IndexedDB error during garbage collection: ",t):await zr(t)}await this.er(3e5)})}}class Kw{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ro.ae);const r=new zw(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Wu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wu):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,c,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,a=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(h=Date.now(),Cr()<=ae.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Gw(n,e){return new Kw(n,e)}/**
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
 */class Qw{constructor(){this.changes=new _r(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Yw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Xw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_s(r.mutation,s,It.empty(),Be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const s=or();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=cs();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=or();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=dn();const a=gs(),c=function(){return gs()}();return t.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Qn)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),_s(p.mutation,h,p.mutation.getFieldMask(),Be.now())):a.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>{var f;return c.set(h,new Yw(p,(f=a.get(h))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const r=gs();let s=new Re((a,c)=>a-c),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let p=r.get(u)||It.empty();p=c.applyToLocalView(h,p),r.set(u,p);const f=(s.get(c.batchId)||ce()).add(u);s=s.insert(c.batchId,f)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,p=u.value,f=$f();p.forEach(w=>{if(!i.has(w)){const S=Gf(t.get(w),r.get(w));S!==null&&f.set(w,S),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,f))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(or());let c=ws,u=i;return a.next(h=>N.forEach(h,(p,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{u=u.insert(p,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ce())).next(p=>({batchId:c,changes:jf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const h=function(f,w){return new oo(w,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((f,w)=>{a=a.insert(f,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,nt.newInvalidDocument(p)))});let c=cs();return a.forEach((u,h)=>{const p=i.get(u);p!==void 0&&_s(p.mutation,h,It.empty(),Be.now()),co(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class Jw{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return N.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:jw(s.bundledQuery),readTime:Gt(s.readTime)}}(t)),N.resolve()}}/**
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
 */class Zw{constructor(){this.overlays=new Re(K.comparator),this.Rr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=or();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=or(),i=t.length+1,a=new K(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Re((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=or(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=or(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=s)););return N.resolve(c)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _w(t,r));let i=this.Rr.get(t);i===void 0&&(i=ce(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class eI{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class dc{constructor(){this.Vr=new je(He.mr),this.gr=new je(He.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new He(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new He(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new K(new Ie([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new K(new Ie([])),r=new He(t,e),s=new He(t,e+1);let i=ce();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new He(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return K.comparator(e.key,t.key)||le(e.Cr,t.Cr)}static pr(e,t){return le(e.Cr,t.Cr)||K.comparator(e.key,t.key)}}/**
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
 */class tI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new je(He.mr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gw(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new He(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?nc:this.Fr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(le);return t.forEach(s=>{const i=new He(s,0),a=new He(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],c=>{r=r.add(c.Cr)})}),N.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const a=new He(new K(i),0);let c=new je(le);return this.Mr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Cr)),!0)},a),N.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ge(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return N.forEach(t.mutations,s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new He(t,0),s=this.Mr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class nI{constructor(e){this.kr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let r=dn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=dn();const a=t.path,c=new K(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||PE(CE(p),r)<=0||(s.has(p.key)||co(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){X()}qr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rI(this)}getSize(e){return N.resolve(this.size)}}class rI extends Qw{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class sI{constructor(e){this.persistence=e,this.Qr=new _r(t=>ic(t),oc),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.$r=0,this.Kr=new dc,this.targetCount=0,this.Ur=Br.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),N.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Br(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.zn(t),N.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Kr.containsKey(t))}}/**
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
 */class cp{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ro(0),this.zr=!1,this.zr=!0,this.jr=new eI,this.referenceDelegate=e(this),this.Hr=new sI(this),this.indexManager=new $w,this.remoteDocumentCache=function(s){return new nI(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Bw(t),this.Yr=new Jw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new tI(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new iI(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return N.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class iI extends DE{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.ti=new dc,this.ni=null}static ri(e){return new fc(e)}get ii(){if(this.ni)return this.ni;throw X()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),N.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ii,r=>{const s=K.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,Z.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return N.or([()=>N.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Hi{constructor(e,t){this.persistence=e,this.oi=new _r(r=>xE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Gw(this,t)}static ri(e,t){return new Hi(e,t)}Zr(){}Xr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return N.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,i.removeEntry(a,Z.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vi(e.data.value)),t}ar(e,t,r){return N.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pc(e,t.fromCache,r,s)}}/**
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
 */class oI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Tg()?8:NE(rt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oI;return this._s(e,t,a).next(c=>{if(i.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Cr()<=ae.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),N.resolve()):(Cr()<=ae.DEBUG&&$("QueryEngine","Query:",Pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Cr()<=ae.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):N.resolve())}rs(e,t){if(Lu(t))return N.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=_a(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ce(...i);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.cs(t,c);return this.ls(t,h,a,u.readTime)?this.rs(e,_a(t,null,"F")):this.hs(e,h,t,u)}))})))}ss(e,t,r,s){return Lu(t)||s.isEqual(Z.min())?N.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?N.resolve(null):(Cr()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(t)),this.hs(e,a,t,SE(s,ws)).next(c=>c))})}cs(e,t){let r=new je(Uf(e));return t.forEach((s,i)=>{co(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Cr()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Pr(t)),this.ns.getDocumentsMatchingQuery(e,t,Bn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const mc="LocalStore",cI=3e8;class lI{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Re(le),this.Is=new _r(i=>ic(i),oc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function uI(n,e,t,r){return new lI(n,e,t,r)}async function lp(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ce();for(const h of s){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){c.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:c}))})})}function hI(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,h,p){const f=h.batch,w=f.keys();let S=N.resolve();return w.forEach(D=>{S=S.next(()=>p.getEntry(u,D)).next(M=>{const P=h.docVersions.get(D);ge(P!==null),M.version.compareTo(P)<0&&(f.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),p.addEntry(M)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ce();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function up(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function dI(n,e){const t=te(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const c=[];e.targetChanges.forEach((p,f)=>{const w=s.get(f);if(!w)return;c.push(t.Hr.removeMatchingKeys(i,p.removedDocuments,f).next(()=>t.Hr.addMatchingKeys(i,p.addedDocuments,f)));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?S=S.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(f,S),function(M,P,q){return M.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=cI?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(w,S,p)&&c.push(t.Hr.updateTargetData(i,S))});let u=dn(),h=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(fI(i,a,e.documentUpdates).next(p=>{u=p.Vs,h=p.fs})),!r.isEqual(Z.min())){const p=t.Hr.getLastRemoteSnapshotVersion(i).next(f=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ts=s,i))}function fI(n,e,t){let r=ce(),s=ce();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=dn();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):$(mc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function pI(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=nc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function wa(n,e,t){const r=te(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Wr(a))throw a;$(mc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Qu(n,e,t){const r=te(n);let s=Z.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,p){const f=te(u),w=f.Is.get(p);return w!==void 0?N.resolve(f.Ts.get(w)):f.Hr.getTargetData(h,p)}(r,a,Kt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:Z.min(),t?i:ce())).next(c=>(gI(r,ew(e),c),{documents:c,gs:i})))}function gI(n,e,t){let r=n.Es.get(e)||Z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class Yu{constructor(){this.activeTargetIds=ow()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _I{constructor(){this.ho=new Yu,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Yu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yI{To(e){}shutdown(){}}/**
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
 */const Xu="ConnectivityMonitor";class Ju{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){$(Xu,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){$(Xu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let li=null;function Ia(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
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
 */const Yo="RestConnection",vI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TI{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Fi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,t,r,s,i){const a=Ia(),c=this.So(e,t.toUriEncodedString());$(Yo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(e,c,u,r).then(h=>($(Yo,`Received RPC '${e}' ${a}: `,h),h),h=>{throw Lr(Yo,`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,t,r,s,i,a){return this.bo(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,t){const r=vI[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class EI{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const et="WebChannelConnection";class wI extends TI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=Ia();return new Promise((a,c)=>{const u=new mf;u.setWithCredentials(!0),u.listenOnce(gf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case yi.NO_ERROR:const p=u.getResponseJson();$(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case yi.TIMEOUT:$(et,`RPC '${e}' ${i} timed out`),c(new W(x.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const f=u.getStatus();if($(et,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const D=function(P){const q=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(q)>=0?q:x.UNKNOWN}(S.status);c(new W(D,S.message))}else c(new W(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(x.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$(et,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);$(et,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Wo(e,t,r){const s=Ia(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vf(),c=yf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");$(et,`Creating RPC '${e}' stream ${s}: ${p}`,u);const f=a.createWebChannel(p,u);let w=!1,S=!1;const D=new EI({Fo:P=>{S?$(et,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(w||($(et,`Opening RPC '${e}' stream ${s} transport.`),f.open(),w=!0),$(et,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Mo:()=>f.close()}),M=(P,q,U)=>{P.listen(q,H=>{try{U(H)}catch(G){setTimeout(()=>{throw G},0)}})};return M(f,as.EventType.OPEN,()=>{S||($(et,`RPC '${e}' stream ${s} transport opened.`),D.Qo())}),M(f,as.EventType.CLOSE,()=>{S||(S=!0,$(et,`RPC '${e}' stream ${s} transport closed`),D.Ko())}),M(f,as.EventType.ERROR,P=>{S||(S=!0,Lr(et,`RPC '${e}' stream ${s} transport errored:`,P),D.Ko(new W(x.UNAVAILABLE,"The operation could not be completed")))}),M(f,as.EventType.MESSAGE,P=>{var q;if(!S){const U=P.data[0];ge(!!U);const H=U,G=(H==null?void 0:H.error)||((q=H[0])===null||q===void 0?void 0:q.error);if(G){$(et,`RPC '${e}' stream ${s} received error:`,G);const Q=G.status;let ie=function(y){const T=Le[y];if(T!==void 0)return Xf(T)}(Q),b=G.message;ie===void 0&&(ie=x.INTERNAL,b="Unknown error status: "+Q+" with message "+G.message),S=!0,D.Ko(new W(ie,b)),f.close()}else $(et,`RPC '${e}' stream ${s} received:`,U),D.Uo(U)}}),M(c,_f.STAT_EVENT,P=>{P.stat===da.PROXY?$(et,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===da.NOPROXY&&$(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Xo(){return typeof document<"u"?document:null}/**
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
 */function fo(n){return new Rw(n,!0)}/**
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
 */class hp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Zu="PersistentStream";class dp{constructor(e,t,r,s,i,a,c,u){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new hp(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(hn(t.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new W(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return $(Zu,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():($(Zu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class II extends dp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Pw(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Z.min():a.readTime?Gt(a.readTime):Z.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ga(u)?{documents:Nw(i,u)}:{query:Vw(i,u).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ep(i,a.resumeToken);const h=ya(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(Z.min())>0){c.readTime=qi(i,a.snapshotVersion.toTimestamp());const h=ya(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Ow(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.I_(t)}}class bI extends dp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Dw(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Ea(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>kw(this.serializer,r))};this.I_(t)}}/**
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
 */class AI{}class RI extends AI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,va(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(x.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,va(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(x.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class SI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(hn(t),this.N_=!1):$("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const fr="RemoteStore";class CI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{yr(this)&&($(fr,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.W_.add(4),await Fs(h),h.j_.set("Unknown"),h.W_.delete(4),await po(h)}(this))})}),this.j_=new SI(r,s)}}async function po(n){if(yr(n))for(const e of n.G_)await e(!0)}async function Fs(n){for(const e of n.G_)await e(!1)}function fp(n,e){const t=te(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),vc(t)?yc(t):Kr(t).c_()&&_c(t,e))}function gc(n,e){const t=te(n),r=Kr(t);t.U_.delete(e),r.c_()&&pp(t,e),t.U_.size===0&&(r.c_()?r.P_():yr(t)&&t.j_.set("Unknown"))}function _c(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Kr(n).y_(e)}function pp(n,e){n.H_.Ne(e),Kr(n).w_(e)}function yc(n){n.H_=new ww({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Kr(n).start(),n.j_.B_()}function vc(n){return yr(n)&&!Kr(n).u_()&&n.U_.size>0}function yr(n){return te(n).W_.size===0}function mp(n){n.H_=void 0}async function PI(n){n.j_.set("Online")}async function kI(n){n.U_.forEach((e,t)=>{_c(n,e)})}async function DI(n,e){mp(n),vc(n)?(n.j_.q_(e),yc(n)):n.j_.set("Unknown")}async function NI(n,e,t){if(n.j_.set("Online"),e instanceof Zf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.U_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.U_.delete(c),s.H_.removeTarget(c))}(n,e)}catch(r){$(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zi(n,r)}else if(e instanceof wi?n.H_.We(e):e instanceof Jf?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Z.min()))try{const r=await up(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.H_.ot(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.U_.get(h);p&&i.U_.set(h,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const p=i.U_.get(u);if(!p)return;i.U_.set(u,p.withResumeToken(Ye.EMPTY_BYTE_STRING,p.snapshotVersion)),pp(i,u);const f=new Vn(p.target,u,h,p.sequenceNumber);_c(i,f)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$(fr,"Failed to raise snapshot:",r),await zi(n,r)}}async function zi(n,e,t){if(!Wr(e))throw e;n.W_.add(1),await Fs(n),n.j_.set("Offline"),t||(t=()=>up(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(fr,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await po(n)})}function gp(n,e){return e().catch(t=>zi(n,t,e))}async function mo(n){const e=te(n),t=Hn(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:nc;for(;VI(e);)try{const s=await pI(e.localStore,r);if(s===null){e.K_.length===0&&t.P_();break}r=s.batchId,xI(e,s)}catch(s){await zi(e,s)}_p(e)&&yp(e)}function VI(n){return yr(n)&&n.K_.length<10}function xI(n,e){n.K_.push(e);const t=Hn(n);t.c_()&&t.b_&&t.S_(e.mutations)}function _p(n){return yr(n)&&!Hn(n).u_()&&n.K_.length>0}function yp(n){Hn(n).start()}async function OI(n){Hn(n).C_()}async function LI(n){const e=Hn(n);for(const t of n.K_)e.S_(t.mutations)}async function MI(n,e,t){const r=n.K_.shift(),s=lc.from(r,e,t);await gp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await mo(n)}async function FI(n,e){e&&Hn(n).b_&&await async function(r,s){if(function(a){return vw(a)&&a!==x.ABORTED}(s.code)){const i=r.K_.shift();Hn(r).h_(),await gp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mo(r)}}(n,e),_p(n)&&yp(n)}async function eh(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),$(fr,"RemoteStore received new credentials");const r=yr(t);t.W_.add(3),await Fs(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await po(t)}async function UI(n,e){const t=te(n);e?(t.W_.delete(2),await po(t)):e||(t.W_.add(2),await Fs(t),t.j_.set("Unknown"))}function Kr(n){return n.J_||(n.J_=function(t,r,s){const i=te(t);return i.M_(),new II(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:PI.bind(null,n),No:kI.bind(null,n),Lo:DI.bind(null,n),p_:NI.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),vc(n)?yc(n):n.j_.set("Unknown")):(await n.J_.stop(),mp(n))})),n.J_}function Hn(n){return n.Y_||(n.Y_=function(t,r,s){const i=te(t);return i.M_(),new bI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:OI.bind(null,n),Lo:FI.bind(null,n),D_:LI.bind(null,n),v_:MI.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await mo(n)):(await n.Y_.stop(),n.K_.length>0&&($(fr,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class Tc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Tc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ec(n,e){if(hn("AsyncQueue",`${e}: ${n}`),Wr(n))return new W(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=cs(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class th{constructor(){this.Z_=new Re(K.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):X():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class jr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new jr(e,t,Or.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class BI{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class jI{constructor(){this.queries=nh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=te(t),i=s.queries;s.queries=nh(),i.forEach((a,c)=>{for(const u of c.ta)u.onError(r)})})(this,new W(x.ABORTED,"Firestore shutting down"))}}function nh(){return new _r(n=>Ff(n),ao)}async function $I(n,e){const t=te(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new BI,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ec(a,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&wc(t)}async function qI(n,e){const t=te(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function HI(n,e){const t=te(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&wc(t)}function zI(n,e,t){const r=te(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function wc(n){n.ia.forEach(e=>{e.next()})}var ba,rh;(rh=ba||(ba={}))._a="default",rh.Cache="cache";class WI{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ba.Cache}}/**
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
 */class vp{constructor(e){this.key=e}}class Tp{constructor(e){this.key=e}}class KI{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ce(),this.mutatedKeys=ce(),this.ya=Uf(e),this.wa=new Or(this.ya)}get ba(){return this.fa}Sa(e,t){const r=t?t.Da:new th,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,f)=>{const w=s.get(p),S=co(this.query,f)?f:null,D=!!w&&this.mutatedKeys.has(w.key),M=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;w&&S?w.data.isEqual(S.data)?D!==M&&(r.track({type:3,doc:S}),P=!0):this.va(w,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.ya(S,u)>0||h&&this.ya(S,h)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),P=!0):w&&!S&&(r.track({type:1,doc:w}),P=!0,(u||h)&&(c=!0)),P&&(S?(a=a.add(S),i=M?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:c,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((p,f)=>function(S,D){const M=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return M(S)-M(D)}(p.type,f.type)||this.ya(p.doc,f.doc)),this.Ca(r),s=s!=null&&s;const c=t&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,h=u!==this.ga;return this.ga=u,a.length!==0||h?{snapshot:new jr(this.query,e.wa,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new th,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ce(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Tp(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new vp(r))}),t}Oa(e){this.fa=e.gs,this.pa=ce();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return jr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ic="SyncEngine";class GI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QI{constructor(e){this.key=e,this.Ba=!1}}class YI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new _r(c=>Ff(c),ao),this.qa=new Map,this.Qa=new Set,this.$a=new Re(K.comparator),this.Ka=new Map,this.Ua=new dc,this.Wa={},this.Ga=new Map,this.za=Br.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function XI(n,e,t=!0){const r=Rp(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Ep(r,e,t,!0),s}async function JI(n,e){const t=Rp(n);await Ep(t,e,!0,!1)}async function Ep(n,e,t,r){const s=await mI(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await ZI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&fp(n.remoteStore,s),c}async function ZI(n,e,t,r,s){n.Ha=(f,w,S)=>async function(M,P,q,U){let H=P.view.Sa(q);H.ls&&(H=await Qu(M.localStore,P.query,!1).then(({documents:b})=>P.view.Sa(b,H)));const G=U&&U.targetChanges.get(P.targetId),Q=U&&U.targetMismatches.get(P.targetId)!=null,ie=P.view.applyChanges(H,M.isPrimaryClient,G,Q);return ih(M,P.targetId,ie.Ma),ie.snapshot}(n,f,w,S);const i=await Qu(n.localStore,e,!0),a=new KI(e,i.gs),c=a.Sa(i.documents),u=Ms.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);ih(n,t,h.Ma);const p=new GI(e,t,a);return n.ka.set(e,p),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),h.snapshot}async function eb(n,e,t){const r=te(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ao(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&gc(r.remoteStore,s.targetId),Aa(r,s.targetId)}).catch(zr)):(Aa(r,s.targetId),await wa(r.localStore,s.targetId,!0))}async function tb(n,e){const t=te(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gc(t.remoteStore,r.targetId))}async function nb(n,e,t){const r=lb(n);try{const s=await function(a,c){const u=te(a),h=Be.now(),p=c.reduce((S,D)=>S.add(D.key),ce());let f,w;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=dn(),M=ce();return u.ds.getEntries(S,p).next(P=>{D=P,D.forEach((q,U)=>{U.isValidDocument()||(M=M.add(q))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,D)).next(P=>{f=P;const q=[];for(const U of c){const H=pw(U,f.get(U.key).overlayedDocument);H!=null&&q.push(new Qn(U.key,H,Df(H.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,q,c)}).next(P=>{w=P;const q=P.applyToLocalDocumentSet(f,M);return u.documentOverlayCache.saveOverlays(S,P.batchId,q)})}).then(()=>({batchId:w.batchId,changes:jf(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Wa[a.currentUser.toKey()];h||(h=new Re(le)),h=h.insert(c,u),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,t),await Us(r,s.changes),await mo(r.remoteStore)}catch(s){const i=Ec(s,"Failed to persist write");t.reject(i)}}async function wp(n,e){const t=te(n);try{const r=await dI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ka.get(i);a&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?ge(a.Ba):s.removedDocuments.size>0&&(ge(a.Ba),a.Ba=!1))}),await Us(t,r,e)}catch(r){await zr(r)}}function sh(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const c=a.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=te(a);u.onlineState=c;let h=!1;u.queries.forEach((p,f)=>{for(const w of f.ta)w.sa(c)&&(h=!0)}),h&&wc(u)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rb(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ka.get(e),i=s&&s.key;if(i){let a=new Re(K.comparator);a=a.insert(i,nt.newNoDocument(i,Z.min()));const c=ce().add(i),u=new ho(Z.min(),new Map,new Re(le),a,c);await wp(r,u),r.$a=r.$a.remove(i),r.Ka.delete(e),bc(r)}else await wa(r.localStore,e,!1).then(()=>Aa(r,e,t)).catch(zr)}async function sb(n,e){const t=te(n),r=e.batch.batchId;try{const s=await hI(t.localStore,e);bp(t,r,null),Ip(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Us(t,s)}catch(s){await zr(s)}}async function ib(n,e,t){const r=te(n);try{const s=await function(a,c){const u=te(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,c).next(f=>(ge(f!==null),p=f.keys(),u.mutationQueue.removeMutationBatch(h,f))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);bp(r,e,t),Ip(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Us(r,s)}catch(s){await zr(s)}}function Ip(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function bp(n,e,t){const r=te(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Aa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.Sr(e).forEach(r=>{n.Ua.containsKey(r)||Ap(n,r)})}function Ap(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(gc(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),bc(n))}function ih(n,e,t){for(const r of t)r instanceof vp?(n.Ua.addReference(r.key,e),ob(n,r)):r instanceof Tp?($(Ic,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||Ap(n,r.key)):X()}function ob(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||($(Ic,"New document in limbo: "+t),n.Qa.add(r),bc(n))}function bc(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new K(Ie.fromString(e)),r=n.za.next();n.Ka.set(r,new QI(t)),n.$a=n.$a.insert(t,r),fp(n.remoteStore,new Vn(Kt(ac(t.path)),r,"TargetPurposeLimboResolution",ro.ae))}}async function Us(n,e,t){const r=te(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{a.push(r.Ha(u,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=pc.Yi(u.targetId,h);i.push(f)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,h){const p=te(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(h,w=>N.forEach(w.Hi,S=>p.persistence.referenceDelegate.addReference(f,w.targetId,S)).next(()=>N.forEach(w.Ji,S=>p.persistence.referenceDelegate.removeReference(f,w.targetId,S)))))}catch(f){if(!Wr(f))throw f;$(mc,"Failed to update sequence numbers: "+f)}for(const f of h){const w=f.targetId;if(!f.fromCache){const S=p.Ts.get(w),D=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(D);p.Ts=p.Ts.insert(w,M)}}}(r.localStore,i))}async function ab(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){$(Ic,"User change. New user:",e.toKey());const r=await lp(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(c=>{c.forEach(u=>{u.reject(new W(x.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Us(t,r.Rs)}}function cb(n,e){const t=te(n),r=t.Ka.get(e);if(r&&r.Ba)return ce().add(r.key);{let s=ce();const i=t.qa.get(e);if(!i)return s;for(const a of i){const c=t.ka.get(a);s=s.unionWith(c.view.ba)}return s}}function Rp(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rb.bind(null,e),e.La.p_=HI.bind(null,e.eventManager),e.La.Ja=zI.bind(null,e.eventManager),e}function lb(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ib.bind(null,e),e}class Wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fo(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return uI(this.persistence,new aI,e.initialUser,this.serializer)}Xa(e){return new cp(fc.ri,this.serializer)}Za(e){return new _I}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wi.provider={build:()=>new Wi};class ub extends Wi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ge(this.persistence.referenceDelegate instanceof Hi);const r=this.persistence.referenceDelegate.garbageCollector;return new Ww(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new cp(r=>Hi.ri(r,t),this.serializer)}}class Ra{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ab.bind(null,this.syncEngine),await UI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jI}()}createDatastore(e){const t=fo(e.databaseInfo.databaseId),r=function(i){return new wI(i)}(e.databaseInfo);return function(i,a,c,u){return new RI(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new CI(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>sh(this.syncEngine,t,0),function(){return Ju.D()?new Ju:new yI}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,p){const f=new YI(s,i,a,c,u,h);return p&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=te(s);$(fr,"RemoteStore shutting down."),i.W_.add(5),await Fs(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ra.provider={build:()=>new Ra};/**
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
 */class hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zn="FirestoreClient";class db{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{$(zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($(zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ec(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jo(n,e){n.asyncQueue.verifyOperationInProgress(),$(zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function oh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fb(n);$(zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>eh(e.remoteStore,s)),n._onlineComponents=e}async function fb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(zn,"Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Jo(n,new Wi)}}else $(zn,"Using default OfflineComponentProvider"),await Jo(n,new ub(void 0));return n._offlineComponents}async function Sp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(zn,"Using user provided OnlineComponentProvider"),await oh(n,n._uninitializedComponentsProvider._online)):($(zn,"Using default OnlineComponentProvider"),await oh(n,new Ra))),n._onlineComponents}function pb(n){return Sp(n).then(e=>e.syncEngine)}async function mb(n){const e=await Sp(n),t=e.eventManager;return t.onListen=XI.bind(null,e.syncEngine),t.onUnlisten=eb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tb.bind(null,e.syncEngine),t}function gb(n,e,t={}){const r=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const p=new hb({next:w=>{p.su(),a.enqueueAndForget(()=>qI(i,f));const S=w.docs.has(c);!S&&w.fromCache?h.reject(new W(x.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&u&&u.source==="server"?h.reject(new W(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),f=new WI(ac(c.path),p,{includeMetadataChanges:!0,Ta:!0});return $I(i,f)}(await mb(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ah=new Map;/**
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
 */function Pp(n,e,t){if(!t)throw new W(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _b(n,e,t,r){if(e===!0&&r===!0)throw new W(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ch(n){if(!K.isDocumentKey(n))throw new W(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lh(n){if(K.isDocumentKey(n))throw new W(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ac(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X()}function Wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ac(n);throw new W(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const kp="firestore.googleapis.com",uh=!0;class hh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kp,this.ssl=uh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:uh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ap;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hw)throw new W(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_b("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vE;switch(r.type){case"firstParty":return new IE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ah.get(t);r&&($("ComponentProvider","Removing Datastore"),ah.delete(t),r.terminate())}(this),Promise.resolve()}}function yb(n,e,t,r={}){var s;const i=(n=Wn(n,go))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i.host!==kp&&i.host!==c&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Un(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=tt.MOCK_USER;else{h=td(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new W(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new tt(f)}n._authCredentials=new TE(new Tf(h,p))}}/**
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
 */class Rc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rc(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Fn extends Rc{constructor(e,t,r){super(e,t,ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new K(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function zA(n,e,...t){if(n=Ae(n),Pp("collection","path",e),n instanceof go){const r=Ie.fromString(e,...t);return lh(r),new Fn(n,null,r)}{if(!(n instanceof vt||n instanceof Fn))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return lh(r),new Fn(n.firestore,null,r)}}function vb(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Ef.newId()),Pp("doc","path",e),n instanceof go){const r=Ie.fromString(e,...t);return ch(r),new vt(n,null,new K(r))}{if(!(n instanceof vt||n instanceof Fn))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return ch(r),new vt(n.firestore,n instanceof Fn?n.converter:null,new K(r))}}/**
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
 */const dh="AsyncQueue";class fh{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new hp(this,"async_queue_retry"),this.bu=()=>{const r=Xo();r&&$(dh,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=Xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Mn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Wr(e))throw e;$(dh,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Tc.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&X()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Bs extends go{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new fh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fh(e),this._firestoreClient=void 0,await e}}}function Tb(n,e){const t=typeof n=="object"?n:Xi(),r=typeof n=="string"?n:Fi,s=Kn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jh("firestore");i&&yb(s,...i)}return s}function Dp(n){if(n._terminated)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Eb(n),n._firestoreClient}function Eb(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,h,p){return new ME(c,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Cp(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new db(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r(Ye.fromBase64String(e))}catch(t){throw new W(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $r(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _o{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yo{constructor(e){this._methodName=e}}/**
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
 */class Sc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class Cc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const wb=/^__.*__$/;class Ib{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ls(e,this.data,t,this.fieldTransforms)}}class Np{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Pc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Pc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ki(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Vp(this.Lu)&&wb.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class bb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fo(e)}ju(e,t,r,s=!1){return new Pc({Lu:e,methodName:t,zu:r,path:Qe.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kc(n){const e=n._freezeSettings(),t=fo(n._databaseId);return new bb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xp(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);Nc("Data must be an object, but it was:",a,r);const c=Op(r,a);let u,h;if(i.merge)u=new It(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const f of i.mergeFields){const w=Sa(e,f,t);if(!a.contains(w))throw new W(x.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Mp(p,w)||p.push(w)}u=new It(p),h=a.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,h=a.fieldTransforms;return new Ib(new gt(c),u,h)}class vo extends yo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vo}}class Dc extends yo{_toFieldTransform(e){return new uw(e.path,new Rs)}isEqual(e){return e instanceof Dc}}function Ab(n,e,t,r){const s=n.ju(1,e,t);Nc("Data must be an object, but it was:",s,r);const i=[],a=gt.empty();Gn(r,(u,h)=>{const p=Vc(e,u,t);h=Ae(h);const f=s.Ku(p);if(h instanceof vo)i.push(p);else{const w=To(h,f);w!=null&&(i.push(p),a.set(p,w))}});const c=new It(i);return new Np(a,c,s.fieldTransforms)}function Rb(n,e,t,r,s,i){const a=n.ju(1,e,t),c=[Sa(e,r,t)],u=[s];if(i.length%2!=0)throw new W(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push(Sa(e,i[w])),u.push(i[w+1]);const h=[],p=gt.empty();for(let w=c.length-1;w>=0;--w)if(!Mp(h,c[w])){const S=c[w];let D=u[w];D=Ae(D);const M=a.Ku(S);if(D instanceof vo)h.push(S);else{const P=To(D,M);P!=null&&(h.push(S),p.set(S,P))}}const f=new It(h);return new Np(p,f,a.fieldTransforms)}function To(n,e){if(Lp(n=Ae(n)))return Nc("Unsupported field value:",e,n),Op(n,e);if(n instanceof yo)return function(r,s){if(!Vp(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=To(c,s.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:qi(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(s.serializer,i)}}if(r instanceof Sc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $r)return{bytesValue:ep(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cc)return function(a,c){return{mapValue:{fields:{[Pf]:{stringValue:kf},[Ui]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return cc(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Ac(r)}`)}(n,e)}function Op(n,e){const t={};return If(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(r,s)=>{const i=To(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Lp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Sc||n instanceof $r||n instanceof vt||n instanceof yo||n instanceof Cc)}function Nc(n,e,t){if(!Lp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ac(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Sa(n,e,t){if((e=Ae(e))instanceof _o)return e._internalPath;if(typeof e=="string")return Vc(n,e);throw Ki("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sb=new RegExp("[~\\*/\\[\\]]");function Vc(n,e,t){if(e.search(Sb)>=0)throw Ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _o(...e.split("."))._internalPath}catch{throw Ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ki(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new W(x.INVALID_ARGUMENT,c+n+u)}function Mp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Fp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Up("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Cb extends Fp{data(){return super.data()}}function Up(n,e){return typeof e=="string"?Vc(n,e):e instanceof _o?e._internalPath:e._delegate._internalPath}class Pb{convertValue(e,t="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ui].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new Cc(i)}convertGeoPoint(e){return new Sc(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=io(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const t=jn(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ie.fromString(e);ge(op(r));const s=new bs(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(t)||hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Bp(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class kb{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jp extends Fp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Db(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Db extends jp{data(e={}){return super.data(e)}}/**
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
 */function WA(n){n=Wn(n,vt);const e=Wn(n.firestore,Bs);return gb(Dp(e),n._key).then(t=>Vb(e,n,t))}class Nb extends Pb{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function KA(n,e,t){n=Wn(n,vt);const r=Wn(n.firestore,Bs),s=Bp(n.converter,e);return xc(r,[xp(kc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Mt.none())])}function GA(n,e,t,...r){n=Wn(n,vt);const s=Wn(n.firestore,Bs),i=kc(s);let a;return a=typeof(e=Ae(e))=="string"||e instanceof _o?Rb(i,"updateDoc",n._key,e,t,r):Ab(i,"updateDoc",n._key,e),xc(s,[a.toMutation(n._key,Mt.exists(!0))])}function QA(n,e){const t=Wn(n.firestore,Bs),r=vb(n),s=Bp(n.converter,e);return xc(t,[xp(kc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function xc(n,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>nb(await pb(r),s,i)),i.promise}(Dp(n),e)}function Vb(n,e,t){const r=t.docs.get(e._key),s=new Nb(n);return new jp(n,s,e._key,r,new kb(t.hasPendingWrites,t.fromCache),e.converter)}function YA(){return new Dc("serverTimestamp")}(function(e,t=!0){(function(s){Hr=s})(gr),Ft(new Pt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Bs(new EE(r.getProvider("auth-internal")),new bE(a,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(h.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),_t(Tu,Eu,e),_t(Tu,Eu,"esm2017")})();/**
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
 */const $p="firebasestorage.googleapis.com",qp="storageBucket",xb=2*60*1e3,Ob=10*60*1e3;/**
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
 */class Pe extends Dt{constructor(e,t,r=0){super(Zo(e),`Firebase Storage: ${t} (${Zo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function Zo(n){return"storage/"+n}function Oc(){const n="An unknown error occurred, please check the error payload for server response.";return new Pe(Ce.UNKNOWN,n)}function Lb(n){return new Pe(Ce.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Mb(n){return new Pe(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Ce.UNAUTHENTICATED,n)}function Ub(){return new Pe(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Bb(n){return new Pe(Ce.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jb(){return new Pe(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $b(){return new Pe(Ce.CANCELED,"User canceled the upload/download.")}function qb(n){return new Pe(Ce.INVALID_URL,"Invalid URL '"+n+"'.")}function Hb(n){return new Pe(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zb(){return new Pe(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qp+"' property when initializing the app?")}function Wb(){return new Pe(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kb(){return new Pe(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gb(n){return new Pe(Ce.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ca(n){return new Pe(Ce.INVALID_ARGUMENT,n)}function Hp(){return new Pe(Ce.APP_DELETED,"The Firebase app was deleted.")}function Qb(n){return new Pe(Ce.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ys(n,e){return new Pe(Ce.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ss(n){throw new Pe(Ce.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class bt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=bt.makeFromUrl(e,t)}catch{return new bt(e,"")}if(r.path==="")return r;throw Hb(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(G){G.path_=decodeURIComponent(G.path)}const p="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",S=new RegExp(`^https?://${f}/${p}/b/${s}/o${w}`,"i"),D={bucket:1,path:3},M=t===$p?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",q=new RegExp(`^https?://${M}/${s}/${P}`,"i"),H=[{regex:c,indices:u,postModify:i},{regex:S,indices:D,postModify:h},{regex:q,indices:{bucket:1,path:2},postModify:h}];for(let G=0;G<H.length;G++){const Q=H[G],ie=Q.regex.exec(e);if(ie){const b=ie[Q.indices.bucket];let _=ie[Q.indices.path];_||(_=""),r=new bt(b,_),Q.postModify(r);break}}if(r==null)throw qb(e);return r}}class Yb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Xb(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let h=!1;function p(...P){h||(h=!0,e.apply(null,P))}function f(P){s=setTimeout(()=>{s=null,n(S,u())},P)}function w(){i&&clearTimeout(i)}function S(P,...q){if(h){w();return}if(P){w(),p.call(null,P,...q);return}if(u()||a){w(),p.call(null,P,...q);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,f(H)}let D=!1;function M(P){D||(D=!0,w(),!h&&(s!==null?(P||(c=2),clearTimeout(s),f(0)):P||(c=1)))}return f(0),i=setTimeout(()=>{a=!0,M(!0)},t),M}function Jb(n){n(!1)}/**
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
 */function Zb(n){return n!==void 0}function e0(n){return typeof n=="object"&&!Array.isArray(n)}function Lc(n){return typeof n=="string"||n instanceof String}function ph(n){return Mc()&&n instanceof Blob}function Mc(){return typeof Blob<"u"}function mh(n,e,t,r){if(r<e)throw Ca(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ca(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Fc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function zp(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ar;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ar||(ar={}));/**
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
 */function t0(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class n0{constructor(e,t,r,s,i,a,c,u,h,p,f,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=f,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,D)=>{this.resolve_=S,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ui(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ar.NO_ERROR,u=i.getStatus();if(!c||t0(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===ar.ABORT;r(!1,new ui(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ui(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());Zb(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=Oc();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Hp():$b();a(u)}else{const u=jb();a(u)}};this.canceled_?t(!1,new ui(!1,null,!0)):this.backoffId_=Xb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ui{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function r0(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function s0(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function i0(n,e){e&&(n["X-Firebase-GMPID"]=e)}function o0(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function a0(n,e,t,r,s,i,a=!0){const c=zp(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return i0(h,e),r0(h,t),s0(h,i),o0(h,r),new n0(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
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
 */function c0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function l0(...n){const e=c0();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Mc())return new Blob(n);throw new Pe(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function u0(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function h0(n){if(typeof atob>"u")throw Gb("base-64");return atob(n)}/**
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
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ea{constructor(e,t){this.data=e,this.contentType=t||null}}function d0(n,e){switch(n){case zt.RAW:return new ea(Wp(e));case zt.BASE64:case zt.BASE64URL:return new ea(Kp(n,e));case zt.DATA_URL:return new ea(p0(e),m0(e))}throw Oc()}function Wp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function f0(n){let e;try{e=decodeURIComponent(n)}catch{throw ys(zt.DATA_URL,"Malformed data URL.")}return Wp(e)}function Kp(n,e){switch(n){case zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ys(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ys(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=h0(e)}catch(s){throw s.message.includes("polyfill")?s:ys(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Gp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ys(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=g0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function p0(n){const e=new Gp(n);return e.base64?Kp(zt.BASE64,e.rest):f0(e.rest)}function m0(n){return new Gp(n).contentType}function g0(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Nn{constructor(e,t){let r=0,s="";ph(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ph(this.data_)){const r=this.data_,s=u0(r,e,t);return s===null?null:new Nn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Nn(r,!0)}}static getBlob(...e){if(Mc()){const t=e.map(r=>r instanceof Nn?r.data_:r);return new Nn(l0.apply(null,t))}else{const t=e.map(a=>Lc(a)?d0(zt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Nn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Qp(n){let e;try{e=JSON.parse(n)}catch{return null}return e0(e)?e:null}/**
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
 */function _0(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function y0(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Yp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function v0(n,e){return e}class ot{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||v0}}let hi=null;function T0(n){return!Lc(n)||n.length<2?n:Yp(n)}function Xp(){if(hi)return hi;const n=[];n.push(new ot("bucket")),n.push(new ot("generation")),n.push(new ot("metageneration")),n.push(new ot("name","fullPath",!0));function e(i,a){return T0(a)}const t=new ot("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new ot("size");return s.xform=r,n.push(s),n.push(new ot("timeCreated")),n.push(new ot("updated")),n.push(new ot("md5Hash",null,!0)),n.push(new ot("cacheControl",null,!0)),n.push(new ot("contentDisposition",null,!0)),n.push(new ot("contentEncoding",null,!0)),n.push(new ot("contentLanguage",null,!0)),n.push(new ot("contentType",null,!0)),n.push(new ot("metadata","customMetadata",!0)),hi=n,hi}function E0(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new bt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function w0(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return E0(r,n),r}function Jp(n,e,t){const r=Qp(e);return r===null?null:w0(n,r,t)}function I0(n,e,t,r){const s=Qp(e);if(s===null||!Lc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const p=n.bucket,f=n.fullPath,w="/b/"+a(p)+"/o/"+a(f),S=Fc(w,t,r),D=zp({alt:"media",token:h});return S+D})[0]}function b0(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Zp{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function em(n){if(!n)throw Oc()}function A0(n,e){function t(r,s){const i=Jp(n,s,e);return em(i!==null),i}return t}function R0(n,e){function t(r,s){const i=Jp(n,s,e);return em(i!==null),I0(i,s,n.host,n._protocol)}return t}function tm(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Ub():s=Fb():t.getStatus()===402?s=Mb(n.bucket):t.getStatus()===403?s=Bb(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function S0(n){const e=tm(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Lb(n.path)),i.serverResponse=s.serverResponse,i}return t}function C0(n,e,t){const r=e.fullServerUrl(),s=Fc(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Zp(s,i,R0(n,t),a);return c.errorHandler=S0(e),c}function P0(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function k0(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=P0(null,e)),r}function D0(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let H="";for(let G=0;G<2;G++)H=H+Math.random().toString().slice(2);return H}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const h=k0(e,r,s),p=b0(h,t),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+u+"--",S=Nn.getBlob(f,r,w);if(S===null)throw Wb();const D={name:h.fullPath},M=Fc(i,n.host,n._protocol),P="POST",q=n.maxUploadRetryTime,U=new Zp(M,P,A0(n,t),q);return U.urlParams=D,U.headers=a,U.body=S.uploadData(),U.errorHandler=tm(e),U}class N0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class V0 extends N0{initXhr(){this.xhr_.responseType="text"}}function nm(){return new V0}/**
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
 */class pr{constructor(e,t){this._service=e,t instanceof bt?this._location=t:this._location=bt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new pr(e,t)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yp(this._location.path)}get storage(){return this._service}get parent(){const e=_0(this._location.path);if(e===null)return null;const t=new bt(this._location.bucket,e);return new pr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Qb(e)}}function x0(n,e,t){n._throwIfRoot("uploadBytes");const r=D0(n.storage,n._location,Xp(),new Nn(e,!0),t);return n.storage.makeRequestWithTokens(r,nm).then(s=>({metadata:s,ref:n}))}function O0(n){n._throwIfRoot("getDownloadURL");const e=C0(n.storage,n._location,Xp());return n.storage.makeRequestWithTokens(e,nm).then(t=>{if(t===null)throw Kb();return t})}function L0(n,e){const t=y0(n._location.path,e),r=new bt(n._location.bucket,t);return new pr(n.storage,r)}/**
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
 */function M0(n){return/^[A-Za-z]+:\/\//.test(n)}function F0(n,e){return new pr(n,e)}function rm(n,e){if(n instanceof Uc){const t=n;if(t._bucket==null)throw zb();const r=new pr(t,t._bucket);return e!=null?rm(r,e):r}else return e!==void 0?L0(n,e):n}function U0(n,e){if(e&&M0(e)){if(n instanceof Uc)return F0(n,e);throw Ca("To use ref(service, url), the first argument must be a Storage instance.")}else return rm(n,e)}function gh(n,e){const t=e==null?void 0:e[qp];return t==null?null:bt.makeFromBucketSpec(t,n)}function B0(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:td(s,n.app.options.projectId))}class Uc{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=$p,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xb,this._maxUploadRetryTime=Ob,this._requests=new Set,s!=null?this._bucket=bt.makeFromBucketSpec(s,this._host):this._bucket=gh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=gh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Yb(Hp());{const a=a0(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const _h="@firebase/storage",yh="0.13.7";/**
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
 */const sm="storage";function XA(n,e,t){return n=Ae(n),x0(n,e,t)}function JA(n){return n=Ae(n),O0(n)}function ZA(n,e){return n=Ae(n),U0(n,e)}function j0(n=Xi(),e){n=Ae(n);const r=Kn(n,sm).getImmediate({identifier:e}),s=Jh("storage");return s&&$0(r,...s),r}function $0(n,e,t,r={}){B0(n,e,t,r)}function q0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Uc(t,r,s,e,gr)}function H0(){Ft(new Pt(sm,q0,"PUBLIC").setMultipleInstances(!0)),_t(_h,yh,""),_t(_h,yh,"esm2017")}H0();const z0={apiKey:"AIzaSyDSpR59UMQiiurZi8Xfcx1XK07XxnsfzA4",authDomain:"bailamos-7ca0a.firebaseapp.com",projectId:"bailamos-7ca0a",storageBucket:"bailamos-7ca0a.firebasestorage.app",messagingSenderId:"699079333565",appId:"1:699079333565:web:379fecc565baed3e8709d4",measurementId:"G-8EH4DY8MEQ"},Eo=cd(z0);mE(Eo);const eR=Jv(Eo),tR=Tb(Eo),nR=j0(Eo);var W0=(n,e,t,r,s,i,a,c)=>{let u=document.documentElement,h=["light","dark"];function p(S){(Array.isArray(n)?n:[n]).forEach(D=>{let M=D==="class",P=M&&i?s.map(q=>i[q]||q):s;M?(u.classList.remove(...P),u.classList.add(i[S]||S)):u.setAttribute(D,S)}),f(S)}function f(S){c&&h.includes(S)&&(u.style.colorScheme=S)}function w(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(r)p(r);else try{let S=localStorage.getItem(e)||t,D=a&&S==="system"?w():S;p(D)}catch{}},K0=Ot.createContext(void 0),G0={setTheme:n=>{},themes:[]},rR=()=>{var n;return(n=Ot.useContext(K0))!=null?n:G0};Ot.memo(({forcedTheme:n,storageKey:e,attribute:t,enableSystem:r,enableColorScheme:s,defaultTheme:i,value:a,themes:c,nonce:u,scriptProps:h})=>{let p=JSON.stringify([t,e,i,n,c,a,r,s]).slice(1,-1);return Ot.createElement("script",{...h,suppressHydrationWarning:!0,nonce:typeof window>"u"?u:"",dangerouslySetInnerHTML:{__html:`(${W0.toString()})(${p})`}})});function Q0(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}const Y0=n=>{switch(n){case"success":return Z0;case"info":return tA;case"warning":return eA;case"error":return nA;default:return null}},X0=Array(12).fill(0),J0=({visible:n,className:e})=>V.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},V.createElement("div",{className:"sonner-spinner"},X0.map((t,r)=>V.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Z0=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),eA=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),tA=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),nA=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},V.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),rA=V.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},V.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),sA=()=>{const[n,e]=V.useState(document.hidden);return V.useEffect(()=>{const t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};let Pa=1;class iA{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;const{message:r,...s}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Pa++,a=this.toasts.find(u=>u.id===i),c=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),a?this.toasts=this.toasts.map(u=>u.id===i?(this.publish({...u,...e,id:i,title:r}),{...u,...e,id:i,dismissible:c,title:r}):u):this.addToast({title:r,...s,dismissible:c,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0}))),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));const s=Promise.resolve(e instanceof Function?e():e);let i=r!==void 0,a;const c=s.then(async h=>{if(a=["resolve",h],V.isValidElement(h))i=!1,this.create({id:r,type:"default",message:h});else if(aA(h)&&!h.ok){i=!1;const f=typeof t.error=="function"?await t.error(`HTTP error! status: ${h.status}`):t.error,w=typeof t.description=="function"?await t.description(`HTTP error! status: ${h.status}`):t.description,S=typeof f=="object"?f:{message:f};this.create({id:r,type:"error",description:w,...S})}else if(h instanceof Error){i=!1;const f=typeof t.error=="function"?await t.error(h):t.error,w=typeof t.description=="function"?await t.description(h):t.description,S=typeof f=="object"?f:{message:f};this.create({id:r,type:"error",description:w,...S})}else if(t.success!==void 0){i=!1;const f=typeof t.success=="function"?await t.success(h):t.success,w=typeof t.description=="function"?await t.description(h):t.description,S=typeof f=="object"?f:{message:f};this.create({id:r,type:"success",description:w,...S})}}).catch(async h=>{if(a=["reject",h],t.error!==void 0){i=!1;const p=typeof t.error=="function"?await t.error(h):t.error,f=typeof t.description=="function"?await t.description(h):t.description,w=typeof p=="object"?p:{message:p};this.create({id:r,type:"error",description:f,...w})}}).finally(()=>{i&&(this.dismiss(r),r=void 0),t.finally==null||t.finally.call(t)}),u=()=>new Promise((h,p)=>c.then(()=>a[0]==="reject"?p(a[1]):h(a[1])).catch(p));return typeof r!="string"&&typeof r!="number"?{unwrap:u}:Object.assign(r,{unwrap:u})},this.custom=(e,t)=>{const r=(t==null?void 0:t.id)||Pa++;return this.create({jsx:e(r),id:r,...t}),r},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ft=new iA,oA=(n,e)=>{const t=(e==null?void 0:e.id)||Pa++;return ft.addToast({title:n,...e,id:t}),t},aA=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",cA=oA,lA=()=>ft.toasts,uA=()=>ft.getActiveToasts(),sR=Object.assign(cA,{success:ft.success,info:ft.info,warning:ft.warning,error:ft.error,custom:ft.custom,message:ft.message,promise:ft.promise,dismiss:ft.dismiss,loading:ft.loading},{getHistory:lA,getToasts:uA});Q0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function di(n){return n.label!==void 0}const hA=3,dA="24px",fA="16px",vh=4e3,pA=356,mA=14,gA=45,_A=200;function jt(...n){return n.filter(Boolean).join(" ")}function yA(n){const[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}const vA=n=>{var e,t,r,s,i,a,c,u,h;const{invert:p,toast:f,unstyled:w,interacting:S,setHeights:D,visibleToasts:M,heights:P,index:q,toasts:U,expanded:H,removeToast:G,defaultRichColors:Q,closeButton:ie,style:b,cancelButtonStyle:_,actionButtonStyle:y,className:T="",descriptionClassName:I="",duration:E,position:g,gap:de,expandByDefault:fe,classNames:J,icons:_e,closeButtonAriaLabel:ke="Close toast"}=n,[De,ct]=V.useState(null),[me,ue]=V.useState(null),[ne,ze]=V.useState(!1),[st,ye]=V.useState(!1),[Tt,Rt]=V.useState(!1),[Ut,St]=V.useState(!1),[Jt,gn]=V.useState(!1),[_n,Bt]=V.useState(0),[vr,Tr]=V.useState(0),yn=V.useRef(f.duration||E||vh),v=V.useRef(null),R=V.useRef(null),k=q===0,j=q+1<=M,L=f.type,O=f.dismissible!==!1,z=f.className||"",re=f.descriptionClassName||"",se=V.useMemo(()=>P.findIndex(ee=>ee.toastId===f.id)||0,[P,f.id]),oe=V.useMemo(()=>{var ee;return(ee=f.closeButton)!=null?ee:ie},[f.closeButton,ie]),Xe=V.useMemo(()=>f.duration||E||vh,[f.duration,E]),vn=V.useRef(0),Et=V.useRef(0),Tn=V.useRef(0),lt=V.useRef(null),[Yn,Er]=g.split("-"),Zt=V.useMemo(()=>P.reduce((ee,Ee,Me)=>Me>=se?ee:ee+Ee.height,0),[P,se]),js=sA(),wo=f.invert||p,Xn=L==="loading";Et.current=V.useMemo(()=>se*de+Zt,[se,Zt]),V.useEffect(()=>{yn.current=Xe},[Xe]),V.useEffect(()=>{ze(!0)},[]),V.useEffect(()=>{const ee=R.current;if(ee){const Ee=ee.getBoundingClientRect().height;return Tr(Ee),D(Me=>[{toastId:f.id,height:Ee,position:f.position},...Me]),()=>D(Me=>Me.filter(qe=>qe.toastId!==f.id))}},[D,f.id]),V.useLayoutEffect(()=>{if(!ne)return;const ee=R.current,Ee=ee.style.height;ee.style.height="auto";const Me=ee.getBoundingClientRect().height;ee.style.height=Ee,Tr(Me),D(qe=>qe.find(be=>be.toastId===f.id)?qe.map(be=>be.toastId===f.id?{...be,height:Me}:be):[{toastId:f.id,height:Me,position:f.position},...qe])},[ne,f.title,f.description,D,f.id]);const Nt=V.useCallback(()=>{ye(!0),Bt(Et.current),D(ee=>ee.filter(Ee=>Ee.toastId!==f.id)),setTimeout(()=>{G(f)},_A)},[f,G,D,Et]);V.useEffect(()=>{if(f.promise&&L==="loading"||f.duration===1/0||f.type==="loading")return;let ee;return H||S||js?(()=>{if(Tn.current<vn.current){const qe=new Date().getTime()-vn.current;yn.current=yn.current-qe}Tn.current=new Date().getTime()})():(()=>{yn.current!==1/0&&(vn.current=new Date().getTime(),ee=setTimeout(()=>{f.onAutoClose==null||f.onAutoClose.call(f,f),Nt()},yn.current))})(),()=>clearTimeout(ee)},[H,S,f,L,js,Nt]),V.useEffect(()=>{f.delete&&Nt()},[Nt,f.delete]);function $s(){var ee;if(_e!=null&&_e.loading){var Ee;return V.createElement("div",{className:jt(J==null?void 0:J.loader,f==null||(Ee=f.classNames)==null?void 0:Ee.loader,"sonner-loader"),"data-visible":L==="loading"},_e.loading)}return V.createElement(J0,{className:jt(J==null?void 0:J.loader,f==null||(ee=f.classNames)==null?void 0:ee.loader),visible:L==="loading"})}var En,wr;return V.createElement("li",{tabIndex:0,ref:R,className:jt(T,z,J==null?void 0:J.toast,f==null||(e=f.classNames)==null?void 0:e.toast,J==null?void 0:J.default,J==null?void 0:J[L],f==null||(t=f.classNames)==null?void 0:t[L]),"data-sonner-toast":"","data-rich-colors":(En=f.richColors)!=null?En:Q,"data-styled":!(f.jsx||f.unstyled||w),"data-mounted":ne,"data-promise":!!f.promise,"data-swiped":Jt,"data-removed":st,"data-visible":j,"data-y-position":Yn,"data-x-position":Er,"data-index":q,"data-front":k,"data-swiping":Tt,"data-dismissible":O,"data-type":L,"data-invert":wo,"data-swipe-out":Ut,"data-swipe-direction":me,"data-expanded":!!(H||fe&&ne),style:{"--index":q,"--toasts-before":q,"--z-index":U.length-q,"--offset":`${st?_n:Et.current}px`,"--initial-height":fe?"auto":`${vr}px`,...b,...f.style},onDragEnd:()=>{Rt(!1),ct(null),lt.current=null},onPointerDown:ee=>{Xn||!O||(v.current=new Date,Bt(Et.current),ee.target.setPointerCapture(ee.pointerId),ee.target.tagName!=="BUTTON"&&(Rt(!0),lt.current={x:ee.clientX,y:ee.clientY}))},onPointerUp:()=>{var ee,Ee,Me;if(Ut||!O)return;lt.current=null;const qe=Number(((ee=R.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Jn=Number(((Ee=R.current)==null?void 0:Ee.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),be=new Date().getTime()-((Me=v.current)==null?void 0:Me.getTime()),it=De==="x"?qe:Jn,Oe=Math.abs(it)/be;if(Math.abs(it)>=gA||Oe>.11){Bt(Et.current),f.onDismiss==null||f.onDismiss.call(f,f),ue(De==="x"?qe>0?"right":"left":Jn>0?"down":"up"),Nt(),St(!0);return}else{var ut,We;(ut=R.current)==null||ut.style.setProperty("--swipe-amount-x","0px"),(We=R.current)==null||We.style.setProperty("--swipe-amount-y","0px")}gn(!1),Rt(!1),ct(null)},onPointerMove:ee=>{var Ee,Me,qe;if(!lt.current||!O||((Ee=window.getSelection())==null?void 0:Ee.toString().length)>0)return;const be=ee.clientY-lt.current.y,it=ee.clientX-lt.current.x;var Oe;const ut=(Oe=n.swipeDirections)!=null?Oe:yA(g);!De&&(Math.abs(it)>1||Math.abs(be)>1)&&ct(Math.abs(it)>Math.abs(be)?"x":"y");let We={x:0,y:0};const wn=en=>1/(1.5+Math.abs(en)/20);if(De==="y"){if(ut.includes("top")||ut.includes("bottom"))if(ut.includes("top")&&be<0||ut.includes("bottom")&&be>0)We.y=be;else{const en=be*wn(be);We.y=Math.abs(en)<Math.abs(be)?en:be}}else if(De==="x"&&(ut.includes("left")||ut.includes("right")))if(ut.includes("left")&&it<0||ut.includes("right")&&it>0)We.x=it;else{const en=it*wn(it);We.x=Math.abs(en)<Math.abs(it)?en:it}(Math.abs(We.x)>0||Math.abs(We.y)>0)&&gn(!0),(Me=R.current)==null||Me.style.setProperty("--swipe-amount-x",`${We.x}px`),(qe=R.current)==null||qe.style.setProperty("--swipe-amount-y",`${We.y}px`)}},oe&&!f.jsx&&L!=="loading"?V.createElement("button",{"aria-label":ke,"data-disabled":Xn,"data-close-button":!0,onClick:Xn||!O?()=>{}:()=>{Nt(),f.onDismiss==null||f.onDismiss.call(f,f)},className:jt(J==null?void 0:J.closeButton,f==null||(r=f.classNames)==null?void 0:r.closeButton)},(wr=_e==null?void 0:_e.close)!=null?wr:rA):null,L||f.icon||f.promise?V.createElement("div",{"data-icon":"",className:jt(J==null?void 0:J.icon,f==null||(s=f.classNames)==null?void 0:s.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||$s():null,f.type!=="loading"?f.icon||(_e==null?void 0:_e[L])||Y0(L):null):null,V.createElement("div",{"data-content":"",className:jt(J==null?void 0:J.content,f==null||(i=f.classNames)==null?void 0:i.content)},V.createElement("div",{"data-title":"",className:jt(J==null?void 0:J.title,f==null||(a=f.classNames)==null?void 0:a.title)},f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title),f.description?V.createElement("div",{"data-description":"",className:jt(I,re,J==null?void 0:J.description,f==null||(c=f.classNames)==null?void 0:c.description)},typeof f.description=="function"?f.description():f.description):null),V.isValidElement(f.cancel)?f.cancel:f.cancel&&di(f.cancel)?V.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||_,onClick:ee=>{di(f.cancel)&&O&&(f.cancel.onClick==null||f.cancel.onClick.call(f.cancel,ee),Nt())},className:jt(J==null?void 0:J.cancelButton,f==null||(u=f.classNames)==null?void 0:u.cancelButton)},f.cancel.label):null,V.isValidElement(f.action)?f.action:f.action&&di(f.action)?V.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||y,onClick:ee=>{di(f.action)&&(f.action.onClick==null||f.action.onClick.call(f.action,ee),!ee.defaultPrevented&&Nt())},className:jt(J==null?void 0:J.actionButton,f==null||(h=f.classNames)==null?void 0:h.actionButton)},f.action.label):null)};function Th(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function TA(n,e){const t={};return[n,e].forEach((r,s)=>{const i=s===1,a=i?"--mobile-offset":"--offset",c=i?fA:dA;function u(h){["top","right","bottom","left"].forEach(p=>{t[`${a}-${p}`]=typeof h=="number"?`${h}px`:h})}typeof r=="number"||typeof r=="string"?u(r):typeof r=="object"?["top","right","bottom","left"].forEach(h=>{r[h]===void 0?t[`${a}-${h}`]=c:t[`${a}-${h}`]=typeof r[h]=="number"?`${r[h]}px`:r[h]}):u(c)}),t}const iR=V.forwardRef(function(e,t){const{invert:r,position:s="bottom-right",hotkey:i=["altKey","KeyT"],expand:a,closeButton:c,className:u,offset:h,mobileOffset:p,theme:f="light",richColors:w,duration:S,style:D,visibleToasts:M=hA,toastOptions:P,dir:q=Th(),gap:U=mA,icons:H,containerAriaLabel:G="Notifications"}=e,[Q,ie]=V.useState([]),b=V.useMemo(()=>Array.from(new Set([s].concat(Q.filter(me=>me.position).map(me=>me.position)))),[Q,s]),[_,y]=V.useState([]),[T,I]=V.useState(!1),[E,g]=V.useState(!1),[de,fe]=V.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),J=V.useRef(null),_e=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),ke=V.useRef(null),De=V.useRef(!1),ct=V.useCallback(me=>{ie(ue=>{var ne;return(ne=ue.find(ze=>ze.id===me.id))!=null&&ne.delete||ft.dismiss(me.id),ue.filter(({id:ze})=>ze!==me.id)})},[]);return V.useEffect(()=>ft.subscribe(me=>{if(me.dismiss){const ue=Q.map(ne=>ne.id===me.id?{...ne,delete:!0}:ne);requestAnimationFrame(()=>{ie(ue)});return}setTimeout(()=>{Vm.flushSync(()=>{ie(ue=>{const ne=ue.findIndex(ze=>ze.id===me.id);return ne!==-1?[...ue.slice(0,ne),{...ue[ne],...me},...ue.slice(ne+1)]:[me,...ue]})})})}),[Q]),V.useEffect(()=>{if(f!=="system"){fe(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?fe("dark"):fe("light")),typeof window>"u")return;const me=window.matchMedia("(prefers-color-scheme: dark)");try{me.addEventListener("change",({matches:ue})=>{fe(ue?"dark":"light")})}catch{me.addListener(({matches:ne})=>{try{fe(ne?"dark":"light")}catch(ze){console.error(ze)}})}},[f]),V.useEffect(()=>{Q.length<=1&&I(!1)},[Q]),V.useEffect(()=>{const me=ue=>{var ne;if(i.every(ye=>ue[ye]||ue.code===ye)){var st;I(!0),(st=J.current)==null||st.focus()}ue.code==="Escape"&&(document.activeElement===J.current||(ne=J.current)!=null&&ne.contains(document.activeElement))&&I(!1)};return document.addEventListener("keydown",me),()=>document.removeEventListener("keydown",me)},[i]),V.useEffect(()=>{if(J.current)return()=>{ke.current&&(ke.current.focus({preventScroll:!0}),ke.current=null,De.current=!1)}},[J.current]),V.createElement("section",{ref:t,"aria-label":`${G} ${_e}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},b.map((me,ue)=>{var ne;const[ze,st]=me.split("-");return Q.length?V.createElement("ol",{key:me,dir:q==="auto"?Th():q,tabIndex:-1,ref:J,className:u,"data-sonner-toaster":!0,"data-sonner-theme":de,"data-y-position":ze,"data-lifted":T&&Q.length>1&&!a,"data-x-position":st,style:{"--front-toast-height":`${((ne=_[0])==null?void 0:ne.height)||0}px`,"--width":`${pA}px`,"--gap":`${U}px`,...D,...TA(h,p)},onBlur:ye=>{De.current&&!ye.currentTarget.contains(ye.relatedTarget)&&(De.current=!1,ke.current&&(ke.current.focus({preventScroll:!0}),ke.current=null))},onFocus:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||De.current||(De.current=!0,ke.current=ye.relatedTarget)},onMouseEnter:()=>I(!0),onMouseMove:()=>I(!0),onMouseLeave:()=>{E||I(!1)},onDragEnd:()=>I(!1),onPointerDown:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||g(!0)},onPointerUp:()=>g(!1)},Q.filter(ye=>!ye.position&&ue===0||ye.position===me).map((ye,Tt)=>{var Rt,Ut;return V.createElement(vA,{key:ye.id,icons:H,index:Tt,toast:ye,defaultRichColors:w,duration:(Rt=P==null?void 0:P.duration)!=null?Rt:S,className:P==null?void 0:P.className,descriptionClassName:P==null?void 0:P.descriptionClassName,invert:r,visibleToasts:M,closeButton:(Ut=P==null?void 0:P.closeButton)!=null?Ut:c,interacting:E,position:me,style:P==null?void 0:P.style,unstyled:P==null?void 0:P.unstyled,classNames:P==null?void 0:P.classNames,cancelButtonStyle:P==null?void 0:P.cancelButtonStyle,actionButtonStyle:P==null?void 0:P.actionButtonStyle,closeButtonAriaLabel:P==null?void 0:P.closeButtonAriaLabel,removeToast:ct,toasts:Q.filter(St=>St.position==ye.position),heights:_.filter(St=>St.position==ye.position),setHeights:y,expandByDefault:a,gap:U,expanded:T,swipeDirections:e.swipeDirections})})):null}))});export{VA as A,Be as B,OA as C,AA as D,RA as E,xA as F,SA as G,CA as H,BA as I,Dt as J,UA as K,MA as L,KA as M,Pn as N,qA as O,FA as P,rR as Q,iR as T,eR as a,IA as b,Te as c,Wm as d,qm as e,LA as f,B as g,PA as h,kA as i,DA as j,NA as k,nR as l,XA as m,JA as n,QA as o,zA as p,YA as q,ZA as r,$A as s,tR as t,Oa as u,jA as v,vb as w,WA as x,GA as y,sR as z};
