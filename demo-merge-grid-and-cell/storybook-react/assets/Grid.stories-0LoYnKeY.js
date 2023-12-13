import{G as r,j as e,p as E}from"./index.esm-cNgDosLW.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const g={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},L={children:{table:{disable:!0}}},R={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]},paddingVertical:g,paddingTop:g,paddingBottom:g},q={span:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]},start:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]}},u={title:"Layout/Grid",component:r,argTypes:L};({...u});({...u,component:r.Cell});const i={argTypes:R,decorators:[a=>e.jsx(E,{children:e.jsx(a,{})})]},p={argTypes:q,decorators:[a=>e.jsx(E,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...B})=>e.jsx(r.Cell,{...B,children:a})},s={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a))}},o={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0}},t={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),paddingVertical:"medium"}},n={...i,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},l={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},c={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),fullWidth:!0}},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:2,start:2}};var y,h,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,k,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,G,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    paddingVertical: 'medium'
  }
}`,...(f=(G=t.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var A,j,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var N,V,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var v,z,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var w,W,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    fullWidth: true
  }
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var M,O,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 2,
    start: 2
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const H=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","FullWidthCell","StartPosition"],J=Object.freeze(Object.defineProperty({__proto__:null,Compact:o,ConfigureGridVariants:d,Default:s,FullWidthCell:c,SpanMultipleColumns:l,StartPosition:m,VerticalGap:n,VerticalSpace:t,__namedExportsOrder:H,default:u},Symbol.toStringTag,{value:"Module"}));export{o as C,c as F,J as G,l as S,t as V,n as a,d as b,m as c};
