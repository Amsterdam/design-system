import{j as e,c as p}from"./clsx-1e30d079.js";import{r as u}from"./index-76fb7be0.js";const _=r=>{if(!r)return"";if(typeof r=="number")return`amsterdam-grid-column-span-${r}`;const{start:i,span:a}=r;return p(i&&`amsterdam-grid-column-start-${i}`,a&&`amsterdam-grid-column-span-${a}`)},s=u.forwardRef(({children:r,gridColumns:i,className:a,...t},m)=>e.jsx("div",{...t,ref:m,className:p("amsterdam-grid-cell",_(i),a),children:r}));s.displayName="GridCell";try{s.displayName="GridCell",s.__docgenInfo={description:"",displayName:"GridCell",props:{start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},span:{defaultValue:null,description:"",name:"span",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}}}}}catch{}const n=u.forwardRef(({children:r,className:i,...a},t)=>e.jsx("div",{...a,ref:t,className:p("amsterdam-page-grid",i),children:r}));n.displayName="PageGrid";try{n.displayName="PageGrid",n.__docgenInfo={description:"",displayName:"PageGrid",props:{}}}catch{}const l=u.forwardRef(({className:r,label:i,description:a,...t},m)=>e.jsxs("a",{...t,ref:m,className:p("amsterdam-top-task-link",r),"aria-label":`${i}${a?`, ${a}`:""}`,children:[e.jsx("span",{className:"amsterdam-top-task-link__label",children:i}),a&&e.jsx("span",{className:"amsterdam-top-task-link__description",children:a})]}));l.displayName="TopTaskLink";try{l.displayName="TopTaskLink",l.__docgenInfo={description:"",displayName:"TopTaskLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Top task link",component:l,args:{href:"/"}},o={decorators:[r=>e.jsx(n,{children:e.jsx(s,{gridColumns:4,children:e.jsx(r,{})})})],args:{href:"/",label:"Titel",description:"Omschrijving"}},d={args:{label:"Titel"},render:()=>e.jsxs(n,{children:[e.jsx(s,{gridColumns:4,children:e.jsx(l,{href:"/",label:"Melding openbare ruimte en overlast"})}),e.jsx(s,{gridColumns:4,children:e.jsx(l,{href:"/",label:"Verhuizing doorgeven"})}),e.jsx(s,{gridColumns:4,children:e.jsx(l,{href:"/",label:"Kennisgevingen en bekendmakingen"})})]}),parameters:{docs:{source:{type:"dynamic"}}}},c={args:{label:"Titel"},render:()=>e.jsxs(n,{children:[e.jsx(s,{gridColumns:3,children:e.jsx(l,{href:"/",label:"Stadsloket",description:"Locaties en openingstijden"})}),e.jsx(s,{gridColumns:3,children:e.jsx(l,{href:"/",label:"P+R",description:"Parkeren en reizen"})}),e.jsx(s,{gridColumns:3,children:e.jsx(l,{href:"/",label:"Documenten",description:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(s,{gridColumns:3,children:e.jsx(l,{href:"/",label:"Meldingen",description:"Melding openbare ruimte en overlast"})})]}),parameters:{docs:{source:{type:"dynamic"}}}};var g,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var h,v,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,C,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const x=["Default","WithoutDescription","WithDescription"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithDescription:c,WithoutDescription:d,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{L as T,d as W,c as a};
//# sourceMappingURL=TopTaskLink.stories-4cb742d7.js.map
