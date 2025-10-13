import{r as p,j as e,c as g,f as u,X as _,Y as b,Z as x,_ as k,O as w}from"./iframe-DG_xAW1O.js";import{I as j}from"./Icon-BCsNSuGQ.js";const h=p.forwardRef(({children:n,className:a,color:s,icon:o,...d},m)=>e.jsx("li",{children:e.jsxs("a",{...d,className:g("ams-menu__link",s&&`ams-menu__link--${s}`,a),ref:m,children:[e.jsx(j,{className:"ams-menu__icon",svg:o}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const y=p.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:s,inWideWindow:o,...d},m)=>{const v=o?"div":"nav";return e.jsxs(v,{...d,"aria-labelledby":o?"primary-navigation":void 0,className:g("ams-menu",o&&"ams-menu--in-wide-window",s),ref:m,children:[o&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});y.displayName="Menu";const r=Object.assign(y,{Link:h});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const f=[{href:"#",icon:e.jsx(_,{}),text:"Dashboard"},{href:"#",icon:e.jsx(b,{}),text:"Projecten"},{href:"#",icon:e.jsx(x,{}),text:"Rapportages"},{href:"#",icon:e.jsx(k,{}),text:"Analyses"},{href:"#",icon:e.jsx(w,{}),text:"Instellingen"}],S={title:"Components/Navigation/Menu",component:r,globals:{theme:"Compact"}};r.Link;const c={args:{children:f.map(({href:n,icon:a,text:s})=>e.jsx(r.Link,{href:n,icon:a,children:s},s)),style:{display:"block",marginInline:"initial"}},argTypes:{inWideWindow:{table:{readonly:!0}}}},N={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{display:"block",marginInline:"initial",paddingBlockStart:"var(--ams-space-m)"},children:e.jsx(n,{})})],render:({children:n,...a})=>e.jsx(r.Link,{...a,children:n})},i={...c,args:{...c.args,inWideWindow:!1},globals:{viewport:{value:"phone"}}},t={...c,args:{...c.args,inWideWindow:!0},globals:{viewport:{value:"desktop"}}},l={...N};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    inWideWindow: false
  },
  globals: {
    viewport: {
      value: 'phone'
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    inWideWindow: true
  },
  globals: {
    viewport: {
      value: 'desktop'
    }
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...l.parameters?.docs?.source}}};const W=["Default","InWideWindow","Link"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InWideWindow:t,Link:l,__namedExportsOrder:W,default:S},Symbol.toStringTag,{value:"Module"}));export{t as I,l as L,I as M};
