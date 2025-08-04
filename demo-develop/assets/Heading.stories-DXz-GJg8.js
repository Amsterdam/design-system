import{j as p,C as g,r as s,R as u,g as z,h as S}from"./iframe-CtsmQdSA.js";import{e as f}from"./exampleContent-B9pMnolB.js";import{H as r}from"./Heading-D_j_2_nw.js";const h=f(),y={title:"Components/Text/Heading",component:r,args:{children:h,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},a={},n={},o={args:{level:2}},i={args:{level:3}},t={args:{level:4}},c={render:e=>p.jsxs(g,{gap:"small",children:[s.createElement(r,{...e,key:"level-1",size:"level-1"}),s.createElement(r,{...e,key:"level-2",size:"level-2"}),s.createElement(r,{...e,key:"level-3",size:"level-3"}),s.createElement(r,{...e,key:"level-4",size:"level-4"}),s.createElement(r,{...e,key:"level-5",size:"level-5"}),s.createElement(r,{...e,key:"level-6",size:"level-6"})]})},d={args:{color:"inverse",level:2}},v={args:{children:"Heading text",level:4},argTypes:{level:{options:[3,4]},size:{control:{labels:{undefined:"not set"}},options:[void 0,"level-3","level-4","level-5","level-6"]}},render:({children:e,...l})=>{let m;return l.level&&(m=`heading-${l.level}`),l.size&&(m=l.size.replace("level","heading")),p.jsxs(u,{gap:"small",children:[p.jsx(z,{color:l.color,size:m,svg:S}),p.jsx(r,{...l,children:e})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
      <Heading {...args} key="level-6" size="level-6" />
    </Column>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text',
    level: 4
  },
  argTypes: {
    level: {
      options: [3, 4]
    },
    size: {
      control: {
        labels: {
          undefined: 'not set'
        }
      },
      options: [undefined, 'level-3', 'level-4', 'level-5', 'level-6']
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
        <Icon color={args.color} size={iconSize as IconProps['size']} svg={MailIcon} />
        <Heading {...args}>{children}</Heading>
      </Row>;
  }
}`,...v.parameters?.docs?.source}}};const H=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:d,Level1:n,Level2:o,Level3:i,Level4:t,Sizes:c,WithIcon:v,__namedExportsOrder:H,default:y},Symbol.toStringTag,{value:"Module"}));export{E as H,d as I,n as L,c as S,v as W,o as a,i as b,t as c};
