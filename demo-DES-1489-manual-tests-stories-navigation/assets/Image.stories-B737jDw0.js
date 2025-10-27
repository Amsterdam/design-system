import{I as r}from"./Image-LLaBgDZa.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const a={title:"Components/Media/Image",component:r},s={args:{alt:"",src:"https://picsum.photos/640/360"},argTypes:{alt:{description:"Describes the image for non-visual users."},src:{description:"The url for the image."},srcSet:{description:"A set of candidate images."}}},e={args:{alt:"",sizes:"(max-width: 37.5rem) 640px, 50vw",src:"https://picsum.photos/1280/720",srcSet:"https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w"}},t={args:{alt:"",loading:"lazy",src:"https://picsum.photos/2560/1440"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440'
  }
}`,...t.parameters?.docs?.source}}};const o=["Default","ResponsiveImages","LazyLoading"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LazyLoading:t,ResponsiveImages:e,__namedExportsOrder:o,default:a},Symbol.toStringTag,{value:"Module"}));export{p as I,t as L,e as R};
