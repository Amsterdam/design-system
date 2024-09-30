import{j as e}from"./jsx-runtime-BlAj40OV.js";import{j as N}from"./index.esm-DUIRolM2.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";import{I as j}from"./Icon-msbkstIT.js";const g=m.forwardRef(({children:a,className:i,icon:r,rank:s,...t},o)=>e.jsx("li",{className:d(s==="secondary"&&"ams-page-menu__item--secondary"),children:e.jsxs("button",{...t,className:d("ams-page-menu__button",i),ref:o,type:"button",children:[a,r&&e.jsx(j,{svg:r,size:"level-6"})]})}));g.displayName="PageMenuButton";try{g.displayName="PageMenuButton",g.__docgenInfo={description:"",displayName:"PageMenuButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},rank:{defaultValue:null,description:"Secondary items only appear in the Page Menu if there is enough space for them.",name:"rank",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}}}}}catch{}const x=m.forwardRef(({children:a,className:i,icon:r,rank:s,...t},o)=>e.jsx("li",{className:d(s==="secondary"&&"ams-page-menu__item--secondary"),children:e.jsxs("a",{...t,ref:o,className:d("ams-page-menu__link",i),children:[a,r&&e.jsx(j,{svg:r,size:"level-6"})]})}));x.displayName="PageMenu.Link";try{PageMenu.Link.displayName="PageMenu.Link",PageMenu.Link.__docgenInfo={description:"",displayName:"PageMenu.Link",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},rank:{defaultValue:null,description:"Secondary items only appear in the Page Menu if there is enough space for them.",name:"rank",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}}}}}catch{}const v=m.forwardRef(({alignEnd:a,children:i,className:r,wrap:s=!0,...t},o)=>e.jsx("ul",{...t,className:d("ams-page-menu",a&&"ams-page-menu--align-end",!s&&"ams-page-menu--no-wrap",r),ref:o,children:i}));v.displayName="PageMenu";const n=Object.assign(v,{Button:g,Link:x});try{n.displayName="PageMenu",n.__docgenInfo={description:"",displayName:"PageMenu",props:{alignEnd:{defaultValue:null,description:"Whether the items align to the end margin. Set to `true` if the Page Menu itself does so.",name:"alignEnd",required:!1,type:{name:"boolean"}},wrap:{defaultValue:{value:"true"},description:"Whether menu items should wrap if they don’t fit on a single row.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Navigation/Page Menu",component:n,args:{alignEnd:!1,wrap:void 0}},u={args:{children:[e.jsx(n.Link,{href:"#",children:"Over deze site"},1),e.jsx(n.Link,{href:"#",children:"Privacy"},2),e.jsx(n.Link,{href:"#",children:"Cookies"},3)]}},c={args:{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",lang:"en",children:"English"},1),e.jsx(n.Link,{href:"#",children:"Contact"},2),e.jsx(n.Link,{href:"#",icon:N,children:"Zoeken"},3)]}},l={args:{children:[e.jsx(n.Link,{href:"#",children:"Onderzoeken"},1),e.jsx(n.Link,{href:"#",children:"Bezoeken"},2),e.jsx(n.Link,{href:"#",children:"Archiveren"},3),e.jsx(n.Link,{href:"#",children:"Nieuws"},4),e.jsx(n.Link,{href:"#",children:"Themasites"},5),e.jsx(n.Link,{href:"#",children:"Onderwijs"},6),e.jsx(n.Link,{href:"#",children:"Steun ons"},7),e.jsx(n.Link,{href:"#",children:"Organisatie"},8),e.jsx(n.Link,{href:"#",children:"Contact"},9)]}};var p,h,k;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Link href="#" key={1}>
        Over deze site
      </PageMenu.Link>, <PageMenu.Link href="#" key={2}>
        Privacy
      </PageMenu.Link>, <PageMenu.Link href="#" key={3}>
        Cookies
      </PageMenu.Link>]
  }
}`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,P,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var L,M,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const w=["Default","Alignment","Wrapping"],C=Object.freeze(Object.defineProperty({__proto__:null,Alignment:c,Default:u,Wrapping:l,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{c as A,u as D,C as P,l as W};
