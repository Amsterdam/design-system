import{j as e}from"./jsx-runtime-BlAj40OV.js";import{q as A,e as L}from"./index.esm-BpRbI1Jo.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as w}from"./index-Cs7sjTYM.js";import{I as q}from"./Image-CVzrCme5.js";import{I as C}from"./Icon-msbkstIT.js";import{H as D}from"./Header-P9ab5sMw.js";import{P as c}from"./PageMenu-uyrCXmgZ.js";const E=({imageSrc:a,initials:r})=>a?e.jsx(q,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(C,{svg:A,size:"level-6"}),o=w.forwardRef(({label:a,imageSrc:r,className:y,color:j="blue",...P},_)=>{const i=a.slice(0,2).toUpperCase(),I=i.length===0?"Gebruiker":`Initialen gebruiker: ${i}`;return e.jsxs("span",{...P,ref:_,className:M("ams-avatar",`ams-avatar--${j}`,r&&"ams-avatar--has-image",y),children:[e.jsx("span",{className:"ams-visually-hidden",children:I}),e.jsx(E,{imageSrc:r,initials:i})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const H={title:"Components/Feedback/Avatar",component:o,args:{label:"DS",imageSrc:""}},s={},t={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},n={args:{imageSrc:void 0,label:""}},l={args:{label:"DS"},render:a=>e.jsx(D,{links:e.jsxs(c,{alignEnd:!0,children:[e.jsx(c.Link,{href:"#",children:"Contact"}),e.jsx(c.Link,{href:"#",icon:L,children:"Zoeken"}),e.jsx("li",{children:e.jsx(o,{...a})})]})})};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,f,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,x,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const N=["Default","WithPicture","FallbackIcon","InAHeader"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:n,InAHeader:l,WithPicture:t,__namedExportsOrder:N,default:H},Symbol.toStringTag,{value:"Module"}));export{$ as A,n as F,l as I,t as W};
