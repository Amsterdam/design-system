import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-C0MU9AHG.js";import{C as $,R as M,I as q}from"./index.esm-BpghVcBB.js";import{d as A}from"./index.esm-DvoLfDtE.js";import{e as B}from"./exampleContent-PGFPgakh.js";import{H as r}from"./Heading-BQPWrcoF.js";const F=B(),G={title:"Components/Text/Heading",component:r,args:{children:F,level:1},argTypes:{children:{description:"The heading text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}}},n={},a={},o={args:{level:2}},t={args:{level:3}},i={args:{level:4}},c={render:e=>m.jsxs($,{gap:"small",children:[l.createElement(r,{...e,key:"level-1",size:"level-1"}),l.createElement(r,{...e,key:"level-2",size:"level-2"}),l.createElement(r,{...e,key:"level-3",size:"level-3"}),l.createElement(r,{...e,key:"level-4",size:"level-4"}),l.createElement(r,{...e,key:"level-5",size:"level-5"}),l.createElement(r,{...e,key:"level-6",size:"level-6"})]})},d={args:{color:"inverse",level:2}},v={args:{children:"Heading text",level:4},argTypes:{level:{options:[3,4]},size:{control:{labels:{undefined:"not set"}},options:[void 0,"level-3","level-4","level-5","level-6"]}},render:({children:e,...s})=>{const P=s.size?s.size.replace("level","heading"):s.level?`heading-${s.level}`:void 0;return m.jsxs(M,{gap:"small",children:[m.jsx(q,{color:s.color,size:P,svg:A}),m.jsx(r,{...s,children:e})]})}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var z,f,y;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,h,H;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 2
  }
}`,...(H=(h=o.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var x,k,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 3
  }
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,b,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    level: 4
  }
}`,...(L=(b=i.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var j,C,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
      <Heading {...args} key="level-6" size="level-6" />
    </Column>
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,R,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'inverse',
    level: 2
  }
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var O,W,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    const iconSize: IconProps['size'] = args.size ? args.size.replace('level', 'heading') : args.level ? \`heading-\${args.level}\` : undefined;
    return <Row gap="small">
        <Icon color={args.color} size={iconSize} svg={EmailIcon} />
        <Heading {...args}>{children}</Heading>
      </Row>;
  }
}`,...(D=(W=v.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const J=["Default","Level1","Level2","Level3","Level4","Sizes","InverseColour","WithIcon"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColour:d,Level1:a,Level2:o,Level3:t,Level4:i,Sizes:c,WithIcon:v,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as H,d as I,a as L,c as S,v as W,o as a,t as b,i as c};
