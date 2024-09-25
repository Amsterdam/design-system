import{j as a}from"./jsx-runtime-BlAj40OV.js";import{S as z}from"./index.esm-DFuBI4B0.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{g as W,p as X}from"./paddingClasses-C5gheHLv.js";const J=F.forwardRef(({as:e="div",children:r,className:u,span:g,start:v,...y},f)=>a.jsx(e,{...y,ref:f,className:H("ams-grid__cell",W(g,v),u),children:r}));J.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | ResponsiveGridValues<GridColumnNumber>'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"ResponsiveGridValues<GridColumnNumber>"}}}}}catch{}const K=F.forwardRef(({children:e,className:r,gapVertical:u,paddingBottom:g,paddingTop:v,paddingVertical:y,...f},U)=>a.jsx("div",{...f,ref:U,className:H("ams-grid",u&&`ams-grid--gap-vertical--${u}`,X("grid",g,v,y),r),children:e}));K.displayName="Grid";const s=Object.assign(K,{Cell:J});try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const Y={title:"Components/Layout/Grid",component:s,args:{className:"ams-docs-grid"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};s.Cell;const C={decorators:[e=>a.jsx(z,{children:a.jsx(e,{})})]},p={decorators:[e=>a.jsx(z,{children:a.jsx(s,{children:a.jsx(e,{})})})],render:({children:e,...r})=>a.jsx(s.Cell,{...r,children:e})},Q=Array.from(Array(12).keys()).map(e=>a.jsx(s.Cell,{className:"ams-docs-item"},e)),l={...C,args:{children:Q}},o={...C,args:{children:Q,paddingVertical:"medium"}},n={...C,args:{children:Array.from(Array(6).keys()).map(e=>a.jsx(s.Cell,{className:"ams-docs-item",span:4},e)),gapVertical:"small"}},t={...p,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:4}},i={...p,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},m={...p,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...p,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},c={...p,args:{as:"section"},render:({as:e})=>a.jsx(s.Cell,{as:e,span:"all",children:a.jsx("div",{className:"ams-docs-item"})})};var S,h,G;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(G=(h=l.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var T,x,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var V,_,j;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var b,w,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var q,R,I;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var k,M,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,B,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var L,D,$;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const Z=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","ImproveSemantics"],oe=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:i,Default:l,ImproveSemantics:c,SpanAllColumns:m,SpanMultipleColumns:t,StartPosition:d,VerticalGap:n,VerticalSpace:o,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{i as C,oe as G,c as I,t as S,o as V,n as a,m as b,d as c};