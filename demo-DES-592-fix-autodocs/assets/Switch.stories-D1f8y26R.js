import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as i}from"./index-CBqU2yxZ.js";import{F as w}from"./FormLabel-DL9JW8ci.js";const r=i.forwardRef(({className:t,id:s,...a},c)=>{const l=s||i.useId();return e.jsxs("div",{className:b("ams-switch",t),children:[e.jsx("input",{...a,className:"ams-switch__input",id:l,ref:c,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:l})]})});r.displayName="Switch";try{r.displayName="Switch",r.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Forms/Switch",component:r,args:{checked:!1,disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,s]=_(),a=c=>{s({checked:c.target.checked})};return e.jsx(r,{onClick:a,...t})}},n={args:{"aria-label":"Default"}},o={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,s]=_(),a=c=>{s({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(r,{onClick:a,...t,id:"switch-with-label"})]})}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <FormLabel htmlFor="switch-with-label">Label</FormLabel>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>;
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const x=["Default","WithLabel"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithLabel:o,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{C as S,o as W};
