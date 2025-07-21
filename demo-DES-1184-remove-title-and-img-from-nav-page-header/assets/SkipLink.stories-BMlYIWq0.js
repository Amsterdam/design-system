import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as o}from"./index.esm-CsOOCRIC.js";import{c}from"./clsx-B-dksMZM.js";import{r as d}from"./index-G8LIXM5I.js";const i=d.forwardRef(({children:n,className:s,...l},p)=>e.jsx("a",{...l,className:c("ams-skip-link","ams-visually-hidden",s),ref:p,children:n}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const m={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}}},r={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},t={decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(n,{})]})]},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(i,{href:"#",children:"Direct naar inhoud"}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...a.parameters?.docs?.source}}};const k=["Default","OnFocus","MultipleLinks"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,MultipleLinks:a,OnFocus:t,__namedExportsOrder:k,default:m},Symbol.toStringTag,{value:"Module"}));export{a as M,t as O,S};
