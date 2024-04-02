import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as E}from"./Screen-CBGDXr7L.js";import{G as r}from"./Grid-Cb2xqfsw.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},R={title:"Components/Layout/Grid",component:r,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:d,paddingTop:d,paddingBottom:d}};r.Cell;const g={decorators:[a=>e.jsx(E,{children:e.jsx(a,{})})]},i={decorators:[a=>e.jsx(E,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...B})=>e.jsx(r.Cell,{...B,children:a})},H=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"ams-docs-pink-box"},a)),s={...g,args:{children:H}},n={...g,args:{children:H,paddingVertical:"medium"}},o={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"ams-docs-pink-box",span:4},a)),gapVertical:"small"}},l={...i,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},t={...i,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},c={...i,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},p={...i,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},m={...i,args:{as:"section"},render:({as:a})=>e.jsx(r,{children:e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"ams-docs-pink-box ams-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})})};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,k,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,G,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(f=(G=l.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};var N,v,V;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(V=(v=t.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var D,z,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>,
    span: 'all'
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,_,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,L,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid>
      <Grid.Cell as={as} span="all">
        <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
      </Grid.Cell>
    </Grid>
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const q=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],K=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:t,CustomTagName:m,Default:s,SpanAllColumns:c,SpanMultipleColumns:l,StartPosition:p,VerticalGap:o,VerticalSpace:n,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{t as C,K as G,l as S,n as V,o as a,c as b,p as c,m as d};
