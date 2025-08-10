import{r as l,j as e,c as u,g as x,ac as g}from"./iframe-CODresTW.js";const m=l.createContext({collapsible:!1});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const d=({children:t,className:a,collapsible:o=!1,...r})=>e.jsx(m.Provider,{value:{collapsible:o},children:e.jsx("ol",{...r,className:u("ams-status",o&&"ams-status--collapsible",a),children:t})});try{d.displayName="Status",d.__docgenInfo={description:"",displayName:"Status",props:{collapsible:{defaultValue:{value:"false"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}}}}}catch{}const p=({children:t})=>e.jsx("li",{className:"ams-status__caption",children:t});try{p.displayName="StatusCaption",p.__docgenInfo={description:"",displayName:"StatusCaption",props:{}}}catch{}const s=({title:t,children:a,expanded:o=!1,status:r="todo"})=>{const{collapsible:_}=l.useContext(m),[c,S]=l.useState(o);return e.jsxs("li",{className:u("ams-status__item",`ams-status__item--${r}`,c&&"ams-status__item--expanded"),children:[a&&_?e.jsxs("button",{className:"ams-status__button",onClick:()=>S(!c),children:[t,e.jsx(x,{className:"ams-status__icon",size:"large",svg:g})]}):e.jsx("div",{className:"ams-status__title",children:t}),e.jsx("ol",{className:"ams-status__content",children:a})]})};try{s.displayName="StatusItem",s.__docgenInfo={description:"",displayName:"StatusItem",props:{expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}},status:{defaultValue:{value:"todo"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"todo"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const n=({children:t,status:a="todo"})=>e.jsx("li",{className:u("ams-status__step",`ams-status__step--${a}`),children:t});try{n.displayName="StatusStep",n.__docgenInfo={description:"",displayName:"StatusStep",props:{status:{defaultValue:{value:"todo"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"todo"'}]}}}}}catch{}const j={title:"Components/Status",component:d,tags:["autodocs"]},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{status:"done",title:"Aanmelding gezinsbezoek",children:[e.jsx(n,{children:"Gezinsbezoek aangemeld door Justin van der Meij (Noord) op 3 januari 2025"}),e.jsx(n,{children:"notificatiebrief bijgesloten"})]}),e.jsxs(s,{expanded:!0,status:"active",title:"Plan een gezinsbezoek in",children:[e.jsx(n,{children:"Afspraak gemaakt met Politie of wijkagent"}),e.jsx(n,{children:"Gezinsbezoeker plant een gezinsbezoek in met alle partijen"})]}),e.jsx(s,{title:"Gezinsbezoek"}),e.jsx(s,{title:"Gespreksverslag",children:e.jsx(p,{children:"Uiterlijk ingevoerd op 12-12-2025"})})]}),collapsible:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <StatusItem status="done" title="Aanmelding gezinsbezoek">
          <StatusStep>Gezinsbezoek aangemeld door Justin van der Meij (Noord) op 3 januari 2025</StatusStep>
          <StatusStep>notificatiebrief bijgesloten</StatusStep>
        </StatusItem>
        <StatusItem expanded status="active" title="Plan een gezinsbezoek in">
          <StatusStep>Afspraak gemaakt met Politie of wijkagent</StatusStep>
          <StatusStep>Gezinsbezoeker plant een gezinsbezoek in met alle partijen</StatusStep>
        </StatusItem>
        <StatusItem title="Gezinsbezoek" />
        <StatusItem title="Gespreksverslag">
          <StatusCaption>Uiterlijk ingevoerd op 12-12-2025</StatusCaption>
        </StatusItem>
      </>,
    collapsible: true
  }
}`,...i.parameters?.docs?.source}}};const v=["Default"];export{i as Default,v as __namedExportsOrder,j as default};
