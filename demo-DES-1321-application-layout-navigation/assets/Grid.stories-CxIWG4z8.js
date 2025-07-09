import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{g as S}from"./common-DYX7ZGrz.js";import{G as e}from"./Grid-VHIB_U50.js";import{P as y}from"./Page-C4smGM9y.js";const C={title:"Components/Layout/Grid",component:e,args:{paddingVertical:"x-large"},argTypes:{className:{table:{disable:!0}},...S},decorators:[a=>s.jsx(y,{children:s.jsx(a,{})})],parameters:{layout:"fullscreen"}};e.Cell;const u=()=>s.jsx(e,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(a=>s.jsx(e.Cell,{className:"ams-docs-grid__cell"},a))}),p={decorators:[a=>s.jsxs(s.Fragment,{children:[s.jsx(u,{}),s.jsx(a,{})]})]},i={decorators:[a=>s.jsxs(s.Fragment,{children:[s.jsx(u,{}),s.jsx(e,{paddingVertical:"x-large",children:s.jsx(a,{})})]})],render:({children:a,...g})=>s.jsx(e.Cell,{...g,children:a})},r={...p},o={...p,args:{children:s.jsx(e.Cell,{className:"ams-docs-item",span:"all"})}},n={...p,args:{children:[s.jsx(e.Cell,{className:"ams-docs-item",span:"all"},1),s.jsx(e.Cell,{className:"ams-docs-item",span:"all"},2)]}},l={...i,args:{className:"ams-docs-item",span:4}},t={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},m={...i,args:{className:"ams-docs-item",span:"all"}},c={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:a})=>s.jsx(e.Cell,{as:a,className:"ams-docs-item",span:"all"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />]
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...d.parameters?.docs?.source}}};const x=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:m,SpanColumns:l,SpanResponsively:t,StartPosition:c,VerticalGap:n,VerticalPadding:o,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{f as G,d as I,l as S,o as V,n as a,t as b,m as c,c as d};
