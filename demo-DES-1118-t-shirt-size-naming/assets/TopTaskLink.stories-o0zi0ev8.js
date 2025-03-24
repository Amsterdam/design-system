import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as r}from"./index.esm-KPjwxynK.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as h}from"./index-C0MU9AHG.js";const a=h.forwardRef(({className:i,description:m,label:k,...u},f)=>e.jsxs("a",{...u,className:g("ams-top-task-link",i),ref:f,children:[e.jsx("span",{className:"ams-top-task-link__label",children:k}),e.jsx("span",{className:"ams-visually-hidden",children:","}),e.jsx("span",{className:"ams-top-task-link__description",children:m})]}));a.displayName="TopTaskLink";try{a.displayName="TopTaskLink",a.__docgenInfo={description:"",displayName:"TopTaskLink",props:{description:{defaultValue:null,description:"The text content.",name:"description",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The title.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const b={title:"Components/Navigation/Top Task Link",component:a},n={args:{description:"Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.",href:"#",label:"Verhuizing doorgeven"},argTypes:{href:{description:"The url for the link."}}},s={args:{description:"Omschrijving",label:"Titel"},parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.jsxs(r,{children:[e.jsx(r.Cell,{span:3,children:e.jsx(a,{description:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.",href:"#",label:"Gemeentebelastingen"})}),e.jsx(r.Cell,{span:3,children:e.jsx(a,{description:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.",href:"#",label:"Parkeren + Reizen (P+R)"})}),e.jsx(r.Cell,{span:3,children:e.jsx(a,{description:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.",href:"#",label:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(r.Cell,{span:3,children:e.jsx(a,{description:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.",href:"#",label:"Onderwijs"})})]})};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    description: 'Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.',
    href: '#',
    label: 'Verhuizing doorgeven'
  },
  argTypes: {
    href: {
      description: 'The url for the link.'
    }
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    description: 'Omschrijving',
    label: 'Titel'
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  render: () => <Grid>
      <Grid.Cell span={3}>
        <TopTaskLink description="Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft." href="#" label="Gemeentebelastingen" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink description="U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad." href="#" label="Parkeren + Reizen (P+R)" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink description="Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan." href="#" label="Paspoort, ID-kaart en rijbewijs" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink description="Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas." href="#" label="Onderwijs" />
      </Grid.Cell>
    </Grid>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Default","MultipleLinks"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MultipleLinks:s,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{s as M,G as T};
