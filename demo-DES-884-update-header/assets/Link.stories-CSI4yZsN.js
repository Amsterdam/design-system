import{j as l}from"./jsx-runtime-BjgbQsUx.js";import{P as N}from"./index.esm-LguzEjBL.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as T}from"./index-RigO-4kf.js";const t=T.forwardRef(({children:s,className:S,contrastColor:j,inverseColor:L,variant:i="standalone",...q},I)=>l.jsx("a",{...q,ref:I,className:P("ams-link",j&&"ams-link--contrast-color",L&&"ams-link--inverse-color",i==="inline"&&"ams-link--inline",i==="standalone"&&"ams-link--standalone",S),children:s}));t.displayName="Link";try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{contrastColor:{defaultValue:null,description:"Changes the text colour for readability on a light background.",name:"contrastColor",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const w={title:"Components/Navigation/Link",component:t,args:{children:"Link label",contrastColor:!1,href:"#",inverseColor:!1},argTypes:{children:{description:"The link text.",table:{disable:!1}},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},e={},r={},a={args:{children:"typograaf",variant:"inline"},decorators:[s=>l.jsxs(N,{children:["Jouw ",l.jsx(s,{})," biedt mij zulke exquise schreven!"]})]},o={args:{contrastColor:!0}},n={args:{inverseColor:!0}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,v,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    contrastColor: true
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const z=["Default","Standalone","Inline","ContrastColour","InverseColour"],J=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,Inline:a,InverseColour:n,Standalone:r,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{o as C,a as I,J as L,r as S,n as a};
