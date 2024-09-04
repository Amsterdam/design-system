import{j as a}from"./jsx-runtime-BlAj40OV.js";import{i as x,P as _,E as R,C as y}from"./index.esm-CqC2Xynn.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";const r=m.forwardRef(({children:e,className:l,invalid:o,...t},E)=>{const n=m.useId();return a.jsxs("div",{className:S("ams-radio",l),children:[a.jsx("input",{...t,"aria-invalid":o||void 0,className:"ams-radio__input",id:n,ref:E,type:"radio"}),a.jsx("label",{className:"ams-radio__label",htmlFor:n,children:e})]})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Forms/Radio",component:r,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:e=>{const[,l]=N(),o=t=>{l({checked:t.target.checked})};return a.jsx(r,{onClick:o,...e})}},i={},d={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>a.jsxs(x,{"aria-describedby":`description1${e?" error1":""}`,invalid:e,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[a.jsx(_,{className:"ams-mb--sm",id:"description1",size:"small",children:"De laatstgenoemde melding."}),e&&a.jsx(R,{className:"ams-mb--sm",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(y,{gap:"extra-small",children:[a.jsx(r,{invalid:e,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(r,{invalid:e,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(r,{invalid:e,name:"about",value:"evenement",children:"Evenement"}),a.jsx(r,{invalid:e,name:"about",value:"anders",children:"Iets anders"})]})]})},s={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>a.jsxs(x,{"aria-describedby":`description2${e?" error2":""}`,invalid:e,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[a.jsx(_,{className:"ams-mb--sm",id:"description2",size:"small",children:"De laatstgenoemde melding."}),e&&a.jsx(R,{className:"ams-mb--sm",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),a.jsxs(y,{gap:"extra-small",children:[a.jsx(r,{invalid:e,name:"about",value:"horeca",children:"Horecabedrijf"}),a.jsx(r,{invalid:e,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),a.jsx(r,{invalid:e,name:"about",value:"evenement",children:"Evenement"}),a.jsx(r,{invalid:e,name:"about",value:"anders",children:"Iets anders"})]})]})};var c,u,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,p,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    }
  },
  render: ({
    invalid
  }) => <FieldSet aria-describedby={\`description1\${invalid ? ' error1' : ''}\`} invalid={invalid} legend="Waar gaat uw melding over?" role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description1" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb--sm" id="error1">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(v=(p=d.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,f,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
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
    }
  },
  render: ({
    invalid
  }) => <FieldSet aria-describedby={\`description2\${invalid ? ' error2' : ''}\`} invalid={invalid} legend="Waar gaat uw melding over?" role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description2" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb--sm" id="error2">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const I=["Default","InAFieldSet","InAFieldSetWithValidation"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InAFieldSet:d,InAFieldSetWithValidation:s,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{d as I,P as R,s as a};
