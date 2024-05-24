import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as l}from"./index-BwDkhjyp.js";import{L as w}from"./Label-7rbJKFpg.js";const s=l.forwardRef(({className:t,id:r,...a},c)=>{const o=r||l.useId();return e.jsxs("div",{className:_("ams-switch",t),children:[e.jsx("input",{...a,className:"ams-switch__input",id:o,ref:c,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:o})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Forms/Switch",component:s,args:{checked:!1,disabled:!1},argTypes:{"aria-label":{description:"Describes the control."},checked:{description:"Whether the control is initially checked."},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,r]=u(),a=c=>{r({checked:c.target.checked})};return e.jsx(s,{onClick:a,...t})}},n={args:{"aria-label":"Default"}},i={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,r]=u(),a=c=>{r({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(s,{onClick:a,...t,id:"switch-with-label"})]})}};var d,h,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,g,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const k=["Default","WithLabel"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithLabel:i,__namedExportsOrder:k,default:f},Symbol.toStringTag,{value:"Module"}));export{v as S,i as W};
