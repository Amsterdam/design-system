import{j as s}from"./jsx-runtime-CKrituN3.js";import{f as W,q as p,k as e,H as k}from"./index.esm-BOxtWvpS.js";const D={title:"Components/Media/Icon",component:W,argTypes:{size:{control:{type:"radio"},options:["level-3","level-4","level-5","level-6"]},square:{control:{type:"boolean"}},svg:{control:{type:"select"},options:Object.keys(p),mapping:p}}},r={args:{svg:e}},a={decorators:[i=>s.jsx("span",{style:{display:"flex",gap:"1rem"},children:s.jsx(i,{})})],render:i=>s.jsxs(s.Fragment,{children:[s.jsx(W,{...i,size:"level-3"}),s.jsx(k,{size:"level-3",children:"Inline text"})]}),args:{svg:e}},o={args:{svg:e,square:!0}},n={args:{svg:e,size:"level-3"}},t={args:{svg:e,size:"level-4"}},c={args:{svg:e,size:"level-5"}},l={args:{svg:e,size:"level-6"}};var m,g,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var d,u,I;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [Story => <span style={{
    display: 'flex',
    gap: '1rem'
  }}>
        <Story />
      </span>],
  render: args => <>
      <Icon {...args} size="level-3" />
      <Heading size="level-3">Inline text</Heading>
    </>,
  args: {
    svg: Icons.EmailIcon
  }
}`,...(I=(u=a.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var S,x,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon,
    square: true
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var y,f,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon,
    size: 'level-3'
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var E,L,b;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon,
    size: 'level-4'
  }
}`,...(b=(L=t.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var q,_,h;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon,
    size: 'level-5'
  }
}`,...(h=(_=c.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var H,O,T;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    svg: Icons.EmailIcon,
    size: 'level-6'
  }
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const M=["Default","WithText","Square","Level3","Level4","Level5","Level6"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Level3:n,Level4:t,Level5:c,Level6:l,Square:o,WithText:a,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{P as I,n as L,o as S,a as W,t as a,c as b,l as c};
