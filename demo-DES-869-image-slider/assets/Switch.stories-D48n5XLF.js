import{j as e}from"./jsx-runtime-BlAj40OV.js";import{f as _}from"./index.esm-D9NOi1W8.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as n}from"./index-Cs7sjTYM.js";const s=n.forwardRef(({className:t,id:r,...a},c)=>{const l=r||n.useId();return e.jsxs("div",{className:f("ams-switch",t),children:[e.jsx("input",{...a,className:"ams-switch__input",id:l,ref:c,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Forms/Switch",component:s,args:{checked:!1,disabled:!1},argTypes:{"aria-label":{description:"Describes the control."},checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,r]=u(),a=c=>{r({checked:c.target.checked})};return e.jsx(s,{onClick:a,...t})}},i={args:{"aria-label":"Default"}},o={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,r]=u(),a=c=>{r({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(_,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(s,{onClick:a,...t,id:"switch-with-label"})]})}};var d,h,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,g,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const k=["Default","WithLabel"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLabel:o,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{v as S,o as W};
