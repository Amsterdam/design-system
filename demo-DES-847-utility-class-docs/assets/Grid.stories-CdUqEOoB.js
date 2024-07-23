import{j as a}from"./jsx-runtime-BlAj40OV.js";import{i as B}from"./index.esm-BlOReKcg.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const W=(e,r)=>{if(!e&&!r)return[];const s=[];if(e==="all"||typeof e=="number")s.push(`ams-grid__cell--span-${e}`);else if(e){const{narrow:l,medium:o,wide:i}=e;s.push(`ams-grid__cell--span-${l}`,`ams-grid__cell--span-${o}-medium`,`ams-grid__cell--span-${i}-wide`)}if(typeof r=="number")s.push(`ams-grid__cell--start-${r}`);else if(r){const{narrow:l,medium:o,wide:i}=r;s.push(`ams-grid__cell--start-${l}`,`ams-grid__cell--start-${o}-medium`,`ams-grid__cell--start-${i}-wide`)}return s},J=F.forwardRef(({as:e="div",children:r,className:s,span:l,start:o,...i},y)=>a.jsx(e,{...i,ref:y,className:I("ams-grid__cell",W(l,o),s),children:r}));J.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const X=(e,r,s)=>{const l=[];return s?[`ams-grid--padding-vertical--${s}`]:(e&&l.push(`ams-grid--padding-bottom--${e}`),r&&l.push(`ams-grid--padding-top--${r}`),l)},K=F.forwardRef(({children:e,className:r,gapVertical:s,paddingBottom:l,paddingTop:o,paddingVertical:i,...y},U)=>a.jsx("div",{...y,ref:U,className:I("ams-grid",s&&`ams-grid--gap-vertical--${s}`,X(l,o,i),r),children:e}));K.displayName="Grid";const n=Object.assign(K,{Cell:J});try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}const Y={title:"Components/Layout/Grid",component:n,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}}};n.Cell;const b={decorators:[e=>a.jsx(B,{children:a.jsx(e,{})})]},f={decorators:[e=>a.jsx(B,{children:a.jsx(n,{children:a.jsx(e,{})})})],render:({children:e,...r})=>a.jsx(n.Cell,{...r,children:e})},Q=Array.from(Array(12).keys()).map(e=>a.jsx(n.Cell,{className:"ams-docs-pink-box"},e)),t={...b,args:{children:Q}},d={...b,args:{children:Q,paddingVertical:"medium"}},m={...b,args:{children:Array.from(Array(6).keys()).map(e=>a.jsx(n.Cell,{className:"ams-docs-pink-box",span:4},e)),gapVertical:"small"}},c={...f,args:{children:a.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},p={...f,args:{children:a.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},u={...f,args:{children:a.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},g={...f,args:{children:a.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},h={...f,args:{as:"section"},render:({as:e})=>a.jsx(n.Cell,{as:e,span:"all",children:a.jsxs("p",{className:"ams-docs-pink-box ams-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",e,"`."]})})};var v,C,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells
  }
}`,...(_=(C=t.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var x,S,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var G,N,k;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var V,j,w;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var $,D,z;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,q,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>,
    span: 'all'
  }
}`,...(M=(q=u.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var L,O,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,E,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
    </Grid.Cell>
}`,...(H=(E=h.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Z=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],le=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:p,CustomTagName:h,Default:t,SpanAllColumns:u,SpanMultipleColumns:c,StartPosition:g,VerticalGap:m,VerticalSpace:d,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{p as C,le as G,c as S,d as V,m as a,u as b,g as c,h as d};
