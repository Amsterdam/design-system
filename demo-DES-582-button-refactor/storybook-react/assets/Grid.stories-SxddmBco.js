import{G as r,j as e,x as F}from"./index.esm-2HeWGB0Q.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const u={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},J={title:"Layout/Grid",component:r,argTypes:{children:{table:{disable:!0}},compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:u,paddingTop:u,paddingBottom:u}};r.Cell;const g={decorators:[a=>e.jsx(F,{children:e.jsx(a,{})})]},i={decorators:[a=>e.jsx(F,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...I})=>e.jsx(r.Cell,{...I,children:a})},h=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),s={...g,args:{children:h}},n={...g,args:{children:h,compact:!0}},o={...g,args:{children:h,paddingVertical:"medium"}},l={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},t={...i,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},c={...i,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},d={...i,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},m={...i,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},p={...i,args:{as:"section"},render:({as:a})=>e.jsx(r,{children:e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})})};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    compact: true
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,j,G;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(G=(j=o.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var f,N,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var V,D,z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(z=(D=t.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,w,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var M,P,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    span: 'all'
  }
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var O,E,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var B,R,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...CellStoryTemplate,
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
}`,...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const K=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],U=Object.freeze(Object.defineProperty({__proto__:null,Compact:n,ConfigureGridVariants:c,CustomTagName:p,Default:s,SpanAllColumns:d,SpanMultipleColumns:t,StartPosition:m,VerticalGap:l,VerticalSpace:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{n as C,U as G,t as S,o as V,l as a,c as b,d as c,m as d,p as e};
