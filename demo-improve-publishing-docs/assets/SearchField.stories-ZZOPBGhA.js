import{r as d,j as a,ai as S,c as f}from"./iframe-BER7bSZ3.js";import{B as y}from"./Button-ByDS0ZP9.js";const g=d.forwardRef(({children:e="Zoeken",...r},n)=>a.jsx(y,{...r,icon:S,iconOnly:!0,ref:n,type:"submit",children:e}));g.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{}}}catch{}const _=d.forwardRef(({className:e,dir:r,id:n,invalid:o,label:u="Zoeken",...p},h)=>{const s=n??d.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{className:"ams-visually-hidden",htmlFor:s,children:u}),a.jsx("input",{...p,"aria-invalid":o||void 0,autoComplete:"off",className:f("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:s,ref:h,spellCheck:"false",type:"search"})]})});_.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const v=d.forwardRef(({children:e,className:r,...n},o)=>a.jsx("form",{role:"search",...n,className:f("ams-search-field",r),ref:o,children:e}));v.displayName="SearchField";const t=Object.assign(v,{Button:g,Input:_});try{t.displayName="SearchField",t.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,b={title:"Components/Forms/Search Field",component:t,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:e,label:r,placeholder:n,...o})=>a.jsxs(t,{...o,children:[a.jsx(t.Input,{invalid:e,label:r,placeholder:n}),a.jsx(t.Button,{})]})},l={},c={args:{placeholder:"Wat kunnen we voor u vinden?"}},i={args:{value:""},render:function({invalid:r,label:n,placeholder:o}){const[u,p]=F(),h=s=>{p({value:s.target.value})};return a.jsxs(t,{onSubmit:s=>{s.preventDefault();const m=new FormData(s.currentTarget).get("search-box");m&&alert(`Gezocht op '${m}'`)},children:[a.jsx(t.Input,{invalid:r,label:n,name:"search-box",onChange:h,placeholder:o,value:u.value}),a.jsx(t.Button,{})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Default","WithPlaceholder","Controlled"],B=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:l,WithPlaceholder:c,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{i as C,t as S,c as W,B as a,b as m};
