import{j as a}from"./jsx-runtime-BlAj40OV.js";import{P as D}from"./index.esm-BlOReKcg.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as N}from"./index-Cs7sjTYM.js";const i=N.forwardRef(({children:e,variant:d="standalone",onBackground:l,className:B,...L},q)=>a.jsx("a",{...L,ref:q,className:E("ams-link",{"ams-link--standalone":d==="standalone","ams-link--inline":d==="inline","ams-link--on-background-light":l==="light","ams-link--on-background-dark":l==="dark"},B),children:e}));i.displayName="Link";try{i.displayName="Link",i.__docgenInfo={description:"",displayName:"Link",props:{onBackground:{defaultValue:null,description:"Describes the underlying background colour. Allows the text to provide visual contrast.",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const P={title:"Components/Navigation/Link",component:i,args:{children:"Link label",href:"#",onBackground:void 0},argTypes:{children:{description:"The link text.",table:{disable:!1}},onBackground:{control:{type:"radio",labels:{undefined:"default",light:"light",dark:"dark"}},options:[void 0,"light","dark"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},r={},n={},o={args:{children:"typograaf",variant:"inline"},decorators:[e=>a.jsxs(D,{children:["Jouw ",a.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},s={args:{onBackground:"dark"},decorators:[e=>a.jsx("div",{style:{background:"#004699",display:"inline",padding:"1rem"},children:a.jsx(e,{})})]},t={args:{onBackground:"light"},decorators:[e=>a.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"1rem"},children:a.jsx(e,{})})]};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,m,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(k=(m=n.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    onBackground: 'dark'
  },
  decorators: [Story => <div style={{
    background: '#004699',
    display: 'inline',
    padding: '1rem'
  }}>
        <Story />
      </div>]
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,_,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    onBackground: 'light'
  },
  decorators: [Story => <div style={{
    background: '#FFE600',
    display: 'inline',
    padding: '1rem'
  }}>
        <Story />
      </div>]
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const w=["Default","Standalone","Inline","onDarkBackground","onLightBackground"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Inline:o,Standalone:n,__namedExportsOrder:w,default:P,onDarkBackground:s,onLightBackground:t},Symbol.toStringTag,{value:"Module"}));export{o as I,O as L,n as S,t as a,s as o};
