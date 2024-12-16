import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{H as m,P as c,I as L}from"./index.esm-CEzKrmam.js";import{h as G}from"./exampleContent-hIIPvEhU.js";import{c as l}from"./clsx-B-dksMZM.js";import{r as p}from"./index-RigO-4kf.js";import{P as v}from"./Paragraph-B2U4A2CY.js";const j=p.forwardRef(({children:a,className:s,tagline:n,...o},H)=>e.jsxs("hgroup",{...o,ref:H,className:l("ams-card__heading-group",s),children:[a,e.jsx(v,{size:"small",children:n})]}));j.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const b=p.forwardRef(({children:a,className:s,...n},o)=>e.jsx("a",{...n,ref:o,className:l("ams-card__link",s),children:a}));b.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const w=p.forwardRef(({children:a,className:s,...n},o)=>e.jsx("article",{...n,ref:o,className:l("ams-card",s),children:a}));w.displayName="Card";const r=Object.assign(w,{HeadingGroup:j,Link:b});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const z=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),P=z.format(Date.now()),g=G(),I={title:"Components/Navigation/Card",component:r,decorators:[a=>e.jsx("div",{style:{maxWidth:"24rem"},children:e.jsx(a,{})})]},i={args:{children:[e.jsx(m,{className:"ams-mb--sm",size:"level-4",children:e.jsx(r.Link,{href:"/",children:g.heading})},1),e.jsx(c,{children:g.description},2)]}},t={args:{children:[e.jsx(r.HeadingGroup,{className:"ams-mb--sm",tagline:"Dossier",children:e.jsx(m,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(c,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},d={args:{children:[e.jsx(L,{alt:"",aspectRatio:"wide",className:"ams-mb--sm",src:"https://picsum.photos/480/360"},1),e.jsx(r.HeadingGroup,{className:"ams-mb--sm",tagline:"Nieuws",children:e.jsx(m,{size:"level-4",children:e.jsx(r.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsx(c,{className:"ams-mb--sm",children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},3),e.jsx(c,{size:"small",children:P},4)]}};var h,u,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Heading key={1} className="ams-mb--sm" size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(k=(u=i.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var _,y,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} className="ams-mb--sm" tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,N,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Image key={1} alt="" aspectRatio="wide" className="ams-mb--sm" src="https://picsum.photos/480/360" />, <Card.HeadingGroup key={2} className="ams-mb--sm" tagline="Nieuws">
        <Heading size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={3} className="ams-mb--sm">
        We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
      </Paragraph>, <Paragraph key={4} size="small">
        {today}
      </Paragraph>]
  }
}`,...(x=(N=d.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const R=["Default","WithTagline","WithImage"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithImage:d,WithTagline:t,__namedExportsOrder:R,default:I},Symbol.toStringTag,{value:"Module"}));export{S as C,t as W,d as a};
