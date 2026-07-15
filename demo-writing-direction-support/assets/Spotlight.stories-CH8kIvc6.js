import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{D as r,E as i,G as a,dt as o,o as s,tt as c}from"./index.esm-DsBQKTKD.js";import{C as l,E as u,T as d,t as f,w as p}from"./src-BoMaO8ZV.js";import{d as m,i as h,t as g}from"./argTypes-CQXDxDHP.js";import{m as _,u as v}from"./exampleContent-Cni407gr.js";import{i as y,t as b}from"./decorators-DVsbh44Y.js";import{n as x,t as S}from"./isCompactTheme-D2HTZcJ1.js";var C=t({Default:()=>D,HighlightContent:()=>O,__namedExportsOrder:()=>k,default:()=>E}),w,T,E,D,O,k,A=e((()=>{o(),f(),p(),m(),b(),_(),S(),w=n(),T=v(),E={title:`Components/Containers/Spotlight`,component:l,argTypes:{as:g(u),color:h(d,`purple`)},decorators:[y]},D={render:({as:e,color:t},n)=>(0,w.jsx)(l,{as:e,color:t,children:(0,w.jsx)(i,{paddingVertical:`x-large`,children:(0,w.jsx)(i.Cell,{appearance:x(n)?`transparent`:void 0,span:`all`,children:(0,w.jsx)(s,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:T})})})})},O={args:{color:`green`},render:({color:e},t)=>{let n=[`lime`,`orange`,`yellow`],o=n.includes(e)?void 0:`inverse`,s=n.includes(e)?`contrast`:`inverse`;return(0,w.jsx)(l,{color:e,children:(0,w.jsx)(i,{paddingVertical:`x-large`,children:(0,w.jsxs)(i.Cell,{appearance:x(t)?`transparent`:void 0,span:{narrow:4,medium:5,wide:7},children:[(0,w.jsx)(r,{className:`ams-mb-s`,color:o,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,w.jsx)(a,{className:`ams-mb-m`,color:o,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,w.jsx)(c,{color:s,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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