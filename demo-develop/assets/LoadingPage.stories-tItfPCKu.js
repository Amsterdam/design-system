import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BDsysHVl.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{F as i,V as a,Z as o,b as s,l as c,y as l,z as u}from"./index.esm-BPrFtfE_.js";import{n as d,t as f}from"./commonMeta-DztodRXx.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{o(),p=e(n()),d(),m=r(),h=`woningbouw`,g=[{description:`Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`,heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/id/1015/640/360`},{description:`De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.`,heading:`Meer betaalbare woningen in Noord`,imageSrc:`https://picsum.photos/id/1016/640/360`},{description:`Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.`,heading:`Woningbouwplannen Havenstad`,imageSrc:`https://picsum.photos/id/1029/640/360`},{description:`Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.`,heading:`Sneller een sociale huurwoning`,imageSrc:`https://picsum.photos/id/1039/640/360`},{description:`Subsidies en advies om uw huis te isoleren en van het gas af te gaan.`,heading:`Verduurzaam uw woning`,imageSrc:`https://picsum.photos/id/1043/640/360`},{description:`Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.`,heading:`Nieuwbouw in de Sluisbuurt`,imageSrc:`https://picsum.photos/id/1044/640/360`}],_={narrow:4,medium:4,wide:4},v={...f,title:`Pages/Public/Loading Page`,args:{initialPhase:`idle`},argTypes:{initialPhase:{table:{disable:!0}}},render:({initialPhase:e})=>{let[t,n]=(0,p.useState)(e),[r,o]=(0,p.useState)(h),d=(0,p.useRef)(null);(0,p.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]);let f=e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search`);typeof t==`string`&&t.trim()&&o(t.trim()),d.current&&clearTimeout(d.current),n(`loading`),d.current=setTimeout(()=>n(`loaded`),3e3)},v=t===`loading`?`Zoekresultaten voor ‘${r}’ worden geladen`:t===`loaded`?`${g.length} resultaten voor ‘${r}’ gevonden`:``;return(0,m.jsxs)(`main`,{id:`inhoud`,children:[(0,m.jsxs)(l,{paddingTop:`large`,children:[(0,m.jsx)(l.Cell,{span:`all`,children:(0,m.jsx)(s,{level:1,children:`Zoeken op amsterdam.nl`})}),(0,m.jsx)(l.Cell,{span:{narrow:4,medium:6,wide:6},children:(0,m.jsxs)(u,{onSubmit:f,children:[(0,m.jsx)(u.Input,{defaultValue:h,label:`Zoek op de website`,name:`search`}),(0,m.jsx)(u.Button,{})]})})]}),(0,m.jsxs)(l,{"aria-busy":t===`loading`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,m.jsxs)(l.Cell,{span:`all`,children:[(0,m.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:v}),t===`idle`&&(0,m.jsx)(i,{children:`Klik op de zoekknop om de resultaten te laden.`}),t===`loaded`&&(0,m.jsx)(s,{level:2,size:`level-3`,children:`${g.length} resultaten voor ‘${r}’`})]}),t===`loading`&&g.map((e,t)=>(0,m.jsx)(l.Cell,{span:_,children:(0,m.jsxs)(a,{children:[(0,m.jsx)(a.Image,{}),(0,m.jsx)(a.Heading,{}),(0,m.jsx)(a.Paragraph,{lines:2})]})},t)),t===`loaded`&&g.map(e=>(0,m.jsx)(l.Cell,{span:_,children:(0,m.jsxs)(c,{children:[(0,m.jsx)(c.Image,{alt:``,aspectRatio:`16:9`,src:e.imageSrc}),(0,m.jsx)(c.Heading,{level:3,children:(0,m.jsx)(c.Link,{href:`#`,children:e.heading})}),(0,m.jsx)(i,{children:e.description})]})},e.heading))]})]})}},y=({busy:e,extraCells:t=``,status:n,statusCell:r=``})=>`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
// This page has two Grids in one landmark, so a plain <main> wraps them both. A page that is a single
// section can put as="main" on the Grid itself instead.
<main id="inhoud">
  {/* The first Grid holds the search field instead of a breadcrumb, so it still takes the large top padding. */}
  <Grid paddingTop="large">
    {/* Search is not a content page, so the title spans the full width, not the documented header cell. */}
    <Grid.Cell span="all">
      <Heading level={1}>Zoeken op amsterdam.nl</Heading>
    </Grid.Cell>
    {/*
     * The search field spans half the grid on wide screens rather than the documented header cell width, so
     * the input does not stretch to an unusable length. It takes three quarters of the grid at medium and
     * the full width at narrow.
     */}
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }}>
      <SearchField onSubmit={search}>
        <SearchField.Input defaultValue="woningbouw" label="Zoek op de website" name="search" />
        <SearchField.Button />
      </SearchField>
    </Grid.Cell>
  </Grid>

  {/*
   * Mark the whole results region busy while it loads and let it announce once, rather than once per
   * Skeleton – which would repeat the message for every card. The Skeletons are hidden from assistive
   * technologies, so this region is all a screen reader hears. Be aware that aria-busy="true" also
   * permits assistive technology to hold back updates from the live region below and deliver them as
   * one atomic update once it turns false. The ARIA spec allows this rather than requiring it, so not
   * every screen reader does.
   */}
  {/* The search field is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid aria-busy={${e}} paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span="all">
      {/*
       * Keep one status message in the DOM at all times and only change its text – from a loading message
       * to the result count. A live region inserted together with its text is announced inconsistently
       * across screen readers and browsers, so an always-present region is the more robust pattern. No
       * component wraps this pattern yet, so the Grid carries the busy state and the message is a visually
       * hidden <p>.
       */}
      <p className="ams-visually-hidden" role="status">${n}</p>${r}
    </Grid.Cell>${t}
  </Grid>
</main>`,b=y({busy:`false`,status:``,statusCell:`
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`}),x=y({busy:`true`,extraCells:`

    {/*
     * Compose each Skeleton from the same parts, in the same Grid cell, as the Card that will replace
     * it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
     * Mirroring the shape keeps the layout shift small, but does not remove it: Skeleton.Heading is
     * fixed to the Heading 2 size while this Card’s heading is level-3, the Skeleton spaces all its
     * parts alike where the Card sets a smaller margin below its heading, and real headings and
     * descriptions wrap onto more lines in these narrow cells than the placeholders show.
     */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Skeleton>
        <Skeleton.Image />
        <Skeleton.Heading />
        <Skeleton.Paragraph lines={2} />
      </Skeleton>
    </Grid.Cell>
    {/* … five more Skeleton cells, one for each result that is loading … */}`,status:`Zoekresultaten voor ‘woningbouw’ worden geladen`}),S=y({busy:`false`,extraCells:`

    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Card>
        {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
        <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1015/640/360" />
        <Card.Heading level={3}>
          <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
        <Paragraph>Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* … five more Cards, in the same cells the Skeletons occupied … */}`,status:`6 resultaten voor ‘woningbouw’ gevonden`,statusCell:`
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`}),C={parameters:{docs:{source:{code:b,language:`tsx`}}}},w={args:{initialPhase:`loading`},parameters:{docs:{source:{code:x,language:`tsx`}}}},T={args:{initialPhase:`loaded`},parameters:{docs:{source:{code:S,language:`tsx`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: idleSource,
        language: 'tsx'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialPhase: 'loading'
  },
  parameters: {
    docs: {
      source: {
        code: loadingSource,
        language: 'tsx'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    initialPhase: 'loaded'
  },
  parameters: {
    docs: {
      source: {
        code: loadedSource,
        language: 'tsx'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Loading`,`Loaded`]}))();export{C as Default,T as Loaded,w as Loading,E as __namedExportsOrder,v as default};