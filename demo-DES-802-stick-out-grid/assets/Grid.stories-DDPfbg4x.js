import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as C}from"./index.esm-BnoGw21V.js";import{G as a}from"./Grid-oysH5Ptt.js";const U={title:"Components/Layout/Grid",component:a,args:{className:"ams-docs-grid"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};a.Cell;const g={decorators:[s=>e.jsx(C,{children:e.jsx(s,{})})]},r={decorators:[s=>e.jsx(C,{children:e.jsx(a,{children:e.jsx(s,{})})})],render:({children:s,...Q})=>e.jsx(a.Cell,{...Q,children:s})},K=Array.from(Array(12).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-item"},s)),l={...g,args:{children:K}},m={...g,args:{children:K,paddingVertical:"medium"}},o={...g,args:{children:Array.from(Array(6).keys()).map(s=>e.jsx(a.Cell,{className:"ams-docs-item",span:4},s)),gapVertical:"small"}},i={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},t={...g,args:{children:[e.jsx(a.Cell,{className:"ams-docs-item ams-docs-item--highlight",rowSpan:2,span:4,style:{padding:"1rem"}},1),e.jsx(a.Cell,{className:"ams-docs-item",span:4},2),e.jsx(a.Cell,{className:"ams-docs-item",span:4},3),e.jsx(a.Cell,{className:"ams-docs-item",span:4},4),e.jsx(a.Cell,{className:"ams-docs-item",span:4},5)],gapVertical:"small"}},c={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},n={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},p={...r,args:{className:"ams-docs-item ams-docs-item--highlight",coverGap:!0,span:"all"},decorators:[s=>e.jsx(C,{children:e.jsxs(a,{children:[e.jsx(a.Cell,{className:"ams-docs-item",span:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",span:{narrow:2,medium:4,wide:6}}),e.jsx(s,{}),e.jsx(a.Cell,{className:"ams-docs-item",span:{narrow:2,medium:4,wide:6}}),e.jsx(a.Cell,{className:"ams-docs-item",span:{narrow:2,medium:4,wide:6}})]})})]},u={...r,args:{as:"section"},render:({as:s})=>e.jsx(a.Cell,{as:s,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var S,y,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var h,x,G;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(G=(x=m.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var j,w,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var T,f,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var V,k,A;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item ams-docs-item--highlight" key={1} rowSpan={2} span={4} style={{
      padding: '1rem'
    }} />, <Grid.Cell className="ams-docs-item" span={4} key={2} />, <Grid.Cell className="ams-docs-item" span={4} key={3} />, <Grid.Cell className="ams-docs-item" span={4} key={4} />, <Grid.Cell className="ams-docs-item" span={4} key={5} />],
    gapVertical: 'small'
  }
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,M,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var I,O,R;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(R=(O=n.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,E,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var B,L,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item ams-docs-item--highlight',
    coverGap: true,
    span: 'all'
  },
  decorators: [Story => <Screen>
        <Grid>
          <Grid.Cell className="ams-docs-item" span={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Grid.Cell className="ams-docs-item" span={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Story />
          <Grid.Cell className="ams-docs-item" span={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
          <Grid.Cell className="ams-docs-item" span={{
        narrow: 2,
        medium: 4,
        wide: 6
      }} />
        </Grid>
      </Screen>]
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var F,H,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const W=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","SpanMultipleRows","ConfigureGridVariants","SpanAllColumns","StartPosition","CoverGap","ImproveSemantics"],$=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:c,CoverGap:p,Default:l,ImproveSemantics:u,SpanAllColumns:n,SpanMultipleColumns:i,SpanMultipleRows:t,StartPosition:d,VerticalGap:o,VerticalSpace:m,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{c as C,$ as G,u as I,i as S,m as V,o as a,t as b,n as c,d,p as e};
