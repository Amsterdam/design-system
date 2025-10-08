import{j as t,h as i}from"./iframe-CsTw2g4c.js";import{b as p}from"./exampleContent-DRope23M.js";import{P as n}from"./Paragraph-B-yPDsQd.js";import{R as m}from"./Row-CmUd0NBv.js";import{I as d}from"./Icon-CDyIMcAe.js";const g=p(),u={title:"Components/Text/Paragraph",component:n,args:{children:g},argTypes:{children:{description:"The paragraph text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{large:"large",small:"small",undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}}},r={},e={args:{size:"large"}},a={args:{size:"small"}},s={args:{color:"inverse"}},o={args:{children:"Heading text"},render:({children:c,...l})=>t.jsxs(m,{gap:"small",children:[t.jsx(d,{color:l.color,size:l.size,svg:t.jsx(i,{})}),t.jsx(n,{...l,children:c})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Heading text'
  },
  render: ({
    children,
    ...args
  }) => <Row gap="small">
      <Icon color={args.color} size={args.size} svg={<MailIcon />} />
      <Paragraph {...args}>{children}</Paragraph>
    </Row>
}`,...o.parameters?.docs?.source}}};const h=["Default","LargeText","SmallText","InverseColour","WithIcon"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InverseColour:s,LargeText:e,SmallText:a,WithIcon:o,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{s as I,e as L,I as P,a as S,o as W};
