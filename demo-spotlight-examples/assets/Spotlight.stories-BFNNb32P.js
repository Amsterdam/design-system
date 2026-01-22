import{r as u,j as e,c as m,G as s,Y as g,H as p,P as v,p as h}from"./iframe-BknBKS7d.js";import{c as f}from"./exampleContent-Du2yH2Fl.js";const x=["azure","green","lime","magenta","orange","yellow"],l=u.forwardRef(({as:o="div",children:a,className:i,color:t,...d},c)=>e.jsx(o,{...d,className:m("ams-spotlight",t&&`ams-spotlight--${t}`,i),ref:c,children:a}));l.displayName="Spotlight";try{l.displayName="Spotlight",l.__docgenInfo={description:"",displayName:"Spotlight",props:{as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"section"'}]}},color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}}}}}catch{}const j=f(),S={title:"Components/Containers/Spotlight",component:l,argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...x]}}},r={render:({as:o,color:a})=>e.jsx(l,{as:o,color:a,children:e.jsx(s,{paddingVertical:"x-large",children:e.jsx(s.Cell,{span:"all",children:e.jsx(g,{color:!a||["azure","green","magenta"].includes(a)?"inverse":void 0,children:j})})})})},n={args:{children:e.jsx(s,{paddingVertical:"x-large",children:e.jsxs(s.Cell,{span:{narrow:4,medium:5,wide:7},children:[e.jsx(p,{className:"ams-mb-s",color:"inverse",level:2,size:"level-3",children:"Steun geven aan een partij"}),e.jsx(v,{className:"ams-mb-m",color:"inverse",children:"Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring."}),e.jsx(h,{color:"inverse",href:"#",children:"Ondersteuningsverklaring inleveren"})]})}),color:"green"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    as,
    color
  }) => <Spotlight as={as} color={color}>
      <Grid paddingVertical="x-large">
        <Grid.Cell span="all">
          <Blockquote color={!color || ['azure', 'green', 'magenta'].includes(color) ? 'inverse' : undefined}>
            {quote}
          </Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Grid paddingVertical="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 5,
        wide: 7
      }}>
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
            Steun geven aan een partij
          </Heading>
          <Paragraph className="ams-mb-m" color="inverse">
            Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een
            stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.
          </Paragraph>
          <StandaloneLink color="inverse" href="#">
            Ondersteuningsverklaring inleveren
          </StandaloneLink>
        </Grid.Cell>
      </Grid>,
    color: 'green'
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","HighlightContent"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,HighlightContent:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{n as H,l as S,y as a,S as m,x as s};
