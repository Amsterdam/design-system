import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{e as C}from"./index.esm-jhuYF6FN.js";import{backgroundColourOptions as I,backgroundColourOptionsDark as j,getForegroundColor as T}from"./preview-2NwzIGZY.js";import{b as O}from"./exampleContent-r-zRGsZY.js";import{P as c}from"./Paragraph-BDLeQ91t.js";import{R as _}from"./Row-BbMuA978.js";import{I as y}from"./Icon-BBW_x4VP.js";const R=O(),D={title:"Components/Text/Paragraph",component:c,args:{children:R},argTypes:{children:{description:"The paragraph text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{large:"large",small:"small",undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}}},a={parameters:{backgrounds:{options:I}},render:(r,{globals:{backgrounds:e}})=>(r.color=T(e.value),t.jsx(c,{...r,children:r.children}))},o={args:{size:"large"}},s={args:{size:"small"}},n={args:{color:"inverse"},globals:{backgrounds:{value:"blue"}},parameters:{backgrounds:{options:{blue:j.blue}}}},l={args:{children:"Heading text"},render:({children:r,...e})=>t.jsxs(_,{gap:"small",children:[t.jsx(y,{color:e.color,size:e.size,svg:C}),t.jsx(c,{...e,children:r})]})};var i,p,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      options: backgroundColourOptions
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,v,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  },
  globals: {
    backgrounds: {
      value: 'blue'
    }
  },
  parameters: {
    backgrounds: {
      options: {
        blue: backgroundColourOptionsDark.blue
      }
    }
  }
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var P,S,z;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const w=["Default","LargeText","SmallText","InverseColour","WithIcon"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:n,LargeText:o,SmallText:s,WithIcon:l,__namedExportsOrder:w,default:D},Symbol.toStringTag,{value:"Module"}));export{n as I,o as L,A as P,s as S,l as W};
