import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{g as $,H as z,L as D}from"./index.esm-fRmPg76r.js";import{m as I,a as M}from"./types-B5YJ6HHW.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as F}from"./index-RigO-4kf.js";const c=F.forwardRef(({align:a,alignVertical:m,as:L="div",children:q,className:C,gap:d,wrap:H,...B},W)=>e.jsx(L,{...B,ref:W,className:P("ams-row",a&&`ams-row--align-${a}`,m&&`ams-row--align-vertical-${m}`,d&&`ams-row--gap-${d}`,H&&"ams-row--wrap",C),children:q}));c.displayName="Row";try{c.displayName="Row",c.__docgenInfo={description:"",displayName:"Row",props:{align:{defaultValue:{value:"start"},description:"The horizontal alignment of the items in the row.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignVertical:{defaultValue:{value:"stretch"},description:"The vertical alignment of the items in the row.",name:"alignVertical",required:!1,type:{name:"enum",value:[{value:'"baseline"'},{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'},{value:'"extra-small"'},{value:'"extra-large"'}]}},wrap:{defaultValue:{value:"false"},description:"Whether items of the row can wrap onto multiple lines.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const G=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],J={title:"Components/Layout/Row",component:c,args:{children:G,className:"ams-docs-row"},argTypes:{align:{control:{type:"radio",labels:{undefined:"start"}},options:[void 0,...I]},alignVertical:{control:{type:"radio",labels:{undefined:"stretch"}},options:[void 0,...M]},className:{table:{disable:!0}},gap:{control:{type:"radio",labels:{undefined:"medium"}},options:["none","extra-small","small",void 0,"large","extra-large"]}}},r={},s={args:{align:"evenly"}},n={args:{align:"end",alignVertical:"center",children:e.jsx($,{label:"AB"})}},l={args:{align:"end",dir:"rtl"},argTypes:{dir:{table:{disable:!0}}}},t={args:{align:"between",alignVertical:"baseline",children:[e.jsx(z,{level:3,children:"An example heading"}),e.jsx(D,{href:"#",children:"An example link"})],className:void 0,wrap:!0}},i={args:{alignVertical:"center"}},o={args:{children:Array.from(Array(4).keys()).map(a=>e.jsx("span",{className:"ams-docs-item",style:{flexBasis:"16rem"}},a)),wrap:!0}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,f,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'evenly'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,A,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    align: 'end',
    alignVertical: 'center',
    children: <Avatar label="AB" />
  }
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var x,b,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    align: 'end',
    dir: 'rtl'
  },
  argTypes: {
    dir: {
      table: {
        disable: true
      }
    }
  }
}`,...(V=(b=l.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var S,_,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    align: 'between',
    alignVertical: 'baseline',
    children: [<Heading level={3}>An example heading</Heading>, <Link href="#">An example link</Link>],
    className: undefined,
    wrap: true
  }
}`,...(N=(_=t.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var j,T,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    alignVertical: 'center'
  }
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var k,E,O;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(4).keys()).map(i => <span className="ams-docs-item" key={i} style={{
      flexBasis: '16rem'
    }} />),
    wrap: true
  }
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const K=["Default","Alignment","EndAlignASingleChild","EndAlignASingleChildRtl","AlignOpposingTexts","VerticalAlignment","Wrapping"],ee=Object.freeze(Object.defineProperty({__proto__:null,AlignOpposingTexts:t,Alignment:s,Default:r,EndAlignASingleChild:n,EndAlignASingleChildRtl:l,VerticalAlignment:i,Wrapping:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{s as A,n as E,ee as R,i as V,o as W,l as a,t as b};
