import{j as a}from"./iframe-CVuVHAkN.js";import{g as h}from"./common-HRWYXPjp.js";import{G as e}from"./Grid-BAj_SWzL.js";import{P as g}from"./Paragraph-DoxcprNI.js";const y={title:"Components/Layout/Grid",component:e,args:{paddingVertical:"x-large"},argTypes:h,parameters:{layout:"fullscreen"}};e.Cell;const C=()=>a.jsx(e,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(s=>a.jsx(e.Cell,{className:"ams-docs-grid__cell"},s))}),u={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(C,{}),a.jsx(s,{})]})]},i={decorators:[s=>a.jsxs(a.Fragment,{children:[a.jsx(C,{}),a.jsx(e,{paddingVertical:"x-large",children:a.jsx(s,{})})]})],render:({children:s,...S})=>a.jsx(e.Cell,{...S,children:s})},r={...u},n={...u,args:{children:a.jsx(e.Cell,{className:"ams-docs-item",span:"all"})}},l={...u,args:{children:[a.jsx(e.Cell,{className:"ams-docs-item",span:"all"},1),a.jsx(e.Cell,{className:"ams-docs-item",span:"all"},2)]}},o={...i,args:{className:"ams-docs-item",span:4}},t={...i,args:{className:"ams-docs-item",span:{narrow:4,medium:6,wide:8}}},c={...i,args:{className:"ams-docs-item",span:"all"}},m={...i,args:{className:"ams-docs-item",span:3,start:{narrow:2,medium:4,wide:6}}},p={...u,args:{children:[a.jsx(e.Cell,{span:4,children:a.jsx(g,{children:"Default"})},1),a.jsx(e.Cell,{appearance:"flush",span:4,children:a.jsx(g,{children:"Flush"})},2),a.jsx(e.Cell,{appearance:"transparent",span:4,children:a.jsx(g,{children:"Transparent"})},3)]}},d={...i,args:{as:"section"},render:({as:s})=>a.jsx(e.Cell,{as:s,className:"ams-docs-item",span:"all"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" key={1} span="all" />, <Grid.Cell className="ams-docs-item" key={2} span="all" />]
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 4
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item',
    span: 'all'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell key={1} span={4}>
        <Paragraph>Default</Paragraph>
      </Grid.Cell>, <Grid.Cell appearance="flush" key={2} span={4}>
        <Paragraph>Flush</Paragraph>
      </Grid.Cell>, <Grid.Cell appearance="transparent" key={3} span={4}>
        <Paragraph>Transparent</Paragraph>
      </Grid.Cell>]
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} className="ams-docs-item" span="all" />
}`,...d.parameters?.docs?.source}}};const x=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","BackgroundInCompactMode","ImproveSemantics"],f=Object.freeze(Object.defineProperty({__proto__:null,BackgroundInCompactMode:p,Default:r,ImproveSemantics:d,SpanAllColumns:c,SpanColumns:o,SpanResponsively:t,StartPosition:m,VerticalGap:l,VerticalPadding:n,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{p as B,f as G,d as I,o as S,n as V,l as a,t as b,c,m as d,y as m};
