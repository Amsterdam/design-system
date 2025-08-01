import{r as p,j as e,c as d,P as o}from"./iframe-BYlagHNv.js";const i=p.forwardRef(({children:n,className:s,...l},c)=>e.jsx("a",{...l,className:d("ams-skip-link","ams-visually-hidden",s),ref:c,children:n}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const k={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}}},t={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},r={decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(n,{})]})]},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(i,{href:"#",children:"Direct naar inhoud"}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...a.parameters?.docs?.source}}};const h=["Default","OnFocus","MultipleLinks"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:t,MultipleLinks:a,OnFocus:r,__namedExportsOrder:h,default:k},Symbol.toStringTag,{value:"Module"}));export{a as M,r as O,g as S};
