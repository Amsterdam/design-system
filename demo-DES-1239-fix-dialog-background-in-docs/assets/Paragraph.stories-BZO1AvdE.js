import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{d as T}from"./index.esm-Bv5DmutW.js";import{b as j}from"./exampleContent-PGFPgakh.js";import{P}from"./Paragraph-BDLeQ91t.js";import{R as _}from"./Row-DPyRQ-WY.js";import{I as y}from"./Icon-BBW_x4VP.js";const R=j(),E={title:"Components/Text/Paragraph",component:P,args:{children:R},argTypes:{children:{description:"The paragraph text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{large:"large",small:"small",undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}}},r={},e={args:{size:"large"}},a={args:{size:"small"}},s={args:{color:"inverse"}},o={args:{children:"Heading text"},render:({children:b,...t})=>l.jsxs(_,{gap:"small",children:[l.jsx(y,{color:t.color,size:t.size,svg:T}),l.jsx(P,{...t,children:b})]})};var n,c,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,z,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Heading text'
  },
  render: ({
    children,
    ...args
  }) => <Row gap="small">
      <Icon color={args.color} size={args.size} svg={EmailIcon} />
      <Paragraph {...args}>{children}</Paragraph>
    </Row>
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const w=["Default","LargeText","SmallText","InverseColour","WithIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InverseColour:s,LargeText:e,SmallText:a,WithIcon:o,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{s as I,e as L,M as P,a as S,o as W};
