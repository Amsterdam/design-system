import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{P as q}from"./index.esm-DSD1WKm8.js";import{c as w}from"./clsx-B-dksMZM.js";import{r as z}from"./index-D7uoVdV3.js";const l=z.forwardRef(({children:e,className:I,contrastColor:V,inverseColor:N,variant:c="standalone",...D},T)=>i.jsx("a",{...D,ref:T,className:w("ams-link",V&&"ams-link--contrast-color",N&&"ams-link--inverse-color",c==="inline"&&"ams-link--inline",c==="standalone"&&"ams-link--standalone",I),children:e}));l.displayName="Link";try{l.displayName="Link",l.__docgenInfo={description:"",displayName:"Link",props:{contrastColor:{defaultValue:null,description:"Changes the text colour for readability on a light background.",name:"contrastColor",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"standalone"},description:"Whether the link is inline or stands alone.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'}]}}}}}catch{}const E={title:"Components/Navigation/Link",component:l,args:{children:"Link label",contrastColor:!1,href:"#",inverseColor:!1},argTypes:{children:{description:"The link text.",table:{disable:!1}},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},r={},a={},s={args:{children:"typograaf",variant:"inline"},decorators:[e=>i.jsxs(q,{children:["Jouw ",i.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},o={args:{contrastColor:!0}},n={args:{inverseColor:!0}},t={args:{children:"Amsterdam Design System",href:"https://designsystem.amsterdam",variant:"inline"},decorators:[e=>i.jsxs(q,{children:["Welkom terug bij het ",i.jsx(e,{})," handboek."]})]};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,k,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var v,C,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    contrastColor: true
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,x,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var j,L,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Amsterdam Design System',
    href: 'https://designsystem.amsterdam',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Welkom terug bij het <Story /> handboek.
      </Paragraph>]
}`,...(P=(L=t.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const O=["Default","Standalone","Inline","ContrastColour","InverseColour","Visited"],M=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:r,Inline:s,InverseColour:n,Standalone:a,Visited:t,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{o as C,s as I,M as L,a as S,t as V,n as a};
