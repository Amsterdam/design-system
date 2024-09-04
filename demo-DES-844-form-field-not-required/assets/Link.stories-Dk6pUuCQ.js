import{j as l}from"./jsx-runtime-BlAj40OV.js";import{P as N}from"./index.esm-DZTeNGND.js";import{i as P,c as D}from"./decorators-CweBkPI6.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as w}from"./index-Cs7sjTYM.js";const t=w.forwardRef(({children:n,className:S,contrastColor:j,inverseColor:L,variant:i="standalone",...q},I)=>l.jsx("a",{...q,ref:I,className:T("ams-link",j&&"ams-link--contrast-color",L&&"ams-link--inverse-color",i==="inline"&&"ams-link--inline",i==="standalone"&&"ams-link--standalone",S),children:n}));t.displayName="Link";try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{contrastColor:{defaultValue:null,description:"Changes the text colour for readability on a light background.",name:"contrastColor",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const z={title:"Components/Navigation/Link",component:t,args:{children:"Link label",contrastColor:!1,href:"#",inverseColor:!1},argTypes:{children:{description:"The link text.",table:{disable:!1}},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}},decorators:[P,D]},e={},r={},a={args:{children:"typograaf",variant:"inline"},decorators:[n=>l.jsxs(N,{children:["Jouw ",l.jsx(n,{})," biedt mij zulke exquise schreven!"]})]},o={args:{contrastColor:!0}},s={args:{inverseColor:!0}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,v,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    contrastColor: true
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const E=["Default","Standalone","Inline","ContrastColour","InverseColour"],W=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,Inline:a,InverseColour:s,Standalone:r,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{o as C,a as I,W as L,r as S,s as a};
