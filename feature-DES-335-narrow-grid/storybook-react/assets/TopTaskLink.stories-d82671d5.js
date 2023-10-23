import{T as r,j as e,k as l,G as n}from"./index.esm-a9b442ce.js";const j={title:"Navigation/Top Task Link",component:r,args:{href:"/"}},s={decorators:[b=>e.jsx(l,{children:e.jsx(n,{span:4,children:e.jsx(b,{})})})],args:{href:"/",label:"Titel",description:"Omschrijving"}},a={args:{label:"Titel"},render:()=>e.jsxs(l,{children:[e.jsx(n,{span:4,children:e.jsx(r,{href:"/",label:"Melding openbare ruimte en overlast"})}),e.jsx(n,{span:4,children:e.jsx(r,{href:"/",label:"Verhuizing doorgeven"})}),e.jsx(n,{span:4,children:e.jsx(r,{href:"/",label:"Kennisgevingen en bekendmakingen"})})]}),parameters:{docs:{source:{type:"dynamic"}}}},i={args:{label:"Titel"},render:()=>e.jsxs(l,{children:[e.jsx(n,{span:3,children:e.jsx(r,{href:"/",label:"Stadsloket",description:"Locaties en openingstijden"})}),e.jsx(n,{span:3,children:e.jsx(r,{href:"/",label:"P+R",description:"Parkeren en reizen"})}),e.jsx(n,{span:3,children:e.jsx(r,{href:"/",label:"Documenten",description:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(n,{span:3,children:e.jsx(r,{href:"/",label:"Meldingen",description:"Melding openbare ruimte en overlast"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var o,t,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  decorators: [Story => <PageGrid>
        <GridCell span={4}>
          <Story />
        </GridCell>
      </PageGrid>],
  args: {
    href: '/',
    label: 'Titel',
    description: 'Omschrijving'
  }
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var p,c,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <PageGrid>
      <GridCell span={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </GridCell>
      <GridCell span={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </GridCell>
      <GridCell span={4}>
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
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,h,k;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <PageGrid>
      <GridCell span={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </GridCell>
      <GridCell span={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </GridCell>
      <GridCell span={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </GridCell>
      <GridCell span={3}>
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const u=["Default","WithoutDescription","WithDescription"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithDescription:i,WithoutDescription:a,__namedExportsOrder:u,default:j},Symbol.toStringTag,{value:"Module"}));export{G as T,a as W,i as a};
//# sourceMappingURL=TopTaskLink.stories-d82671d5.js.map
