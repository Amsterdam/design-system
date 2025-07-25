import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as h}from"./index.esm-DDzNsyt1.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as n}from"./index-G8LIXM5I.js";const s=n.forwardRef(({className:t,id:r,...c},a)=>{const l=r||n.useId();return e.jsxs("div",{className:m("ams-switch",t),children:[e.jsx("input",{...c,className:"ams-switch__input",id:l,ref:a,role:"switch",type:"checkbox"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:"Components/Forms/Switch",component:s,args:{checked:!1,disabled:!1},argTypes:{checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,r]=d(),c=a=>{r({checked:a.target.checked})};return e.jsx(s,{onClick:c,...t})}},i={},o={decorators:[t=>e.jsx("div",{style:{alignItems:"center",display:"flex",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,r]=d(),c=a=>{r({checked:a.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(h,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(s,{onClick:c,...t,id:"switch-with-label"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Default","WithLabel"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLabel:o,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{k as S,o as W};
