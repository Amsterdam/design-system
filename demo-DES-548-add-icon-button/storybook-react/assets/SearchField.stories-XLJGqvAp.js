import{p as o,j as e,m as f,S as x}from"./index.esm-mRy7zm5p.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:"Forms/Search Field",component:o,args:{onSubmit:t=>{t.preventDefault()}},argTypes:{children:{table:{disable:!0}},label:{control:"text"},onSubmit:{table:{disable:!0}},placeholder:{control:"text"}},render:({label:t,placeholder:l,...c})=>e.jsxs(o,{...c,children:[e.jsx(o.Input,{label:t,placeholder:l}),e.jsx(f,{label:"Zoeken",svg:x,onBackground:"dark"})]})},a={},n={args:{placeholder:"Wat kunnen we voor u vinden?"}},r={args:{value:""},render:function({label:l,placeholder:c}){const[_,D]=j(),k=s=>{D({value:s.target.value})};return e.jsxs(o,{onSubmit:s=>{s.preventDefault();const u=new FormData(s.currentTarget).get("search-box");u&&alert(`Gezocht op '${u}'`)},children:[e.jsx(o.Input,{name:"search-box",value:_.value,label:l,onChange:k,placeholder:c}),e.jsx(f,{label:"Zoeken",svg:x,onBackground:"dark"})]})}};var d,i,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,h,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,b,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <IconButton label="Zoeken" svg={SearchIcon} onBackground="dark" />
      </SearchField>;
  }
}`,...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const F=["Default","WithPlaceholder","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:a,WithPlaceholder:n,__namedExportsOrder:F,default:C},Symbol.toStringTag,{value:"Module"}));export{r as C,A as S,n as W};
