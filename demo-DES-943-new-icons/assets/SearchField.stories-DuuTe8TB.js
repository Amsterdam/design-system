import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as u}from"./index-D7uoVdV3.js";import{l as C}from"./index.esm-CKYHBquS.js";import{B as N}from"./Button-B0rxuroA.js";const j=u.forwardRef(({children:e="Zoeken",...r},n)=>a.jsx(N,{...r,icon:C,iconOnly:!0,ref:n,children:e}));j.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{}}}catch{}const D=u.forwardRef(({className:e,dir:r,invalid:n,label:o="Zoeken",...p},h)=>{const i=u.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:i,className:"ams-visually-hidden",children:o}),a.jsx("input",{...p,"aria-invalid":n||void 0,autoComplete:"off",className:I("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:i,ref:h,spellCheck:"false",type:"search"})]})});D.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const B=u.forwardRef(({children:e,className:r,...n},o)=>a.jsx("form",{role:"search",...n,ref:o,className:I("ams-search-field",r),children:e}));B.displayName="SearchField";const t=Object.assign(B,{Button:j,Input:D});try{t.displayName="SearchField",t.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Forms/Search Field",component:t,args:{invalid:!1,onSubmit:e=>{e.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:e,label:r,placeholder:n,...o})=>a.jsxs(t,{...o,children:[a.jsx(t.Input,{invalid:e,label:r,placeholder:n}),a.jsx(t.Button,{})]})},s={},l={args:{placeholder:"Wat kunnen we voor u vinden?"}},c={args:{value:""},render:function({invalid:r,label:n,placeholder:o}){const[p,h]=w(),i=d=>{h({value:d.target.value})};return a.jsxs(t,{onSubmit:d=>{d.preventDefault();const m=new FormData(d.currentTarget).get("search-box");m&&alert(`Gezocht op '${m}'`)},children:[a.jsx(t.Input,{name:"search-box",value:p.value,invalid:r,label:n,onChange:i,placeholder:o}),a.jsx(t.Button,{})]})}};var f,g,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,S,F;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var y,b,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const R=["Default","WithPlaceholder","Controlled"],T=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:s,WithPlaceholder:l,__namedExportsOrder:R,default:O},Symbol.toStringTag,{value:"Module"}));export{c as C,T as S,l as W};
