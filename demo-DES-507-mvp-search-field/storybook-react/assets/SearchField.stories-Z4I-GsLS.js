import{r as e,j as n}from"./index.esm-BiCjkXKg.js";const{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,_={title:"Forms/Search Field",component:e,args:{children:[n.jsx(e.Input,{},1),n.jsx(e.Button,{},2)],onSubmit:s=>{s.preventDefault()}},argTypes:{children:{table:{disable:!0}},onSubmit:{table:{disable:!0}}}},r={},a={args:{children:[n.jsx(e.Input,{placeholder:"Wat kunnen we voor u vinden?"},1),n.jsx(e.Button,{},2)]}},t={args:{value:""},render:function(){const[S,b]=x(),f=o=>{b({value:o.target.value})};return n.jsxs(e,{onSubmit:o=>{o.preventDefault();const l=new FormData(o.currentTarget).get("search-box");l&&alert(`Gezocht op '${l}'`)},children:[n.jsx(e.Input,{name:"search-box",value:S.value,onChange:f}),n.jsx(e.Button,{})]})}};var u,c,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,h,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<SearchField.Input key={1} placeholder="Wat kunnen we voor u vinden?" />, <SearchField.Button key={2} />]
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  render: function Component() {
    const [args, setArgs] = useArgs();
    const onValueChange = (event: any) => {
      setArgs({
        value: event.target.value
      });
    };
    return <SearchField onSubmit={e => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const value = formData.get('search-box');
      // search actions should not be triggered without a value
      if (value) {
        // eslint-disable-next-line no-alert
        alert(\`Gezocht op '\${value}'\`);
      }
    }}>
        <SearchField.Input name="search-box" value={args['value']} onChange={onValueChange} />
        <SearchField.Button />
      </SearchField>;
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const D=["Default","WithPlaceholder","Controlled"],C=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:r,WithPlaceholder:a,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{t as C,C as S,a as W};
