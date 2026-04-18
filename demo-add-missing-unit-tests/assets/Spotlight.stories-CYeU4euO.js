import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{G as r,_ as i,g as a,j as o,r as s,z as c}from"./index.esm-Cv-SSCnd.js";import{f as l,m as u,p as d,t as f}from"./src-19zFmoRS.js";import{l as p,p as m}from"./exampleContent-Da4iKy_l.js";var h=t({Default:()=>y,HighlightContent:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x,S=e((()=>{r(),f(),d(),m(),g=n(),_=p(),v={title:`Components/Containers/Spotlight`,component:l,argTypes:{color:{control:{labels:{undefined:`purple (default)`}},options:[void 0,...u]}}},y={render:({as:e,color:t})=>(0,g.jsx)(l,{as:e,color:t,children:(0,g.jsx)(a,{paddingVertical:`x-large`,children:(0,g.jsx)(a.Cell,{span:`all`,children:(0,g.jsx)(s,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:_})})})})},b={args:{color:`green`},render:({color:e})=>{let t=[`lime`,`orange`,`yellow`],n=t.includes(e)?void 0:`inverse`,r=t.includes(e)?`contrast`:`inverse`;return(0,g.jsx)(l,{color:e,children:(0,g.jsx)(a,{paddingVertical:`x-large`,children:(0,g.jsxs)(a.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,g.jsx)(i,{className:`ams-mb-s`,color:n,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,g.jsx)(o,{className:`ams-mb-m`,color:n,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,g.jsx)(c,{color:r,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`HighlightContent`]}));S();export{y as Default,b as HighlightContent,x as __namedExportsOrder,v as default,S as n,h as t};