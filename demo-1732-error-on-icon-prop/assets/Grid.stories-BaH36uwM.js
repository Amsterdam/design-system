import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as z}from"./index.esm-BY17lzbO.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{g as W,p as X}from"./paddingClasses-C5gheHLv.js";const J=F.forwardRef(({as:a="div",children:r,className:u,span:g,start:v,...y},f)=>e.jsx(a,{...y,ref:f,className:H("ams-grid__cell",W(g,v),u),children:r}));J.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const K=F.forwardRef(({children:a,className:r,gapVertical:u,paddingBottom:g,paddingTop:v,paddingVertical:y,...f},U)=>e.jsx("div",{...f,ref:U,className:H("ams-grid",u&&`ams-grid--gap-vertical--${u}`,X("grid",g,v,y),r),children:a}));K.displayName="Grid";const s=Object.assign(K,{Cell:J});try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const Y={title:"Components/Layout/Grid",component:s,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const Q=()=>e.jsx(s,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-grid__cell"},a))}),C={decorators:[a=>e.jsxs(z,{children:[e.jsx(Q,{}),e.jsx(a,{})]})]},p={decorators:[a=>e.jsxs(z,{children:[e.jsx(Q,{}),e.jsx(s,{paddingVertical:"medium",children:e.jsx(a,{})})]})],render:({children:a,...r})=>e.jsx(s.Cell,{...r,children:a})},l={...C},o={...C,args:{children:e.jsx(s.Cell,{className:"ams-docs-item",span:"all"})}},n={...C,args:{children:[e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},i={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},c={...p,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var S,h,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(N=(h=l.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var x,G,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(j=(G=o.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var _,T,b;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span="all" key={1} />, <Grid.Cell className="ams-docs-item" span="all" key={2} />],
    gapVertical: 'small'
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var V,w,q;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(q=(w=t.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var P,R,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(I=(R=m.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var k,A,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var O,E,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: {
      narrow: 2,
      medium: 4,
      wide: 6
    }
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,M,$;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...($=(M=c.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};const Z=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ImproveSemantics:c,SpanAllColumns:i,SpanColumns:t,SpanResponsively:m,StartPosition:d,VerticalGap:n,VerticalPadding:o,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{oe as G,c as I,t as S,o as V,n as a,m as b,i as c,d};
