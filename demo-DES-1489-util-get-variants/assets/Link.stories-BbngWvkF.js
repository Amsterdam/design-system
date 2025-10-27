import{r as d,j as n,c as p,P as u}from"./iframe-BrP4o5n9.js";const s=d.forwardRef(({children:a,className:t,color:c,...i},l)=>n.jsx("a",{...i,className:p("ams-link",c&&`ams-link--${c}`,t),ref:l,children:a}));s.displayName="Link";try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}}}}}catch{}const m={title:"Components/Navigation/Link",component:s,args:{children:"typograaf",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}},decorators:[(a,{args:t})=>n.jsxs(u,{color:t.color==="inverse"?"inverse":void 0,children:["Jouw ",n.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},e={},r={args:{color:"contrast"}},o={args:{color:"inverse"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","ContrastColour","InverseColour"],v=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:e,InverseColour:o,__namedExportsOrder:f,default:m},Symbol.toStringTag,{value:"Module"}));export{r as C,o as I,s as L,v as a,m};
