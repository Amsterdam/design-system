import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as i}from"./index-CBqU2yxZ.js";import{L as w}from"./Label-DaAdNem9.js";const s=i.forwardRef(({className:t,id:r,...a},c)=>{const o=r||i.useId();return e.jsxs("div",{className:b("ams-switch",t),children:[e.jsx("input",{...a,className:"ams-switch__input",id:o,ref:c,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:o})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Forms/Switch",component:s,args:{checked:!1,disabled:!1},argTypes:{onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,r]=_(),a=c=>{r({checked:c.target.checked})};return e.jsx(s,{onClick:a,...t})}},n={args:{"aria-label":"Default"}},l={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,r]=_(),a=c=>{r({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(s,{onClick:a,...t,id:"switch-with-label"})]})}};var d,h,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,g,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const x=["Default","WithLabel"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithLabel:l,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{C as S,l as W};
