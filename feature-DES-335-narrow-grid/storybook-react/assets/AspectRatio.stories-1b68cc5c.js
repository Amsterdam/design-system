import{A as b,j as i}from"./index.esm-a9b442ce.js";const A={title:"Layout/Aspect Ratio",component:b,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["extra-wide","wide","square","tall","extra-tall"]}},parameters:{docs:{canvas:{sourceState:"hidden"}}}},p={"extra-wide":{image:"https://picsum.photos/1600/900",maxWidth:"888px"},wide:{image:"https://picsum.photos/1000/800",maxWidth:"625px"},square:{image:"https://picsum.photos/800/800",maxWidth:"500px"},tall:{image:"https://picsum.photos/800/1000",maxWidth:"400px"},"extra-tall":{image:"https://picsum.photos/900/1600",maxWidth:"300px"}},a={decorators:[e=>i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(e,{})})],render:({ratio:e})=>i.jsx(b,{ratio:e,style:{maxWidth:e?p[e].maxWidth:"500px"},children:i.jsx("img",{alt:"Voorbeeld van een afbeelding",src:e?p[e].image:"https://picsum.photos/800/800",style:{width:"100%"}})})},r={...a,parameters:{docs:{canvas:{sourceState:"shown"}}}},t={...a,args:{ratio:"extra-wide"}},s={...a,args:{ratio:"wide"}},o={...a,args:{ratio:"square"}},n={...a,args:{ratio:"tall"}},c={...a,args:{ratio:"extra-tall"}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,S,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,W,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(w=(W=o.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var f,j,q;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var E,v,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-tall'
  }
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const R=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ExtraTall:c,ExtraWide:t,Square:o,Tall:n,Wide:s,__namedExportsOrder:R,default:A},Symbol.toStringTag,{value:"Module"}));export{C as A,t as E,o as S,n as T,s as W,c as a};
//# sourceMappingURL=AspectRatio.stories-1b68cc5c.js.map
