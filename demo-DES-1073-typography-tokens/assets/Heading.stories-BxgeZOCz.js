import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-C0MU9AHG.js";import{C as M,R as P,I as q}from"./index.esm-CRglfvTQ.js";import{d as A}from"./index.esm-DvoLfDtE.js";import{e as B}from"./exampleContent-PGFPgakh.js";import{H as r}from"./Heading-BQPWrcoF.js";const F=B(),G={title:"Components/Text/Heading",component:r,args:{children:F,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},a={},l={},o={args:{level:2}},n={args:{level:3}},t={args:{level:4}},c={render:e=>m.jsxs(M,{gap:"small",children:[s.createElement(r,{...e,key:"level-1",size:"level-1"}),s.createElement(r,{...e,key:"level-2",size:"level-2"}),s.createElement(r,{...e,key:"level-3",size:"level-3"}),s.createElement(r,{...e,key:"level-4",size:"level-4"}),s.createElement(r,{...e,key:"level-5",size:"level-5"}),s.createElement(r,{...e,key:"level-6",size:"level-6"})]})},i={args:{color:"inverse",level:2}},d={args:{children:"Heading text",level:4},argTypes:{level:{table:{disable:!0}}},render:({children:e,...p})=>m.jsxs(P,{gap:"small",children:[m.jsx(q,{color:p.color,size:"heading-4",svg:A}),m.jsx(r,{...p,children:e})]})};var v,g,u;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,z,H;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(H=(z=l.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var h,S,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,k,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var E,I,L;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var j,C,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
      <Heading {...args} key="level-6" size="level-6" />
    </Column>
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,R,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...(w=(R=i.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var O,W,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Heading text',
    level: 4
  },
  argTypes: {
    level: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <Row gap="small">
      <Icon color={args.color} size="heading-4" svg={EmailIcon} />
      <Heading {...args}>{children}</Heading>
    </Row>
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const J=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:i,Level1:l,Level2:o,Level3:n,Level4:t,Sizes:c,WithIcon:d,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as H,i as I,l as L,c as S,d as W,o as a,n as b,t as c};
