import{j as a}from"./iframe-BTukjBE9.js";import{g as S}from"./common-HRWYXPjp.js";import{G as e}from"./Grid-GwUI1BRv.js";const u=()=>a.jsx(e,{className:"_ams-grid-columns-guide",children:Array.from(Array(12).keys()).map(s=>a.jsx(e.Cell,{className:"_ams-grid-columns-guide__cell"},s))}),_={title:"Components/Layout/Grid",component:e,args:{paddingVertical:"x-large"},argTypes:S,parameters:{layout:"fullscreen"}};e.Cell;const d={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(u,{}),a.jsx(s,{})]})]},p={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(u,{}),a.jsx(e,{paddingVertical:"x-large",children:a.jsx(s,{})})]})],render:({children:s,...g})=>a.jsx(e.Cell,{...g,children:s})},r={...d},n={...d,args:{children:a.jsx(e.Cell,{className:"_ams-item",span:"all"})}},l={...d,args:{children:[a.jsx(e.Cell,{className:"_ams-item",span:"all"},1),a.jsx(e.Cell,{className:"_ams-item",span:"all"},2)]}},m={...p,args:{className:"_ams-item",span:4}},t={...p,args:{className:"_ams-item",span:{narrow:4,medium:6,wide:8}}},o={...p,args:{className:"_ams-item",span:"all"}},c={...p,args:{className:"_ams-item",span:3,start:{narrow:2,medium:4,wide:6}}},i={...p,args:{as:"section"},render:({as:s})=>a.jsx(e.Cell,{as:s,className:"_ams-item",span:"all"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="_ams-item" span="all" />
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="_ams-item" key={1} span="all" />, <Grid.Cell className="_ams-item" key={2} span="all" />]
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: 4
  }
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: '_ams-item',
    span: 'all'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="_ams-item" span="all" />
}`,...i.parameters?.docs?.source}}};const C=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:i,SpanAllColumns:o,SpanColumns:m,SpanResponsively:t,StartPosition:c,VerticalGap:l,VerticalPadding:n,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{N as G,i as I,m as S,n as V,l as a,t as b,o as c,c as d,_ as m};
