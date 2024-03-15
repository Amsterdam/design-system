import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as k,H as x,d as t,S as y}from"./index.esm-Bi2ozn7m.js";const j={title:"Components/Feedback/Avatar",component:k,args:{label:"DS",imageSrc:""},argTypes:{color:{control:{type:"select"},options:["blue","dark-blue","dark-green","green","magenta","orange","purple","red","yellow"],selected:"dark-blue"}}},r={},a={args:{label:""}},n={args:{label:"PS",imageSrc:"https://i.pravatar.cc/200"}},s={decorators:[f=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(f,{})})],render:()=>e.jsx(x,{style:{width:"100%"},title:"Dashboard",links:e.jsxs(t,{children:[e.jsx(t.Link,{href:"#",children:"Contact"}),e.jsx(t.Link,{href:"#",icon:y,children:"Zoeken"}),e.jsx(k,{label:"DS"})]})})};var o,c,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: ''
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/200'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5rem'
  }}>
        <Story />
      </div>],
  render: () => {
    return <Header style={{
      width: '100%'
    }} title="Dashboard" links={<PageMenu>
            <PageMenu.Link href="#">Contact</PageMenu.Link>
            <PageMenu.Link href="#" icon={SearchIcon}>
              Zoeken
            </PageMenu.Link>
            <Avatar label={'DS'} />
          </PageMenu>}></Header>;
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const v=["Default","WithoutLabel","WithImageSrc","InAHeader"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InAHeader:s,WithImageSrc:n,WithoutLabel:a,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{L as A,s as I,a as W,n as a};
