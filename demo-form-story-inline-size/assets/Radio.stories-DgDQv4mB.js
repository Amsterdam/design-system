import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,f as a,m as o,u as s}from"./index.esm-CGKJ42vs.js";import{F as c,t as l}from"./src-BE3mV4H6.js";import{d as u,n as d,r as f,s as p,u as m}from"./argTypes-CQXDxDHP.js";import{n as h,t as g}from"./decorators-C0fl23KJ.js";var _,v,y=e((()=>{_=n(),v=e=>(0,_.jsxs)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,_.jsx)(`path`,{className:`ams-radio__circle`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`}),(0,_.jsx)(`path`,{className:`ams-radio__checked-indicator`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`})]})})),b=t({Default:()=>w,InAFieldSet:()=>T,InAFieldSetWithValidation:()=>E,WithCustomIcon:()=>D,__namedExportsOrder:()=>O,default:()=>C}),x,S,C,w,T,E,D,O,k=e((()=>{i(),l(),u(),g(),y(),x=n(),{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:`Components/Forms/Radio`,component:c,args:{checked:!1,children:`Radio label`,disabled:!1,invalid:!1},argTypes:{checked:d,children:f(`The text for the label.`),disabled:p,icon:{control:!1},id:m,onChange:{action:`changed`,table:{disable:!1}}},decorators:[h(`7-of-12-columns`)],render:e=>{let[,t]=S();return(0,x.jsx)(c,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},w={},T={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,x.jsxs)(o,{"aria-describedby":`description1${e?` error1`:``}`,invalid:e,legend:`Waar gaat uw melding over?`,optional:!0,role:`radiogroup`,children:[(0,x.jsx)(r,{id:`description1`,children:`Kies de categorie die het beste past.`}),e&&(0,x.jsx)(a,{id:`error1`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,x.jsxs)(s,{gap:`x-small`,children:[(0,x.jsx)(c,{invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,x.jsx)(c,{invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,x.jsx)(c,{invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,x.jsx)(c,{invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},E={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,x.jsxs)(o,{"aria-describedby":`description2${e?` error2`:``}`,"aria-required":`true`,invalid:e,legend:`Waar gaat uw melding over?`,role:`radiogroup`,children:[(0,x.jsx)(r,{id:`description2`,children:`Kies de categorie die het beste past.`}),e&&(0,x.jsx)(a,{id:`error2`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,x.jsxs)(s,{gap:`x-small`,children:[(0,x.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,x.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,x.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,x.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},D={args:{icon:(0,x.jsx)(v,{})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      <Paragraph id="description1">Kies de categorie die het beste past.</Paragraph>
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
      <Paragraph id="description2">Kies de categorie die het beste past.</Paragraph>
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`InAFieldSet`,`InAFieldSetWithValidation`,`WithCustomIcon`]}));k();export{w as Default,T as InAFieldSet,E as InAFieldSetWithValidation,D as WithCustomIcon,O as __namedExportsOrder,C as default,k as n,b as t};