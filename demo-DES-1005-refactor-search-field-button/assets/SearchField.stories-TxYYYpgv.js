import{j as a}from"./jsx-runtime-BlAj40OV.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as u}from"./index-Cs7sjTYM.js";import{j as C}from"./index.esm-DQgjFsBh.js";import{B as N}from"./Button-Dkyuxz1j.js";const I=u.forwardRef(({className:e,children:r="Zoeken",...t},n)=>a.jsx(N,{...t,className:m("ams-search-field__button",e),icon:C,iconPosition:"only",ref:n,children:r}));I.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{}}}catch{}const D=u.forwardRef(({className:e,dir:r,invalid:t,label:n="Zoeken",...p},h)=>{const i=u.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:i,className:"ams-visually-hidden",children:n}),a.jsx("input",{...p,"aria-invalid":t||void 0,autoComplete:"off",className:m("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:i,ref:h,spellCheck:"false",type:"search"})]})});D.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const B=u.forwardRef(({children:e,className:r,...t},n)=>a.jsx("form",{role:"search",...t,ref:n,className:m("ams-search-field",r),children:e}));B.displayName="SearchField";const o=Object.assign(B,{Button:I,Input:D});try{o.displayName="SearchField",o.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Forms/Search Field",component:o,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:e,label:r,placeholder:t,...n})=>a.jsxs(o,{...n,children:[a.jsx(o.Input,{invalid:e,label:r,placeholder:t}),a.jsx(o.Button,{})]})},s={},l={args:{placeholder:"Wat kunnen we voor u vinden?"}},c={args:{value:""},render:function({invalid:r,label:t,placeholder:n}){const[p,h]=w(),i=d=>{h({value:d.target.value})};return a.jsxs(o,{onSubmit:d=>{d.preventDefault();const f=new FormData(d.currentTarget).get("search-box");f&&alert(`Gezocht op '${f}'`)},children:[a.jsx(o.Input,{name:"search-box",value:p.value,invalid:r,label:t,onChange:i,placeholder:n}),a.jsx(o.Button,{})]})}};var g,_,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var S,F,b;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(b=(F=l.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var y,x,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const P=["Default","WithPlaceholder","Controlled"],T=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:s,WithPlaceholder:l,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{c as C,T as S,l as W};
