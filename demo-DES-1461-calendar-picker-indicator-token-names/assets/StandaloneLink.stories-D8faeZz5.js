import{r as g,j as e,c as u,D as k,f as d,H as w,P as f,q as v}from"./iframe-Dvb3X2i5.js";import{I as S}from"./Icon-lhfYptQE.js";const i=g.forwardRef(({children:a,className:l,color:c,icon:m=k,...p},h)=>e.jsxs("a",{...p,className:u("ams-standalone-link ams-standalone-link--with-icon",c&&`ams-standalone-link--${c}`,l),ref:h,children:[e.jsx(S,{svg:m}),a]}));i.displayName="StandaloneLink";try{i.displayName="StandaloneLink",i.__docgenInfo={description:"",displayName:"StandaloneLink",props:{icon:{defaultValue:{value:"ChevronForwardIcon"},description:"The icon to show before the link text.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const x={title:"Components/Navigation/Standalone Link",component:i,args:{children:"Bekijk alle onderwerpen",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)],table:{defaultValue:{summary:"ChevronForwardIcon"}}}}},r={},n={args:{color:"contrast"}},o={args:{color:"inverse"}},s={args:{children:"Bekijk alle werkzaamheden"},decorators:[a=>e.jsx("article",{style:{maxWidth:"32rem"},children:e.jsx(a,{})})],render:({children:a,...l})=>e.jsxs("article",{children:[e.jsx(w,{className:"ams-mb-s",level:2,size:"level-3",children:"Werkzaamheden"}),e.jsx(f,{className:"ams-mb-m",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(i,{...l,children:a})]})},t={args:{children:"Downloaden",icon:e.jsx(v,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden'
  },
  decorators: [Story => <article style={{
    maxWidth: '32rem'
  }}>
        <Story />
      </article>],
  render: ({
    children,
    ...args
  }) => <article>
      <Heading className="ams-mb-s" level={2} size="level-3">
        Werkzaamheden
      </Heading>
      <Paragraph className="ams-mb-m">
        Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
        parken of ontwikkeling van hele gebieden.
      </Paragraph>
      <StandaloneLink {...args}>{children}</StandaloneLink>
    </article>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","ContrastColour","InverseColour","WithHeadingAndParagraph","WithCustomIcon"],_=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:n,Default:r,InverseColour:o,WithCustomIcon:t,WithHeadingAndParagraph:s,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{n as C,o as I,_ as S,s as W,t as a};
