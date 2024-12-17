import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{P as g}from"./index.esm-CRlu2SWP.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as v}from"./index-RigO-4kf.js";const i=v.forwardRef(({children:n,className:u,...f},S)=>e.jsx("a",{...f,ref:S,className:y("ams-skip-link","ams-visually-hidden",u),children:n}));i.displayName="SkipLink";try{i.displayName="SkipLink",i.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const L={title:"Components/Navigation/Skip Link",component:i,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}}},r={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},t={decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(n,{})]})]},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(i,{href:"#",children:"Direct naar inhoud"}),e.jsx(i,{href:"#",children:"Direct naar contactgegevens"})]})};var o,s,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,k,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const x=["Default","OnFocus","MultipleLinks"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,MultipleLinks:a,OnFocus:t,__namedExportsOrder:x,default:L},Symbol.toStringTag,{value:"Module"}));export{a as M,t as O,z as S};
