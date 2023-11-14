import{A as W,j as n,r as R}from"./index.esm-76bf233d.js";const b={title:"Layout/Aspect Ratio",component:W,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["x-wide","wide","square","tall","x-tall"]}}},O={"x-wide":{image:"https://picsum.photos/640/360"},wide:{image:"https://picsum.photos/450/360"},square:{image:"https://picsum.photos/360/360"},tall:{image:"https://picsum.photos/360/450"},"x-tall":{image:"https://picsum.photos/360/640"}},e={decorators:[i=>n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(i,{})})],render:({ratio:i})=>n.jsx(W,{ratio:i,children:n.jsx(R,{alt:"",src:O[i??"square"].image})})},a={...e},r={...e,args:{ratio:"x-wide"}},s={...e,args:{ratio:"wide"}},t={...e,args:{ratio:"square"}},o={...e,args:{ratio:"tall"}},c={...e,args:{ratio:"x-tall"}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-wide'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,S,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,h,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,q,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var E,_,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-tall'
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const v=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ExtraTall:c,ExtraWide:r,Square:t,Tall:o,Wide:s,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{D as A,r as E,t as S,o as T,s as W,c as a};
//# sourceMappingURL=AspectRatio.stories-2515603c.js.map
