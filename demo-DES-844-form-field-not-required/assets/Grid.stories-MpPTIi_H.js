import{j as a}from"./jsx-runtime-BlAj40OV.js";import{j as z}from"./index.esm-C0OPxfeR.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const W=(e,s)=>{if(!e&&!s)return[];const r=[];if(e==="all"||typeof e=="number")r.push(`ams-grid__cell--span-${e}`);else if(e){const{narrow:l,medium:i,wide:n}=e;r.push(`ams-grid__cell--span-${l}`,`ams-grid__cell--span-${i}-medium`,`ams-grid__cell--span-${n}-wide`)}if(typeof s=="number")r.push(`ams-grid__cell--start-${s}`);else if(s){const{narrow:l,medium:i,wide:n}=s;r.push(`ams-grid__cell--start-${l}`,`ams-grid__cell--start-${i}-medium`,`ams-grid__cell--start-${n}-wide`)}return r},J=F.forwardRef(({as:e="div",children:s,className:r,span:l,start:i,...n},v)=>a.jsx(e,{...n,ref:v,className:H("ams-grid__cell",W(l,i),r),children:s}));J.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const X=(e,s,r)=>{const l=[];return r?[`ams-grid--padding-vertical--${r}`]:(e&&l.push(`ams-grid--padding-bottom--${e}`),s&&l.push(`ams-grid--padding-top--${s}`),l)},K=F.forwardRef(({children:e,className:s,gapVertical:r,paddingBottom:l,paddingTop:i,paddingVertical:n,...v},U)=>a.jsx("div",{...v,ref:U,className:H("ams-grid",r&&`ams-grid--gap-vertical--${r}`,X(l,i,n),s),children:e}));K.displayName="Grid";const o=Object.assign(K,{Cell:J});try{o.displayName="Grid",o.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const Y={title:"Components/Layout/Grid",component:o,args:{className:"ams-docs-grid"},argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};o.Cell;const C={decorators:[e=>a.jsx(z,{children:a.jsx(e,{})})]},y={decorators:[e=>a.jsx(z,{children:a.jsx(o,{children:a.jsx(e,{})})})],render:({children:e,...s})=>a.jsx(o.Cell,{...s,children:e})},Q=Array.from(Array(12).keys()).map(e=>a.jsx(o.Cell,{className:"ams-docs-item"},e)),t={...C,args:{children:Q}},m={...C,args:{children:Q,paddingVertical:"medium"}},d={...C,args:{children:Array.from(Array(6).keys()).map(e=>a.jsx(o.Cell,{className:"ams-docs-item",span:4},e)),gapVertical:"small"}},c={...y,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:4}},p={...y,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:{narrow:4,medium:6,wide:8}}},u={...y,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:"all"}},g={...y,args:{children:a.jsx("div",{className:"ams-docs-item"}),span:3,start:2}},f={...y,args:{as:"section"},render:({as:e})=>a.jsx(o.Cell,{as:e,span:"all",children:a.jsx("div",{className:"ams-docs-item"})})};var _,h,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var G,N,T;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var x,b,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-item" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var V,w,$;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 4
  }
}`,...($=(w=c.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var A,q,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(I=(q=p.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var k,M,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 'all'
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,R,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <div className="ams-docs-item" />,
    span: 3,
    start: 2
  }
}`,...(E=(R=g.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,B,D;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <div className="ams-docs-item" />
    </Grid.Cell>
}`,...(D=(B=f.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const Z=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","ImproveSemantics"],le=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:p,Default:t,ImproveSemantics:f,SpanAllColumns:u,SpanMultipleColumns:c,StartPosition:g,VerticalGap:d,VerticalSpace:m,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{p as C,le as G,f as I,c as S,m as V,d as a,u as b,g as c};
