import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{h as r,q as i}from"./index.esm-BKXztnhd.js";import{tt as a,x as o,z as s}from"./index.esm-ClQB1YIG.js";import{n as c,t as l}from"./StandaloneLink-DMKjGbzq.js";import{a as u,f as d,m as f,r as p,u as m}from"./argTypes-BlEHYq0r.js";import{n as h,t as g}from"./decorators-BeKSGAvF.js";import{n as _,t as v}from"./iconArgTypes-DUy4BZrY.js";var y=t({ContrastColour:()=>C,Default:()=>S,InverseColour:()=>w,WithCustomIcon:()=>E,WithHeadingAndParagraph:()=>T,__namedExportsOrder:()=>D,default:()=>x}),b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),i(),c(),d(),g(),_(),b=n(),x={title:`Components/Navigation/Standalone Link`,component:l,args:{children:`Bekijk alle onderwerpen`,href:`#`},argTypes:{children:p(`The link text.`),color:u,href:m,icon:v(`ChevronForwardIcon`),linkComponent:f}},S={},C={args:{color:`contrast`}},w={args:{color:`inverse`}},T={args:{children:`Bekijk alle werkzaamheden`},decorators:[h(`32rem`,`article`)],render:({children:e,...t})=>(0,b.jsxs)(`article`,{className:`ams-prose`,children:[(0,b.jsx)(o,{level:2,size:`level-3`,children:`Werkzaamheden`}),(0,b.jsx)(s,{children:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`}),(0,b.jsx)(l,{...t,children:e})]})},E={args:{children:`Downloaden`,icon:(0,b.jsx)(r,{})}},D=[`Default`,`ContrastColour`,`InverseColour`,`WithHeadingAndParagraph`,`WithCustomIcon`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden'
  },
  decorators: [maximiseInlineSize('32rem', 'article')],
  render: ({
    children,
    ...args
  }) =>
  // ams-prose sets the vertical rhythm between the heading, the text and the link.
  <article className="ams-prose">
      <Heading level={2} size="level-3">
        Werkzaamheden
      </Heading>
      <Paragraph>
        Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
        parken of ontwikkeling van hele gebieden.
      </Paragraph>
      <StandaloneLink {...args}>{children}</StandaloneLink>
    </article>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...E.parameters?.docs?.source}}}})))()}export{T as a,E as i,w as n,O as o,y as r,x as s,C as t};