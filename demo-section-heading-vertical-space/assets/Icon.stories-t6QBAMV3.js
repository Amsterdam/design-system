import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{E as r,G as i,t as a}from"./index.esm-BKoBEYTi.js";import{Q as o,x as s}from"./index.esm-Bsqf88yX.js";import{n as c,r as l,t as u}from"./Icon-CH6NQV4m.js";import{n as d,t as f}from"./Row-DAv4l3Tt.js";import{n as p,t as m}from"./Paragraph-CexDXQCg.js";import{i as h,t as g}from"./Column-BaLWsI6l.js";import{d as _,f as v}from"./argTypes-CTYEle7b.js";import{n as y,r as b}from"./iconArgTypes-CoU157b8.js";var x=t({Default:()=>w,InverseColour:()=>O,RightToLeft:()=>k,Square:()=>D,WithAHeading:()=>E,WithBodyText:()=>T,__namedExportsOrder:()=>A,default:()=>C}),S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{o(),i(),h(),l(),p(),d(),_(),y(),S=n(),C={title:`Components/Media/Icon`,component:u,args:{svg:r},argTypes:{color:v,size:{control:{labels:{undefined:`medium body text (default)`},type:`select`},options:[void 0,...c]},svg:b}},w={},T={argTypes:{size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,S.jsxs)(f,{gap:`small`,children:[(0,S.jsx)(u,{...e}),(0,S.jsxs)(m,{color:e.color,size:t,children:[n(t),` body text`]})]})}},E={args:{size:`heading-3`},argTypes:{size:{control:{type:`radio`},options:c.filter(e=>e.startsWith(`heading-`))}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,S.jsxs)(f,{gap:`small`,children:[(0,S.jsx)(u,{...e}),(0,S.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},D={args:{square:!0}},O={args:{color:`inverse`}},k={args:{svg:a},render:e=>(0,S.jsxs)(f,{gap:`large`,children:[(0,S.jsxs)(g,{gap:`x-small`,children:[(0,S.jsx)(m,{children:`Left-to-right`}),(0,S.jsx)(u,{...e})]}),(0,S.jsxs)(g,{dir:`rtl`,gap:`x-small`,children:[(0,S.jsx)(m,{children:`Right-to-left`}),(0,S.jsx)(u,{...e})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithBodyText`,`WithAHeading`,`Square`,`InverseColour`,`RightToLeft`]})))()}export{E as a,C as c,D as i,O as n,T as o,k as r,j as s,x as t};