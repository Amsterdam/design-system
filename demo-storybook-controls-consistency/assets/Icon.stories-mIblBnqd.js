import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i,t as a}from"./index.esm-Cyk4q9Yv.js";import{J as o,y as s}from"./index.esm-DUCGtZaA.js";import{Bn as c,Vn as l,Wt as u,in as d,kn as f,t as p,zn as m}from"./src-DTFagzSm.js";import{d as h,f as g}from"./argTypes-CX0Ca9AC.js";import{n as _,r as v}from"./iconArgTypes-jfUYlggz.js";var y=e({Default:()=>S,InverseColour:()=>E,RightToLeft:()=>D,Square:()=>T,WithAHeading:()=>w,WithBodyText:()=>C,__namedExportsOrder:()=>O,default:()=>x}),b,x,S,C,w,T,E,D,O,k=t((()=>{o(),i(),p(),l(),h(),_(),b=n(),x={title:`Components/Media/Icon`,component:m,args:{svg:r},argTypes:{color:g,size:{control:{labels:{undefined:`medium body text (default)`},type:`select`},options:[void 0,...c]},svg:v}},S={},C={argTypes:{size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,b.jsxs)(f,{gap:`small`,children:[(0,b.jsx)(m,{...e}),(0,b.jsxs)(d,{color:e.color,size:t,children:[n(t),` body text`]})]})}},w={args:{size:`heading-3`},argTypes:{size:{control:{type:`radio`},options:c.filter(e=>e.startsWith(`heading-`))}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,b.jsxs)(f,{gap:`small`,children:[(0,b.jsx)(m,{...e}),(0,b.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},T={args:{square:!0}},E={args:{color:`inverse`}},D={args:{svg:a},render:e=>(0,b.jsxs)(f,{gap:`large`,children:[(0,b.jsxs)(u,{gap:`x-small`,children:[(0,b.jsx)(d,{children:`Left-to-right`}),(0,b.jsx)(m,{...e})]}),(0,b.jsxs)(u,{dir:`rtl`,gap:`x-small`,children:[(0,b.jsx)(d,{children:`Right-to-left`}),(0,b.jsx)(m,{...e})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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