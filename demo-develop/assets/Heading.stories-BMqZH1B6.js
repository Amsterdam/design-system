import{j as e,C as g,R as m,g as u,h as z}from"./iframe-C-OFJeID.js";import{e as S}from"./exampleContent-DRope23M.js";import{H as r}from"./Heading-CSwxHN18.js";const x=S(),f={title:"Components/Text/Heading",component:r,args:{children:x,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},a={},l={},o={args:{level:2}},i={args:{level:3}},c={args:{level:4}},t={args:{level:2},render:s=>e.jsxs(g,{gap:"small",children:[e.jsx(r,{...s,size:"level-1"}),e.jsx(r,{...s,size:"level-2"}),e.jsx(r,{...s,size:"level-3"}),e.jsx(r,{...s,size:"level-4"}),e.jsx(r,{...s,size:"level-5"})]})},d={args:{color:"inverse",level:2}},p={args:{children:"Heading text",level:3},argTypes:{level:{options:[1,2,3,4]},size:{control:{labels:{undefined:"not set"}},options:[void 0,"level-1","level-2","level-3","level-4","level-5"]}},render:({children:s,...n})=>{let v;return n.level&&(v=`heading-${n.level}`),n.size&&(v=n.size.replace("level","heading")),e.jsxs(m,{gap:"small",children:[e.jsx(u,{color:n.color,size:v,svg:e.jsx(z,{})}),e.jsx(r,{...n,children:s})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  },
  render: args => <Column gap="small">
      <Heading {...args} size="level-1" />
      <Heading {...args} size="level-2" />
      <Heading {...args} size="level-3" />
      <Heading {...args} size="level-4" />
      <Heading {...args} size="level-5" />
    </Column>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text',
    level: 3
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4]
    },
    size: {
      control: {
        labels: {
          undefined: 'not set'
        }
      },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5']
    }
  },
  render: ({
    children,
    ...args
  }) => {
    let iconSize;
    if (args.level) iconSize = \`heading-\${args.level}\`;
    if (args.size) iconSize = args.size.replace('level', 'heading');
    return <Row gap="small">
        <Icon color={args.color} size={iconSize as IconProps['size']} svg={<MailIcon />} />
        <Heading {...args}>{children}</Heading>
      </Row>;
  }
}`,...p.parameters?.docs?.source}}};const h=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:d,Level1:l,Level2:o,Level3:i,Level4:c,Sizes:t,WithIcon:p,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{I as H,d as I,l as L,t as S,p as W,o as a,i as b,c};
