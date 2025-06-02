import{r as n,j as e,c as b,s as w}from"./iframe-CmHy-vHF.js";const t=n.forwardRef(({className:s,id:r,...c},a)=>{const l=r||n.useId();return e.jsxs("div",{className:b("ams-switch",s),children:[e.jsx("input",{...c,className:"ams-switch__input",id:l,ref:a,role:"switch",type:"checkbox"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});t.displayName="Switch";try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,k={title:"Components/Forms/Switch",component:t,args:{checked:!1,disabled:!1},argTypes:{checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:s=>{const[,r]=u(),c=a=>{r({checked:a.target.checked})};return e.jsx(t,{onClick:c,...s})}},i={},o={decorators:[s=>e.jsx("div",{style:{alignItems:"center",display:"flex",gap:"5rem"},children:e.jsx(s,{})})],render:s=>{const[,r]=u(),c=a=>{r({checked:a.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(t,{onClick:c,...s,id:"switch-with-label"})]})}};var d,h,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,g,_;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const x=["Default","WithLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLabel:o,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{S,o as W};
