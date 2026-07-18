import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{X as r,w as i}from"./index.esm-DpqMwTx9.js";import{t as a,y as o}from"./src-L7EIZJsK.js";import{d as s,n as c,s as l}from"./argTypes-CQXDxDHP.js";var u=t({Default:()=>m,WithLabel:()=>h,__namedExportsOrder:()=>g,default:()=>p}),d,f,p,m,h,g,_=e((()=>{r(),a(),s(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:`Components/Forms/Switch`,component:o,args:{checked:!1,disabled:!1},argTypes:{checked:c,disabled:l,onChange:{action:`changed`,table:{disable:!1}}},render:e=>{let[,t]=f();return(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},m={},h={decorators:[e=>(0,d.jsx)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`5rem`},children:(0,d.jsx)(e,{})})],render:e=>{let[,t]=f();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{htmlFor:`switch-with-label`,children:`Label`}),(0,d.jsx)(o,{onClick:e=>{t({checked:e.currentTarget.checked})},...e,id:`switch-with-label`})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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