import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as m,b as l,P as d}from"./index.esm-BW9UsdlY.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as A}from"./index-G8LIXM5I.js";import{s as L}from"./shortSize-YHt-sfIr.js";import{a as T,m as P}from"./types-CjGn4A4T.js";const V=["none","x-small","small","large","x-large"],t=A.forwardRef(({align:i,alignHorizontal:c,as:H="div",children:_,className:N,gap:s,...z},w)=>e.jsx(H,{...z,className:S("ams-column",i&&`ams-column--align-${i}`,c&&`ams-column--align-horizontal-${c}`,s==="none"&&"ams-column--gap-none",s&&s!=="none"&&`ams-gap-${L[s]}`,N),ref:w,children:_}));t.displayName="Column";try{t.displayName="Column",t.__docgenInfo={description:"",displayName:"Column",props:{align:{defaultValue:{value:"start"},description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignHorizontal:{defaultValue:{value:"stretch"},description:"The horizontal alignment of the items in the column.",name:"alignHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'},{value:'"x-small"'},{value:'"x-large"'}]}}}}}catch{}const E=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],I={title:"Components/Layout/Column",component:t,args:{children:E,className:"ams-docs-column"},argTypes:{align:{control:{labels:{undefined:"start"},type:"radio"},options:[void 0,...P]},alignHorizontal:{control:{labels:{undefined:"stretch"},type:"radio"},options:[void 0,...T]},className:{table:{disable:!0}},gap:{control:{labels:{undefined:"medium"},type:"radio"},options:[void 0,...V]}}},a={},n={args:{align:"center"}},r={args:{alignHorizontal:"center"}},o={args:{as:"section",children:[e.jsx(m,{level:3,children:"Zoekresultaten"}),e.jsxs(l,{children:[e.jsx(m,{level:4,children:e.jsx(l.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})}),e.jsx(d,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."})]},1),e.jsxs(l,{children:[e.jsx(m,{level:4,children:e.jsx(l.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})}),e.jsx(d,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."})]},2)],className:void 0}};var u,p,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,k,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    alignHorizontal: 'center'
  }
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var j,y,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const O=["Default","Alignment","HorizontalAlignment","ImproveSemantics"],Z=Object.freeze(Object.defineProperty({__proto__:null,Alignment:n,Default:a,HorizontalAlignment:r,ImproveSemantics:o,__namedExportsOrder:O,default:I},Symbol.toStringTag,{value:"Module"}));export{n as A,Z as C,r as H,o as I};
