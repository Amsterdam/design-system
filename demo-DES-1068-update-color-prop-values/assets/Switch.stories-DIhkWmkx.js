import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{f as b}from"./index.esm-BoEvzDxA.js";import{c as w}from"./clsx-B-dksMZM.js";import{r as n}from"./index-B-o1Wr-g.js";const s=n.forwardRef(({className:t,id:r,...c},a)=>{const l=r||n.useId();return e.jsxs("div",{className:w("ams-switch",t),children:[e.jsx("input",{...c,className:"ams-switch__input",id:l,ref:a,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Forms/Switch",component:s,args:{checked:!1,disabled:!1},argTypes:{checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,r]=u(),c=a=>{r({checked:a.target.checked})};return e.jsx(s,{onClick:c,...t})}},i={},o={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,r]=u(),c=a=>{r({checked:a.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(s,{onClick:c,...t,id:"switch-with-label"})]})}};var d,h,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,g,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const k=["Default","WithLabel"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithLabel:o,__namedExportsOrder:k,default:f},Symbol.toStringTag,{value:"Module"}));export{v as S,o as W};
