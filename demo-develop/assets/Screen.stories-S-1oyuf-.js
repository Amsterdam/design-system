import{j as s}from"./jsx-runtime-BlAj40OV.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as g}from"./index-Cs7sjTYM.js";const r=g.forwardRef(({children:t,className:p,fullHeight:l,maxWidth:h="wide",...u},x)=>s.jsx("div",{...u,ref:x,className:f("ams-screen",l&&"ams-screen--full-height",`ams-screen--${h}`,p),children:t}));r.displayName="Screen";try{r.displayName="Screen",r.__docgenInfo={description:"",displayName:"Screen",props:{fullHeight:{defaultValue:null,description:"Whether the screen should stretch to the full height of the viewport.",name:"fullHeight",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"wide"},description:"The maximum width of the screen.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"wide"'},{value:'"x-wide"'}]}}}}}catch{}const _={title:"Components/Layout/Screen",component:r,parameters:{layout:"fullscreen"}},e={args:{children:s.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Ik pas in het scherm."})}},a={args:{children:s.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Ik pas in een extra breed scherm."}),maxWidth:"x-wide"}};var o,c,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Ik pas in het scherm.</p>
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Ik pas in een extra breed scherm.</p>,
    maxWidth: 'x-wide'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Default","ExtraWide"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ExtraWide:a,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{a as E,k as S};
