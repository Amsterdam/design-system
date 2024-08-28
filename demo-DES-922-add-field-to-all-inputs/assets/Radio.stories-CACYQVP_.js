import{j as e}from"./jsx-runtime-BlAj40OV.js";import{h as x,P as _,E as R,C as y}from"./index.esm-BEwyunnw.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as c}from"./index-Cs7sjTYM.js";const i=c.forwardRef(({children:a,className:s,invalid:n,...o},k)=>{const t=c.useId();return e.jsxs("div",{className:E("ams-radio",s),children:[e.jsx("input",{...o,"aria-invalid":n||void 0,className:"ams-radio__input",id:t,ref:k,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:t,children:[e.jsx("span",{className:"ams-radio__circle"}),a]})]})});i.displayName="Radio";try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Components/Forms/Radio",component:i,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,s]=S(),n=o=>{s({checked:o.target.checked})};return e.jsx(i,{onClick:n,...a})}},r={},d={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:a=>e.jsxs(x,{"aria-describedby":`description1${a.invalid?" error1":""}`,invalid:a.invalid,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(_,{className:"ams-mb--sm",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(R,{className:"ams-mb--sm",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(y,{gap:"extra-small",children:[e.jsx(i,{invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})},l={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:a=>e.jsxs(x,{"aria-describedby":`description2${a.invalid?" error2":""}`,invalid:a.invalid,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(_,{className:"ams-mb--sm",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a.invalid&&e.jsx(R,{className:"ams-mb--sm",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(y,{gap:"extra-small",children:[e.jsx(i,{invalid:a.invalid,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"evenement",children:"Evenement"}),e.jsx(i,{invalid:a.invalid,name:"about",value:"anders",children:"Iets anders"})]})]})};var m,u,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,g,p;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    onChange: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  },
  render: args => <FieldSet aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} invalid={args.invalid} legend="Waar gaat uw melding over?" role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description1" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error1">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,f,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    },
    onChange: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  },
  render: args => <FieldSet aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} invalid={args.invalid} legend="Waar gaat uw melding over?" role="radiogroup">
      <Paragraph className="ams-mb--sm" id="description2" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {args.invalid && <ErrorMessage className="ams-mb--sm" id="error2">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="extra-small">
        <Radio invalid={args.invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={args.invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={args.invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={args.invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const N=["Default","InAFieldSet","InAnInvalidFieldSet"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InAFieldSet:d,InAnInvalidFieldSet:l,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{d as I,P as R,l as a};
