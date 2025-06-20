import{r as y,j as e,c as v,P as g}from"./iframe-C5QqADL7.js";const i=y.forwardRef(({children:n,className:u,...S},f)=>e.jsx("a",{...S,className:v("ams-skip-link","ams-visually-hidden",u),ref:f,children:n}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const L={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}}},t={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},r={decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(n,{})]})]},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(i,{href:"#",children:"Direct naar inhoud"}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var k,h,m;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const x=["Default","OnFocus","MultipleLinks"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:t,MultipleLinks:a,OnFocus:r,__namedExportsOrder:x,default:L},Symbol.toStringTag,{value:"Module"}));export{a as M,r as O,b as S};
