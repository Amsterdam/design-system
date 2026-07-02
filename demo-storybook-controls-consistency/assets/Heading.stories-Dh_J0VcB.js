import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i}from"./index.esm-Cyk4q9Yv.js";import{J as a,L as o,b as s,u as c}from"./index.esm-Biy4Zre3.js";import{Hn as l,t as u}from"./src-CCmgLtBV.js";import{a as d,l as f,u as p}from"./argTypes-J67b33k4.js";import{m,o as h}from"./exampleContent-CFoxZuYq.js";var g=e({Default:()=>y,InverseColour:()=>T,Level1:()=>b,Level2:()=>x,Level3:()=>S,Level4:()=>C,Sizes:()=>w,WithIcon:()=>E,__namedExportsOrder:()=>D,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{a(),i(),u(),f(),m(),_=n(),v={title:`Components/Text/Heading`,component:l,args:{children:h(),level:1},argTypes:{children:{description:`The heading text.`,table:{disable:!1}},color:p,level:d(),size:{control:{labels:{undefined:`matches level (default)`},type:`select`},options:[void 0,`level-1`,`level-2`,`level-3`,`level-4`,`level-5`]}}},y={},b={},x={args:{level:2}},S={args:{level:3}},C={args:{level:4}},w={args:{level:2},render:e=>(0,_.jsxs)(c,{gap:`small`,children:[(0,_.jsx)(l,{...e,size:`level-1`}),(0,_.jsx)(l,{...e,size:`level-2`}),(0,_.jsx)(l,{...e,size:`level-3`}),(0,_.jsx)(l,{...e,size:`level-4`}),(0,_.jsx)(l,{...e,size:`level-5`})]})},T={args:{color:`inverse`,level:2}},E={args:{children:`Heading text`,level:3},render:({children:e,...t})=>{let n;return t.level&&(n=`heading-${t.level}`),t.size&&(n=t.size.replace(`level`,`heading`)),(0,_.jsxs)(o,{gap:`small`,children:[(0,_.jsx)(s,{color:t.color,size:n,svg:(0,_.jsx)(r,{})}),(0,_.jsx)(l,{...t,children:e})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Level1`,`Level2`,`Level3`,`Level4`,`Sizes`,`InverseColour`,`WithIcon`]}));O();export{y as Default,T as InverseColour,b as Level1,x as Level2,S as Level3,C as Level4,w as Sizes,E as WithIcon,D as __namedExportsOrder,v as default,O as n,g as t};