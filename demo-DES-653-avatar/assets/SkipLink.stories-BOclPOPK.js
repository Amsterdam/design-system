import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as a,y as S,G as s,P as u}from"./index.esm-D-oNEv0H.js";const f={title:"Components/Navigation/Skip Link",component:a,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{table:{disable:!1}},style:{table:{disable:!0}}},decorators:[t=>e.jsx(S,{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(t,{})})})})]},n={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},i={decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(t,{})]})]},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(a,{href:"#",children:"Direct naar inhoud"}),e.jsx(a,{href:"#",children:"Direct naar contactgegevens"})]})};var o,l,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,k,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const y=["Default","OnFocus","MultipleLinks"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MultipleLinks:r,OnFocus:i,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{r as M,i as O,x as S};
