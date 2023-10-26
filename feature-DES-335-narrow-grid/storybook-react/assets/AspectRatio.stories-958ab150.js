import{A,j as i}from"./index.esm-0adeae5b.js";const R={title:"Layout/Aspect Ratio",component:A,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["extra-wide","wide","square","tall","extra-tall"]}},parameters:{docs:{canvas:{sourceState:"hidden"}}}},p={"extra-wide":{image:"https://picsum.photos/1600/900",maxWidth:"888px"},wide:{image:"https://picsum.photos/1000/800",maxWidth:"625px"},square:{image:"https://picsum.photos/800/800",maxWidth:"500px"},tall:{image:"https://picsum.photos/800/1000",maxWidth:"400px"},"extra-tall":{image:"https://picsum.photos/900/1600",maxWidth:"300px"}},e={decorators:[a=>i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(a,{})})],render:({ratio:a})=>i.jsx(A,{ratio:a,style:{maxWidth:a?p[a].maxWidth:"500px"},children:i.jsx("img",{alt:"",src:a?p[a].image:"https://picsum.photos/800/800",style:{width:"100%"}})})},r={...e,parameters:{docs:{canvas:{sourceState:"shown"}}}},t={...e,args:{ratio:"extra-wide"}},s={...e,args:{ratio:"wide"}},o={...e,args:{ratio:"square"}},c={...e,args:{ratio:"tall"}},n={...e,args:{ratio:"extra-tall"}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(w=(W=o.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var f,j,q;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var E,_,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'extra-tall'
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const b=["Default","ExtraWide","Wide","Square","Tall","ExtraTall"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ExtraTall:n,ExtraWide:t,Square:o,Tall:c,Wide:s,__namedExportsOrder:b,default:R},Symbol.toStringTag,{value:"Module"}));export{C as A,t as E,o as S,c as T,s as W,n as a};
//# sourceMappingURL=AspectRatio.stories-958ab150.js.map
