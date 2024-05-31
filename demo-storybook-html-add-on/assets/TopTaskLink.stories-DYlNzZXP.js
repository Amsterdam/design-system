import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as h}from"./index-BwDkhjyp.js";import{V as b}from"./VisuallyHidden-Db-04MJ9.js";import{G as r}from"./Grid-6_3k5u6-.js";const n=h.forwardRef(({className:i,label:m,description:k,...u},f)=>e.jsxs("a",{...u,ref:f,className:g("ams-top-task-link",i),children:[e.jsx("span",{className:"ams-top-task-link__label",children:m}),e.jsx(b,{children:","}),e.jsx("span",{className:"ams-top-task-link__description",children:k})]}));n.displayName="TopTaskLink";try{n.displayName="TopTaskLink",n.__docgenInfo={description:"",displayName:"TopTaskLink",props:{label:{defaultValue:null,description:"The title.",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The text content.",name:"description",required:!0,type:{name:"string"}}}}}catch{}const j={title:"Components/Navigation/Top Task Link",component:n},a={args:{description:"Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.",href:"#",label:"Verhuizing doorgeven"},argTypes:{href:{description:"The url for the link."}}},s={args:{description:"Omschrijving",label:"Titel"},render:()=>e.jsxs(r,{children:[e.jsx(r.Cell,{span:3,children:e.jsx(n,{description:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.",href:"#",label:"Gemeentebelastingen"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{description:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.",href:"#",label:"Parkeren + Reizen (P+R)"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{description:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.",href:"#",label:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(r.Cell,{span:3,children:e.jsx(n,{description:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.",href:"#",label:"Onderwijs"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var o,t,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    description: 'Omschrijving',
    label: 'Titel'
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
    </Grid>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const T=["Default","Multiple"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Multiple:s,__namedExportsOrder:T,default:j},Symbol.toStringTag,{value:"Module"}));export{s as M,y as T};