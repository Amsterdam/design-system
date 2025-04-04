import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-G8LIXM5I.js";import{C as M,R as P,a as q}from"./index.esm-8VW07eLs.js";import{d as A}from"./index.esm-Bv5DmutW.js";import{e as B}from"./exampleContent-PGFPgakh.js";import{H as r}from"./Heading-BfwCY41a.js";const F=B(),G={title:"Components/Text/Heading",component:r,args:{children:F,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},a={},n={},o={args:{level:2}},i={args:{level:3}},t={args:{level:4}},c={render:e=>m.jsxs(M,{gap:"small",children:[s.createElement(r,{...e,key:"level-1",size:"level-1"}),s.createElement(r,{...e,key:"level-2",size:"level-2"}),s.createElement(r,{...e,key:"level-3",size:"level-3"}),s.createElement(r,{...e,key:"level-4",size:"level-4"}),s.createElement(r,{...e,key:"level-5",size:"level-5"}),s.createElement(r,{...e,key:"level-6",size:"level-6"})]})},d={args:{color:"inverse",level:2}},v={args:{children:"Heading text",level:4},argTypes:{level:{options:[3,4]},size:{control:{labels:{undefined:"not set"}},options:[void 0,"level-3","level-4","level-5","level-6"]}},render:({children:e,...l})=>{let p;return l.level&&(p=`heading-${l.level}`),l.size&&(p=l.size.replace("level","heading")),m.jsxs(P,{gap:"small",children:[m.jsx(q,{color:l.color,size:p,svg:A}),m.jsx(r,{...l,children:e})]})}};var g,u,z;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(z=(u=a.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var f,S,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,H,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...(x=(H=o.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var k,E,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var L,j,I;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,T,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
      <Heading {...args} key="level-6" size="level-6" />
    </Column>
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var R,w,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...(O=(w=d.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,D,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <Icon color={args.color} size={iconSize} svg={EmailIcon} />
        <Heading {...args}>{children}</Heading>
      </Row>;
  }
}`,...($=(D=v.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const J=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:d,Level1:n,Level2:o,Level3:i,Level4:t,Sizes:c,WithIcon:v,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as H,d as I,n as L,c as S,v as W,o as a,i as b,t as c};
