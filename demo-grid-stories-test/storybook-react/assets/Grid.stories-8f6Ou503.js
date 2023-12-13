import{G as e,j as r,p as O}from"./index.esm-cNgDosLW.js";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const g={control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},E={compact:{control:{type:"boolean"}},gapVertical:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]},paddingVertical:g,paddingTop:g,paddingBottom:g},B={start:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]},span:{control:{type:"inline-radio"},options:[1,2,3,4,5,6,7,8,9,10,11,12]}},L={title:"Layout/Grid",component:e,decorators:[a=>r.jsx(O,{children:r.jsx(a,{})})],argTypes:{...E,...B}},t={args:{start:1,span:12},render:({span:a,start:s,...n})=>r.jsx(e,{...n,children:r.jsx(e.Cell,{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",span:a,start:s,children:`Start: ${s}, span: ${a}`})})},o={args:{children:Array.from(Array(12).keys()).map(a=>r.jsx(e.Cell,{className:"amsterdam-docs-pink-box"},a)),compact:!0}},d={args:{children:Array.from(Array(12).keys()).map(a=>r.jsx(e.Cell,{className:"amsterdam-docs-pink-box"},a)),paddingVertical:"medium"}},l={args:{children:Array.from(Array(6).keys()).map(a=>r.jsx(e.Cell,{className:"amsterdam-docs-pink-box",span:4},a)),gapVertical:"small"}},c={args:{span:4},render:({span:a,start:s,...n})=>r.jsx(e,{...n,children:r.jsx(e.Cell,{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",span:a,start:s,children:"Deze cel beslaat 4 kolommen."})})},i={args:{span:{narrow:4,medium:6,wide:8}},render:({span:a,start:s,...n})=>r.jsx(e,{...n,children:r.jsx(e.Cell,{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",span:a,start:s,children:"Deze cel heeft 3 instellingen voor de breedte."})})},m={args:{fullWidth:!0},render:({span:a,start:s,fullWidth:n,...M})=>r.jsx(e,{...M,children:r.jsx(e.Cell,{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",span:a,start:s,fullWidth:n,children:"Deze cel beslaat de volledige breedte van het grid."})})},p={args:{span:2,start:2},render:({span:a,start:s,...n})=>r.jsx(e,{...n,children:r.jsx(e.Cell,{className:"amsterdam-docs-pink-box amsterdam-docs-paragraph",span:a,start:s,children:"Deze cel start in kolom 2."})})};var u,h,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    start: 1,
    span: 12
  },
  render: ({
    span,
    start,
    ...args
  }: StoryProps) => <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        {\`Start: \${start}, span: \${span}\`}
      </Grid.Cell>
    </Grid>
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,G,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true
  }
}`,...(b=(G=o.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var C,k,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(12).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    paddingVertical: 'medium'
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var f,j,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var A,V,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    span: 4
  },
  render: ({
    span,
    start,
    ...args
  }: StoryProps) => <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel beslaat 4 kolommen.
      </Grid.Cell>
    </Grid>
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var v,z,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  },
  render: ({
    span,
    start,
    ...args
  }: StoryProps) => <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel heeft 3 instellingen voor de breedte.
      </Grid.Cell>
    </Grid>
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var W,T,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: ({
    span,
    start,
    fullWidth,
    ...args
  }: StoryProps) => <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start} fullWidth={fullWidth}>
        Deze cel beslaat de volledige breedte van het grid.
      </Grid.Cell>
    </Grid>
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,$,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    span: 2,
    start: 2
  },
  render: ({
    span,
    start,
    ...args
  }: StoryProps) => <Grid {...args}>
      <Grid.Cell className="amsterdam-docs-pink-box amsterdam-docs-paragraph" span={span} start={start}>
        Deze cel start in kolom 2.
      </Grid.Cell>
    </Grid>
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const R=["Default","Compact","VerticalSpace","VerticalGap","SpanMultipleColumns","ConfigureGridVariants","FullWidthCell","StartPosition"],H=Object.freeze(Object.defineProperty({__proto__:null,Compact:o,ConfigureGridVariants:i,Default:t,FullWidthCell:m,SpanMultipleColumns:c,StartPosition:p,VerticalGap:l,VerticalSpace:d,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{o as C,m as F,H as G,c as S,d as V,l as a,i as b,p as c};
