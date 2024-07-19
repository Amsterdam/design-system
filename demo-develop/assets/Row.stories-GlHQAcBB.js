import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as q}from"./index-Cs7sjTYM.js";import{B as W}from"./Button-fZZcNY7w.js";import{A as C}from"./Avatar-CRAAVM1p.js";import{H as $}from"./Heading-BgL7hu1i.js";import{L as D}from"./Link-CkpyUMtL.js";import{P as c}from"./Paragraph-BWS5kDPY.js";const M=["baseline","center","end","start"],I=["around","between","center","end","evenly"],l=q.forwardRef(({align:a,alignVertical:m,as:N="div",children:O,className:R,gap:H="medium",wrap:B,...E},L)=>e.jsx(N,{...E,ref:L,className:P("ams-row",`ams-row--${H}`,a&&`ams-row--align-${a}`,m&&`ams-row--align-vertical-${m}`,B&&"ams-row--wrap",R),children:O}));l.displayName="Row";try{l.displayName="Row",l.__docgenInfo={description:"",displayName:"Row",props:{align:{defaultValue:null,description:"The horizontal alignment of the items in the row.",name:"align",required:!1,type:{name:"string"}},alignVertical:{defaultValue:null,description:"The vertical alignment of the items in the row.",name:"alignVertical",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of vertical space between items.",name:"gap",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"Whether items of the row can wrap onto multiple lines.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const F=Array.from(Array(3).keys()).map(a=>e.jsxs(W,{children:["Button ",a+1]},a)),z=[e.jsx(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},1),e.jsxs(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:["Two",e.jsx("br",{}),"lines"]},2),e.jsx(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},3)],G={title:"Components/Layout/Row",component:l,args:{children:F},argTypes:{align:{control:"radio",options:I},alignVertical:{control:"radio",options:M},gap:{control:"radio",options:["extra-small","small","medium","large","extra-large"]}}},r={},n={args:{align:"evenly",children:z}},s={args:{align:"end",children:e.jsx(C,{label:"AB"})}},i={args:{align:"between",alignVertical:"baseline",children:[e.jsx($,{level:3,children:"An example heading"}),e.jsx(D,{href:"#",children:"An example link"})],wrap:!0}},o={args:{alignVertical:"center",children:z}},t={args:{children:Array.from(Array(4).keys()).map(a=>e.jsx("span",{className:"ams-docs-pink-box",style:{inlineSize:"16rem"}},a)),wrap:!0}};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    align: 'evenly',
    children: ThreeParagraphs
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,x,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    align: 'end',
    children: <Avatar label="AB" />
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var A,b,v;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    align: 'between',
    alignVertical: 'baseline',
    children: [<Heading level={3}>An example heading</Heading>, <Link href="#">An example link</Link>],
    wrap: true
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,j,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    alignVertical: 'center',
    children: ThreeParagraphs
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,V,_;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(4).keys()).map(i => <span className="ams-docs-pink-box" key={i} style={{
      inlineSize: '16rem'
    }} />),
    wrap: true
  }
}`,...(_=(V=t.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const J=["Default","HorizontalAlignment","EndAlignASingleChild","AlignOpposingTexts","VerticalAlignment","Wrapping"],re=Object.freeze(Object.defineProperty({__proto__:null,AlignOpposingTexts:i,Default:r,EndAlignASingleChild:s,HorizontalAlignment:n,VerticalAlignment:o,Wrapping:t,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{i as A,s as E,n as H,re as R,o as V,t as W};
