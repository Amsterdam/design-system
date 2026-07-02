import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i}from"./index.esm-Cyk4q9Yv.js";import{J as a,L as o,b as s,u as c}from"./index.esm-DsJLQgFz.js";import{Hn as l,t as u}from"./src-CbbXZon2.js";import{c as d,f,p,r as m}from"./argTypes-CrWlcsbR.js";import{m as h,o as g}from"./exampleContent-CFoxZuYq.js";var _=e({Default:()=>b,InverseColour:()=>E,Level1:()=>x,Level2:()=>S,Level3:()=>C,Level4:()=>w,Sizes:()=>T,WithIcon:()=>D,__namedExportsOrder:()=>O,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{a(),i(),u(),f(),h(),v=n(),y={title:`Components/Text/Heading`,component:l,args:{children:g(),level:1},argTypes:{children:m(`The heading text.`),color:p,level:d(),size:{control:{labels:{undefined:`matches level (default)`},type:`select`},options:[void 0,`level-1`,`level-2`,`level-3`,`level-4`,`level-5`]}}},b={},x={},S={args:{level:2}},C={args:{level:3}},w={args:{level:4}},T={args:{level:2},render:e=>(0,v.jsxs)(c,{gap:`small`,children:[(0,v.jsx)(l,{...e,size:`level-1`}),(0,v.jsx)(l,{...e,size:`level-2`}),(0,v.jsx)(l,{...e,size:`level-3`}),(0,v.jsx)(l,{...e,size:`level-4`}),(0,v.jsx)(l,{...e,size:`level-5`})]})},E={args:{color:`inverse`,level:2}},D={args:{children:`Heading text`,level:3},render:({children:e,...t})=>{let n;return t.level&&(n=`heading-${t.level}`),t.size&&(n=t.size.replace(`level`,`heading`)),(0,v.jsxs)(o,{gap:`small`,children:[(0,v.jsx)(s,{color:t.color,size:n,svg:(0,v.jsx)(r,{})}),(0,v.jsx)(l,{...t,children:e})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  },
  render: args => <Column gap="small">
      <Heading {...args} size="level-1" />
      <Heading {...args} size="level-2" />
      <Heading {...args} size="level-3" />
      <Heading {...args} size="level-4" />
      <Heading {...args} size="level-5" />
    </Column>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text',
    level: 3
  },
  render: ({
    children,
    ...args
  }) => {
    let iconSize;
    if (args.level) iconSize = \`heading-\${args.level}\`;
    if (args.size) iconSize = args.size.replace('level', 'heading');
    return <Row gap="small">
        <Icon color={args.color} size={iconSize as IconProps['size']} svg={<MailIcon />} />
        <Heading {...args}>{children}</Heading>
      </Row>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Level1`,`Level2`,`Level3`,`Level4`,`Sizes`,`InverseColour`,`WithIcon`]}));k();export{b as Default,E as InverseColour,x as Level1,S as Level2,C as Level3,w as Level4,T as Sizes,D as WithIcon,O as __namedExportsOrder,y as default,k as n,_ as t};