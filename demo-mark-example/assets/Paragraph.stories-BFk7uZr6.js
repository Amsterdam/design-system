import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{e as i}from"./index.esm-D3RaMjqb.js";import{b as p}from"./exampleContent-B9pMnolB.js";import{P as n}from"./Paragraph-BDLeQ91t.js";import{R as m}from"./Row-BbMuA978.js";import{I as d}from"./Icon-Pril9caF.js";const g=p(),u={title:"Components/Text/Paragraph",component:n,args:{children:g},argTypes:{children:{description:"The paragraph text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{large:"large",small:"small",undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}}},r={},e={args:{size:"large"}},a={args:{size:"small"}},s={args:{color:"inverse"}},o={args:{children:"Heading text"},render:({children:c,...t})=>l.jsxs(m,{gap:"small",children:[l.jsx(d,{color:t.color,size:t.size,svg:i}),l.jsx(n,{...t,children:c})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      <Icon color={args.color} size={args.size} svg={MailIcon} />
      <Paragraph {...args}>{children}</Paragraph>
    </Row>
}`,...o.parameters?.docs?.source}}};const h=["Default","LargeText","SmallText","InverseColour","WithIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InverseColour:s,LargeText:e,SmallText:a,WithIcon:o,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{s as I,e as L,P,a as S,o as W};
