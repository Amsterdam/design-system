import{j as n}from"./jsx-runtime-BlAj40OV.js";import{d as P}from"./index.esm-CBAebPiM.js";import{P as e}from"./PageMenu-C310ZVKQ.js";const M={title:"Components/Navigation/Page Menu",component:e,args:{alignEnd:!1}},r={args:{children:[n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Over deze site"},1)}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Privacy"},2)}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Cookies"},3)})]}},a={args:{alignEnd:!0,children:[n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",lang:"en",children:"English"},1)}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:"Contact"},2)}),n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",icon:P,children:"Zoeken"},3)})]}},i={args:{children:["Onderzoeken","Bezoeken","Archiveren","Nieuws","Themasites","Onderwijs","Steun ons","Organisatie","Contact"].map((h,k)=>n.jsx(e.Item,{children:n.jsx(e.Link,{href:"#",children:h},k)}))}};var s,t,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,d,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: ['Onderzoeken', 'Bezoeken', 'Archiveren', 'Nieuws', 'Themasites', 'Onderwijs', 'Steun ons', 'Organisatie', 'Contact'].map((label, index) => <PageMenu.Item>
        <PageMenu.Link href="#" key={index}>
          {label}
        </PageMenu.Link>
      </PageMenu.Item>)
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const p=["Default","Alignment","Wrapping"],j=Object.freeze(Object.defineProperty({__proto__:null,Alignment:a,Default:r,Wrapping:i,__namedExportsOrder:p,default:M},Symbol.toStringTag,{value:"Module"}));export{a as A,r as D,j as P,i as W};
