import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,W as i,m as a}from"./index.esm-Cyk4q9Yv.js";import{J as o,P as s,y as c}from"./index.esm-rp6xSNhZ.js";import{b as l,t as u}from"./src-zlZ-Ox4j.js";import{n as d,t as f}from"./decorators-iZ1VSVmj.js";var p=e({ContrastColour:()=>_,Default:()=>g,InverseColour:()=>v,WithCustomIcon:()=>b,WithHeadingAndParagraph:()=>y,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{o(),r(),u(),f(),m=n(),h={title:`Components/Navigation/Standalone Link`,component:l,args:{children:`Bekijk alle onderwerpen`,href:`#`},argTypes:{children:{description:`The link text.`,table:{disable:!1}},color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`contrast`,`inverse`]},href:{description:`The url for the link.`,name:`href`,type:{name:`string`,required:!1}},icon:{control:{labels:{undefined:`none`},type:`select`},mapping:i,options:[void 0,...Object.keys(i)],table:{defaultValue:{summary:`ChevronForwardIcon`}}}}},g={},_={args:{color:`contrast`}},v={args:{color:`inverse`}},y={args:{children:`Bekijk alle werkzaamheden`},decorators:[d(`32rem`,`article`)],render:({children:e,...t})=>(0,m.jsxs)(`article`,{children:[(0,m.jsx)(c,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Werkzaamheden`}),(0,m.jsx)(s,{className:`ams-mb-m`,children:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`}),(0,m.jsx)(l,{...t,children:e})]})},b={args:{children:`Downloaden`,icon:(0,m.jsx)(a,{})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`ContrastColour`,`InverseColour`,`WithHeadingAndParagraph`,`WithCustomIcon`]}));S();export{_ as ContrastColour,g as Default,v as InverseColour,b as WithCustomIcon,y as WithHeadingAndParagraph,x as __namedExportsOrder,h as default,S as n,p as t};