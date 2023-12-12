import{b as O,j as p,I as v}from"./index.esm-gG64eURB.js";const C={title:"Layout/Aspect Ratio",component:O,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["2x-wide","x-wide","wide","square","tall","x-tall"]}}},I={"2x-wide":{image:"https://picsum.photos/1280/360"},"x-wide":{image:"https://picsum.photos/640/360"},wide:{image:"https://picsum.photos/450/360"},square:{image:"https://picsum.photos/360/360"},tall:{image:"https://picsum.photos/360/450"},"x-tall":{image:"https://picsum.photos/360/640"}},e={decorators:[n=>p.jsx("div",{style:{display:"flex",justifyContent:"center"},children:p.jsx(n,{})})],render:({ratio:n})=>p.jsx(O,{ratio:n,children:p.jsx(v,{alt:"",src:I[n??"square"].image})})},a={...e},r={...e,args:{ratio:"2x-wide"}},s={...e,args:{ratio:"x-wide"}},t={...e,args:{ratio:"wide"}},o={...e,args:{ratio:"square"}},i={...e,args:{ratio:"tall"}},c={...e,args:{ratio:"x-tall"}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: '2x-wide'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,y,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-wide'
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,w,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var j,E,q;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var W,b,_;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var D,A,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-tall'
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const z=["Default","DoubleExtraWide","ExtraWide","Wide","Square","Tall","ExtraTall"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,DoubleExtraWide:r,ExtraTall:c,ExtraWide:s,Square:o,Tall:i,Wide:t,__namedExportsOrder:z,default:C},Symbol.toStringTag,{value:"Module"}));export{M as A,r as D,s as E,o as S,i as T,t as W,c as a};
