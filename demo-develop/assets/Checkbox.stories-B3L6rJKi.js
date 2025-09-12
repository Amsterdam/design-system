import{j as e,r as i,c as j,u as p,P as x,E as v,C as k}from"./iframe-DI2etB18.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const y=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("rect",{className:"ams-checkbox__rectangle",fill:"none",height:"22",stroke:"black",strokeWidth:"2",width:"22",x:"1",y:"1"}),e.jsx("rect",{className:"ams-checkbox__hover-indicator",fill:"none",height:"20",stroke:"black",strokeWidth:"1",width:"20",x:"2",y:"2"}),e.jsx("path",{className:"ams-checkbox__checked-indicator",d:"M3.251 13.017L8.554 18.761L20.749 5.239",fill:"none",stroke:"black",strokeWidth:"3"}),e.jsx("line",{className:"ams-checkbox__indeterminate-indicator",fill:"none",stroke:"black",strokeWidth:"3",x1:"4",x2:"20",y1:"12",y2:"12"})]});try{CheckboxIcon.displayName="CheckboxIcon",CheckboxIcon.__docgenInfo={description:"",displayName:"CheckboxIcon",props:{}}}catch{}const r=i.forwardRef(({children:a,className:m,icon:s=y,id:b,indeterminate:u,invalid:f,..._},C)=>{const g=b||i.useId(),n=i.useRef(null);return i.useImperativeHandle(C,()=>n.current),i.useEffect(()=>{n.current&&(n.current.indeterminate=!!u)},[n,u]),e.jsxs("div",{className:j("ams-checkbox",m),children:[e.jsx("input",{..._,"aria-invalid":f||void 0,className:"ams-checkbox__input",id:g,ref:n,type:"checkbox"}),e.jsxs("label",{className:"ams-checkbox__label",htmlFor:g,children:[e.jsx("span",{className:"ams-checkbox__icon-container",hidden:!0,children:typeof s=="function"?s():s}),a]})]})});r.displayName="Checkbox";try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{icon:{defaultValue:{value:"CheckboxIcon"},description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"Function | ReactNode"}},indeterminate:{defaultValue:null,description:"Allows being neither checked nor unchecked.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const h=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-checkbox__rectangle",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"}),e.jsx("path",{className:"ams-checkbox__checked-indicator",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"})]});try{h.displayName="CustomIcon",h.__docgenInfo={description:"",displayName:"CustomIcon",props:{}}}catch{}const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Forms/Checkbox",component:r,args:{checked:!1,children:"Checkbox label",disabled:!1,id:"",indeterminate:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},id:{description:"The id of the input element. If not provided, a unique id will be generated."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,m]=I(),s=b=>{m({checked:b.target.checked})};return e.jsx(r,{onClick:s,...a})}},t={},l={args:{children:"Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening."}},d={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(p,{"aria-labelledby":`fieldset1 description1${a?" error1":""}`,id:"fieldset1",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(x,{className:"ams-mb-s",id:"description1",children:"De laatstgenoemde melding."}),a&&e.jsx(v,{className:"ams-mb-s",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(k,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},o={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(p,{"aria-labelledby":`fieldset2 description2${a?" error2":""}`,id:"fieldset2",invalid:a,legend:"Waar gaat uw melding over?",children:[e.jsx(x,{className:"ams-mb-s",id:"description2",children:"De laatstgenoemde melding."}),a&&e.jsx(v,{className:"ams-mb-s",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(k,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},c={args:{icon:e.jsx(h,{})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <Paragraph className="ams-mb-s" id="description1">
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      <Paragraph className="ams-mb-s" id="description2">
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","LongLabel","InAFieldSet","InAFieldSetWithValidation","WithCustomIcon"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InAFieldSet:d,InAFieldSetWithValidation:o,LongLabel:l,WithCustomIcon:c,__namedExportsOrder:N,default:w},Symbol.toStringTag,{value:"Module"}));export{E as C,d as I,l as L,c as W,o as a};
