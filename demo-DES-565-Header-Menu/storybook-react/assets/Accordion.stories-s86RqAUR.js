import{A as r,j as e,P as a}from"./index.esm-xNdKwy9-.js";import{e as i}from"./exampleContent-l8yDkOfs.js";const s=i(),t=i(),l=i(),j={title:"Containers/Accordion",component:r,args:{headingLevel:1},argTypes:{children:{table:{disable:!0}},headingLevel:{control:{type:"select"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},c={args:{children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:l})},3)]}},n={args:{children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:l})},3)]}},o={args:{section:!1,children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:l})},3)]}};var d,p,h;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,S,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var b,m,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    section: false,
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(A=(m=o.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};const P=["Default","ExpandedByDefault","TooManyLandmarks"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:c,ExpandedByDefault:n,TooManyLandmarks:o,__namedExportsOrder:P,default:j},Symbol.toStringTag,{value:"Module"}));export{f as A,n as E,o as T};
