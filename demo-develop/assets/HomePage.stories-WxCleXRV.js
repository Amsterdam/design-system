import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,C as i,S as a,nt as o}from"./index.esm-DSrSvKyA.js";import{n as s,r as c,t as l}from"./commonMeta-D58l-UW7.js";import{f as u,g as d}from"./exampleContent-DRei7MoO.js";var f=t({Default:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v;function y(){return(y=e((()=>{o(),d(),s(),p=n(),m=u(),h=u(),g={...l,title:`Pages/Internal/Home Page`,parameters:c(`The entry point of an internal website, such as a backoffice system. This example concentrates on the overall page layout rather than any particular content.`),render:e=>(0,p.jsxs)(a,{paddingVertical:`x-large`,children:[(0,p.jsx)(a.Cell,{appearance:`transparent`,span:`all`,children:(0,p.jsx)(i,{level:1,children:`Titel van de pagina`})}),(0,p.jsx)(a.Cell,{span:{narrow:4,medium:5,wide:8},style:{blockSize:`12rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:1,medium:3,wide:4},style:{blockSize:`10rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:3,medium:3,wide:3},children:(0,p.jsx)(r,{children:m})}),(0,p.jsx)(a.Cell,{span:{narrow:4,medium:5,wide:9},children:(0,p.jsx)(r,{children:h})}),(0,p.jsx)(a.Cell,{span:{narrow:2,medium:3,wide:6},style:{blockSize:`8rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:2,medium:3,wide:6},style:{blockSize:`8rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:3,medium:2,wide:4},style:{blockSize:`6rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:1,medium:4,wide:4},style:{blockSize:`8rem`}}),(0,p.jsx)(a.Cell,{span:{narrow:4,medium:4,wide:4},style:{blockSize:`6rem`}})]})},_={parameters:{docs:{source:{code:`<Grid paddingVertical="x-large">
  {/*
   * appearance="transparent" removes the cell’s background and padding, so the page title sits directly
   * on the page instead of looking like one of the content blocks the other cells form.
   */}
  <Grid.Cell appearance="transparent" span="all">
    <Heading level={1}>Titel van de pagina</Heading>
  </Grid.Cell>
  {/*
   * This is a layout demo: the empty cells stand in for content blocks. Their blockSize only gives them
   * a height to show here – on a real page the content sets the height. What matters is the responsive
   * span: how many of the grid’s columns a cell fills at narrow, medium, and wide widths. That is what
   * makes the cells reflow into different rows as the window changes.
   */}
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} style={{ blockSize: '12rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }} style={{ blockSize: '10rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }} style={{ blockSize: '6rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }} style={{ blockSize: '6rem' }} />
</Grid>`,language:`tsx`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear. Provide the source by hand so the panel shows a trimmed,
        // annotated version of the page.
        code: \`<Grid paddingVertical="x-large">
  {/*
   * appearance="transparent" removes the cell’s background and padding, so the page title sits directly
   * on the page instead of looking like one of the content blocks the other cells form.
   */}
  <Grid.Cell appearance="transparent" span="all">
    <Heading level={1}>Titel van de pagina</Heading>
  </Grid.Cell>
  {/*
   * This is a layout demo: the empty cells stand in for content blocks. Their blockSize only gives them
   * a height to show here – on a real page the content sets the height. What matters is the responsive
   * span: how many of the grid’s columns a cell fills at narrow, medium, and wide widths. That is what
   * makes the cells reflow into different rows as the window changes.
   */}
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} style={{ blockSize: '12rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }} style={{ blockSize: '10rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }} style={{ blockSize: '6rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }} style={{ blockSize: '6rem' }} />
</Grid>\`,
        language: 'tsx'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]})))()}export{y as n,f as t};