import{r as g,j as e,c as k,n as d,I as l,H as w,P as v,s as f}from"./iframe-BUjGuh4I.js";import{I as x}from"./Icon-GnB8Yoyz.js";const i=g.forwardRef(({children:t,className:m,color:c,icon:p=d,...u},h)=>e.jsxs("a",{...u,className:k("ams-standalone-link ams-standalone-link--with-icon",c&&`ams-standalone-link--${c}`,m),ref:h,children:[e.jsx(x,{svg:p}),t]}));i.displayName="StandaloneLink";try{i.displayName="StandaloneLink",i.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:{value:"ChevronForwardIcon"},description:"The icon to show before the link text.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const b={title:"Components/Navigation/Standalone Link",component:i,args:{children:"Bekijk alle onderwerpen",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:l,options:[void 0,...Object.keys(l)],table:{defaultValue:{summary:"ChevronForwardIcon"}}}}},a={},r={args:{color:"contrast"}},n={args:{color:"inverse"}},o={args:{children:"Bekijk alle werkzaamheden",icon:e.jsx(d,{})},decorators:[t=>e.jsxs("article",{style:{maxWidth:"32rem"},children:[e.jsx(w,{className:"ams-mb-xs",level:2,children:"Werkzaamheden"}),e.jsx(v,{className:"ams-mb-s",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(t,{})]})]},s={args:{children:"Downloaden",icon:e.jsx(f,{})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden',
    icon: <ChevronForwardIcon />
  },
  decorators: [Story => <article style={{
    maxWidth: '32rem'
  }}>
        <Heading className="ams-mb-xs" level={2}>
          Werkzaamheden
        </Heading>
        <Paragraph className="ams-mb-s">
          Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
          parken of ontwikkeling van hele gebieden.
        </Paragraph>
        <Story />
      </article>]
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","ContrastColour","InverseColour","WithHeadingAndParagraph","WithCustomIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:a,InverseColour:n,WithCustomIcon:s,WithHeadingAndParagraph:o,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{r as C,n as I,C as S,o as W,s as a};
