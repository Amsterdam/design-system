import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as B}from"./Screen-Bi3gjHLv.js";import{G as s}from"./Grid-BkIcq0Wb.js";const F={title:"Components/Layout/Grid",component:s,argTypes:{gapVertical:{control:{type:"radio",labels:{none:"none",small:"small",undefined:"medium",large:"large"}},options:["none","small",void 0,"large"]},paddingVertical:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingTop:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]},paddingBottom:{control:{type:"radio",labels:{undefined:"none",small:"small",medium:"medium",large:"large"}},options:[void 0,"small","medium","large"]}},parameters:{layout:"fullscreen"}};s.Cell;const g={decorators:[a=>e.jsx(B,{className:"ams-storybook-show-grid",children:e.jsx(a,{})})]},d={decorators:[a=>e.jsx(B,{className:"ams-storybook-show-grid",children:e.jsx(s,{children:e.jsx(a,{})})})],render:({children:a,...q})=>e.jsx(s.Cell,{...q,children:a})},I=Array.from(Array(12).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-pink-box"},a)),r={...g,args:{style:{height:"8rem"}}},l={...g,args:{children:I,paddingVertical:"medium"}},o={...g,args:{children:Array.from(Array(6).keys()).map(a=>e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},a)),gapVertical:"small"}},n={...d,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat 4 kolommen."}),span:4}},c={...g,args:{children:[e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4,rowSpan:2,style:{padding:"1rem"},children:e.jsx("p",{className:"ams-docs-paragraph",children:"Deze cel beslaat 2 rijen."})},1),e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},2),e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},3),e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},4),e.jsx(s.Cell,{className:"ams-docs-pink-box",span:4},5)],gapVertical:"small"}},m={...d,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel heeft 3 instellingen voor de breedte."}),span:{narrow:4,medium:6,wide:8}}},p={...d,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel beslaat de volledige breedte van het grid."}),span:"all"}},t={...d,args:{children:e.jsx("p",{className:"ams-docs-paragraph ams-docs-pink-box",children:"Deze cel start in kolom 2."}),span:3,start:2}},i={...d,args:{as:"section"},render:({as:a})=>e.jsx(s.Cell,{as:a,span:"all",children:e.jsxs("p",{className:"ams-docs-pink-box ams-docs-paragraph",children:["Deze cel gebruikt het HTML-element `",a,"`."]})})};var u,h,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    style: {
      height: '8rem'
    }
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,y,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: TwelveGridCells,
    paddingVertical: 'medium'
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,S,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map(i => <Grid.Cell className="ams-docs-pink-box" span={4} key={i} />),
    gapVertical: 'small'
  }
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var j,G,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4
  }
}`,...(T=(G=n.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var f,V,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<Grid.Cell className="ams-docs-pink-box" span={4} rowSpan={2} key={1} style={{
      padding: '1rem'
    }}>
        <p className="ams-docs-paragraph">Deze cel beslaat 2 rijen.</p>
      </Grid.Cell>, <Grid.Cell className="ams-docs-pink-box" span={4} key={2} />, <Grid.Cell className="ams-docs-pink-box" span={4} key={3} />, <Grid.Cell className="ams-docs-pink-box" span={4} key={4} />, <Grid.Cell className="ams-docs-pink-box" span={4} key={5} />],
    gapVertical: 'small'
  }
}`,...(v=(V=c.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var D,z,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>,
    span: {
      narrow: 4,
      medium: 6,
      wide: 8
    }
  }
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var A,M,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel beslaat de volledige breedte van het grid.</p>,
    span: 'all'
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var P,L,O;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    children: <p className="ams-docs-paragraph ams-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 3,
    start: 2
  }
}`,...(O=(L=t.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var R,E,H;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...CellStoryTemplate,
  args: {
    as: 'section'
  },
  render: ({
    as
  }: GridCellProps) => <Grid.Cell as={as} span="all">
      <p className="ams-docs-pink-box ams-docs-paragraph">Deze cel gebruikt het HTML-element \`{as}\`.</p>
    </Grid.Cell>
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const J=["Default","VerticalSpace","VerticalGap","SpanMultipleColumns","SpanMultipleRows","ConfigureGridVariants","SpanAllColumns","StartPosition","CustomTagName"],W=Object.freeze(Object.defineProperty({__proto__:null,ConfigureGridVariants:m,CustomTagName:i,Default:r,SpanAllColumns:p,SpanMultipleColumns:n,SpanMultipleRows:c,StartPosition:t,VerticalGap:o,VerticalSpace:l,__namedExportsOrder:J,default:F},Symbol.toStringTag,{value:"Module"}));export{m as C,W as G,n as S,l as V,o as a,c as b,p as c,t as d,i as e};
