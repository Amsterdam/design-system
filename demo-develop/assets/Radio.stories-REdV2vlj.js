import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as l}from"./index-BwDkhjyp.js";import{F as v}from"./Fieldset-BdWirkiG.js";const a=l.forwardRef(({children:s,className:o,invalid:i,...t},_)=>{const d=l.useId();return e.jsxs("div",{className:f("ams-radio",o),children:[e.jsx("input",{...t,type:"radio",className:"ams-radio__input",ref:_,id:d,"aria-invalid":i||void 0}),e.jsxs("label",{className:"ams-radio__label",htmlFor:d,children:[e.jsx("span",{className:"ams-radio__circle"}),s]})]})});a.displayName="Radio";try{a.displayName="Radio",a.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Radio",component:a,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:s=>{const[,o]=g(),i=t=>{o({checked:t.target.checked})};return e.jsx(a,{onClick:i,...s})}},r={},n={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},invalid:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:()=>e.jsxs(v,{legend:"Waar gaat uw melding over?",children:[e.jsx(a,{name:"soort",value:"horecabedrijf",children:"Horecabedrijf"}),e.jsx(a,{name:"soort",value:"ander_soort_bedrijf",children:"Ander soort bedrijf"}),e.jsx(a,{name:"soort",value:"evenement",children:"Evenement"}),e.jsx(a,{name:"soort",value:"iets_anders",children:"Iets anders"})]}),parameters:{docs:{source:{type:"dynamic"}}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  render: () => <Fieldset legend="Waar gaat uw melding over?">
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
    </Fieldset>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const R=["Default","RadioGroup"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,RadioGroup:n,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{N as R,n as a};
