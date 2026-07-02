import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i}from"./index.esm-Cyk4q9Yv.js";import{in as a,kn as o,t as s,zn as c}from"./src-DIXodChU.js";import{l,u}from"./argTypes-J67b33k4.js";import{l as d,m as f}from"./exampleContent-CFoxZuYq.js";var p=e({Default:()=>g,InverseColour:()=>y,LargeText:()=>_,SmallText:()=>v,WithIcon:()=>b,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{i(),s(),l(),f(),m=n(),h={title:`Components/Text/Paragraph`,component:a,args:{children:d()},argTypes:{children:{description:`The paragraph text.`,table:{disable:!1}},color:u,size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}}},g={},_={args:{size:`large`}},v={args:{size:`small`}},y={args:{color:`inverse`}},b={args:{children:`Heading text`},render:({children:e,...t})=>(0,m.jsxs)(o,{gap:`small`,children:[(0,m.jsx)(c,{color:t.color,size:t.size,svg:(0,m.jsx)(r,{})}),(0,m.jsx)(a,{...t,children:e})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`LargeText`,`SmallText`,`InverseColour`,`WithIcon`]}));S();export{g as Default,y as InverseColour,_ as LargeText,v as SmallText,b as WithIcon,x as __namedExportsOrder,h as default,S as n,p as t};