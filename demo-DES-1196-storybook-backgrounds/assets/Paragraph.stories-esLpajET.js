import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{e as j}from"./index.esm-jhuYF6FN.js";import{backgroundColourOptions as I,backgroundColourOptionsDark as T,getForegroundColor as C}from"./preview-6BbJBjWL.js";import{b as O}from"./exampleContent-r-zRGsZY.js";import{P as c}from"./Paragraph-BDLeQ91t.js";import{R as _}from"./Row-JeNeYdOs.js";import{I as y}from"./Icon-BBW_x4VP.js";const R=O(),D={title:"Components/Text/Paragraph",component:c,args:{children:R},argTypes:{children:{description:"The paragraph text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{large:"large",small:"small",undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}}},e={parameters:{backgrounds:{options:I,value:"blue"}},render:(r,{globals:{backgrounds:a}})=>(r.color=C(a.value),t.jsx(c,{...r,children:r.children}))},o={args:{size:"large"}},s={args:{size:"small"}},n={args:{color:"inverse"},parameters:{backgrounds:{options:T,value:"blue"}},render:(r,{globals:{backgrounds:a}})=>(r.color=C(a.value),t.jsx(c,{...r,children:r.children}))},l={args:{children:"Heading text"},render:({children:r,...a})=>t.jsxs(_,{gap:"small",children:[t.jsx(y,{color:a.color,size:a.size,svg:j}),t.jsx(c,{...a,children:r})]})};var g,i,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      options: backgroundColourOptions,
      value: 'blue'
    }
  },
  render: (args, {
    globals: {
      backgrounds
    }
  }) => {
    args['color'] = getForegroundColor(backgrounds.value) as ParagraphProps['color'];
    return <Paragraph {...args}>{args.children}</Paragraph>;
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,P,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  },
  parameters: {
    backgrounds: {
      options: backgroundColourOptionsDark,
      value: 'blue'
    }
  },
  render: (args, {
    globals: {
      backgrounds
    }
  }) => {
    args['color'] = getForegroundColor(backgrounds.value) as ParagraphProps['color'];
    return <Paragraph {...args}>{args.children}</Paragraph>;
  }
}`,...(f=(P=n.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var k,S,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const w=["Default","LargeText","SmallText","InverseColour","WithIcon"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,InverseColour:n,LargeText:o,SmallText:s,WithIcon:l,__namedExportsOrder:w,default:D},Symbol.toStringTag,{value:"Module"}));export{n as I,o as L,A as P,s as S,l as W};
