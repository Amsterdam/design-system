import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{F as r,V as i,Z as a,b as o,l as s,y as c,z as l}from"./index.esm-z_2hhIMN.js";import{n as u,t as d}from"./commonMeta-DOGpK9Tz.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),f=t(),u(),p=n(),m=`woningbouw`,h=[{description:`Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`,heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/id/1015/640/360`},{description:`De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.`,heading:`Meer betaalbare woningen in Noord`,imageSrc:`https://picsum.photos/id/1016/640/360`},{description:`Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.`,heading:`Woningbouwplannen Havenstad`,imageSrc:`https://picsum.photos/id/1029/640/360`},{description:`Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.`,heading:`Sneller een sociale huurwoning`,imageSrc:`https://picsum.photos/id/1039/640/360`},{description:`Subsidies en advies om uw huis te isoleren en van het gas af te gaan.`,heading:`Verduurzaam uw woning`,imageSrc:`https://picsum.photos/id/1043/640/360`},{description:`Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.`,heading:`Nieuwbouw in de Sluisbuurt`,imageSrc:`https://picsum.photos/id/1044/640/360`}],g={narrow:4,medium:4,wide:4},_={...d,title:`Pages/Public/Loading Page`,args:{initialPhase:`idle`},argTypes:{initialPhase:{table:{disable:!0}}},render:({initialPhase:e})=>{let[t,n]=(0,f.useState)(e),[a,u]=(0,f.useState)(m),d=(0,f.useRef)(null);(0,f.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]);let _=e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search`);typeof t==`string`&&t.trim()&&u(t.trim()),d.current&&clearTimeout(d.current),n(`loading`),d.current=setTimeout(()=>n(`loaded`),3e3)},v=t===`loading`?`Zoekresultaten voor ‘${a}’ worden geladen`:t===`loaded`?`${h.length} resultaten voor ‘${a}’ gevonden`:``;return(0,p.jsxs)(`main`,{id:`inhoud`,children:[(0,p.jsxs)(c,{paddingTop:`large`,children:[(0,p.jsx)(c.Cell,{span:`all`,children:(0,p.jsx)(o,{level:1,children:`Zoeken op amsterdam.nl`})}),(0,p.jsx)(c.Cell,{span:{narrow:4,medium:6,wide:6},children:(0,p.jsxs)(l,{onSubmit:_,children:[(0,p.jsx)(l.Input,{defaultValue:m,label:`Zoek op de website`,name:`search`}),(0,p.jsx)(l.Button,{})]})})]}),(0,p.jsxs)(c,{"aria-busy":t===`loading`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,p.jsxs)(c.Cell,{span:`all`,children:[(0,p.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:v}),t===`idle`&&(0,p.jsx)(r,{children:`Klik op de zoekknop om de resultaten te laden.`}),t===`loaded`&&(0,p.jsx)(o,{level:2,size:`level-3`,children:`${h.length} resultaten voor ‘${a}’`})]}),t===`loading`&&h.map((e,t)=>(0,p.jsx)(c.Cell,{span:g,children:(0,p.jsxs)(i,{children:[(0,p.jsx)(i.Image,{}),(0,p.jsx)(i.Heading,{}),(0,p.jsx)(i.Paragraph,{lines:2})]})},t)),t===`loaded`&&h.map(e=>(0,p.jsx)(c.Cell,{span:g,children:(0,p.jsxs)(s,{children:[(0,p.jsx)(s.Image,{alt:``,aspectRatio:`16:9`,src:e.imageSrc}),(0,p.jsx)(s.Heading,{level:3,children:(0,p.jsx)(s.Link,{href:`#`,children:e.heading})}),(0,p.jsx)(r,{children:e.description})]})},e.heading))]})]})}},v=({busy:e,extraCells:t=``,status:n,statusCell:r=``})=>`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
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
</main>`,y=v({busy:`false`,status:``,statusCell:`
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`}),b=v({busy:`true`,extraCells:`

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
    {/* … five more Skeleton cells, one for each result that is loading … */}`,status:`Zoekresultaten voor ‘woningbouw’ worden geladen`}),x=v({busy:`false`,extraCells:`

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
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`}),S={parameters:{docs:{source:{code:y,language:`tsx`}}}},C={args:{initialPhase:`loading`},parameters:{docs:{source:{code:b,language:`tsx`}}}},w={args:{initialPhase:`loaded`},parameters:{docs:{source:{code:x,language:`tsx`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: idleSource,
        language: 'tsx'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Loading`,`Loaded`]})))()}E();export{S as Default,w as Loaded,C as Loading,T as __namedExportsOrder,_ as default};