import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{m as u,n as x,o as L,p as S,q as j,I as d,r as g}from"./index.esm-C3CW_awW.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as h}from"./index-G8LIXM5I.js";import{I as C}from"./Icon-Pril9caF.js";const y=h.forwardRef(({children:e,className:n,color:a,icon:m,...p},k)=>r.jsx("li",{children:r.jsxs("a",{className:f("ams-menu__link",a&&`ams-menu__link--${a}`,n),ref:k,...p,children:[r.jsx(C,{className:"ams-menu__icon",svg:m}),e]})}));y.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"One link with a Link List.",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function"}}}}}catch{}const v=h.forwardRef(({accessibleName:e="Hoofdnavigatie",children:n,className:a,...m},p)=>r.jsxs("nav",{"aria-labelledby":"primary-navigation",...m,className:f("ams-menu",a),ref:p,children:[r.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:e}),r.jsx("ul",{className:"ams-menu__list",children:n})]}));v.displayName="Menu";const o=Object.assign(v,{Link:y});try{o.displayName="Menu",o.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"accessibleName",required:!1,type:{name:"string"}}}}}catch{}const _=[{href:"#",icon:u,text:"Dashboard"},{href:"#",icon:x,text:"Projecten"},{href:"#",icon:L,text:"Rapportages"},{href:"#",icon:S,text:"Analyses"},{href:"#",icon:j,text:"Instellingen"}],I={title:"Components/Navigation/Menu",component:o,parameters:{themes:{themeOverride:"Compact"}}};o.Link;const M={args:{children:_.map(({href:e,icon:n,text:a})=>r.jsx(o.Link,{href:e,icon:n,children:a},a))}},l={args:{children:_[0].text,href:"#",icon:u},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]}},decorators:[e=>r.jsx(o,{children:r.jsx(e,{})})],render:({children:e,...n})=>r.jsx(o.Link,{...n,children:e})},s={...M},t={...l},i={...l,args:{...l.args,color:"contrast",icon:g}},c={...l,args:{...l.args,color:"inverse",icon:g}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast',
    icon: Icons.PieChartFillIcon
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
    icon: Icons.PieChartFillIcon
  }
}`,...c.parameters?.docs?.source}}};const b=["Default","Link","ContrastColour","InverseColour"],D=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:i,Default:s,InverseColour:c,Link:t,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{i as C,c as I,t as L,D as M};
