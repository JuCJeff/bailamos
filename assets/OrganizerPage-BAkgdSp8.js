import{u as ee,j as e,F as ie,r as x,C as O,S as ce,d as R,e as de,I as ue,f as me,g as xe,h as te,i as se,D as ge,k as fe,l as pe,m as he,T as je,P as ve,n as be,o as ye,V as we,p as Ne,q as Ce,s as Se,t as ke,v as Pe,w as Te,x as ae,y as Fe,z as ze,A as _e,E as Me,G as Ie,H as De,J as Le,K as Ee,L as Ue,M as Oe,N as Ve,O as Re,Q as Ae,U as F,W as $e}from"./react-CzuZiG-A.js";import{U as I,V as f,E as He,y as Be}from"./vendor-Dkcwaizg.js";import{B as y,c as p,I as T,b as Z,H as qe}from"./HeadBar-Byq-kAl8.js";import{s as We,r as Ke,u as Ge,g as Je,a as Qe,c as Ze,b as Xe,o as Ye,d as re,e as et,f as tt,T as st}from"./firebase-DQYfvhxm.js";import{a as M,L as at,C as A,b as $,c as H,d as B,s as rt,e as q,f as nt,T as ot,g as lt,h as L,i as E}from"./config-CHPrfZn8.js";import{u as it,A as ct,G as dt,M as ut,I as mt}from"./google-maps-W6qen2jQ.js";import"./shadcn-ui-BA32w1ww.js";import"./index-DdOzynQI.js";const xt=()=>{const t=ee();return{handleSignOut:async()=>{try{const s=await We(M);console.log(s),I.remove("auth_token"),t("/login")}catch(s){console.error("Error during sign out: ",s)}}}},gt=()=>{const{handleSignOut:t}=xt();return e.jsx(y,{onClick:t,children:"Log out"})},ft=ie,ne=x.createContext({}),P=({...t})=>e.jsx(ne.Provider,{value:{name:t.name},children:e.jsx(O,{...t})}),W=()=>{const t=x.useContext(ne),a=x.useContext(oe),{getFieldState:s}=R(),i=de({name:t.name}),n=s(t.name,i);if(!t)throw new Error("useFormField should be used within <FormField>");const{id:c}=a;return{id:c,name:t.name,formItemId:`${c}-form-item`,formDescriptionId:`${c}-form-item-description`,formMessageId:`${c}-form-item-message`,...n}},oe=x.createContext({});function w({className:t,...a}){const s=x.useId();return e.jsx(oe.Provider,{value:{id:s},children:e.jsx("div",{"data-slot":"form-item",className:p("grid gap-2",t),...a})})}function b({className:t,...a}){const{error:s,formItemId:i}=W();return e.jsx(at,{"data-slot":"form-label","data-error":!!s,className:p("data-[error=true]:text-destructive",t),htmlFor:i,...a})}function N({...t}){const{error:a,formItemId:s,formDescriptionId:i,formMessageId:n}=W();return e.jsx(ce,{"data-slot":"form-control",id:s,"aria-describedby":a?`${i} ${n}`:`${i}`,"aria-invalid":!!a,...t})}function C({className:t,...a}){const{error:s,formMessageId:i}=W(),n=s?String((s==null?void 0:s.message)??""):a.children;return n?e.jsx("p",{"data-slot":"form-message",id:i,className:p("text-destructive text-sm",t),...a,children:n}):null}function pt({className:t,...a}){return e.jsx("textarea",{"data-slot":"textarea",className:p("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),...a})}const X=f.object({name:f.string(),percentage:f.number().min(1,"Each percentage must be at least 1%").max(100,"Percentage cannot exceed 100%")}),ht=f.object({title:f.string().min(3,"Title is required"),startTime:f.date({required_error:"A start date and time is required"}),endTime:f.date({required_error:"An end date and time is required"}),price:f.number(),description:f.string().optional(),image:f.instanceof(File).optional(),link:f.string().optional(),music:f.array(f.string()).nonempty("Select at least one category"),musicPercentages:f.record(f.string(),X).and(f.object({others:X})).refine(t=>Object.values(t).reduce((a,s)=>a+s.percentage,0)<=100,{message:"Total music percentages cannot exceed 100%"}),location:f.object({propertyName:f.string().optional(),address:f.string().optional(),city:f.string().optional(),state:f.string().optional(),googleMapsUrl:f.string().optional(),lat:f.number().optional(),lng:f.number().optional()}).optional()}),jt=({control:t,name:a})=>e.jsx(P,{control:t,name:a,render:({field:s})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:"imageUpload",children:"Upload Image"}),e.jsx(N,{children:e.jsx(vt,{id:"imageUpload",value:s.value||void 0,onChange:s.onChange})}),e.jsx(C,{})]})}),vt=({id:t,value:a,onChange:s})=>{const[i,n]=x.useState(null),c=x.useRef(null),o=x.useRef(null);x.useEffect(()=>{if(a){const l=URL.createObjectURL(a);c.current=l,n(l)}return()=>{c.current&&URL.revokeObjectURL(c.current)}},[a]);const r=l=>{var u;const d=((u=l[0])==null?void 0:u.file)||void 0;s(d)};return e.jsx(ue,{multiple:!1,value:a?[{file:a,data_url:c.current??""}]:[],onChange:r,dataURLKey:"data_url",children:({imageList:l,onImageUpload:d,onImageUpdate:u,onImageRemove:g,isDragging:m,dragProps:j})=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("input",{id:t,type:"file",ref:o,className:"hidden",onChange:v=>{var h;(h=v.target.files)!=null&&h[0]&&s(v.target.files[0])}}),e.jsx(y,{type:"button",style:m?{backgroundColor:"limegreen",transitionDuration:"250ms"}:void 0,onClick:d,...j,children:"Click or Drop image here"}),l.map((v,h)=>e.jsxs("div",{children:[e.jsx("img",{src:i??void 0,alt:"event-image",className:"rounded-2xl"}),e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx(y,{type:"button",onClick:()=>u(h),children:"Update"}),e.jsx(y,{type:"button",onClick:()=>g(h),children:"Remove"})]})]},v.data_url))]})})},bt=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]}],yt=["places","marker"],wt={styles:bt,disableDefaultUI:!0,mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!1},z={lat:43.0722,lng:-89.4008},Nt=({control:t,name:a})=>{const[s,i]=x.useState(null),[n,c]=x.useState(!1),[o,r]=x.useState(z),l=x.useRef(null),{isLoaded:d}=it({googleMapsApiKey:"AIzaSyBuImOK6KWeeg3f71cgw6R-ssJj4arkAjk",libraries:yt}),u=g=>{var S,k,G,J,Q;if(!l.current)return;const m=l.current.getPlace();if(!((S=m.geometry)!=null&&S.location))return;const j=m.geometry.location.lat(),v=m.geometry.location.lng(),h={propertyName:m.name??"",address:m.formatted_address??"",city:(G=(k=m.address_components)==null?void 0:k.find(D=>D.types.includes("locality")))==null?void 0:G.long_name,state:(Q=(J=m.address_components)==null?void 0:J.find(D=>D.types.includes("administrative_area_level_1")))==null?void 0:Q.short_name,googleMapsUrl:m.url?m.url:`https://www.google.com/maps/search/?api=1&query=${j},${v}`,lat:j,lng:v};i(h),r({lat:j,lng:v}),g(h)};return d?e.jsx(P,{control:t,name:a,render:({field:g})=>e.jsxs(w,{children:[e.jsx(b,{htmlFor:a,children:"Event Location"}),e.jsx(N,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(ct,{onLoad:m=>l.current=m,onPlaceChanged:()=>u(g.onChange),children:e.jsx(T,{id:"location",placeholder:"Search for a location...",className:"w-full"})}),e.jsx("div",{className:"w-full h-72 rounded-md border",children:e.jsxs(dt,{center:o,zoom:15,mapContainerClassName:"w-full h-full rounded-2xl",options:wt,children:[s&&e.jsx(ut,{position:{lat:o.lat??z.lat,lng:o.lng??z.lng},onClick:()=>c(!0)}),s&&n&&e.jsx(mt,{position:{lat:o.lat??z.lat,lng:o.lng??z.lng},onCloseClick:()=>c(!1),children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"font-semibold text-md text-primary",children:s.propertyName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.address}),s.city&&s.state&&e.jsxs("p",{className:"text-sm text-gray-400",children:[s.city,", ",s.state]}),e.jsx("a",{href:s.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"text-primary underline text-sm",children:"View on Google Maps"})]})})]})})]})}),e.jsx(C,{})]})}):e.jsx("p",{children:"Loading map..."})};function le({className:t,...a}){return e.jsx(me,{"data-slot":"checkbox",className:p("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:e.jsx(xe,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:e.jsx(te,{className:"size-3.5"})})})}const Ct=({control:t,name:a})=>{const{field:{value:s,onChange:i}}=se({name:a,control:t}),[n,c]=x.useState(s===0),o=l=>{const d=l.target.value?Number(l.target.value):0;i(d),d>0&&c(!1)},r=()=>{const l=!n;c(l),i(l?0:"")};return e.jsxs("div",{className:"space-y-2",children:[!n&&e.jsx(P,{control:t,name:a,render:()=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"price",children:"Price"}),e.jsx(N,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"pe-1",children:"$"}),e.jsx(T,{placeholder:"0",id:"price",type:"number",value:s||"",onChange:o})]})}),e.jsx(C,{})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(le,{id:"freeEvent",checked:n,onCheckedChange:r}),e.jsx("label",{htmlFor:"freeEvent",className:"px-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"This is a free event"})]})]})},K=[{id:"bachata",label:"Bachata"},{id:"salsa",label:"Salsa"},{id:"merengue",label:"Merengue"},{id:"cumbia",label:"Cumbia"},{id:"zouk",label:"Zouk"}],St=()=>{const{control:t,watch:a,setValue:s,trigger:i}=R(),n=a("music",["bachata","salsa"]),c=a("musicPercentages",{}),[o,r]=x.useState({}),l=x.useCallback(()=>{const d=Object.entries(c).filter(([g])=>g!=="others").reduce((g,[,m])=>g+((m==null?void 0:m.percentage)??0),0),u=Math.max(100-d,0);u>0?(s("musicPercentages.others",{name:"Others",percentage:u}),n.includes("others")||s("music",[...n,"others"])):(s("musicPercentages.others",void 0),n.includes("others")&&s("music",n.filter(g=>g!=="others"))),i("musicPercentages")},[c,n,s,i]);return x.useEffect(()=>{l()},[c,l]),e.jsxs(w,{className:"space-y-2",children:[e.jsx(b,{children:"Music Breakdown"}),n.length===0?e.jsx("p",{className:"text-start text-sm text-gray-500",children:"No music categories selected"}):n.map(d=>{const u=K.find(g=>g.id===d);return u&&e.jsx(O,{control:t,name:`musicPercentages.${d}.percentage`,render:({field:g})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:u.label}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(N,{children:e.jsx(T,{type:"number",value:o[d]??g.value??"",onChange:m=>{r(j=>({...j,[d]:m.target.value}))},onBlur:()=>{const m=o[d]?Number(o[d]):void 0;s(`musicPercentages.${d}.percentage`,m),l(),r(j=>{const v={...j};return delete v.someKey,v})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},d)}),n.includes("others")&&c.others&&e.jsx(O,{control:t,name:"musicPercentages.others.percentage",render:({field:d})=>e.jsxs(w,{className:"flex items-center justify-between gap-2",children:[e.jsx(b,{className:"w-1/3 text-sm font-medium",children:"Others"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(N,{children:e.jsx(T,{type:"number",value:o.others??d.value??"",onChange:u=>{r(g=>({...g,others:u.target.value}))},onBlur:()=>{const u=o.others?Number(o.others):void 0;s("musicPercentages.others.percentage",u),l(),r(g=>{const m={...g};return delete m.others,m})},className:"flex grow"})}),e.jsx("span",{children:"%"})]})]})},"others"),e.jsx(C,{})]})};function kt({className:t,classNames:a,showOutsideDays:s=!0,...i}){return e.jsx(ge,{showOutsideDays:s,className:p("p-3",t),classNames:{months:"flex flex-col sm:flex-row gap-2",month:"flex flex-col gap-4",caption:"flex justify-center pt-1 relative items-center w-full",caption_label:"text-sm font-medium",nav:"flex items-center gap-1",nav_button:p(Z({variant:"outline"}),"size-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-x-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:p("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",i.mode==="range"?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:p(Z({variant:"ghost"}),"size-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",day_range_end:"day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:({className:n,...c})=>e.jsx(pe,{className:p("size-4",n),...c}),IconRight:({className:n,...c})=>e.jsx(fe,{className:p("size-4",n),...c})},...i})}function Pt({...t}){return e.jsx(he,{"data-slot":"popover",...t})}function Tt({...t}){return e.jsx(je,{"data-slot":"popover-trigger",...t})}function Ft({className:t,align:a="center",sideOffset:s=4,...i}){return e.jsx(ve,{children:e.jsx(be,{"data-slot":"popover-content",align:a,sideOffset:s,className:p("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",t),...i})})}function U({className:t,children:a,...s}){return e.jsxs(ye,{"data-slot":"scroll-area",className:p("relative",t),...s,children:[e.jsx(we,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:a}),e.jsx(V,{}),e.jsx(Ne,{})]})}function V({className:t,orientation:a="vertical",...s}){return e.jsx(Ce,{"data-slot":"scroll-area-scrollbar",orientation:a,className:p("flex touch-none p-px transition-colors select-none",a==="vertical"&&"h-full w-2.5 border-l border-l-transparent",a==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",t),...s,children:e.jsx(Se,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function zt({...t}){return e.jsx(ke,{"data-slot":"select",...t})}function _t({...t}){return e.jsx(Fe,{"data-slot":"select-value",...t})}function Mt({className:t,size:a="default",children:s,...i}){return e.jsxs(Pe,{"data-slot":"select-trigger","data-size":a,className:p("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...i,children:[s,e.jsx(Te,{asChild:!0,children:e.jsx(ae,{className:"size-4 opacity-50"})})]})}function It({className:t,children:a,position:s="popper",...i}){return e.jsx(ze,{children:e.jsxs(_e,{"data-slot":"select-content",className:p("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",s==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s,...i,children:[e.jsx(Dt,{}),e.jsx(Me,{className:p("p-1",s==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:a}),e.jsx(Lt,{})]})})}function _({className:t,children:a,...s}){return e.jsxs(Ie,{"data-slot":"select-item",className:p("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...s,children:[e.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:e.jsx(De,{children:e.jsx(te,{className:"size-4"})})}),e.jsx(Le,{children:a})]})}function Dt({className:t,...a}){return e.jsx(Ee,{"data-slot":"select-scroll-up-button",className:p("flex cursor-default items-center justify-center py-1",t),...a,children:e.jsx(Ue,{className:"size-4"})})}function Lt({className:t,...a}){return e.jsx(Oe,{"data-slot":"select-scroll-down-button",className:p("flex cursor-default items-center justify-center py-1",t),...a,children:e.jsx(ae,{className:"size-4"})})}function Y({form:t,label:a,formFieldName:s}){function i(o){o&&t.setValue(s,o)}function n(o){const r=Be(new Date,parseInt(o)),l=t.getValues(s);l?r.setHours(l.getHours(),l.getMinutes(),l.getSeconds()):r.setHours(0,0,0,0),t.setValue(s,r)}function c(o,r){const l=t.getValues(s)||new Date,d=new Date(l);if(o==="hour"){const u=parseInt(r,10);d.getHours()>=12?d.setHours(u+12):d.setHours(u%12)}else if(o==="minute")d.setMinutes(parseInt(r,10));else if(o==="ampm"){const u=d.getHours();r==="AM"&&u>=12?d.setHours(u-12):r==="PM"&&u<12&&d.setHours(u+12)}t.setValue(s,d)}return e.jsx(P,{control:t.control,name:s,render:({field:o})=>e.jsxs(w,{className:"flex flex-col text-start",children:[e.jsx(b,{children:a}),e.jsxs(Pt,{children:[e.jsx(Tt,{asChild:!0,children:e.jsx(N,{children:e.jsxs(y,{variant:"outline",className:p("w-full pl-3 text-left font-normal",!o.value&&"text-muted-foreground"),children:[o.value?He(o.value,"MM/dd/yyyy hh:mm aa"):e.jsx("span",{children:"Select date and time"}),e.jsx(Ve,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(Ft,{className:"w-auto p-2",children:e.jsxs("div",{className:"flex-col sm:flex",children:[e.jsx("div",{children:e.jsxs(zt,{onValueChange:n,children:[e.jsx(Mt,{children:e.jsx(_t,{placeholder:"Select"})}),e.jsxs(It,{position:"popper",children:[e.jsx(_,{value:"0",children:"Today"}),e.jsx(_,{value:"1",children:"Tomorrow"}),e.jsx(_,{value:"3",children:"In 3 days"}),e.jsx(_,{value:"7",children:"In a week"})]})]})}),e.jsxs("div",{className:"sm:flex",children:[e.jsx(kt,{mode:"single",selected:o.value,onSelect:i,initialFocus:!0}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x",children:[e.jsxs(U,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(r,l)=>l+1).reverse().map(r=>e.jsx(y,{size:"icon",variant:o.value&&o.value.getHours()%12===r%12?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>c("hour",r.toString()),children:r},r))}),e.jsx(V,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsxs(U,{className:"w-64 sm:w-auto",children:[e.jsx("div",{className:"flex sm:flex-col p-2",children:Array.from({length:12},(r,l)=>l*5).map(r=>e.jsx(y,{size:"icon",variant:o.value&&o.value.getMinutes()===r?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>c("minute",r.toString()),children:r.toString().padStart(2,"0")},r))}),e.jsx(V,{orientation:"horizontal",className:"sm:hidden"})]}),e.jsx(U,{className:"",children:e.jsx("div",{className:"flex sm:flex-col p-2",children:["AM","PM"].map(r=>e.jsx(y,{size:"icon",variant:o.value&&(r==="AM"&&o.value.getHours()<12||r==="PM"&&o.value.getHours()>=12)?"default":"ghost",className:"sm:w-full shrink-0 aspect-square",onClick:()=>c("ampm",r),children:r},r))})})]})]})]})})]}),e.jsx(C,{})]})})}const Et=({control:t,name:a})=>{const{getValues:s,setValue:i}=R(),{field:{value:n,onChange:c}}=se({name:a,control:t}),o=(r,l)=>{const d=r?[...n||[],l]:(n==null?void 0:n.filter(u=>u!==l))||[];if(c(d),!r){const u=s("musicPercentages")||{},g=Object.fromEntries(Object.entries(u).filter(([m])=>m!==l));i("musicPercentages",g)}};return e.jsxs(w,{children:[e.jsx(b,{children:"Music"}),K.map(r=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{id:r.id,checked:n==null?void 0:n.includes(r.id),onCheckedChange:l=>o(!!l,r.id)}),e.jsx(b,{htmlFor:r.id,className:"text-sm font-normal",children:r.label})]},r.id)),e.jsx(C,{})]})},Ut=({className:t,...a})=>{const[s,i]=x.useState(!1),n=Re({resolver:Ae(ht),defaultValues:{music:["bachata","salsa"],location:{},musicPercentages:{...Object.fromEntries(K.map(r=>[r.id,{name:r.label,percentage:r.id==="bachata"||r.id==="salsa"?50:0}])),others:{name:"Others",percentage:0}}}}),c=n.watch(),o=async r=>{i(!0);let l="";if(r.image){const d=Ke(rt,`events/${Date.now()}-${r.image.name}`);await Ge(d,r.image),l=await Je(d)}await Qe(Ze(q,"events"),{title:r.title,startTime:r.startTime,endTime:r.endTime,imageUrl:l,description:r.description,price:r.price,music:r.music,musicPercentages:r.musicPercentages,location:r.location,organizerId:"",createdAt:Xe()}),i(!1)};return e.jsx("div",{className:p("flex flex-col gap-6 m-2",t),...a,children:e.jsxs(A,{children:[e.jsx($,{children:e.jsx(H,{className:"text-2xl",children:"Create Event"})}),e.jsx(B,{children:e.jsx(ft,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(o),className:"flex flex-col justify-center py-2 gap-4",children:[e.jsx(P,{control:n.control,name:"title",render:({field:r})=>e.jsxs(w,{className:"text-start",children:[e.jsx(b,{htmlFor:"title",children:"Title"}),e.jsx(N,{children:e.jsx(T,{id:"title",placeholder:"Dance Social",...r})}),e.jsx(C,{})]})}),e.jsx(Nt,{control:n.control,name:"location"}),e.jsx(Y,{form:n,label:"Start time",formFieldName:"startTime"}),e.jsx(Y,{form:n,label:"End time",formFieldName:"endTime"}),e.jsx(jt,{control:n.control,name:"image"}),e.jsx(P,{control:n.control,name:"description",render:({field:r})=>e.jsxs(w,{children:[e.jsx(b,{children:"Description"}),e.jsx(N,{children:e.jsx(pt,{...r})}),e.jsx(C,{})]})}),e.jsx(Ct,{control:n.control,name:"price"}),e.jsx(Et,{control:n.control,name:"music"}),e.jsx(St,{}),e.jsx(P,{control:n.control,name:"link",render:({field:r})=>e.jsxs(w,{children:[e.jsx(b,{children:"Link"}),e.jsx(N,{children:e.jsx(T,{placeholder:"event link (optional)","aria-label":"link for additional details",...r})}),e.jsx(C,{})]})}),e.jsx("pre",{className:"text-start bg-gray-100 p-2 rounded-md text-sm overflow-auto",children:JSON.stringify({...c,image:c.image?c.image.name:"No image",startTime:c.startTime?c.startTime.toLocaleString():"No start time",endTime:c.endTime?c.endTime.toLocaleString():"No start time"},null,2)}),e.jsx(y,{type:"submit",disabled:s,children:s?"Submitting...":"Post Event"})]})})})]})})},Ot=()=>{const[t,a]=x.useState(!0),[s,i]=x.useState(null),[n,c]=x.useState(null);return x.useEffect(()=>{if(I.get("auth_token")){const r=Ye(M,async l=>{if(l){const d=re(q,"organizers",l.uid),u=await et(d);u.exists()?c(u.data()):i("No organizer data found")}else i("User not authenticated");a(!1)});return()=>r()}else a(!1),i("No authentication token found. Please log in")},[]),{loading:t,error:s,profileData:n}},Vt=()=>{const[t,a]=x.useState(!1),[s,i]=x.useState(null),[n,c]=x.useState(!1);return{loading:t,error:s,success:n,updateProfile:async r=>{var d;if(a(!0),i(null),c(!1),I.get("auth_token"))try{await((d=M.currentUser)==null?void 0:d.getIdToken(!0));const u=M.currentUser;if(u){const g=re(q,"organizers",u.uid);await tt(g,r),c(!0)}else i("User not authenticated")}catch(u){console.error("Error updating profile:",u),i("Failed to update profile. Please try again.")}finally{a(!1)}else a(!1),i("No authentication token found. Please log in again.")}}},Rt=()=>{const[t,a]=x.useState(!0),[s,i]=x.useState([]),{loading:n,error:c,profileData:o}=Ot(),{loading:r,error:l,success:d,updateProfile:u}=Vt();x.useEffect(()=>{o&&i([{label:"Email",value:o.email},{label:"First name",value:o.firstName||""},{label:"Last name",value:o.lastName||""},{label:"Social Media",value:o.socialMediaLink??""},{label:"Website",value:o.websiteLink??""}])},[o]);const g=async()=>{if(!o){F.error("Profile data not found");return}const m={"First name":"firstName","Last name":"lastName","Social Media":"socialMediaLink",Website:"websiteLink"},j=s.reduce((h,S)=>{const k=m[S.label];return k&&S.value&&(k==="createdAt"?h[k]=st.fromDate(new Date(S.value)):h[k]=S.value),h},{});if(!Object.keys(j).some(h=>j[h]!==o[h])){F("No changes detected. Profile not updated");return}await u(j),d&&F.success("Successfully updated your profile"),l&&F.error("An error occured while updating profile, please try again"),a(!0)};if(n)return e.jsx("div",{children:e.jsx("p",{children:"Profile loading..."})});if(c){F.error(c);return}return e.jsxs("div",{className:"flex flex-col items-center mt-4",children:[e.jsx($e,{richColors:!0,position:"top-center",className:"text-start"}),e.jsx("div",{children:e.jsxs(A,{className:"md:w-[450px]",children:[e.jsx($,{children:e.jsx(H,{children:"Profile"})}),e.jsx(B,{children:e.jsx("ul",{className:"flex-col mt-4",children:s.map((m,j)=>e.jsxs("li",{className:"flex gap-1 items-center text-start mb-2 justify-between",children:[e.jsx("label",{className:"w-1/4",children:m.label}),e.jsx(T,{value:m.value,onChange:v=>{const h=[...s];h[j].value=v.target.value,i(h)},disabled:m.label==="Email"||t,className:"w-3/4"})]},m.label))})}),e.jsxs(nt,{className:"flex justify-between",children:[e.jsx(y,{variant:"link",onClick:()=>{a(!t)},disabled:!t,children:"Edit Profile"}),e.jsx(y,{onClick:g,disabled:r||t,variant:t?"outline":"default",children:"Update Profile"})]})]})})]})},At=({className:t,...a})=>e.jsx("div",{className:p("flex flex-col gap-6 m-2",t),...a,children:e.jsxs(A,{className:"min-h-svh",children:[e.jsx($,{children:e.jsx(H,{className:"text-2xl",children:"Organizer Dashboard"})}),e.jsx(B,{children:e.jsx("div",{className:"flex min-h-full w-full items-center justify-center p-2 max-sm:p-0",children:e.jsx("div",{className:"w-full max-w-sm justify-center",children:e.jsxs(ot,{defaultValue:"create-post",className:"w-full",children:[e.jsxs(lt,{className:"grid w-full grid-cols-3",children:[e.jsx(L,{value:"create-post",children:"Create Post"}),e.jsx(L,{value:"post",children:"Posts"}),e.jsx(L,{value:"profile",children:"Profile"})]}),e.jsx(E,{value:"create-post",children:e.jsx(Ut,{})}),e.jsx(E,{value:"post",children:"Previous posts"}),e.jsx(E,{value:"profile",children:e.jsx(Rt,{})})]})})})})]})});function Qt(){const t=ee();return x.useEffect(()=>{const a=I.get("auth_token");a?a===void 0&&t("/"):t("/login")},[t]),e.jsxs("div",{children:[e.jsx(qe,{}),e.jsx(At,{}),e.jsx(gt,{})]})}export{Qt as default};
