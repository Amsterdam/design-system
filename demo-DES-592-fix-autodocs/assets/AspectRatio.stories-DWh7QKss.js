import{j as r}from"./jsx-runtime-CKrituN3.js";import{b as z}from"./index.esm-6x9pi5Wx.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as M}from"./index-CBqU2yxZ.js";const p=M.forwardRef(({children:a,className:C,ratio:N="square",...O},I)=>r.jsx("div",{...O,ref:I,className:L("ams-aspect-ratio",`ams-aspect-ratio--${N}`,C),children:a}));p.displayName="AspectRatio";p.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{required:!1,tsType:{name:"union",raw:"'x-tall' | 'tall' | 'square' | 'wide' | 'x-wide' | '2x-wide'",elements:[{name:"literal",value:"'x-tall'"},{name:"literal",value:"'tall'"},{name:"literal",value:"'square'"},{name:"literal",value:"'wide'"},{name:"literal",value:"'x-wide'"},{name:"literal",value:"'2x-wide'"}]},description:"",defaultValue:{value:"'square'",computed:!1}}}};const P={title:"Components/Layout/Aspect Ratio",component:p,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["2x-wide","x-wide","wide","square","tall","x-tall"]}}},V={"2x-wide":{image:"https://picsum.photos/1280/360"},"x-wide":{image:"https://picsum.photos/640/360"},wide:{image:"https://picsum.photos/450/360"},square:{image:"https://picsum.photos/360/360"},tall:{image:"https://picsum.photos/360/450"},"x-tall":{image:"https://picsum.photos/360/640"}},e={decorators:[a=>r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(a,{})})],render:({ratio:a})=>r.jsx(p,{ratio:a,children:r.jsx(z,{alt:"",src:V[a??"square"].image})})},t={...e},s={...e,args:{ratio:"2x-wide"}},o={...e,args:{ratio:"x-wide"}},i={...e,args:{ratio:"wide"}},l={...e,args:{ratio:"square"}},c={...e,args:{ratio:"tall"}},n={...e,args:{ratio:"x-tall"}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,g,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: '2x-wide'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var w,y,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-wide'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,h,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(q=(h=i.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var j,v,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var _,R,W;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var b,A,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-tall'
  }
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const $=["Default","DoubleExtraWide","ExtraWide","Wide","Square","Tall","ExtraTall"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:t,DoubleExtraWide:s,ExtraTall:n,ExtraWide:o,Square:l,Tall:c,Wide:i,__namedExportsOrder:$,default:P},Symbol.toStringTag,{value:"Module"}));export{H as A,s as D,o as E,l as S,c as T,i as W,n as a};
