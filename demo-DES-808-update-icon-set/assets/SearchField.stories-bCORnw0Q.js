import{j as a}from"./jsx-runtime-BlAj40OV.js";import{S as e}from"./SearchField-CihzIMOp.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Search Field",component:e,args:{invalid:!1,onSubmit:o=>{o.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:o,label:l,placeholder:c,...u})=>a.jsxs(e,{...u,children:[a.jsx(e.Input,{invalid:o,label:l,placeholder:c}),a.jsx(e.Button,{})]})},n={},r={args:{placeholder:"Wat kunnen we voor u vinden?"}},t={args:{value:""},render:function({invalid:l,label:c,placeholder:u}){const[x,D]=C(),_=s=>{D({value:s.target.value})};return a.jsxs(e,{onSubmit:s=>{s.preventDefault();const i=new FormData(s.currentTarget).get("search-box");i&&alert(`Gezocht op '${i}'`)},children:[a.jsx(e.Input,{name:"search-box",value:x.value,invalid:l,label:c,onChange:_,placeholder:u}),a.jsx(e.Button,{})]})}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  render: function Component({
    invalid,
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
        <SearchField.Input name="search-box" value={args['value']} invalid={invalid} label={label} onChange={onValueChange} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>;
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const F=["Default","WithPlaceholder","Controlled"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:n,WithPlaceholder:r,__namedExportsOrder:F,default:j},Symbol.toStringTag,{value:"Module"}));export{t as C,A as S,r as W};
