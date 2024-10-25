import{j as e}from"./jsx-runtime-BlAj40OV.js";import{H as l,P as c,i as G,I as v}from"./index.esm-DRzvx_01.js";import{h as z}from"./exampleContent-hIIPvEhU.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as g}from"./index-Cs7sjTYM.js";import{P}from"./Paragraph-BWS5kDPY.js";const w=g.forwardRef(({children:a,className:n,tagline:s,...i},L)=>e.jsxs("hgroup",{...i,ref:L,className:p("ams-card__heading-group",n),children:[a,e.jsx(P,{size:"small",children:s})]}));w.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const H=g.forwardRef(({children:a,className:n,...s},i)=>e.jsx("a",{...s,ref:i,className:p("ams-card__link",n),children:a}));H.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const N=g.forwardRef(({children:a,className:n,...s},i)=>e.jsx("article",{...s,ref:i,className:p("ams-card",n),children:a}));N.displayName="Card";const r=Object.assign(N,{HeadingGroup:w,Link:H});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const b=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),A=b.format(Date.now()),m=z(),R={title:"Components/Navigation/Card",component:r,decorators:[a=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(a,{})})]},o={args:{children:[e.jsx(l,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:m.heading})},1),e.jsx(c,{children:m.description},2)]}},t={args:{children:[e.jsx(r.HeadingGroup,{tagline:"Dossier",children:e.jsx(l,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(c,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},d={args:{children:[e.jsx(G,{ratio:"wide",children:e.jsx(v,{alt:"",src:"https://picsum.photos/480/360"})},1),e.jsx(r.HeadingGroup,{tagline:"Nieuws",children:e.jsx(l,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsx(c,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},3),e.jsx(c,{size:"small",children:A},4)]}};var h,u,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Heading size="level-4" key={1}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var _,y,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,x,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const I=["Default","WithTagline","WithImage"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithImage:d,WithTagline:t,__namedExportsOrder:I,default:R},Symbol.toStringTag,{value:"Module"}));export{E as C,t as W,d as a};
