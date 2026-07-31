import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-BDsysHVl.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{F as a,V as o,Z as s,b as c,l,y as u,z as d}from"./index.esm-BhH2zafx.js";import{n as f,t as p}from"./commonMeta-BG9ufL3N.js";var m=n({Default:()=>T,Loaded:()=>D,Loading:()=>E,__namedExportsOrder:()=>O,default:()=>b}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{s(),h=e(r()),f(),g=i(),_=`woningbouw`,v=[{description:`Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`,heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/id/1015/640/360`},{description:`De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.`,heading:`Meer betaalbare woningen in Noord`,imageSrc:`https://picsum.photos/id/1016/640/360`},{description:`Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.`,heading:`Woningbouwplannen Havenstad`,imageSrc:`https://picsum.photos/id/1029/640/360`},{description:`Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.`,heading:`Sneller een sociale huurwoning`,imageSrc:`https://picsum.photos/id/1039/640/360`},{description:`Subsidies en advies om uw huis te isoleren en van het gas af te gaan.`,heading:`Verduurzaam uw woning`,imageSrc:`https://picsum.photos/id/1043/640/360`},{description:`Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.`,heading:`Nieuwbouw in de Sluisbuurt`,imageSrc:`https://picsum.photos/id/1044/640/360`}],y={narrow:4,medium:4,wide:4},b={...p,title:`Pages/Public/Loading Page`,args:{initialPhase:`idle`},argTypes:{initialPhase:{table:{disable:!0}}},render:({initialPhase:e})=>{let[t,n]=(0,h.useState)(e),[r,i]=(0,h.useState)(_),s=(0,h.useRef)(null);(0,h.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]);let f=e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search`);typeof t==`string`&&t.trim()&&i(t.trim()),s.current&&clearTimeout(s.current),n(`loading`),s.current=setTimeout(()=>n(`loaded`),3e3)},p=t===`loading`?`Zoekresultaten voor ‘${r}’ worden geladen`:t===`loaded`?`${v.length} resultaten voor ‘${r}’ gevonden`:``;return(0,g.jsxs)(`main`,{id:`inhoud`,children:[(0,g.jsxs)(u,{paddingTop:`large`,children:[(0,g.jsx)(u.Cell,{span:`all`,children:(0,g.jsx)(c,{level:1,children:`Zoeken op amsterdam.nl`})}),(0,g.jsx)(u.Cell,{span:{narrow:4,medium:6,wide:6},children:(0,g.jsxs)(d,{onSubmit:f,children:[(0,g.jsx)(d.Input,{defaultValue:_,label:`Zoek op de website`,name:`search`}),(0,g.jsx)(d.Button,{})]})})]}),(0,g.jsxs)(u,{"aria-busy":t===`loading`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,g.jsxs)(u.Cell,{span:`all`,children:[(0,g.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:p}),t===`idle`&&(0,g.jsx)(a,{children:`Klik op de zoekknop om de resultaten te laden.`}),t===`loaded`&&(0,g.jsx)(c,{level:2,size:`level-3`,children:`${v.length} resultaten voor ‘${r}’`})]}),t===`loading`&&v.map((e,t)=>(0,g.jsx)(u.Cell,{span:y,children:(0,g.jsxs)(o,{children:[(0,g.jsx)(o.Image,{}),(0,g.jsx)(o.Heading,{}),(0,g.jsx)(o.Paragraph,{lines:2})]})},t)),t===`loaded`&&v.map(e=>(0,g.jsx)(u.Cell,{span:y,children:(0,g.jsxs)(l,{children:[(0,g.jsx)(l.Image,{alt:``,aspectRatio:`16:9`,src:e.imageSrc}),(0,g.jsx)(l.Heading,{level:3,children:(0,g.jsx)(l.Link,{href:`#`,children:e.heading})}),(0,g.jsx)(a,{children:e.description})]})},e.heading))]})]})}},x=({busy:e,extraCells:t=``,status:n,statusCell:r=``})=>`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
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
</main>`,S=x({busy:`false`,status:``,statusCell:`
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`}),C=x({busy:`true`,extraCells:`

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
    {/* … five more Skeleton cells, one for each result that is loading … */}`,status:`Zoekresultaten voor ‘woningbouw’ worden geladen`}),w=x({busy:`false`,extraCells:`

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
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`}),T={parameters:{docs:{source:{code:S,language:`tsx`}}}},E={args:{initialPhase:`loading`},parameters:{docs:{source:{code:C,language:`tsx`}}}},D={args:{initialPhase:`loaded`},parameters:{docs:{source:{code:w,language:`tsx`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: idleSource,
        language: 'tsx'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Loading`,`Loaded`]}));k();export{T as Default,D as Loaded,E as Loading,O as __namedExportsOrder,b as default,k as n,m as t};