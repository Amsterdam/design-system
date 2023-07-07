import{j as e}from"./jsx-runtime-94f6e698.js";import{P as V}from"./paragraph-e63faf48.js";import{I as E}from"./icon-d1edcb32.js";import{d as T}from"./index.esm-d3f37b54.js";import{c as F}from"./clsx.m-1229b3e0.js";import{r as J}from"./index-8db94870.js";const i=J.forwardRef(({children:a,variant:d,onBackground:c,className:I,...q},P)=>e.jsxs("a",{...q,ref:P,className:F("amsterdam-link",{"amsterdam-link--inline":d==="inline","amsterdam-link--standalone-bold":d==="standaloneBold","amsterdam-link--in-list":d==="inList","amsterdam-link--on-background-light":c==="light","amsterdam-link--on-background-dark":c==="dark"},I),children:[d==="inList"&&e.jsx(E,{svg:T,size:"level-7"}),a]}));i.displayName="Link";try{i.displayName="Link",i.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"standalone"'},{value:'"standaloneBold"'},{value:'"inList"'}]}},onBackground:{defaultValue:null,description:"",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const M={title:"CSS Components/Link",component:i,argTypes:{onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",standaloneBold:"standaloneBold",inline:"inline",inList:"inList"}},options:["standalone","standaloneBold","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:""}},r={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link">Linktekst</a>'}}}},s={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--standalone-bold">Linktekst</a>'}}},args:{variant:"standaloneBold"}},t={parameters:{docs:{source:{language:"html",code:'<p class="amsterdam-paragraph">Jouw <a href="#" class="amsterdam-link amsterdam-link--inline">typograaf</a> biedt mij zulke exquise schreven!</p>'}}},args:{children:"typograaf",href:"#",variant:"inline"},decorators:[a=>e.jsxs(V,{children:["Jouw ",e.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},n={parameters:{docs:{source:{language:"html",code:`
<a href="#" class="amsterdam-link amsterdam-link--in-list">
  <span class="amsterdam-icon amsterdam-icon-size-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill-rule="evenodd" d="m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z"></path>
    </svg>
  </span>
  Linktekst
</a>
        `}}},args:{children:"Linktekst",href:"#",variant:"inList"}},o={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--on-background-dark">Linktekst</a>'}}},args:{onBackground:"dark"},decorators:[a=>e.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:e.jsx(a,{})})]},l={parameters:{docs:{source:{language:"html",code:'<a href="#" class="amsterdam-link amsterdam-link--on-background-light">Linktekst</a>'}}},args:{onBackground:"light"},decorators:[a=>e.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:e.jsx(a,{})})]};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link">Linktekst</a>'
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,k,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var L,b,x;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,B,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var w,_,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const N=["Standalone","StandaloneBold","Inline","InList","onDarkBackground","onLightBackground"],G=Object.freeze(Object.defineProperty({__proto__:null,InList:n,Inline:t,Standalone:r,StandaloneBold:s,__namedExportsOrder:N,default:M,onDarkBackground:o,onLightBackground:l},Symbol.toStringTag,{value:"Module"}));export{t as I,G as L,r as S,s as a,n as b,l as c,o};
//# sourceMappingURL=Link.stories-9cf4484b.js.map
