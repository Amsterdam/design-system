import{j as e}from"./jsx-runtime-CKrituN3.js";import{a8 as D,k as C,h as m,l as N}from"./index.esm-6x9pi5Wx.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as _}from"./index-CBqU2yxZ.js";import{V as T}from"./VisuallyHidden-BSYh8v1W.js";import{I as w}from"./Icon-D7XRVDhl.js";const p=_.forwardRef(({className:a,cover:r=!1,...c},i)=>e.jsx("img",{...c,ref:i,className:P("ams-image",r&&"ams-image--cover",a)}));p.displayName="Image";p.__docgenInfo={description:"",methods:[],displayName:"Image",props:{cover:{required:!1,tsType:{name:"Boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const H=({imageSrc:a,initials:r})=>a?e.jsx(p,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(w,{svg:D,size:"level-6"}),l=_.forwardRef(({label:a,imageSrc:r,className:c,color:i="dark-blue",...A},L)=>{const d=a.slice(0,2).toUpperCase(),M=d.length===0?"Gebruiker":`Initialen gebruiker: ${d}`;return e.jsxs("span",{...A,ref:L,className:P("ams-avatar",`ams-avatar--${i}`,r&&"ams-avatar--has-image",c),children:[e.jsx(T,{children:M}),e.jsx(H,{imageSrc:r,initials:d})]})});l.displayName="Avatar";l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof avatarColors)[number]"},description:"",defaultValue:{value:"'dark-blue'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const q={title:"Components/Feedback/Avatar",component:l,args:{label:"DS",imageSrc:""},argTypes:{color:{control:{type:"select"},options:["blue","dark-blue","dark-green","green","magenta","orange","purple","red","yellow"],selected:"dark-blue"}}},s={},n={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},t={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:a=>e.jsx(C,{links:e.jsxs(m,{children:[e.jsx(m.Link,{href:"#",children:"Contact"}),e.jsx(m.Link,{href:"#",icon:N,children:"Zoeken"}),e.jsx("li",{children:e.jsx(l,{...a})})]}),title:"Dashboard"})};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,S,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var j,y,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'DS'
  },
  render: args => <Header links={<PageMenu>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <li>
            <Avatar {...args} />
          </li>
        </PageMenu>} title="Dashboard" />
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const F=["Default","WithPicture","FallbackIcon","InAHeader"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:t,InAHeader:o,WithPicture:n,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{Z as A,t as F,o as I,n as W};
