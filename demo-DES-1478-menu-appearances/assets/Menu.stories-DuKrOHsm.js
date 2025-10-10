import{r as p,j as e,c as g,f as u,O as v,Q as b,V as _,W as x,X as w}from"./iframe-Ds8MUNER.js";import{I as k}from"./Icon-Dynj897o.js";const h=p.forwardRef(({children:n,className:a,color:s,icon:c,...d},m)=>e.jsx("li",{children:e.jsxs("a",{...d,className:g("ams-menu__link",s&&`ams-menu__link--${s}`,a),ref:m,children:[e.jsx(k,{className:"ams-menu__icon",svg:c}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const y=p.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:s,inWideWindow:c,...d},m)=>e.jsxs("nav",{...d,"aria-labelledby":"primary-navigation",className:g("ams-menu",c&&"ams-menu--in-wide-window",s),ref:m,children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]}));y.displayName="Menu";const i=Object.assign(y,{Link:h});try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const f=[{href:"#",icon:e.jsx(v,{}),text:"Dashboard"},{href:"#",icon:e.jsx(b,{}),text:"Projecten"},{href:"#",icon:e.jsx(_,{}),text:"Rapportages"},{href:"#",icon:e.jsx(x,{}),text:"Analyses"},{href:"#",icon:e.jsx(w,{}),text:"Instellingen"}],W={title:"Components/Navigation/Menu",component:i,globals:{theme:"Compact"}};i.Link;const l={args:{children:f.map(({href:n,icon:a,text:s})=>e.jsx(i.Link,{href:n,icon:a,children:s},s)),style:{display:"block",marginInline:"initial"}},argTypes:{inWideWindow:{table:{readonly:!0}}}},j={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(i,{inWideWindow:!0,style:{display:"block",marginInline:"initial",paddingBlockStart:"var(--ams-space-m)"},children:e.jsx(n,{})})],render:({children:n,...a})=>e.jsx(i.Link,{...a,children:n})},o={...l,args:{...l.args,inWideWindow:!1},globals:{viewport:{value:"phone"}}},r={...l,args:{...l.args,inWideWindow:!0},globals:{viewport:{value:"desktop"}}},t={...j};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...t.parameters?.docs?.source}}};const S=["Default","InWideWindow","Link"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InWideWindow:r,Link:t,__namedExportsOrder:S,default:W},Symbol.toStringTag,{value:"Module"}));export{r as I,t as L,M};
