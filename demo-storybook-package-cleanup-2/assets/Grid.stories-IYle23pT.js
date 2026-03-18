import{j as a}from"./iframe-DX1hKP5G.js";import{G as u}from"./GridColumnsGuide-BYrwqVT9.js";import{g as S}from"./Grid.argTypes-CfqFMx79.js";import{G as e}from"./Grid-B9M_FXB9.js";const C={title:"Components/Layout/Grid",component:e,args:{paddingVertical:"x-large"},argTypes:S,parameters:{layout:"fullscreen"}};e.Cell;const d={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(u,{}),a.jsx(s,{})]})]},i={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(u,{}),a.jsx(e,{paddingVertical:"x-large",children:a.jsx(s,{})})]})],render:({children:s,...g})=>a.jsx(e.Cell,{...g,children:s})},r={...d},n={...d,args:{children:a.jsx(e.Cell,{className:"_ams-item",span:"all"})}},t={...d,args:{children:[a.jsx(e.Cell,{className:"_ams-item",span:"all"},1),a.jsx(e.Cell,{className:"_ams-item",span:"all"},2)]}},o={...i,args:{className:"_ams-item",span:4}},l={...i,args:{className:"_ams-item",span:{narrow:4,medium:6,wide:8}}},m={...i,args:{className:"_ams-item",span:"all"}},c={...i,args:{className:"_ams-item",span:3,start:{narrow:2,medium:4,wide:6}}},p={...i,args:{as:"section"},render:({as:s})=>a.jsx(e.Cell,{as:s,className:"_ams-item",span:"all"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="_ams-item" span="all" />
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="_ams-item" key={1} span="all" />, <Grid.Cell className="_ams-item" key={2} span="all" />]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: 4
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: 'all'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: 3,
    start: {
      narrow: 2,
      medium: 4,
      wide: 6
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="_ams-item" span="all" />
}`,...p.parameters?.docs?.source}}};const _=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:p,SpanAllColumns:m,SpanColumns:o,SpanResponsively:l,StartPosition:c,VerticalGap:t,VerticalPadding:n,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{N as G,p as I,o as S,n as V,t as a,l as b,m as c,c as d,C as m};
