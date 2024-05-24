import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{S as e}from"./SearchField-CmQi_QNC.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:"Components/Forms/Search Field",component:e,args:{onSubmit:o=>{o.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({label:o,placeholder:l,...c})=>r.jsxs(e,{...c,children:[r.jsx(e.Input,{label:o,placeholder:l}),r.jsx(e.Button,{})]})},a={},n={args:{placeholder:"Wat kunnen we voor u vinden?"}},t={args:{value:""},render:function({label:l,placeholder:c}){const[S,x]=_(),D=s=>{x({value:s.target.value})};return r.jsxs(e,{onSubmit:s=>{s.preventDefault();const u=new FormData(s.currentTarget).get("search-box");u&&alert(`Gezocht op '${u}'`)},children:[r.jsx(e.Input,{name:"search-box",value:S.value,label:l,onChange:D,placeholder:c}),r.jsx(e.Button,{})]})}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,f,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const j=["Default","WithPlaceholder","Controlled"],y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:a,WithPlaceholder:n,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{t as C,y as S,n as W};
