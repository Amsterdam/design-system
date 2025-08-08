import{r as h,j as e,c as g,D as k,I as c,H as w,P as f,q as v}from"./iframe-Dv64ekkv.js";import{I as b}from"./Icon-DOk4uCeb.js";const i=h.forwardRef(({children:t,className:d,color:l,icon:m=k,...p},u)=>e.jsxs("a",{...p,className:g("ams-standalone-link ams-standalone-link--with-icon",l&&`ams-standalone-link--${l}`,d),ref:u,children:[e.jsx(b,{svg:m}),t]}));i.displayName="StandaloneLink";try{i.displayName="StandaloneLink",i.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:{value:"ChevronForwardIcon"},description:"The icon to show before the link text.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const x={title:"Components/Navigation/Standalone Link",component:i,args:{children:"Bekijk alle onderwerpen",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:c,options:[void 0,...Object.keys(c)],table:{defaultValue:{summary:"ChevronForwardIcon"}}}}},a={},r={args:{color:"contrast"}},n={args:{color:"inverse"}},o={args:{children:"Bekijk alle werkzaamheden"},decorators:[t=>e.jsxs("article",{style:{maxWidth:"32rem"},children:[e.jsx(w,{className:"ams-mb-xs",level:2,children:"Werkzaamheden"}),e.jsx(f,{className:"ams-mb-s",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(t,{})]})]},s={args:{children:"Downloaden",icon:e.jsx(v,{})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden'
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
}`,...s.parameters?.docs?.source}}};const y=["Default","ContrastColour","InverseColour","WithHeadingAndParagraph","WithCustomIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:a,InverseColour:n,WithCustomIcon:s,WithHeadingAndParagraph:o,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{r as C,n as I,C as S,o as W,s as a};
