import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{G as d,j as S}from"./index.esm-j6sYkVOr.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";import{c as _}from"./exampleContent-r-zRGsZY.js";const x=["azure","green","lime","magenta","orange","yellow"],i=y.forwardRef(({as:p="div",children:e,className:g,color:u,...v},f)=>r.jsx(p,{...v,className:h("ams-spotlight",u&&`ams-spotlight--${u}`,g),ref:f,children:e}));i.displayName="Spotlight";try{i.displayName="Spotlight",i.__docgenInfo={description:"",displayName:"Spotlight",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'}]}},color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}}}}}catch{}const j=_(),z={title:"Components/Containers/Spotlight",component:i,argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...x]}},render:({as:p,color:e})=>r.jsx(i,{as:p,color:e,children:r.jsx(d,{paddingVertical:"x-large",children:r.jsx(d.Cell,{span:"all",children:r.jsx(S,{color:!e||["azure","green","magenta"].includes(e)?"inverse":void 0,children:j})})})})},a={},o={args:{color:"azure"}},s={args:{color:"green"}},t={args:{color:"lime"}},n={args:{color:"magenta"}},c={args:{color:"orange"}},l={args:{color:"yellow"}},m={args:{as:"section"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'azure'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'lime'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'magenta'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'orange'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'yellow'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'section'
  }
}`,...m.parameters?.docs?.source}}};const w=["Default","Azure","Green","Lime","Magenta","Orange","Yellow","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Azure:o,Default:a,Green:s,ImproveSemantics:m,Lime:t,Magenta:n,Orange:c,Yellow:l,__namedExportsOrder:w,default:z},Symbol.toStringTag,{value:"Module"}));export{o as A,s as G,m as I,t as L,n as M,c as O,q as S,l as Y};
