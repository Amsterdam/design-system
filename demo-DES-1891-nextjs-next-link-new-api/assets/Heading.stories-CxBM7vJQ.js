import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{S as r,St as i,Vt as a,X as o,f as s,z as c}from"./iframe-lx1F6zeH.js";import{Nn as l,t as u}from"./src-DWzSVCUY.js";import{a as d,p as f}from"./exampleContent--bKQaizt.js";var p=e({Default:()=>g,InverseColour:()=>S,Level1:()=>_,Level2:()=>v,Level3:()=>y,Level4:()=>b,Sizes:()=>x,WithIcon:()=>C,__namedExportsOrder:()=>w,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{o(),a(),u(),f(),m=n(),h={title:`Components/Text/Heading`,component:l,args:{children:d(),level:1},argTypes:{children:{description:`The heading text.`,table:{disable:!1}},color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]}}},g={},_={},v={args:{level:2}},y={args:{level:3}},b={args:{level:4}},x={args:{level:2},render:e=>(0,m.jsxs)(s,{gap:`small`,children:[(0,m.jsx)(l,{...e,size:`level-1`}),(0,m.jsx)(l,{...e,size:`level-2`}),(0,m.jsx)(l,{...e,size:`level-3`}),(0,m.jsx)(l,{...e,size:`level-4`}),(0,m.jsx)(l,{...e,size:`level-5`})]})},S={args:{color:`inverse`,level:2}},C={args:{children:`Heading text`,level:3},argTypes:{level:{options:[1,2,3,4]},size:{control:{labels:{undefined:`not set`}},options:[void 0,`level-1`,`level-2`,`level-3`,`level-4`,`level-5`]}},render:({children:e,...t})=>{let n;return t.level&&(n=`heading-${t.level}`),t.size&&(n=t.size.replace(`level`,`heading`)),(0,m.jsxs)(c,{gap:`small`,children:[(0,m.jsx)(r,{color:t.color,size:n,svg:(0,m.jsx)(i,{})}),(0,m.jsx)(l,{...t,children:e})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text',
    level: 3
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4]
    },
    size: {
      control: {
        labels: {
          undefined: 'not set'
        }
      },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5']
    }
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Level1`,`Level2`,`Level3`,`Level4`,`Sizes`,`InverseColour`,`WithIcon`]}));T();export{g as Default,S as InverseColour,_ as Level1,v as Level2,y as Level3,b as Level4,x as Sizes,C as WithIcon,w as __namedExportsOrder,h as default,T as n,p as t};