import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as c,P as l,I as w}from"./index.esm-CTzaYrgX.js";import{i as L}from"./exampleContent-PGFPgakh.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as p}from"./index-G8LIXM5I.js";import{P as G}from"./Paragraph-BDLeQ91t.js";const j=p.forwardRef(({children:a,className:s,tagline:n,...o},v)=>e.jsxs("hgroup",{...o,className:m("ams-card__heading-group",s),ref:v,children:[a,e.jsx(G,{size:"small",children:n})]}));j.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const b=p.forwardRef(({children:a,className:s,...n},o)=>e.jsx("a",{...n,className:m("ams-card__link",s),ref:o,children:a}));b.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const H=p.forwardRef(({children:a,className:s,...n},o)=>e.jsx("article",{...n,className:m("ams-card",s),ref:o,children:a}));H.displayName="Card";const r=Object.assign(H,{HeadingGroup:j,Link:b});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const z=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),P=z.format(Date.now()),g=L(),I={title:"Components/Navigation/Card",component:r,decorators:[a=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(a,{})})]},i={args:{children:[e.jsx(c,{className:"ams-mb-s",level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:g.heading})},1),e.jsx(l,{children:g.description},2)]}},t={args:{children:[e.jsx(r.HeadingGroup,{className:"ams-mb-s",tagline:"Dossier",children:e.jsx(c,{level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(l,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},d={args:{children:[e.jsx(w,{alt:"",aspectRatio:"4:3",className:"ams-mb-s",src:"https://picsum.photos/480/360"},1),e.jsx(r.HeadingGroup,{className:"ams-mb-s",tagline:"Nieuws",children:e.jsx(c,{level:1,size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsx(l,{className:"ams-mb-s",children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},3),e.jsx(l,{size:"small",children:P},4)]}};var h,u,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Heading className="ams-mb-s" key={1} level={1} size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var _,y,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup className="ams-mb-s" key={1} tagline="Dossier">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,N,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Image alt="" aspectRatio="4:3" className="ams-mb-s" key={1} src="https://picsum.photos/480/360" />, <Card.HeadingGroup className="ams-mb-s" key={2} tagline="Nieuws">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph className="ams-mb-s" key={3}>
        We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
      </Paragraph>, <Paragraph key={4} size="small">
        {today}
      </Paragraph>]
  }
}`,...(x=(N=d.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const R=["Default","WithTagline","WithImage"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithImage:d,WithTagline:t,__namedExportsOrder:R,default:I},Symbol.toStringTag,{value:"Module"}));export{S as C,t as W,d as a};
