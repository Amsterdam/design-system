import{j as e}from"./jsx-runtime-94f6e698.js";import{P}from"./paragraph-e63faf48.js";import{I as E,d as F}from"./icon-d6d61983.js";import{c as J}from"./clsx.m-1229b3e0.js";import{r as N}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const d=N.forwardRef(({children:a,variant:r,onBackground:m,className:z,...I},V)=>e.jsxs("a",{...I,ref:V,className:J("amsterdam-link",{"amsterdam-link--inline":r==="inline","amsterdam-link--standalone-bold":r==="standaloneBold","amsterdam-link--in-list":r==="inList","amsterdam-link--on-background-light":m==="light","amsterdam-link--on-background-dark":m==="dark"},z),children:[r==="inList"&&e.jsx(E,{svg:F,size:"level-7"}),a]}));d.displayName="Link";try{d.displayName="Link",d.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'},{value:'"standaloneBold"'},{value:'"inList"'}]}},onBackground:{defaultValue:null,description:"",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const D={title:"CSS Components/Link",component:d,argTypes:{onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",standaloneBold:"standaloneBold",inline:"inline",inList:"inList"}},options:["standalone","standaloneBold","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:""}},s={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link">Linktekst</a>'}}}},t={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--standalone-bold">Linktekst</a>'}}},args:{variant:"standaloneBold"}},n={parameters:{docs:{source:{language:"html",code:'<p class="amsterdam-paragraph">Jouw <a href="#" class="amsterdam-link amsterdam-link--inline">typograaf</a> biedt mij zulke exquise schreven!</p>'}}},args:{children:"typograaf",href:"#",variant:"inline"},decorators:[a=>e.jsxs(P,{children:["Jouw ",e.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},l={parameters:{docs:{source:{language:"html",code:`
<a href="#" class="amsterdam-link amsterdam-link--in-list">
  <span class="amsterdam-icon amsterdam-icon-size-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill-rule="evenodd" d="m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z"></path>
    </svg>
  </span>
  Linktekst
</a>
        `}}},args:{children:"Linktekst",href:"#",variant:"inList"}},o={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--on-background-dark">Linktekst</a>'}}},args:{onBackground:"dark"},decorators:[a=>e.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:e.jsx(a,{})})]},i={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--on-background-light">Linktekst</a>'}}},args:{onBackground:"light"},decorators:[a=>e.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:e.jsx(a,{})})]};var c,u,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link">Linktekst</a>'
      }
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,k,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--standalone-bold">Linktekst</a>'
      }
    }
  },
  args: {
    variant: 'standaloneBold'
  }
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw <a href="#" class="amsterdam-link amsterdam-link--inline">typograaf</a> biedt mij zulke exquise schreven!</p>'
      }
    }
  },
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var L,b,x;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: \`
<a href="#" class="amsterdam-link amsterdam-link--in-list">
  <span class="amsterdam-icon amsterdam-icon-size-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill-rule="evenodd" d="m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z"></path>
    </svg>
  </span>
  Linktekst
</a>
        \`
      }
    }
  },
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList'
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,B,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--on-background-dark">Linktekst</a>'
      }
    }
  },
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
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var j,_,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--on-background-light">Linktekst</a>'
      }
    }
  },
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
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const O=["Standalone","StandaloneBold","Inline","InList","Dark","Light"];export{o as Dark,l as InList,n as Inline,i as Light,s as Standalone,t as StandaloneBold,O as __namedExportsOrder,D as default};
//# sourceMappingURL=Link.stories-3baba739.js.map
