import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as u}from"./index-G8LIXM5I.js";import{s as S}from"./index.esm-CVKOIKGq.js";import{B as F}from"./Button-BZ209Iw2.js";const g=u.forwardRef(({children:e="Zoeken",...r},t)=>a.jsx(F,{...r,icon:S,iconOnly:!0,ref:t,children:e}));g.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{}}}catch{}const _=u.forwardRef(({className:e,dir:r,invalid:t,label:o="Zoeken",...p},h)=>{const i=u.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{className:"ams-visually-hidden",htmlFor:i,children:o}),a.jsx("input",{...p,"aria-invalid":t||void 0,autoComplete:"off",className:f("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:i,ref:h,spellCheck:"false",type:"search"})]})});_.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const v=u.forwardRef(({children:e,className:r,...t},o)=>a.jsx("form",{role:"search",...t,className:f("ams-search-field",r),ref:o,children:e}));v.displayName="SearchField";const n=Object.assign(v,{Button:g,Input:_});try{n.displayName="SearchField",n.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,b={title:"Components/Forms/Search Field",component:n,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:e,label:r,placeholder:t,...o})=>a.jsxs(n,{...o,children:[a.jsx(n.Input,{invalid:e,label:r,placeholder:t}),a.jsx(n.Button,{})]})},s={},l={args:{placeholder:"Wat kunnen we voor u vinden?"}},c={args:{value:""},render:function({invalid:r,label:t,placeholder:o}){const[p,h]=y(),i=d=>{h({value:d.target.value})};return a.jsxs(n,{onSubmit:d=>{d.preventDefault();const m=new FormData(d.currentTarget).get("search-box");m&&alert(`Gezocht op '${m}'`)},children:[a.jsx(n.Input,{invalid:r,label:t,name:"search-box",onChange:i,placeholder:o,value:p.value}),a.jsx(n.Button,{})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const x=["Default","WithPlaceholder","Controlled"],w=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:s,WithPlaceholder:l,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{c as C,w as S,l as W};
