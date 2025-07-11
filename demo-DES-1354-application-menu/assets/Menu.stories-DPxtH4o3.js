import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{m as x,n as u,o as L,p as S,q as j,r as M,I as p,s as g}from"./index.esm-CiTCpp5W.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";import{I as b}from"./Icon-BBW_x4VP.js";const v=y.forwardRef(({children:e,className:a,color:o,icon:s,...d},k)=>n.jsx("li",{children:n.jsxs("a",{className:f("ams-menu__link",o&&`ams-menu__link--${o}`,a),ref:k,...d,children:[n.jsx(b,{className:"ams-menu__icon",svg:s??x}),e]})}));v.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"One link with a Link List.",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const h=y.forwardRef(({children:e,className:a,navigationLabel:o="Hoofdnavigatie",...s},d)=>n.jsxs("nav",{"aria-labelledby":"primary-navigation",...s,className:f("ams-menu",a),ref:d,children:[n.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:o}),n.jsx("ul",{className:"ams-menu__list",children:e})]}));h.displayName="Menu";const r=Object.assign(h,{Link:v});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"navigationLabel",required:!1,type:{name:"string"}}}}}catch{}const _=[{href:"#",icon:u,text:"Dashboard"},{href:"#",icon:L,text:"Projecten"},{href:"#",icon:S,text:"Rapportages"},{href:"#",icon:j,text:"Analyses"},{href:"#",icon:M,text:"Settings"}],I={title:"Components/Navigation/Menu",component:r,parameters:{themes:{themeOverride:"Compact"}}};r.Link;const C={args:{children:_.map(({href:e,icon:a,text:o},s)=>n.jsx(r.Link,{href:e,icon:a,children:o},s))}},m={args:{children:_[0].text,href:"#",icon:u},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:p,options:[void 0,...Object.keys(p)]}},decorators:[e=>n.jsx(r,{children:n.jsx(e,{})})],render:({children:e,...a})=>n.jsx(r.Link,{...a,children:e})},t={...C},i={...m},c={...m,args:{...m.args,color:"contrast",icon:g}},l={...m,args:{...m.args,color:"inverse",icon:g}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast',
    icon: Icons.BuildingFillIcon
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
    icon: Icons.BuildingFillIcon
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","Link","ContrastColour","InverseColour"],F=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:c,Default:t,InverseColour:l,Link:i,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{c as C,l as I,i as L,F as M};
