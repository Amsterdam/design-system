import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{H as r,J as i,P as a,i as o,v as s,y as c}from"./index.esm-Biy4Zre3.js";import{C as l,S as u,T as d,t as f,w as p}from"./src-CCmgLtBV.js";import{m,u as h}from"./exampleContent-CFoxZuYq.js";import{i as g,t as _}from"./decorators-ByYiP26r.js";var v=e({Default:()=>S,HighlightContent:()=>C,__namedExportsOrder:()=>w,default:()=>x}),y,b,x,S,C,w,T=t((()=>{i(),f(),l(),_(),m(),y=n(),b=h(),x={title:`Components/Containers/Spotlight`,component:u,argTypes:{as:{control:{labels:{undefined:`div (default)`},type:`select`},options:[void 0,...d.filter(e=>e!==`div`)]},color:{control:{labels:{undefined:`purple (default)`},type:`select`},options:[void 0,...p]}},decorators:[g]},S={render:({as:e,color:t})=>(0,y.jsx)(u,{as:e,color:t,children:(0,y.jsx)(s,{paddingVertical:`x-large`,children:(0,y.jsx)(s.Cell,{span:`all`,children:(0,y.jsx)(o,{color:!t||[`azure`,`green`,`magenta`].includes(t)?`inverse`:void 0,children:b})})})})},C={args:{color:`green`},render:({color:e})=>{let t=[`lime`,`orange`,`yellow`],n=t.includes(e)?void 0:`inverse`,i=t.includes(e)?`contrast`:`inverse`;return(0,y.jsx)(u,{color:e,children:(0,y.jsx)(s,{paddingVertical:`x-large`,children:(0,y.jsxs)(s.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,y.jsx)(c,{className:`ams-mb-s`,color:n,level:2,size:`level-3`,children:`Steun geven aan een partij`}),(0,y.jsx)(a,{className:`ams-mb-m`,color:n,children:`Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.`}),(0,y.jsx)(r,{color:i,href:`#`,children:`Ondersteuningsverklaring inleveren`})]})})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`HighlightContent`]}));T();export{S as Default,C as HighlightContent,w as __namedExportsOrder,x as default,T as n,v as t};