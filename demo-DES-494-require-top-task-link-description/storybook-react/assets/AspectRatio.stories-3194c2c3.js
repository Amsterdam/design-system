import{A as R,j as c,r as b}from"./index.esm-76bf233d.js";const O={title:"Layout/Aspect Ratio",component:R,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["extra-wide","wide","square","tall","extra-tall"]}}},n={"extra-wide":{image:"https://picsum.photos/1600/900",maxWidth:"888px"},wide:{image:"https://picsum.photos/1000/800",maxWidth:"625px"},square:{image:"https://picsum.photos/800/800",maxWidth:"500px"},tall:{image:"https://picsum.photos/800/1000",maxWidth:"400px"},"extra-tall":{image:"https://picsum.photos/900/1600",maxWidth:"300px"}},e={decorators:[a=>c.jsx("div",{style:{display:"flex",justifyContent:"center"},children:c.jsx(a,{})})],render:({ratio:a})=>c.jsx(R,{ratio:a,style:{maxWidth:a?n[a].maxWidth:"500px"},children:c.jsx(b,{alt:"",src:a?n[a].image:"https://picsum.photos/800/800"})})},r={...e},t={...e,args:{ratio:"extra-wide"}},s={...e,args:{ratio:"wide"}},o={...e,args:{ratio:"square"}},i={...e,args:{ratio:"tall"}},p={...e,args:{ratio:"extra-tall"}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,S,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,W,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(f=(W=o.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var j,w,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(q=(w=i.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var E,_,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-tall'
  }
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const v=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ExtraTall:p,ExtraWide:t,Square:o,Tall:i,Wide:s,__namedExportsOrder:v,default:O},Symbol.toStringTag,{value:"Module"}));export{D as A,t as E,o as S,i as T,s as W,p as a};
//# sourceMappingURL=AspectRatio.stories-3194c2c3.js.map
