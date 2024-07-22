import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as O}from"./Screen-Bi3gjHLv.js";import{G as r}from"./Grid-LBiHLbDB.js";const B={title:"Components/Layout/Grid",component:r,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};r.Cell;const d={decorators:[a=>e.jsx(O,{children:e.jsx(a,{})})]},p={decorators:[a=>e.jsx(O,{children:e.jsx(r,{children:e.jsx(a,{})})})],render:({children:a,...H})=>e.jsx(r.Cell,{...H,children:a})},E=Array.from(Array(12).keys()).map(a=>e.jsx(r.Cell,{className:"ams-docs-pink-box"},a)),s={...d,args:{children:E}},o={...d,args:{children:E,paddingVertical:"medium"}},l={...d,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(r.Cell,{className:"ams-docs-pink-box",span:4},a)),gapVertical:"small"}},n={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},t={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},c={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},m={...p,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},i={...p,args:{as:"section"},render:({as:a})=>e.jsx(r.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"ams-docs-pink-box ams-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,f,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var G,v,N;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(N=(v=t.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var V,D,z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>,
    span: 'all'
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,w,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(_=(w=m.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var M,P,L;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
    </Grid.Cell>
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const R=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],J=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:t,CustomTagName:i,Default:s,SpanAllColumns:c,SpanMultipleColumns:n,StartPosition:m,VerticalGap:l,VerticalSpace:o,__namedExportsOrder:R,default:B},Symbol.toStringTag,{value:"Module"}));export{t as C,J as G,n as S,o as V,l as a,c as b,m as c,i as d};
