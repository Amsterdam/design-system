import{T as r,j as e,m as a,G as i}from"./index.esm-53b69263.js";const k={title:"Navigation/Top Task Link",component:r,args:{href:"/"}},n={decorators:[C=>e.jsx(a,{children:e.jsx(i,{gridColumns:4,children:e.jsx(C,{})})})],args:{href:"/",label:"Titel",description:"Omschrijving"}},s={args:{label:"Titel"},render:()=>e.jsxs(a,{children:[e.jsx(i,{gridColumns:4,children:e.jsx(r,{href:"/",label:"Melding openbare ruimte en overlast"})}),e.jsx(i,{gridColumns:4,children:e.jsx(r,{href:"/",label:"Verhuizing doorgeven"})}),e.jsx(i,{gridColumns:4,children:e.jsx(r,{href:"/",label:"Kennisgevingen en bekendmakingen"})})]}),parameters:{docs:{source:{type:"dynamic"}}}},l={args:{label:"Titel"},render:()=>e.jsxs(a,{children:[e.jsx(i,{gridColumns:3,children:e.jsx(r,{href:"/",label:"Stadsloket",description:"Locaties en openingstijden"})}),e.jsx(i,{gridColumns:3,children:e.jsx(r,{href:"/",label:"P+R",description:"Parkeren en reizen"})}),e.jsx(i,{gridColumns:3,children:e.jsx(r,{href:"/",label:"Documenten",description:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(i,{gridColumns:3,children:e.jsx(r,{href:"/",label:"Meldingen",description:"Melding openbare ruimte en overlast"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var o,d,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  decorators: [Story => <PageGrid>
        <GridCell gridColumns={4}>
          <Story />
        </GridCell>
      </PageGrid>],
  args: {
    href: '/',
    label: 'Titel',
    description: 'Omschrijving'
  }
}`,...(t=(d=n.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var c,p,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <PageGrid>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Kennisgevingen en bekendmakingen" />
      </GridCell>
    </PageGrid>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <PageGrid>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Meldingen" description="Melding openbare ruimte en overlast" />
      </GridCell>
    </PageGrid>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const b=["Default","WithoutDescription","WithDescription"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithDescription:l,WithoutDescription:s,__namedExportsOrder:b,default:k},Symbol.toStringTag,{value:"Module"}));export{T,s as W,l as a};
//# sourceMappingURL=TopTaskLink.stories-0436d91b.js.map
