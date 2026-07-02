import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i}from"./index.esm-Cyk4q9Yv.js";import{in as a,kn as o,t as s,zn as c}from"./src-Dk4zeSri.js";import{f as l,p as u,r as d}from"./argTypes-K2rctYNz.js";import{l as f,m as p}from"./exampleContent-CFoxZuYq.js";var m=e({Default:()=>_,InverseColour:()=>b,LargeText:()=>v,SmallText:()=>y,WithIcon:()=>x,__namedExportsOrder:()=>S,default:()=>g}),h,g,_,v,y,b,x,S,C=t((()=>{i(),s(),l(),p(),h=n(),g={title:`Components/Text/Paragraph`,component:a,args:{children:f()},argTypes:{children:d(`The paragraph text.`),color:u,size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}}},_={},v={args:{size:`large`}},y={args:{size:`small`}},b={args:{color:`inverse`}},x={args:{children:`Heading text`},render:({children:e,...t})=>(0,h.jsxs)(o,{gap:`small`,children:[(0,h.jsx)(c,{color:t.color,size:t.size,svg:(0,h.jsx)(r,{})}),(0,h.jsx)(a,{...t,children:e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`LargeText`,`SmallText`,`InverseColour`,`WithIcon`]}));C();export{_ as Default,b as InverseColour,v as LargeText,y as SmallText,x as WithIcon,S as __namedExportsOrder,g as default,C as n,m as t};