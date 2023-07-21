import{j as e}from"./jsx-runtime-ffb262ed.js";/* empty css                  */import{I as T}from"./Icon-65b888a8.js";import{d as z}from"./index.esm-63fc0a45.js";import{c as F}from"./clsx-1229b3e0.js";import{r as M}from"./index-76fb7be0.js";import{P as N}from"./Paragraph-8d413420.js";const l=M.forwardRef(({children:a,variant:d,onBackground:c,className:P,...V},E)=>e.jsxs("a",{...V,ref:E,className:F("amsterdam-link",{"amsterdam-link--inline":d==="inline","amsterdam-link--standalone-bold":d==="standaloneBold","amsterdam-link--in-list":d==="inList","amsterdam-link--on-background-light":c==="light","amsterdam-link--on-background-dark":c==="dark"},P),children:[d==="inList"&&e.jsx(T,{svg:z,size:"level-7"}),a]}));l.displayName="Link";try{l.displayName="Link",l.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'},{value:'"standaloneBold"'},{value:'"inList"'}]}},onBackground:{defaultValue:null,description:"",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const w={title:"Link",component:l,argTypes:{onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",standaloneBold:"standaloneBold",inline:"inline",inList:"inList"}},options:["standalone","standaloneBold","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#"}},n={args:{onBackground:void 0}},r={args:{variant:"standaloneBold",onBackground:void 0}},o={args:{children:"typograaf",href:"#",variant:"inline",onBackground:void 0},decorators:[a=>e.jsxs(N,{children:["Jouw ",e.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},t={args:{children:"Linktekst",href:"#",variant:"inList",onBackground:void 0}},s={args:{onBackground:"dark"},decorators:[a=>e.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:e.jsx(a,{})})]},i={args:{onBackground:"light"},decorators:[a=>e.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:e.jsx(a,{})})]};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onBackground: undefined // Workaround to avoid 'onBackground' being set to an empty function
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,k,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'standaloneBold',
    onBackground: undefined
  }
}`,...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,h,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline',
    onBackground: undefined
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,L,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined
  }
}`,...(b=(L=t.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var S,x,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var _,I,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const H=["Standalone","StandaloneBold","Inline","InList","onDarkBackground","onLightBackground"],G=Object.freeze(Object.defineProperty({__proto__:null,InList:t,Inline:o,Standalone:n,StandaloneBold:r,__namedExportsOrder:H,default:w,onDarkBackground:s,onLightBackground:i},Symbol.toStringTag,{value:"Module"}));export{o as I,G as L,n as S,r as a,t as b,i as c,s as o};
//# sourceMappingURL=Link.stories-b3075c2f.js.map
