import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as N}from"./index-uCp2LrAq.js";import{B as R}from"./Button-B8AXuJtG.js";import{P as o}from"./Paragraph-DpVlyIEJ.js";const O=["baseline","bottom","center","stretch","top"],P=["around","between","center","end","evenly","start"],i=N.forwardRef(({align:e,alignVertical:l,as:_="div",children:A,className:S,gap:T="medium",wrap:V,...j},k)=>r.jsx(_,{...j,ref:k,className:z("ams-row",`ams-row--${T}`,e&&`ams-row--align-${e}`,l&&`ams-row--align-vertical-${l}`,V&&"ams-row--wrap",S),children:A}));i.displayName="Row";try{i.displayName="Row",i.__docgenInfo={description:"",displayName:"Row",props:{align:{defaultValue:null,description:"The horizontal alignment of the items in the row.",name:"align",required:!1,type:{name:"string"}},alignVertical:{defaultValue:null,description:"The vertical alignment of the items in the row.",name:"alignVertical",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of vertical space between items.",name:"gap",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"Whether items of the row can wrap onto multiple lines.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const q=Array.from(Array(3).keys()).map(e=>r.jsxs(R,{children:["Button ",e+1]},e)),v=[r.jsx(o,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},1),r.jsxs(o,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:["Two",r.jsx("br",{}),"lines"]},2),r.jsx(o,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},3)],B={title:"Components/Layout/Row",component:i,args:{children:q},argTypes:{align:{control:"radio",options:P},alignVertical:{control:"radio",options:O},gap:{control:"radio",options:["extra-small","small","medium","large","extra-large"]}}},a={},s={args:{align:"evenly",children:v}},n={args:{alignVertical:"center",children:v}},t={args:{children:Array.from(Array(4).keys()).map(e=>r.jsx(o,{className:"ams-docs-pink-box",style:{inlineSize:"16rem"}},e)),wrap:!0}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    align: 'evenly',
    children: ThreeParagraphs
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    alignVertical: 'center',
    children: ThreeParagraphs
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,x,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(4).keys()).map(i => <Paragraph className="ams-docs-pink-box" key={i} style={{
      inlineSize: '16rem'
    }} />),
    wrap: true
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const H=["Default","HorizontalAlignment","VerticalAlignment","Wrapping"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,HorizontalAlignment:s,VerticalAlignment:n,Wrapping:t,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{s as H,M as R,n as V,t as W};
