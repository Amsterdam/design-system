import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Dt as n,K as r,Ot as i,ft as a,jt as o,y as s}from"./iframe-ToDnt_p3.js";import{Et as c,Tt as l,at as u,t as d,vt as f,wt as p}from"./src-Vglz1qMV.js";var m=t({Default:()=>v,InverseColour:()=>S,Square:()=>x,WithAHeading:()=>b,WithBodyText:()=>y,__namedExportsOrder:()=>C,default:()=>_}),h,g,_,v,y,b,x,S,C,w=e((()=>{r(),i(),d(),c(),h=o(),g=[`heading-0`,`heading-6`],_={title:`Components/Media/Icon`,component:p,args:{svg:a},argTypes:{color:{control:{labels:{undefined:`default`},type:`radio`},options:[void 0,`inverse`]},size:{control:{labels:{undefined:`default`},type:`select`},options:[void 0,...l]},svg:{control:{type:`select`},mapping:n,options:Object.keys(n)}}},v={},y={argTypes:{size:{control:{labels:{undefined:`medium (default)`}},options:[`small`,void 0,`large`]}},render:e=>{let t=e.size,n=e=>e===void 0?`Regular`:e.charAt(0).toUpperCase()+e.slice(1);return(0,h.jsxs)(f,{gap:`small`,children:[(0,h.jsx)(p,{...e}),(0,h.jsxs)(u,{color:e.color,size:t,children:[n(t),` body text`]})]})}},b={args:{size:`heading-3`},argTypes:{size:{options:[...l.filter(e=>e.startsWith(`heading-`)&&!g.includes(e))]}},render:e=>{let t=e.size?e.size.slice(-1):`3`;return(0,h.jsxs)(f,{gap:`small`,children:[(0,h.jsx)(p,{...e}),(0,h.jsxs)(s,{color:e.color,level:1,size:`level-${t}`,children:[`Heading `,t,` text`]})]})}},x={args:{square:!0}},S={args:{color:`inverse`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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