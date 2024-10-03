import{j as a}from"./jsx-runtime-BlAj40OV.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Cs7sjTYM.js";import{l as U,e as W}from"./index.esm-BBV4ZYo5.js";import{I as q}from"./IconButton-CifdSLJY.js";import{I as X}from"./Image-CVzrCme5.js";import{S as Y}from"./Screen-Bi3gjHLv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const Z={currentSlideId:0,isAtStart:!0,isAtEnd:!1,goToNextSlide:()=>{},goToPreviousSlide:()=>{},goToSlideId:()=>{}},N=o.createContext(Z),y=o.forwardRef(({className:i,nextLabel:l,previousLabel:n,...d},S)=>{const{isAtStart:c,isAtEnd:f,goToNextSlide:x,goToPreviousSlide:g}=o.useContext(N);return a.jsxs("div",{...d,className:_("ams-image-slider__controls",i),ref:S,children:[a.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--previous",disabled:c,inverseColor:!0,label:n,onClick:()=>g(),svg:U}),a.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--next",disabled:f,inverseColor:!0,label:l,onClick:()=>x(),svg:W})]})});y.displayName="ImageSliderControls";try{y.displayName="ImageSliderControls",y.__docgenInfo={description:"",displayName:"ImageSliderControls",props:{nextLabel:{defaultValue:null,description:"The label for the ‘next’ button",name:"nextLabel",required:!0,type:{name:"string"}},previousLabel:{defaultValue:null,description:"The label for the ‘previous’ button",name:"previousLabel",required:!0,type:{name:"string"}}}}}catch{}const L=o.forwardRef(({children:i,slideId:l,className:n,...d},S)=>{const{currentSlideId:c}=o.useContext(N),f=c===l;return a.jsx("div",{...d,className:_("ams-image-slider__item",f&&"ams-image-slider__item--in-view",n),ref:S,...!f&&{inert:""},children:i})});L.displayName="ImageSlider.Item";try{ImageSlider.Item.displayName="ImageSlider.Item",ImageSlider.Item.__docgenInfo={description:"",displayName:"ImageSlider.Item",props:{slideId:{defaultValue:null,description:"The identifier of the item. Must match the key or order of the slides (starting at 0).",name:"slideId",required:!0,type:{name:"number"}}}}}catch{}const M=o.forwardRef(({children:i,className:l,...n},d)=>a.jsx("div",{...n,className:_("ams-image-slider__scroller",l),ref:d,children:i}));M.displayName="ImageSlider.Scroller";try{ImageSlider.Scroller.displayName="ImageSlider.Scroller",ImageSlider.Scroller.__docgenInfo={description:"",displayName:"ImageSlider.Scroller",props:{}}}catch{}const K=o.forwardRef(({className:i,imageLabel:l,thumbnails:n,...d},S)=>{const{currentSlideId:c,goToNextSlide:f,goToPreviousSlide:x,goToSlideId:g}=o.useContext(N),R=m=>{var w;const u=(w=m.target.parentElement)==null?void 0:w.children[c];if(m.key==="ArrowRight"){const t=u==null?void 0:u.nextElementSibling;if(t===u)return;t&&(t.focus(),f())}if(m.key==="ArrowLeft"){const t=u==null?void 0:u.previousElementSibling;if(t===u)return;t&&(t.focus(),x())}};return a.jsx("nav",{...d,className:_("ams-image-slider__thumbnails",i),onKeyDown:R,ref:S,role:"tablist",children:n&&n.map((m,p)=>a.jsx("button",{"aria-label":`${l} ${p+1}: ${m.alt}`,"aria-posinset":p+1,"aria-selected":c===p?"true":"false","aria-setsize":n.length,className:_("ams-image-slider__thumbnail",c===p&&"ams-image-slider__thumbnail--in-view",m.aspectRatio&&`ams-aspect-ratio--${m.aspectRatio}`),onClick:()=>g(p),role:"tab",style:{backgroundImage:`url(${m.src})`},tabIndex:c===p?0:-1},p))})});K.displayName="ImageSlider.Thumbnails";try{ImageSlider.Thumbnails.displayName="ImageSlider.Thumbnails",ImageSlider.Thumbnails.__docgenInfo={description:"",displayName:"ImageSlider.Thumbnails",props:{imageLabel:{defaultValue:null,description:"",name:"imageLabel",required:!1,type:{name:"string"}},thumbnails:{defaultValue:null,description:"",name:"thumbnails",required:!0,type:{name:"ImageSliderImageProps[]"}}}}}catch{}const F=o.forwardRef(({className:i,controls:l,imageLabel:n="Afbeelding",images:d,nextLabel:S="Volgende",previousLabel:c="Vorige",...f},x)=>{const[g,R]=o.useState(0),[m,p]=o.useState(!0),[u,w]=o.useState(!1),t=o.useRef(null),G=new Set,H=e=>{var r;const s=Array.from(((r=t.current)==null?void 0:r.children)||[]);for(let h of e)G.add(h),h.isIntersecting&&R(s.indexOf(h.target))},j={root:t.current,threshold:.6};o.useEffect(()=>{const e=new IntersectionObserver(H,j),s={ArrowLeft:V,ArrowRight:A},r=h=>{const I=s[h.key];I==null||I()};if(t.current){const h=Array.from(t.current.children);for(let I of h)e.observe(I);t.current.addEventListener("scrollend",E),t.current.addEventListener("keydown",r)}return()=>{t.current&&(t.current.removeEventListener("scrollend",E),t.current.removeEventListener("keydown",r))}},[j,t]);const E=()=>Q(),T=e=>{const s=t.current;if(!s||!e)return;const r=Math.abs(s.offsetLeft-e.offsetLeft);s.scrollTo(r,0)},J=e=>{var r;const s=(r=t.current)==null?void 0:r.children[e];s&&T(s)},A=()=>{var r;const e=(r=t.current)==null?void 0:r.children[g],s=e==null?void 0:e.nextElementSibling;e!==s&&s&&T(s)},V=()=>{var r;const e=(r=t.current)==null?void 0:r.children[g],s=e==null?void 0:e.previousElementSibling;e!==s&&s&&T(s)},Q=()=>{const e=t.current,{lastElementChild:s,firstElementChild:r}=e;p(r===(e==null?void 0:e.children[g])),w(s===(e==null?void 0:e.children[g]))};return a.jsx(N.Provider,{value:{isAtStart:m,isAtEnd:u,currentSlideId:g,goToNextSlide:A,goToPreviousSlide:V,goToSlideId:J},children:a.jsxs("div",{...f,"aria-roledescription":"carousel",className:_("ams-image-slider",l&&"ams-image-slider--controls",i),tabIndex:-1,ref:x,children:[l&&a.jsx(y,{nextLabel:S,previousLabel:c}),a.jsx(M,{"aria-live":"polite",ref:t,role:"group",tabIndex:0,children:d.map(({alt:e,aspectRatio:s,sizes:r,src:h,srcSet:I},k)=>a.jsx(L,{slideId:k,children:a.jsx(X,{alt:e,className:`ams-aspect-ratio--${s}`,sizes:r,src:h,srcSet:I})},k))}),a.jsx(K,{imageLabel:n,thumbnails:d})]})})});F.displayName="ImageSlider";const C=Object.assign(F,{Item:L});try{C.displayName="ImageSlider",C.__docgenInfo={description:"",displayName:"ImageSlider",props:{controls:{defaultValue:null,description:"Display buttons to navigate to the previous or next image.",name:"controls",required:!1,type:{name:"boolean"}},imageLabel:{defaultValue:{value:"Afbeelding"},description:"Label for the image if you need to translate the alt text.",name:"imageLabel",required:!1,type:{name:"string"}},images:{defaultValue:null,description:"The set of images to display.",name:"images",required:!0,type:{name:"ImageSliderImageProps[]"}},nextLabel:{defaultValue:{value:"Volgende"},description:"The label for the ‘next’ button",name:"nextLabel",required:!1,type:{name:"string"}},previousLabel:{defaultValue:{value:"Vorige"},description:"The label for the ‘previous’ button",name:"previousLabel",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/Media/Image Slider",component:C,args:{controls:!0,images:[{alt:"Bridge",aspectRatio:"x-wide",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",aspectRatio:"x-wide",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",aspectRatio:"x-wide",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",aspectRatio:"x-wide",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",aspectRatio:"x-wide",src:"https://picsum.photos/id/123/1280/720"}]},decorators:[i=>a.jsx(Y,{children:a.jsx(i,{})})]},b={},v={args:{images:[{alt:"Bridge",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/122/640/360",srcSet:"https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w"},{alt:"Bunker",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/101/640/360",srcSet:"https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w"},{alt:"Chairs",aspectRatio:"x-wide",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/153/640/360",srcSet:"https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w"}]}};var z,D,P;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(P=(D=b.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,O,$;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(O=v.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const te=["Default","ResponsiveImages"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:b,ResponsiveImages:v,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{de as I,v as R};
