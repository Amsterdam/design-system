import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as a,F as p}from"./index.esm-DN1VMKeT.js";const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:"Components/Forms/Radio",component:a,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{children:{table:{disable:!1}},onChange:{action:"clicked",table:{disable:!0}}},render:c=>{const[,b]=g(),u=m=>{b({checked:m.target.checked})};return e.jsx(a,{onClick:u,...c})}},n={},r={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},invalid:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:()=>e.jsxs(p,{legend:"Waar gaat uw melding over?",children:[e.jsx(a,{name:"soort",value:"horecabedrijf",children:"Horecabedrijf"}),e.jsx(a,{name:"soort",value:"ander_soort_bedrijf",children:"Ander soort bedrijf"}),e.jsx(a,{name:"soort",value:"evenement",children:"Evenement"}),e.jsx(a,{name:"soort",value:"iets_anders",children:"Iets anders"})]})};var o,s,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    </Fieldset>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["Default","RadioGroup"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,RadioGroup:r,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{j as R,r as a};
