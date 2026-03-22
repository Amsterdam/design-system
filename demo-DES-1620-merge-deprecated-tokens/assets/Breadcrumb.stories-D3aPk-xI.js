import{r as d,j as e,c as l}from"./iframe-Dhaogc1m.js";const m=d.forwardRef(({children:a,className:s,...c},i)=>e.jsx("li",{className:"ams-breadcrumb__item",children:e.jsx("a",{...c,className:l("ams-breadcrumb__link",s),ref:i,children:a})}));m.displayName="Breadcrumb.Link";try{Breadcrumb.Link.displayName="Breadcrumb.Link",Breadcrumb.Link.__docgenInfo={description:"",displayName:"Breadcrumb.Link",props:{}}}catch{}const o=d.forwardRef(({accessibleName:a,accessibleNameId:s,children:c,className:i,...u},b)=>{const p=d.useId(),t=s||p;return e.jsxs("nav",{...u,"aria-labelledby":t,className:l("ams-breadcrumb",i),ref:b,children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:t,children:a||"Kruimelpad"}),e.jsx("ol",{className:"ams-breadcrumb__list",children:c})]})});o.displayName="Breadcrumb";const r=Object.assign(o,{Link:m});try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",props:{accessibleName:{defaultValue:null,description:"The accessible name for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameId:{defaultValue:null,description:`Connects the component with an internal element that defines its accessible name.
Note: must be unique for the page.`,name:"accessibleNameId",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Components/Navigation/Breadcrumb",component:r},n={args:{children:[e.jsx(r.Link,{href:"#",children:"Afval"},1),e.jsx(r.Link,{href:"#",children:"Bedrijfsafval"},2),e.jsx(r.Link,{href:"#",children:"Recyclepunten voor bedrijven"},3)]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Breadcrumb.Link href="#" key={1}>
        Afval
      </Breadcrumb.Link>, <Breadcrumb.Link href="#" key={2}>
        Bedrijfsafval
      </Breadcrumb.Link>, <Breadcrumb.Link href="#" key={3}>
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>]
  }
}`,...n.parameters?.docs?.source}}};const _=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{r as B,B as a,f as m};
