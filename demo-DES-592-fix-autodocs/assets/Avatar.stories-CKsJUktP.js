import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as A,s as L,b as M}from"./Icon-AGHld3Gl.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as H}from"./index-CBqU2yxZ.js";import{V as C}from"./VisuallyHidden-DSeislZq.js";import{I as V}from"./Image-V2IFqs5b.js";import{H as F}from"./Header-DWbEQcrb.js";import{P as i}from"./PageMenu-CxvVxmGM.js";const N=({imageSrc:a,initials:r})=>a?e.jsx(V,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(A,{svg:L,size:"level-6"}),l=H.forwardRef(({label:a,imageSrc:r,className:j,color:P="dark-blue",..._},y)=>{const c=a.slice(0,2).toUpperCase(),I=c.length===0?"Gebruiker":`Initialen gebruiker: ${c}`;return e.jsxs("span",{..._,ref:y,className:D("ams-avatar",`ams-avatar--${P}`,r&&"ams-avatar--has-image",j),children:[e.jsx(C,{children:I}),e.jsx(N,{imageSrc:r,initials:c})]})});l.displayName="Avatar";try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"dark-blue"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"dark-blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const q={title:"Components/Feedback/Avatar",component:l,args:{label:"DS",imageSrc:""}},s={},n={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},t={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:a=>e.jsx(F,{links:e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Contact"}),e.jsx(i.Link,{href:"#",icon:M,children:"Zoeken"}),e.jsx("li",{children:e.jsx(l,{...a})})]}),title:"Dashboard"})};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,k,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const E=["Default","WithPicture","FallbackIcon","InAHeader"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:t,InAHeader:o,WithPicture:n,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{T as A,t as F,o as I,n as W};
