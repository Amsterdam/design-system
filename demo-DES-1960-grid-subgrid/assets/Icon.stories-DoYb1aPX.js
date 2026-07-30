import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{E as r,G as i,t as a}from"./index.esm-AHCPMkhr.js";import{X as o,y as s}from"./index.esm-DqIo75fm.js";import{Fn as c,Gn as l,Kn as u,Xt as d,qn as f,t as p,un as m}from"./src-aC2ovlgs.js";import{d as h,f as g}from"./argTypes-CQXDxDHP.js";import{n as _,r as v}from"./iconArgTypes-BcBExhD3.js";var y=t({Default:()=>S,InverseColour:()=>E,RightToLeft:()=>D,Square:()=>T,WithAHeading:()=>w,WithBodyText:()=>C,__namedExportsOrder:()=>O,default:()=>x}),b,x,S,C,w,T,E,D,O,k=e((()=>{o(),i(),p(),f(),h(),_(),b=n(),x={title:`Components/Media/Icon`,component:l,args:{svg:r},argTypes:{color:g,size:{control:{labels:{undefined:`medium body text (default)`},type:`select`},options:[void 0,...u]},svg:v}},S={},C={argTypes:{size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,b.jsxs)(c,{gap:`small`,children:[(0,b.jsx)(l,{...e}),(0,b.jsxs)(m,{color:e.color,size:t,children:[n(t),` body text`]})]})}},w={args:{size:`heading-3`},argTypes:{size:{control:{type:`radio`},options:u.filter(e=>e.startsWith(`heading-`))}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,b.jsxs)(c,{gap:`small`,children:[(0,b.jsx)(l,{...e}),(0,b.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},T={args:{square:!0}},E={args:{color:`inverse`}},D={args:{svg:a},render:e=>(0,b.jsxs)(c,{gap:`large`,children:[(0,b.jsxs)(d,{gap:`x-small`,children:[(0,b.jsx)(m,{children:`Left-to-right`}),(0,b.jsx)(l,{...e})]}),(0,b.jsxs)(d,{dir:`rtl`,gap:`x-small`,children:[(0,b.jsx)(m,{children:`Right-to-left`}),(0,b.jsx)(l,{...e})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  argTypes: {
    // This story pairs the Icon with body text, so it offers only the body text sizes, in ascending order.
    size: {
      control: {
        labels: {
          undefined: 'medium (default)'
        },
        type: 'radio'
      },
      options: ['small', undefined, 'large']
    }
  },
  render: args => {
    const paragraphSize = args.size as 'small' | 'large';
    const getSizeLabel = (size: 'small' | 'large' | undefined) => {
      if (size === undefined) return 'Regular';
      return size.charAt(0).toUpperCase() + size.slice(1);
    };
    return <Row gap="small">
        <Icon {...args} />
        <Paragraph color={args.color} size={paragraphSize}>
          {getSizeLabel(paragraphSize)} body text
        </Paragraph>
      </Row>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  argTypes: {
    // This story pairs the Icon with a Heading, so it offers only the heading sizes.
    size: {
      control: {
        type: 'radio'
      },
      options: iconSizes.filter(size => size.startsWith('heading-'))
    }
  },
  render: args => {
    const headingSize = args.size ? args.size.slice(-1) as '1' | '2' | '3' | '4' | '5' : '3';
    return <Row gap="small">
        <Icon {...args} />
        <Heading color={args.color} level={1} size={\`level-\${headingSize}\`}>
          Heading {headingSize} text
        </Heading>
      </Row>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    svg: Icons.ArrowForwardIcon
  },
  render: args => <Row gap="large">
      <Column gap="x-small">
        <Paragraph>Left-to-right</Paragraph>
        <Icon {...args} />
      </Column>
      <Column dir="rtl" gap="x-small">
        <Paragraph>Right-to-left</Paragraph>
        <Icon {...args} />
      </Column>
    </Row>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithBodyText`,`WithAHeading`,`Square`,`InverseColour`,`RightToLeft`]}));k();export{S as Default,E as InverseColour,D as RightToLeft,T as Square,w as WithAHeading,C as WithBodyText,O as __namedExportsOrder,x as default,k as n,y as t};