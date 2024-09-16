import{j as e}from"./jsx-runtime-BlAj40OV.js";import{F as S,P as N,E,C as I}from"./index.esm-DQHNxj5y.js";import{m as A,n as C}from"./index.esm-CIU4HIuz.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";const r=m.forwardRef(({children:a,className:l,icon:n,invalid:t,...F},w)=>{const c=m.useId();return e.jsxs("div",{className:k("ams-radio",l),children:[e.jsx("input",{...F,"aria-invalid":t||void 0,className:"ams-radio__input",id:c,ref:w,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:c,children:[e.jsx("span",{className:"ams-radio__icon-container",children:n??e.jsx(A,{className:"ams-radio__icon"})}),a]})]})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/Forms/Radio",component:r,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,l]=P(),n=t=>{l({checked:t.target.checked})};return e.jsx(r,{onClick:n,...a})}},i={},s={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(S,{"aria-describedby":`description1${a?" error1":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(N,{className:"ams-mb--sm",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(E,{className:"ams-mb--sm",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(I,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},d={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(S,{"aria-describedby":`description2${a?" error2":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(N,{className:"ams-mb--sm",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(E,{className:"ams-mb--sm",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(I,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},o={args:{icon:e.jsx(C,{})}};var u,b,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,j,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var _,R,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: <FavouriteIcon />
  }
}`,...(y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const T=["Default","InAFieldSet","InAFieldSetWithValidation","CustomIcons"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:o,Default:i,InAFieldSet:s,InAFieldSetWithValidation:d,__namedExportsOrder:T,default:W},Symbol.toStringTag,{value:"Module"}));export{o as C,s as I,G as R,d as a};
