import{j as e,c}from"./clsx-1e30d079.js";import{r as T}from"./index-76fb7be0.js";const a=T.forwardRef(({className:r,label:l,description:i,...b},C)=>e.jsxs("a",{...b,ref:C,className:c("amsterdam-top-task-link",r),"aria-label":`${l}${i?`, ${i}`:""}`,children:[e.jsx("span",{className:"amsterdam-top-task-link__label",children:l}),i&&e.jsx("span",{className:"amsterdam-top-task-link__description",children:i})]}));a.displayName="TopTaskLink";try{a.displayName="TopTaskLink",a.__docgenInfo={description:"",displayName:"TopTaskLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const _=r=>{if(!r)return"";if(typeof r=="number")return`amsterdam-grid-column-span-${r}`;const{start:l,span:i}=r;return c(l&&`amsterdam-grid-column-start-${l}`,i&&`amsterdam-grid-column-span-${i}`)},s=({children:r,gridColumns:l})=>e.jsx("div",{className:c("amsterdam-grid-cell",_(l)),children:r});s.displayName="GridCell";try{s.displayName="GridCell",s.__docgenInfo={description:"",displayName:"GridCell",props:{start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},span:{defaultValue:null,description:"",name:"span",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const n=({children:r})=>e.jsx("div",{className:"amsterdam-page-grid",children:r});n.displayName="PageGrid";try{n.displayName="PageGrid",n.__docgenInfo={description:"",displayName:"PageGrid",props:{}}}catch{}const y={title:"Top task link",component:a,args:{href:"/"}},t={decorators:[r=>e.jsx(n,{children:e.jsx(s,{gridColumns:4,children:e.jsx(r,{})})})],args:{href:"/",label:"Titel",description:"Omschrijving"}},o={args:{label:"Titel"},render:()=>e.jsxs(n,{children:[e.jsx(s,{gridColumns:4,children:e.jsx(a,{href:"/",label:"Melding openbare ruimte en overlast"})}),e.jsx(s,{gridColumns:4,children:e.jsx(a,{href:"/",label:"Verhuizing doorgeven"})}),e.jsx(s,{gridColumns:4,children:e.jsx(a,{href:"/",label:"Kennisgevingen en bekendmakingen"})})]}),parameters:{docs:{source:{type:"dynamic"}}}},d={args:{label:"Titel"},render:()=>e.jsxs(n,{children:[e.jsx(s,{gridColumns:3,children:e.jsx(a,{href:"/",label:"Stadsloket",description:"Locaties en openingstijden"})}),e.jsx(s,{gridColumns:3,children:e.jsx(a,{href:"/",label:"P+R",description:"Parkeren en reizen"})}),e.jsx(s,{gridColumns:3,children:e.jsx(a,{href:"/",label:"Documenten",description:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(s,{gridColumns:3,children:e.jsx(a,{href:"/",label:"Meldingen",description:"Melding openbare ruimte en overlast"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,k,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,f,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const x=["Default","WithoutDescription","WithDescription"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithDescription:d,WithoutDescription:o,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{L as T,o as W,d as a};
//# sourceMappingURL=TopTaskLink.stories-1a47f5f6.js.map
