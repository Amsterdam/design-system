import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as c,P as l,I as L,C as G}from"./index.esm-BznwN7-N.js";import{i as z}from"./exampleContent-PGFPgakh.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as g}from"./index-G8LIXM5I.js";import{P}from"./Paragraph-BDLeQ91t.js";const H=g.forwardRef(({children:a,className:n,tagline:s,...o},N)=>e.jsxs("hgroup",{...o,className:p("ams-card__heading-group",n),ref:N,children:[a,e.jsx(P,{size:"small",children:s})]}));H.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const v=g.forwardRef(({children:a,className:n,...s},o)=>e.jsx("a",{...s,className:p("ams-card__link",n),ref:o,children:a}));v.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const w=g.forwardRef(({children:a,className:n,...s},o)=>e.jsx("article",{...s,className:p("ams-card",n),ref:o,children:a}));w.displayName="Card";const r=Object.assign(w,{HeadingGroup:H,Link:v});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const b=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),I=b.format(Date.now()),m=z(),R={title:"Components/Navigation/Card",component:r,decorators:[a=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(a,{})})]},i={args:{children:[e.jsx(c,{level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:m.heading})},1),e.jsx(l,{children:m.description},2)]}},t={args:{children:[e.jsx(r.HeadingGroup,{tagline:"Dossier",children:e.jsx(c,{level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(l,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},d={args:{children:[e.jsx(L,{alt:"",aspectRatio:"4:3",src:"https://picsum.photos/480/360"},1),e.jsx(r.HeadingGroup,{tagline:"Nieuws",children:e.jsx(c,{level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsxs(G,{gap:"small",children:[e.jsx(l,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."}),e.jsx(l,{size:"small",children:I})]},3)]}};var h,u,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Heading key={1} level={1} size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var C,_,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var f,x,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Image alt="" aspectRatio="4:3" key={1} src="https://picsum.photos/480/360" />, <Card.HeadingGroup key={2} tagline="Nieuws">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Column gap="small" key={3}>
        <Paragraph>
          We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
        </Paragraph>
        <Paragraph size="small">{today}</Paragraph>
      </Column>]
  }
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const T=["Default","WithTagline","WithImage"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithImage:d,WithTagline:t,__namedExportsOrder:T,default:R},Symbol.toStringTag,{value:"Module"}));export{E as C,t as W,d as a};
