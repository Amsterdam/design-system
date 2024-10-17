import{I as u}from"./Image-CVzrCme5.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const g={title:"Components/Media/Image",component:u},s={args:{alt:"",src:"https://picsum.photos/640/360"},argTypes:{alt:{description:"Describes the image for non-visual users."},src:{description:"The url for the image."},srcSet:{description:"A set of candidate images."}}},e={args:{alt:"",src:"https://picsum.photos/1280/720",srcSet:"https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w",sizes:"(max-width: 36rem) 640px, 50vw"}},t={args:{alt:"",src:"https://picsum.photos/2560/1440",loading:"lazy"}};var r,a,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=s.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
    sizes: '(max-width: 36rem) 640px, 50vw'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/2560/1440',
    loading: 'lazy'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const h=["Default","ResponsiveImages","LazyLoading"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LazyLoading:t,ResponsiveImages:e,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{f as I,t as L,e as R};
