import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{I as l}from"./index.esm-CRlu2SWP.js";import{d as F}from"./exampleContent-CpGgN1Hc.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as x}from"./index-RigO-4kf.js";const w=x.forwardRef(({children:e,className:r,inverseColor:p,...a},C)=>t.jsx("figcaption",{...a,ref:C,className:g("ams-figure__caption",p&&"ams-figure__caption--inverse-color",r),children:e}));w.displayName="Figure.Caption";try{Figure.Caption.displayName="Figure.Caption",Figure.Caption.__docgenInfo={description:"",displayName:"Figure.Caption",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const _=x.forwardRef(({children:e,className:r,...p},a)=>t.jsx("figure",{...p,ref:a,className:g("ams-figure",r),children:e}));_.displayName="Figure";const s=Object.assign(_,{Caption:w});try{s.displayName="Figure",s.__docgenInfo={description:"",displayName:"Figure",props:{}}}catch{}const f=F(),y={title:"Components/Media/Figure",component:s};s.Caption;const o={args:{children:[t.jsx(l,{alt:"",aspectRatio:"2x-wide",sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"}),t.jsx(s.Caption,{children:f})]}},i={args:{children:f,inverseColor:!0},render:({children:e,...r})=>t.jsxs(s,{children:[t.jsx(l,{alt:"",aspectRatio:"2x-wide",sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"}),t.jsx(s.Caption,{...r,children:e})]})};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<Image alt="" aspectRatio="2x-wide" sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/1600/500" srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w" />, <Figure.Caption>{caption}</Figure.Caption>]
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: caption,
    inverseColor: true
  },
  render: ({
    children,
    ...args
  }) => <Figure>
      <Image alt="" aspectRatio="2x-wide" sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px" src="https://picsum.photos/1600/500" srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w" />
      <Figure.Caption {...args}>{children}</Figure.Caption>
    </Figure>
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const j=["Default","InverseColour"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:i,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{b as F,i as I};
