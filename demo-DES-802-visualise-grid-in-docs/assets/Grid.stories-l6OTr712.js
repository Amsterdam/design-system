import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as O}from"./Screen-Bi3gjHLv.js";import{G as s}from"./Grid-CurDwTEg.js";const H={title:"Components/Layout/Grid",component:s,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const d={decorators:[a=>e.jsx(O,{className:"ams-storybook-show-grid",children:e.jsx(a,{})})]},p={decorators:[a=>e.jsx(O,{className:"ams-storybook-show-grid",children:e.jsx(s,{children:e.jsx(a,{})})})],render:({children:a,...E})=>e.jsx(s.Cell,{...E,children:a})},B=Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-pink-box"},a)),r={...d,args:{style:{height:"8rem"}}},o={...d,args:{children:B,paddingVertical:"medium"}},l={...d,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},a)),gapVertical:"small"}},n={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},t={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},m={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},c={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},i={...p,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"ams-docs-pink-box ams-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    style: {
      height: '8rem'
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,b,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,C,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var f,T,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,G,v;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(v=(G=t.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var V,D,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>,
    span: 'all'
  }
}`,...(z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var w,A,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var M,P,L;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
    </Grid.Cell>
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const R=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],J=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:t,CustomTagName:i,Default:r,SpanAllColumns:m,SpanMultipleColumns:n,StartPosition:c,VerticalGap:l,VerticalSpace:o,__namedExportsOrder:R,default:H},Symbol.toStringTag,{value:"Module"}));export{t as C,J as G,n as S,o as V,l as a,m as b,c,i as d};
