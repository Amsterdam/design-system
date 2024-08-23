import{j as s}from"./jsx-runtime-BlAj40OV.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as g}from"./index-Cs7sjTYM.js";const a=g.forwardRef(({children:t,className:l,fullHeight:p,maxWidth:u="wide",...h},f)=>s.jsx("div",{...h,ref:f,className:x("ams-screen",p&&"ams-screen--full-height",`ams-screen--${u}`,l),children:t}));a.displayName="Screen";try{a.displayName="Screen",a.__docgenInfo={description:"",displayName:"Screen",props:{fullHeight:{defaultValue:null,description:"Whether the screen should stretch to the full height of the viewport.",name:"fullHeight",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"wide"},description:"The maximum width of the screen.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"wide"'},{value:'"x-wide"'}]}}}}}catch{}const _={title:"Components/Layout/Screen",component:a,parameters:{layout:"fullscreen"}},e={args:{children:s.jsx("div",{className:"ams-docs-item",children:"Ik pas in het scherm."})}},r={args:{children:s.jsx("div",{className:"ams-docs-item",children:"Ik pas in een extra breed scherm."}),maxWidth:"x-wide"}};var c,i,o;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <div className="ams-docs-item">Ik pas in het scherm.</div>
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,n,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div className="ams-docs-item">Ik pas in een extra breed scherm.</div>,
    maxWidth: 'x-wide'
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const v=["Default","ExtraWide"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ExtraWide:r,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{r as E,N as S};
