import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{Bt as r,St as i,Vt as a,X as o,x as s}from"./iframe-jbqFrKNq.js";import{$t as c,An as l,Mn as u,jn as d,t as f,xn as p}from"./src-Bji4MA_t.js";var m=e({Default:()=>v,InverseColour:()=>S,Square:()=>x,WithAHeading:()=>b,WithBodyText:()=>y,__namedExportsOrder:()=>C,default:()=>_}),h,g,_,v,y,b,x,S,C,w=t((()=>{o(),a(),f(),u(),h=n(),g=[`heading-0`,`heading-6`],_={title:`Components/Media/Icon`,component:l,args:{svg:i},argTypes:{color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]},size:{control:{labels:{undefined:`default`},type:`select`},options:[void 0,...d]},svg:{control:{type:`select`},mapping:r,options:Object.keys(r)}}},v={},y={argTypes:{size:{control:{labels:{undefined:`medium (default)`}},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,h.jsxs)(p,{gap:`small`,children:[(0,h.jsx)(l,{...e}),(0,h.jsxs)(c,{color:e.color,size:t,children:[n(t),` body text`]})]})}},b={args:{size:`heading-3`},argTypes:{size:{options:[...d.filter(e=>e.startsWith(`heading-`)&&!g.includes(e))]}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,h.jsxs)(p,{gap:`small`,children:[(0,h.jsx)(l,{...e}),(0,h.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},x={args:{square:!0}},S={args:{color:`inverse`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithBodyText`,`WithAHeading`,`Square`,`InverseColour`]}));w();export{v as Default,S as InverseColour,x as Square,b as WithAHeading,y as WithBodyText,C as __namedExportsOrder,_ as default,w as n,m as t};