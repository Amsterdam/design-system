import{I as d,h as m,j as a,i as z,H as h}from"./iframe-ChVvhDGS.js";import{i as g,I as c}from"./Icon-CV7sRsqW.js";import{R as p}from"./Row-qXGenGZc.js";import{P as S}from"./Paragraph-C9AxrEXW.js";const f={title:"Components/Media/Icon",component:c,args:{svg:m},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...g]},svg:{control:{type:"select"},mapping:d,options:Object.keys(d)}}},s={},o={argTypes:{size:{control:{labels:{undefined:"medium (default)"}},options:["small",void 0,"large"]}},render:e=>{const r=e.size,u=l=>l===void 0?"Regular":l.charAt(0).toUpperCase()+l.slice(1);return a.jsxs(p,{gap:"small",children:[a.jsx(c,{...e}),a.jsxs(S,{color:e.color,size:r,children:[u(r)," body text"]})]})}},n={args:{size:"heading-3"},argTypes:{size:{options:[...g.filter(e=>e.startsWith("heading-"))]}},render:e=>{const r=e.size?e.size.slice(-1):"3";return a.jsxs(p,{gap:"small",children:[a.jsx(c,{...e}),r==="0"?a.jsxs(z,{color:e.color,children:["Heading ",r," text"]}):a.jsxs(h,{color:e.color,level:1,size:`level-${r}`,children:["Heading ",r," text"]})]})}},i={args:{square:!0}},t={args:{color:"inverse"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'heading-3'
  },
  argTypes: {
    size: {
      options: [...iconSizes.filter(size => size.startsWith('heading-'))]
    }
  },
  render: args => {
    const headingSize = args.size ? args.size.slice(-1) as '0' | '1' | '2' | '3' | '4' | '5' | '6' : '3';
    return <Row gap="small">
        <Icon {...args} />
        {headingSize === '0' ? <PageHeading color={args.color}>Heading {headingSize} text</PageHeading> : <Heading color={args.color} level={1} size={\`level-\${headingSize}\`}>
            Heading {headingSize} text
          </Heading>}
      </Row>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","WithBodyText","WithAHeading","Square","InverseColour"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:s,InverseColour:t,Square:i,WithAHeading:n,WithBodyText:o,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{j as I,i as S,o as W,n as a,t as b};
