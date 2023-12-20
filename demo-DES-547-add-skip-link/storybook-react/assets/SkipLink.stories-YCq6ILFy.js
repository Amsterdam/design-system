import{r as o,j as e,p as S,G as s,P as g}from"./index.esm-HoHouYBq.js";const j={title:"Navigation/Skip Link",component:o,args:{children:"Direct naar inhoud",href:"#"},argTypes:{style:{table:{disable:!0}}},decorators:[a=>e.jsx(S,{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(a,{})})})})]},r={args:{style:{clip:"auto",clipPath:"none",height:"auto",overflow:"auto",position:"static",whiteSpace:"normal",width:"auto"}}},n={decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip link te tonen."}),e.jsx(a,{})]})]},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip links te tonen."}),e.jsx(o,{href:"#",children:"Direct naar inhoud"}),e.jsx(o,{href:"#",children:"Direct naar contactgegevens"})]})};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    style: {
      clip: 'auto',
      clipPath: 'none',
      height: 'auto',
      overflow: 'auto',
      position: 'static',
      whiteSpace: 'normal',
      width: 'auto'
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var k,u,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const x=["Default","OnFocus","MultipleLinks"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,MultipleLinks:t,OnFocus:n,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{t as M,n as O,f as S};
