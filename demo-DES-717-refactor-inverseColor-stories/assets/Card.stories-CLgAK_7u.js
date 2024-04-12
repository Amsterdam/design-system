import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as r}from"./Card-cIfcOSre.js";import{H as o}from"./Heading-DlTzCZbz.js";import{P as i}from"./Paragraph-Im3SnT_h.js";import{A}from"./AspectRatio-BD34EPxS.js";import{I as x}from"./Image-V2IFqs5b.js";const j=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),f=j.format(Date.now()),C={title:"Components/Navigation/Card",component:r,decorators:[u=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(u,{})})]},a={args:{children:[e.jsx(o,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})},1),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},t={args:{children:[e.jsx(r.HeadingGroup,{tagline:"Dossier",children:e.jsx(o,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},n={args:{children:[e.jsx(A,{ratio:"wide",children:e.jsx(x,{alt:"",src:"https://picsum.photos/450/360"})},1),e.jsx(r.HeadingGroup,{tagline:"Dossier",children:e.jsx(o,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},2),e.jsx(i,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},3),e.jsx(i,{size:"small",children:f},4)]}};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<Heading size="level-4" key={1}>
        <Card.Link href="/">Monitor Attracties MRA</Card.Link>
      </Heading>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,h,k;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const v=["Default","WithTagline","WithImage"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithImage:n,WithTagline:t,__namedExportsOrder:v,default:C},Symbol.toStringTag,{value:"Module"}));export{R as C,t as W,n as a};
