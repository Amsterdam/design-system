import{j as i}from"./jsx-runtime-BlAj40OV.js";import{P as N}from"./index.esm-usQhLUyS.js";import{c as P,i as D}from"./decorators-CweBkPI6.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as w}from"./index-Cs7sjTYM.js";const t=w.forwardRef(({children:s,className:S,contrastColor:j,inverseColor:L,variant:l="standalone",...q},I)=>i.jsx("a",{...q,ref:I,className:T("ams-link",j&&"ams-link--contrast-color",L&&"ams-link--inverse-color",l==="inline"&&"ams-link--inline",l==="standalone"&&"ams-link--standalone",S),children:s}));t.displayName="Link";try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{contrastColor:{defaultValue:null,description:"Changes the text colour for readability on a light background.",name:"contrastColor",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const z={title:"Components/Navigation/Link",component:t,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}},decorators:[P,D]},e={},r={},a={args:{children:"typograaf",variant:"inline"},decorators:[s=>i.jsxs(N,{children:["Jouw ",i.jsx(s,{})," biedt mij zulke exquise schreven!"]})]},o={args:{contrastColor:!0}},n={args:{inverseColor:!0}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const E=["Default","Standalone","Inline","ContrastColour","InverseColour"],W=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,Inline:a,InverseColour:n,Standalone:r,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{o as C,a as I,W as L,r as S,n as a};
