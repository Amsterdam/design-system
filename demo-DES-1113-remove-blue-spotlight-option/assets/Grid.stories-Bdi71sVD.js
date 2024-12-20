import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as $}from"./index-RigO-4kf.js";import{g as W,p as X}from"./paddingClasses-C5gheHLv.js";const z=$.forwardRef(({as:a="div",children:l,className:g,span:u,start:v,...f},y)=>e.jsx(a,{...f,ref:y,className:H("ams-grid__cell",W(u,v),g),children:l}));z.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"footer"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const J=$.forwardRef(({as:a="div",children:l,className:g,gapVertical:u,paddingBottom:v,paddingTop:f,paddingVertical:y,...Q},U)=>e.jsx(a,{...Q,ref:U,className:H("ams-grid",u&&`ams-grid--gap-vertical--${u}`,X("grid",v,f,y),g),children:l}));J.displayName="Grid";const s=Object.assign(J,{Cell:z});try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"footer"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"header"'},{value:'"nav"'}]}},gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const Y={title:"Components/Layout/Grid",component:s,args:{gapVertical:void 0,paddingVertical:"medium"},argTypes:{className:{table:{disable:!0}},gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const K=()=>e.jsx(s,{className:"ams-docs-grid",children:Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-grid__cell"},a))}),C={decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(a,{})]})]},p={decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(s,{paddingVertical:"medium",children:e.jsx(a,{})})]})],render:({children:a,...l})=>e.jsx(s.Cell,{...l,children:a})},r={...C},n={...C,args:{children:e.jsx(s.Cell,{className:"ams-docs-item",span:"all"})}},o={...C,args:{children:[e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},1),e.jsx(s.Cell,{className:"ams-docs-item",span:"all"},2)],gapVertical:"small"}},t={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:4}},m={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},i={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:"all"}},d={...p,args:{children:e.jsx("div",{className:"ams-docs-item"}),span:3,start:{narrow:2,medium:4,wide:6}}},c={...p,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsx("div",{className:"ams-docs-item"})})};var h,S,N;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var x,G,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: <Grid.Cell className="ams-docs-item" span="all" />
  }
}`,...(j=(G=n.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var T,_,V;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-item" span="all" key={1} />, <Grid.Cell className="ams-docs-item" span="all" key={2} />],
    gapVertical: 'small'
  }
}`,...(V=(_=o.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var b,w,q;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,O,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var M,D,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Z=["Default","VerticalPadding","VerticalGap","SpanColumns","SpanResponsively","SpanAllColumns","StartPosition","ImproveSemantics"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ImproveSemantics:c,SpanAllColumns:i,SpanColumns:t,SpanResponsively:m,StartPosition:d,VerticalGap:o,VerticalPadding:n,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{re as G,c as I,t as S,n as V,o as a,m as b,i as c,d};
