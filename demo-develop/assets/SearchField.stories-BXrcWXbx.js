import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./SearchField-D-lK6S8O.js";var a=t({Controlled:()=>f,Default:()=>l,Disabled:()=>d,WithPlaceholder:()=>u,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o=n(),{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,c={title:`Components/Forms/Search Field`,component:i,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:`Describes the field for screen readers.`},onSubmit:{table:{disable:!1}},placeholder:{description:`Displayed while the field is empty.`}},render:({invalid:e,label:t,placeholder:n,...r})=>(0,o.jsxs)(i,{...r,children:[(0,o.jsx)(i.Input,{invalid:e,label:t,placeholder:n}),(0,o.jsx)(i.Button,{})]}),subcomponents:{"SearchField.Button":i.Button,"SearchField.Input":i.Input}},l={},u={args:{placeholder:`Wat kunnen we voor u vinden?`}},d={args:{disabled:!0}},f={args:{value:``},render:function({invalid:e,label:t,placeholder:n}){let[r,a]=s();return(0,o.jsxs)(i,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search-box`);typeof t==`string`&&t.trim()&&alert(`Gezocht op '${t}'`)},children:[(0,o.jsx)(i.Input,{invalid:e,label:t,name:`search-box`,onChange:e=>{a({value:e.target.value})},placeholder:n,value:r.value}),(0,o.jsx)(i.Button,{})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithPlaceholder`,`Disabled`,`Controlled`]})))()}export{m as a,u as i,d as n,c as o,a as r,f as t};