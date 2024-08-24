import{j as e}from"./jsx-runtime-BlAj40OV.js";import{h as f}from"./index.esm-BEwyunnw.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as n}from"./index-Cs7sjTYM.js";const a=n.forwardRef(({children:o,className:i,invalid:t,...d},_)=>{const l=n.useId();return e.jsxs("div",{className:v("ams-radio",i),children:[e.jsx("input",{...d,"aria-invalid":t||void 0,className:"ams-radio__input",id:l,ref:_,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:l,children:[e.jsx("span",{className:"ams-radio__circle"}),o]})]})});a.displayName="Radio";try{a.displayName="Radio",a.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Radio",component:a,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:o=>{const[,i]=g(),t=d=>{i({checked:d.target.checked})};return e.jsx(a,{onClick:t,...o})}},r={},s={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},invalid:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:()=>e.jsxs(f,{legend:"Waar gaat uw melding over?",children:[e.jsx(a,{name:"soort",value:"horecabedrijf",children:"Horecabedrijf"}),e.jsx(a,{name:"soort",value:"ander_soort_bedrijf",children:"Ander soort bedrijf"}),e.jsx(a,{name:"soort",value:"evenement",children:"Evenement"}),e.jsx(a,{name:"soort",value:"iets_anders",children:"Iets anders"})]}),parameters:{docs:{source:{type:"dynamic"}}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    invalid: {
      table: {
        disable: true
      }
    },
    onChange: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  },
  render: () => <FieldSet legend="Waar gaat uw melding over?">
      <Radio name="soort" value="horecabedrijf">
        Horecabedrijf
      </Radio>
      <Radio name="soort" value="ander_soort_bedrijf">
        Ander soort bedrijf
      </Radio>
      <Radio name="soort" value="evenement">
        Evenement
      </Radio>
      <Radio name="soort" value="iets_anders">
        Iets anders
      </Radio>
    </FieldSet>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const R=["Default","RadioGroup"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,RadioGroup:s,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{E as R,s as a};
