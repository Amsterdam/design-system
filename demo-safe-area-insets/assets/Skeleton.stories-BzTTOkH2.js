import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{k as r,t as i}from"./src-DbY8H8BQ.js";import{n as a,t as o}from"./decorators-BkekteDW.js";import{i as s,t as c}from"./types-Upr6OxRk.js";var l=t({Default:()=>f,__namedExportsOrder:()=>p,default:()=>d}),u,d,f,p,m=e((()=>{i(),s(),o(),u=n(),d={title:`Components/Feedback/Skeleton`,component:r},f={args:{aspectRatio:`16:9`,headingLines:1,paragraphLines:3},argTypes:{aspectRatio:{control:`select`,description:`The aspect ratio of the Image in this example.`,options:c},headingLines:{control:{min:1,step:1,type:`number`},description:`The number of lines the Heading in this example spans.`},paragraphLines:{control:{min:1,step:1,type:`number`},description:`The number of lines the Paragraph in this example spans.`}},decorators:[a(`24rem`)],render:({aspectRatio:e,headingLines:t,paragraphLines:n,...i})=>(0,u.jsxs)(r,{...i,children:[(0,u.jsx)(r.Image,{aspectRatio:e}),(0,u.jsx)(r.Heading,{lines:t}),(0,u.jsx)(r.Paragraph,{lines:n})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16:9',
    headingLines: 1,
    paragraphLines: 3
  },
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the container, not those of the parts. Hence the descriptions below.
  argTypes: {
    aspectRatio: {
      control: 'select',
      description: 'The aspect ratio of the Image in this example.',
      options: aspectRatioOptions
    },
    headingLines: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      },
      description: 'The number of lines the Heading in this example spans.'
    },
    paragraphLines: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      },
      description: 'The number of lines the Paragraph in this example spans.'
    }
  },
  decorators: [maximiseInlineSize('24rem')],
  render: ({
    aspectRatio,
    headingLines,
    paragraphLines,
    ...args
  }) => <Skeleton {...args}>
      <Skeleton.Image aspectRatio={aspectRatio} />
      <Skeleton.Heading lines={headingLines} />
      <Skeleton.Paragraph lines={paragraphLines} />
    </Skeleton>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}));m();export{f as Default,p as __namedExportsOrder,d as default,m as n,l as t};