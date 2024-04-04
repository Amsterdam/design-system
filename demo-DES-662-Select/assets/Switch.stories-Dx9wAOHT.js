import{j as e}from"./jsx-runtime-CKrituN3.js";import{_ as l,s as b}from"./index.esm-D_TBPGBO.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:"Components/Forms/Switch",component:l,args:{checked:!1,disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"clicked",table:{disable:!0}}},render:r=>{const[,a]=p(),n=c=>{a({checked:c.target.checked})};return e.jsx(l,{onClick:n,...r})}},t={args:{"aria-label":"Default"}},s={decorators:[r=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(r,{})})],render:r=>{const[,a]=p(),n=c=>{a({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(l,{onClick:n,...r,id:"switch-with-label"})]})}};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,m,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const k=["Default","WithLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithLabel:s,__namedExportsOrder:k,default:u},Symbol.toStringTag,{value:"Module"}));export{S,s as W};
