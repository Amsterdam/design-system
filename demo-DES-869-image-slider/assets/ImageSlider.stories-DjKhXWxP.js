import{j as r}from"./jsx-runtime-BlAj40OV.js";import{r as ie,h as ce}from"./index.esm-DY3iRp4W.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as l}from"./index-Cs7sjTYM.js";import{I as A}from"./IconButton-DaVLp41G.js";import{A as p}from"./AspectRatio-bE67IP7L.js";import{I as g}from"./Image-CVzrCme5.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const de={currentSlide:0,goToSlideId:()=>{}},w=l.createContext(de),H=l.forwardRef(({children:t,slideId:c,className:i,...d},h)=>{const{currentSlide:u}=l.useContext(w),m=u===c;return r.jsx("div",{...d,ref:h,className:v("ams-image-slider__item",m&&"ams-image-slider__item--in-view",i),...!m&&{inert:""},children:t})});H.displayName="ImageSlider.Item";try{ImageSlider.Item.displayName="ImageSlider.Item",ImageSlider.Item.__docgenInfo={description:"",displayName:"ImageSlider.Item",props:{slideId:{defaultValue:null,description:"this ID needs to match the key or order of the slides (starting with 0)",name:"slideId",required:!0,type:{name:"number"}}}}}catch{}const J=l.forwardRef(({children:t,className:c,...i},d)=>r.jsx("div",{...i,ref:d,className:v("ams-image-slider__scroller",c),children:t}));J.displayName="ImageSlider.Scroller";try{ImageSlider.Scroller.displayName="ImageSlider.Scroller",ImageSlider.Scroller.__docgenInfo={description:"",displayName:"ImageSlider.Scroller",props:{}}}catch{}const Q=l.forwardRef(({thumbnails:t,className:c,...i},d)=>{const{goToSlideId:h}=l.useContext(w);return r.jsx("nav",{...i,ref:d,className:v("ams-image-slider__thumbnails",c),children:t&&t.map((u,m)=>r.jsx("button",{className:"ams-image-slider__thumbnail",onClick:()=>h(m),children:u},m))})});Q.displayName="ImageSlider.Thumbnails";try{ImageSlider.Thumbnails.displayName="ImageSlider.Thumbnails",ImageSlider.Thumbnails.__docgenInfo={description:"",displayName:"ImageSlider.Thumbnails",props:{thumbnails:{defaultValue:null,description:"",name:"thumbnails",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const U=l.forwardRef(({children:t,className:c,controls:i,scrollbar:d,snapstop:h,thumbnails:u,...m},W)=>{const[f,X]=l.useState(0),[Y,Z]=l.useState(!0),[ee,re]=l.useState(!1),o=l.useRef(null),se=new Set,ae=e=>{var y;const s=((y=o.current)==null?void 0:y.children)||[],a=Array.from(s);for(let N of e)se.add(N),N.isIntersecting&&X(a.indexOf(N.target))},C={root:o.current,threshold:.6};l.useEffect(()=>{const e=new IntersectionObserver(ae,C);if(o.current){const s=o.current.children,a=Array.from(s);for(let y of a)e.observe(y);o.current.addEventListener("scrollend",te.bind(o.current))}},[o,C]);const te=()=>{le()},j=e=>{const s=o.current;if(!s||!e)return;const a=Math.abs(s.offsetLeft-e.offsetLeft);s.scrollTo(a,0)},oe=e=>{var a;const s=(a=o.current)==null?void 0:a.children[e];j(s)},T=()=>{var a;const e=(a=o.current)==null?void 0:a.children[f],s=e==null?void 0:e.nextElementSibling;e!==s&&s&&j(s)},R=()=>{var a;const e=(a=o.current)==null?void 0:a.children[f],s=e==null?void 0:e.previousElementSibling;e!==s&&s&&j(s)},le=()=>{const e=o.current,{lastElementChild:s,firstElementChild:a}=e;Z(a===(e==null?void 0:e.children[f])),re(s===(e==null?void 0:e.children[f]))},ne=e=>{e.key==="ArrowRight"?T():e.key==="ArrowLeft"&&R()};return r.jsx(w.Provider,{value:{currentSlide:f,goToSlideId:oe},children:r.jsxs("div",{...m,ref:W,className:v("ams-image-slider",i&&"ams-image-slider--controls",d&&"ams-image-slider--scrollbar",h&&"ams-image-slider--snapstop",u&&"ams-image-slider--thumbnails",c),children:[i&&r.jsxs("div",{className:"ams-image-slider__controls",onKeyDown:ne,children:[r.jsx(A,{svg:ie,label:"Vorige",onBackground:"dark",className:"ams-image-slider__control ams-image-slider__control--previous",onClick:()=>R(),disabled:Y}),r.jsx(A,{svg:ce,label:"Volgende",onBackground:"dark",className:"ams-image-slider__control ams-image-slider__control--next",onClick:()=>T(),disabled:ee})]}),r.jsx(J,{tabIndex:0,ref:o,children:t}),u&&r.jsx(Q,{thumbnails:l.Children.toArray(t)})]})})});U.displayName="ImageSlider";const n=Object.assign(U,{Item:H});try{n.displayName="ImageSlider",n.__docgenInfo={description:"",displayName:"ImageSlider",props:{controls:{defaultValue:null,description:"Show navigation controls",name:"controls",required:!1,type:{name:"boolean"}},scrollbar:{defaultValue:null,description:"Show native scrollbar inside gallery",name:"scrollbar",required:!1,type:{name:"boolean"}},snapstop:{defaultValue:null,description:"Prevent passing over possible snap elements",name:"snapstop",required:!1,type:{name:"boolean"}},thumbnails:{defaultValue:null,description:"Show thumbnails",name:"thumbnails",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Components/Media/Image Slider",component:n,args:{children:[r.jsx(n.Item,{slideId:0,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/122/1280/720",loading:"lazy",cover:!0})})}),r.jsx(n.Item,{slideId:1,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/101/1280/720",loading:"lazy",cover:!0})})}),r.jsx(n.Item,{slideId:2,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/153/1280/720",loading:"lazy",cover:!0})})}),r.jsx(n.Item,{slideId:3,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/159/1280/720",loading:"lazy",cover:!0})})}),r.jsx(n.Item,{slideId:4,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/123/1280/720",loading:"lazy",cover:!0})})}),r.jsx(n.Item,{slideId:5,children:r.jsx(p,{ratio:"x-wide",children:r.jsx(g,{src:"https://picsum.photos/id/151/1280/720",loading:"lazy",cover:!0})})})],controls:!0,scrollbar:!1,snapstop:!1,thumbnails:!0}},I={},S={args:{controls:!1}},_={args:{thumbnails:!1}},b={args:{snapstop:!0,thumbnails:!1,controls:!1}},x={args:{scrollbar:!0,controls:!1,thumbnails:!1}};var E,V,k;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(k=(V=I.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var z,O,q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    controls: false
  }
}`,...(q=(O=S.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var D,L,P;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    thumbnails: false
  }
}`,...(P=(L=_.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var B,M,K;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    snapstop: true,
    thumbnails: false,
    controls: false
  }
}`,...(K=(M=b.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var $,F,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    scrollbar: true,
    controls: false,
    thumbnails: false
  }
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ue=["Default","NoControls","NoThumbnails","Snapstop","NativeScrollbar"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:I,NativeScrollbar:x,NoControls:S,NoThumbnails:_,Snapstop:b,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{be as I,S as N,b as S,_ as a,x as b};
