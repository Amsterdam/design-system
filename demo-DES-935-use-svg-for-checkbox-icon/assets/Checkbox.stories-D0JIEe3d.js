import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{k as I,P as N,E as w,C as S}from"./index.esm-CsEqs0W7.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as i}from"./index-G8LIXM5I.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("rect",{className:"ams-checkbox__rectangle",height:"22",strokeWidth:"2",width:"22",x:"1",y:"1"}),e.jsx("rect",{className:"ams-checkbox__hover-indicator",height:"20",strokeWidth:"1",width:"20",x:"2",y:"2"}),e.jsx("path",{className:"ams-checkbox__checked-indicator",d:"M3.251 13.017L8.554 18.761L20.749 5.239",strokeWidth:"3"}),e.jsx("line",{className:"ams-checkbox__indeterminate-indicator",strokeWidth:"3",x1:"4",x2:"20",y1:"12",y2:"12"})]});try{CheckboxIcon.displayName="CheckboxIcon",CheckboxIcon.__docgenInfo={description:"",displayName:"CheckboxIcon",props:{}}}catch{}const r=i.forwardRef(({children:a,className:c,icon:m,indeterminate:o,invalid:E,...A},W)=>{const b=i.useId(),s=i.useRef(null);return i.useImperativeHandle(W,()=>s.current),i.useEffect(()=>{s.current&&(s.current.indeterminate=!!o)},[s,o]),e.jsxs("div",{className:z("ams-checkbox",c),children:[e.jsx("input",{...A,"aria-invalid":E||void 0,className:"ams-checkbox__input",id:b,ref:s,type:"checkbox"}),e.jsxs("label",{className:"ams-checkbox__label",htmlFor:b,children:[e.jsx("span",{className:"ams-checkbox__icon-container",children:m??e.jsx(F,{})}),a]})]})});r.displayName="Checkbox";try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:null,description:"Allows being neither checked nor unchecked.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,L={title:"Components/Forms/Checkbox",component:r,args:{checked:!1,children:"Checkbox label",disabled:!1,indeterminate:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,c]=P(),m=o=>{c({checked:o.target.checked})};return e.jsx(r,{onClick:m,...a})}},n={},l={args:{children:"Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening."}},t={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(I,{"aria-labelledby":`fieldset1 description1${a?" error1":""}`,id:"fieldset1",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(N,{className:"ams-mb-s",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(w,{className:"ams-mb-s",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(S,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},d={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(I,{"aria-labelledby":`fieldset2 description2${a?" error2":""}`,id:"fieldset2",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(N,{className:"ams-mb-s",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(w,{className:"ams-mb-s",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(S,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,x,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.'
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,k,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var _,C,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(C=d.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const M=["Default","LongLabel","InAFieldSet","InAFieldSetWithValidation"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InAFieldSet:t,InAFieldSetWithValidation:d,LongLabel:l,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{V as C,t as I,l as L,d as a};
