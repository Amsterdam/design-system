import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{g as r,t as i}from"./src-1lrG7JSl.js";var a=t({Controlled:()=>d,Default:()=>l,WithPlaceholder:()=>u,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f,p=e((()=>{i(),o=n(),{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,c={title:`Components/Forms/Search Field`,component:r,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:`Describes the field for screen readers.`},onSubmit:{table:{disable:!0}},placeholder:{description:`Displayed while the field is empty.`}},render:({invalid:e,label:t,placeholder:n,...i})=>(0,o.jsxs)(r,{...i,children:[(0,o.jsx)(r.Input,{invalid:e,label:t,placeholder:n}),(0,o.jsx)(r.Button,{})]})},l={},u={args:{placeholder:`Wat kunnen we voor u vinden?`}},d={args:{value:``},render:function({invalid:e,label:t,placeholder:n}){let[i,a]=s();return(0,o.jsxs)(r,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search-box`);t&&alert(`Gezocht op '${t}'`)},children:[(0,o.jsx)(r.Input,{invalid:e,label:t,name:`search-box`,onChange:e=>{a({value:e.target.value})},placeholder:n,value:i.value}),(0,o.jsx)(r.Button,{})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <SearchField.Input invalid={invalid} label={label} name="search-box" onChange={onValueChange} placeholder={placeholder} value={args['value']} />
        <SearchField.Button />
      </SearchField>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithPlaceholder`,`Controlled`]}));p();export{d as Controlled,l as Default,u as WithPlaceholder,f as __namedExportsOrder,c as default,p as n,a as t};