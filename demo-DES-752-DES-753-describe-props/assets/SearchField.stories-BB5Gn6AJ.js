import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{S as e}from"./SearchField-CLJUJKZk.js";const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:"Components/Forms/Search Field",component:e,args:{onSubmit:o=>{o.preventDefault()}},argTypes:{label:{description:"Describes the field. Not displayed visually."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({label:o,placeholder:l,...c})=>a.jsxs(e,{...c,children:[a.jsx(e.Input,{label:o,placeholder:l}),a.jsx(e.Button,{})]})},r={},n={args:{placeholder:"Wat kunnen we voor u vinden?"}},t={args:{value:""},render:function({label:l,placeholder:c}){const[S,x]=_(),D=s=>{x({value:s.target.value})};return a.jsxs(e,{onSubmit:s=>{s.preventDefault();const u=new FormData(s.currentTarget).get("search-box");u&&alert(`Gezocht op '${u}'`)},children:[a.jsx(e.Input,{name:"search-box",value:S.value,label:l,onChange:D,placeholder:c}),a.jsx(e.Button,{})]})}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,b,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const j=["Default","WithPlaceholder","Controlled"],w=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:r,WithPlaceholder:n,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{t as C,w as S,n as W};
