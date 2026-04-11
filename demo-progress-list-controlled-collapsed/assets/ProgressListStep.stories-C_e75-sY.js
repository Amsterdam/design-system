import{n as e}from"./chunk-zsgVPwQN.js";import{K as t,N as n,jt as r}from"./iframe-CDmr3HUg.js";import{t as i,v as a}from"./src-C0aO6KXX.js";import{l as o,m as s}from"./exampleContent-BwA2seBs.js";var c,l,u,d,f,p=e((()=>{t(),i(),s(),c=r(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`Components/Containers/Progress List`,component:a.Step,argTypes:{status:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`current`,`completed`]}},decorators:[e=>(0,c.jsx)(a,{headingLevel:3,children:(0,c.jsx)(e,{})})],render:({children:e,...t})=>(0,c.jsx)(a.Step,{...t,children:e})},d={args:{children:(0,c.jsx)(n,{children:o()}),collapsed:!1,heading:`Aanpassing ontwerp fietspad Entreegebied`,status:`current`},render:({children:e,...t})=>{let[,n]=l();return(0,c.jsx)(a.Step,{...t,onToggle:e=>{n({collapsed:!e})},children:e})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>{exampleParagraph()}</Paragraph>,
    collapsed: false,
    heading: 'Aanpassing ontwerp fietspad Entreegebied',
    status: 'current'
  },
  render: ({
    children,
    ...args
  }) => {
    const [, setArgs] = useArgs();
    return <ProgressList.Step {...args} onToggle={expanded => {
      setArgs({
        collapsed: !expanded
      });
    }}>
        {children}
      </ProgressList.Step>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Step`]}));p();export{d as Step,f as __namedExportsOrder,u as default,p as t};