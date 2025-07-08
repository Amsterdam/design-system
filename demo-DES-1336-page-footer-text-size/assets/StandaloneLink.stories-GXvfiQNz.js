import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as u,P as h}from"./index.esm-BQ0Ra-KO.js";import{I as c,f as g}from"./index.esm-CVKOIKGq.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as f}from"./index-G8LIXM5I.js";import{I as v}from"./Icon-BBW_x4VP.js";const t=f.forwardRef(({children:s,className:d,color:l,icon:i,...m},p)=>e.jsxs("a",{...m,className:k("ams-standalone-link",l&&`ams-standalone-link--${l}`,i&&"ams-standalone-link--with-icon",d),ref:p,children:[i&&e.jsx(v,{svg:i}),s]}));t.displayName="StandaloneLink";try{t.displayName="StandaloneLink",t.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"Adds an icon to the link, showing it before the link text.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const w={title:"Components/Navigation/Standalone Link",component:t,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:c,options:[void 0,...Object.keys(c)]}}},a={},r={args:{color:"contrast"}},n={args:{color:"inverse"}},o={args:{children:"Bekijk alle werkzaamheden",icon:g},decorators:[s=>e.jsxs("article",{style:{maxWidth:"32rem"},children:[e.jsx(u,{className:"ams-mb-xs",level:2,children:"Werkzaamheden"}),e.jsx(h,{className:"ams-mb-s",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(s,{})]})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    icon: ChevronForwardIcon
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
}`,...o.parameters?.docs?.source}}};const b=["Default","ContrastColour","InverseColour","WithChevronIcon"],I=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:a,InverseColour:n,WithChevronIcon:o,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{r as C,n as I,I as S,o as W};
