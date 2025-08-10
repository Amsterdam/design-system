import{j as a,C as m,r as s,R as u,g as z,h as S}from"./iframe-CODresTW.js";import{e as f}from"./exampleContent-B7cDFRSs.js";import{H as r}from"./Heading-CPCzFWOo.js";const h=f(),y={title:"Components/Text/Heading",component:r,args:{children:h,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},n={},o={},i={args:{level:2}},t={args:{level:3}},c={args:{level:4}},d={args:{level:2},render:e=>a.jsxs(m,{gap:"small",children:[s.createElement(r,{...e,key:"level-1",size:"level-1"}),s.createElement(r,{...e,key:"level-2",size:"level-2"}),s.createElement(r,{...e,key:"level-3",size:"level-3"}),s.createElement(r,{...e,key:"level-4",size:"level-4"}),s.createElement(r,{...e,key:"level-5",size:"level-5"})]})},v={args:{color:"inverse",level:2}},p={args:{children:"Heading text",level:3},argTypes:{level:{options:[1,2,3,4]},size:{control:{labels:{undefined:"not set"}},options:[void 0,"level-1","level-2","level-3","level-4","level-5"]}},render:({children:e,...l})=>{let g;return l.level&&(g=`heading-${l.level}`),l.size&&(g=l.size.replace("level","heading")),a.jsxs(u,{gap:"small",children:[a.jsx(z,{color:l.color,size:g,svg:a.jsx(S,{})}),a.jsx(r,{...l,children:e})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  },
  render: args => <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
    </Column>
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const x=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColour:v,Level1:o,Level2:i,Level3:t,Level4:c,Sizes:d,WithIcon:p,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{j as H,v as I,o as L,d as S,p as W,i as a,t as b,c};
