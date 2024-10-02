import{j as e}from"./jsx-runtime-BlAj40OV.js";import{j as N}from"./index.esm-DUIRolM2.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as g}from"./index-Cs7sjTYM.js";import{I}from"./Icon-msbkstIT.js";const l=g.forwardRef(({children:a,className:t,icon:r,...s},i)=>e.jsxs("button",{...s,className:m("ams-page-menu__button",t),ref:i,type:"button",children:[a,r&&e.jsx(I,{svg:r,size:"level-6"})]}));l.displayName="PageMenuButton";try{l.displayName="PageMenuButton",l.__docgenInfo={description:"",displayName:"PageMenuButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const j=g.forwardRef(({children:a,className:t,rank:r,...s},i)=>e.jsx("li",{...s,className:m("ams-page-menu__item",r&&`ams-page-menu__item--${r}`,t),ref:i,children:a}));j.displayName="PageMenu.Item";try{PageMenu.Item.displayName="PageMenu.Item",PageMenu.Item.__docgenInfo={description:"",displayName:"PageMenu.Item",props:{rank:{defaultValue:null,description:"Secondary items only appear in the Page Menu if there is enough space for them.",name:"rank",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}}}}}catch{}const x=g.forwardRef(({children:a,className:t,icon:r,...s},i)=>e.jsxs("a",{...s,ref:i,className:m("ams-page-menu__link",t),children:[a,r&&e.jsx(I,{svg:r,size:"level-6"})]}));x.displayName="PageMenu.Link";try{PageMenu.Link.displayName="PageMenu.Link",PageMenu.Link.__docgenInfo={description:"",displayName:"PageMenu.Link",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}const L=g.forwardRef(({alignEnd:a,children:t,className:r,...s},i)=>e.jsx("ul",{...s,className:m("ams-page-menu",a&&"ams-page-menu--align-end",r),ref:i,children:t}));L.displayName="PageMenu";const n=Object.assign(L,{Button:l,Item:j,Link:x});try{n.displayName="PageMenu",n.__docgenInfo={description:"",displayName:"PageMenu",props:{alignEnd:{defaultValue:null,description:"Whether the items align to the end margin. Set to `true` if the Page Menu itself does so.",name:"alignEnd",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"Components/Navigation/Page Menu",component:n,args:{alignEnd:!1}},o={args:{children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Over deze site"},1)}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Privacy"},2)}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Cookies"},3)})]}},c={args:{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"},1)}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Contact"},2)}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",icon:N,children:"Zoeken"},3)})]}},u={args:{children:["Onderzoeken","Bezoeken","Archiveren","Nieuws","Themasites","Onderwijs","Steun ons","Organisatie","Contact"].map((a,t)=>e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:a},t)}))}};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<PageMenu.Item>
        <PageMenu.Link href="#" key={1}>
          Over deze site
        </PageMenu.Link>
      </PageMenu.Item>, <PageMenu.Item>
        <PageMenu.Link href="#" key={2}>
          Privacy
        </PageMenu.Link>
      </PageMenu.Item>, <PageMenu.Item>
        <PageMenu.Link href="#" key={3}>
          Cookies
        </PageMenu.Link>
      </PageMenu.Item>]
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var P,M,f;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    alignEnd: true,
    children: [<PageMenu.Item>
        <PageMenu.Link href="#" key={1} lang="en">
          English
        </PageMenu.Link>
      </PageMenu.Item>, <PageMenu.Item>
        <PageMenu.Link href="#" key={2}>
          Contact
        </PageMenu.Link>
      </PageMenu.Item>, <PageMenu.Item>
        <PageMenu.Link href="#" key={3} icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu.Item>]
  }
}`,...(f=(M=c.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var _,k,y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: ['Onderzoeken', 'Bezoeken', 'Archiveren', 'Nieuws', 'Themasites', 'Onderwijs', 'Steun ons', 'Organisatie', 'Contact'].map((label, index) => <PageMenu.Item>
        <PageMenu.Link href="#" key={index}>
          {label}
        </PageMenu.Link>
      </PageMenu.Item>)
  }
}`,...(y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const S=["Default","Alignment","Wrapping"],B=Object.freeze(Object.defineProperty({__proto__:null,Alignment:c,Default:o,Wrapping:u,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{c as A,o as D,B as P,u as W};
