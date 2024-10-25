import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as P,c}from"./index.esm-7Ed363Qq.js";import{i as L,j as M}from"./index.esm-DQgjFsBh.js";import{c as w}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{I as D}from"./Image-CVzrCme5.js";import{I as E}from"./Icon-msbkstIT.js";const N=({imageSrc:a,initials:r})=>a?e.jsx(D,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(E,{svg:L,size:"level-6"}),o=C.forwardRef(({label:a,imageSrc:r,className:y,color:j="blue",...I},_)=>{const i=a.slice(0,2).toUpperCase(),A=i.length===0?"Gebruiker":`Initialen gebruiker: ${i}`;return e.jsxs("span",{...I,ref:_,className:w("ams-avatar",`ams-avatar--${j}`,r&&"ams-avatar--has-image",y),children:[e.jsx("span",{className:"ams-visually-hidden",children:A}),e.jsx(N,{imageSrc:r,initials:i})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const T={title:"Components/Feedback/Avatar",component:o,args:{label:"DS",imageSrc:""}},s={},t={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},n={args:{imageSrc:void 0,label:""}},l={args:{label:"DS"},render:a=>e.jsx(P,{links:e.jsxs(c,{alignEnd:!0,children:[e.jsx(c.Link,{href:"#",children:"Contact"}),e.jsx(c.Link,{href:"#",icon:M,children:"Zoeken"}),e.jsx("li",{children:e.jsx(o,{...a})})]})})};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,b,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,x,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const q=["Default","WithImage","FallbackIcon","InAHeader"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:n,InAHeader:l,WithImage:t,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{Z as A,n as F,l as I,t as W};
