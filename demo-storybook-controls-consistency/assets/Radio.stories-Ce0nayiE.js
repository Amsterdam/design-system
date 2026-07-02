import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i,f as a,m as o,u as s}from"./index.esm-CXl0WGPA.js";import{M as c,t as l}from"./src-Dk4zeSri.js";import{d as u,f as d,n as f,r as p,s as m}from"./argTypes-K2rctYNz.js";var h,g,_=t((()=>{h=n(),g=e=>(0,h.jsxs)(`svg`,{"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,h.jsx)(`path`,{className:`ams-radio__circle`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`}),(0,h.jsx)(`path`,{className:`ams-radio__checked-indicator`,d:`M 13.92 20.26 z m -0.1088 4.6456 l -2.336 -2.324 c -4.0904 -3.7048 -5.592 -5.1368 -7.1088 -6.9104 C 2.16 13.0928 1 10.7624 1 8 C 1 4.032 4.232 0.8 8.4 0.8 c 2.012 0 3.9624 0.808 5.4 4 C 15.2368 1.6088 17.1872 0.8 19.2 0.8 C 23.368 0.8 26.6 4.032 26.6 8.2 c 0 2.5624 -1.16 4.8928 -3.3672 7.472 c -1.516 1.7712 -3.0144 3.2 -7.104 6.904 z`})]})})),v=e({Default:()=>S,InAFieldSet:()=>C,InAFieldSetWithValidation:()=>w,WithCustomIcon:()=>T,__namedExportsOrder:()=>E,default:()=>x}),y,b,x,S,C,w,T,E,D=t((()=>{r(),l(),d(),_(),y=n(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:`Components/Forms/Radio`,component:c,args:{checked:!1,children:`Radio label`,disabled:!1,invalid:!1},argTypes:{checked:f,children:p(`The text for the label.`),disabled:m,icon:{control:!1},id:u,onChange:{action:`changed`,table:{disable:!1}}},render:e=>{let[,t]=b();return(0,y.jsx)(c,{onClick:e=>{t({checked:e.currentTarget.checked})},...e})}},S={},C={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,y.jsxs)(o,{"aria-describedby":`description1${e?` error1`:``}`,invalid:e,legend:`Waar gaat uw melding over?`,optional:!0,role:`radiogroup`,children:[(0,y.jsx)(i,{id:`description1`,children:`Kies de categorie die het beste past.`}),e&&(0,y.jsx)(a,{id:`error1`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,y.jsxs)(s,{gap:`x-small`,children:[(0,y.jsx)(c,{invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,y.jsx)(c,{invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,y.jsx)(c,{invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,y.jsx)(c,{invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},w={args:{invalid:!0},argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:({invalid:e})=>(0,y.jsxs)(o,{"aria-describedby":`description2${e?` error2`:``}`,"aria-required":`true`,invalid:e,legend:`Waar gaat uw melding over?`,role:`radiogroup`,children:[(0,y.jsx)(i,{id:`description2`,children:`Kies de categorie die het beste past.`}),e&&(0,y.jsx)(a,{id:`error2`,children:`Geef aan waar uw laatstgenoemde melding over gaat.`}),(0,y.jsxs)(s,{gap:`x-small`,children:[(0,y.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`horeca`,children:`Horecabedrijf`}),(0,y.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`ander_bedrijf`,children:`Ander soort bedrijf`}),(0,y.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`evenement`,children:`Evenement`}),(0,y.jsx)(c,{"aria-required":`true`,invalid:e,name:`about`,value:`anders`,children:`Iets anders`})]})]})},T={args:{icon:(0,y.jsx)(g,{})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CustomIcon />
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`InAFieldSet`,`InAFieldSetWithValidation`,`WithCustomIcon`]}));D();export{S as Default,C as InAFieldSet,w as InAFieldSetWithValidation,T as WithCustomIcon,E as __namedExportsOrder,x as default,D as n,v as t};