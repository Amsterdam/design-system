import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,K as i,L as a,S as o,a as s,x as c}from"./index.esm-D2EqI6HK.js";import{i as l,n as u,r as d,t as f}from"./Spotlight-C98takrX.js";import{d as p,m}from"./exampleContent-DsZ2XVq0.js";import{i as h,t as g}from"./decorators-B6QqKJPH.js";import{d as _,i as v,t as y}from"./argTypes-CTYEle7b.js";import{n as b,t as x}from"./useIsCompactTheme-Lkm9dUAp.js";var S=t({Default:()=>E,HighlightContent:()=>D,__namedExportsOrder:()=>O,default:()=>T}),C,w,T,E,D,O;function k(){return(k=e((()=>{r(),u(),_(),g(),m(),x(),C=n(),w=p(),T={title:`Components/Containers/Spotlight`,component:f,argTypes:{as:y(l),color:v(d,`purple`)},decorators:[h],parameters:{layout:`fullscreen`}},E={render:({as:e,color:t})=>{let n=b();return(0,C.jsx)(f,{as:e,color:t,children:(0,C.jsx)(c,{paddingVertical:`x-large`,children:(0,C.jsx)(c.Cell,{appearance:n?`transparent`:void 0,span:`all`,children:(0,C.jsx)(s,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:w})})})})}},D={args:{color:`green`},render:({color:e})=>{let t=b(),n=[`lime`,`orange`,`yellow`],r=n.includes(e)?void 0:`inverse`,s=n.includes(e)?`contrast`:`inverse`;return(0,C.jsx)(f,{color:e,children:(0,C.jsx)(c,{paddingVertical:`x-large`,children:(0,C.jsxs)(c.Cell,{appearance:t?`transparent`:void 0,className:`ams-prose`,span:{narrow:4,medium:5,wide:7},children:[(0,C.jsx)(o,{color:r,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,C.jsx)(a,{color:r,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,C.jsx)(i,{color:s,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: ({
    as,
    color
  }) => {
    const compact = useIsCompactTheme();
    return <Spotlight as={as} color={color}>
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance={compact ? 'transparent' : undefined} span="all">
            <Blockquote color={!color || ['azure', 'green', 'magenta'].includes(color) ? 'inverse' : undefined}>
              {quote}
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green'
  },
  render: ({
    color
  }) => {
    const compact = useIsCompactTheme();
    const lightBackgroundColors = ['lime', 'orange', 'yellow'];
    const textColor = lightBackgroundColors.includes(color!) ? undefined : 'inverse';
    const linkColor = lightBackgroundColors.includes(color!) ? 'contrast' : 'inverse';
    return <Spotlight color={color}>
        <Grid paddingVertical="x-large">
          {/* ams-prose sets the vertical rhythm between the heading, the text and the link. */}
          <Grid.Cell appearance={compact ? 'transparent' : undefined} className="ams-prose" span={{
          narrow: 4,
          medium: 5,
          wide: 7
        }}>
            <Heading color={textColor} level={2} size="level-3">
              Steun geven aan een partij
            </Heading>
            <Paragraph color={textColor}>
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`HighlightContent`]})))()}export{T as i,S as n,k as r,D as t};