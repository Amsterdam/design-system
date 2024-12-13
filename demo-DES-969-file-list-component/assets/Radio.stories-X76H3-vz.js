import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{F as N,P as C,E as w,C as S}from"./index.esm-Dojcg4AG.js";import{c as A}from"./clsx-B-dksMZM.js";import{r as u}from"./index-B-o1Wr-g.js";const W=a=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",...a,children:[e.jsx("circle",{cx:12,cy:12,r:10,className:"ams-radio__circle"}),e.jsx("circle",{cx:12,cy:12,r:9.5,className:"ams-radio__hover-indicator"}),e.jsx("circle",{cx:12,cy:12,r:6,className:"ams-radio__checked-indicator"})]});try{RadioIcon.displayName="RadioIcon",RadioIcon.__docgenInfo={description:"",displayName:"RadioIcon",props:{}}}catch{}const r=u.forwardRef(({children:a,className:l,icon:n,invalid:t,...E},k)=>{const m=u.useId();return e.jsxs("div",{className:A("ams-radio",l),children:[e.jsx("input",{...E,"aria-invalid":t||void 0,className:"ams-radio__input",id:m,ref:k,type:"radio"}),e.jsxs("label",{className:"ams-radio__label",htmlFor:m,children:[e.jsx("span",{className:"ams-radio__icon-container",children:n??e.jsx(W,{})}),a]})]})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const c=a=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false",...a,children:[e.jsx("path",{className:"ams-radio__circle",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"}),e.jsx("path",{className:"ams-radio__checked-indicator",d:"M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z"})]});try{c.displayName="CustomIcon",c.__docgenInfo={description:"",displayName:"CustomIcon",props:{}}}catch{}const{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"Components/Forms/Radio",component:r,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{checked:{description:"Whether the control is checked."},children:{description:"The text for the label.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}},invalid:{description:"Whether the value fails a validation rule."},onChange:{action:"clicked",table:{disable:!0}}},render:a=>{const[,l]=F(),n=t=>{l({checked:t.target.checked})};return e.jsx(r,{onClick:n,...a})}},s={},i={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(N,{"aria-describedby":`description1${a?" error1":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(C,{className:"ams-mb--sm",id:"description1",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(w,{className:"ams-mb--sm",id:"error1",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(S,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},d={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:a})=>e.jsxs(N,{"aria-describedby":`description2${a?" error2":""}`,invalid:a,legend:"Waar gaat uw melding over?",role:"radiogroup",children:[e.jsx(C,{className:"ams-mb--sm",id:"description2",size:"small",children:"De laatstgenoemde melding."}),a&&e.jsx(w,{className:"ams-mb--sm",id:"error2",children:"Geef aan waar uw laatstgenoemde melding over gaat."}),e.jsxs(S,{gap:"extra-small",children:[e.jsx(r,{invalid:a,name:"about",value:"horeca",children:"Horecabedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"ander_bedrijf",children:"Ander soort bedrijf"}),e.jsx(r,{invalid:a,name:"about",value:"evenement",children:"Evenement"}),e.jsx(r,{invalid:a,name:"about",value:"anders",children:"Iets anders"})]})]})},o={args:{icon:e.jsx(c,{})}};var p,b,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,v,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var f,x,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var R,y,I;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const z=["Default","InAFieldSet","InAFieldSetWithValidation","WithCustomIcon"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:s,InAFieldSet:i,InAFieldSetWithValidation:d,WithCustomIcon:o,__namedExportsOrder:z,default:P},Symbol.toStringTag,{value:"Module"}));export{i as I,V as R,o as W,d as a};
