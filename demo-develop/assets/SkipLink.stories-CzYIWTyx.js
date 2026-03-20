import{r as l,j as e,c as h,P as s}from"./iframe-DC6YNrux.js";const i=l.forwardRef(({children:t,className:o,...c},p)=>e.jsx("a",{...c,className:h("ams-skip-link","ams-visually-hidden",o),ref:p,children:t}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const k={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."}}},a={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},r={decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{style:{marginBottom:"2rem"},children:"(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)"}),e.jsx(t,{})]})]},n={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{style:{marginBottom:"2rem"},children:"(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)"}),e.jsx(i,{...t}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink {...args} />
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...n.parameters?.docs?.source}}};const m=["Default","OnFocus","MultipleLinks"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,MultipleLinks:n,OnFocus:r,__namedExportsOrder:m,default:k},Symbol.toStringTag,{value:"Module"}));export{n as M,r as O,i as S,g as a,k as m};
