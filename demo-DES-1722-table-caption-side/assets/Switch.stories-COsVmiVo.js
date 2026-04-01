import{n as e,r as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-BrayXyei.js";import{G as r,w as i}from"./iframe-GtnC6m4a.js";import{l as a,t as o}from"./src-IF4cVlGA.js";var s=t({Default:()=>d,WithLabel:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p,m=e((()=>{r(),o(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`Components/Forms/Switch`,component:a,args:{checked:!1,disabled:!1},argTypes:{checked:{description:`Whether the control is initially checked.`},disabled:{description:`Prevents interaction. Avoid if possible.`},onChange:{action:`clicked`,table:{disable:!0}}},render:e=>{let[,t]=l();return(0,c.jsx)(a,{onClick:e=>{t({checked:e.target.checked})},...e})}},d={},f={decorators:[e=>(0,c.jsx)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`5rem`},children:(0,c.jsx)(e,{})})],render:e=>{let[,t]=l();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{htmlFor:`switch-with-label`,children:`Label`}),(0,c.jsx)(a,{onClick:e=>{t({checked:e.target.checked})},...e,id:`switch-with-label`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '5rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const [, setArgs] = useArgs();
    const handleClick = (event: any) => {
      setArgs({
        checked: event.target.checked
      });
    };
    return <>
        <Label htmlFor="switch-with-label">Label</Label>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithLabel`]}));m();export{d as Default,f as WithLabel,p as __namedExportsOrder,u as default,m as n,s as t};