import{j as e}from"./jsx-runtime-CKrituN3.js";import{A as r,P as a}from"./index.esm-Ck5SMtPJ.js";import{e as i}from"./exampleContent-CyZEwIqm.js";const s=i(),t=i(),d=i(),j={title:"Components/Containers/Accordion",component:r,args:{headingLevel:1},argTypes:{headingLevel:{control:{type:"radio"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},c={args:{children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:d})},3)]}},n={args:{children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:d})},3)]}},o={args:{section:!1,children:[e.jsx(r.Section,{label:"Eerste sectie",children:e.jsx(a,{children:s})},1),e.jsx(r.Section,{label:"Tweede sectie",children:e.jsx(a,{children:t})},2),e.jsx(r.Section,{label:"Derde sectie",children:e.jsx(a,{children:d})},3)]}};var l,p,h;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,S,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(m=(S=n.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var x,A,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const P=["Default","ExpandedByDefault","TooManyLandmarks"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:c,ExpandedByDefault:n,TooManyLandmarks:o,__namedExportsOrder:P,default:j},Symbol.toStringTag,{value:"Module"}));export{k as A,n as E,o as T};
