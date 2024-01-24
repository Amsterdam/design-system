import{G as r,j as e,t as I}from"./index.esm-XR9-nNnb.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const u={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},J={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:u,paddingTop:u,paddingBottom:u},K={as:{control:{type:"inline-radio"},options:["article","div","section"]},span:{control:{type:"number",min:1,max:12}},start:{control:{type:"number",min:1,max:12}}},h={title:"Layout/Grid",component:r,argTypes:{children:{table:{disable:!0}}}};({...h});({...h,component:r.Cell});const y=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),g={argTypes:J,decorators:[a=>e.jsx(I,{children:e.jsx(a,{})})]},p={argTypes:K,decorators:[a=>e.jsx(I,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...Q})=>e.jsx(r.Cell,{...Q,children:a})},s={...g,args:{children:y}},n={...g,args:{children:y,compact:!0}},o={...g,args:{children:y,paddingVertical:"medium"}},l={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},t={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},c={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},i={...p,args:{as:"section"},render:({as:a})=>e.jsx(r,{children:e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})})};var b,x,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...GridStoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,G,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,_,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,L,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...GridCellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    span: 'all'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var E,H,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  }: GridCellProps) => <Grid>
      <Grid.Cell as={as} span="all">
        <p className="amsterdam-docs-pink-box amsterdam-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
      </Grid.Cell>
    </Grid>
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const U=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],X=Object.freeze(Object.defineProperty({__proto__:null,Compact:n,ConfigureGridVariants:d,CustomTagName:i,Default:s,SpanAllColumns:c,SpanMultipleColumns:t,StartPosition:m,VerticalGap:l,VerticalSpace:o,__namedExportsOrder:U,default:h},Symbol.toStringTag,{value:"Module"}));export{n as C,X as G,t as S,o as V,l as a,d as b,c,m as d,i as e};
