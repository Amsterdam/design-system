import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as j,P as C}from"./index.esm-DA0FaD8X.js";import{I as c,f as I}from"./index.esm-Dr-tAuIH.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as N}from"./index-G8LIXM5I.js";import{I as W}from"./Icon-BBW_x4VP.js";const t=N.forwardRef(({children:s,className:y,color:l,icon:i,...S},_)=>e.jsxs("a",{...S,className:L("ams-standalone-link",l&&`ams-standalone-link--${l}`,i&&"ams-standalone-link--with-icon",y),ref:_,children:[i&&e.jsx(W,{svg:i}),s]}));t.displayName="StandaloneLink";try{t.displayName="StandaloneLink",t.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"Adds an icon to the link, showing it before the link text.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const z={title:"Components/Navigation/Standalone Link",component:t,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:c,options:[void 0,...Object.keys(c)]}}},a={},r={args:{color:"contrast"}},n={args:{color:"inverse"}},o={args:{children:"Bekijk alle werkzaamheden",icon:I},decorators:[s=>e.jsxs("article",{style:{maxWidth:"32rem"},children:[e.jsx(j,{className:"ams-mb-xs",level:2,children:"Werkzaamheden"}),e.jsx(C,{className:"ams-mb-s",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(s,{})]})]};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,f,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,b,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const P=["Default","ContrastColour","InverseColour","WithChevronIcon"],B=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:a,InverseColour:n,WithChevronIcon:o,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{r as C,n as I,B as S,o as W};
