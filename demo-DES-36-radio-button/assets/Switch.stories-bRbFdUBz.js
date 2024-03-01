import{j as t}from"./jsx-runtime-CKrituN3.js";import{T as l,n as b}from"./index.esm-BHZpKxdV.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:"Components/Forms/Switch",component:l,args:{checked:!1,disabled:!1},argTypes:{disabled:{control:"boolean"},onChange:{action:"clicked",table:{disable:!0}}},render:s=>{const[,a]=p(),n=c=>{a({checked:c.target.checked})};return t.jsx(l,{onClick:n,...s})}},e={args:{"aria-label":"Default"}},r={render:s=>{const[,a]=p(),n=c=>{a({checked:c.target.checked})};return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:[t.jsx(b,{htmlFor:"switch-with-label",children:"Label"}),t.jsx(l,{onClick:n,...s,id:"switch-with-label"})]})}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,m,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [, setArgs] = useArgs();
    const handleClick = (event: any) => {
      setArgs({
        checked: event.target.checked
      });
    };
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5rem'
    }}>
        <FormLabel htmlFor="switch-with-label">Label</FormLabel>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </div>;
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const k=["Default","WithFormLabel"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithFormLabel:r,__namedExportsOrder:k,default:u},Symbol.toStringTag,{value:"Module"}));export{w as S,r as W};
