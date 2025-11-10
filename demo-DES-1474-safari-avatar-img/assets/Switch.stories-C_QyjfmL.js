import{r as n,j as e,c as h,u as p}from"./iframe-DUEA43bp.js";const t=n.forwardRef(({className:s,id:r,...c},a)=>{const l=r||n.useId();return e.jsxs("div",{className:h("ams-switch",s),children:[e.jsx("input",{...c,className:"ams-switch__input",id:l,ref:a,role:"switch",type:"checkbox"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});t.displayName="Switch";try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,m={title:"Components/Forms/Switch",component:t,args:{checked:!1,disabled:!1},argTypes:{checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:s=>{const[,r]=d(),c=a=>{r({checked:a.target.checked})};return e.jsx(t,{onClick:c,...s})}},i={},o={decorators:[s=>e.jsx("div",{style:{alignItems:"center",display:"flex",gap:"5rem"},children:e.jsx(s,{})})],render:s=>{const[,r]=d(),c=a=>{r({checked:a.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(t,{onClick:c,...s,id:"switch-with-label"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Default","WithLabel"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLabel:o,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{t as S,o as W,_ as a,m};
