import{o as e,j as a}from"./index.esm-s_bVDE8p.js";const{useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Forms/Search Field",component:e,args:{onSubmit:o=>{o.preventDefault()}},argTypes:{children:{table:{disable:!0}},label:{control:"text"},onSubmit:{table:{disable:!0}},placeholder:{control:"text"}},render:({label:o,placeholder:l,...c})=>a.jsxs(e,{...c,children:[a.jsx(e.Input,{label:o,placeholder:l}),a.jsx(e.Button,{})]})},r={},n={args:{placeholder:"Wat kunnen we voor u vinden?"}},t={args:{value:""},render:function({label:l,placeholder:c}){const[f,x]=D(),_=s=>{x({value:s.target.value})};return a.jsxs(e,{onSubmit:s=>{s.preventDefault();const u=new FormData(s.currentTarget).get("search-box");u&&alert(`Gezocht op '${u}'`)},children:[a.jsx(e.Input,{name:"search-box",value:f.value,label:l,onChange:_,placeholder:c}),a.jsx(e.Button,{})]})}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,m,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,b,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  render: function Component({
    label,
    placeholder
  }: InputProps) {
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
        <SearchField.Input name="search-box" value={args['value']} label={label} onChange={onValueChange} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>;
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const C=["Default","WithPlaceholder","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:r,WithPlaceholder:n,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{t as C,A as S,n as W};
