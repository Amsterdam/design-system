import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{H as r,J as i,P as a,i as o,v as s,y as c}from"./index.esm-BpmEwKvy.js";import{C as l,S as u,T as d,t as f,w as p}from"./src-CtHwToy8.js";import{f as m,i as h,t as g}from"./argTypes-CrWlcsbR.js";import{m as _,u as v}from"./exampleContent-CFoxZuYq.js";import{i as y,t as b}from"./decorators-DIOZAguv.js";var x=e({Default:()=>T,HighlightContent:()=>E,__namedExportsOrder:()=>D,default:()=>w}),S,C,w,T,E,D,O=t((()=>{i(),f(),l(),m(),b(),_(),S=n(),C=v(),w={title:`Components/Containers/Spotlight`,component:u,argTypes:{as:g(d),color:h(p,`purple`)},decorators:[y]},T={render:({as:e,color:t})=>(0,S.jsx)(u,{as:e,color:t,children:(0,S.jsx)(s,{paddingVertical:`x-large`,children:(0,S.jsx)(s.Cell,{span:`all`,children:(0,S.jsx)(o,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:C})})})})},E={args:{color:`green`},render:({color:e})=>{let t=[`lime`,`orange`,`yellow`],n=t.includes(e)?void 0:`inverse`,i=t.includes(e)?`contrast`:`inverse`;return(0,S.jsx)(u,{color:e,children:(0,S.jsx)(s,{paddingVertical:`x-large`,children:(0,S.jsxs)(s.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,S.jsx)(c,{className:`ams-mb-s`,color:n,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,S.jsx)(a,{className:`ams-mb-m`,color:n,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,S.jsx)(r,{color:i,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`HighlightContent`]}));O();export{T as Default,E as HighlightContent,D as __namedExportsOrder,w as default,O as n,x as t};