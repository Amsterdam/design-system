import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as w,b as a,P as d}from"./index.esm-uNCmEOu0.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as A}from"./index-G8LIXM5I.js";import{a as L,m as T}from"./types-yiKVj219.js";const P=["none","x-small","small","large","x-large"],o=A.forwardRef(({align:t,alignHorizontal:i,as:j="div",children:H,className:_,gap:m,...N},z)=>e.jsx(j,{...N,className:S("ams-column",t&&`ams-column--align-${t}`,i&&`ams-column--align-horizontal-${i}`,m&&`ams-column--gap-${m}`,_),ref:z,children:H}));o.displayName="Column";try{o.displayName="Column",o.__docgenInfo={description:"",displayName:"Column",props:{align:{defaultValue:{value:"start"},description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignHorizontal:{defaultValue:{value:"stretch"},description:"The horizontal alignment of the items in the column.",name:"alignHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"x-small"'},{value:'"large"'},{value:'"x-large"'}]}}}}}catch{}const V=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],E={title:"Components/Layout/Column",component:o,args:{children:V,className:"ams-docs-column"},argTypes:{align:{control:{labels:{undefined:"start"},type:"radio"},options:[void 0,...T]},alignHorizontal:{control:{labels:{undefined:"stretch"},type:"radio"},options:[void 0,...L]},className:{table:{disable:!0}},gap:{control:{labels:{undefined:"medium"},type:"radio"},options:[void 0,...P]}}},n={},r={args:{align:"center"}},l={args:{alignHorizontal:"center"}},s={args:{as:"section",children:[e.jsx(w,{level:1,children:"Zoekresultaten"},1),e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})}),e.jsx(d,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."})]},2),e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})}),e.jsx(d,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."})]},3)],className:void 0}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,x,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    alignHorizontal: 'center'
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,y,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: [<Heading key={1} level={1}>
        Zoekresultaten
      </Heading>, <Card key={2}>
        <Card.Heading level={2}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Card.Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>, <Card key={3}>
        <Card.Heading level={2}>
          <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
        </Card.Heading>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
      </Card>],
    className: undefined
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const I=["Default","Alignment","HorizontalAlignment","ImproveSemantics"],M=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Default:n,HorizontalAlignment:l,ImproveSemantics:s,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{r as A,M as C,l as H,s as I};
