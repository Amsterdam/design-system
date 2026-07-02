import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i,t as a}from"./index.esm-Cyk4q9Yv.js";import{J as o,y as s}from"./index.esm-DsJLQgFz.js";import{Bn as c,Vn as l,Wt as u,in as d,kn as f,t as p,zn as m}from"./src-CbbXZon2.js";import{f as h,h as g,p as _}from"./argTypes-CrWlcsbR.js";var v=e({Default:()=>x,InverseColour:()=>T,RightToLeft:()=>E,Square:()=>w,WithAHeading:()=>C,WithBodyText:()=>S,__namedExportsOrder:()=>D,default:()=>b}),y,b,x,S,C,w,T,E,D,O=t((()=>{o(),i(),p(),l(),h(),y=n(),b={title:`Components/Media/Icon`,component:m,args:{svg:r},argTypes:{color:_,size:{control:{labels:{undefined:`medium body text (default)`},type:`select`},options:[void 0,...c]},svg:g}},x={},S={argTypes:{size:{control:{labels:{undefined:`medium (default)`},type:`radio`},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,y.jsxs)(f,{gap:`small`,children:[(0,y.jsx)(m,{...e}),(0,y.jsxs)(d,{color:e.color,size:t,children:[n(t),` body text`]})]})}},C={args:{size:`heading-3`},argTypes:{size:{control:{type:`radio`},options:c.filter(e=>e.startsWith(`heading-`))}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,y.jsxs)(f,{gap:`small`,children:[(0,y.jsx)(m,{...e}),(0,y.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},w={args:{square:!0}},T={args:{color:`inverse`}},E={args:{svg:a},render:e=>(0,y.jsxs)(f,{gap:`large`,children:[(0,y.jsxs)(u,{gap:`x-small`,children:[(0,y.jsx)(d,{children:`Left-to-right`}),(0,y.jsx)(m,{...e})]}),(0,y.jsxs)(u,{dir:`rtl`,gap:`x-small`,children:[(0,y.jsx)(d,{children:`Right-to-left`}),(0,y.jsx)(m,{...e})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithBodyText`,`WithAHeading`,`Square`,`InverseColour`,`RightToLeft`]}));O();export{x as Default,T as InverseColour,E as RightToLeft,w as Square,C as WithAHeading,S as WithBodyText,D as __namedExportsOrder,b as default,O as n,v as t};