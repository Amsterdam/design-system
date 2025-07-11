import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as u}from"./index.esm-BdWpuRjq.js";import{i as j,I as a}from"./Icon-BBW_x4VP.js";import{I as h,e as H}from"./index.esm-BfA08eIW.js";import{R as s}from"./Row-JeNeYdOs.js";import{P as x}from"./Paragraph-BDLeQ91t.js";const v={title:"Components/Media/Icon",component:a,args:{svg:H},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...j]},svg:{control:{type:"select"},mapping:h,options:Object.keys(h)}}},o={},l={render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(x,{color:r.color,children:"Regular body text"})]})},t={args:{size:"small"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(x,{color:r.color,size:"small",children:"Small body text"})]})},c={args:{size:"large"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(x,{color:r.color,size:"large",children:"Large body text"})]})},n={args:{size:"heading-3"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(u,{color:r.color,level:3,children:"Heading 3 text"})]})},i={args:{size:"heading-4"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(u,{color:r.color,level:4,children:"Heading 4 text"})]})},d={args:{size:"heading-5"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(u,{color:r.color,level:4,size:"level-5",children:"Heading 5 text"})]})},g={args:{size:"heading-6"},render:r=>e.jsxs(s,{gap:"small",children:[e.jsx(a,{...r}),e.jsx(u,{color:r.color,level:4,size:"level-6",children:"Heading 6 text"})]})},p={args:{square:!0}},m={args:{color:"inverse"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color}>Regular body text</Paragraph>
    </Row>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="small">
        Small body text
      </Paragraph>
    </Row>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="large">
        Large body text
      </Paragraph>
    </Row>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={3}>
        Heading 3 text
      </Heading>
    </Row>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-4'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4}>
        Heading 4 text
      </Heading>
    </Row>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-5'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4} size="level-5">
        Heading 5 text
      </Heading>
    </Row>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-6'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4} size="level-6">
        Heading 6 text
      </Heading>
    </Row>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...m.parameters?.docs?.source}}};const z=["Default","WithBodyText","WithSmallBodyText","WithLargeBodyText","WithHeading3","WithHeading4","WithHeading5","WithHeading6","Square","InverseColour"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:m,Square:p,WithBodyText:l,WithHeading3:n,WithHeading4:i,WithHeading5:d,WithHeading6:g,WithLargeBodyText:c,WithSmallBodyText:t,__namedExportsOrder:z,default:v},Symbol.toStringTag,{value:"Module"}));export{W as I,p as S,l as W,t as a,c as b,n as c,i as d,d as e,g as f,m as g};
