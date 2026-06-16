import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{E as r,X as i}from"./iframe-Bw8tLrZh.js";import{t as a,v as o}from"./src-CcyD44uP.js";var s=e({Default:()=>d,WithLabel:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p,m=t((()=>{i(),a(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`Components/Forms/Switch`,component:o,args:{checked:!1,disabled:!1},argTypes:{checked:{description:`Whether the control is initially checked.`},disabled:{description:`Prevents interaction. Avoid if possible.`},onChange:{action:`clicked`,table:{disable:!1}}},render:e=>{let[,t]=l();return(0,c.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},d={},f={decorators:[e=>(0,c.jsx)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`5rem`},children:(0,c.jsx)(e,{})})],render:e=>{let[,t]=l();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{htmlFor:`switch-with-label`,children:`Label`}),(0,c.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e,id:`switch-with-label`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '5rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const [, setArgs] = useArgs();
    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      setArgs({
        checked: event.currentTarget.checked
      });
    };
    return <>
        <Label htmlFor="switch-with-label">Label</Label>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithLabel`]}));m();export{d as Default,f as WithLabel,p as __namedExportsOrder,u as default,m as n,s as t};