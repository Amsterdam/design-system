import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{F as r,I as i,b as a}from"./index.esm-6Mm6hKCe.js";import{W as o,_ as s}from"./index.esm-hbzSMw45.js";import{Dt as c,Et as l,Ot as u,bt as d,st as f,t as p}from"./src-CC5Y1U-A.js";var m=t({Default:()=>v,InverseColour:()=>S,Square:()=>x,WithAHeading:()=>b,WithBodyText:()=>y,__namedExportsOrder:()=>C,default:()=>_}),h,g,_,v,y,b,x,S,C,w=e((()=>{o(),i(),p(),u(),h=n(),g=[`heading-0`,`heading-6`],_={title:`Components/Media/Icon`,component:l,args:{svg:a},argTypes:{color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]},size:{control:{labels:{undefined:`default`},type:`select`},options:[void 0,...c]},svg:{control:{type:`select`},mapping:r,options:Object.keys(r)}}},v={},y={argTypes:{size:{control:{labels:{undefined:`medium (default)`}},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,h.jsxs)(d,{gap:`small`,children:[(0,h.jsx)(l,{...e}),(0,h.jsxs)(f,{color:e.color,size:t,children:[n(t),` body text`]})]})}},b={args:{size:`heading-3`},argTypes:{size:{options:[...c.filter(e=>e.startsWith(`heading-`)&&!g.includes(e))]}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,h.jsxs)(d,{gap:`small`,children:[(0,h.jsx)(l,{...e}),(0,h.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},x={args:{square:!0}},S={args:{color:`inverse`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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