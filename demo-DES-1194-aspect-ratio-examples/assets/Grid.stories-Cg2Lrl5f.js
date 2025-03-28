import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{G as a}from"./Grid-D0HUEsWS.js";const z={title:"Components/Layout/Grid",component:a,args:{gapVertical:void 0,paddingVertical:"medium"},parameters:{layout:"fullscreen"}};a.Cell;const E=()=>s.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(e=>s.jsx(a.Cell,{className:"ams-docs-grid__cell"},e))}),p={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx(e,{})]})]},i={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx(a,{paddingVertical:"medium",children:s.jsx(e,{})})]})],render:({children:e,...F})=>s.jsx(a.Cell,{...F,children:e})},r={...p},o={...p,args:{children:s.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},l={...p,args:{children:[s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...i,args:{className:"ams-docs-item",span:4}},m={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},n={...i,args:{className:"ams-docs-item",span:"all"}},c={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:e})=>s.jsx(a.Cell,{as:e,className:"ams-docs-item",span:"all"})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,y,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var x,N,G;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />],
    gapVertical: 'small'
  }
}`,...(G=(N=l.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var T,V,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...(f=(V=t.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var h,w,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(w=m.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var v,P,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...(b=(P=n.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var k,A,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 3,
    start: {
      narrow: 2,
      medium: 4,
      wide: 6
    }
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,R,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const B=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:n,SpanColumns:t,SpanResponsively:m,StartPosition:c,VerticalGap:l,VerticalPadding:o,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{q as G,d as I,t as S,o as V,l as a,m as b,n as c,c as d};
