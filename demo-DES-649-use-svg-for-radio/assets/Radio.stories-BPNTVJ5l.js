import{j as e}from"./jsx-runtime-BlAj40OV.js";import{F as x,P as _,E as R,C as y}from"./index.esm-BalS6t3p.js";import{m as E}from"./index.esm-BauF_2H1.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";const r=m.forwardRef(({children:a,className:l,invalid:o,...n},S)=>{const t=m.useId();return e.jsxs("div",{className:N("ams-radio",l),children:[e.jsx("input",{...n,"aria-invalid":o||void 0,className:"ams-radio__input",id:t,ref:S,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:t,children:[e.jsx(E,{className:"ams-radio__icon"}),a]})]})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Components/Forms/Radio",component:r,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,l]=w(),o=n=>{l({checked:n.target.checked})};return e.jsx(r,{onClick:o,...a})}},i={},d={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(x,{"aria-describedby":`description1${a?" error1":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(_,{className:"ams-mb--sm",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(R,{className:"ams-mb--sm",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(y,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},s={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(x,{"aria-describedby":`description2${a?" error2":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(_,{className:"ams-mb--sm",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(R,{className:"ams-mb--sm",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(y,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})};var c,u,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,p,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const k=["Default","InAFieldSet","InAFieldSetWithValidation"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InAFieldSet:d,InAFieldSetWithValidation:s,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{d as I,T as R,s as a};
