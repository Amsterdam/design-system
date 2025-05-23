import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as c,H as C,P as I}from"./index.esm-DepIP5pJ.js";import{I as d}from"./index.esm-CblzCDI2.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as N}from"./index-G8LIXM5I.js";import{I as A}from"./Icon-BBW_x4VP.js";const t=N.forwardRef(({children:s,className:S,color:l,icon:i,..._},j)=>e.jsxs("a",{..._,className:L("ams-standalone-link",l&&`ams-standalone-link--${l}`,i&&"ams-standalone-link--with-icon",S),ref:j,children:[i&&e.jsx(A,{svg:i}),s]}));t.displayName="StandaloneLink";try{t.displayName="StandaloneLink",t.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"Adds an icon to the link, showing it before the link text.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const G={title:"Components/Navigation/Standalone Link",component:t,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]}}},a={},r={args:{color:"contrast"}},n={args:{color:"inverse"}},o={args:{children:"Alle bouw- en verkeerswerkzaamheden"},decorators:[s=>e.jsx(c,{children:e.jsx(c.Cell,{span:{narrow:4,medium:5,wide:6},children:e.jsxs("article",{children:[e.jsx(C,{className:"ams-mb-xs",level:2,children:"Werkzaamheden"}),e.jsx(I,{className:"ams-mb-s",children:"Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden."}),e.jsx(s,{})]})})})]};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,w,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Alle bouw- en verkeerswerkzaamheden'
  },
  decorators: [Story => <Grid>
        <Grid.Cell span={{
      narrow: 4,
      medium: 5,
      wide: 6
    }}>
          <article>
            <Heading className="ams-mb-xs" level={2}>
              Werkzaamheden
            </Heading>
            <Paragraph className="ams-mb-s">
              Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak
              van parken of ontwikkeling van hele gebieden.
            </Paragraph>
            <Story />
          </article>
        </Grid.Cell>
      </Grid>]
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const z=["Default","ContrastColour","InverseColour","InAnArticle"],D=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:r,Default:a,InAnArticle:o,InverseColour:n,__namedExportsOrder:z,default:G},Symbol.toStringTag,{value:"Module"}));export{r as C,n as I,D as S,o as a};
