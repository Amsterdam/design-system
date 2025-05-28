import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{k as W,P as z,E as A,C as F}from"./index.esm-D1IbH_61.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as i}from"./index-G8LIXM5I.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const D=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("rect",{className:"ams-checkbox__rectangle",fill:"none",height:"22",stroke:"black",strokeWidth:"2",width:"22",x:"1",y:"1"}),e.jsx("rect",{className:"ams-checkbox__hover-indicator",fill:"none",height:"20",stroke:"black",strokeWidth:"1",width:"20",x:"2",y:"2"}),e.jsx("path",{className:"ams-checkbox__checked-indicator",d:"M3.251 13.017L8.554 18.761L20.749 5.239",fill:"none",stroke:"black",strokeWidth:"3"}),e.jsx("line",{className:"ams-checkbox__indeterminate-indicator",fill:"none",stroke:"black",strokeWidth:"3",x1:"4",x2:"20",y1:"12",y2:"12"})]});try{CheckboxIcon.displayName="CheckboxIcon",CheckboxIcon.__docgenInfo={description:"",displayName:"CheckboxIcon",props:{}}}catch{}const r=i.forwardRef(({children:a,className:m,icon:b,indeterminate:c,invalid:M,...P},L)=>{const u=i.useId(),s=i.useRef(null);return i.useImperativeHandle(L,()=>s.current),i.useEffect(()=>{s.current&&(s.current.indeterminate=!!c)},[s,c]),e.jsxs("div",{className:T("ams-checkbox",m),children:[e.jsx("input",{...P,"aria-invalid":M||void 0,className:"ams-checkbox__input",id:u,ref:s,type:"checkbox"}),e.jsxs("label",{className:"ams-checkbox__label",htmlFor:u,children:[e.jsx("span",{className:"ams-checkbox__icon-container",children:b??e.jsx(D,{})}),a]})]})});r.displayName="Checkbox";try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"ReactNode"}},indeterminate:{defaultValue:null,description:"Allows being neither checked nor unchecked.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const h=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-checkbox__rectangle",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"}),e.jsx("path",{className:"ams-checkbox__checked-indicator",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"})]});try{h.displayName="CustomIcon",h.__docgenInfo={description:"",displayName:"CustomIcon",props:{}}}catch{}const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Components/Forms/Checkbox",component:r,args:{checked:!1,children:"Checkbox label",disabled:!1,indeterminate:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,m]=O(),b=c=>{m({checked:c.target.checked})};return e.jsx(r,{onClick:b,...a})}},n={},t={args:{children:"Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening."}},l={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(W,{"aria-labelledby":`fieldset1 description1${a?" error1":""}`,id:"fieldset1",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(z,{className:"ams-mb-s",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(A,{className:"ams-mb-s",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},d={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(W,{"aria-labelledby":`fieldset2 description2${a?" error2":""}`,id:"fieldset2",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(z,{className:"ams-mb-s",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(A,{className:"ams-mb-s",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(F,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},o={args:{icon:e.jsx(h,{})}};var g,p,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,k,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.'
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var _,C,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,I,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var N,S,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const V=["Default","LongLabel","InAFieldSet","InAFieldSetWithValidation","WithCustomIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InAFieldSet:l,InAFieldSetWithValidation:d,LongLabel:t,WithCustomIcon:o,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{q as C,l as I,t as L,o as W,d as a};
