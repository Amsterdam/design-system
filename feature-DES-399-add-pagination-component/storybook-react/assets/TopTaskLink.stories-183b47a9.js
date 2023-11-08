import{T as n,j as e,G as r}from"./index.esm-9295b68c.js";const b={title:"Navigation/Top Task Link",component:n,args:{href:"/"}},s={decorators:[k=>e.jsx(r,{children:e.jsx(r.Cell,{span:4,children:e.jsx(k,{})})})],args:{href:"/",label:"Titel",description:"Omschrijving"}},i={args:{label:"Titel"},render:()=>e.jsxs(r,{children:[e.jsx(r.Cell,{span:4,children:e.jsx(n,{href:"/",label:"Melding openbare ruimte en overlast"})}),e.jsx(r.Cell,{span:4,children:e.jsx(n,{href:"/",label:"Verhuizing doorgeven"})}),e.jsx(r.Cell,{span:4,children:e.jsx(n,{href:"/",label:"Kennisgevingen en bekendmakingen"})})]}),parameters:{docs:{source:{type:"dynamic"}}}},a={args:{label:"Titel"},render:()=>e.jsxs(r,{children:[e.jsx(r.Cell,{span:3,children:e.jsx(n,{href:"/",label:"Stadsloket",description:"Locaties en openingstijden"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{href:"/",label:"P+R",description:"Parkeren en reizen"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{href:"/",label:"Documenten",description:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{href:"/",label:"Meldingen",description:"Melding openbare ruimte en overlast"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var l,o,t;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [Story => <Grid>
        <Grid.Cell span={4}>
          <Story />
        </Grid.Cell>
      </Grid>],
  args: {
    href: '/',
    label: 'Titel',
    description: 'Omschrijving'
  }
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <Grid>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </Grid.Cell>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </Grid.Cell>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Kennisgevingen en bekendmakingen" />
      </Grid.Cell>
    </Grid>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Titel'
  },
  render: () => <Grid>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Meldingen" description="Melding openbare ruimte en overlast" />
      </Grid.Cell>
    </Grid>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const j=["Default","WithoutDescription","WithDescription"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithDescription:a,WithoutDescription:i,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{T,i as W,a};
//# sourceMappingURL=TopTaskLink.stories-183b47a9.js.map
