import{G as r,j as e,S as I}from"./index.esm-vQZ2Sa5u.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const u={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},K={children:{table:{disable:!0}}},Q={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]},paddingVertical:u,paddingTop:u,paddingBottom:u},U={as:{control:{type:"inline-radio"},options:["article","div","section"]},span:{control:{type:"number",min:1,max:12}},start:{control:{type:"number",min:1,max:12}}},h={title:"Layout/Grid",component:r,argTypes:K};({...h});({...h,component:r.Cell});const y=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),g={argTypes:Q,decorators:[a=>e.jsx(I,{children:e.jsx(a,{})})]},p={argTypes:U,decorators:[a=>e.jsx(I,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...J})=>e.jsx(r.Cell,{...J,children:a})},s={...g,args:{children:y}},n={...g,args:{children:y,compact:!0}},o={...g,args:{children:y,paddingVertical:"medium"}},l={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},t={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},c={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},i={...p,args:{as:"section"},render:({as:a})=>e.jsx(r,{children:e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})})};var S,b,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,G,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells,
    compact: true
  }
}`,...(T=(G=n.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var k,j,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var N,v,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var D,z,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,_,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,L,O;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    span: 'all'
  }
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var E,H,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(B=(H=m.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var R,q,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: StoryProps) => <Grid>
      <Grid.Cell as={as} span="all">
        <p className="amsterdam-docs-pink-box amsterdam-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
      </Grid.Cell>
    </Grid>
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const W=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],Y=Object.freeze(Object.defineProperty({__proto__:null,Compact:n,ConfigureGridVariants:c,CustomTagName:i,Default:s,SpanAllColumns:d,SpanMultipleColumns:t,StartPosition:m,VerticalGap:l,VerticalSpace:o,__namedExportsOrder:W,default:h},Symbol.toStringTag,{value:"Module"}));export{n as C,Y as G,t as S,o as V,l as a,c as b,d as c,m as d,i as e};
