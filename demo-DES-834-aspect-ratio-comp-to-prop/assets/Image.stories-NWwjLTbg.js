import{I as l}from"./Image-N6bVVJpA.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d={title:"Components/Media/Image",component:l},s={args:{alt:"",src:"https://picsum.photos/640/360"},argTypes:{alt:{description:"Describes the image for non-visual users."},src:{description:"The url for the image."},srcSet:{description:"A set of candidate images."}}},e={args:{alt:"",src:"https://picsum.photos/1280/720",srcSet:"https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w",sizes:"(max-width: 36rem) 640px, 50vw"}},t={args:{alt:"",src:"https://picsum.photos/2560/1440",loading:"lazy"}};var r,o,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
    sizes: '(max-width: 36rem) 640px, 50vw'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/2560/1440',
    loading: 'lazy'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["Default","MultipleSources","LazyLoading"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LazyLoading:t,MultipleSources:e,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{f as I,t as L,e as M};
