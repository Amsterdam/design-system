import{r as u,j as e,c as g,G as i,Y as m,H as p,P as v,p as h}from"./iframe-DS1qmpkV.js";import{c as f}from"./exampleContent-Du2yH2Fl.js";const x=["azure","green","lime","magenta","orange","yellow"],o=u.forwardRef(({as:r="div",children:a,className:t,color:s,...d},c)=>e.jsx(r,{...d,className:g("ams-spotlight",s&&`ams-spotlight--${s}`,t),ref:c,children:a}));o.displayName="Spotlight";try{o.displayName="Spotlight",o.__docgenInfo={description:"",displayName:"Spotlight",props:{as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"section"'}]}},color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}}}}}catch{}const C=f(),j={title:"Components/Containers/Spotlight",component:o,argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...x]}}},l={render:({as:r,color:a})=>e.jsx(o,{as:r,color:a,children:e.jsx(i,{paddingVertical:"x-large",children:e.jsx(i.Cell,{span:"all",children:e.jsx(m,{color:!a||["azure","green","magenta"].includes(a)?"inverse":void 0,children:C})})})})},n={args:{color:"green"},render:({color:r})=>{const a=["lime","orange","yellow"],t=a.includes(r)?void 0:"inverse",s=a.includes(r)?"contrast":"inverse";return e.jsx(o,{color:r,children:e.jsx(i,{paddingVertical:"x-large",children:e.jsxs(i.Cell,{span:{narrow:4,medium:5,wide:7},children:[e.jsx(p,{className:"ams-mb-s",color:t,level:2,size:"level-3",children:"Steun geven aan een partij"}),e.jsx(v,{className:"ams-mb-m",color:t,children:"Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring."}),e.jsx(h,{color:s,href:"#",children:"Ondersteuningsverklaring inleveren"})]})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green'
  },
  render: ({
    color
  }) => {
    const lightBackgroundColors = ['lime', 'orange', 'yellow'];
    const textColor = lightBackgroundColors.includes(color!) ? undefined : 'inverse';
    const linkColor = lightBackgroundColors.includes(color!) ? 'contrast' : 'inverse';
    return <Spotlight color={color}>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 5,
          wide: 7
        }}>
            <Heading className="ams-mb-s" color={textColor} level={2} size="level-3">
              Steun geven aan een partij
            </Heading>
            <Paragraph className="ams-mb-m" color={textColor}>
              Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een
              stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.
            </Paragraph>
            <StandaloneLink color={linkColor} href="#">
              Ondersteuningsverklaring inleveren
            </StandaloneLink>
          </Grid.Cell>
        </Grid>
      </Spotlight>;
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","HighlightContent"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:l,HighlightContent:n,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{n as H,o as S,_ as a,j as m,x as s};
