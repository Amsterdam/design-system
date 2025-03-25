import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as t}from"./index-G8LIXM5I.js";import{w as U,e as W}from"./index.esm-9B8hlNX4.js";import{I as q}from"./IconButton-B1zkHowW.js";import{g as X}from"./generateAspectRatioClass-jt2KOtJX.js";import{I as Y}from"./Image-DmErqfsw.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const Z={currentSlideId:0,goToNextSlide:()=>{},goToPreviousSlide:()=>{},goToSlideId:()=>{},isAtEnd:!1,isAtStart:!0},T=t.createContext(Z),N=t.forwardRef(({className:o,nextLabel:c,previousLabel:d,...u},b)=>{const{goToNextSlide:l,goToPreviousSlide:m,isAtEnd:h,isAtStart:a}=t.useContext(T),v=t.useCallback(()=>m(),[m]),x=t.useCallback(()=>l(),[l]);return n.jsxs("div",{...u,className:_("ams-image-slider__controls",o),ref:b,children:[n.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--previous",color:"inverse",disabled:a,label:d,onClick:v,svg:U}),n.jsx(q,{className:"ams-image-slider__control ams-image-slider__control--next",color:"inverse",disabled:h,label:c,onClick:x,svg:W})]})});N.displayName="ImageSliderControls";try{N.displayName="ImageSliderControls",N.__docgenInfo={description:"",displayName:"ImageSliderControls",props:{nextLabel:{defaultValue:null,description:"The label for the ‘next’ button",name:"nextLabel",required:!0,type:{name:"string"}},previousLabel:{defaultValue:null,description:"The label for the ‘previous’ button",name:"previousLabel",required:!0,type:{name:"string"}}}}}catch{}const k=t.forwardRef(({children:o,className:c,slideId:d,...u},b)=>{const{currentSlideId:l}=t.useContext(T),m=t.useMemo(()=>l===d,[l,d]),h=t.useMemo(()=>_("ams-image-slider__item",m&&"ams-image-slider__item--in-view",c),[m,c]);return n.jsx("div",{...u,className:h,ref:b,...!m&&{inert:""},children:o})});k.displayName="ImageSlider.Item";try{ImageSlider.Item.displayName="ImageSlider.Item",ImageSlider.Item.__docgenInfo={description:"",displayName:"ImageSlider.Item",props:{slideId:{defaultValue:null,description:"The identifier of the item. Must match the key or order of the slides (starting at 0).",name:"slideId",required:!0,type:{name:"number"}}}}}catch{}const K=t.forwardRef(({children:o,className:c,...d},u)=>n.jsx("div",{...d,className:_("ams-image-slider__scroller",c),ref:u,children:o}));K.displayName="ImageSlider.Scroller";try{ImageSlider.Scroller.displayName="ImageSlider.Scroller",ImageSlider.Scroller.__docgenInfo={description:"",displayName:"ImageSlider.Scroller",props:{}}}catch{}const F=t.forwardRef(({className:o,imageLabel:c,thumbnails:d,...u},b)=>{const{currentSlideId:l,goToNextSlide:m,goToPreviousSlide:h,goToSlideId:a}=t.useContext(T),v=t.useCallback(I=>{const p=I.currentTarget.children[l];if(I.key==="ArrowRight"){const g=p==null?void 0:p.nextElementSibling;g&&(g.focus(),m())}if(I.key==="ArrowLeft"){const g=p==null?void 0:p.previousElementSibling;g&&(g.focus(),h())}},[l,m,h]),x=t.useMemo(()=>d.map(({alt:I,aspectRatio:p,src:g},i)=>n.jsx("button",{"aria-label":`${c} ${i+1}: ${I}`,"aria-posinset":i+1,"aria-selected":l===i?"true":"false","aria-setsize":d.length,className:_("ams-image-slider__thumbnail",l===i&&"ams-image-slider__thumbnail--in-view",X(p)),onClick:()=>a(i),role:"tab",style:{backgroundImage:`url(${g})`},tabIndex:l===i?0:-1},i)),[l,a,c,d]);return n.jsx("nav",{...u,className:_("ams-image-slider__thumbnails",o),onKeyDown:v,ref:b,role:"tablist",children:x})});F.displayName="ImageSlider.Thumbnails";try{ImageSlider.Thumbnails.displayName="ImageSlider.Thumbnails",ImageSlider.Thumbnails.__docgenInfo={description:"",displayName:"ImageSlider.Thumbnails",props:{imageLabel:{defaultValue:null,description:"",name:"imageLabel",required:!1,type:{name:"string"}},thumbnails:{defaultValue:null,description:"",name:"thumbnails",required:!0,type:{name:"ImageProps[]"}}}}}catch{}const G=t.forwardRef(({className:o,controls:c,imageLabel:d="Afbeelding",images:u,nextLabel:b="Volgende",previousLabel:l="Vorige",...m},h)=>{const[a,v]=t.useState(0),[x,I]=t.useState(!0),[p,g]=t.useState(!1),i=t.useRef(null),j=t.useRef(null),R=t.useCallback(e=>{var r;const s=Array.from(((r=i.current)==null?void 0:r.children)||[]);e.forEach(S=>{S.isIntersecting&&v(s.indexOf(S.target))})},[]),V=t.useMemo(()=>({root:i.current,threshold:.6}),[]),C=t.useCallback(()=>{const e=i.current;if(!e)return;const{firstElementChild:s,lastElementChild:r}=e;I(s===(e==null?void 0:e.children[a])),g(r===(e==null?void 0:e.children[a]))},[a]);t.useEffect(()=>{if(i.current){j.current=new IntersectionObserver(R,V);const e=j.current,s=Array.from(i.current.children);return s.forEach(r=>e.observe(r)),i.current.addEventListener("scrollend",A),C(),()=>{var r;s.forEach(S=>e.unobserve(S)),(r=i.current)==null||r.removeEventListener("scrollend",A)}}},[R,V,C]);const A=t.useCallback(()=>C(),[C]),f=t.useCallback(e=>{const s=i.current;!s||!e||s.scrollTo({left:s.scrollLeft+e.offsetLeft-s.scrollLeft})},[]),H=t.useCallback(e=>{var r;const s=(r=i.current)==null?void 0:r.children[e];s&&f(s)},[f]),J=t.useCallback(()=>{var r;const e=(r=i.current)==null?void 0:r.children[a],s=e==null?void 0:e.nextElementSibling;s&&f(s)},[a,f]),Q=t.useCallback(()=>{var r;const e=(r=i.current)==null?void 0:r.children[a],s=e==null?void 0:e.previousElementSibling;s&&f(s)},[a,f]);return t.useEffect(()=>{const e=()=>{var E;const s=i.current,r=(E=i.current)==null?void 0:E.children[a];if(!s||!r)return;const S=r.offsetLeft;Math.abs(s.scrollLeft-S)<1||f(r)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[a,f]),n.jsx(T.Provider,{value:{currentSlideId:a,goToNextSlide:J,goToPreviousSlide:Q,goToSlideId:H,isAtEnd:p,isAtStart:x},children:n.jsxs("div",{...m,"aria-roledescription":"carousel",className:_("ams-image-slider",c&&"ams-image-slider--controls",o),ref:h,tabIndex:-1,children:[c&&n.jsx(N,{nextLabel:b,previousLabel:l}),n.jsx(K,{"aria-live":"polite",ref:i,role:"group",tabIndex:0,children:u.map(({alt:e,aspectRatio:s,sizes:r,src:S,srcSet:E},z)=>n.jsx(k,{slideId:z,children:n.jsx(Y,{alt:e,aspectRatio:s,sizes:r,src:S,srcSet:E})},z))}),n.jsx(F,{imageLabel:d,thumbnails:u})]})})});G.displayName="ImageSlider";const L=Object.assign(G,{Item:k});try{L.displayName="ImageSlider",L.__docgenInfo={description:"",displayName:"ImageSlider",props:{controls:{defaultValue:null,description:"Display buttons to navigate to the previous or next image.",name:"controls",required:!1,type:{name:"boolean"}},imageLabel:{defaultValue:{value:"Afbeelding"},description:"Label for the image if you need to translate the alt text.",name:"imageLabel",required:!1,type:{name:"string"}},images:{defaultValue:null,description:"The set of images to display.",name:"images",required:!0,type:{name:"ImageProps[]"}},nextLabel:{defaultValue:{value:"Volgende"},description:"The label for the ‘next’ button",name:"nextLabel",required:!1,type:{name:"string"}},previousLabel:{defaultValue:{value:"Vorige"},description:"The label for the ‘previous’ button",name:"previousLabel",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const ee={title:"Components/Media/Image Slider",component:L,args:{controls:!0,images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]}},y={},w={args:{images:[{alt:"Bridge",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/122/640/360",srcSet:"https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w"},{alt:"Bunker",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/101/640/360",srcSet:"https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w"},{alt:"Chairs",sizes:"(max-width: 36rem) 640px, 50vw",src:"https://picsum.photos/id/153/640/360",srcSet:"https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w"}]}};var P,M,B;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(B=(M=y.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var D,O,$;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    images: [{
      alt: 'Bridge',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/122/640/360',
      srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w'
    }, {
      alt: 'Bunker',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/101/640/360',
      srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w'
    }, {
      alt: 'Chairs',
      sizes: '(max-width: 36rem) 640px, 50vw',
      src: 'https://picsum.photos/id/153/640/360',
      srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w'
    }]
  }
}`,...($=(O=w.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const te=["Default","ResponsiveImages"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:y,ResponsiveImages:w,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as I,w as R};
