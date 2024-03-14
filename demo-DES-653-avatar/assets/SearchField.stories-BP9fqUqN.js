import{j as r}from"./jsx-runtime-CKrituN3.js";import{E as e}from"./index.esm-vVIm1YRO.js";const{useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:"Components/Forms/Search Field",component:e,args:{onSubmit:o=>{o.preventDefault()}},argTypes:{label:{control:"text"},onSubmit:{table:{disable:!0}},placeholder:{control:"text"}},render:({label:o,placeholder:l,...c})=>r.jsxs(e,{...c,children:[r.jsx(e.Input,{label:o,placeholder:l}),r.jsx(e.Button,{})]})},a={},n={args:{placeholder:"Wat kunnen we voor u vinden?"}},t={args:{value:""},render:function({label:l,placeholder:c}){const[f,x]=D(),_=s=>{x({value:s.target.value})};return r.jsxs(e,{onSubmit:s=>{s.preventDefault();const u=new FormData(s.currentTarget).get("search-box");u&&alert(`Gezocht op '${u}'`)},children:[r.jsx(e.Input,{name:"search-box",value:f.value,label:l,onChange:_,placeholder:c}),r.jsx(e.Button,{})]})}};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,h,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,b,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const j=["Default","WithPlaceholder","Controlled"],E=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:a,WithPlaceholder:n,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{t as C,E as S,n as W};
