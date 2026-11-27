import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{n as r,t as i}from"./Row-B034aPZa.js";import{n as a,t as o}from"./Image-CD9xscoY.js";import{i as s,t as c}from"./Column-CU9PMsbB.js";import{n as l,t as u}from"./example-photo-01-CttsGg5W.js";import{n as d,t as f}from"./example-photo-02-BUk7ClGW.js";import{n as p,t as m}from"./example-photo-11-DJ3UdJGn.js";import{n as h,t as g}from"./decorators-CX_2jOdA.js";import{i as _,t as v}from"./types-DBCOQgsd.js";import{i as y,n as b,r as x,t as S}from"./example-photo-28-CNqrL_nZ.js";var C=t({ContainedImage:()=>O,ContainedImageComparison:()=>k,Default:()=>E,LazyLoading:()=>A,ResponsiveImages:()=>D,__namedExportsOrder:()=>j,default:()=>T}),w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{s(),a(),r(),_(),g(),l(),d(),y(),p(),b(),w=n(),T={title:`Components/Media/Image`,component:o,argTypes:{aspectRatio:{control:{labels:{undefined:`none (default)`},type:`select`},options:[void 0,...v]},fit:{control:{labels:{undefined:`default (cover)`},type:`radio`},options:[void 0,`contain`]},src:{description:`The url for the image.`},srcSet:{description:`A set of candidate images.`}},decorators:[h(`vi-medium`)]},E={args:{alt:``,src:u}},D={args:{alt:``,sizes:`(max-width: 37.5rem) 640px, 50vw`,src:f,srcSet:`${f} 640w, ${f} 1280w`}},O={args:{alt:``,fit:`contain`,src:x}},k={args:{alt:``,src:S},parameters:{controls:{include:[`aspectRatio`,`src`]}},render:({aspectRatio:e,src:t})=>(0,w.jsxs)(i,{gap:`x-large`,children:[(0,w.jsx)(c,{children:(0,w.jsx)(o,{alt:``,aspectRatio:e,src:t})}),(0,w.jsx)(c,{children:(0,w.jsx)(o,{alt:``,aspectRatio:e,fit:`contain`,src:t})})]})},A={args:{alt:``,loading:`lazy`,src:m}},j=[`Default`,`ResponsiveImages`,`ContainedImage`,`ContainedImageComparison`,`LazyLoading`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: examplePhoto01
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: examplePhoto02,
    srcSet: \`\${examplePhoto02} 640w, \${examplePhoto02} 1280w\`
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    fit: 'contain',
    src: examplePhoto09
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: examplePhoto28
  },
  parameters: {
    controls: {
      include: ['aspectRatio', 'src']
    }
  },
  render: ({
    aspectRatio,
    src
  }) => <Row gap="x-large">
      <Column>
        <Image alt="" aspectRatio={aspectRatio} src={src} />
      </Column>
      <Column>
        <Image alt="" aspectRatio={aspectRatio} fit="contain" src={src} />
      </Column>
    </Row>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    loading: 'lazy',
    src: examplePhoto11
  }
}`,...A.parameters?.docs?.source}}}})))()}export{D as a,A as i,k as n,M as o,C as r,T as s,O as t};