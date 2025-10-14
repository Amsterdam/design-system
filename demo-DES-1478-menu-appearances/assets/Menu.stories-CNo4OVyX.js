import{r as u,j as e,c as g,f as p,O as b,Q as _,V as x,W as w,X as k}from"./iframe-C3F8ATm_.js";import{I as j}from"./Icon-BJEriGK8.js";const h=u.forwardRef(({children:n,className:a,color:s,icon:r,...d},m)=>e.jsx("li",{children:e.jsxs("a",{...d,className:g("ams-menu__link",s&&`ams-menu__link--${s}`,a),ref:m,children:[e.jsx(j,{className:"ams-menu__icon",svg:r}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const y=u.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:s,inWideWindow:r,...d},m)=>{const v=r?"div":"nav";return e.jsxs(v,{...d,"aria-labelledby":r?"primary-navigation":void 0,className:g("ams-menu",r&&"ams-menu--in-wide-window",s),ref:m,children:[r&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});y.displayName="Menu";const i=Object.assign(y,{Link:h});try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const f=[{href:"#",icon:e.jsx(b,{}),text:"Dashboard"},{href:"#",icon:e.jsx(_,{}),text:"Projecten"},{href:"#",icon:e.jsx(x,{}),text:"Rapportages"},{href:"#",icon:e.jsx(w,{}),text:"Analyses"},{href:"#",icon:e.jsx(k,{}),text:"Instellingen"}],S={title:"Components/Navigation/Menu",component:i,globals:{theme:"Compact"}};i.Link;const c={args:{children:f.map(({href:n,icon:a,text:s})=>e.jsx(i.Link,{href:n,icon:a,children:s},s)),style:{display:"block",marginInline:"initial"}},argTypes:{inWideWindow:{table:{readonly:!0}}}},W={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:p,options:[void 0,...Object.keys(p)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(i,{inWideWindow:!0,style:{display:"block",marginInline:"initial",paddingBlockStart:"var(--ams-space-m)"},children:e.jsx(n,{})})],render:({children:n,...a})=>e.jsx(i.Link,{...a,children:n})},o={...c,args:{...c.args,inWideWindow:!1},globals:{viewport:{value:"phone"}}},t={...c,args:{...c.args,inWideWindow:!0},globals:{viewport:{value:"desktop"}}},l={...W};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const N=["Default","InWideWindow","Link"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InWideWindow:t,Link:l,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{t as I,l as L,I as M};
