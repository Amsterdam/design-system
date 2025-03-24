import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as I,P as E,E as S,C as N}from"./index.esm-CnnLx2fH.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as i}from"./index-C0MU9AHG.js";const r=i.forwardRef(({children:a,className:c,indeterminate:o,invalid:m,...w},A)=>{const b=i.useId(),s=i.useRef(null);return i.useImperativeHandle(A,()=>s.current),i.useEffect(()=>{s.current&&(s.current.indeterminate=!!o)},[s,o]),e.jsxs("div",{className:F("ams-checkbox",c),children:[e.jsx("input",{...w,"aria-invalid":m||void 0,className:"ams-checkbox__input",id:b,ref:s,type:"checkbox"}),e.jsxs("label",{className:"ams-checkbox__label",htmlFor:b,children:[e.jsx("span",{className:"ams-checkbox__checkmark"}),a]})]})});r.displayName="Checkbox";try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"Allows being neither checked nor unchecked.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:z}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"Components/Forms/Checkbox",component:r,args:{checked:!1,children:"Checkbox label",disabled:!1,indeterminate:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,c]=z(),o=m=>{c({checked:m.target.checked})};return e.jsx(r,{onClick:o,...a})}},l={},n={args:{children:"Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening."}},d={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(I,{"aria-labelledby":`fieldset1 description1${a?" error1":""}`,id:"fieldset1",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(E,{className:"ams-mb-s",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(S,{className:"ams-mb-s",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(N,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},t={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(I,{"aria-labelledby":`fieldset2 description2${a?" error2":""}`,id:"fieldset2",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(E,{className:"ams-mb-s",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(S,{className:"ams-mb-s",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(N,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})};var u,h,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,p,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.'
  }
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,k,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    indeterminate: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    invalid
  }) => <FieldSet aria-labelledby={\`fieldset1 description1\${invalid ? ' error1' : ''}\`} id="fieldset1" invalid={invalid} legend="Waar gaat uw melding over?">
      <Paragraph className="ams-mb-s" id="description1" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb-s" id="error1">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Checkbox invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var C,_,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    indeterminate: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    invalid
  }) => <FieldSet aria-labelledby={\`fieldset2 description2\${invalid ? ' error2' : ''}\`} id="fieldset2" invalid={invalid} legend="Waar gaat uw melding over?">
      <Paragraph className="ams-mb-s" id="description2" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb-s" id="error2">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
        <Checkbox invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const W=["Default","LongLabel","InAFieldSet","InAFieldSetWithValidation"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:l,InAFieldSet:d,InAFieldSetWithValidation:t,LongLabel:n,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{L as C,d as I,n as L,t as a};
