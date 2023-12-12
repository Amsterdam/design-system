import{G as r,j as e,q as R}from"./index.esm-l3Gw-8NQ.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const g={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},q={children:{table:{disable:!0}}},B={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]},paddingVertical:g,paddingTop:g,paddingBottom:g},L={span:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]},start:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]}},u={title:"Layout/Grid",component:r,argTypes:q};({...u});({...u,component:r.Cell});const i={argTypes:B,decorators:[a=>e.jsx(R,{children:e.jsx(a,{})})]},p={argTypes:L,decorators:[a=>e.jsx(R,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...E})=>e.jsx(r.Cell,{...E,children:a})},s={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a))},name:"Ruimtelijk"},o={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0},name:"Compact"},n={...i,args:{children:Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),paddingVertical:"medium"},name:"Verticale marge"},t={...i,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"},name:"Verticale witruimte"},l={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4},name:"Meerdere kolommen"},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}},name:"Meerdere kolombreedtes"},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),fullWidth:!0},name:"Volledige breedte"},c={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:2,start:2},name:"Startpositie"};var y,h,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />)
  },
  name: 'Ruimtelijk'
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,x,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  },
  name: 'Compact'
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,G,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    paddingVertical: 'medium'
  },
  name: 'Verticale marge'
}`,...(f=(G=n.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var j,A,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  },
  name: 'Verticale witruimte'
}`,...(T=(A=t.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var V,N,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  },
  name: 'Meerdere kolommen'
}`,...(D=(N=l.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var v,z,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  },
  name: 'Meerdere kolombreedtes'
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var _,M,W;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    fullWidth: true
  },
  name: 'Volledige breedte'
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,O,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 2,
    start: 2
  },
  name: 'Startpositie'
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const H=["Default","Compact","VerticalSpace","VerticalGap","CellSpan","CellSpans","FullWidth","StartPosition"],J=Object.freeze(Object.defineProperty({__proto__:null,CellSpan:l,CellSpans:m,Compact:o,Default:s,FullWidth:d,StartPosition:c,VerticalGap:t,VerticalSpace:n,__namedExportsOrder:H,default:u},Symbol.toStringTag,{value:"Module"}));export{o as C,d as F,J as G,c as S,n as V,t as a,l as b,m as c};
