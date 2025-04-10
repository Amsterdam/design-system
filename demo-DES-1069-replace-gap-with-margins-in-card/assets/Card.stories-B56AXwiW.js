import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as l,C as V,G as d,H as u}from"./index.esm-oi7XrGZv.js";import{i as D}from"./exampleContent-PGFPgakh.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as g}from"./index-G8LIXM5I.js";import{H as M}from"./Heading-BfwCY41a.js";import{P as S}from"./Paragraph-BDLeQ91t.js";import{I as A}from"./Image-DmErqfsw.js";const P=g.forwardRef(({children:r,className:n,level:i=1,size:s="level-4",...h},T)=>e.jsx(M,{...h,className:m("ams-card__heading",n),level:i,ref:T,size:s,children:r}));P.displayName="Card.Heading";try{Card.Heading.displayName="Card.Heading",Card.Heading.__docgenInfo={description:"",displayName:"Card.Heading",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},level:{defaultValue:{value:"1"},description:"The hierarchical level within the document.",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},size:{defaultValue:{value:"level-4"},description:"Uses larger or smaller text without changing its position in the heading hierarchy.",name:"size",required:!1,type:{name:"enum",value:[{value:'"level-1"'},{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'}]}}}}}catch{}const L=g.forwardRef(({children:r,className:n,tagline:i,...s},h)=>e.jsxs("hgroup",{...s,className:m("ams-card__heading-group",n),ref:h,children:[r,e.jsx(S,{size:"small",children:i})]}));L.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const N=g.forwardRef(({children:r,className:n,...i},s)=>e.jsx(A,{...i,className:m("ams-card__image",n),ref:s,children:r}));N.displayName="Card.Image";try{Card.Image.displayName="Card.Image",Card.Image.__docgenInfo={description:"",displayName:"Card.Image",props:{alt:{defaultValue:null,description:"A textual description of the content of the image.",name:"alt",required:!1,type:{name:"string"}},aspectRatio:{defaultValue:null,description:"The aspect ratio to display media content in.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"9:16"'},{value:'"3:4"'},{value:'"1:1"'},{value:'"4:3"'},{value:'"16:9"'},{value:'"16:5"'}]}}}}}catch{}const I=g.forwardRef(({children:r,className:n,...i},s)=>e.jsx("a",{...i,className:m("ams-card__link",n),ref:s,children:r}));I.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const R=g.forwardRef(({children:r,className:n,...i},s)=>e.jsx("article",{...i,className:m("ams-card",n),ref:s,children:r}));R.displayName="Card";const a=Object.assign(R,{Heading:P,HeadingGroup:L,Image:N,Link:I});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const O=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),W=O.format(Date.now()),k=D(),q={title:"Components/Navigation/Card",component:a,args:{style:{maxWidth:"24rem"}},argTypes:{style:{table:{disable:!0}}}},o={args:{children:[e.jsx(a.Heading,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:k.heading})},1),e.jsx(l,{children:k.description},2)]}},t={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(a.Heading,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(l,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},c={args:{children:[e.jsx(a.Image,{alt:"",aspectRatio:"4:3",src:"https://picsum.photos/480/360"},1),e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(a.Heading,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsxs(V,{gap:"small",children:[e.jsx(l,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."}),e.jsx(l,{size:"small",children:W})]},3)]}},p={args:{style:void 0},parameters:{layout:"fullscreen"},render:()=>e.jsxs(d,{paddingVertical:"medium",children:[e.jsx(d.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(u,{level:2,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Gemeentebelastingen"})}),e.jsx(l,{size:"small",children:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."})]})}),e.jsx(d.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(u,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Parkeren + Reizen (P+R)"})}),e.jsx(l,{size:"small",children:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."})]})}),e.jsx(d.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(u,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(l,{size:"small",children:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."})]})}),e.jsx(d.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(u,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Onderwijs"})}),e.jsx(l,{size:"small",children:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."})]})})]})};var C,v,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={1} size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,y,_;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={1} size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var w,x,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Card.Image alt="" aspectRatio="4:3" key={1} src="https://picsum.photos/480/360" />, <Card.HeadingGroup key={2} tagline="Nieuws">
        <Card.Heading level={1} size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Column gap="small" key={3}>
        <Paragraph>
          We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
        </Paragraph>
        <Paragraph size="small">{today}</Paragraph>
      </Column>]
  }
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var H,b,G;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    style: undefined
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Grid paddingVertical="medium">
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={2} size="level-4">
            <Card.Link href="#">Gemeentebelastingen</Card.Link>
          </Heading>
          <Paragraph size="small">
            Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
          </Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={3} size="level-4">
            <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
          </Heading>
          <Paragraph size="small">
            U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.
          </Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={3} size="level-4">
            <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
          </Heading>
          <Paragraph size="small">Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={3} size="level-4">
            <Card.Link href="#">Onderwijs</Card.Link>
          </Heading>
          <Paragraph size="small">
            Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
          </Paragraph>
        </Card>
      </Grid.Cell>
    </Grid>
}`,...(G=(b=p.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};const B=["Default","WithTagline","WithImage","TopTasks"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TopTasks:p,WithImage:c,WithTagline:t,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{X as C,p as T,t as W,c as a};
