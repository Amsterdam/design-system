import{G as r,j as e,r as B}from"./index.esm-xGaYUluS.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const g={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},R={children:{table:{disable:!0}}},q={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]},paddingVertical:g,paddingTop:g,paddingBottom:g},H={span:{control:{type:"number",min:1,max:12}},start:{control:{type:"number",min:1,max:12}}},u={title:"Layout/Grid",component:r,argTypes:R};({...u});({...u,component:r.Cell});const h=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),i={argTypes:q,decorators:[a=>e.jsx(B,{children:e.jsx(a,{})})]},p={argTypes:H,decorators:[a=>e.jsx(B,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...L})=>e.jsx(r.Cell,{...L,children:a})},s={...i,args:{children:h}},o={...i,args:{children:h,compact:!0}},t={...i,args:{children:h,paddingVertical:"medium"}},n={...i,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},l={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},c={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),fullWidth:!0}},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,C,G;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells,
    compact: true
  }
}`,...(G=(C=o.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var T,k,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var j,v,V;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var N,D,z;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(z=(D=l.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,w,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var W,F,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    fullWidth: true
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,P,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const I=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","FullWidthCell","StartPosition"],K=Object.freeze(Object.defineProperty({__proto__:null,Compact:o,ConfigureGridVariants:d,Default:s,FullWidthCell:c,SpanMultipleColumns:l,StartPosition:m,VerticalGap:n,VerticalSpace:t,__namedExportsOrder:I,default:u},Symbol.toStringTag,{value:"Module"}));export{o as C,c as F,K as G,l as S,t as V,n as a,d as b,m as c};
