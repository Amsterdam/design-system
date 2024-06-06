import{I as d}from"./Image-Bf5zYcta.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const u={title:"Components/Media/Image",component:d},e={args:{alt:"",src:"https://picsum.photos/640/360"},argTypes:{alt:{description:"Describes the image for non-visual users."},src:{description:"The url for the image."},srcSet:{description:"A set of candidate images."}}},s={args:{alt:"",srcSet:"https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w",sizes:"(max-width: 36rem) 640px, 50vw"}},t={args:{alt:"Een toegankelijke beschrijving voor deze afbeelding",src:"https://picsum.photos/2560/1440",loading:"lazy"}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/640/360'
  },
  argTypes: {
    alt: {
      description: 'Describes the image for non-visual users.'
    },
    src: {
      description: 'The url for the image.'
    },
    srcSet: {
      description: 'A set of candidate images.'
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    alt: '',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
    sizes: '(max-width: 36rem) 640px, 50vw'
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    alt: 'Een toegankelijke beschrijving voor deze afbeelding',
    src: 'https://picsum.photos/2560/1440',
    loading: 'lazy'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const g=["Default","MultipleSources","LazyLoading"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LazyLoading:t,MultipleSources:s,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{f as I,t as L,s as M};
