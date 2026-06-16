import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{St as r,Vt as i}from"./iframe-YuxuSfuk.js";import{$t as a,An as o,t as s,xn as c}from"./src-B6cFnLOB.js";import{c as l,p as u}from"./exampleContent--bKQaizt.js";var d=e({Default:()=>m,InverseColour:()=>_,LargeText:()=>h,SmallText:()=>g,WithIcon:()=>v,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y,b=t((()=>{i(),s(),u(),f=n(),p={title:`Components/Text/Paragraph`,component:a,args:{children:l()},argTypes:{children:{description:`The paragraph text.`,table:{disable:!1}},color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]},size:{control:{labels:{large:`large`,small:`small`,undefined:`medium`},type:`radio`},options:[`small`,void 0,`large`]}}},m={},h={args:{size:`large`}},g={args:{size:`small`}},_={args:{color:`inverse`}},v={args:{children:`Heading text`},render:({children:e,...t})=>(0,f.jsxs)(c,{gap:`small`,children:[(0,f.jsx)(o,{color:t.color,size:t.size,svg:(0,f.jsx)(r,{})}),(0,f.jsx)(a,{...t,children:e})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`LargeText`,`SmallText`,`InverseColour`,`WithIcon`]}));b();export{m as Default,_ as InverseColour,h as LargeText,g as SmallText,v as WithIcon,y as __namedExportsOrder,p as default,b as n,d as t};