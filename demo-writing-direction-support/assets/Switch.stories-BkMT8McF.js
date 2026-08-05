import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,D as i}from"./index.esm-B5ul1v-t.js";import{n as a,t as o}from"./Switch-CtBy7DAl.js";import{d as s,n as c,s as l}from"./argTypes-CTYEle7b.js";var u=t({Default:()=>m,Disabled:()=>h,WithLabel:()=>g,__namedExportsOrder:()=>_,default:()=>p}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),s(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:`Components/Forms/Switch`,component:o,args:{checked:!1,disabled:!1},argTypes:{checked:c,disabled:l,onChange:{action:`changed`,table:{disable:!1}}},render:e=>{let[,t]=f();return(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},m={},h={args:{disabled:!0}},g={decorators:[e=>(0,d.jsx)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`5rem`},children:(0,d.jsx)(e,{})})],render:e=>{let[,t]=f();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{htmlFor:`switch-with-label`,children:`Label`}),(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e,id:`switch-with-label`})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Disabled`,`WithLabel`]})))()}export{p as a,v as i,u as n,g as r,h as t};