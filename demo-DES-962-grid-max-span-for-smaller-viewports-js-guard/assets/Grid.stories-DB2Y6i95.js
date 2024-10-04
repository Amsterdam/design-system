import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as X}from"./index.esm-CQjfvN-_.js";import{c as Y}from"./clsx-B-dksMZM.js";import{r as Z}from"./index-Cs7sjTYM.js";import{g as le,p as ne}from"./paddingClasses-k8NiDA4k.js";const ee=Z.forwardRef(({as:a="div",children:l,className:v,span:y,start:_,...C},f)=>e.jsx(a,{...C,ref:f,className:Y("ams-grid__cell",le(y,_),v),children:l}));ee.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'1 | "all" | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | GridColumnNumbers"}}}}}catch{}const ae=Z.forwardRef(({children:a,className:l,gapVertical:v,paddingBottom:y,paddingTop:_,paddingVertical:C,...f},re)=>e.jsx("div",{...f,ref:re,className:Y("ams-grid",v&&`ams-grid--gap-vertical--${v}`,ne("grid",y,_,C),l),children:a}));ae.displayName="Grid";const s=Object.assign(ae,{Cell:ee});try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const oe={title:"Components/Layout/Grid",component:s,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const se=()=>e.jsx(s,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-grid__cell"},a))}),S={decorators:[a=>e.jsxs(X,{children:[e.jsx(se,{}),e.jsx(a,{})]})]},r={decorators:[a=>e.jsxs(X,{children:[e.jsx(se,{}),e.jsx(s,{paddingVertical:"medium",children:e.jsx(a,{})})]})],render:({children:a,...l})=>e.jsx(s.Cell,{...l,children:a})},n={...S},o={...S,args:{children:e.jsx(s.Cell,{className:"ams-docs-item",span:"all"})}},i={...S,args:{children:[e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},d={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},c={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},p={...r,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})},u={...r,render:()=>e.jsx(s.Cell,{className:"ams-grid__cell--span-2 ams-grid__cell--span-6-wide ams-grid__cell--start-4 ams-grid__cell--start-8-medium ams-grid__cell--start-5-wide",children:e.jsx("div",{className:"ams-docs-item"})})},g={...r,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:2,medium:5,wide:8},start:{narrow:1,medium:4,wide:7}}};var h,N,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(x=(N=n.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var j,G,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(w=(G=o.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var T,V,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span="all" key={1} />, <Grid.Cell className="ams-docs-item" span="all" key={2} />],
    gapVertical: 'small'
  }
}`,...(b=(V=i.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var P,q,A;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...(A=(q=t.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var R,I,k;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var B,O,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var L,D,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,$,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,F,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  render: () => <Grid.Cell className="ams-grid__cell--span-2 ams-grid__cell--span-6-wide ams-grid__cell--start-4 ams-grid__cell--start-8-medium ams-grid__cell--start-5-wide">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 2,
      medium: 5,
      wide: 8
    },
    start: {
      narrow: 1,
      medium: 4,
      wide: 7
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ie=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics","GridCellWithClassNames","StartPositionAndSpan"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:n,GridCellWithClassNames:u,ImproveSemantics:p,SpanAllColumns:d,SpanColumns:t,SpanResponsively:m,StartPosition:c,StartPositionAndSpan:g,VerticalGap:i,VerticalPadding:o,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{ue as G,p as I,t as S,o as V,i as a,m as b,d as c,c as d,g as e};
