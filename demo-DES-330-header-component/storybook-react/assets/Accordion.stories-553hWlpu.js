import{A as a,j as e,P as r}from"./index.esm-TvWdbKsd.js";import{e as c}from"./exampleContent-TBzjRFzx.js";const S={title:"Containers/Accordion",component:a,args:{headingLevel:1},argTypes:{children:{table:{disable:!0}},headingLevel:{control:{type:"select"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},n={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:c()})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:c()})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:c()})},3)]}},o={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:c()})},1),e.jsx(a.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(r,{children:c()})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:c()})},3)]}},i={args:{section:!1,children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:c()})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:c()})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:c()})},3)]}};var s,t,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>]
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>]
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,x,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    section: false,
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>]
  }
}`,...(m=(x=i.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const P=["Default","ExpandedByDefault","TooManyLandmarks"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ExpandedByDefault:o,TooManyLandmarks:i,__namedExportsOrder:P,default:S},Symbol.toStringTag,{value:"Module"}));export{j as A,o as E,i as T};
