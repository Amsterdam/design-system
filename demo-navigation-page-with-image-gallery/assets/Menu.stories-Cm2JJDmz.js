import{r as p,j as a,c as g,X as y,Y as x,Z as S,$ as L,a0 as j,I as u,a1 as f}from"./iframe-D-LP6vbg.js";import{I as C}from"./Icon-BNdIPR2b.js";const h=p.forwardRef(({children:e,className:n,color:r,icon:d,...m},k)=>a.jsx("li",{children:a.jsxs("a",{...m,className:g("ams-menu__link",r&&`ams-menu__link--${r}`,n),ref:k,children:[a.jsx(C,{className:"ams-menu__icon",svg:d}),e]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const _=p.forwardRef(({accessibleName:e="Hoofdnavigatie",children:n,className:r,...d},m)=>a.jsxs("nav",{...d,"aria-labelledby":"primary-navigation",className:g("ams-menu",r),ref:m,children:[a.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:e}),a.jsx("ul",{className:"ams-menu__list",children:n})]}));_.displayName="Menu";const o=Object.assign(_,{Link:h});try{o.displayName="Menu",o.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"accessibleName",required:!1,type:{name:"string"}}}}}catch{}const v=[{href:"#",icon:y,text:"Dashboard"},{href:"#",icon:x,text:"Projecten"},{href:"#",icon:S,text:"Rapportages"},{href:"#",icon:L,text:"Analyses"},{href:"#",icon:j,text:"Instellingen"}],I={title:"Components/Navigation/Menu",component:o};o.Link;const M={args:{children:v.map(({href:e,icon:n,text:r})=>a.jsx(o.Link,{href:e,icon:n,children:r},r))}},l={args:{children:v[0].text,href:"#",icon:y},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]}},decorators:[e=>a.jsx(o,{children:a.jsx(e,{})})],render:({children:e,...n})=>a.jsx(o.Link,{...n,children:e})},s={...M},t={...l},i={...l,args:{...l.args,color:"contrast",icon:f}},c={...l,args:{...l.args,color:"inverse",icon:f}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const N=["Default","Link","ContrastColour","InverseColour"],P=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:i,Default:s,InverseColour:c,Link:t,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{i as C,c as I,t as L,P as M};
