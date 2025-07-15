import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as p}from"./index.esm-BpefUuPx.js";import{i as m,I as l}from"./Icon-Pril9caF.js";import{I as d,e as u}from"./index.esm-CVKOIKGq.js";import{R as i}from"./Row-BbMuA978.js";import{P as g}from"./Paragraph-BDLeQ91t.js";const x={title:"Components/Media/Icon",component:l,args:{svg:u},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...m]},svg:{control:{type:"select"},mapping:d,options:Object.keys(d)}}},a={},o={render:r=>e.jsxs(i,{gap:"small",children:[e.jsx(l,{...r}),e.jsx(g,{color:r.color,children:"Regular body text"})]})},s={args:{size:"large"},render:r=>e.jsxs(i,{gap:"small",children:[e.jsx(l,{...r}),e.jsx(g,{color:r.color,size:"large",children:"Large body text"})]})},t={args:{size:"heading-3"},render:r=>e.jsxs(i,{gap:"small",children:[e.jsx(l,{...r}),e.jsx(p,{color:r.color,level:3,children:"Heading 3 text"})]})},c={args:{square:!0}},n={args:{color:"inverse"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color}>Regular body text</Paragraph>
    </Row>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="large">
        Large body text
      </Paragraph>
    </Row>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={3}>
        Heading 3 text
      </Heading>
    </Row>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...n.parameters?.docs?.source}}};const h=["Default","WithBodyText","WithLargeBodyText","WithAHeading","Square","InverseColour"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:n,Square:c,WithAHeading:t,WithBodyText:o,WithLargeBodyText:s,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{b as I,c as S,o as W,s as a,t as b,n as c};
