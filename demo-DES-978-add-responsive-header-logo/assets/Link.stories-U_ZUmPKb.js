import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{P as q}from"./index.esm-BizA_qX6.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as P}from"./index-C0MU9AHG.js";const t=P.forwardRef(({children:s,className:C,color:l,variant:c="standalone",...L},I)=>i.jsx("a",{...L,className:N("ams-link",l&&`ams-link--${l}`,c==="inline"&&"ams-link--inline",c==="standalone"&&"ams-link--standalone",C),ref:I,children:s}));t.displayName="Link";try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const T={title:"Components/Navigation/Link",component:t,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},e={},r={},a={args:{children:"typograaf",variant:"inline"},decorators:[s=>i.jsxs(q,{children:["Jouw ",i.jsx(s,{})," biedt mij zulke exquise schreven!"]})]},o={args:{color:"contrast"}},n={args:{color:"inverse"}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,_,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,b,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const w=["Default","Standalone","Inline","ContrastColour","InverseColour"],J=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,Inline:a,InverseColour:n,Standalone:r,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{o as C,a as I,J as L,r as S,n as a};
