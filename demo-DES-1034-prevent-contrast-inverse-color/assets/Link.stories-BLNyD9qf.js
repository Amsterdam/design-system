import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{P as q}from"./index.esm-D2NPYwCl.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as P}from"./index-D7uoVdV3.js";const t=P.forwardRef(({children:n,className:j,color:l,variant:c="standalone",...L},I)=>i.jsx("a",{...L,ref:I,className:N("ams-link",l&&`ams-link--${l}-color`,c==="inline"&&"ams-link--inline",c==="standalone"&&"ams-link--standalone",j),children:n}));t.displayName="Link";try{t.displayName="Link",t.__docgenInfo={description:"",displayName:"Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const T={title:"Components/Navigation/Link",component:t,args:{children:"Link label",contrastColor:!1,href:"#",inverseColor:!1},argTypes:{children:{description:"The link text.",table:{disable:!1}},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},e={},r={},a={args:{children:"typograaf",variant:"inline"},decorators:[n=>i.jsxs(q,{children:["Jouw ",i.jsx(n,{})," biedt mij zulke exquise schreven!"]})]},o={args:{contrastColor:!0}},s={args:{inverseColor:!0}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,C,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    contrastColor: true
  }
}`,...(_=(C=o.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var x,S,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const w=["Default","Standalone","Inline","ContrastColour","InverseColour"],J=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,Inline:a,InverseColour:s,Standalone:r,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{o as C,a as I,J as L,r as S,s as a};
