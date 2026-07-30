import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{E as r,G as i}from"./index.esm-AHCPMkhr.js";import{Fn as a,Gn as o,t as s,un as c}from"./src-CD81fjbz.js";import{d as l,f as u,m as d,r as f}from"./argTypes-CQXDxDHP.js";import{m as p,u as m}from"./exampleContent-CG3SyhNH.js";var h=t({Default:()=>v,InverseColour:()=>x,LargeText:()=>y,SmallText:()=>b,WithIcon:()=>S,__namedExportsOrder:()=>C,default:()=>_}),g,_,v,y,b,x,S,C,w=e((()=>{i(),s(),l(),p(),g=n(),_={title:`Components/Text/Paragraph`,component:c,args:{children:m()},argTypes:{children:f(`The paragraph text.`),color:u,size:d([`small`,void 0,`large`])}},v={},y={args:{size:`large`}},b={args:{size:`small`}},x={args:{color:`inverse`}},S={args:{children:`Heading text`},render:({children:e,...t})=>(0,g.jsxs)(a,{gap:`small`,children:[(0,g.jsx)(o,{color:t.color,size:t.size,svg:(0,g.jsx)(r,{})}),(0,g.jsx)(c,{...t,children:e})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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