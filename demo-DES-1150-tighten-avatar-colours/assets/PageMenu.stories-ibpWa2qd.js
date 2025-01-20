import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{l as _}from"./index.esm-X3U7dYaT.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as M}from"./index-D7uoVdV3.js";import{I as v}from"./Icon-BoBhPfLP.js";const y=M.forwardRef(({children:r,className:t,icon:o,...c},u)=>e.jsx("li",{children:e.jsxs("a",{...c,ref:u,className:P("ams-page-menu__link",t),children:[r,o&&e.jsx(v,{svg:o,size:"level-6"})]})}));y.displayName="PageMenu.Link";try{PageMenu.Link.displayName="PageMenu.Link",PageMenu.Link.__docgenInfo={description:"",displayName:"PageMenu.Link",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const j=M.forwardRef(({alignEnd:r,children:t,className:o,wrap:c=!0,...u},x)=>e.jsx("ul",{...u,className:P("ams-page-menu",r&&"ams-page-menu--align-end",!c&&"ams-page-menu--no-wrap",o),ref:x,children:t}));j.displayName="PageMenu";const n=Object.assign(j,{Link:y});try{n.displayName="PageMenu",n.__docgenInfo={description:"",displayName:"PageMenu",props:{alignEnd:{defaultValue:null,description:"Whether the items align to the end margin. Set to `true` if the Page Menu itself does so.",name:"alignEnd",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"true"},description:"Whether menu items should wrap if they don’t fit on a single row.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Components/Navigation/Page Menu",component:n,args:{alignEnd:!1,wrap:void 0}},a={args:{children:[e.jsx(n.Link,{href:"#",children:"Over deze site"},1),e.jsx(n.Link,{href:"#",children:"Privacy"},2),e.jsx(n.Link,{href:"#",children:"Cookies"},3)]}},i={args:{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",lang:"en",children:"English"},1),e.jsx(n.Link,{href:"#",children:"Contact"},2),e.jsx(n.Link,{href:"#",icon:_,children:"Zoeken"},3)]}},s={args:{children:[e.jsx(n.Link,{href:"#",children:"Onderzoeken"},1),e.jsx(n.Link,{href:"#",children:"Bezoeken"},2),e.jsx(n.Link,{href:"#",children:"Archiveren"},3),e.jsx(n.Link,{href:"#",children:"Nieuws"},4),e.jsx(n.Link,{href:"#",children:"Themasites"},5),e.jsx(n.Link,{href:"#",children:"Onderwijs"},6),e.jsx(n.Link,{href:"#",children:"Steun ons"},7),e.jsx(n.Link,{href:"#",children:"Organisatie"},8),e.jsx(n.Link,{href:"#",children:"Contact"},9)]}};var g,l,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link href="#" key={1}>
        Over deze site
      </PageMenu.Link>, <PageMenu.Link href="#" key={2}>
        Privacy
      </PageMenu.Link>, <PageMenu.Link href="#" key={3}>
        Cookies
      </PageMenu.Link>]
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var k,h,p;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    alignEnd: true,
    children: [<PageMenu.Link href="#" key={1} lang="en">
        English
      </PageMenu.Link>, <PageMenu.Link href="#" key={2}>
        Contact
      </PageMenu.Link>, <PageMenu.Link href="#" key={3} icon={SearchIcon}>
        Zoeken
      </PageMenu.Link>]
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,m,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link href="#" key={1}>
        Onderzoeken
      </PageMenu.Link>, <PageMenu.Link href="#" key={2}>
        Bezoeken
      </PageMenu.Link>, <PageMenu.Link href="#" key={3}>
        Archiveren
      </PageMenu.Link>, <PageMenu.Link href="#" key={4}>
        Nieuws
      </PageMenu.Link>, <PageMenu.Link href="#" key={5}>
        Themasites
      </PageMenu.Link>, <PageMenu.Link href="#" key={6}>
        Onderwijs
      </PageMenu.Link>, <PageMenu.Link href="#" key={7}>
        Steun ons
      </PageMenu.Link>, <PageMenu.Link href="#" key={8}>
        Organisatie
      </PageMenu.Link>, <PageMenu.Link href="#" key={9}>
        Contact
      </PageMenu.Link>]
  }
}`,...(L=(m=s.parameters)==null?void 0:m.docs)==null?void 0:L.source}}};const O=["Default","Alignment","Wrapping"],b=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Default:a,Wrapping:s,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{i as A,a as D,b as P,s as W};
