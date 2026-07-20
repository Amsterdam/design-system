import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,U as i,X as a,i as o,v as s,y as c}from"./index.esm-Um0uLf1Y.js";import{C as l,E as u,T as d,t as f,w as p}from"./src-k33nRoTT.js";import{d as m,i as h,t as g}from"./argTypes-CQXDxDHP.js";import{m as _,u as v}from"./exampleContent-Cni407gr.js";import{i as y,t as b}from"./decorators-Cvjcn4aO.js";import{n as x,t as S}from"./isCompactTheme-D2HTZcJ1.js";var C=t({Default:()=>D,HighlightContent:()=>O,__namedExportsOrder:()=>k,default:()=>E}),w,T,E,D,O,k,A=e((()=>{a(),f(),p(),m(),b(),_(),S(),w=n(),T=v(),E={title:`Components/Containers/Spotlight`,component:l,argTypes:{as:g(u),color:h(d,`purple`)},decorators:[y]},D={render:({as:e,color:t},n)=>(0,w.jsx)(l,{as:e,color:t,children:(0,w.jsx)(s,{paddingVertical:`x-large`,children:(0,w.jsx)(s.Cell,{appearance:x(n)?`transparent`:void 0,span:`all`,children:(0,w.jsx)(o,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:T})})})})},O={args:{color:`green`},render:({color:e},t)=>{let n=[`lime`,`orange`,`yellow`],a=n.includes(e)?void 0:`inverse`,o=n.includes(e)?`contrast`:`inverse`;return(0,w.jsx)(l,{color:e,children:(0,w.jsx)(s,{paddingVertical:`x-large`,children:(0,w.jsxs)(s.Cell,{appearance:x(t)?`transparent`:void 0,span:{narrow:4,medium:5,wide:7},children:[(0,w.jsx)(c,{className:`ams-mb-s`,color:a,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,w.jsx)(r,{className:`ams-mb-m`,color:a,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,w.jsx)(i,{color:o,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: ({
    as,
    color
  }, context) => <Spotlight as={as} color={color}>
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance={isCompactTheme(context) ? 'transparent' : undefined} span="all">
          <Blockquote color={!color || ['azure', 'green', 'magenta'].includes(color) ? 'inverse' : undefined}>
            {quote}
          </Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green'
  },
  render: ({
    color
  }, context) => {
    const lightBackgroundColors = ['lime', 'orange', 'yellow'];
    const textColor = lightBackgroundColors.includes(color!) ? undefined : 'inverse';
    const linkColor = lightBackgroundColors.includes(color!) ? 'contrast' : 'inverse';
    return <Spotlight color={color}>
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance={isCompactTheme(context) ? 'transparent' : undefined} span={{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`HighlightContent`]}));A();export{D as Default,O as HighlightContent,k as __namedExportsOrder,E as default,A as n,C as t};