import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as a,H as s,P as i,b as x,I as A}from"./index.esm-DVMGM7UP.js";const j=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),C=j.format(Date.now()),v={title:"Components/Navigation/Card",component:a,decorators:[u=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(u,{})})]},r={args:{children:[e.jsx(s,{size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})},1),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},n={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(s,{size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},t={args:{children:[e.jsx(x,{ratio:"wide",children:e.jsx(A,{alt:"",src:"https://picsum.photos/450/360"})},1),e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(s,{size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},2),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},3),e.jsx(i,{size:"small",children:C},4)]}};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<Heading size="level-4" key={1}>
        <Card.Link href="/">Monitor Attracties MRA</Card.Link>
      </Heading>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,p,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key={1} ratio="wide">
        <Image alt="" src="https://picsum.photos/450/360" />
      </AspectRatio>, <Card.HeadingGroup key={2} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={3}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>, <Paragraph key={4} size="small">
        {today}
      </Paragraph>]
  }
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const y=["Default","WithTagline","WithImage"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithImage:t,WithTagline:n,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{H as C,n as W,t as a};
