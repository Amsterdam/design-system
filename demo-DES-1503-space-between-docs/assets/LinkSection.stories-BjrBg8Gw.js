import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{F as r,J as i,O as a,U as o,b as s,x as c}from"./index.esm-BnpK1b4i.js";import{m as l,s as u}from"./exampleContent-up3wPRrW.js";var d,f,p=e((()=>{d=n(),f=e=>(0,d.jsx)(`div`,{...e})})),m=t({Default:()=>v,WithLinkList:()=>y,WithParagraphAndLinkList:()=>b,__namedExportsOrder:()=>x,default:()=>_}),h,g,_,v,y,b,x,S=e((()=>{i(),l(),p(),h=n(),g=u(),_={title:`Patterns/Public/Link Section`,component:f,args:{heading:`Richtlijnen vergunningverlening Koningsdag 2027`,headingLevel:2,linkHref:`#`,linkText:`Vraag een vergunning aan`,paragraph:`Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.`},argTypes:{headingLevel:{control:`inline-radio`,options:[2,3,4]}},decorators:[e=>(0,h.jsx)(s,{children:(0,h.jsx)(s.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:(0,h.jsx)(e,{})})})]},v={render:({heading:e,headingLevel:t,linkHref:n,linkText:i,paragraph:a})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{className:`ams-mb-s`,level:t,size:`level-3`,children:e}),(0,h.jsx)(r,{className:`ams-mb-s`,children:a}),(0,h.jsx)(o,{href:n,children:i})]})},y={args:{heading:`Trouwen en Partnerschap`,paragraph:``},render:({heading:e,headingLevel:t,linkHref:n,linkText:i,paragraph:o})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{className:`ams-mb-s`,level:t,size:`level-3`,children:e}),(0,h.jsx)(r,{className:`ams-mb-s`,children:o}),(0,h.jsxs)(a,{children:[(0,h.jsx)(a.Link,{href:n,children:i}),g.map(e=>(0,h.jsx)(a.Link,{href:`#`,children:e},e))]})]})},b={args:{heading:`Wie Amsterdam zegt, zegt kunst en cultuur`,paragraph:`Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon ondergaat: ook de clubscene is van culturele waarde voor de stad.`},render:({heading:e,paragraph:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{className:`ams-mb-s`,level:2,size:`level-3`,children:e}),(0,h.jsx)(r,{className:`ams-mb-s`,children:t}),(0,h.jsxs)(a,{children:[(0,h.jsx)(a.Link,{href:`#`,children:`Huisvesting voor kunst en cultuur`}),(0,h.jsx)(a.Link,{href:`#`,children:`Vrije ruimte in Amsterdam`}),(0,h.jsx)(a.Link,{href:`#`,children:`De nacht heeft de toekomst`}),(0,h.jsx)(a.Link,{href:`#`,children:`Kunstwerken in de stad`}),(0,h.jsx)(a.Link,{href:`#`,children:`Werelderfgoed`}),(0,h.jsx)(a.Link,{href:`#`,children:`Stadscuratorium`}),(0,h.jsx)(a.Link,{href:`#`,children:`EIT Culture & Creativity`})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    heading,
    headingLevel,
    linkHref,
    linkText,
    paragraph
  }: LinkSectionProps) => <>
      <Heading className="ams-mb-s" level={headingLevel} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <StandaloneLink href={linkHref}>{linkText}</StandaloneLink>
    </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Trouwen en Partnerschap',
    paragraph: ''
  },
  render: ({
    heading,
    headingLevel,
    linkHref,
    linkText,
    paragraph
  }: LinkSectionProps) => <>
      <Heading className="ams-mb-s" level={headingLevel} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <LinkList>
        <LinkList.Link href={linkHref}>{linkText}</LinkList.Link>
        {linkList.map(text => <LinkList.Link href="#" key={text}>
            {text}
          </LinkList.Link>)}
      </LinkList>
    </>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Wie Amsterdam zegt, zegt kunst en cultuur',
    paragraph: 'Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de ' + 'grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon ' + 'ondergaat: ook de clubscene is van culturele waarde voor de stad.'
  },
  render: ({
    heading,
    paragraph
  }: LinkSectionProps) => <>
      <Heading className="ams-mb-s" level={2} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <LinkList>
        <LinkList.Link href="#">Huisvesting voor kunst en cultuur</LinkList.Link>
        <LinkList.Link href="#">Vrije ruimte in Amsterdam</LinkList.Link>
        <LinkList.Link href="#">De nacht heeft de toekomst</LinkList.Link>
        <LinkList.Link href="#">Kunstwerken in de stad</LinkList.Link>
        <LinkList.Link href="#">Werelderfgoed</LinkList.Link>
        <LinkList.Link href="#">Stadscuratorium</LinkList.Link>
        <LinkList.Link href="#">EIT Culture & Creativity</LinkList.Link>
      </LinkList>
    </>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLinkList`,`WithParagraphAndLinkList`]}));S();export{v as Default,y as WithLinkList,b as WithParagraphAndLinkList,x as __namedExportsOrder,_ as default,S as n,m as t};