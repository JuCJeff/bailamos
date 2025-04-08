import{u as se,j as e,F as de,r as x,C as V,S as ue,d as A,e as me,I as xe,f as fe,g as pe,h as ae,i as re,D as ge,k as he,l as je,m as ve,T as be,P as ye,n as we,o as Ne,V as Ce,p as ke,q as Se,s as Pe,t as Te,v as Fe,w as ze,x as ne,y as _e,z as Me,A as Ie,E as De,G as Le,H as Ee,J as Ue,K as Oe,L as Ve,M as Re,N as Ae,O as $e,Q as He,U as F,W as Be}from"./react-CzuZiG-A.js";import{U as D,V as p,E as qe,y as We}from"./vendor-Dkcwaizg.js";import{B as y,c as g,I as T,b as Z,H as Ke}from"./HeadBar-RK-OELl-.js";import{s as Ge,r as Je,u as Qe,g as Ze,a as X,c as Y,b as Xe,o as Ye,d as oe,e as et,f as tt,T as st}from"./firebase-DQYfvhxm.js";import{a as _,L as at,C as $,b as H,c as B,d as q,s as rt,e as I,f as nt,T as ot,g as lt,h as E,i as U}from"./config-BvxKIq4h.js";import{u as it,A as ct,G as dt,M as ut,I as mt}from"./google-maps-W6qen2jQ.js";import"./shadcn-ui-BA32w1ww.js";import"./index-D48t6P-3.js";const xt=()=>{const t=se();return{handleSignOut:async()=>{try{const s=await Ge(_);console.log(s),D.remove("auth_token"),t("/login")}catch(s){console.error("Error during sign out: ",s)}}}},ft=()=>{const{handleSignOut:t}=xt();return e.jsx(y,{onClick:t,children:"Log out"})},pt=de,le=x.createContext({}),P=({...t})=>e.jsx(le.Provider,{value:{name:t.name},children:e.jsx(V,{...t})}),W=()=>{const t=x.useContext(le),a=x.useContext(ie),{getFieldState:s}=A(),l=me({name:t.name}),o=s(t.name,l);if(!t)throw new Error("useFormField should be used within <FormField>");const{id:u}=a;return{id:u,name:t.name,formItemId:`${u}-form-item`,formDescriptionId:`${u}-form-item-description`,formMessageId:`${u}-form-item-message`,...o}},ie=x.createContext({});function w({className:t,...a}){const s=x.useId();return e.jsx(ie.Provider,{value:{id:s},children:e.jsx("div",{"data-slot":"form-item",className:g("grid gap-2",t),...a})})}function b({className:t,...a}){const{error:s,formItemId:l}=W();return e.jsx(at,{"data-slot":"form-label","data-error":!!s,className:g("data-[error=true]:text-destructive",t),htmlFor:l,...a})}function N({...t}){const{error:a,formItemId:s,formDescriptionId:l,formMessageId:o}=W();return e.jsx(ue,{"data-slot":"form-control",id:s,"aria-describedby":a?`${l} ${o}`:`${l}`,"aria-invalid":!!a,...t})}function C({className:t,...a}){const{error:s,formMessageId:l}=W(),o=s?String((s==null?void 0:s.message)??""):a.children;return o?e.jsx("p",{"data-slot":"form-message",id:l,className:g("text-destructive text-sm",t),...a,children:o}):null}function gt({className:t,...a}){return e.jsx("textarea",{"data-slot":"textarea",className:g("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),...a})}const ee=p.object({name:p.string(),percentage:p.number().max(100,"Percentage cannot exceed 100%")}),ht=p.object({title:p.string().min(3,"Title is required"),startTime:p.date({required_error:"A start date and time is required"}),endTime:p.date({required_error:"An end date and time is required"}),price:p.number(),description:p.string().optional(),image:p.instanceof(File).optional(),link:p.string().optional(),music:p.array(p.string()).nonempty("Select at least one category"),musicPercentages:p.record(p.string(),ee).and(p.object({others:ee}).optional()).refine(t=>Object.values(t).reduce((a,s)=>a+s.percentage,0)<=100,{message:"Total music percentages cannot exceed 100%"}),location:p.object({propertyName:p.string().optional(),address:p.string().optional(),city:p.string().optional(),state:p.string().optional(),googleMapsUrl:p.string().optional(),lat:p.number().optional(),lng:p.number().optional()}).optional()}),jt=({control:t,name:a})=>e.jsx(P,{control:t,name:a,render:({field:s})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:"imageUpload",children:"Upload Image"}),e.jsx(N,{children:e.jsx(vt,{id:"imageUpload",value:s.value||void 0,onChange:s.onChange})}),e.jsx(C,{})]})}),vt=({id:t,value:a,onChange:s})=>{const[l,o]=x.useState(null),u=x.useRef(null);x.useEffect(()=>{if(a instanceof File){const n=URL.createObjectURL(a);return o(n),()=>URL.revokeObjectURL(n)}else o(null)},[a]);const r=n=>{var c;const i=(c=n[0])==null?void 0:c.file;i instanceof File?s(i):(console.warn("Selected image is not a valid File object"),s(void 0))};return e.jsx(xe,{multiple:!1,value:a?[{file:a,data_url:l??""}]:[],onChange:r,dataURLKey:"data_url",children:({onImageUpload:n,onImageUpdate:i,onImageRemove:c,isDragging:d,dragProps:f})=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("input",{id:t,type:"file",ref:u,className:"hidden",onChange:m=>{var j;const h=(j=m.target.files)==null?void 0:j[0];h instanceof File&&s(h)}}),e.jsx(y,{type:"button",style:d?{backgroundColor:"limegreen",transition:"0.25s"}:void 0,onClick:n,...f,children:"Click or Drop image here"}),l&&e.jsxs("div",{children:[e.jsx("img",{src:l,alt:"event preview",className:"rounded-2xl"}),e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx(y,{type:"button",onClick:()=>i(0),children:"Update"}),e.jsx(y,{type:"button",onClick:()=>c(0),children:"Remove"})]})]})]})})},bt=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]}],yt=["places","marker"],wt={styles:bt,disableDefaultUI:!0,mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1},z={lat:43.0722,lng:-89.4008},Nt=({control:t,name:a})=>{const[s,l]=x.useState(null),[o,u]=x.useState(!1),[r,n]=x.useState(z),i=x.useRef(null),{isLoaded:c}=it({googleMapsApiKey:"AIzaSyBuImOK6KWeeg3f71cgw6R-ssJj4arkAjk",libraries:yt}),d=f=>{var k,S,G,J,Q;if(!i.current)return;const m=i.current.getPlace();if(!((k=m.geometry)!=null&&k.location))return;const h=m.geometry.location.lat(),j=m.geometry.location.lng(),v={propertyName:m.name??"",address:m.formatted_address??"",city:(G=(S=m.address_components)==null?void 0:S.find(L=>L.types.includes("locality")))==null?void 0:G.long_name,state:(Q=(J=m.address_components)==null?void 0:J.find(L=>L.types.includes("administrative_area_level_1")))==null?void 0:Q.short_name,googleMapsUrl:m.url?m.url:`https://www.google.com/maps/search/?api=1&query=${h},${j}`,lat:h,lng:j};l(v),n({lat:h,lng:j}),f(v)};return c?e.jsx(P,{control:t,name:a,render:({field:f})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:a,children:"Event Location"}),e.jsx(N,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(ct,{onLoad:m=>i.current=m,onPlaceChanged:()=>d(f.onChange),children:e.jsx(T,{id:"location",placeholder:"Search for a location...",className:"w-full"})}),e.jsx("div",{className:"w-full h-72 rounded-md border",children:e.jsxs(dt,{center:r,zoom:15,mapContainerClassName:"w-full h-full rounded-2xl",options:wt,children:[s&&e.jsx(ut,{position:{lat:r.lat??z.lat,lng:r.lng??z.lng},onClick:()=>u(!0)}),s&&o&&e.jsx(mt,{position:{lat:r.lat??z.lat,lng:r.lng??z.lng},onCloseClick:()=>u(!1),children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"font-semibold text-md text-primary",children:s.propertyName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.address}),s.city&&s.state&&e.jsxs("p",{className:"text-sm text-gray-400",children:[s.city,", ",s.state]}),e.jsx("a",{href:s.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-primary underline text-sm",children:"View on Google Maps"})]})})]})})]})}),e.jsx(C,{})]})}):e.jsx("p",{children:"Loading map..."})};function ce({className:t,...a}){return e.jsx(fe,{"data-slot":"checkbox",className:g("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:e.jsx(pe,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:e.jsx(ae,{className:"size-3.5"})})})}const Ct=({control:t,name:a})=>{const{field:{value:s,onChange:l}}=re({name:a,control:t}),[o,u]=x.useState(s===0),r=i=>{const c=i.target.value?Number(i.target.value):0;l(c),c>0&&u(!1)},n=()=>{const i=!o;u(i),l(i?0:"")};return e.jsxs("div",{className:"space-y-2",children:[!o&&e.jsx(P,{control:t,name:a,render:()=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"price",children:"Price"}),e.jsx(N,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"pe-1",children:"$"}),e.jsx(T,{placeholder:"0",id:"price",type:"number",value:s||"",onChange:r})]})}),e.jsx(C,{})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(ce,{id:"freeEvent",checked:o,onCheckedChange:n}),e.jsx("label",{htmlFor:"freeEvent",className:"px-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This is a free event"})]})]})},K=[{id:"bachata",label:"Bachata"},{id:"salsa",label:"Salsa"},{id:"merengue",label:"Merengue"},{id:"cumbia",label:"Cumbia"},{id:"zouk",label:"Zouk"}],kt=()=>{const{control:t,watch:a,setValue:s,trigger:l}=A(),o=a("music",["bachata","salsa"]),u=a("musicPercentages",{}),[r,n]=x.useState({}),i=x.useCallback(()=>{const c=Object.entries(u).filter(([f])=>f!=="others").reduce((f,[,m])=>f+((m==null?void 0:m.percentage)??0),0),d=Math.max(100-c,0);d>0?(s("musicPercentages.others",{name:"Others",percentage:d}),o.includes("others")||s("music",[...o,"others"])):(s("musicPercentages.others",{name:"Others",percentage:0}),o.includes("others")&&s("music",o.filter(f=>f!=="others"))),l("musicPercentages")},[u,o,s,l]);return x.useEffect(()=>{i()},[u,i]),e.jsxs(w,{className:"space-y-2",children:[e.jsx(b,{children:"Music Breakdown"}),o.length===0?e.jsx("p",{className:"text-start text-sm text-gray-500",children:"No music categories selected"}):o.map(c=>{const d=K.find(f=>f.id===c);return d&&e.jsx(V,{control:t,name:`musicPercentages.${c}.percentage`,render:({field:f})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:d.label}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(N,{children:e.jsx(T,{type:"number",value:r[c]??f.value??"",onChange:m=>{n(h=>({...h,[c]:m.target.value}))},onBlur:()=>{const m=r[c]?Number(r[c]):void 0;s(`musicPercentages.${c}.percentage`,m),i(),n(h=>{const j={...h};return delete j.someKey,j})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},c)}),o.includes("others")&&u.others&&e.jsx(V,{control:t,name:"musicPercentages.others.percentage",render:({field:c})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:"Others"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(N,{children:e.jsx(T,{type:"number",value:r.others??c.value??"",onChange:d=>{n(f=>({...f,others:d.target.value}))},onBlur:()=>{const d=r.others?Number(r.others):void 0;s("musicPercentages.others.percentage",d),i(),n(f=>{const m={...f};return delete m.others,m})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},"others"),e.jsx(C,{})]})};function St({className:t,classNames:a,showOutsideDays:s=!0,...l}){return e.jsx(ge,{showOutsideDays:s,className:g("p-3",t),classNames:{months:"flex flex-col sm:flex-row gap-2",month:"flex flex-col gap-4",caption:"flex justify-center pt-1 relative items-center w-full",caption_label:"text-sm font-medium",nav:"flex items-center gap-1",nav_button:g(Z({variant:"outline"}),"size-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-x-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:g("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",l.mode==="range"?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:g(Z({variant:"ghost"}),"size-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",day_range_end:"day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:({className:o,...u})=>e.jsx(je,{className:g("size-4",o),...u}),IconRight:({className:o,...u})=>e.jsx(he,{className:g("size-4",o),...u})},...l})}function Pt({...t}){return e.jsx(ve,{"data-slot":"popover",...t})}function Tt({...t}){return e.jsx(be,{"data-slot":"popover-trigger",...t})}function Ft({className:t,align:a="center",sideOffset:s=4,...l}){return e.jsx(ye,{children:e.jsx(we,{"data-slot":"popover-content",align:a,sideOffset:s,className:g("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",t),...l})})}function O({className:t,children:a,...s}){return e.jsxs(Ne,{"data-slot":"scroll-area",className:g("relative",t),...s,children:[e.jsx(Ce,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:a}),e.jsx(R,{}),e.jsx(ke,{})]})}function R({className:t,orientation:a="vertical",...s}){return e.jsx(Se,{"data-slot":"scroll-area-scrollbar",orientation:a,className:g("flex touch-none p-px transition-colors select-none",a==="vertical"&&"h-full w-2.5 border-l border-l-transparent",a==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",t),...s,children:e.jsx(Pe,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function zt({...t}){return e.jsx(Te,{"data-slot":"select",...t})}function _t({...t}){return e.jsx(_e,{"data-slot":"select-value",...t})}function Mt({className:t,size:a="default",children:s,...l}){return e.jsxs(Fe,{"data-slot":"select-trigger","data-size":a,className:g("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...l,children:[s,e.jsx(ze,{asChild:!0,children:e.jsx(ne,{className:"size-4 opacity-50"})})]})}function It({className:t,children:a,position:s="popper",...l}){return e.jsx(Me,{children:e.jsxs(Ie,{"data-slot":"select-content",className:g("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s,...l,children:[e.jsx(Dt,{}),e.jsx(De,{className:g("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:a}),e.jsx(Lt,{})]})})}function M({className:t,children:a,...s}){return e.jsxs(Le,{"data-slot":"select-item",className:g("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...s,children:[e.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:e.jsx(Ee,{children:e.jsx(ae,{className:"size-4"})})}),e.jsx(Ue,{children:a})]})}function Dt({className:t,...a}){return e.jsx(Oe,{"data-slot":"select-scroll-up-button",className:g("flex cursor-default items-center justify-center py-1",t),...a,children:e.jsx(Ve,{className:"size-4"})})}function Lt({className:t,...a}){return e.jsx(Re,{"data-slot":"select-scroll-down-button",className:g("flex cursor-default items-center justify-center py-1",t),...a,children:e.jsx(ne,{className:"size-4"})})}function te({form:t,label:a,formFieldName:s}){function l(r){r&&t.setValue(s,r)}function o(r){const n=We(new Date,parseInt(r)),i=t.getValues(s);i?n.setHours(i.getHours(),i.getMinutes(),i.getSeconds()):n.setHours(0,0,0,0),t.setValue(s,n)}function u(r,n){const i=t.getValues(s)||new Date,c=new Date(i);if(r==="hour"){const d=parseInt(n,10);c.getHours()>=12?c.setHours(d+12):c.setHours(d%12)}else if(r==="minute")c.setMinutes(parseInt(n,10));else if(r==="ampm"){const d=c.getHours();n==="AM"&&d>=12?c.setHours(d-12):n==="PM"&&d<12&&c.setHours(d+12)}t.setValue(s,c)}return e.jsx(P,{control:t.control,name:s,render:({field:r})=>e.jsxs(w,{className:"flex flex-col text-start",children:[e.jsx(b,{children:a}),e.jsxs(Pt,{children:[e.jsx(Tt,{asChild:!0,children:e.jsx(N,{children:e.jsxs(y,{variant:"outline",className:g("w-full pl-3 text-left font-normal",!r.value&&"text-muted-foreground"),children:[r.value?qe(r.value,"MM/dd/yyyy hh:mm aa"):e.jsx("span",{children:"Select date and time"}),e.jsx(Ae,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(Ft,{className:"w-auto p-2",children:e.jsxs("div",{className:"flex-col sm:flex",children:[e.jsx("div",{children:e.jsxs(zt,{onValueChange:o,children:[e.jsx(Mt,{children:e.jsx(_t,{placeholder:"Select"})}),e.jsxs(It,{position:"popper",children:[e.jsx(M,{value:"0",children:"Today"}),e.jsx(M,{value:"1",children:"Tomorrow"}),e.jsx(M,{value:"3",children:"In 3 days"}),e.jsx(M,{value:"7",children:"In a week"})]})]})}),e.jsxs("div",{className:"sm:flex",children:[e.jsx(St,{mode:"single",selected:r.value,onSelect:l,initialFocus:!0}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x",children:[e.jsxs(O,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(n,i)=>i+1).reverse().map(n=>e.jsx(y,{size:"icon",variant:r.value&&r.value.getHours()%12===n%12?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>u("hour",n.toString()),children:n},n))}),e.jsx(R,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsxs(O,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(n,i)=>i*5).map(n=>e.jsx(y,{size:"icon",variant:r.value&&r.value.getMinutes()===n?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>u("minute",n.toString()),children:n.toString().padStart(2,"0")},n))}),e.jsx(R,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsx(O,{className:"",children:e.jsx("div",{className:"flex sm:flex-col p-2",children:["AM","PM"].map(n=>e.jsx(y,{size:"icon",variant:r.value&&(n==="AM"&&r.value.getHours()<12||n==="PM"&&r.value.getHours()>=12)?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>u("ampm",n),children:n},n))})})]})]})]})})]}),e.jsx(C,{})]})})}const Et=({control:t,name:a})=>{const{getValues:s,setValue:l}=A(),{field:{value:o,onChange:u}}=re({name:a,control:t}),r=(n,i)=>{const c=n?[...o||[],i]:(o==null?void 0:o.filter(d=>d!==i))||[];if(u(c),!n){const d=s("musicPercentages")||{},f=Object.fromEntries(Object.entries(d).filter(([m])=>m!==i));l("musicPercentages",f)}};return e.jsxs(w,{children:[e.jsx(b,{children:"Music"}),K.map(n=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ce,{id:n.id,checked:o==null?void 0:o.includes(n.id),onCheckedChange:i=>r(!!i,n.id)}),e.jsx(b,{htmlFor:n.id,className:"text-sm font-normal",children:n.label})]},n.id)),e.jsx(C,{})]})},Ut=({className:t,...a})=>{const[s,l]=x.useState(!1),o=$e({resolver:He(ht),defaultValues:{music:["bachata","salsa"],location:{},musicPercentages:{...Object.fromEntries(K.map(r=>[r.id,{name:r.label,percentage:r.id==="bachata"||r.id==="salsa"?50:0}])),others:{name:"Others",percentage:0}}}}),u=async r=>{l(!0);let n="";const i=_.currentUser;if(!i){console.error("User not authenticated"),l(!1);return}try{if(r.image instanceof File){const d=Je(rt,`events/${Date.now()}-${r.image.name}`);await Qe(d,r.image),n=await Ze(d)}}catch(d){console.error("Image upload failed:",d),l(!1);return}const c={title:r.title,startTime:r.startTime,endTime:r.endTime,imageUrl:n,description:r.description,price:r.price,music:r.music,musicPercentages:r.musicPercentages,location:r.location,link:r.link,organizerId:i.uid,createdAt:Xe()};try{await X(Y(I,"organizers",i.uid,"events"),c),await X(Y(I,"events"),c),console.log("Event successfully created in both collections!")}catch(d){console.error("Firestore error:",d),alert("There was an error saving your event. Please try again.")}l(!1)};return e.jsx("div",{className:g("flex flex-col gap-6 m-2",t),...a,children:e.jsxs($,{children:[e.jsx(H,{children:e.jsx(B,{className:"text-2xl",children:"Create Event"})}),e.jsx(q,{children:e.jsx(pt,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(u),className:"flex flex-col justify-center py-2 gap-4",children:[e.jsx(P,{control:o.control,name:"title",render:({field:r})=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"title",children:"Title"}),e.jsx(N,{children:e.jsx(T,{id:"title",placeholder:"Dance Social",...r})}),e.jsx(C,{})]})}),e.jsx(Nt,{control:o.control,name:"location"}),e.jsx(te,{form:o,label:"Start time",formFieldName:"startTime"}),e.jsx(te,{form:o,label:"End time",formFieldName:"endTime"}),e.jsx(jt,{control:o.control,name:"image"}),e.jsx(P,{control:o.control,name:"description",render:({field:r})=>e.jsxs(w,{children:[e.jsx(b,{children:"Description"}),e.jsx(N,{children:e.jsx(gt,{...r})}),e.jsx(C,{})]})}),e.jsx(Ct,{control:o.control,name:"price"}),e.jsx(Et,{control:o.control,name:"music"}),e.jsx(kt,{}),e.jsx(P,{control:o.control,name:"link",render:({field:r})=>e.jsxs(w,{children:[e.jsx(b,{children:"Link"}),e.jsx(N,{children:e.jsx(T,{placeholder:"event link (optional)","aria-label":"link for additional details",...r})}),e.jsx(C,{})]})}),e.jsx(y,{type:"submit",disabled:s||!o.formState.isValid,children:s?"Submitting...":"Post Event"})]})})})]})})},Ot=()=>{const[t,a]=x.useState(!0),[s,l]=x.useState(null),[o,u]=x.useState(null);return x.useEffect(()=>{if(D.get("auth_token")){const n=Ye(_,async i=>{if(i){const c=oe(I,"organizers",i.uid),d=await et(c);d.exists()?u(d.data()):l("No organizer data found")}else l("User not authenticated");a(!1)});return()=>n()}else a(!1),l("No authentication token found. Please log in")},[]),{loading:t,error:s,profileData:o}},Vt=()=>{const[t,a]=x.useState(!1),[s,l]=x.useState(null),[o,u]=x.useState(!1);return{loading:t,error:s,success:o,updateProfile:async n=>{var c;if(a(!0),l(null),u(!1),D.get("auth_token"))try{await((c=_.currentUser)==null?void 0:c.getIdToken(!0));const d=_.currentUser;if(d){const f=oe(I,"organizers",d.uid);await tt(f,n),u(!0)}else l("User not authenticated")}catch(d){console.error("Error updating profile:",d),l("Failed to update profile. Please try again.")}finally{a(!1)}else a(!1),l("No authentication token found. Please log in again.")}}},Rt=()=>{const[t,a]=x.useState(!0),[s,l]=x.useState([]),{loading:o,error:u,profileData:r}=Ot(),{loading:n,error:i,success:c,updateProfile:d}=Vt();x.useEffect(()=>{r&&l([{label:"Email",value:r.email},{label:"First name",value:r.firstName||""},{label:"Last name",value:r.lastName||""},{label:"Social Media",value:r.socialMediaLink??""},{label:"Website",value:r.websiteLink??""}])},[r]);const f=async()=>{if(!r){F.error("Profile data not found");return}const m={"First name":"firstName","Last name":"lastName","Social Media":"socialMediaLink",Website:"websiteLink"},h=s.reduce((v,k)=>{const S=m[k.label];return S&&k.value&&(S==="createdAt"?v[S]=st.fromDate(new Date(k.value)):v[S]=k.value),v},{});if(!Object.keys(h).some(v=>h[v]!==r[v])){F("No changes detected. Profile not updated");return}await d(h),c&&F.success("Successfully updated your profile"),i&&F.error("An error occured while updating profile, please try again"),a(!0)};if(o)return e.jsx("div",{children:e.jsx("p",{children:"Profile loading..."})});if(u){F.error(u);return}return e.jsxs("div",{className:"flex flex-col items-center mt-4",children:[e.jsx(Be,{richColors:!0,position:"top-center",className:"text-start"}),e.jsx("div",{children:e.jsxs($,{className:"md:w-[450px]",children:[e.jsx(H,{children:e.jsx(B,{children:"Profile"})}),e.jsx(q,{children:e.jsx("ul",{className:"flex-col mt-4",children:s.map((m,h)=>e.jsxs("li",{className:"flex gap-1 items-center text-start mb-2 justify-between",children:[e.jsx("label",{className:"w-1/4",children:m.label}),e.jsx(T,{value:m.value,onChange:j=>{const v=[...s];v[h].value=j.target.value,l(v)},disabled:m.label==="Email"||t,className:"w-3/4"})]},m.label))})}),e.jsxs(nt,{className:"flex justify-between",children:[e.jsx(y,{variant:"link",onClick:()=>{a(!t)},disabled:!t,children:"Edit Profile"}),e.jsx(y,{onClick:f,disabled:n||t,variant:t?"outline":"default",children:"Update Profile"})]})]})})]})},At=({className:t,...a})=>e.jsx("div",{className:g("flex flex-col gap-6 m-2",t),...a,children:e.jsxs($,{className:"min-h-svh",children:[e.jsx(H,{children:e.jsx(B,{className:"text-2xl",children:"Organizer Dashboard"})}),e.jsx(q,{children:e.jsx("div",{className:"flex min-h-full w-full items-center justify-center p-2 max-sm:p-0",children:e.jsx("div",{className:"w-full max-w-sm justify-center",children:e.jsxs(ot,{defaultValue:"create-post",className:"w-full",children:[e.jsxs(lt,{className:"grid w-full grid-cols-3",children:[e.jsx(E,{value:"create-post",children:"Create Post"}),e.jsx(E,{value:"post",children:"Posts"}),e.jsx(E,{value:"profile",children:"Profile"})]}),e.jsx(U,{value:"create-post",children:e.jsx(Ut,{})}),e.jsx(U,{value:"post",children:"Previous posts"}),e.jsx(U,{value:"profile",children:e.jsx(Rt,{})})]})})})})]})});function Qt(){const t=se();return x.useEffect(()=>{const a=D.get("auth_token");a?a===void 0&&t("/"):t("/login")},[t]),e.jsxs("div",{children:[e.jsx(Ke,{}),e.jsx(At,{}),e.jsx(ft,{})]})}export{Qt as default};
