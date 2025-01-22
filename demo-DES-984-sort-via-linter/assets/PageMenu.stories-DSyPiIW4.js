import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{l as _}from"./index.esm-DfRxjY0e.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as M}from"./index-D7uoVdV3.js";import{I as v}from"./Icon-BoBhPfLP.js";const y=M.forwardRef(({children:r,className:t,icon:o,...c},u)=>e.jsx("li",{children:e.jsxs("a",{...c,ref:u,className:P("ams-page-menu__link",t),children:[r,o&&e.jsx(v,{size:"level-6",svg:o})]})}));y.displayName="PageMenu.Link";try{PageMenu.Link.displayName="PageMenu.Link",PageMenu.Link.__docgenInfo={description:"",displayName:"PageMenu.Link",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const j=M.forwardRef(({alignEnd:r,children:t,className:o,wrap:c=!0,...u},x)=>e.jsx("ul",{...u,ref:x,className:P("ams-page-menu",r&&"ams-page-menu--align-end",!c&&"ams-page-menu--no-wrap",o),children:t}));j.displayName="PageMenu";const n=Object.assign(j,{Link:y});try{n.displayName="PageMenu",n.__docgenInfo={description:"",displayName:"PageMenu",props:{alignEnd:{defaultValue:null,description:"Whether the items align to the end margin. Set to `true` if the Page Menu itself does so.",name:"alignEnd",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"true"},description:"Whether menu items should wrap if they don’t fit on a single row.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Components/Navigation/Page Menu",component:n,args:{alignEnd:!1,wrap:void 0}},a={args:{children:[e.jsx(n.Link,{href:"#",children:"Over deze site"},1),e.jsx(n.Link,{href:"#",children:"Privacy"},2),e.jsx(n.Link,{href:"#",children:"Cookies"},3)]}},i={args:{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",lang:"en",children:"English"},1),e.jsx(n.Link,{href:"#",children:"Contact"},2),e.jsx(n.Link,{href:"#",icon:_,children:"Zoeken"},3)]}},s={args:{children:[e.jsx(n.Link,{href:"#",children:"Onderzoeken"},1),e.jsx(n.Link,{href:"#",children:"Bezoeken"},2),e.jsx(n.Link,{href:"#",children:"Archiveren"},3),e.jsx(n.Link,{href:"#",children:"Nieuws"},4),e.jsx(n.Link,{href:"#",children:"Themasites"},5),e.jsx(n.Link,{href:"#",children:"Onderwijs"},6),e.jsx(n.Link,{href:"#",children:"Steun ons"},7),e.jsx(n.Link,{href:"#",children:"Organisatie"},8),e.jsx(n.Link,{href:"#",children:"Contact"},9)]}};var g,l,d;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link key={1} href="#">
        Over deze site
      </PageMenu.Link>, <PageMenu.Link key={2} href="#">
        Privacy
      </PageMenu.Link>, <PageMenu.Link key={3} href="#">
        Cookies
      </PageMenu.Link>]
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var k,h,p;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    alignEnd: true,
    children: [<PageMenu.Link key={1} href="#" lang="en">
        English
      </PageMenu.Link>, <PageMenu.Link key={2} href="#">
        Contact
      </PageMenu.Link>, <PageMenu.Link key={3} href="#" icon={SearchIcon}>
        Zoeken
      </PageMenu.Link>]
  }
}`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,m,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link key={1} href="#">
        Onderzoeken
      </PageMenu.Link>, <PageMenu.Link key={2} href="#">
        Bezoeken
      </PageMenu.Link>, <PageMenu.Link key={3} href="#">
        Archiveren
      </PageMenu.Link>, <PageMenu.Link key={4} href="#">
        Nieuws
      </PageMenu.Link>, <PageMenu.Link key={5} href="#">
        Themasites
      </PageMenu.Link>, <PageMenu.Link key={6} href="#">
        Onderwijs
      </PageMenu.Link>, <PageMenu.Link key={7} href="#">
        Steun ons
      </PageMenu.Link>, <PageMenu.Link key={8} href="#">
        Organisatie
      </PageMenu.Link>, <PageMenu.Link key={9} href="#">
        Contact
      </PageMenu.Link>]
  }
}`,...(L=(m=s.parameters)==null?void 0:m.docs)==null?void 0:L.source}}};const O=["Default","Alignment","Wrapping"],b=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Default:a,Wrapping:s,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{i as A,a as D,b as P,s as W};
