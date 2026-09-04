import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{n as r,t as i}from"./Skeleton-jGlDQ3rN.js";import{n as a,t as o}from"./decorators-gKTbeBVF.js";import{i as s,t as c}from"./types-C0F630hP.js";var l=t({Default:()=>f,__namedExportsOrder:()=>p,default:()=>d}),u,d,f,p;function m(){return(m=e((()=>{r(),s(),o(),u=n(),d={title:`Components/Feedback/Skeleton`,component:i,subcomponents:{"Skeleton.Heading":i.Heading,"Skeleton.Image":i.Image,"Skeleton.List":i.List,"Skeleton.Paragraph":i.Paragraph,"Skeleton.Table":i.Table}},f={args:{aspectRatio:`16:9`,headingLines:1,paragraphLines:3},argTypes:{aspectRatio:{control:`select`,description:`The aspect ratio of the Image in this example.`,options:c},headingLines:{control:{min:1,step:1,type:`number`},description:`The number of lines the Heading in this example spans.`},paragraphLines:{control:{min:1,step:1,type:`number`},description:`The number of lines the Paragraph in this example spans.`}},decorators:[a(`24rem`)],render:({aspectRatio:e,headingLines:t,paragraphLines:n,...r})=>(0,u.jsxs)(i,{...r,children:[(0,u.jsx)(i.Image,{aspectRatio:e}),(0,u.jsx)(i.Heading,{lines:t}),(0,u.jsx)(i.Paragraph,{lines:n})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`]})))()}export{m as n,d as r,l as t};