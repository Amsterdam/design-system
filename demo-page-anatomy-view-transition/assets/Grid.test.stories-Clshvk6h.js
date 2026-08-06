import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./renderComponentVariants-B9qGhGrm.js";import{i,t as a}from"./Grid-xGgVXuv8.js";import{o,s}from"./Grid.stories-B33rC7Am.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),r(),o(),c=t(),l={...s,title:`Components/Layout/Grid`},u={className:`_ams-item`,style:{blockSize:`3rem`}},d={narrow:1,medium:2,wide:3},f={narrow:2,medium:4,wide:6},p={narrow:3,medium:6,wide:9},m={narrow:2,medium:3,wide:4},h={narrow:3,medium:5,wide:7},g={narrow:4,medium:7,wide:10},_=({gapVertical:e,subgridGapVertical:t})=>(0,c.jsxs)(a,{gapVertical:e,paddingVertical:`large`,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsxs)(a.Subgrid,{gapVertical:t,span:p,start:m,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]})]}),v=()=>(0,c.jsxs)(a,{paddingVertical:`large`,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsxs)(a.Subgrid,{span:`all`,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]}),(0,c.jsxs)(a.Subgrid,{span:f,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]}),(0,c.jsxs)(a.Subgrid,{span:f,start:h,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]})]}),y=()=>(0,c.jsxs)(a,{paddingVertical:`large`,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsxs)(a.Subgrid,{rowSpan:2,span:p,start:m,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]}),(0,c.jsx)(a.Cell,{...u,span:d})]}),b=()=>(0,c.jsxs)(a,{paddingVertical:`large`,children:[(0,c.jsx)(a.Cell,{...u,rowStart:1,span:d,start:g}),(0,c.jsx)(a.Cell,{...u,span:p}),(0,c.jsx)(a.Cell,{...u,span:p})]}),x=()=>(0,c.jsxs)(a,{paddingVertical:`large`,children:[(0,c.jsx)(a.Cell,{...u,rowStart:1,span:d,start:g}),(0,c.jsxs)(a.Subgrid,{span:p,children:[(0,c.jsx)(a.Cell,{...u,span:d}),(0,c.jsx)(a.Cell,{...u,span:d})]})]}),S={args:{children:[(0,c.jsx)(a.Cell,{span:`all`},1),(0,c.jsx)(a.Cell,{span:`all`},2)]},render:(e,t)=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[n(a,{args:e},t),(0,c.jsx)(_,{}),(0,c.jsx)(_,{gapVertical:`none`}),(0,c.jsx)(_,{subgridGapVertical:`2x-large`}),(0,c.jsx)(_,{gapVertical:`none`,subgridGapVertical:`x-large`}),(0,c.jsx)(v,{}),(0,c.jsx)(y,{}),(0,c.jsx)(b,{}),(0,c.jsx)(x,{})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      {/* The reason x-large exists: the Grid drops its gap, and the Subgrid puts the regular one back. */}
      <SubgridCase gapVertical="none" subgridGapVertical="x-large" />
      <SubgridPlacementCase />
      <SubgridRowSpanCase />
      <RowStartCase />
      <SubgridRowStartCase />
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...S.parameters?.docs?.source}}},C=[`Test`]})))()}w();export{S as Test,C as __namedExportsOrder,l as default};