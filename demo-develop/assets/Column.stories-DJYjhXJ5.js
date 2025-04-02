import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as i,b as s,P as d}from"./index.esm-BxNgk_Uq.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as A}from"./index-G8LIXM5I.js";import{a as L,m as T}from"./types-CjGn4A4T.js";const P=["none","x-small","small","large","x-large"],o=A.forwardRef(({align:t,alignHorizontal:m,as:H="div",children:_,className:N,gap:c,...z},w)=>e.jsx(H,{...z,className:S("ams-column",t&&`ams-column--align-${t}`,m&&`ams-column--align-horizontal-${m}`,c&&`ams-column--gap-${c}`,N),ref:w,children:_}));o.displayName="Column";try{o.displayName="Column",o.__docgenInfo={description:"",displayName:"Column",props:{align:{defaultValue:{value:"start"},description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignHorizontal:{defaultValue:{value:"stretch"},description:"The horizontal alignment of the items in the column.",name:"alignHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'},{value:'"x-small"'},{value:'"x-large"'}]}}}}}catch{}const V=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],E={title:"Components/Layout/Column",component:o,args:{children:V,className:"ams-docs-column"},argTypes:{align:{control:{labels:{undefined:"start"},type:"radio"},options:[void 0,...T]},alignHorizontal:{control:{labels:{undefined:"stretch"},type:"radio"},options:[void 0,...L]},className:{table:{disable:!0}},gap:{control:{labels:{undefined:"medium"},type:"radio"},options:[void 0,...P]}}},a={},n={args:{align:"center"}},r={args:{alignHorizontal:"center"}},l={args:{as:"section",children:[e.jsx(i,{level:3,children:"Zoekresultaten"},1),e.jsxs(s,{children:[e.jsx(i,{level:4,children:e.jsx(s.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})}),e.jsx(d,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."})]},2),e.jsxs(s,{children:[e.jsx(i,{level:4,children:e.jsx(s.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})}),e.jsx(d,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."})]},3)],className:void 0}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,k,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    alignHorizontal: 'center'
  }
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var b,j,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: [<Heading key={1} level={3}>
        Zoekresultaten
      </Heading>, <Card key={2}>
        <Heading level={4}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>, <Card key={3}>
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const I=["Default","Alignment","HorizontalAlignment","ImproveSemantics"],M=Object.freeze(Object.defineProperty({__proto__:null,Alignment:n,Default:a,HorizontalAlignment:r,ImproveSemantics:l,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{n as A,M as C,r as H,l as I};
