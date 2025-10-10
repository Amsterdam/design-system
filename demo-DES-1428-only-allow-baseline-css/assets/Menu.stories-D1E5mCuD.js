import{r as p,j as e,c as g,f as u,O as y,Q as j,V as k,W as S,X as L,Y as f}from"./iframe-C2k6py1P.js";import{I as M}from"./Icon-YsqzlO6a.js";const h=p.forwardRef(({children:a,className:n,color:r,icon:d,...m},v)=>e.jsx("li",{children:e.jsxs("a",{...m,className:g("ams-menu__link",r&&`ams-menu__link--${r}`,n),ref:v,children:[e.jsx(M,{className:"ams-menu__icon",svg:d}),a]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const x=p.forwardRef(({accessibleName:a="Hoofdnavigatie",children:n,className:r,...d},m)=>e.jsxs("nav",{...d,"aria-labelledby":"primary-navigation",className:g("ams-menu",r),ref:m,children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:a}),e.jsx("ul",{className:"ams-menu__list",children:n})]}));x.displayName="Menu";const s=Object.assign(x,{Link:h});try{s.displayName="Menu",s.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"accessibleName",required:!1,type:{name:"string"}}}}}catch{}const _=[{href:"#",icon:e.jsx(y,{}),text:"Dashboard"},{href:"#",icon:e.jsx(j,{}),text:"Projecten"},{href:"#",icon:e.jsx(k,{}),text:"Rapportages"},{href:"#",icon:e.jsx(S,{}),text:"Analyses"},{href:"#",icon:e.jsx(L,{}),text:"Instellingen"}],N={title:"Components/Navigation/Menu",component:s};s.Link;const b={args:{children:_.map(({href:a,icon:n,text:r})=>e.jsx(s.Link,{href:a,icon:n,children:r},r))}},l={args:{children:_[0].text,href:"#",icon:e.jsx(y,{})},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]}},decorators:[a=>e.jsx(s,{children:e.jsx(a,{})})],render:({children:a,...n})=>e.jsx(s.Link,{...n,children:a})},o={...b},t={...l},i={...l,args:{...l.args,color:"contrast",icon:e.jsx(f,{})}},c={...l,args:{...l.args,color:"inverse",icon:e.jsx(f,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const C=["Default","Link","ContrastColour","InverseColour"],O=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:i,Default:o,InverseColour:c,Link:t,__namedExportsOrder:C,default:N},Symbol.toStringTag,{value:"Module"}));export{i as C,c as I,t as L,O as M};
