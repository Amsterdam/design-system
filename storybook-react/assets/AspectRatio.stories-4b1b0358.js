import{A as W,j as n,r as R}from"./index.esm-0a3ca4ab.js";const b={title:"Layout/Aspect Ratio",component:W,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["extra-wide","wide","square","tall","extra-tall"]}}},O={"extra-wide":{image:"https://picsum.photos/640/360"},wide:{image:"https://picsum.photos/450/360"},square:{image:"https://picsum.photos/360/360"},tall:{image:"https://picsum.photos/360/450"},"extra-tall":{image:"https://picsum.photos/360/640"}},e={decorators:[i=>n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(i,{})})],render:({ratio:i})=>n.jsx(W,{ratio:i,children:n.jsx(R,{alt:"",src:O[i??"square"].image})})},a={...e},r={...e,args:{ratio:"extra-wide"}},t={...e,args:{ratio:"wide"}},s={...e,args:{ratio:"square"}},o={...e,args:{ratio:"tall"}},c={...e,args:{ratio:"extra-tall"}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,S,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,h,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,q,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var E,_,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-tall'
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const v=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ExtraTall:c,ExtraWide:r,Square:s,Tall:o,Wide:t,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{D as A,r as E,s as S,o as T,t as W,c as a};
//# sourceMappingURL=AspectRatio.stories-4b1b0358.js.map
