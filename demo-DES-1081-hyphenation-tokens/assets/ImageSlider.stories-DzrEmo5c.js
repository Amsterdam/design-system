import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as t}from"./index-C0MU9AHG.js";import{w as U,e as W}from"./index.esm-DvoLfDtE.js";import{I as q}from"./IconButton-CytIWXCz.js";import{I as X}from"./Image-n37fLCx2.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const Y={currentSlideId:0,goToNextSlide:()=>{},goToPreviousSlide:()=>{},goToSlideId:()=>{},isAtEnd:!1,isAtStart:!0},T=t.createContext(Y),E=t.forwardRef(({className:o,nextLabel:c,previousLabel:d,...p},b)=>{const{goToNextSlide:l,goToPreviousSlide:m,isAtEnd:h,isAtStart:a}=t.useContext(T),x=t.useCallback(()=>m(),[m]),v=t.useCallback(()=>l(),[l]);return n.jsxs("div",{...p,className:_("ams-image-slider__controls",o),ref:b,children:[n.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--previous",color:"inverse",disabled:a,label:d,onClick:x,svg:U}),n.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--next",color:"inverse",disabled:h,label:c,onClick:v,svg:W})]})});E.displayName="ImageSliderControls";try{E.displayName="ImageSliderControls",E.__docgenInfo={description:"",displayName:"ImageSliderControls",props:{nextLabel:{defaultValue:null,description:"The label for the ‘next’ button",name:"nextLabel",required:!0,type:{name:"string"}},previousLabel:{defaultValue:null,description:"The label for the ‘previous’ button",name:"previousLabel",required:!0,type:{name:"string"}}}}}catch{}const L=t.forwardRef(({children:o,className:c,slideId:d,...p},b)=>{const{currentSlideId:l}=t.useContext(T),m=t.useMemo(()=>l===d,[l,d]),h=t.useMemo(()=>_("ams-image-slider__item",m&&"ams-image-slider__item--in-view",c),[m,c]);return n.jsx("div",{...p,className:h,ref:b,...!m&&{inert:""},children:o})});L.displayName="ImageSlider.Item";try{ImageSlider.Item.displayName="ImageSlider.Item",ImageSlider.Item.__docgenInfo={description:"",displayName:"ImageSlider.Item",props:{slideId:{defaultValue:null,description:"The identifier of the item. Must match the key or order of the slides (starting at 0).",name:"slideId",required:!0,type:{name:"number"}}}}}catch{}const K=t.forwardRef(({children:o,className:c,...d},p)=>n.jsx("div",{...d,className:_("ams-image-slider__scroller",c),ref:p,children:o}));K.displayName="ImageSlider.Scroller";try{ImageSlider.Scroller.displayName="ImageSlider.Scroller",ImageSlider.Scroller.__docgenInfo={description:"",displayName:"ImageSlider.Scroller",props:{}}}catch{}const F=t.forwardRef(({className:o,imageLabel:c,thumbnails:d,...p},b)=>{const{currentSlideId:l,goToNextSlide:m,goToPreviousSlide:h,goToSlideId:a}=t.useContext(T),x=t.useCallback(I=>{const u=I.currentTarget.children[l];if(I.key==="ArrowRight"){const g=u==null?void 0:u.nextElementSibling;g&&(g.focus(),m())}if(I.key==="ArrowLeft"){const g=u==null?void 0:u.previousElementSibling;g&&(g.focus(),h())}},[l,m,h]),v=t.useMemo(()=>d.map(({alt:I,aspectRatio:u,src:g},i)=>n.jsx("button",{"aria-label":`${c} ${i+1}: ${I}`,"aria-posinset":i+1,"aria-selected":l===i?"true":"false","aria-setsize":d.length,className:_("ams-image-slider__thumbnail",l===i&&"ams-image-slider__thumbnail--in-view",u&&`ams-aspect-ratio--${u}`),onClick:()=>a(i),role:"tab",style:{backgroundImage:`url(${g})`},tabIndex:l===i?0:-1},i)),[l,a,c,d]);return n.jsx("nav",{...p,className:_("ams-image-slider__thumbnails",o),onKeyDown:x,ref:b,role:"tablist",children:v})});F.displayName="ImageSlider.Thumbnails";try{ImageSlider.Thumbnails.displayName="ImageSlider.Thumbnails",ImageSlider.Thumbnails.__docgenInfo={description:"",displayName:"ImageSlider.Thumbnails",props:{imageLabel:{defaultValue:null,description:"",name:"imageLabel",required:!1,type:{name:"string"}},thumbnails:{defaultValue:null,description:"",name:"thumbnails",required:!0,type:{name:"ImageProps[]"}}}}}catch{}const G=t.forwardRef(({className:o,controls:c,imageLabel:d="Afbeelding",images:p,nextLabel:b="Volgende",previousLabel:l="Vorige",...m},h)=>{const[a,x]=t.useState(0),[v,I]=t.useState(!0),[u,g]=t.useState(!1),i=t.useRef(null),k=t.useRef(null),j=t.useCallback(e=>{var r;const s=Array.from(((r=i.current)==null?void 0:r.children)||[]);e.forEach(S=>{S.isIntersecting&&x(s.indexOf(S.target))})},[]),V=t.useMemo(()=>({root:i.current,threshold:.6}),[]),C=t.useCallback(()=>{const e=i.current;if(!e)return;const{firstElementChild:s,lastElementChild:r}=e;I(s===(e==null?void 0:e.children[a])),g(r===(e==null?void 0:e.children[a]))},[a]);t.useEffect(()=>{if(i.current){k.current=new IntersectionObserver(j,V);const e=k.current,s=Array.from(i.current.children);return s.forEach(r=>e.observe(r)),i.current.addEventListener("scrollend",A),C(),()=>{var r;s.forEach(S=>e.unobserve(S)),(r=i.current)==null||r.removeEventListener("scrollend",A)}}},[j,V,C]);const A=t.useCallback(()=>C(),[C]),f=t.useCallback(e=>{const s=i.current;!s||!e||s.scrollTo({left:s.scrollLeft+e.offsetLeft-s.scrollLeft})},[]),H=t.useCallback(e=>{var r;const s=(r=i.current)==null?void 0:r.children[e];s&&f(s)},[f]),J=t.useCallback(()=>{var r;const e=(r=i.current)==null?void 0:r.children[a],s=e==null?void 0:e.nextElementSibling;s&&f(s)},[a,f]),Q=t.useCallback(()=>{var r;const e=(r=i.current)==null?void 0:r.children[a],s=e==null?void 0:e.previousElementSibling;s&&f(s)},[a,f]);return t.useEffect(()=>{const e=()=>{var N;const s=i.current,r=(N=i.current)==null?void 0:N.children[a];if(!s||!r)return;const S=r.offsetLeft;Math.abs(s.scrollLeft-S)<1||f(r)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[a,f]),n.jsx(T.Provider,{value:{currentSlideId:a,goToNextSlide:J,goToPreviousSlide:Q,goToSlideId:H,isAtEnd:u,isAtStart:v},children:n.jsxs("div",{...m,"aria-roledescription":"carousel",className:_("ams-image-slider",c&&"ams-image-slider--controls",o),ref:h,tabIndex:-1,children:[c&&n.jsx(E,{nextLabel:b,previousLabel:l}),n.jsx(K,{"aria-live":"polite",ref:i,role:"group",tabIndex:0,children:p.map(({alt:e,aspectRatio:s,sizes:r,src:S,srcSet:N},z)=>n.jsx(L,{slideId:z,children:n.jsx(X,{alt:e,className:`ams-aspect-ratio--${s}`,sizes:r,src:S,srcSet:N})},z))}),n.jsx(F,{imageLabel:d,thumbnails:p})]})})});G.displayName="ImageSlider";const R=Object.assign(G,{Item:L});try{R.displayName="ImageSlider",R.__docgenInfo={description:"",displayName:"ImageSlider",props:{controls:{defaultValue:null,description:"Display buttons to navigate to the previous or next image.",name:"controls",required:!1,type:{name:"boolean"}},imageLabel:{defaultValue:{value:"Afbeelding"},description:"Label for the image if you need to translate the alt text.",name:"imageLabel",required:!1,type:{name:"string"}},images:{defaultValue:null,description:"The set of images to display.",name:"images",required:!0,type:{name:"ImageProps[]"}},nextLabel:{defaultValue:{value:"Volgende"},description:"The label for the ‘next’ button",name:"nextLabel",required:!1,type:{name:"string"}},previousLabel:{defaultValue:{value:"Vorige"},description:"The label for the ‘previous’ button",name:"previousLabel",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const Z={title:"Components/Media/Image Slider",component:R,args:{controls:!0,images:[{alt:"Bridge",aspectRatio:"x-wide",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",aspectRatio:"x-wide",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",aspectRatio:"x-wide",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",aspectRatio:"x-wide",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",aspectRatio:"x-wide",src:"https://picsum.photos/id/123/1280/720"}]}},w={},y={args:{images:[{alt:"Bridge",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/122/640/360",srcSet:"https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w"},{alt:"Bunker",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/101/640/360",srcSet:"https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w"},{alt:"Chairs",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/153/640/360",srcSet:"https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w"}]}};var P,M,B;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(B=(M=w.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var D,O,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    images: [{
      alt: 'Bridge',
      aspectRatio: 'x-wide',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/122/640/360',
      srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w'
    }, {
      alt: 'Bunker',
      aspectRatio: 'x-wide',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/101/640/360',
      srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w'
    }, {
      alt: 'Chairs',
      aspectRatio: 'x-wide',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/153/640/360',
      srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w'
    }]
  }
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const ee=["Default","ResponsiveImages"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:w,ResponsiveImages:y,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{le as I,y as R};
