import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{I as y}from"./index.esm-7gEUOcGL.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as x}from"./index-RigO-4kf.js";const _=x.forwardRef(({children:r,className:s,inverseColor:i,...n},F)=>e.jsx("figcaption",{...n,ref:F,className:g("ams-figure__caption",i&&"ams-figure__caption--inverse-color",s),children:r}));_.displayName="Figure.Caption";try{Figure.Caption.displayName="Figure.Caption",Figure.Caption.__docgenInfo={description:"",displayName:"Figure.Caption",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const f=x.forwardRef(({children:r,className:s,...i},n)=>e.jsx("figure",{...i,ref:n,className:g("ams-figure",s),children:r}));f.displayName="Figure";const o=Object.assign(f,{Caption:_});try{o.displayName="Figure",o.__docgenInfo={description:"",displayName:"Figure",props:{}}}catch{}const h=()=>e.jsx(y,{alt:"",aspectRatio:"2x-wide",sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"}),C="Een rustige Amsterdamse gracht met eeuwenoude gevels die weerspiegelen in het water, terwijl fietsen nonchalant tegen de brugleuning rusten – een alledaags tafereel vol historie en charme.",j={title:"Components/Media/Figure",component:o};o.Caption;const a={args:{children:[e.jsx(h,{}),e.jsx(o.Caption,{children:C})]}},t={args:{children:C,inverseColor:!0},decorators:[r=>e.jsxs(o,{children:[e.jsx(h,{}),e.jsx(r,{})]})]};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<ExampleImage />, <Figure.Caption>{exampleCaption}</Figure.Caption>]
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: exampleCaption,
    inverseColor: true
  },
  decorators: [Story => <Figure>
        <ExampleImage />
        <Story />
      </Figure>]
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const w=["Default","InverseColour"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:t,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{S as F,t as I};
