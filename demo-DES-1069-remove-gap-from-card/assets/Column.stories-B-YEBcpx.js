import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as i,b as l,P as d}from"./index.esm-CTzaYrgX.js";import{c as A}from"./clsx-B-dksMZM.js";import{r as S}from"./index-G8LIXM5I.js";import{a as L,m as T}from"./types-CjGn4A4T.js";const P=["none","x-small","small","large","x-large"],o=S.forwardRef(({align:t,alignHorizontal:m,as:C="div",children:H,className:_,gap:c,...w},z)=>e.jsx(C,{...w,className:A("ams-column",t&&`ams-column--align-${t}`,m&&`ams-column--align-horizontal-${m}`,c&&`ams-column--gap-${c}`,_),ref:z,children:H}));o.displayName="Column";try{o.displayName="Column",o.__docgenInfo={description:"",displayName:"Column",props:{align:{defaultValue:{value:"start"},description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignHorizontal:{defaultValue:{value:"stretch"},description:"The horizontal alignment of the items in the column.",name:"alignHorizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"x-small"'},{value:'"large"'},{value:'"x-large"'}]}}}}}catch{}const V=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],E={title:"Components/Layout/Column",component:o,args:{children:V,className:"ams-docs-column"},argTypes:{align:{control:{labels:{undefined:"start"},type:"radio"},options:[void 0,...T]},alignHorizontal:{control:{labels:{undefined:"stretch"},type:"radio"},options:[void 0,...L]},className:{table:{disable:!0}},gap:{control:{labels:{undefined:"medium"},type:"radio"},options:[void 0,...P]}}},a={},n={args:{align:"center"}},s={args:{alignHorizontal:"center"}},r={args:{as:"section",children:[e.jsx(i,{className:"ams-mb-s",level:3,children:"Zoekresultaten"},1),e.jsxs(l,{children:[e.jsx(i,{className:"ams-mb-s",level:4,children:e.jsx(l.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})}),e.jsx(d,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."})]},2),e.jsxs(l,{children:[e.jsx(i,{className:"ams-mb-s",level:4,children:e.jsx(l.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})}),e.jsx(d,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."})]},3)],className:void 0}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    alignHorizontal: 'center'
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,j,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: [<Heading className="ams-mb-s" key={1} level={3}>
        Zoekresultaten
      </Heading>, <Card key={2}>
        <Heading className="ams-mb-s" level={4}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>, <Card key={3}>
        <Heading className="ams-mb-s" level={4}>
          <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
        </Heading>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
      </Card>],
    className: undefined
  }
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const I=["Default","Alignment","HorizontalAlignment","ImproveSemantics"],M=Object.freeze(Object.defineProperty({__proto__:null,Alignment:n,Default:a,HorizontalAlignment:s,ImproveSemantics:r,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{n as A,M as C,s as H,r as I};
