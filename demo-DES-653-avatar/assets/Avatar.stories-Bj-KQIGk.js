import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as h,H as P,d as o,S as j}from"./index.esm-DnU9pB7h.js";const v={title:"Components/Feedback/Avatar",component:h,args:{label:"DS",imageSrc:""},argTypes:{color:{control:{type:"select"},options:["blue","dark-blue","dark-green","green","magenta","orange","purple","red","yellow"],selected:"dark-blue"}}},a={},r={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},s={args:{imageSrc:void 0,label:""}},n={args:{label:"DS"},render:f=>e.jsx(P,{links:e.jsxs(o,{children:[e.jsx(o.Link,{href:"#",children:"Contact"}),e.jsx(o.Link,{href:"#",icon:j,children:"Zoeken"}),e.jsx(h,{...f})]}),title:"Dashboard"})};var t,c,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var S,b,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'DS'
  },
  render: args => <Header links={<PageMenu>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <Avatar {...args} />
        </PageMenu>} title="Dashboard" />
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const x=["Default","WithPicture","FallbackIcon","InAHeader"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:a,FallbackIcon:s,InAHeader:n,WithPicture:r,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{D as A,s as F,n as I,r as W};
