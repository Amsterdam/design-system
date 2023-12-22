import{r as a,j as e,p as S,G as s,P as u}from"./index.esm-HoHouYBq.js";const j={title:"Navigation/Skip Link",component:a,args:{children:"Direct naar inhoud",href:"#"},argTypes:{style:{table:{disable:!0}}},decorators:[t=>e.jsx(S,{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(t,{})})})})]},i={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},n={decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip link te tonen."}),e.jsx(t,{})]})]},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip links te tonen."}),e.jsx(a,{href:"#",children:"Direct naar inhoud"}),e.jsx(a,{href:"#",children:"Direct naar contactgegevens"})]})};var o,l,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var k,h,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const x=["Default","OnFocus","MultipleLinks"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:i,MultipleLinks:r,OnFocus:n,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{r as M,n as O,f as S};
