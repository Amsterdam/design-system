import{I as d,h as m,j as r,H as z}from"./iframe-HZg55zGy.js";import{i as p,I as c}from"./Icon-C3l0rYfj.js";import{R as g}from"./Row-CHfZCX2i.js";import{P as h}from"./Paragraph-CYHFk5OI.js";const S=["heading-0","heading-6"],f={title:"Components/Media/Icon",component:c,args:{svg:m},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...p]},svg:{control:{type:"select"},mapping:d,options:Object.keys(d)}}},a={},o={argTypes:{size:{control:{labels:{undefined:"medium (default)"}},options:["small",void 0,"large"]}},render:e=>{const s=e.size,u=l=>l===void 0?"Regular":l.charAt(0).toUpperCase()+l.slice(1);return r.jsxs(g,{gap:"small",children:[r.jsx(c,{...e}),r.jsxs(h,{color:e.color,size:s,children:[u(s)," body text"]})]})}},n={args:{size:"heading-3"},argTypes:{size:{options:[...p.filter(e=>e.startsWith("heading-")&&!S.includes(e))]}},render:e=>{const s=e.size?e.size.slice(-1):"3";return r.jsxs(g,{gap:"small",children:[r.jsx(c,{...e}),r.jsxs(z,{color:e.color,level:1,size:`level-${s}`,children:["Heading ",s," text"]})]})}},i={args:{square:!0}},t={args:{color:"inverse"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","WithBodyText","WithAHeading","Square","InverseColour"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:t,Square:i,WithAHeading:n,WithBodyText:o,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{E as I,i as S,o as W,n as a,t as b};
