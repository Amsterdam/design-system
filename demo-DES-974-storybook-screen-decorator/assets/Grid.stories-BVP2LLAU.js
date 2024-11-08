import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as $}from"./clsx-B-dksMZM.js";import{r as z}from"./index-B-o1Wr-g.js";import{g as U,p as W}from"./paddingClasses-C5gheHLv.js";const H=z.forwardRef(({as:a="div",children:r,className:u,span:g,start:v,...y},f)=>e.jsx(a,{...y,ref:f,className:$("ams-grid__cell",U(g,v),u),children:r}));H.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const J=z.forwardRef(({children:a,className:r,gapVertical:u,paddingBottom:g,paddingTop:v,paddingVertical:y,...f},Q)=>e.jsx("div",{...f,ref:Q,className:$("ams-grid",u&&`ams-grid--gap-vertical--${u}`,W("grid",g,v,y),r),children:a}));J.displayName="Grid";const s=Object.assign(J,{Cell:H});try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const X={title:"Components/Layout/Grid",component:s,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const K=()=>e.jsx(s,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-grid__cell"},a))}),C={decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(a,{})]})]},p={decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(s,{paddingVertical:"medium",children:e.jsx(a,{})})]})],render:({children:a,...r})=>e.jsx(s.Cell,{...r,children:a})},l={...C},o={...C,args:{children:e.jsx(s.Cell,{className:"ams-docs-item",span:"all"})}},n={...C,args:{children:[e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},i={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},c={...p,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var h,S,N;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var x,G,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,F,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const Y=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ImproveSemantics:c,SpanAllColumns:i,SpanColumns:t,SpanResponsively:m,StartPosition:d,VerticalGap:n,VerticalPadding:o,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{re as G,c as I,t as S,o as V,n as a,m as b,i as c,d};
