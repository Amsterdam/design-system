import{j as e,c as F}from"./clsx.m-51e04ab1.js";/* empty css                  */import{I as N}from"./icon-d09674c0.js";import{d as T}from"./index.esm-681424b7.js";import{r as w}from"./index-8db94870.js";import{P as z}from"./Paragraph-28699716.js";import"./_commonjsHelpers-042e6b4d.js";const l=w.forwardRef(({children:a,variant:n,onBackground:c,className:V,...P},E)=>e.jsxs("a",{...P,ref:E,className:F("amsterdam-link",{"amsterdam-link--inline":n==="inline","amsterdam-link--standalone-bold":n==="standaloneBold","amsterdam-link--in-list":n==="inList","amsterdam-link--on-background-light":c==="light","amsterdam-link--on-background-dark":c==="dark"},V),children:[n==="inList"&&e.jsx(N,{svg:T,size:"level-7"}),a]}));l.displayName="Link";try{l.displayName="Link",l.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'},{value:'"standaloneBold"'},{value:'"inList"'}]}},onBackground:{defaultValue:null,description:"",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const O={title:"Link",component:l,argTypes:{onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",standaloneBold:"standaloneBold",inline:"inline",inList:"inList"}},options:["standalone","standaloneBold","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#"}},r={args:{onBackground:void 0}},o={args:{variant:"standaloneBold",onBackground:void 0}},t={args:{children:"typograaf",href:"#",variant:"inline",onBackground:void 0},decorators:[a=>e.jsxs(z,{children:["Jouw ",e.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},s={args:{children:"Linktekst",href:"#",variant:"inList",onBackground:void 0}},d={args:{onBackground:"dark"},decorators:[a=>e.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:e.jsx(a,{})})]},i={args:{onBackground:"light"},decorators:[a=>e.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:e.jsx(a,{})})]};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onBackground: undefined // Workaround to avoid 'onBackground' being set to an empty function
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,k,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'standaloneBold',
    onBackground: undefined
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,h,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline',
    onBackground: undefined
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,L,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined
  }
}`,...(b=(L=s.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,S,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    onBackground: 'dark'
  },
  decorators: [Story => <div style={{
    background: '#004699',
    display: 'inline',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,I,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    onBackground: 'light'
  },
  decorators: [Story => <div style={{
    background: '#FFE600',
    display: 'inline',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const W=["Standalone","StandaloneBold","Inline","InList","onDarkBackground","onLightBackground"];export{s as InList,t as Inline,r as Standalone,o as StandaloneBold,W as __namedExportsOrder,O as default,d as onDarkBackground,i as onLightBackground};
//# sourceMappingURL=Link.stories-d22d0bce.js.map
