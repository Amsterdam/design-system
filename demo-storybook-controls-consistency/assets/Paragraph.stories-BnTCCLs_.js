import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i}from"./index.esm-Cyk4q9Yv.js";import{in as a,kn as o,t as s,zn as c}from"./src-KLDxHj6I.js";import{d as l,f as u,m as d,r as f}from"./argTypes-CX0Ca9AC.js";import{l as p,m}from"./exampleContent-CFoxZuYq.js";var h=e({Default:()=>v,InverseColour:()=>x,LargeText:()=>y,SmallText:()=>b,WithIcon:()=>S,__namedExportsOrder:()=>C,default:()=>_}),g,_,v,y,b,x,S,C,w=t((()=>{i(),s(),l(),m(),g=n(),_={title:`Components/Text/Paragraph`,component:a,args:{children:p()},argTypes:{children:f(`The paragraph text.`),color:u,size:d([`small`,void 0,`large`])}},v={},y={args:{size:`large`}},b={args:{size:`small`}},x={args:{color:`inverse`}},S={args:{children:`Heading text`},render:({children:e,...t})=>(0,g.jsxs)(o,{gap:`small`,children:[(0,g.jsx)(c,{color:t.color,size:t.size,svg:(0,g.jsx)(r,{})}),(0,g.jsx)(a,{...t,children:e})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text'
  },
  render: ({
    children,
    ...args
  }) => <Row gap="small">
      <Icon color={args.color} size={args.size} svg={<MailIcon />} />
      <Paragraph {...args}>{children}</Paragraph>
    </Row>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`LargeText`,`SmallText`,`InverseColour`,`WithIcon`]}));w();export{v as Default,x as InverseColour,y as LargeText,b as SmallText,S as WithIcon,C as __namedExportsOrder,_ as default,w as n,h as t};