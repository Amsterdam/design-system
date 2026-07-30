import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{n,t as r}from"./renderComponentVariants-Bba3J5-7.js";import{St as i,t as a}from"./src-DborLgTf.js";import o,{n as s}from"./Grid.stories-qBE6UkM7.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),r(),s(),c=t(),l={...o,title:`Components/Layout/Grid`},u={className:`_ams-item`,style:{blockSize:`3rem`}},d={narrow:1,medium:2,wide:3},f={narrow:2,medium:4,wide:6},p={narrow:3,medium:6,wide:9},m={narrow:2,medium:3,wide:4},h={narrow:3,medium:5,wide:7},g=({gapVertical:e,subgridGapVertical:t})=>(0,c.jsxs)(i,{gapVertical:e,paddingVertical:`large`,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsxs)(i.Subgrid,{gapVertical:t,span:p,start:m,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d})]})]}),_=()=>(0,c.jsxs)(i,{paddingVertical:`large`,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsxs)(i.Subgrid,{span:`all`,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d})]}),(0,c.jsxs)(i.Subgrid,{span:f,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d})]}),(0,c.jsxs)(i.Subgrid,{span:f,start:h,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d})]})]}),v=()=>(0,c.jsxs)(i,{paddingVertical:`large`,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsxs)(i.Subgrid,{rowSpan:2,span:p,start:m,children:[(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d}),(0,c.jsx)(i.Cell,{...u,span:d})]}),(0,c.jsx)(i.Cell,{...u,span:d})]}),y={args:{children:[(0,c.jsx)(i.Cell,{span:`all`},1),(0,c.jsx)(i.Cell,{span:`all`},2)]},render:(e,t)=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[n(i,{args:e},t),(0,c.jsx)(g,{}),(0,c.jsx)(g,{gapVertical:`none`}),(0,c.jsx)(g,{subgridGapVertical:`2x-large`}),(0,c.jsx)(_,{}),(0,c.jsx)(v,{})]}),tags:[`!dev`,`!autodocs`]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Grid.Cell key={1} span="all" />, <Grid.Cell key={2} span="all" />]
  },
  render: (args, context) => <div className="_ams-tests-stack">
      {renderComponentVariants(Grid, {
      args
    }, context)}
      <SubgridCase />
      <SubgridCase gapVertical="none" />
      <SubgridCase subgridGapVertical="2x-large" />
      <SubgridPlacementCase />
      <SubgridRowSpanCase />
    </div>,
  tags: ['!dev', '!autodocs']
}`,...y.parameters?.docs?.source}}},b=[`Test`]}))();export{y as Test,b as __namedExportsOrder,l as default};