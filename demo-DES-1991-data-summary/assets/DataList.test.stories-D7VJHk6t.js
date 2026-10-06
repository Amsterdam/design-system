import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{J as n,U as r,j as i}from"./index.esm-CbnyQF3w.js";import{B as a,Y as o,k as s,nt as c,p as l}from"./index.esm-p4y62zyQ.js";import{n as u,t as d}from"./renderComponentVariants-D1wTquMz.js";import{c as f,d as p,l as m,u as h}from"./DataList.stories-BRINXStN.js";var g,_,v,y,b;function x(){return(x=e((()=>{c(),n(),p(),d(),f(),g=t(),_={...m,title:`Components/Containers/Data List`},v=e=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{...e}),(0,g.jsx)(`div`,{className:`ams-query-container-inline-size`,style:{inlineSize:`31.99rem`},children:(0,g.jsx)(h,{...e})}),(0,g.jsx)(`div`,{className:`ams-query-container-inline-size`,style:{inlineSize:`32rem`},children:(0,g.jsx)(h,{...e})})]}),y={args:{children:[(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Naam`}),(0,g.jsx)(h.Value,{children:`Magere Brug`})]},1),(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Bouwjaar`}),(0,g.jsx)(h.Value,{children:`1934`}),(0,g.jsx)(h.Actions,{children:(0,g.jsxs)(o,{href:`#`,icon:i,children:[`Wijzigen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` bouwjaar`})]})})]},2),(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Bijzonderheden aan de constructie van de brug`}),(0,g.jsx)(h.Value,{children:`De brug is een dubbele ophaalbrug van Azobé-hout, met twee doorvaartopeningen en een middenpijler in de Amstel.`})]},3),(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Toelichting`}),(0,g.jsx)(h.Value,{children:(0,g.jsxs)(l,{gap:`small`,children:[(0,g.jsx)(a,{children:`De brug is afgesloten voor gemotoriseerd verkeer.`}),(0,g.jsx)(s,{href:`#`,children:`Bekijk de omleidingsroute`})]})}),(0,g.jsx)(h.Actions,{children:(0,g.jsxs)(o,{href:`#`,icon:i,children:[`Wijzigen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` toelichting`})]})})]},4),(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Foto`}),(0,g.jsx)(h.Value,{children:`brug-voorzijde.jpg`}),(0,g.jsxs)(h.Actions,{children:[(0,g.jsxs)(o,{href:`#`,icon:i,children:[`Wijzigen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` foto`})]}),(0,g.jsxs)(o,{href:`#`,icon:r,children:[`Verwijderen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` foto`})]})]})]},5),(0,g.jsxs)(h.Item,{children:[(0,g.jsx)(h.Label,{children:`Telefoonnummer`}),(0,g.jsx)(h.Value,{children:`0612345678`}),(0,g.jsxs)(h.Actions,{children:[(0,g.jsxs)(o,{href:`#`,icon:i,children:[`Wijzigen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` telefoonnummer`})]}),(0,g.jsxs)(o,{href:`#`,icon:r,children:[`Verwijderen`,(0,g.jsx)(`span`,{className:`ams-visually-hidden`,children:` telefoonnummer`})]})]})]},6)]},render:(e,t)=>u(v,{args:e},t),tags:[`!dev`,`!autodocs`,`!manifest`]},b=[`Test`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: [
    // Label and value only
    <DataList.Item key={1}>
        <DataList.Label>Naam</DataList.Label>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,
    // Label, value and one action
    <DataList.Item key={2}>
        <DataList.Label>Bouwjaar</DataList.Label>
        <DataList.Value>1934</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> bouwjaar</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
    // Long label and value, which both wrap
    <DataList.Item key={3}>
        <DataList.Label>Bijzonderheden aan de constructie van de brug</DataList.Label>
        <DataList.Value>
          De brug is een dubbele ophaalbrug van Azobé-hout, met twee doorvaartopeningen en een middenpijler in de
          Amstel.
        </DataList.Value>
      </DataList.Item>,
    // Composite value
    <DataList.Item key={4}>
        <DataList.Label>Toelichting</DataList.Label>
        <DataList.Value>
          <Column gap="small">
            <Paragraph>De brug is afgesloten voor gemotoriseerd verkeer.</Paragraph>
            <Link href="#">Bekijk de omleidingsroute</Link>
          </Column>
        </DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> toelichting</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
    // Two actions
    <DataList.Item key={5}>
        <DataList.Label>Foto</DataList.Label>
        <DataList.Value>brug-voorzijde.jpg</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> foto</span>
          </StandaloneLink>
          <StandaloneLink href="#" icon={TrashBinIcon}>
            Verwijderen<span className="ams-visually-hidden"> foto</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
    // Two actions beside a value without break opportunities
    <DataList.Item key={6}>
        <DataList.Label>Telefoonnummer</DataList.Label>
        <DataList.Value>0612345678</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> telefoonnummer</span>
          </StandaloneLink>
          <StandaloneLink href="#" icon={TrashBinIcon}>
            Verwijderen<span className="ams-visually-hidden"> telefoonnummer</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>]
  },
  render: (args, context) => renderComponentVariants(DataListWithContainerQueryExamples, {
    args
  }, context),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Test,b as __namedExportsOrder,_ as default};