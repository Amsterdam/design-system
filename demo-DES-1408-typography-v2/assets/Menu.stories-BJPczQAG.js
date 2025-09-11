import{r as p,j as e,c as g,I as u,X as y,Y as j,Z as k,$ as S,a0 as L,a1 as f}from"./iframe-BNwChWOI.js";import{I as C}from"./Icon-BEFw_2CH.js";const h=p.forwardRef(({children:a,className:n,color:r,icon:d,...m},v)=>e.jsx("li",{children:e.jsxs("a",{...m,className:g("ams-menu__link",r&&`ams-menu__link--${r}`,n),ref:v,children:[e.jsx(C,{className:"ams-menu__icon",svg:d}),a]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const x=p.forwardRef(({accessibleName:a="Hoofdnavigatie",children:n,className:r,...d},m)=>e.jsxs("nav",{...d,"aria-labelledby":"primary-navigation",className:g("ams-menu",r),ref:m,children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:a}),e.jsx("ul",{className:"ams-menu__list",children:n})]}));x.displayName="Menu";const o=Object.assign(x,{Link:h});try{o.displayName="Menu",o.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"accessibleName",required:!1,type:{name:"string"}}}}}catch{}const _=[{href:"#",icon:e.jsx(y,{}),text:"Dashboard"},{href:"#",icon:e.jsx(j,{}),text:"Projecten"},{href:"#",icon:e.jsx(k,{}),text:"Rapportages"},{href:"#",icon:e.jsx(S,{}),text:"Analyses"},{href:"#",icon:e.jsx(L,{}),text:"Instellingen"}],M={title:"Components/Navigation/Menu",component:o};o.Link;const N={args:{children:_.map(({href:a,icon:n,text:r})=>e.jsx(o.Link,{href:a,icon:n,children:r},r))}},l={args:{children:_[0].text,href:"#",icon:e.jsx(y,{})},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]}},decorators:[a=>e.jsx(o,{children:e.jsx(a,{})})],render:({children:a,...n})=>e.jsx(o.Link,{...n,children:a})},s={...N},t={...l},i={...l,args:{...l.args,color:"contrast",icon:e.jsx(f,{})}},c={...l,args:{...l.args,color:"inverse",icon:e.jsx(f,{})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast',
    icon: <PieChartFillIcon />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
    icon: <PieChartFillIcon />
  }
}`,...c.parameters?.docs?.source}}};const b=["Default","Link","ContrastColour","InverseColour"],P=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:i,Default:s,InverseColour:c,Link:t,__namedExportsOrder:b,default:M},Symbol.toStringTag,{value:"Module"}));export{i as C,c as I,t as L,P as M};
