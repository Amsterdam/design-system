import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{H as r,J as i,P as a,i as o,v as s,y as c}from"./index.esm-BfzGVJtC.js";import{C as l,S as u,t as d,w as f}from"./src-CUVxYOlJ.js";import{l as p,p as m}from"./exampleContent-BCxTFsAp.js";import{i as h,t as g}from"./decorators-CCb1C-0E.js";var _=e({Default:()=>x,HighlightContent:()=>S,__namedExportsOrder:()=>C,default:()=>b}),v,y,b,x,S,C,w=t((()=>{i(),d(),l(),g(),m(),v=n(),y=p(),b={title:`Components/Containers/Spotlight`,component:u,argTypes:{color:{control:{labels:{undefined:`purple (default)`}},options:[void 0,...f]}},decorators:[h]},x={render:({as:e,color:t})=>(0,v.jsx)(u,{as:e,color:t,children:(0,v.jsx)(s,{paddingVertical:`x-large`,children:(0,v.jsx)(s.Cell,{span:`all`,children:(0,v.jsx)(o,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:y})})})})},S={args:{color:`green`},render:({color:e})=>{let t=[`lime`,`orange`,`yellow`],n=t.includes(e)?void 0:`inverse`,i=t.includes(e)?`contrast`:`inverse`;return(0,v.jsx)(u,{color:e,children:(0,v.jsx)(s,{paddingVertical:`x-large`,children:(0,v.jsxs)(s.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,v.jsx)(c,{className:`ams-mb-s`,color:n,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,v.jsx)(a,{className:`ams-mb-m`,color:n,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,v.jsx)(r,{color:i,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`HighlightContent`]}));w();export{x as Default,S as HighlightContent,C as __namedExportsOrder,b as default,w as n,_ as t};