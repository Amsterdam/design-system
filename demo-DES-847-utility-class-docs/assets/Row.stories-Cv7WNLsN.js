import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as q}from"./index-Cs7sjTYM.js";import{B as W}from"./Button-fZZcNY7w.js";import{A as C}from"./Avatar-CRAAVM1p.js";import{H as $}from"./Heading-BgL7hu1i.js";import{L as D}from"./Link-D5rDrOyf.js";import{P as c}from"./Paragraph-BWS5kDPY.js";const l=q.forwardRef(({align:a,alignVertical:m,as:O="div",children:R,className:H,gap:p,wrap:B,...E},L)=>e.jsx(O,{...E,ref:L,className:P("ams-row",a&&`ams-row--align-${a}`,m&&`ams-row--align-vertical-${m}`,p&&`ams-row--gap-${p}`,B&&"ams-row--wrap",H),children:R}));l.displayName="Row";try{l.displayName="Row",l.__docgenInfo={description:"",displayName:"Row",props:{align:{defaultValue:null,description:"The horizontal alignment of the items in the row.",name:"align",required:!1,type:{name:"string"}},alignVertical:{defaultValue:null,description:"The vertical alignment of the items in the row.",name:"alignVertical",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:null,description:"The amount of vertical space between items.",name:"gap",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"Whether items of the row can wrap onto multiple lines.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const M=["baseline","center","end","start"],I=["around","between","center","end","evenly"],F=Array.from(Array(3).keys()).map(a=>e.jsxs(W,{children:["Button ",a+1]},a)),N=[e.jsx(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},1),e.jsxs(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:["Two",e.jsx("br",{}),"lines"]},2),e.jsx(c,{className:"ams-docs-pink-box",style:{inlineSize:"8rem"},children:"One line"},3)],G={title:"Components/Layout/Row",component:l,args:{children:F},argTypes:{align:{control:"radio",options:I},alignVertical:{control:"radio",options:M},gap:{control:"radio",options:["extra-small","small","medium","large","extra-large"]}}},r={},n={args:{align:"evenly",children:N}},s={args:{align:"end",children:e.jsx(C,{label:"AB"})}},i={args:{align:"between",alignVertical:"baseline",children:[e.jsx($,{level:3,children:"An example heading"}),e.jsx(D,{href:"#",children:"An example link"})],wrap:!0}},o={args:{alignVertical:"center",children:N}},t={args:{children:Array.from(Array(4).keys()).map(a=>e.jsx("span",{className:"ams-docs-pink-box",style:{inlineSize:"16rem"}},a)),wrap:!0}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    align: 'evenly',
    children: ThreeParagraphs
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,w,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    align: 'end',
    children: <Avatar label="AB" />
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var b,v,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    align: 'between',
    alignVertical: 'baseline',
    children: [<Heading level={3}>An example heading</Heading>, <Link href="#">An example link</Link>],
    wrap: true
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,k,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    alignVertical: 'center',
    children: ThreeParagraphs
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var V,_,z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(4).keys()).map(i => <span className="ams-docs-pink-box" key={i} style={{
      inlineSize: '16rem'
    }} />),
    wrap: true
  }
}`,...(z=(_=t.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const J=["Default","HorizontalAlignment","EndAlignASingleChild","AlignOpposingTexts","VerticalAlignment","Wrapping"],re=Object.freeze(Object.defineProperty({__proto__:null,AlignOpposingTexts:i,Default:r,EndAlignASingleChild:s,HorizontalAlignment:n,VerticalAlignment:o,Wrapping:t,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{i as A,s as E,n as H,re as R,o as V,t as W};
