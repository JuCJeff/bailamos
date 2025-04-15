import{u as se,j as e,F as de,r as f,C as A,S as ue,e as H,f as me,I as xe,h as fe,i as ge,k as ae,l as re,D as he,m as pe,n as je,o as ve,T as be,P as ye,p as we,q as Ne,V as Ce,s as Se,t as Pe,v as ke,w as Fe,x as Te,y as ze,z as ne,A as _e,E as Ee,G as Me,H as De,J as Ie,K as Le,L as Ue,M as Oe,N as Ve,O as Ae,Q as Re,U as $e,W as He,X as z,Y as Be}from"./react-Cm2Y3r6B.js";import{aW as I,aX as p,aG as qe,aA as We}from"./vendor-DXDANXqE.js";import{a as T,B as y,c as j,I as F,b as Y,C as B,e as q,f as W,g as K,s as Ke,d as M,h as Ge,H as Je}from"./card-CwnJaGPb.js";import{s as Xe,r as Qe,u as Ye,a as Ze,b as Z,c as R,d as et,e as tt,q as st,o as at,g as rt,f as nt,h as oe,i as ot,j as lt,T as it}from"./firebase-Coa1ixzI.js";import{L as ct,T as dt,a as ut,b as U,c as O}from"./label-CypmAbds.js";import{u as mt,A as xt,G as ft,M as gt,I as ht}from"./google-maps-MoKdV3t3.js";import{m as pt,a as E,E as jt}from"./EventCard-CwHmWlwx.js";import"./shadcn-ui-BA32w1ww.js";import"./index-BsO5K6TG.js";const vt=()=>{const t=se();return{handleSignOut:async()=>{try{const s=await Xe(T);console.log(s),I.remove("auth_token"),t("/login")}catch(s){console.error("Error during sign out: ",s)}}}},bt=()=>{const{handleSignOut:t}=vt();return e.jsx(y,{onClick:t,children:"Log out"})},yt=de,le=f.createContext({}),k=({...t})=>e.jsx(le.Provider,{value:{name:t.name},children:e.jsx(A,{...t})}),G=()=>{const t=f.useContext(le),r=f.useContext(ie),{getFieldState:s}=H(),l=me({name:t.name}),n=s(t.name,l);if(!t)throw new Error("useFormField should be used within <FormField>");const{id:i}=r;return{id:i,name:t.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...n}},ie=f.createContext({});function w({className:t,...r}){const s=f.useId();return e.jsx(ie.Provider,{value:{id:s},children:e.jsx("div",{"data-slot":"form-item",className:j("grid gap-2",t),...r})})}function b({className:t,...r}){const{error:s,formItemId:l}=G();return e.jsx(ct,{"data-slot":"form-label","data-error":!!s,className:j("data-[error=true]:text-destructive",t),htmlFor:l,...r})}function C({...t}){const{error:r,formItemId:s,formDescriptionId:l,formMessageId:n}=G();return e.jsx(ue,{"data-slot":"form-control",id:s,"aria-describedby":r?`${l} ${n}`:`${l}`,"aria-invalid":!!r,...t})}function S({className:t,...r}){const{error:s,formMessageId:l}=G(),n=s?String((s==null?void 0:s.message)??""):r.children;return n?e.jsx("p",{"data-slot":"form-message",id:l,className:j("text-destructive text-sm",t),...r,children:n}):null}function wt({className:t,...r}){return e.jsx("textarea",{"data-slot":"textarea",className:j("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),...r})}const ee=p.object({name:p.string(),percentage:p.number().max(100,"Percentage cannot exceed 100%")}),Nt=p.object({title:p.string().min(3,"Title is required"),startTime:p.date({required_error:"A start date and time is required"}),endTime:p.date({required_error:"An end date and time is required"}),price:p.number(),description:p.string().optional(),image:p.instanceof(File).optional(),link:p.string().optional(),music:p.array(p.string()).nonempty("Select at least one category"),musicPercentages:p.record(p.string(),ee).and(p.object({others:ee}).optional()).refine(t=>Object.values(t).reduce((r,s)=>r+s.percentage,0)<=100,{message:"Total music percentages cannot exceed 100%"}),location:p.object({propertyName:p.string().optional(),address:p.string().optional(),city:p.string().optional(),state:p.string().optional(),googleMapsUrl:p.string().optional(),lat:p.number().optional(),lng:p.number().optional()}).optional()}),Ct=({control:t,name:r})=>e.jsx(k,{control:t,name:r,render:({field:s})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:"imageUpload",children:"Upload Image"}),e.jsx(C,{children:e.jsx(St,{id:"imageUpload",value:s.value||void 0,onChange:s.onChange})}),e.jsx(S,{})]})}),St=({id:t,value:r,onChange:s})=>{const[l,n]=f.useState(null),i=f.useRef(null);f.useEffect(()=>{if(r instanceof File){const a=URL.createObjectURL(r);return n(a),()=>URL.revokeObjectURL(a)}else n(null)},[r]);const o=a=>{var x;const u=(x=a[0])==null?void 0:x.file;u instanceof File?s(u):(console.warn("Selected image is not a valid File object"),s(void 0))};return e.jsx(xe,{multiple:!1,value:r?[{file:r,data_url:l??""}]:[],onChange:o,dataURLKey:"data_url",children:({onImageUpload:a,onImageUpdate:u,onImageRemove:x,isDragging:m,dragProps:d})=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("input",{id:t,type:"file",ref:i,className:"hidden",onChange:c=>{var h;const g=(h=c.target.files)==null?void 0:h[0];g instanceof File&&s(g)}}),e.jsx(y,{type:"button",style:m?{backgroundColor:"limegreen",transition:"0.25s"}:void 0,onClick:a,...d,children:"Click or Drop image here"}),l&&e.jsxs("div",{children:[e.jsx("img",{src:l,alt:"event preview",className:"rounded-2xl"}),e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx(y,{type:"button",onClick:()=>u(0),children:"Update"}),e.jsx(y,{type:"button",onClick:()=>x(0),children:"Remove"})]})]})]})})},Pt=["places","marker"],_={lat:43.0722,lng:-89.4008},kt=({control:t,name:r})=>{const[s,l]=f.useState(null),[n,i]=f.useState(!1),[o,a]=f.useState(_),u=f.useRef(null),{isLoaded:x}=mt({googleMapsApiKey:"AIzaSyBuImOK6KWeeg3f71cgw6R-ssJj4arkAjk",libraries:Pt}),m=d=>{var N,P,J,X,Q;if(!u.current)return;const c=u.current.getPlace();if(!((N=c.geometry)!=null&&N.location))return;const g=c.geometry.location.lat(),h=c.geometry.location.lng(),v={propertyName:c.name??"",address:c.formatted_address??"",city:(J=(P=c.address_components)==null?void 0:P.find(L=>L.types.includes("locality")))==null?void 0:J.long_name,state:(Q=(X=c.address_components)==null?void 0:X.find(L=>L.types.includes("administrative_area_level_1")))==null?void 0:Q.short_name,googleMapsUrl:c.url?c.url:`https://www.google.com/maps/search/?api=1&query=${g},${h}`,lat:g,lng:h};l(v),a({lat:g,lng:h}),d(v)};return x?e.jsx(k,{control:t,name:r,render:({field:d})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:r,children:"Event Location"}),e.jsx(C,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(xt,{onLoad:c=>u.current=c,onPlaceChanged:()=>m(d.onChange),children:e.jsx(F,{id:"location",placeholder:"Search for a location...",className:"w-full"})}),e.jsx("div",{className:"w-full h-72 rounded-md border",children:e.jsxs(ft,{center:o,zoom:15,mapContainerClassName:"w-full max-w-full h-full rounded-2xl",options:pt,children:[s&&e.jsx(gt,{position:{lat:o.lat??_.lat,lng:o.lng??_.lng},onClick:()=>i(!0)}),s&&n&&e.jsx(ht,{position:{lat:o.lat??_.lat,lng:o.lng??_.lng},onCloseClick:()=>i(!1),children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"font-semibold text-md text-primary",children:s.propertyName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.address}),s.city&&s.state&&e.jsxs("p",{className:"text-sm text-gray-400",children:[s.city,", ",s.state]}),e.jsx("a",{href:s.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-primary underline text-sm",children:"View on Google Maps"})]})})]})})]})}),e.jsx(S,{})]})}):e.jsx("p",{children:"Loading map..."})};function ce({className:t,...r}){return e.jsx(fe,{"data-slot":"checkbox",className:j("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...r,children:e.jsx(ge,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:e.jsx(ae,{className:"size-3.5"})})})}const Ft=({control:t,name:r})=>{const{field:{value:s,onChange:l}}=re({name:r,control:t}),[n,i]=f.useState(s===0),o=u=>{const x=u.target.value?Number(u.target.value):0;l(x),x>0&&i(!1)},a=()=>{const u=!n;i(u),l(u?0:"")};return e.jsxs("div",{className:"space-y-2",children:[!n&&e.jsx(k,{control:t,name:r,render:()=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"price",children:"Price"}),e.jsx(C,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"pe-1",children:"$"}),e.jsx(F,{placeholder:"0",id:"price",type:"number",value:s||"",onChange:o})]})}),e.jsx(S,{})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(ce,{id:"freeEvent",checked:n,onCheckedChange:a}),e.jsx("label",{htmlFor:"freeEvent",className:"px-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This is a free event"})]})]})},Tt=()=>{const{control:t,watch:r,setValue:s,trigger:l}=H(),n=r("music",["bachata","salsa"]),i=r("musicPercentages",{}),[o,a]=f.useState({}),[u,x]=f.useState(!1),m=f.useCallback(()=>{const d=Object.entries(i).filter(([g])=>g!=="others").reduce((g,[,h])=>g+((h==null?void 0:h.percentage)??0),0),c=Math.max(100-d,0);c>0?(s("musicPercentages.others",{name:"Others",percentage:c}),n.includes("others")||s("music",[...n,"others"])):(s("musicPercentages.others",{name:"Others",percentage:0}),n.includes("others")&&s("music",n.filter(g=>g!=="others"))),l("musicPercentages")},[i,n,s,l]);return f.useEffect(()=>{u||(n.forEach(d=>{var c;i[d]||s(`musicPercentages.${d}`,{name:((c=E.find(g=>g.id===d))==null?void 0:c.label)??d,percentage:d==="bachata"||d==="salsa"?50:0}),a(g=>({...g,[d]:`${d==="bachata"||d==="salsa"?50:0}`}))}),x(!0))},[n,i,s,u]),f.useEffect(()=>{Object.keys(i).filter(c=>c!=="others"&&!n.includes(c)).forEach(c=>{var g;s(`musicPercentages.${c}`,{name:((g=E.find(h=>h.id===c))==null?void 0:g.label)??c,percentage:0}),a(h=>({...h,[c]:"0"}))})},[n,i,s]),f.useEffect(()=>{m()},[i,m]),e.jsxs(w,{className:"space-y-2",children:[e.jsx(b,{children:"Music Breakdown"}),n.length===0?e.jsx("p",{className:"text-start text-sm text-gray-500",children:"No music categories selected"}):n.map(d=>{const c=E.find(g=>g.id===d);return c&&e.jsx(A,{control:t,name:`musicPercentages.${d}.percentage`,render:({field:g})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:c.label}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(C,{children:e.jsx(F,{type:"number",value:o[d]??g.value??"",onChange:h=>{a(v=>({...v,[d]:h.target.value}))},onBlur:()=>{const h=o[d]?Number(o[d]):void 0;s(`musicPercentages.${d}.percentage`,h),m(),a(v=>{const N={...v};return delete N[d],N})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},d)}),n.includes("others")&&i.others&&e.jsx(A,{control:t,name:"musicPercentages.others.percentage",render:({field:d})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:"Others"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(C,{children:e.jsx(F,{type:"number",value:o.others??d.value??"",onChange:c=>{a(g=>({...g,others:c.target.value}))},onBlur:()=>{const c=o.others?Number(o.others):void 0;s("musicPercentages.others.percentage",c),m(),a(g=>{const h={...g};return delete h.others,h})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},"others"),e.jsx(S,{})]})};function zt({className:t,classNames:r,showOutsideDays:s=!0,...l}){return e.jsx(he,{showOutsideDays:s,className:j("p-3",t),classNames:{months:"flex flex-col sm:flex-row gap-2",month:"flex flex-col gap-4",caption:"flex justify-center pt-1 relative items-center w-full",caption_label:"text-sm font-medium",nav:"flex items-center gap-1",nav_button:j(Y({variant:"outline"}),"size-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-x-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:j("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",l.mode==="range"?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:j(Y({variant:"ghost"}),"size-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",day_range_end:"day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:({className:n,...i})=>e.jsx(je,{className:j("size-4",n),...i}),IconRight:({className:n,...i})=>e.jsx(pe,{className:j("size-4",n),...i})},...l})}function _t({...t}){return e.jsx(ve,{"data-slot":"popover",...t})}function Et({...t}){return e.jsx(be,{"data-slot":"popover-trigger",...t})}function Mt({className:t,align:r="center",sideOffset:s=4,...l}){return e.jsx(ye,{children:e.jsx(we,{"data-slot":"popover-content",align:r,sideOffset:s,className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",t),...l})})}function V({className:t,children:r,...s}){return e.jsxs(Ne,{"data-slot":"scroll-area",className:j("relative",t),...s,children:[e.jsx(Ce,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:r}),e.jsx($,{}),e.jsx(Se,{})]})}function $({className:t,orientation:r="vertical",...s}){return e.jsx(Pe,{"data-slot":"scroll-area-scrollbar",orientation:r,className:j("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",t),...s,children:e.jsx(ke,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function Dt({...t}){return e.jsx(Fe,{"data-slot":"select",...t})}function It({...t}){return e.jsx(_e,{"data-slot":"select-value",...t})}function Lt({className:t,size:r="default",children:s,...l}){return e.jsxs(Te,{"data-slot":"select-trigger","data-size":r,className:j("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...l,children:[s,e.jsx(ze,{asChild:!0,children:e.jsx(ne,{className:"size-4 opacity-50"})})]})}function Ut({className:t,children:r,position:s="popper",...l}){return e.jsx(Ee,{children:e.jsxs(Me,{"data-slot":"select-content",className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s,...l,children:[e.jsx(Ot,{}),e.jsx(De,{className:j("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:r}),e.jsx(Vt,{})]})})}function D({className:t,children:r,...s}){return e.jsxs(Ie,{"data-slot":"select-item",className:j("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...s,children:[e.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:e.jsx(Le,{children:e.jsx(ae,{className:"size-4"})})}),e.jsx(Ue,{children:r})]})}function Ot({className:t,...r}){return e.jsx(Oe,{"data-slot":"select-scroll-up-button",className:j("flex cursor-default items-center justify-center py-1",t),...r,children:e.jsx(Ve,{className:"size-4"})})}function Vt({className:t,...r}){return e.jsx(Ae,{"data-slot":"select-scroll-down-button",className:j("flex cursor-default items-center justify-center py-1",t),...r,children:e.jsx(ne,{className:"size-4"})})}function te({form:t,label:r,formFieldName:s}){function l(o){o&&t.setValue(s,o)}function n(o){const a=We(new Date,parseInt(o)),u=t.getValues(s);u?a.setHours(u.getHours(),u.getMinutes(),u.getSeconds()):a.setHours(0,0,0,0),t.setValue(s,a)}function i(o,a){const u=t.getValues(s)||new Date,x=new Date(u);if(o==="hour"){const m=parseInt(a,10);x.getHours()>=12?x.setHours(m+12):x.setHours(m%12)}else if(o==="minute")x.setMinutes(parseInt(a,10));else if(o==="ampm"){const m=x.getHours();a==="AM"&&m>=12?x.setHours(m-12):a==="PM"&&m<12&&x.setHours(m+12)}t.setValue(s,x)}return e.jsx(k,{control:t.control,name:s,render:({field:o})=>e.jsxs(w,{className:"flex flex-col text-start",children:[e.jsx(b,{children:r}),e.jsxs(_t,{children:[e.jsx(Et,{asChild:!0,children:e.jsx(C,{children:e.jsxs(y,{variant:"outline",className:j("w-full pl-3 text-left font-normal",!o.value&&"text-muted-foreground"),children:[o.value?qe(o.value,"MM/dd/yyyy hh:mm aa"):e.jsx("span",{children:"Select date and time"}),e.jsx(Re,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(Mt,{className:"w-auto p-2",children:e.jsxs("div",{className:"flex-col sm:flex",children:[e.jsx("div",{children:e.jsxs(Dt,{onValueChange:n,children:[e.jsx(Lt,{children:e.jsx(It,{placeholder:"Select"})}),e.jsxs(Ut,{position:"popper",children:[e.jsx(D,{value:"0",children:"Today"}),e.jsx(D,{value:"1",children:"Tomorrow"}),e.jsx(D,{value:"3",children:"In 3 days"}),e.jsx(D,{value:"7",children:"In a week"})]})]})}),e.jsxs("div",{className:"sm:flex",children:[e.jsx(zt,{mode:"single",selected:o.value,onSelect:l,initialFocus:!0}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x",children:[e.jsxs(V,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(a,u)=>u+1).reverse().map(a=>e.jsx(y,{size:"icon",variant:o.value&&o.value.getHours()%12===a%12?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>i("hour",a.toString()),children:a},a))}),e.jsx($,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsxs(V,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(a,u)=>u*5).map(a=>e.jsx(y,{size:"icon",variant:o.value&&o.value.getMinutes()===a?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>i("minute",a.toString()),children:a.toString().padStart(2,"0")},a))}),e.jsx($,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsx(V,{className:"",children:e.jsx("div",{className:"flex sm:flex-col p-2",children:["AM","PM"].map(a=>e.jsx(y,{size:"icon",variant:o.value&&(a==="AM"&&o.value.getHours()<12||a==="PM"&&o.value.getHours()>=12)?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>i("ampm",a),children:a},a))})})]})]})]})})]}),e.jsx(S,{})]})})}const At=({control:t,name:r})=>{const{getValues:s,setValue:l}=H(),{field:{value:n,onChange:i}}=re({name:r,control:t}),o=(a,u)=>{const x=a?[...n||[],u]:(n==null?void 0:n.filter(m=>m!==u))||[];if(i(x),!a){const m=s("musicPercentages")||{},d=Object.fromEntries(Object.entries(m).filter(([c])=>c!==u));l("musicPercentages",d)}};return e.jsxs(w,{children:[e.jsx(b,{children:"Music"}),E.map(a=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ce,{id:a.id,checked:n==null?void 0:n.includes(a.id),onCheckedChange:u=>o(!!u,a.id)}),e.jsx(b,{htmlFor:a.id,className:"text-sm font-normal",children:a.label})]},a.id)),e.jsx(S,{})]})},Rt=({className:t,...r})=>{const[s,l]=f.useState(!1),n=$e({resolver:He(Nt),defaultValues:{music:["bachata","salsa"],location:{},musicPercentages:{...Object.fromEntries(E.map(a=>[a.id,{name:a.label,percentage:a.id==="bachata"||a.id==="salsa"?50:0}])),others:{name:"Others",percentage:0}}}}),i=n.watch(),o=async a=>{var d;l(!0);let u="";const x=T.currentUser;if(!x){console.error("User not authenticated"),l(!1);return}try{if(a.image instanceof File){const c=Qe(Ke,`events/${Date.now()}-${a.image.name}`);await Ye(c,a.image),u=await Ze(c)}}catch(c){console.error("Image upload failed:",c),l(!1);return}const m={title:a.title,startTime:a.startTime,endTime:a.endTime,imageUrl:u,description:(d=a.description)==null?void 0:d.trim(),price:a.price,music:a.music,musicPercentages:a.musicPercentages,location:a.location,link:a.link,organizerId:x.uid,createdAt:et()};try{await Z(R(M,"organizers",x.uid,"events"),m),await Z(R(M,"events"),m),console.log("Event successfully created in both collections!")}catch(c){console.error("Firestore error:",c),alert("There was an error saving your event. Please try again.")}l(!1)};return e.jsx("div",{className:j("w-full flex flex-col gap-6 m-2",t),...r,children:e.jsxs(B,{className:"w-full",children:[e.jsx(q,{children:e.jsx(W,{className:"text-2xl",children:"Create Event"})}),e.jsx(K,{children:e.jsx(yt,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"flex flex-col justify-center py-2 gap-4",children:[e.jsx(k,{control:n.control,name:"title",render:({field:a})=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"title",children:"Title"}),e.jsx(C,{children:e.jsx(F,{id:"title",placeholder:"Dance Social",...a})}),e.jsx(S,{})]})}),e.jsx(kt,{control:n.control,name:"location"}),e.jsx(te,{form:n,label:"Start time",formFieldName:"startTime"}),e.jsx(te,{form:n,label:"End time",formFieldName:"endTime"}),e.jsx(Ct,{control:n.control,name:"image"}),e.jsx(k,{control:n.control,name:"description",render:({field:a})=>e.jsxs(w,{children:[e.jsx(b,{children:"Description"}),e.jsx(C,{children:e.jsx(wt,{...a})}),e.jsx(S,{})]})}),e.jsx(Ft,{control:n.control,name:"price"}),e.jsx(At,{control:n.control,name:"music"}),e.jsx(Tt,{}),e.jsx(k,{control:n.control,name:"link",render:({field:a})=>e.jsxs(w,{children:[e.jsx(b,{children:"Link"}),e.jsx(C,{children:e.jsx(F,{placeholder:"event link (optional)","aria-label":"link for additional details",...a})}),e.jsx(S,{})]})}),e.jsx("pre",{className:"text-start bg-gray-100 p-2 rounded-md text-sm overflow-auto",children:JSON.stringify({...i,image:i.image?i.image.name:"No image",startTime:i.startTime?i.startTime.toLocaleString():"No start time",endTime:i.endTime?i.endTime.toLocaleString():"No start time"},null,2)}),e.jsx(y,{type:"submit",disabled:s||!n.formState.isValid,children:s?"Submitting...":"Post Event"})]})})})]})})},$t=()=>{const[t]=tt(T),[r,s]=f.useState([]),[l,n]=f.useState(!0);return f.useEffect(()=>{if(!t)return;(async()=>{try{const o=R(M,`organizers/${t.uid}/events`),a=st(o,at("endTime","desc")),x=(await rt(a)).docs.map(m=>{const d=m.data();return{id:m.id,...d,createdAt:d.createdAt.toDate(),startTime:d.startTime.toDate(),endTime:d.endTime.toDate()}});s(x)}catch(o){console.error("Error fetching previous posts:",o)}finally{n(!1)}})()},[t]),t?l?e.jsx("p",{children:"Loading previous posts..."}):e.jsx("div",{className:"flex flex-col",children:r.map(i=>e.jsx(jt,{social:i},i.id))}):e.jsx("p",{children:"Please log in to view your previous posts."})},Ht=()=>{const[t,r]=f.useState(!0),[s,l]=f.useState(null),[n,i]=f.useState(null);return f.useEffect(()=>{if(I.get("auth_token")){const a=nt(T,async u=>{if(u){const x=oe(M,"organizers",u.uid),m=await ot(x);m.exists()?i(m.data()):l("No organizer data found")}else l("User not authenticated");r(!1)});return()=>a()}else r(!1),l("No authentication token found. Please log in")},[]),{loading:t,error:s,profileData:n}},Bt=()=>{const[t,r]=f.useState(!1),[s,l]=f.useState(null),[n,i]=f.useState(!1);return{loading:t,error:s,success:n,updateProfile:async a=>{var x;if(r(!0),l(null),i(!1),I.get("auth_token"))try{await((x=T.currentUser)==null?void 0:x.getIdToken(!0));const m=T.currentUser;if(m){const d=oe(M,"organizers",m.uid);await lt(d,a),i(!0)}else l("User not authenticated")}catch(m){console.error("Error updating profile:",m),l("Failed to update profile. Please try again.")}finally{r(!1)}else r(!1),l("No authentication token found. Please log in again.")}}},qt=()=>{const[t,r]=f.useState(!0),[s,l]=f.useState([]),{loading:n,error:i,profileData:o}=Ht(),{loading:a,error:u,success:x,updateProfile:m}=Bt();f.useEffect(()=>{o&&l([{label:"Email",value:o.email},{label:"First name",value:o.firstName||""},{label:"Last name",value:o.lastName||""},{label:"Social Media",value:o.socialMediaLink??""},{label:"Website",value:o.websiteLink??""}])},[o]);const d=async()=>{if(!o){z.error("Profile data not found");return}const c={"First name":"firstName","Last name":"lastName","Social Media":"socialMediaLink",Website:"websiteLink"},g=s.reduce((v,N)=>{const P=c[N.label];return P&&N.value&&(P==="createdAt"?v[P]=it.fromDate(new Date(N.value)):v[P]=N.value),v},{});if(!Object.keys(g).some(v=>g[v]!==o[v])){z("No changes detected. Profile not updated");return}await m(g),x&&z.success("Successfully updated your profile"),u&&z.error("An error occured while updating profile, please try again"),r(!0)};if(n)return e.jsx("div",{children:e.jsx("p",{children:"Profile loading..."})});if(i){z.error(i);return}return e.jsxs("div",{className:"flex flex-col items-center mt-4",children:[e.jsx(Be,{richColors:!0,position:"top-center",className:"text-start"}),e.jsx("div",{children:e.jsxs(B,{className:"md:w-[450px]",children:[e.jsx(q,{children:e.jsx(W,{children:"Profile"})}),e.jsx(K,{children:e.jsx("ul",{className:"flex-col mt-4",children:s.map((c,g)=>e.jsxs("li",{className:"flex gap-1 items-center text-start mb-2 justify-between",children:[e.jsx("label",{className:"w-1/4",children:c.label}),e.jsx(F,{value:c.value,onChange:h=>{const v=[...s];v[g].value=h.target.value,l(v)},disabled:c.label==="Email"||t,className:"w-3/4"})]},c.label))})}),e.jsxs(Ge,{className:"flex justify-between",children:[e.jsx(y,{variant:"link",onClick:()=>{r(!t)},disabled:!t,children:"Edit Profile"}),e.jsx(y,{onClick:d,disabled:a||t,variant:t?"outline":"default",children:"Update Profile"})]})]})})]})},Wt=({className:t,...r})=>e.jsx("div",{className:j("flex flex-col gap-6 m-2",t),...r,children:e.jsxs(B,{className:"min-h-svh",children:[e.jsx(q,{children:e.jsx(W,{className:"text-2xl",children:"Organizer Dashboard"})}),e.jsx(K,{children:e.jsx("div",{className:"flex min-h-full w-full justify-center px-0 sm:px-8",children:e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(dt,{defaultValue:"create-post",className:"w-full",children:[e.jsxs(ut,{className:"grid w-full grid-cols-3",children:[e.jsx(U,{value:"create-post",children:"Create Post"}),e.jsx(U,{value:"post",children:"Posts"}),e.jsx(U,{value:"profile",children:"Profile"})]}),e.jsx(O,{value:"create-post",className:"flex",children:e.jsx(Rt,{})}),e.jsx(O,{value:"post",children:e.jsx($t,{})}),e.jsx(O,{value:"profile",children:e.jsx(qt,{})})]})})})})]})});function ss(){const t=se();return f.useEffect(()=>{const r=I.get("auth_token");r?r===void 0&&t("/"):t("/login")},[t]),e.jsxs("div",{children:[e.jsx(Je,{}),e.jsx(Wt,{}),e.jsx(bt,{})]})}export{ss as default};
