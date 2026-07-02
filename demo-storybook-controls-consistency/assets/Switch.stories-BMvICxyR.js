import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,w as i}from"./index.esm-D8eqIj5U.js";import{t as a,v as o}from"./src-C1A9rIMv.js";import{i as s,l as c,t as l}from"./argTypes-J67b33k4.js";var u=e({Default:()=>m,WithLabel:()=>h,__namedExportsOrder:()=>g,default:()=>p}),d,f,p,m,h,g,_=t((()=>{r(),a(),c(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:`Components/Forms/Switch`,component:o,args:{checked:!1,disabled:!1},argTypes:{checked:l,disabled:s,onChange:{action:`changed`,table:{disable:!1}}},render:e=>{let[,t]=f();return(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},m={},h={decorators:[e=>(0,d.jsx)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`5rem`},children:(0,d.jsx)(e,{})})],render:e=>{let[,t]=f();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{htmlFor:`switch-with-label`,children:`Label`}),(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e,id:`switch-with-label`})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithLabel`]}));_();export{m as Default,h as WithLabel,g as __namedExportsOrder,p as default,_ as n,u as t};