import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{F as r,J as i,b as a,o,x as s}from"./index.esm-BnpK1b4i.js";import{n as c,t as l}from"./formatDate-BcYBnLjf.js";var u,d,f=e((()=>{u=n(),d=e=>(0,u.jsx)(`span`,{...e})})),p=t({Default:()=>g,__namedExportsOrder:()=>_,default:()=>h}),m,h,g,_,v=e((()=>{i(),c(),f(),m=n(),h={title:`Patterns/Public/Content Header`,component:d,args:{breadcrumb:`Nieuws`,date:new Date(2025,6,29),heading:`Met korting van A naar B op de deelscooter of -bakfiets`,lead:`Woont of werkt u in Amsterdam? Dan maakt u tot en met oktober met korting gebruik van deelscooters en -bakfietsen. Zo kunt u de auto laten staan en de werkzaamheden in en rond de stad vermijden.`},argTypes:{date:{control:`date`}}},g={render:({breadcrumb:e,date:t,heading:n,lead:i})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{paddingTop:`large`,children:(0,m.jsx)(a.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,m.jsxs)(o,{children:[(0,m.jsx)(o.Link,{href:`#`,children:`Home`}),(0,m.jsx)(o.Link,{href:`#`,children:e})]})})}),(0,m.jsx)(a,{as:`main`,id:`inhoud`,paddingBottom:`x-large`,children:(0,m.jsxs)(a.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,m.jsx)(s,{className:`ams-mb-s`,level:1,children:n}),(0,m.jsx)(r,{className:`ams-mb-xl`,children:l(new Date(t))}),(0,m.jsx)(r,{size:`large`,children:i})]})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    breadcrumb,
    date,
    heading,
    lead
  }: ContentHeaderProps) => <>
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">{breadcrumb}</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Heading className="ams-mb-s" level={1}>
            {heading}
          </Heading>
          <Paragraph className="ams-mb-xl">{formatDate(new Date(date))}</Paragraph>
          <Paragraph size="large">{lead}</Paragraph>
        </Grid.Cell>
      </Grid>
    </>
}`,...g.parameters?.docs?.source}}},_=[`Default`]}));v();export{g as Default,_ as __namedExportsOrder,h as default,v as n,p as t};