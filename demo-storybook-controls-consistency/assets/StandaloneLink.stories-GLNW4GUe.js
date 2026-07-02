import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,m as i}from"./index.esm-Cyk4q9Yv.js";import{J as a,P as o,y as s}from"./index.esm-D8eqIj5U.js";import{b as c,t as l}from"./src-C1A9rIMv.js";import{d as u,l as d,n as f,o as p,s as m}from"./argTypes-J67b33k4.js";import{n as h,t as g}from"./decorators-BFvRYnKT.js";var _=e({ContrastColour:()=>x,Default:()=>b,InverseColour:()=>S,WithCustomIcon:()=>w,WithHeadingAndParagraph:()=>C,__namedExportsOrder:()=>T,default:()=>y}),v,y,b,x,S,C,w,T,E=t((()=>{a(),r(),l(),d(),g(),v=n(),y={title:`Components/Navigation/Standalone Link`,component:c,args:{children:`Bekijk alle onderwerpen`,href:`#`},argTypes:{children:{description:`The link text.`,table:{disable:!1}},color:f,href:p,icon:{...m,control:{labels:{undefined:`ChevronForwardIcon (default)`},type:`select`},options:m.options.filter(e=>e!==`ChevronForwardIcon`)},linkComponent:u}},b={},x={args:{color:`contrast`}},S={args:{color:`inverse`}},C={args:{children:`Bekijk alle werkzaamheden`},decorators:[h(`32rem`,`article`)],render:({children:e,...t})=>(0,v.jsxs)(`article`,{children:[(0,v.jsx)(s,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Werkzaamheden`}),(0,v.jsx)(o,{className:`ams-mb-m`,children:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`}),(0,v.jsx)(c,{...t,children:e})]})},w={args:{children:`Downloaden`,icon:(0,v.jsx)(i,{})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden'
  },
  decorators: [maximiseInlineSize('32rem', 'article')],
  render: ({
    children,
    ...args
  }) => <article>
      <Heading className="ams-mb-s" level={2} size="level-3">
        Werkzaamheden
      </Heading>
      <Paragraph className="ams-mb-m">
        Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
        parken of ontwikkeling van hele gebieden.
      </Paragraph>
      <StandaloneLink {...args}>{children}</StandaloneLink>
    </article>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`ContrastColour`,`InverseColour`,`WithHeadingAndParagraph`,`WithCustomIcon`]}));E();export{x as ContrastColour,b as Default,S as InverseColour,w as WithCustomIcon,C as WithHeadingAndParagraph,T as __namedExportsOrder,y as default,E as n,_ as t};