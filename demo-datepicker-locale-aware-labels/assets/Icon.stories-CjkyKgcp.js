import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{E as r,G as i,W as a,t as o}from"./index.esm-Cyk4q9Yv.js";import{J as s,y as c}from"./index.esm-sD6vJw4M.js";import{$t as l,An as u,Bt as d,Mn as f,jn as p,t as m,xn as h}from"./src-DzGboehr.js";var g=e({Default:()=>b,InverseColour:()=>w,RightToLeft:()=>T,Square:()=>C,WithAHeading:()=>S,WithBodyText:()=>x,__namedExportsOrder:()=>E,default:()=>y}),_,v,y,b,x,S,C,w,T,E,D=t((()=>{s(),i(),m(),f(),_=n(),v=[`heading-0`,`heading-6`],y={title:`Components/Media/Icon`,component:u,args:{svg:r},argTypes:{color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]},size:{control:{labels:{undefined:`default`},type:`select`},options:[void 0,...p]},svg:{control:{type:`select`},mapping:a,options:Object.keys(a)}}},b={},x={argTypes:{size:{control:{labels:{undefined:`medium (default)`}},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,_.jsxs)(h,{gap:`small`,children:[(0,_.jsx)(u,{...e}),(0,_.jsxs)(l,{color:e.color,size:t,children:[n(t),` body text`]})]})}},S={args:{size:`heading-3`},argTypes:{size:{options:[...p.filter(e=>e.startsWith(`heading-`)&&!v.includes(e))]}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,_.jsxs)(h,{gap:`small`,children:[(0,_.jsx)(u,{...e}),(0,_.jsxs)(c,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},C={args:{square:!0}},w={args:{color:`inverse`}},T={args:{svg:o},render:e=>(0,_.jsxs)(h,{gap:`large`,children:[(0,_.jsxs)(d,{gap:`x-small`,children:[(0,_.jsx)(l,{children:`Left-to-right`}),(0,_.jsx)(u,{...e})]}),(0,_.jsxs)(d,{dir:`rtl`,gap:`x-small`,children:[(0,_.jsx)(l,{children:`Right-to-left`}),(0,_.jsx)(u,{...e})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: {
        labels: {
          undefined: 'medium (default)'
        }
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  argTypes: {
    size: {
      options: [...iconSizes.filter(size => size.startsWith('heading-') && !DEPRECATED_HEADING_SIZES.includes(size))]
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithBodyText`,`WithAHeading`,`Square`,`InverseColour`,`RightToLeft`]}));D();export{b as Default,w as InverseColour,T as RightToLeft,C as Square,S as WithAHeading,x as WithBodyText,E as __namedExportsOrder,y as default,D as n,g as t};