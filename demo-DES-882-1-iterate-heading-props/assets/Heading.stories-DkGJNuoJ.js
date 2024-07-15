import{j as S}from"./jsx-runtime-BlAj40OV.js";import{r as x}from"./index-Cs7sjTYM.js";import{i as H}from"./decorators-DLPD6TOJ.js";import{c as y}from"./exampleContent-BEbrefRz.js";import{H as t,h as j,a as _}from"./Heading-DeQ6dQ2q.js";import{C as z}from"./Column-Beeb86Y8.js";const b=y(),E={title:"Components/Text/Heading",component:t,args:{children:b,inverseColor:!1},argTypes:{children:{description:"The heading text.",table:{disable:!1}}},decorators:[H]},r={},a={render:n=>S.jsx(z,{gap:"medium",children:j.map(e=>x.createElement(t,{...n,key:e,level:e}))})},s={render:n=>S.jsx(z,{gap:"medium",children:_.map(e=>x.createElement(t,{...n,key:e,size:e}))})},o={args:{inverseColor:!0}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Column gap="medium">
      {headingLevels.map(level => <Heading {...args} key={level} level={level} />)}
    </Column>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,u,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Column gap="medium">
      {headingSizes.map(size => <Heading {...args} key={size} size={size} />)}
    </Column>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,C,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const L=["Default","Levels","Sizes","InvertedColor"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InvertedColor:o,Levels:a,Sizes:s,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{P as H,o as I,a as L,s as S};
