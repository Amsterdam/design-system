import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{G as r,d as i,j as a,l as o,p as s}from"./index.esm-Cv-SSCnd.js";import{t as c,v as l}from"./src-lSYguy8w.js";var u,d,f=e((()=>{u=n(),d=e=>(0,u.jsxs)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,u.jsx)(`path`,{className:`ams-radio__circle`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`}),(0,u.jsx)(`path`,{className:`ams-radio__checked-indicator`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`})]})})),p=t({Default:()=>_,InAFieldSet:()=>v,InAFieldSetWithValidation:()=>y,WithCustomIcon:()=>b,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x,S=e((()=>{r(),c(),f(),m=n(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,g={title:`Components/Forms/Radio`,component:l,args:{checked:!1,children:`Radio label`,disabled:!1,id:``,invalid:!1},argTypes:{checked:{description:`Whether the control is checked.`},children:{description:`The text for the label.`,table:{disable:!1}},disabled:{description:`Prevents interaction. Avoid if possible.`},icon:{table:{disable:!0}},id:{description:`The id of the input element. If not provided, a unique id will be generated.`},invalid:{description:`Whether the value fails a validation rule.`},onChange:{action:`clicked`,table:{disable:!0}}},render:e=>{let[,t]=h();return(0,m.jsx)(l,{onClick:e=>{t({checked:e.target.checked})},...e})}},_={},v={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,m.jsxs)(s,{"aria-describedby":`description1${e?` error1`:``}`,invalid:e,legend:`Waar gaat uw melding over?`,optional:!0,role:`radiogroup`,children:[(0,m.jsx)(a,{id:`description1`,children:`De laatstgenoemde melding.`}),e&&(0,m.jsx)(i,{id:`error1`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,m.jsxs)(o,{gap:`x-small`,children:[(0,m.jsx)(l,{invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,m.jsx)(l,{invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,m.jsx)(l,{invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,m.jsx)(l,{invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},y={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,m.jsxs)(s,{"aria-describedby":`description2${e?` error2`:``}`,"aria-required":`true`,invalid:e,legend:`Waar gaat uw melding over?`,role:`radiogroup`,children:[(0,m.jsx)(a,{id:`description2`,children:`De laatstgenoemde melding.`}),e&&(0,m.jsx)(i,{id:`error2`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,m.jsxs)(o,{gap:`x-small`,children:[(0,m.jsx)(l,{"aria-required":`true`,invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,m.jsx)(l,{"aria-required":`true`,invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,m.jsx)(l,{"aria-required":`true`,invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,m.jsx)(l,{"aria-required":`true`,invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},b={args:{icon:(0,m.jsx)(d,{})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  }) => <FieldSet aria-describedby={\`description1\${invalid ? ' error1' : ''}\`} invalid={invalid} legend="Waar gaat uw melding over?" optional role="radiogroup">
      <Paragraph id="description1">De laatstgenoemde melding.</Paragraph>
      {invalid && <ErrorMessage id="error1">Geef aan waar uw laatstgenoemde melding over gaat.</ErrorMessage>}
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }) => <FieldSet aria-describedby={\`description2\${invalid ? ' error2' : ''}\`} aria-required="true" invalid={invalid} legend="Waar gaat uw melding over?" role="radiogroup">
      <Paragraph id="description2">De laatstgenoemde melding.</Paragraph>
      {invalid && <ErrorMessage id="error2">Geef aan waar uw laatstgenoemde melding over gaat.</ErrorMessage>}
      <Column gap="x-small">
        <Radio aria-required="true" invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio aria-required="true" invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio aria-required="true" invalid={invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio aria-required="true" invalid={invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`InAFieldSet`,`InAFieldSetWithValidation`,`WithCustomIcon`]}));S();export{_ as Default,v as InAFieldSet,y as InAFieldSetWithValidation,b as WithCustomIcon,x as __namedExportsOrder,g as default,S as n,p as t};