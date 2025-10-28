import{r as h,j as e,c as g,D as k,f as d,H as v,P as f,q as w}from"./iframe-DLo72SoR.js";import{I as S}from"./Icon-ugyQ9keY.js";const i=h.forwardRef(({children:a,className:l,color:c,icon:m=k,...p},u)=>e.jsxs("a",{...p,className:g("ams-standalone-link ams-standalone-link--with-icon",c&&`ams-standalone-link--${c}`,l),ref:u,children:[e.jsx(S,{svg:m}),a]}));i.displayName="StandaloneLink";try{i.displayName="StandaloneLink",i.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:{value:"ChevronForwardIcon"},description:"The icon to show before the link text.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const b={title:"Components/Navigation/Standalone Link",component:i,args:{children:"Bekijk alle onderwerpen",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)],table:{defaultValue:{summary:"ChevronForwardIcon"}}}}},r={},n={args:{color:"contrast"}},o={args:{color:"inverse"}},s={args:{children:"Bekijk alle werkzaamheden"},decorators:[a=>e.jsx("article",{style:{maxWidth:"32rem"},children:e.jsx(a,{})})],render:({children:a,...l})=>e.jsxs("article",{children:[e.jsx(v,{className:"ams-mb-s",level:2,size:"level-3",children:"Werkzaamheden"}),e.jsx(f,{className:"ams-mb-m",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(i,{...l,children:a})]})},t={args:{children:"Downloaden",icon:e.jsx(w,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Default","ContrastColour","InverseColour","WithHeadingAndParagraph","WithCustomIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:n,Default:r,InverseColour:o,WithCustomIcon:t,WithHeadingAndParagraph:s,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{n as C,o as I,C as S,s as W,t as a};
