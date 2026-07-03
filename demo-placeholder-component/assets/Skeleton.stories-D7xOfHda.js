import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{O as r,t as i}from"./src-D71NGZ7A.js";import{n as a,t as o}from"./decorators-CBKDTicM.js";var s=e({Default:()=>u,Heading:()=>d,Image:()=>h,List:()=>p,Paragraph:()=>f,Table:()=>m,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g,_=t((()=>{i(),o(),c=n(),l={title:`Components/Feedback/Skeleton`,component:r},u={args:{children:[(0,c.jsx)(r.Image,{},1),(0,c.jsx)(r.Heading,{},2),(0,c.jsx)(r.Paragraph,{},3)]},decorators:[a(`24rem`)]},d={args:{lines:1},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,c.jsx)(r,{children:(0,c.jsx)(r.Heading,{lines:e})})},f={args:{lines:3},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,c.jsx)(r,{children:(0,c.jsx)(r.Paragraph,{lines:e})})},p={args:{lines:3},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,c.jsx)(r,{children:(0,c.jsx)(r.List,{lines:e})})},m={args:{columns:3,rows:3},argTypes:{columns:{control:{min:1,step:1,type:`number`}},rows:{control:{min:1,step:1,type:`number`}}},render:({columns:e,rows:t})=>(0,c.jsx)(r,{children:(0,c.jsx)(r.Table,{columns:e,rows:t})})},h={args:{children:(0,c.jsx)(r.Image,{})},decorators:[a(`24rem`)]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Skeleton.Image key={1} />, <Skeleton.Heading key={2} />, <Skeleton.Paragraph key={3} />]
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 1
  },
  argTypes: {
    lines: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      }
    }
  },
  render: ({
    lines
  }) => <Skeleton>
      <Skeleton.Heading lines={lines} />
    </Skeleton>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 3
  },
  argTypes: {
    lines: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      }
    }
  },
  render: ({
    lines
  }) => <Skeleton>
      <Skeleton.Paragraph lines={lines} />
    </Skeleton>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 3
  },
  argTypes: {
    lines: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      }
    }
  },
  render: ({
    lines
  }) => <Skeleton>
      <Skeleton.List lines={lines} />
    </Skeleton>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    rows: 3
  },
  argTypes: {
    columns: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      }
    },
    rows: {
      control: {
        min: 1,
        step: 1,
        type: 'number'
      }
    }
  },
  render: ({
    columns,
    rows
  }) => <Skeleton>
      <Skeleton.Table columns={columns} rows={rows} />
    </Skeleton>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Skeleton.Image />
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Heading`,`Paragraph`,`List`,`Table`,`Image`]}));_();export{u as Default,d as Heading,h as Image,p as List,f as Paragraph,m as Table,g as __namedExportsOrder,l as default,_ as n,s as t};