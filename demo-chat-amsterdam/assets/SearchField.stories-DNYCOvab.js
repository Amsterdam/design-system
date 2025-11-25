import{r as u,j as a,a2 as S,c as f}from"./iframe-BK-jBEhd.js";import{B as b}from"./Button-DfzpBG-1.js";const g=u.forwardRef(({children:e="Zoeken",icon:r=S,...t},n)=>a.jsx(b,{...t,icon:r,iconOnly:!0,ref:n,type:"submit",children:e}));g.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{icon:{defaultValue:null,description:"Adds an icon to the button, showing it after the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const _=u.forwardRef(({className:e,dir:r,invalid:t,label:n="Zoeken",...p},h)=>{const i=u.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{className:"ams-visually-hidden",htmlFor:i,children:n}),a.jsx("input",{...p,"aria-invalid":t||void 0,autoComplete:"off",className:f("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:i,ref:h,spellCheck:"false",type:"search"})]})});_.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const v=u.forwardRef(({children:e,className:r,...t},n)=>a.jsx("form",{role:"search",...t,className:f("ams-search-field",r),ref:n,children:e}));v.displayName="SearchField";const o=Object.assign(v,{Button:g,Input:_});try{o.displayName="SearchField",o.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Components/Forms/Search Field",component:o,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:e,label:r,placeholder:t,...n})=>a.jsxs(o,{...n,children:[a.jsx(o.Input,{invalid:e,label:r,placeholder:t}),a.jsx(o.Button,{})]})},s={},l={args:{placeholder:"Wat kunnen we voor u vinden?"}},c={args:{value:""},render:function({invalid:r,label:t,placeholder:n}){const[p,h]=y(),i=d=>{h({value:d.target.value})};return a.jsxs(o,{onSubmit:d=>{d.preventDefault();const m=new FormData(d.currentTarget).get("search-box");m&&alert(`Gezocht op '${m}'`)},children:[a.jsx(o.Input,{invalid:r,label:t,name:"search-box",onChange:i,placeholder:n,value:p.value}),a.jsx(o.Button,{})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const x=["Default","WithPlaceholder","Controlled"],B=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:s,WithPlaceholder:l,__namedExportsOrder:x,default:F},Symbol.toStringTag,{value:"Module"}));export{c as C,o as S,l as W,B as a,F as m};
