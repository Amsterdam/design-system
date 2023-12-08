import{G as S,j as e,S as z}from"./index.esm--0_0zttf.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";const N={title:"Layout/Grid Cell",component:S.Cell,argTypes:{span:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]},start:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]}},tags:["hidden"]},o={decorators:[k=>e.jsx(z,{children:e.jsx(S,{children:e.jsx(k,{})})})]},a={...o,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},r={...o,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},s={...o,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),fullWidth:!0}},t={...o,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:2,start:2}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,h,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    fullWidth: true
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,x,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 2,
    start: 2
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const v=["Default","MultipleSizes","FullWidth","StartPosition"];export{a as Default,s as FullWidth,r as MultipleSizes,t as StartPosition,v as __namedExportsOrder,N as default};
