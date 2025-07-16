import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{b as m,H as z}from"./index.esm-BTggeBFE.js";import{i as g,I as l}from"./Icon-Pril9caF.js";import{I as d,e as h}from"./index.esm-CVKOIKGq.js";import{R as p}from"./Row-JeNeYdOs.js";import{P as S}from"./Paragraph-BDLeQ91t.js";const f={title:"Components/Media/Icon",component:l,args:{svg:h},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...g]},svg:{control:{type:"select"},mapping:d,options:Object.keys(d)}}},a={},o={argTypes:{size:{control:{labels:{undefined:"medium (default)"}},options:["small",void 0,"large"]}},render:e=>{const r=e.size,u=c=>c===void 0?"Regular":c.charAt(0).toUpperCase()+c.slice(1);return s.jsxs(p,{gap:"small",children:[s.jsx(l,{...e}),s.jsxs(S,{color:e.color,size:r,children:[u(r)," body text"]})]})}},n={args:{size:"heading-3"},argTypes:{size:{options:[...g.filter(e=>e.startsWith("heading-"))]}},render:e=>{const r=e.size?e.size.slice(-1):"3";return s.jsxs(p,{gap:"small",children:[s.jsx(l,{...e}),r==="0"?s.jsxs(m,{color:e.color,children:["Heading ",r," text"]}):s.jsxs(z,{color:e.color,level:1,size:`level-${r}`,children:["Heading ",r," text"]})]})}},i={args:{square:!0}},t={args:{color:"inverse"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const paragraphSize = args.size as IconsProps['size'];
    const getSizeLabel = (size: string | undefined) => {
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
}`,...t.parameters?.docs?.source}}};const x=["Default","WithBodyText","WithAHeading","Square","InverseColour"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColour:t,Square:i,WithAHeading:n,WithBodyText:o,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{P as I,i as S,o as W,n as a,t as b};
