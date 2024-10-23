import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as _,d as r}from"./index.esm-Di-LCyJU.js";import{j as A,d as L}from"./index.esm-CBAebPiM.js";import{c as w}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{I as D}from"./Image-CVzrCme5.js";import{I as E}from"./Icon-msbkstIT.js";const N=({imageSrc:a,initials:s})=>a?e.jsx(D,{src:a,alt:""}):s.length?e.jsx("span",{"aria-hidden":!0,children:s}):e.jsx(E,{svg:A,size:"level-6"}),c=C.forwardRef(({label:a,imageSrc:s,className:j,color:y="blue",...P},k)=>{const i=a.slice(0,2).toUpperCase(),M=i.length===0?"Gebruiker":`Initialen gebruiker: ${i}`;return e.jsxs("span",{...P,ref:k,className:w("ams-avatar",`ams-avatar--${y}`,s&&"ams-avatar--has-image",j),children:[e.jsx("span",{className:"ams-visually-hidden",children:M}),e.jsx(N,{imageSrc:s,initials:i})]})});c.displayName="Avatar";try{c.displayName="Avatar",c.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const T={title:"Components/Feedback/Avatar",component:c,args:{label:"DS",imageSrc:""}},t={},n={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},l={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:a=>e.jsx(_,{menu:e.jsxs(r,{alignEnd:!0,children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Contact"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",icon:L,children:"Zoeken"})}),e.jsx(r.Item,{children:e.jsx(c,{...a})})]})})};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,f,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var I,S,x;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'DS'
  },
  render: args => <Header menu={<PageMenu alignEnd>
          <PageMenu.Item>
            <PageMenu.Link href="#">Contact</PageMenu.Link>
          </PageMenu.Item>
          <PageMenu.Item>
            <PageMenu.Link href="#" icon={SearchIcon}>
              Zoeken
            </PageMenu.Link>
          </PageMenu.Item>
          <PageMenu.Item>
            <Avatar {...args} />
          </PageMenu.Item>
        </PageMenu>} />
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const q=["Default","WithImage","FallbackIcon","InAHeader"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FallbackIcon:l,InAHeader:o,WithImage:n,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{Z as A,l as F,o as I,n as W};
