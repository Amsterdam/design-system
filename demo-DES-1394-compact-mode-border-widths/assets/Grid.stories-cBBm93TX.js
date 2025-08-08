import{j as s}from"./iframe-CdQdN5Uu.js";import{g as S}from"./common-DrnyCu3t.js";import{G as a}from"./Grid-C1xNkg8-.js";const y={title:"Components/Layout/Grid",component:a,args:{paddingVertical:"x-large"},argTypes:{className:{table:{disable:!0}},...S},parameters:{layout:"fullscreen"}};a.Cell;const u=()=>s.jsx(a,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(e=>s.jsx(a.Cell,{className:"ams-docs-grid__cell"},e))}),p={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(u,{}),s.jsx(e,{})]})]},i={decorators:[e=>s.jsxs(s.Fragment,{children:[s.jsx(u,{}),s.jsx(a,{paddingVertical:"x-large",children:s.jsx(e,{})})]})],render:({children:e,...g})=>s.jsx(a.Cell,{...g,children:e})},r={...p},o={...p,args:{children:s.jsx(a.Cell,{className:"ams-docs-item",span:"all"})}},n={...p,args:{children:[s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},1),s.jsx(a.Cell,{className:"ams-docs-item",span:"all"},2)]}},l={...i,args:{className:"ams-docs-item",span:4}},t={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},m={...i,args:{className:"ams-docs-item",span:"all"}},c={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},d={...i,args:{as:"section"},render:({as:e})=>s.jsx(a.Cell,{as:e,className:"ams-docs-item",span:"all"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const C=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:d,SpanAllColumns:m,SpanColumns:l,SpanResponsively:t,StartPosition:c,VerticalGap:n,VerticalPadding:o,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{G,d as I,l as S,o as V,n as a,t as b,m as c,c as d};
