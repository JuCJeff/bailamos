import{r as B,j as u,R as A,u as Me}from"./index-Ra3AzzZJ.js";import{c as ar,u as ir,a as nr,b as lr,d as or,P as be,e as vt,R as ur,I as dr,f as Ce,g as cr,h as Z,i as ie,B as Ue,H as fr}from"./HeadBar-DlIuWTRB.js";import{c as gr,a as Oe,b as bt,F as Be,d as mr,G as yr,e as hr,z as xr,T as vr}from"./index-CgIy_fvT.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],qe=ar("LoaderCircle",br);var Ge="Tabs",[pr,us]=lr(Ge,[vt]),pt=vt(),[_r,$e]=pr(Ge),_t=B.forwardRef((e,r)=>{const{__scopeTabs:t,value:a,onValueChange:i,defaultValue:l,orientation:d="horizontal",dir:c,activationMode:h="automatic",...p}=e,b=ir(c),[x,S]=nr({prop:a,onChange:i,defaultProp:l});return u.jsx(_r,{scope:t,baseId:or(),value:x,onValueChange:S,orientation:d,dir:b,activationMode:h,children:u.jsx(be.div,{dir:b,"data-orientation":d,...p,ref:r})})});_t.displayName=Ge;var wt="TabsList",Ft=B.forwardRef((e,r)=>{const{__scopeTabs:t,loop:a=!0,...i}=e,l=$e(wt,t),d=pt(t);return u.jsx(ur,{asChild:!0,...d,orientation:l.orientation,dir:l.dir,loop:a,children:u.jsx(be.div,{role:"tablist","aria-orientation":l.orientation,...i,ref:r})})});Ft.displayName=wt;var Vt="TabsTrigger",At=B.forwardRef((e,r)=>{const{__scopeTabs:t,value:a,disabled:i=!1,...l}=e,d=$e(Vt,t),c=pt(t),h=Nt(d.baseId,a),p=Et(d.baseId,a),b=a===d.value;return u.jsx(dr,{asChild:!0,...c,focusable:!i,active:b,children:u.jsx(be.button,{type:"button",role:"tab","aria-selected":b,"aria-controls":p,"data-state":b?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:h,...l,ref:r,onMouseDown:Ce(e.onMouseDown,x=>{!i&&x.button===0&&x.ctrlKey===!1?d.onValueChange(a):x.preventDefault()}),onKeyDown:Ce(e.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&d.onValueChange(a)}),onFocus:Ce(e.onFocus,()=>{const x=d.activationMode!=="manual";!b&&!i&&x&&d.onValueChange(a)})})})});At.displayName=Vt;var jt="TabsContent",St=B.forwardRef((e,r)=>{const{__scopeTabs:t,value:a,forceMount:i,children:l,...d}=e,c=$e(jt,t),h=Nt(c.baseId,a),p=Et(c.baseId,a),b=a===c.value,x=B.useRef(b);return B.useEffect(()=>{const S=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(S)},[]),u.jsx(cr,{present:i||b,children:({present:S})=>u.jsx(be.div,{"data-state":b?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":h,hidden:!S,id:p,tabIndex:0,...d,ref:r,style:{...e.style,animationDuration:x.current?"0s":void 0},children:S&&l})})});St.displayName=jt;function Nt(e,r){return`${e}-trigger-${r}`}function Et(e,r){return`${e}-content-${r}`}var wr=_t,Fr=Ft,Vr=At,Ar=St;function jr({className:e,...r}){return u.jsx(wr,{"data-slot":"tabs",className:Z("flex flex-col gap-2",e),...r})}function Sr({className:e,...r}){return u.jsx(Fr,{"data-slot":"tabs-list",className:Z("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",e),...r})}function lt({className:e,...r}){return u.jsx(Vr,{"data-slot":"tabs-trigger",className:Z("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...r})}function ot({className:e,...r}){return u.jsx(Ar,{"data-slot":"tabs-content",className:Z("flex-1 outline-none",e),...r})}function Dt({className:e,...r}){return u.jsx("div",{"data-slot":"card",className:Z("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function Tt({className:e,...r}){return u.jsx("div",{"data-slot":"card-header",className:Z("flex flex-col gap-1.5 px-6",e),...r})}function kt({className:e,...r}){return u.jsx("div",{"data-slot":"card-title",className:Z("leading-none font-semibold",e),...r})}function Ct({className:e,...r}){return u.jsx("div",{"data-slot":"card-content",className:Z("px-6",e),...r})}var pe=e=>e.type==="checkbox",oe=e=>e instanceof Date,M=e=>e==null;const Lt=e=>typeof e=="object";var E=e=>!M(e)&&!Array.isArray(e)&&Lt(e)&&!oe(e),Pt=e=>E(e)&&e.target?pe(e.target)?e.target.checked:e.target.value:e,Nr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Rt=(e,r)=>e.has(Nr(r)),Er=e=>{const r=e.constructor&&e.constructor.prototype;return E(r)&&r.hasOwnProperty("isPrototypeOf")},ze=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let r;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(ze&&(e instanceof Blob||a))&&(t||E(e)))if(r=t?[]:{},!t&&!Er(e))r=e;else for(const i in e)e.hasOwnProperty(i)&&(r[i]=U(e[i]));else return e;return r}var Ne=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,m=(e,r,t)=>{if(!r||!E(e))return t;const a=Ne(r.split(/[,[\].]+?/)).reduce((i,l)=>M(i)?i:i[l],e);return N(a)||a===e?N(e[r])?t:e[r]:a},z=e=>typeof e=="boolean",We=e=>/^\w*$/.test(e),It=e=>Ne(e.replace(/["|']|\]/g,"").split(/\.|\[/)),j=(e,r,t)=>{let a=-1;const i=We(r)?[r]:It(r),l=i.length,d=l-1;for(;++a<l;){const c=i[a];let h=t;if(a!==d){const p=e[c];h=E(p)||Array.isArray(p)?p:isNaN(+i[a+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;e[c]=h,e=e[c]}return e};const Ve={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dr=A.createContext(null),He=()=>A.useContext(Dr);var Mt=(e,r,t,a=!0)=>{const i={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(i,l,{get:()=>{const d=l;return r._proxyFormState[d]!==H.all&&(r._proxyFormState[d]=!a||H.all),t&&(t[d]=!0),e[d]}});return i},O=e=>E(e)&&!Object.keys(e).length,Ut=(e,r,t,a)=>{t(e);const{name:i,...l}=e;return O(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(d=>r[d]===(!a||H.all))},xe=e=>Array.isArray(e)?e:[e],Ot=(e,r,t)=>!e||!r||e===r||xe(e).some(a=>a&&(t?a===r:a.startsWith(r)||r.startsWith(a)));function Ze(e){const r=A.useRef(e);r.current=e,A.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Tr(e){const r=He(),{control:t=r.control,disabled:a,name:i,exact:l}=e||{},[d,c]=A.useState(t._formState),h=A.useRef(!0),p=A.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),b=A.useRef(i);return b.current=i,Ze({disabled:a,next:x=>h.current&&Ot(b.current,x.name,l)&&Ut(x,p.current,t._updateFormState)&&c({...t._formState,...x}),subject:t._subjects.state}),A.useEffect(()=>(h.current=!0,p.current.isValid&&t._updateValid(!0),()=>{h.current=!1}),[t]),A.useMemo(()=>Mt(d,t,p.current,!1),[d,t])}var Y=e=>typeof e=="string",Bt=(e,r,t,a,i)=>Y(e)?(a&&r.watch.add(e),m(t,e,i)):Array.isArray(e)?e.map(l=>(a&&r.watch.add(l),m(t,l))):(a&&(r.watchAll=!0),t);function kr(e){const r=He(),{control:t=r.control,name:a,defaultValue:i,disabled:l,exact:d}=e||{},c=A.useRef(a);c.current=a,Ze({disabled:l,subject:t._subjects.values,next:b=>{Ot(c.current,b.name,d)&&p(U(Bt(c.current,t._names,b.values||t._formValues,!1,i)))}});const[h,p]=A.useState(t._getWatch(a,i));return A.useEffect(()=>t._removeUnmounted()),h}function Cr(e){const r=He(),{name:t,disabled:a,control:i=r.control,shouldUnregister:l}=e,d=Rt(i._names.array,t),c=kr({control:i,name:t,defaultValue:m(i._formValues,t,m(i._defaultValues,t,e.defaultValue)),exact:!0}),h=Tr({control:i,name:t,exact:!0}),p=A.useRef(i.register(t,{...e.rules,value:c,...z(e.disabled)?{disabled:e.disabled}:{}})),b=A.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(h.errors,t)},isDirty:{enumerable:!0,get:()=>!!m(h.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!m(h.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!m(h.validatingFields,t)},error:{enumerable:!0,get:()=>m(h.errors,t)}}),[h,t]),x=A.useMemo(()=>({name:t,value:c,...z(a)||h.disabled?{disabled:h.disabled||a}:{},onChange:S=>p.current.onChange({target:{value:Pt(S),name:t},type:Ve.CHANGE}),onBlur:()=>p.current.onBlur({target:{value:m(i._formValues,t),name:t},type:Ve.BLUR}),ref:S=>{const K=m(i._fields,t);K&&S&&(K._f.ref={focus:()=>S.focus(),select:()=>S.select(),setCustomValidity:P=>S.setCustomValidity(P),reportValidity:()=>S.reportValidity()})}}),[t,i._formValues,a,h.disabled,c,i._fields]);return A.useEffect(()=>{const S=i._options.shouldUnregister||l,K=(P,I)=>{const q=m(i._fields,P);q&&q._f&&(q._f.mount=I)};if(K(t,!0),S){const P=U(m(i._options.defaultValues,t));j(i._defaultValues,t,P),N(m(i._formValues,t))&&j(i._formValues,t,P)}return!d&&i.register(t),()=>{(d?S&&!i._state.action:S)?i.unregister(t):K(t,!1)}},[t,i,d,l]),A.useEffect(()=>{i._updateDisabledField({disabled:a,fields:i._fields,name:t})},[a,t,i]),A.useMemo(()=>({field:x,formState:h,fieldState:b}),[x,h,b])}const ne=e=>e.render(Cr(e));var Lr=(e,r,t,a,i)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:i||!0}}:{},ut=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),dt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ve=(e,r,t,a)=>{for(const i of t||Object.keys(e)){const l=m(e,i);if(l){const{_f:d,...c}=l;if(d){if(d.refs&&d.refs[0]&&r(d.refs[0],i)&&!a)return!0;if(d.ref&&r(d.ref,d.name)&&!a)return!0;if(ve(c,r))break}else if(E(c)&&ve(c,r))break}}};var Pr=(e,r,t)=>{const a=xe(m(e,t));return j(a,"root",r[t]),j(e,t,a),e},Ke=e=>e.type==="file",J=e=>typeof e=="function",Ae=e=>{if(!ze)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Fe=e=>Y(e),Je=e=>e.type==="radio",je=e=>e instanceof RegExp;const ct={value:!1,isValid:!1},ft={value:!0,isValid:!0};var qt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?ft:{value:e[0].value,isValid:!0}:ft:ct}return ct};const gt={isValid:!1,value:null};var Gt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,gt):gt;function mt(e,r,t="validate"){if(Fe(e)||Array.isArray(e)&&e.every(Fe)||z(e)&&!e)return{type:t,message:Fe(e)?e:"",ref:r}}var ce=e=>E(e)&&!je(e)?e:{value:e,message:""},yt=async(e,r,t,a,i,l)=>{const{ref:d,refs:c,required:h,maxLength:p,minLength:b,min:x,max:S,pattern:K,validate:P,name:I,valueAsNumber:q,mount:te}=e._f,F=m(t,I);if(!te||r.has(I))return{};const Q=c?c[0]:d,X=w=>{i&&Q.reportValidity&&(Q.setCustomValidity(z(w)?"":w||""),Q.reportValidity())},D={},ue=Je(d),_e=pe(d),ae=ue||_e,de=(q||Ke(d))&&N(d.value)&&N(F)||Ae(d)&&d.value===""||F===""||Array.isArray(F)&&!F.length,G=Lr.bind(null,I,a,D),we=(w,V,T,R=ee.maxLength,W=ee.minLength)=>{const $=w?V:T;D[I]={type:w?R:W,message:$,ref:d,...G(w?R:W,$)}};if(l?!Array.isArray(F)||!F.length:h&&(!ae&&(de||M(F))||z(F)&&!F||_e&&!qt(c).isValid||ue&&!Gt(c).isValid)){const{value:w,message:V}=Fe(h)?{value:!!h,message:h}:ce(h);if(w&&(D[I]={type:ee.required,message:V,ref:Q,...G(ee.required,V)},!a))return X(V),D}if(!de&&(!M(x)||!M(S))){let w,V;const T=ce(S),R=ce(x);if(!M(F)&&!isNaN(F)){const W=d.valueAsNumber||F&&+F;M(T.value)||(w=W>T.value),M(R.value)||(V=W<R.value)}else{const W=d.valueAsDate||new Date(F),$=me=>new Date(new Date().toDateString()+" "+me),fe=d.type=="time",ge=d.type=="week";Y(T.value)&&F&&(w=fe?$(F)>$(T.value):ge?F>T.value:W>new Date(T.value)),Y(R.value)&&F&&(V=fe?$(F)<$(R.value):ge?F<R.value:W<new Date(R.value))}if((w||V)&&(we(!!w,T.message,R.message,ee.max,ee.min),!a))return X(D[I].message),D}if((p||b)&&!de&&(Y(F)||l&&Array.isArray(F))){const w=ce(p),V=ce(b),T=!M(w.value)&&F.length>+w.value,R=!M(V.value)&&F.length<+V.value;if((T||R)&&(we(T,w.message,V.message),!a))return X(D[I].message),D}if(K&&!de&&Y(F)){const{value:w,message:V}=ce(K);if(je(w)&&!F.match(w)&&(D[I]={type:ee.pattern,message:V,ref:d,...G(ee.pattern,V)},!a))return X(V),D}if(P){if(J(P)){const w=await P(F,t),V=mt(w,Q);if(V&&(D[I]={...V,...G(ee.validate,V.message)},!a))return X(V.message),D}else if(E(P)){let w={};for(const V in P){if(!O(w)&&!a)break;const T=mt(await P[V](F,t),Q,V);T&&(w={...T,...G(V,T.message)},X(T.message),a&&(D[I]=w))}if(!O(w)&&(D[I]={ref:Q,...w},!a))return D}}return X(!0),D};function Rr(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=N(e)?a++:e[r[a++]];return e}function Ir(e){for(const r in e)if(e.hasOwnProperty(r)&&!N(e[r]))return!1;return!0}function k(e,r){const t=Array.isArray(r)?r:We(r)?[r]:It(r),a=t.length===1?e:Rr(e,t),i=t.length-1,l=t[i];return a&&delete a[l],i!==0&&(E(a)&&O(a)||Array.isArray(a)&&Ir(a))&&k(e,t.slice(0,-1)),e}var Le=()=>{let e=[];return{get observers(){return e},next:i=>{for(const l of e)l.next&&l.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(l=>l!==i)}}),unsubscribe:()=>{e=[]}}},Ie=e=>M(e)||!Lt(e);function se(e,r){if(Ie(e)||Ie(r))return e===r;if(oe(e)&&oe(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const i of t){const l=e[i];if(!a.includes(i))return!1;if(i!=="ref"){const d=r[i];if(oe(l)&&oe(d)||E(l)&&E(d)||Array.isArray(l)&&Array.isArray(d)?!se(l,d):l!==d)return!1}}return!0}var $t=e=>e.type==="select-multiple",Mr=e=>Je(e)||pe(e),Pe=e=>Ae(e)&&e.isConnected,zt=e=>{for(const r in e)if(J(e[r]))return!0;return!1};function Se(e,r={}){const t=Array.isArray(e);if(E(e)||t)for(const a in e)Array.isArray(e[a])||E(e[a])&&!zt(e[a])?(r[a]=Array.isArray(e[a])?[]:{},Se(e[a],r[a])):M(e[a])||(r[a]=!0);return r}function Wt(e,r,t){const a=Array.isArray(e);if(E(e)||a)for(const i in e)Array.isArray(e[i])||E(e[i])&&!zt(e[i])?N(r)||Ie(t[i])?t[i]=Array.isArray(e[i])?Se(e[i],[]):{...Se(e[i])}:Wt(e[i],M(r)?{}:r[i],t[i]):t[i]=!se(e[i],r[i]);return t}var ye=(e,r)=>Wt(e,r,Se(r)),Ht=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>N(e)?e:r?e===""?NaN:e&&+e:t&&Y(e)?new Date(e):a?a(e):e;function Re(e){const r=e.ref;return Ke(r)?r.files:Je(r)?Gt(e.refs).value:$t(r)?[...r.selectedOptions].map(({value:t})=>t):pe(r)?qt(e.refs).value:Ht(N(r.value)?e.ref.value:r.value,e)}var Ur=(e,r,t,a)=>{const i={};for(const l of e){const d=m(r,l);d&&j(i,l,d._f)}return{criteriaMode:t,names:[...e],fields:i,shouldUseNativeValidation:a}},he=e=>N(e)?e:je(e)?e.source:E(e)?je(e.value)?e.value.source:e.value:e;const ht="AsyncFunction";var Or=e=>!!e&&!!e.validate&&!!(J(e.validate)&&e.validate.constructor.name===ht||E(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ht)),Br=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xt(e,r,t){const a=m(e,t);if(a||We(t))return{error:a,name:t};const i=t.split(".");for(;i.length;){const l=i.join("."),d=m(r,l),c=m(e,l);if(d&&!Array.isArray(d)&&t!==l)return{name:t};if(c&&c.type)return{name:l,error:c};i.pop()}return{name:t}}var qr=(e,r,t,a,i)=>i.isOnAll?!1:!t&&i.isOnTouch?!(r||e):(t?a.isOnBlur:i.isOnBlur)?!e:(t?a.isOnChange:i.isOnChange)?e:!0,Gr=(e,r)=>!Ne(m(e,r)).length&&k(e,r);const $r={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function zr(e={}){let r={...$r,...e},t={submitCount:0,isDirty:!1,isLoading:J(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},i=E(r.defaultValues)||E(r.values)?U(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:U(i),d={action:!1,mount:!1,watch:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,p=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Le(),array:Le(),state:Le()},S=ut(r.mode),K=ut(r.reValidateMode),P=r.criteriaMode===H.all,I=s=>n=>{clearTimeout(p),p=setTimeout(s,n)},q=async s=>{if(!r.disabled&&(b.isValid||s)){const n=r.resolver?O((await ae()).errors):await G(a,!0);n!==t.isValid&&x.state.next({isValid:n})}},te=(s,n)=>{!r.disabled&&(b.isValidating||b.validatingFields)&&((s||Array.from(c.mount)).forEach(o=>{o&&(n?j(t.validatingFields,o,n):k(t.validatingFields,o))}),x.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},F=(s,n=[],o,y,g=!0,f=!0)=>{if(y&&o&&!r.disabled){if(d.action=!0,f&&Array.isArray(m(a,s))){const v=o(m(a,s),y.argA,y.argB);g&&j(a,s,v)}if(f&&Array.isArray(m(t.errors,s))){const v=o(m(t.errors,s),y.argA,y.argB);g&&j(t.errors,s,v),Gr(t.errors,s)}if(b.touchedFields&&f&&Array.isArray(m(t.touchedFields,s))){const v=o(m(t.touchedFields,s),y.argA,y.argB);g&&j(t.touchedFields,s,v)}b.dirtyFields&&(t.dirtyFields=ye(i,l)),x.state.next({name:s,isDirty:w(s,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else j(l,s,n)},Q=(s,n)=>{j(t.errors,s,n),x.state.next({errors:t.errors})},X=s=>{t.errors=s,x.state.next({errors:t.errors,isValid:!1})},D=(s,n,o,y)=>{const g=m(a,s);if(g){const f=m(l,s,N(o)?m(i,s):o);N(f)||y&&y.defaultChecked||n?j(l,s,n?f:Re(g._f)):R(s,f),d.mount&&q()}},ue=(s,n,o,y,g)=>{let f=!1,v=!1;const _={name:s};if(!r.disabled){const C=!!(m(a,s)&&m(a,s)._f&&m(a,s)._f.disabled);if(!o||y){b.isDirty&&(v=t.isDirty,t.isDirty=_.isDirty=w(),f=v!==_.isDirty);const L=C||se(m(i,s),n);v=!!(!C&&m(t.dirtyFields,s)),L||C?k(t.dirtyFields,s):j(t.dirtyFields,s,!0),_.dirtyFields=t.dirtyFields,f=f||b.dirtyFields&&v!==!L}if(o){const L=m(t.touchedFields,s);L||(j(t.touchedFields,s,o),_.touchedFields=t.touchedFields,f=f||b.touchedFields&&L!==o)}f&&g&&x.state.next(_)}return f?_:{}},_e=(s,n,o,y)=>{const g=m(t.errors,s),f=b.isValid&&z(n)&&t.isValid!==n;if(r.delayError&&o?(h=I(()=>Q(s,o)),h(r.delayError)):(clearTimeout(p),h=null,o?j(t.errors,s,o):k(t.errors,s)),(o?!se(g,o):g)||!O(y)||f){const v={...y,...f&&z(n)?{isValid:n}:{},errors:t.errors,name:s};t={...t,...v},x.state.next(v)}},ae=async s=>{te(s,!0);const n=await r.resolver(l,r.context,Ur(s||c.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return te(s),n},de=async s=>{const{errors:n}=await ae(s);if(s)for(const o of s){const y=m(n,o);y?j(t.errors,o,y):k(t.errors,o)}else t.errors=n;return n},G=async(s,n,o={valid:!0})=>{for(const y in s){const g=s[y];if(g){const{_f:f,...v}=g;if(f){const _=c.array.has(f.name),C=g._f&&Or(g._f);C&&b.validatingFields&&te([y],!0);const L=await yt(g,c.disabled,l,P,r.shouldUseNativeValidation&&!n,_);if(C&&b.validatingFields&&te([y]),L[f.name]&&(o.valid=!1,n))break;!n&&(m(L,f.name)?_?Pr(t.errors,L,f.name):j(t.errors,f.name,L[f.name]):k(t.errors,f.name))}!O(v)&&await G(v,n,o)}}return o.valid},we=()=>{for(const s of c.unMount){const n=m(a,s);n&&(n._f.refs?n._f.refs.every(o=>!Pe(o)):!Pe(n._f.ref))&&Ee(s)}c.unMount=new Set},w=(s,n)=>!r.disabled&&(s&&n&&j(l,s,n),!se(Ye(),i)),V=(s,n,o)=>Bt(s,c,{...d.mount?l:N(n)?i:Y(s)?{[s]:n}:n},o,n),T=s=>Ne(m(d.mount?l:i,s,r.shouldUnregister?m(i,s,[]):[])),R=(s,n,o={})=>{const y=m(a,s);let g=n;if(y){const f=y._f;f&&(!f.disabled&&j(l,s,Ht(n,f)),g=Ae(f.ref)&&M(n)?"":n,$t(f.ref)?[...f.ref.options].forEach(v=>v.selected=g.includes(v.value)):f.refs?pe(f.ref)?f.refs.length>1?f.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(g)?!!g.find(_=>_===v.value):g===v.value)):f.refs[0]&&(f.refs[0].checked=!!g):f.refs.forEach(v=>v.checked=v.value===g):Ke(f.ref)?f.ref.value="":(f.ref.value=g,f.ref.type||x.values.next({name:s,values:{...l}})))}(o.shouldDirty||o.shouldTouch)&&ue(s,g,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&me(s)},W=(s,n,o)=>{for(const y in n){const g=n[y],f=`${s}.${y}`,v=m(a,f);(c.array.has(s)||E(g)||v&&!v._f)&&!oe(g)?W(f,g,o):R(f,g,o)}},$=(s,n,o={})=>{const y=m(a,s),g=c.array.has(s),f=U(n);j(l,s,f),g?(x.array.next({name:s,values:{...l}}),(b.isDirty||b.dirtyFields)&&o.shouldDirty&&x.state.next({name:s,dirtyFields:ye(i,l),isDirty:w(s,f)})):y&&!y._f&&!M(f)?W(s,f,o):R(s,f,o),dt(s,c)&&x.state.next({...t}),x.values.next({name:d.mount?s:void 0,values:{...l}})},fe=async s=>{d.mount=!0;const n=s.target;let o=n.name,y=!0;const g=m(a,o),f=()=>n.type?Re(g._f):Pt(s),v=_=>{y=Number.isNaN(_)||oe(_)&&isNaN(_.getTime())||se(_,m(l,o,_))};if(g){let _,C;const L=f(),re=s.type===Ve.BLUR||s.type===Ve.FOCUS_OUT,tr=!Br(g._f)&&!r.resolver&&!m(t.errors,o)&&!g._f.deps||qr(re,m(t.touchedFields,o),t.isSubmitted,K,S),Te=dt(o,c,re);j(l,o,L),re?(g._f.onBlur&&g._f.onBlur(s),h&&h(0)):g._f.onChange&&g._f.onChange(s);const ke=ue(o,L,re,!1),rr=!O(ke)||Te;if(!re&&x.values.next({name:o,type:s.type,values:{...l}}),tr)return b.isValid&&(r.mode==="onBlur"&&re?q():re||q()),rr&&x.state.next({name:o,...Te?{}:ke});if(!re&&Te&&x.state.next({...t}),r.resolver){const{errors:it}=await ae([o]);if(v(L),y){const sr=xt(t.errors,a,o),nt=xt(it,a,sr.name||o);_=nt.error,o=nt.name,C=O(it)}}else te([o],!0),_=(await yt(g,c.disabled,l,P,r.shouldUseNativeValidation))[o],te([o]),v(L),y&&(_?C=!1:b.isValid&&(C=await G(a,!0)));y&&(g._f.deps&&me(g._f.deps),_e(o,C,_,ke))}},ge=(s,n)=>{if(m(t.errors,n)&&s.focus)return s.focus(),1},me=async(s,n={})=>{let o,y;const g=xe(s);if(r.resolver){const f=await de(N(s)?s:g);o=O(f),y=s?!g.some(v=>m(f,v)):o}else s?(y=(await Promise.all(g.map(async f=>{const v=m(a,f);return await G(v&&v._f?{[f]:v}:v)}))).every(Boolean),!(!y&&!t.isValid)&&q()):y=o=await G(a);return x.state.next({...!Y(s)||b.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors}),n.shouldFocus&&!y&&ve(a,ge,s?g:c.mount),y},Ye=s=>{const n={...d.mount?l:i};return N(s)?n:Y(s)?m(n,s):s.map(o=>m(n,o))},Qe=(s,n)=>({invalid:!!m((n||t).errors,s),isDirty:!!m((n||t).dirtyFields,s),error:m((n||t).errors,s),isValidating:!!m(t.validatingFields,s),isTouched:!!m((n||t).touchedFields,s)}),Yt=s=>{s&&xe(s).forEach(n=>k(t.errors,n)),x.state.next({errors:s?t.errors:{}})},Xe=(s,n,o)=>{const y=(m(a,s,{_f:{}})._f||{}).ref,g=m(t.errors,s)||{},{ref:f,message:v,type:_,...C}=g;j(t.errors,s,{...C,...n,ref:y}),x.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},Qt=(s,n)=>J(s)?x.values.subscribe({next:o=>s(V(void 0,n),o)}):V(s,n,!0),Ee=(s,n={})=>{for(const o of s?xe(s):c.mount)c.mount.delete(o),c.array.delete(o),n.keepValue||(k(a,o),k(l,o)),!n.keepError&&k(t.errors,o),!n.keepDirty&&k(t.dirtyFields,o),!n.keepTouched&&k(t.touchedFields,o),!n.keepIsValidating&&k(t.validatingFields,o),!r.shouldUnregister&&!n.keepDefaultValue&&k(i,o);x.values.next({values:{...l}}),x.state.next({...t,...n.keepDirty?{isDirty:w()}:{}}),!n.keepIsValid&&q()},et=({disabled:s,name:n,field:o,fields:y})=>{(z(s)&&d.mount||s||c.disabled.has(n))&&(s?c.disabled.add(n):c.disabled.delete(n),ue(n,Re(o?o._f:m(y,n)._f),!1,!1,!0))},De=(s,n={})=>{let o=m(a,s);const y=z(n.disabled)||z(r.disabled);return j(a,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...n}}),c.mount.add(s),o?et({field:o,disabled:z(n.disabled)?n.disabled:r.disabled,name:s}):D(s,!0,n.value),{...y?{disabled:n.disabled||r.disabled}:{},...r.progressive?{required:!!n.required,min:he(n.min),max:he(n.max),minLength:he(n.minLength),maxLength:he(n.maxLength),pattern:he(n.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:g=>{if(g){De(s,n),o=m(a,s);const f=N(g.value)&&g.querySelectorAll&&g.querySelectorAll("input,select,textarea")[0]||g,v=Mr(f),_=o._f.refs||[];if(v?_.find(C=>C===f):f===o._f.ref)return;j(a,s,{_f:{...o._f,...v?{refs:[..._.filter(Pe),f,...Array.isArray(m(i,s))?[{}]:[]],ref:{type:f.type,name:s}}:{ref:f}}}),D(s,!1,void 0,f)}else o=m(a,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||n.shouldUnregister)&&!(Rt(c.array,s)&&d.action)&&c.unMount.add(s)}}},tt=()=>r.shouldFocusError&&ve(a,ge,c.mount),Xt=s=>{z(s)&&(x.state.next({disabled:s}),ve(a,(n,o)=>{const y=m(a,o);y&&(n.disabled=y._f.disabled||s,Array.isArray(y._f.refs)&&y._f.refs.forEach(g=>{g.disabled=y._f.disabled||s}))},0,!1))},rt=(s,n)=>async o=>{let y;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let g=U(l);if(c.disabled.size)for(const f of c.disabled)j(g,f,void 0);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:v}=await ae();t.errors=f,g=v}else await G(a);if(k(t.errors,"root"),O(t.errors)){x.state.next({errors:{}});try{await s(g,o)}catch(f){y=f}}else n&&await n({...t.errors},o),tt(),setTimeout(tt);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},er=(s,n={})=>{m(a,s)&&(N(n.defaultValue)?$(s,U(m(i,s))):($(s,n.defaultValue),j(i,s,U(n.defaultValue))),n.keepTouched||k(t.touchedFields,s),n.keepDirty||(k(t.dirtyFields,s),t.isDirty=n.defaultValue?w(s,U(m(i,s))):w()),n.keepError||(k(t.errors,s),b.isValid&&q()),x.state.next({...t}))},st=(s,n={})=>{const o=s?U(s):i,y=U(o),g=O(s),f=g?i:y;if(n.keepDefaultValues||(i=o),!n.keepValues){if(n.keepDirtyValues){const v=new Set([...c.mount,...Object.keys(ye(i,l))]);for(const _ of Array.from(v))m(t.dirtyFields,_)?j(f,_,m(l,_)):$(_,m(f,_))}else{if(ze&&N(s))for(const v of c.mount){const _=m(a,v);if(_&&_._f){const C=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(Ae(C)){const L=C.closest("form");if(L){L.reset();break}}}}a={}}l=r.shouldUnregister?n.keepDefaultValues?U(i):{}:U(f),x.array.next({values:{...f}}),x.values.next({values:{...f}})}c={mount:n.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!b.isValid||!!n.keepIsValid||!!n.keepDirtyValues,d.watch=!!r.shouldUnregister,x.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:g?!1:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!se(s,i)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:g?{}:n.keepDirtyValues?n.keepDefaultValues&&l?ye(i,l):t.dirtyFields:n.keepDefaultValues&&s?ye(i,s):n.keepDirty?t.dirtyFields:{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},at=(s,n)=>st(J(s)?s(l):s,n);return{control:{register:De,unregister:Ee,getFieldState:Qe,handleSubmit:rt,setError:Xe,_executeSchema:ae,_getWatch:V,_getDirty:w,_updateValid:q,_removeUnmounted:we,_updateFieldArray:F,_updateDisabledField:et,_getFieldArray:T,_reset:st,_resetDefaultValues:()=>J(r.defaultValues)&&r.defaultValues().then(s=>{at(s,r.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Xt,_subjects:x,_proxyFormState:b,_setErrors:X,get _fields(){return a},get _formValues(){return l},get _state(){return d},set _state(s){d=s},get _defaultValues(){return i},get _names(){return c},set _names(s){c=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:me,register:De,handleSubmit:rt,watch:Qt,setValue:$,getValues:Ye,reset:at,resetField:er,clearErrors:Yt,unregister:Ee,setError:Xe,setFocus:(s,n={})=>{const o=m(a,s),y=o&&o._f;if(y){const g=y.refs?y.refs[0]:y.ref;g.focus&&(g.focus(),n.shouldSelect&&J(g.select)&&g.select())}},getFieldState:Qe}}function Zt(e={}){const r=A.useRef(void 0),t=A.useRef(void 0),[a,i]=A.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...zr(e),formState:a});const l=r.current.control;return l._options=e,Ze({subject:l._subjects.state,next:d=>{Ut(d,l._proxyFormState,l._updateFormState,!0)&&i({...l._formState})}}),A.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),A.useEffect(()=>{if(l._proxyFormState.isDirty){const d=l._getDirty();d!==a.isDirty&&l._subjects.state.next({isDirty:d})}},[l,a.isDirty]),A.useEffect(()=>{e.values&&!se(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,i(d=>({...d}))):l._resetDefaultValues()},[e.values,l]),A.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),A.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),A.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),r.current.formState=Mt(a,l),r.current}var Wr="Label",Kt=B.forwardRef((e,r)=>u.jsx(be.label,{...e,ref:r,onMouseDown:t=>{var i;t.target.closest("button, input, select, textarea")||((i=e.onMouseDown)==null||i.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Kt.displayName=Wr;var Hr=Kt;function le({className:e,...r}){return u.jsx(Hr,{"data-slot":"label",className:Z("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}const Zr=()=>{const[e,r]=B.useState(!1),[t,a]=B.useState(null),i=Me();return{loading:e,error:t,handleEmailLogin:async d=>{try{const{email:c,password:h}=d,x=await(await gr(Oe,c,h)).user.getIdToken();bt.set("auth_token",x,{expires:30}),i("/organizer")}catch(c){c instanceof Be?(console.error("Firebase error:",c.message),a("Failed to log in with Email, please try again")):c instanceof Error?(console.error("Error:",c.message),a("An error occurred, please try again")):(console.error("An unknown error occurred",c),a("Something went wrong. Please try again later."))}finally{r(!1)}}}},Kr=()=>{const[e,r]=B.useState(!1),[t,a]=B.useState(null),i=Me();return{loading:e,error:t,handleEmailSignup:async d=>{r(!0),a(null);const{email:c,password:h}=d;try{await mr(Oe,c,h),i("/login")}catch(p){p instanceof Be?(console.error("Firebase error:",p.message),a("Failed to log in with Google, please try again")):p instanceof Error?(console.error("Error:",p.message),a("An error occurred, please try again")):(console.error("An unknown error occurred",p),a("Something went wrong. Please try again later."))}finally{r(!1)}}}},Jr=()=>{const[e,r]=B.useState(!1),[t,a]=B.useState(null),[i,l]=B.useState(!1),d=Me();return{loading:e,error:t,success:i,handleGoogleLogin:async()=>{r(!0),a(null);const h=new yr;try{const b=(await hr(Oe,h)).user;if(b.uid){const S=await b.getIdToken();bt.set("auth_token",S,{expires:30}),l(!0),d("/organizer")}}catch(p){p instanceof Be?(console.error("Firebase error:",p.message),a("Failed to log in with Google, please try again")):p instanceof Error?(console.error("Error:",p.message),a("An error occurred, please try again")):(console.error("An unknown error occurred",p),a("Something went wrong. Please try again later."))}finally{r(!1)}}}},Yr=()=>{const{control:e,handleSubmit:r,formState:{errors:t}}=Zt(),{loading:a,error:i,handleEmailLogin:l}=Zr(),d=async c=>{await l(c)};return u.jsx("form",{onSubmit:r(d),children:u.jsxs("div",{className:"flex flex-col gap-6",children:[u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"email",children:"Email"}),u.jsx(ne,{name:"email",control:e,defaultValue:"",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}},render:({field:c})=>u.jsx(ie,{...c,id:"email",type:"email",placeholder:"m@example.com",required:!0})}),t.email&&u.jsx("p",{className:"text-red-500 text-sm",children:t.email.message})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(le,{htmlFor:"password",children:"Password"}),u.jsx("a",{href:"#",className:"ml-auto inline-block text-sm underline-offset-4 hover:underline",children:"Forgot your password?"})]}),u.jsx(ne,{name:"password",control:e,defaultValue:"",rules:{required:"Password is required"},render:({field:c})=>u.jsx(ie,{...c,id:"password",type:"password",required:!0})}),t.password&&u.jsx("p",{className:"text-red-500 text-sm",children:t.password.message})]}),u.jsx(Ue,{type:"submit",className:"w-full",disabled:a,children:a?u.jsxs(u.Fragment,{children:[u.jsx(qe,{className:"animate-spin"}),"Please wait"]}):"Login"}),i&&u.jsx("p",{className:"text-red-500 text-center mt-2",children:i})]})})},Qr=({...e})=>{const{theme:r="system"}=xr();return u.jsx(vr,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium"}},...e})},Jt=()=>{const{loading:e,error:r,success:t,handleGoogleLogin:a}=Jr();return u.jsxs(u.Fragment,{children:[u.jsx(Ue,{variant:"outline",disabled:e,className:"w-full",onClick:a,children:e?u.jsxs(u.Fragment,{children:[u.jsx(qe,{className:"animate-spin"}),"Please wait"]}):"Login with Google"}),u.jsx(Qr,{}),r&&u.jsx("p",{className:"text-red-500 text-center",children:r}),t&&u.jsx("p",{className:"text-green-500",children:"Successful! Redirecting..."})]})},Xr=({className:e,...r})=>u.jsx("div",{className:Z("flex flex-col gap-6",e),...r,children:u.jsxs(Dt,{children:[u.jsx(Tt,{children:u.jsx(kt,{className:"text-2xl",children:"Login"})}),u.jsxs(Ct,{children:[u.jsx("div",{children:u.jsx(Yr,{})}),u.jsx("div",{className:"mt-6",children:u.jsx(Jt,{})}),u.jsxs("div",{className:"mt-4 text-center text-sm",children:["Don't have an account?"," ",u.jsx("a",{href:"#",className:"underline underline-offset-4",children:"Sign up"})]})]})]})}),es=()=>{const{control:e,handleSubmit:r,getValues:t,formState:{errors:a}}=Zt(),{loading:i,error:l,handleEmailSignup:d}=Kr(),c=async h=>{await d(h)};return u.jsx("form",{onSubmit:r(c),children:u.jsxs("div",{className:"w-full grid gap-4",children:[u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"email",children:"Email"}),u.jsx(ne,{name:"email",control:e,defaultValue:"",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,message:"Invalid email address"}},render:({field:h})=>u.jsx(ie,{...h,id:"email",type:"email",placeholder:"m@example.com",required:!0})}),a.email&&u.jsx("p",{className:"text-red-500 text-sm",children:a.email.message})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"firstName",children:"First Name"}),u.jsx(ne,{name:"firstName",control:e,render:({field:h})=>u.jsx(ie,{...h,id:"firstName",type:"text",placeholder:"John",required:!0})}),a.firstName&&u.jsx("p",{className:"text-red-500 text-sm",children:a.firstName.message})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"lastName",children:"Last Name"}),u.jsx(ne,{name:"lastName",control:e,render:({field:h})=>u.jsx(ie,{...h,id:"lastName",type:"text",placeholder:"Doe",required:!0})}),a.lastName&&u.jsx("p",{className:"text-red-500 text-sm",children:a.lastName.message})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"password",children:"Password"}),u.jsx(ne,{name:"password",control:e,defaultValue:"",rules:{required:"Password is required"},render:({field:h})=>u.jsx(ie,{...h,id:"password",type:"password",required:!0})}),a.password&&u.jsx("p",{className:"text-red-500 text-sm",children:a.password.message})]}),u.jsxs("div",{className:"grid gap-2",children:[u.jsx(le,{htmlFor:"confirmPassword",children:"Confirm Password"}),u.jsx(ne,{name:"confirmPassword",control:e,defaultValue:"",rules:{required:"Please confirm your password",validate:h=>{const{password:p}=t();return h===p||"Passwords do not match"}},render:({field:h})=>u.jsx(ie,{...h,id:"confirmPassword",type:"password",required:!0})}),a.confirmPassword&&u.jsx("p",{className:"text-red-500 text-sm text-start",children:a.confirmPassword.message})]}),u.jsx(Ue,{type:"submit",className:"w-full",disabled:i,children:i?u.jsxs(u.Fragment,{children:[u.jsx(qe,{className:"animate-spin"}),"Please wait"]}):"Sign Up"}),l&&u.jsx("p",{className:"text-red-500 text-sm text-start mt-2",children:l})]})})},ts=({className:e,...r})=>u.jsx("div",{className:Z("flex flex-col gap-6",e),...r,children:u.jsxs(Dt,{children:[u.jsx(Tt,{children:u.jsx(kt,{className:"text-2xl",children:"Sign Up"})}),u.jsxs(Ct,{children:[u.jsx("div",{children:u.jsx(es,{})}),u.jsxs("div",{className:"mt-6",children:[u.jsx(Jt,{})," "]})]})]})});function rs(){return u.jsx("div",{className:"flex min-h-full w-full items-center justify-center p-10 max-sm:p-4",children:u.jsx("div",{className:"w-full max-w-sm",children:u.jsxs(jr,{defaultValue:"login",className:"w-full",children:[u.jsxs(Sr,{className:"grid w-full grid-cols-2",children:[u.jsx(lt,{value:"login",children:"Log in"}),u.jsx(lt,{value:"signup",children:"Sign up"})]}),u.jsx(ot,{value:"login",children:u.jsx(Xr,{})}),u.jsx(ot,{value:"signup",children:u.jsx(ts,{})})]})})})}function ds(){return u.jsxs("div",{children:[u.jsx(fr,{}),u.jsx(rs,{})]})}export{ds as default};
