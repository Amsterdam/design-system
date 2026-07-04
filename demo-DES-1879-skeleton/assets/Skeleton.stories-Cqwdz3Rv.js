import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{O as r,t as i}from"./src-DBIPQBZY.js";import{n as a,t as o}from"./decorators-D5GQgxVr.js";import{i as s,t as c}from"./types-BuQOeBFc.js";var l=e({Default:()=>f,Heading:()=>p,Image:()=>_,List:()=>h,Paragraph:()=>m,Table:()=>g,__namedExportsOrder:()=>v,default:()=>d}),u,d,f,p,m,h,g,_,v,y=t((()=>{i(),s(),o(),u=n(),d={title:`Components/Feedback/Skeleton`,component:r},f={args:{children:[(0,u.jsx)(r.Image,{},1),(0,u.jsx)(r.Heading,{},2),(0,u.jsx)(r.Paragraph,{},3)]},decorators:[a(`24rem`)]},p={args:{lines:1},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,u.jsx)(r,{children:(0,u.jsx)(r.Heading,{lines:e})})},m={args:{lines:3},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,u.jsx)(r,{children:(0,u.jsx)(r.Paragraph,{lines:e})})},h={args:{lines:3},argTypes:{lines:{control:{min:1,step:1,type:`number`}}},render:({lines:e})=>(0,u.jsx)(r,{children:(0,u.jsx)(r.List,{lines:e})})},g={args:{columns:3,rows:3},argTypes:{columns:{control:{min:1,step:1,type:`number`}},rows:{control:{min:1,step:1,type:`number`}}},render:({columns:e,rows:t})=>(0,u.jsx)(r,{children:(0,u.jsx)(r.Table,{columns:e,rows:t})})},_={args:{aspectRatio:`16:9`},argTypes:{aspectRatio:{control:`select`,options:c}},decorators:[a(`24rem`)],render:({aspectRatio:e})=>(0,u.jsx)(r,{children:(0,u.jsx)(r.Image,{aspectRatio:e})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Skeleton.Image key={1} />, <Skeleton.Heading key={2} />, <Skeleton.Paragraph key={3} />]
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16:9'
  },
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: aspectRatioOptions
    }
  },
  decorators: [maximiseInlineSize('24rem')],
  render: ({
    aspectRatio
  }) => <Skeleton>
      <Skeleton.Image aspectRatio={aspectRatio} />
    </Skeleton>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Heading`,`Paragraph`,`List`,`Table`,`Image`]}));y();export{f as Default,p as Heading,_ as Image,h as List,m as Paragraph,g as Table,v as __namedExportsOrder,d as default,y as n,l as t};