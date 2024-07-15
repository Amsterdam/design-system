import{j as e}from"./jsx-runtime-BlAj40OV.js";import{a as x}from"./exampleContent-BEbrefRz.js";import{C as r}from"./Card-BK8ntILx.js";import{H as i}from"./Heading-DeQ6dQ2q.js";import{P as s}from"./Paragraph-BWS5kDPY.js";import{A as f}from"./AspectRatio-Cd0KgYDn.js";import{I as w}from"./Image-CVzrCme5.js";const C=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),y=C.format(Date.now()),t=x(),H={title:"Components/Navigation/Card",component:r,decorators:[j=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(j,{})})]},a={args:{children:[e.jsx(i,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:t.heading})},1),e.jsx(s,{children:t.description},2)]}},n={args:{children:[e.jsx(r.HeadingGroup,{tagline:"Dossier",children:e.jsx(i,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(s,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},o={args:{children:[e.jsx(f,{ratio:"wide",children:e.jsx(w,{alt:"",src:"https://picsum.photos/480/360"})},1),e.jsx(r.HeadingGroup,{tagline:"Nieuws",children:e.jsx(i,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsx(s,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},3),e.jsx(s,{size:"small",children:y},4)]}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<Heading size="level-4" key={1}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<AspectRatio key={1} ratio="wide">
        <Image alt="" src="https://picsum.photos/480/360" />
      </AspectRatio>, <Card.HeadingGroup key={2} tagline="Nieuws">
        <Heading size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={3}>
        We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
      </Paragraph>, <Paragraph key={4} size="small">
        {today}
      </Paragraph>]
  }
}`,...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const v=["Default","WithTagline","WithImage"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithImage:o,WithTagline:n,__namedExportsOrder:v,default:H},Symbol.toStringTag,{value:"Module"}));export{W as C,n as W,o as a};
