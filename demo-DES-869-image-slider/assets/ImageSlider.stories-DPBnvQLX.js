import{j as t}from"./jsx-runtime-BlAj40OV.js";import{r as H,h as J}from"./index.esm-DY3iRp4W.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Cs7sjTYM.js";import{I as N}from"./IconButton-DaVLp41G.js";import{A as S}from"./AspectRatio-Cd0KgYDn.js";import{I as b}from"./Image-CVzrCme5.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const Q={currentSlide:0},k=o.createContext(Q),R=o.forwardRef(({children:n,slideId:c,className:i,...d},I)=>{const{currentSlide:p}=o.useContext(k),g=p===c;return t.jsx("div",{...d,ref:I,className:y("ams-image-slider__item",g&&"ams-image-slider__item--in-view",i),...!g&&{inert:""},children:n})});R.displayName="ImageSlider.Item";try{ImageSlider.Item.displayName="ImageSlider.Item",ImageSlider.Item.__docgenInfo={description:"",displayName:"ImageSlider.Item",props:{slideId:{defaultValue:null,description:"",name:"slideId",required:!0,type:{name:"number"}}}}}catch{}const V=o.forwardRef(({children:n,className:c,...i},d)=>t.jsx("div",{...i,ref:d,className:y("ams-image-slider__scroller",c),children:n}));V.displayName="ImageSlider.Scroller";try{ImageSlider.Scroller.displayName="ImageSlider.Scroller",ImageSlider.Scroller.__docgenInfo={description:"",displayName:"ImageSlider.Scroller",props:{}}}catch{}const O=o.forwardRef(({children:n,className:c,controls:i,scrollbar:d,snapstop:I,thumbnails:p,...g},q)=>{var w;const[m,T]=o.useState(0),[L,z]=o.useState(!0),[D,P]=o.useState(!1),a=o.useRef(null),B=new Set,M=e=>{var f;const r=((f=a.current)==null?void 0:f.children)||[],s=Array.from(r);for(let _ of e)B.add(_),_.isIntersecting&&T(s.indexOf(_.target))},x={root:a.current,threshold:.6};o.useEffect(()=>{const e=new IntersectionObserver(M,x);if(a.current){const r=a.current.children,s=Array.from(r);for(let f of s)e.observe(f);a.current.addEventListener("scrollend",K.bind(a.current))}},[a,x]);const K=()=>{$()},h=e=>{const r=a.current;if(!r||!e)return;const s=Math.abs(r.offsetLeft-e.offsetLeft);r.scrollTo(s,0)},v=()=>{const e=a.current,r=e==null?void 0:e.children[m],s=r==null?void 0:r.nextElementSibling;r!==s&&s&&h(s)},j=()=>{const e=a.current,r=e==null?void 0:e.children[m],s=r==null?void 0:r.previousElementSibling;r!==s&&s&&h(s)},$=()=>{const e=a.current,{lastElementChild:r,firstElementChild:s}=e;z(s===(e==null?void 0:e.children[m])),P(r===(e==null?void 0:e.children[m]))},F=e=>{var r;return`url(${(r=e.querySelector("img"))==null?void 0:r.getAttribute("src")})`},G=e=>{e.key==="ArrowRight"?v():e.key==="ArrowLeft"&&j()};return t.jsx(k.Provider,{value:{currentSlide:m},children:t.jsxs("div",{...g,ref:q,className:y("ams-image-slider",i&&"ams-image-slider--controls",d&&"ams-image-slider--scrollbar",I&&"ams-image-slider--snapstop",p&&"ams-image-slider--thumbnails",c),children:[i&&t.jsxs("div",{className:"ams-image-slider__controls",onKeyDown:G,children:[t.jsx(N,{svg:H,label:"Vorige",onBackground:"dark",className:"ams-image-slider__control ams-image-slider__control--previous",onClick:()=>j(),disabled:L}),t.jsx(N,{svg:J,label:"Volgende",onBackground:"dark",className:"ams-image-slider__control ams-image-slider__control--next",onClick:()=>v(),disabled:D})]}),t.jsx(V,{tabIndex:0,ref:a,children:n}),p&&t.jsx("div",{className:"ams-image-slider__thumbnails",children:Array.from(((w=a.current)==null?void 0:w.children)||[]).map((e,r)=>t.jsx("button",{className:"ams-image-slider__thumbnail",style:{backgroundImage:F(e)},onClick:()=>h(e),children:r},r))})]})})});O.displayName="ImageSlider";const l=Object.assign(O,{Item:R});try{l.displayName="ImageSlider",l.__docgenInfo={description:"",displayName:"ImageSlider",props:{controls:{defaultValue:null,description:"Show navigation controls",name:"controls",required:!1,type:{name:"boolean"}},scrollbar:{defaultValue:null,description:"Show native scrollbar inside gallery",name:"scrollbar",required:!1,type:{name:"boolean"}},snapstop:{defaultValue:null,description:"Prevent passing over possible snap elements",name:"snapstop",required:!1,type:{name:"boolean"}},thumbnails:{defaultValue:null,description:"Show thumbnails",name:"thumbnails",required:!1,type:{name:"boolean"}}}}}catch{}const U={title:"Components/Media/Image Slider",component:l,args:{children:[t.jsx(l.Item,{slideId:0,children:t.jsx(S,{ratio:"x-wide",children:t.jsx(b,{src:"https://picsum.photos/1280/720?1",loading:"lazy",cover:!0})})},"1"),t.jsx(l.Item,{slideId:1,children:t.jsx(S,{ratio:"x-wide",children:t.jsx(b,{src:"https://picsum.photos/1280/720?2",loading:"lazy",cover:!0})})},"2"),t.jsx(l.Item,{slideId:2,children:t.jsx(S,{ratio:"x-wide",children:t.jsx(b,{src:"https://picsum.photos/1280/720?3",loading:"lazy",cover:!0})})},"3")],controls:!0,scrollbar:!1,snapstop:!0,thumbnails:!0}},u={};var C,A,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const W=["Default"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{ae as I};
