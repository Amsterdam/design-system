import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as A,b as L}from"./index.esm-DTv5ro-2.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as D}from"./index-uCp2LrAq.js";import{V as w}from"./VisuallyHidden-CgdwkxFN.js";import{I as H}from"./Image-Bf5zYcta.js";import{I as C}from"./Icon-j44OzEOs.js";import{H as T}from"./Header-eLIQdyat.js";import{P as c}from"./PageMenu-C-9UIlX6.js";const V=({imageSrc:a,initials:r})=>a?e.jsx(H,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(C,{svg:A,size:"level-6"}),l=D.forwardRef(({label:a,imageSrc:r,className:j,color:y="dark-blue",...P},_)=>{const i=a.slice(0,2).toUpperCase(),I=i.length===0?"Gebruiker":`Initialen gebruiker: ${i}`;return e.jsxs("span",{...P,ref:_,className:M("ams-avatar",`ams-avatar--${y}`,r&&"ams-avatar--has-image",j),children:[e.jsx(w,{children:I}),e.jsx(V,{imageSrc:r,initials:i})]})});l.displayName="Avatar";try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"dark-blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"dark-blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const q={title:"Components/Feedback/Avatar",component:l,args:{label:"DS",imageSrc:""}},s={},n={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},t={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:a=>e.jsx(T,{links:e.jsxs(c,{children:[e.jsx(c.Link,{href:"#",children:"Contact"}),e.jsx(c.Link,{href:"#",icon:L,children:"Zoeken"}),e.jsx("li",{children:e.jsx(l,{...a})})]}),title:"Dashboard"})};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,k,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const F=["Default","WithPicture","FallbackIcon","InAHeader"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:t,InAHeader:o,WithPicture:n,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{U as A,t as F,o as I,n as W};
