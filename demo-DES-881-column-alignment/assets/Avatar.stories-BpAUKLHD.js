import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as P}from"./index.esm-DY3iRp4W.js";import{A as b}from"./Avatar-CRAAVM1p.js";import{H as j}from"./Header-D026jJt7.js";import{P as n}from"./PageMenu-uyrCXmgZ.js";const x={title:"Components/Feedback/Avatar",component:b,args:{label:"DS",imageSrc:""}},r={},a={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},s={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:k=>e.jsx(j,{links:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Contact"}),e.jsx(n.Link,{href:"#",icon:P,children:"Zoeken"}),e.jsx("li",{children:e.jsx(b,{...k})})]})})};var t,c,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var S,f,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'DS'
  },
  render: args => <Header links={<PageMenu alignEnd>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <li>
            <Avatar {...args} />
          </li>
        </PageMenu>} />
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const v=["Default","WithPicture","FallbackIcon","InAHeader"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FallbackIcon:s,InAHeader:o,WithPicture:a,__namedExportsOrder:v,default:x},Symbol.toStringTag,{value:"Module"}));export{D as A,s as F,o as I,a as W};
