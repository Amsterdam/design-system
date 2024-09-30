import{j as e}from"./jsx-runtime-BlAj40OV.js";import{j as N}from"./index.esm-DUIRolM2.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as d}from"./index-Cs7sjTYM.js";import{I as _}from"./Icon-msbkstIT.js";const l=d.forwardRef(({children:a,className:i,icon:r,...s},t)=>e.jsxs("button",{...s,className:g("ams-page-menu__button",i),ref:t,type:"button",children:[a,r&&e.jsx(_,{svg:r,size:"level-6"})]}));l.displayName="PageMenuButton";try{l.displayName="PageMenuButton",l.__docgenInfo={description:"",displayName:"PageMenuButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const j=d.forwardRef(({children:a,className:i,icon:r,...s},t)=>e.jsx("li",{children:e.jsxs("a",{...s,ref:t,className:g("ams-page-menu__link",i),children:[a,r&&e.jsx(_,{svg:r,size:"level-6"})]})}));j.displayName="PageMenu.Link";try{PageMenu.Link.displayName="PageMenu.Link",PageMenu.Link.__docgenInfo={description:"",displayName:"PageMenu.Link",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const x=d.forwardRef(({alignEnd:a,children:i,className:r,wrap:s=!0,...t},v)=>e.jsx("ul",{...t,className:g("ams-page-menu",a&&"ams-page-menu--align-end",!s&&"ams-page-menu--no-wrap",r),ref:v,children:i}));x.displayName="PageMenu";const n=Object.assign(x,{Button:l,Link:j});try{n.displayName="PageMenu",n.__docgenInfo={description:"",displayName:"PageMenu",props:{alignEnd:{defaultValue:null,description:"Whether the items align to the end margin. Set to `true` if the Page Menu itself does so.",name:"alignEnd",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"true"},description:"Whether menu items should wrap if they don’t fit on a single row.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Components/Navigation/Page Menu",component:n,args:{alignEnd:!1,wrap:void 0}},o={args:{children:[e.jsx(n.Link,{href:"#",children:"Over deze site"},1),e.jsx(n.Link,{href:"#",children:"Privacy"},2),e.jsx(n.Link,{href:"#",children:"Cookies"},3)]}},u={args:{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",lang:"en",children:"English"},1),e.jsx(n.Link,{href:"#",children:"Contact"},2),e.jsx(n.Link,{href:"#",icon:N,children:"Zoeken"},3)]}},c={args:{children:[e.jsx(n.Link,{href:"#",children:"Onderzoeken"},1),e.jsx(n.Link,{href:"#",children:"Bezoeken"},2),e.jsx(n.Link,{href:"#",children:"Archiveren"},3),e.jsx(n.Link,{href:"#",children:"Nieuws"},4),e.jsx(n.Link,{href:"#",children:"Themasites"},5),e.jsx(n.Link,{href:"#",children:"Onderwijs"},6),e.jsx(n.Link,{href:"#",children:"Steun ons"},7),e.jsx(n.Link,{href:"#",children:"Organisatie"},8),e.jsx(n.Link,{href:"#",children:"Contact"},9)]}};var k,h,p;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link href="#" key={1}>
        Over deze site
      </PageMenu.Link>, <PageMenu.Link href="#" key={2}>
        Privacy
      </PageMenu.Link>, <PageMenu.Link href="#" key={3}>
        Cookies
      </PageMenu.Link>]
  }
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var m,f,L;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(L=(f=u.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var P,M,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(M=c.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};const O=["Default","Alignment","Wrapping"],C=Object.freeze(Object.defineProperty({__proto__:null,Alignment:u,Default:o,Wrapping:c,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{u as A,o as D,C as P,c as W};
