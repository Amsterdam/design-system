import{j as r}from"./jsx-runtime-BlAj40OV.js";import{I as z}from"./index.esm-BSTcZ1WW.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";const l=M.forwardRef(({children:e,className:N,ratio:C="square",...I},O)=>r.jsx("div",{...I,ref:O,className:L("ams-aspect-ratio",`ams-aspect-ratio--${C}`,N),children:e}));l.displayName="AspectRatio";try{l.displayName="AspectRatio",l.__docgenInfo={description:"",displayName:"AspectRatio",props:{ratio:{defaultValue:{value:"square"},description:"The dimensions.",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"wide"'},{value:'"x-wide"'},{value:'"x-tall"'},{value:'"tall"'},{value:'"2x-wide"'}]}}}}}catch{}const P={title:"Components/Layout/Aspect Ratio",component:l,args:{ratio:"square"},argTypes:{ratio:{control:"radio",options:["2x-wide","x-wide","wide","square","tall","x-tall"]}}},V={"2x-wide":{image:"https://picsum.photos/1152/360"},"x-wide":{image:"https://picsum.photos/640/360"},wide:{image:"https://picsum.photos/480/360"},square:{image:"https://picsum.photos/360/360"},tall:{image:"https://picsum.photos/360/480"},"x-tall":{image:"https://picsum.photos/360/640"}},a={decorators:[e=>r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(e,{})})],render:({ratio:e})=>r.jsx(l,{ratio:e,children:r.jsx(z,{alt:"",src:V[e??"square"].image})})},s={...a},t={...a,args:{ratio:"2x-wide"}},o={...a,args:{ratio:"x-wide"}},i={...a,args:{ratio:"wide"}},c={...a,args:{ratio:"square"}},p={...a,args:{ratio:"tall"}},n={...a,args:{ratio:"x-tall"}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: '2x-wide'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,f,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-wide'
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,T,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'wide'
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,v,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'square'
  }
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var E,R,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'tall'
  }
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var W,b,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    ratio: 'x-tall'
  }
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const $=["Default","DoubleExtraWide","ExtraWide","Wide","Square","Tall","ExtraTall"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,DoubleExtraWide:t,ExtraTall:n,ExtraWide:o,Square:c,Tall:p,Wide:i,__namedExportsOrder:$,default:P},Symbol.toStringTag,{value:"Module"}));export{H as A,t as D,o as E,c as S,p as T,i as W,n as a};
