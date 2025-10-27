import{r as p,j as e,c as h,P as s}from"./iframe-CB_MPhzc.js";const i=p.forwardRef(({children:n,className:o,...c},l)=>e.jsx("a",{...c,className:h("ams-skip-link","ams-visually-hidden",o),ref:l,children:n}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const k={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}}},t={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},a={decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(s,{style:{marginBottom:"2rem"},children:"(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)"}),e.jsx(n,{})]})]},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{style:{marginBottom:"2rem"},children:"(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)"}),e.jsx(i,{href:"#",children:"Direct naar inhoud"}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // This resets the default behaviour of only showing the link
    // on focus, in order to always show the link in Storybook
    style: {
      clip: 'initial',
      clipPath: 'initial',
      height: 'initial',
      overflow: 'initial',
      position: 'initial',
      whiteSpace: 'initial',
      width: 'initial'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...r.parameters?.docs?.source}}};const d=["Default","OnFocus","MultipleLinks"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:t,MultipleLinks:r,OnFocus:a,__namedExportsOrder:d,default:k},Symbol.toStringTag,{value:"Module"}));export{r as M,a as O,g as S};
