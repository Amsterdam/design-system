import{j as e,r as u,c as f,v as p,P as b,E as g,C as h}from"./iframe-ChiMXUta.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const j=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("circle",{className:"ams-radio__circle",cx:12,cy:12,fill:"none",r:10,stroke:"black",strokeWidth:"2px"}),e.jsx("circle",{className:"ams-radio__hover-indicator",cx:12,cy:12,fill:"none",r:9.5,stroke:"black",strokeWidth:"3px"}),e.jsx("circle",{className:"ams-radio__checked-indicator",cx:12,cy:12,r:6})]});try{RadioIcon.displayName="RadioIcon",RadioIcon.__docgenInfo={description:"",displayName:"RadioIcon",props:{}}}catch{}const r=u.forwardRef(({children:a,className:l,icon:n,id:t,invalid:v,..._},x)=>{const m=t||u.useId();return e.jsxs("div",{className:f("ams-radio",l),children:[e.jsx("input",{..._,"aria-invalid":v||void 0,className:"ams-radio__input",id:m,ref:x,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:m,children:[e.jsx("span",{className:"ams-radio__icon-container",hidden:!0,children:n??e.jsx(j,{})}),a]})]})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const c=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-radio__circle",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"}),e.jsx("path",{className:"ams-radio__checked-indicator",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"})]});try{c.displayName="CustomIcon",c.__docgenInfo={description:"",displayName:"CustomIcon",props:{}}}catch{}const{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Components/Forms/Radio",component:r,args:{checked:!1,children:"Radio label",disabled:!1,id:"",invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}},id:{description:"The id of the input element. If not provided, a unique id will be generated."},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,l]=R(),n=t=>{l({checked:t.target.checked})};return e.jsx(r,{onClick:n,...a})}},i={},s={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(p,{"aria-describedby":`description1${a?" error1":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(b,{className:"ams-mb-s",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(g,{className:"ams-mb-s",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(h,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},d={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(p,{"aria-describedby":`description2${a?" error2":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(b,{className:"ams-mb-s",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(g,{className:"ams-mb-s",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(h,{gap:"x-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},o={args:{icon:e.jsx(c,{})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      <Paragraph className="ams-mb-s" id="description1" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb-s" id="error1">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <Paragraph className="ams-mb-s" id="description2" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && <ErrorMessage className="ams-mb-s" id="error2">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>}
      <Column gap="x-small">
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...o.parameters?.docs?.source}}};const I=["Default","InAFieldSet","InAFieldSetWithValidation","WithCustomIcon"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InAFieldSet:s,InAFieldSetWithValidation:d,WithCustomIcon:o,__namedExportsOrder:I,default:y},Symbol.toStringTag,{value:"Module"}));export{s as I,w as R,o as W,d as a};
