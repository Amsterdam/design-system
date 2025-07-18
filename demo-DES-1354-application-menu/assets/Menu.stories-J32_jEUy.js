import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{m as x,n as u,o as S,p as L,q as j,r as C,I as d,s as g}from"./index.esm-BsJ9Osvl.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as h}from"./index-G8LIXM5I.js";import{I}from"./Icon-BBW_x4VP.js";const y=h.forwardRef(({children:e,className:a,color:o,icon:s,...p},k)=>r.jsx("li",{children:r.jsxs("a",{className:f("ams-menu__link",o&&`ams-menu__link--${o}`,a),ref:k,...p,children:[r.jsx(I,{className:"ams-menu__icon",svg:s??x}),e]})}));y.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"One link with a Link List.",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const v=h.forwardRef(({accessibleName:e="Hoofdnavigatie",children:a,className:o,...s},p)=>r.jsxs("nav",{"aria-labelledby":"primary-navigation",...s,className:f("ams-menu",o),ref:p,children:[r.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:e}),r.jsx("ul",{className:"ams-menu__list",children:a})]}));v.displayName="Menu";const n=Object.assign(v,{Link:y});try{n.displayName="Menu",n.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"accessibleName",required:!1,type:{name:"string"}}}}}catch{}const _=[{href:"#",icon:u,text:"Dashboard"},{href:"#",icon:S,text:"Projecten"},{href:"#",icon:L,text:"Rapportages"},{href:"#",icon:j,text:"Analyses"},{href:"#",icon:C,text:"Instellingen"}],M={title:"Components/Navigation/Menu",component:n,parameters:{themes:{themeOverride:"Compact"}}};n.Link;const b={args:{children:_.map(({href:e,icon:a,text:o},s)=>r.jsx(n.Link,{href:e,icon:a,children:o},s))}},m={args:{children:_[0].text,href:"#",icon:u},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]}},decorators:[e=>r.jsx(n,{children:r.jsx(e,{})})],render:({children:e,...a})=>r.jsx(n.Link,{...a,children:e})},t={...b},i={...m},c={...m,args:{...m.args,color:"contrast",icon:g}},l={...m,args:{...m.args,color:"inverse",icon:g}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast',
    icon: Icons.PieChartFillIcon
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
    icon: Icons.PieChartFillIcon
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","Link","ContrastColour","InverseColour"],F=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:c,Default:t,InverseColour:l,Link:i,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{c as C,l as I,i as L,F as M};
