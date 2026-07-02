import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{H as r,J as i,P as a,i as o,v as s,y as c}from"./index.esm-WDBpnfie.js";import{C as l,S as u,T as d,t as f,w as p}from"./src-DaT4QjpU.js";import{t as m,u as h}from"./argTypes-QdTB_aqP.js";import{m as g,u as _}from"./exampleContent-CFoxZuYq.js";import{i as v,t as y}from"./decorators-CPkzR9C3.js";var b=e({Default:()=>w,HighlightContent:()=>T,__namedExportsOrder:()=>E,default:()=>C}),x,S,C,w,T,E,D=t((()=>{i(),f(),l(),h(),y(),g(),x=n(),S=_(),C={title:`Components/Containers/Spotlight`,component:u,argTypes:{as:m(d),color:{control:{labels:{undefined:`purple (default)`},type:`select`},options:[void 0,...p]}},decorators:[v]},w={render:({as:e,color:t})=>(0,x.jsx)(u,{as:e,color:t,children:(0,x.jsx)(s,{paddingVertical:`x-large`,children:(0,x.jsx)(s.Cell,{span:`all`,children:(0,x.jsx)(o,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:S})})})})},T={args:{color:`green`},render:({color:e})=>{let t=[`lime`,`orange`,`yellow`],n=t.includes(e)?void 0:`inverse`,i=t.includes(e)?`contrast`:`inverse`;return(0,x.jsx)(u,{color:e,children:(0,x.jsx)(s,{paddingVertical:`x-large`,children:(0,x.jsxs)(s.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,x.jsx)(c,{className:`ams-mb-s`,color:n,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,x.jsx)(a,{className:`ams-mb-m`,color:n,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,x.jsx)(r,{color:i,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`HighlightContent`]}));D();export{w as Default,T as HighlightContent,E as __namedExportsOrder,C as default,D as n,b as t};