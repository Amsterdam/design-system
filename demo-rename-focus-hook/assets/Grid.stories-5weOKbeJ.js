import{j as e}from"./jsx-runtime-CKrituN3.js";import{G as r,x as E}from"./index.esm-DZliMoJT.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const i={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},R={title:"Components/Layout/Grid",component:r,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:i,paddingTop:i,paddingBottom:i}};r.Cell;const g={decorators:[a=>e.jsx(E,{children:e.jsx(a,{})})]},p={decorators:[a=>e.jsx(E,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...B})=>e.jsx(r.Cell,{...B,children:a})},H=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box"},a)),s={...g,args:{children:H}},n={...g,args:{children:H,paddingVertical:"medium"}},o={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},l={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},t={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},m={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},d={...p,args:{children:e.jsx("p",{className:"amsterdam-docs-paragraph amsterdam-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},c={...p,args:{as:"section"},render:({as:a})=>e.jsx(r,{children:e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})})};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,k,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,G,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var N,v,V;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(V=(v=t.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var D,z,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>,
    span: 'all'
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,_,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,L,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const q=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],J=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:t,CustomTagName:c,Default:s,SpanAllColumns:m,SpanMultipleColumns:l,StartPosition:d,VerticalGap:o,VerticalSpace:n,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{t as C,J as G,l as S,n as V,o as a,m as b,d as c,c as d};
