import{A as R,j as c}from"./index.esm-e287e5e1.js";const b={title:"Layout/Aspect Ratio",component:R,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["extra-wide","wide","square","tall","extra-tall"]}}},n={"extra-wide":{image:"https://picsum.photos/1600/900",maxWidth:"888px"},wide:{image:"https://picsum.photos/1000/800",maxWidth:"625px"},square:{image:"https://picsum.photos/800/800",maxWidth:"500px"},tall:{image:"https://picsum.photos/800/1000",maxWidth:"400px"},"extra-tall":{image:"https://picsum.photos/900/1600",maxWidth:"300px"}},a={decorators:[e=>c.jsx("div",{style:{display:"flex",justifyContent:"center"},children:c.jsx(e,{})})],render:({ratio:e})=>c.jsx(R,{ratio:e,style:{maxWidth:e?n[e].maxWidth:"500px"},children:c.jsx("img",{alt:"",src:e?n[e].image:"https://picsum.photos/800/800",style:{width:"100%"}})})},r={...a},t={...a,args:{ratio:"extra-wide"}},s={...a,args:{ratio:"wide"}},o={...a,args:{ratio:"square"}},i={...a,args:{ratio:"tall"}},p={...a,args:{ratio:"extra-tall"}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const O=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ExtraTall:p,ExtraWide:t,Square:o,Tall:i,Wide:s,__namedExportsOrder:O,default:b},Symbol.toStringTag,{value:"Module"}));export{C as A,t as E,o as S,i as T,s as W,p as a};
//# sourceMappingURL=AspectRatio.stories-e6f5eb10.js.map
