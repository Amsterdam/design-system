import{j as e}from"./jsx-runtime-BlAj40OV.js";import{H as i,d as s,P as d}from"./index.esm-B74RJSZm.js";import{m as A,c as S}from"./layout-B5YJ6HHW.js";import{c as L}from"./clsx-B-dksMZM.js";import{r as T}from"./index-Cs7sjTYM.js";const o=T.forwardRef(({align:t,alignHorizontal:m,as:H="div",children:_,className:N,gap:c,...w},z)=>e.jsx(H,{...w,ref:z,className:L("ams-column",t&&`ams-column--align-${t}`,m&&`ams-column--align-horizontal-${m}`,c&&`ams-column--gap-${c}`,N),children:_}));o.displayName="Column";try{o.displayName="Column",o.__docgenInfo={description:"",displayName:"Column",props:{align:{defaultValue:{value:"start"},description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignHorizontal:{defaultValue:{value:"stretch"},description:"The horizontal alignment of the items in the column.",name:"alignHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"extra-small"'},{value:'"large"'},{value:'"extra-large"'}]}}}}}catch{}const P=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],V={title:"Components/Layout/Column",component:o,args:{children:P,className:"ams-docs-column"},argTypes:{align:{control:{type:"radio",labels:{undefined:"start"}},options:[void 0,...A]},alignHorizontal:{control:{type:"radio",labels:{undefined:"stretch"}},options:[void 0,...S]},className:{table:{disable:!0}},gap:{control:{type:"radio",labels:{undefined:"medium"}},options:["none","extra-small","small",void 0,"large","extra-large"]}}},a={},n={args:{align:"center"}},r={args:{alignHorizontal:"center"}},l={args:{as:"section",children:[e.jsx(i,{level:3,children:"Zoekresultaten"}),e.jsxs(s,{children:[e.jsx(i,{level:4,children:e.jsx(s.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})}),e.jsx(d,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."})]},1),e.jsxs(s,{children:[e.jsx(i,{level:4,children:e.jsx(s.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})}),e.jsx(d,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."})]},2)],className:void 0}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,k,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    alignHorizontal: 'center'
  }
}`,...(j=(k=r.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: [<Heading level={3}>Zoekresultaten</Heading>, <Card key={1}>
        <Heading level={4}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>, <Card key={2}>
        <Heading level={4}>
          <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
        </Heading>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
      </Card>],
    className: undefined
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const E=["Default","Alignment","HorizontalAlignment","ImproveSemantics"],D=Object.freeze(Object.defineProperty({__proto__:null,Alignment:n,Default:a,HorizontalAlignment:r,ImproveSemantics:l,__namedExportsOrder:E,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,D as C,r as H,l as I};
