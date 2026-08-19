import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{E as r,K as i}from"./index.esm-Cf2AflXd.js";import{U as a,nt as o,p as s,w as c}from"./index.esm-CWMRDz3-.js";import{r as l,t as u}from"./Heading-CuJeYrKh.js";import{c as d,g as f}from"./exampleContent-DRei7MoO.js";import{f as p,l as m,p as h,r as g}from"./argTypes-Diu0Wtb4.js";var _=t({Default:()=>x,InverseColour:()=>D,Level1:()=>S,Level2:()=>C,Level3:()=>w,Level4:()=>T,Sizes:()=>E,WithIcon:()=>O,__namedExportsOrder:()=>k,default:()=>b}),v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{o(),i(),l(),p(),f(),v=n(),y=d(),b={title:`Components/Text/Heading`,component:u,args:{children:y,level:1},argTypes:{children:g(`The heading text.`),color:h,level:m(),size:{control:{labels:{undefined:`matches level (default)`},type:`select`},options:[void 0,`level-1`,`level-2`,`level-3`,`level-4`,`level-5`]}}},x={},S={},C={args:{level:2}},w={args:{level:3}},T={args:{level:4}},E={args:{level:2},render:e=>(0,v.jsxs)(s,{gap:`small`,children:[(0,v.jsx)(u,{...e,size:`level-1`}),(0,v.jsx)(u,{...e,size:`level-2`}),(0,v.jsx)(u,{...e,size:`level-3`}),(0,v.jsx)(u,{...e,size:`level-4`}),(0,v.jsx)(u,{...e,size:`level-5`})]})},D={args:{color:`inverse`,level:2}},O={args:{children:`Heading text`,level:3},render:({children:e,...t})=>{let n;return t.level&&(n=`heading-${t.level}`),t.size&&(n=t.size.replace(`level`,`heading`)),(0,v.jsxs)(a,{gap:`small`,children:[(0,v.jsx)(c,{color:t.color,size:n,svg:(0,v.jsx)(r,{})}),(0,v.jsx)(u,{...t,children:e})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Level1`,`Level2`,`Level3`,`Level4`,`Sizes`,`InverseColour`,`WithIcon`]})))()}export{w as a,O as c,C as i,A as l,D as n,T as o,S as r,E as s,_ as t,b as u};