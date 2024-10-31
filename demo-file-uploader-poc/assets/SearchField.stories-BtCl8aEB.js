import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as u}from"./index-Cs7sjTYM.js";import{j as C}from"./index.esm-Dn56MWuB.js";import{I as B}from"./Icon-msbkstIT.js";const I=u.forwardRef(({label:a="Zoeken",className:r,...n},t)=>e.jsxs("button",{...n,ref:t,className:m("ams-search-field__button",r),children:[e.jsx("span",{className:"ams-visually-hidden",children:a}),e.jsx(B,{svg:C,size:"level-5",square:!0})]}));I.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const D=u.forwardRef(({className:a,dir:r,invalid:n,label:t="Zoeken",...p},h)=>{const i=u.useId();return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:i,className:"ams-visually-hidden",children:t}),e.jsx("input",{...p,"aria-invalid":n||void 0,autoComplete:"off",className:m("ams-search-field__input",a),dir:r??"auto",enterKeyHint:"search",id:i,ref:h,spellCheck:"false",type:"search"})]})});D.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const N=u.forwardRef(({children:a,className:r,...n},t)=>e.jsx("form",{role:"search",...n,ref:t,className:m("ams-search-field",r),children:a}));N.displayName="SearchField";const s=Object.assign(N,{Button:I,Input:D});try{s.displayName="SearchField",s.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Forms/Search Field",component:s,args:{invalid:!1,onSubmit:a=>{a.preventDefault()}},argTypes:{label:{description:"Describes the field for screen readers."},onSubmit:{table:{disable:!0}},placeholder:{description:"Displayed while the field is empty."}},render:({invalid:a,label:r,placeholder:n,...t})=>e.jsxs(s,{...t,children:[e.jsx(s.Input,{invalid:a,label:r,placeholder:n}),e.jsx(s.Button,{})]})},o={},l={args:{placeholder:"Wat kunnen we voor u vinden?"}},c={args:{value:""},render:function({invalid:r,label:n,placeholder:t}){const[p,h]=w(),i=d=>{h({value:d.target.value})};return e.jsxs(s,{onSubmit:d=>{d.preventDefault();const f=new FormData(d.currentTarget).get("search-box");f&&alert(`Gezocht op '${f}'`)},children:[e.jsx(s.Input,{name:"search-box",value:p.value,invalid:r,label:n,onChange:i,placeholder:t}),e.jsx(s.Button,{})]})}};var g,v,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var S,b,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Wat kunnen we voor u vinden?'
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var F,x,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const k=["Default","WithPlaceholder","Controlled"],T=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,Default:o,WithPlaceholder:l,__namedExportsOrder:k,default:O},Symbol.toStringTag,{value:"Module"}));export{c as C,T as S,l as W};
