import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{N as r,t as i}from"./src-BE3mV4H6.js";import{n as a,t as o}from"./decorators-C0fl23KJ.js";var s=t({Controlled:()=>p,Default:()=>d,WithPlaceholder:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m,h=e((()=>{i(),o(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`Components/Forms/Search Field`,component:r,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:`Describes the field for screen readers.`},onSubmit:{table:{disable:!1}},placeholder:{description:`Displayed while the field is empty.`}},decorators:[a(`7-of-12-columns`)],render:({invalid:e,label:t,placeholder:n,...i})=>(0,c.jsxs)(r,{...i,children:[(0,c.jsx)(r.Input,{invalid:e,label:t,placeholder:n}),(0,c.jsx)(r.Button,{})]})},d={},f={args:{placeholder:`Wat kunnen we voor u vinden?`}},p={args:{value:``},render:function({invalid:e,label:t,placeholder:n}){let[i,a]=l();return(0,c.jsxs)(r,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search-box`);typeof t==`string`&&t.trim()&&alert(`Gezocht op '${t}'`)},children:[(0,c.jsx)(r.Input,{invalid:e,label:t,name:`search-box`,onChange:e=>{a({value:e.target.value})},placeholder:n,value:i.value}),(0,c.jsx)(r.Button,{})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  render: function Component({
    invalid,
    label,
    placeholder
  }: InputProps) {
    const [args, setArgs] = useArgs();
    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({
        value: event.target.value
      });
    };
    return <SearchField onSubmit={e => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const value = formData.get('search-box');
      // search actions should not be triggered without a value
      if (typeof value === 'string' && value.trim()) {
        // eslint-disable-next-line no-alert
        alert(\`Gezocht op '\${value}'\`);
      }
    }}>
        <SearchField.Input invalid={invalid} label={label} name="search-box" onChange={onValueChange} placeholder={placeholder} value={args['value']} />
        <SearchField.Button />
      </SearchField>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithPlaceholder`,`Controlled`]}));h();export{p as Controlled,d as Default,f as WithPlaceholder,m as __namedExportsOrder,u as default,h as n,s as t};