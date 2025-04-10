import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{P as k}from"./index.esm-8hQcBdlS.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as x}from"./index-G8LIXM5I.js";const s=x.forwardRef(({children:a,className:n,color:i,...v},y)=>t.jsx("a",{...v,className:_("ams-link",i&&`ams-link--${i}`,n),ref:y,children:a}));s.displayName="Link";try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}}}}}catch{}const b={title:"Components/Navigation/Link",component:s,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}}}},e={args:{children:"typograaf"},decorators:[(a,{args:n})=>t.jsxs(k,{color:n.color==="inverse"?"inverse":void 0,children:["Jouw ",t.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},r={args:{color:"contrast"}},o={args:{color:"inverse"}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'typograaf'
  },
  decorators: [(Story, {
    args
  }) => <Paragraph color={args.color === 'inverse' ? 'inverse' : undefined}>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const j=["Default","ContrastColour","InverseColour"],P=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:e,InverseColour:o,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{r as C,o as I,P as L};
