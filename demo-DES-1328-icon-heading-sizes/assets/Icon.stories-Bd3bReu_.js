import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as u,H as h}from"./index.esm-BTggeBFE.js";import{i as p,I as l}from"./Icon-Pril9caF.js";import{I as g,e as x}from"./index.esm-CVKOIKGq.js";import{R as d}from"./Row-BbMuA978.js";import{P as m}from"./Paragraph-BDLeQ91t.js";const z={title:"Components/Media/Icon",component:l,args:{svg:x},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...p]},svg:{control:{type:"select"},mapping:g,options:Object.keys(g)}}},a={},s={render:e=>r.jsxs(d,{gap:"small",children:[r.jsx(l,{...e}),r.jsx(m,{color:e.color,children:"Regular body text"})]})},o={args:{size:"large"},render:e=>r.jsxs(d,{gap:"small",children:[r.jsx(l,{...e}),r.jsx(m,{color:e.color,size:"large",children:"Large body text"})]})},n={args:{size:"heading-3"},argTypes:{size:{options:[...p.filter(e=>e.startsWith("heading-"))]}},render:e=>{const c=e.size?e.size.slice(-1):"3";return r.jsxs(d,{gap:"small",children:[r.jsx(l,{...e}),c==="0"?r.jsxs(u,{color:e.color,children:["Heading ",c," text"]}):r.jsxs(h,{color:e.color,level:1,size:`level-${c}`,children:["Heading ",c," text"]})]})}},t={args:{square:!0}},i={args:{color:"inverse"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color}>Regular body text</Paragraph>
    </Row>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="large">
        Large body text
      </Paragraph>
    </Row>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  argTypes: {
    size: {
      options: [...iconSizes.filter(size => size.startsWith('heading-'))]
    }
  },
  render: args => {
    const headingSize = args.size ? args.size.slice(-1) as '0' | '1' | '2' | '3' | '4' | '5' | '6' : '3';
    return <Row gap="small">
        <Icon {...args} />
        {headingSize === '0' ? <PageHeading color={args.color}>Heading {headingSize} text</PageHeading> : <Heading color={args.color} level={1} size={\`level-\${headingSize}\`}>
            Heading {headingSize} text
          </Heading>}
      </Row>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","WithBodyText","WithLargeBodyText","WithAHeading","Square","InverseColour"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:i,Square:t,WithAHeading:n,WithBodyText:s,WithLargeBodyText:o,__namedExportsOrder:S,default:z},Symbol.toStringTag,{value:"Module"}));export{I,t as S,s as W,o as a,n as b,i as c};
