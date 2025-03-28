import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{G as a}from"./Grid-D0HUEsWS.js";const E={title:"Components/Layout/Grid",component:a,args:{style:{minBlockSize:"7rem"}},argTypes:{style:{table:{display:!1}}},parameters:{layout:"fullscreen"}};a.Cell;const B=()=>s.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(e=>s.jsx(a.Cell,{className:"ams-docs-grid__cell"},e))}),p={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(B,{}),s.jsx(e,{})]})]},d={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(B,{}),s.jsx(a,{paddingVertical:"medium",children:s.jsx(e,{})})]})],render:({children:e,...D})=>s.jsx(a.Cell,{...D,children:e})},r={...p},o={...p,args:{children:s.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},l={...p,args:{children:[s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...d,args:{className:"ams-docs-item",span:4}},m={...d,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},n={...d,args:{className:"ams-docs-item",span:"all"}},c={...d,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},i={...d,args:{as:"section"},render:({as:e})=>s.jsx(a.Cell,{as:e,className:"ams-docs-item",span:"all"})};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,C,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var x,N,G;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />],
    gapVertical: 'small'
  }
}`,...(G=(N=l.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var T,f,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,V,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,b,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,A,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,R,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...(z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const F=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:i,SpanAllColumns:n,SpanColumns:t,SpanResponsively:m,StartPosition:c,VerticalGap:l,VerticalPadding:o,__namedExportsOrder:F,default:E},Symbol.toStringTag,{value:"Module"}));export{q as G,i as I,t as S,o as V,l as a,m as b,n as c,c as d};
