import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Bt as n,I as r,Vt as i,Wt as a,X as o,ut as s,x as c}from"./iframe-BUgim-DV.js";import{d as l,t as u}from"./src-Bxb-XxGu.js";var d=t({ContrastColour:()=>h,Default:()=>m,InverseColour:()=>g,WithCustomIcon:()=>v,WithHeadingAndParagraph:()=>_,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y,b=e((()=>{o(),i(),u(),f=a(),p={title:`Components/Navigation/Standalone Link`,component:l,args:{children:`Bekijk alle onderwerpen`,href:`#`},argTypes:{children:{description:`The link text.`,table:{disable:!1}},color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`contrast`,`inverse`]},href:{description:`The url for the link.`,name:`href`,type:{name:`string`,required:!1}},icon:{control:{labels:{undefined:`none`},type:`select`},mapping:n,options:[void 0,...Object.keys(n)],table:{defaultValue:{summary:`ChevronForwardIcon`}}}}},m={},h={args:{color:`contrast`}},g={args:{color:`inverse`}},_={args:{children:`Bekijk alle werkzaamheden`},decorators:[e=>(0,f.jsx)(`article`,{style:{maxInlineSize:`32rem`},children:(0,f.jsx)(e,{})})],render:({children:e,...t})=>(0,f.jsxs)(`article`,{children:[(0,f.jsx)(c,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Werkzaamheden`}),(0,f.jsx)(r,{className:`ams-mb-m`,children:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`}),(0,f.jsx)(l,{...t,children:e})]})},v={args:{children:`Downloaden`,icon:(0,f.jsx)(s,{})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Bekijk alle werkzaamheden'
  },
  decorators: [Story => <article style={{
    maxInlineSize: '32rem'
  }}>
        <Story />
      </article>],
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ContrastColour`,`InverseColour`,`WithHeadingAndParagraph`,`WithCustomIcon`]}));b();export{h as ContrastColour,m as Default,g as InverseColour,v as WithCustomIcon,_ as WithHeadingAndParagraph,y as __namedExportsOrder,p as default,b as n,d as t};