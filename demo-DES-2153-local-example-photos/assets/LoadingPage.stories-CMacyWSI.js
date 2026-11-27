import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{G as i,U as a,b as o,d as s,tt as c,x as l,z as u}from"./index.esm-C5k-2JQL.js";import{n as d,t as f}from"./example-photo-11-DJ3UdJGn.js";import{n as p,t as m}from"./example-photo-12-CBoVgNMi.js";import{n as h,t as g}from"./example-photo-13-n0REBcm7.js";import{n as _,t as v}from"./example-photo-14-DPqxbwdm.js";import{n as y,t as b}from"./example-photo-15-DgU0EHAH.js";import{n as x,t as S}from"./example-photo-16-DS9ucFeM.js";import{n as C,r as w,t as T}from"./commonMeta-DbfXxJl2.js";var E=t({Default:()=>L,Loaded:()=>z,Loading:()=>R,__namedExportsOrder:()=>B,default:()=>M}),D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{c(),D=n(),d(),p(),h(),_(),y(),x(),C(),O=r(),k=`woningbouw`,A=[{description:`Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`,heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:f},{description:`De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.`,heading:`Meer betaalbare woningen in Noord`,imageSrc:m},{description:`Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.`,heading:`Woningbouwplannen Havenstad`,imageSrc:g},{description:`Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.`,heading:`Sneller een sociale huurwoning`,imageSrc:v},{description:`Subsidies en advies om uw huis te isoleren en van het gas af te gaan.`,heading:`Verduurzaam uw woning`,imageSrc:b},{description:`Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.`,heading:`Nieuwbouw in de Sluisbuurt`,imageSrc:S}],j={narrow:4,medium:4,wide:4},M={...T,title:`Pages/Public/Loading Page`,args:{initialPhase:`idle`},argTypes:{initialPhase:{table:{disable:!0}}},parameters:w(`Shows how a page behaves while it fetches its content, keeping the layout stable as placeholders make way for the real results.`),render:({initialPhase:e})=>{let[t,n]=(0,D.useState)(e),[r,c]=(0,D.useState)(k),d=(0,D.useRef)(null);(0,D.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]);let f=e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search`);typeof t==`string`&&t.trim()&&c(t.trim()),d.current&&clearTimeout(d.current),n(`loading`),d.current=setTimeout(()=>n(`loaded`),3e3)},p=t===`loading`?`Zoekresultaten voor ‘${r}’ worden geladen`:t===`loaded`?`${A.length} resultaten voor ‘${r}’ gevonden`:``;return(0,O.jsxs)(`main`,{id:`inhoud`,children:[(0,O.jsx)(o,{paddingTop:`large`,children:(0,O.jsxs)(o.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:6},children:[(0,O.jsx)(l,{level:1,children:`Zoeken op amsterdam.nl`}),(0,O.jsxs)(a,{onSubmit:f,children:[(0,O.jsx)(a.Input,{defaultValue:k,label:`Zoek op de website`,name:`search`}),(0,O.jsx)(a.Button,{})]})]})}),(0,O.jsxs)(o,{"aria-busy":t===`loading`,paddingBottom:`2x-large`,paddingTop:`2x-large`,children:[(0,O.jsxs)(o.Cell,{span:`all`,children:[(0,O.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:p}),t===`idle`&&(0,O.jsx)(u,{children:`Klik op de zoekknop om de resultaten te laden.`}),t===`loaded`&&(0,O.jsx)(l,{level:2,size:`level-3`,children:`${A.length} resultaten voor ‘${r}’`})]}),t===`loading`&&A.map((e,t)=>(0,O.jsx)(o.Cell,{span:j,children:(0,O.jsxs)(i,{children:[(0,O.jsx)(i.Image,{}),(0,O.jsx)(i.Heading,{}),(0,O.jsx)(i.Paragraph,{lines:2})]})},t)),t===`loaded`&&A.map(e=>(0,O.jsx)(o.Cell,{span:j,children:(0,O.jsxs)(s,{children:[(0,O.jsx)(s.Image,{alt:``,aspectRatio:`16:9`,src:e.imageSrc}),(0,O.jsx)(s.Heading,{level:3,children:(0,O.jsx)(s.Link,{href:`#`,children:e.heading})}),(0,O.jsx)(u,{children:e.description})]})},e.heading))]})]})}},N=({busy:e,extraCells:t=``,status:n,statusCell:r=``})=>`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
// The Content Header and the results are each their own section, so a plain <main> wraps them both.
<main id="inhoud">
  {/* This page opens with its title rather than a Breadcrumb, so this Grid takes the large top padding. */}
  <Grid paddingTop="large">
    {/*
     * The Content Header takes half the grid on wide screens rather than the documented Cell, so the search
     * input does not stretch to an unusable length. It takes three quarters of the grid at medium and the
     * full width at narrow. The title follows that width, because search is not a content page.
     */}
    {/* ams-prose sets the vertical rhythm between the title and the search field. */}
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 6 }}>
      <Heading level={1}>Zoeken op amsterdam.nl</Heading>
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
  {/* Both Grids have the default background colour, so this one takes a paddingTop of 2x-large. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid aria-busy={${e}} paddingBottom="2x-large" paddingTop="2x-large">
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
</main>`,P=N({busy:`false`,status:``,statusCell:`
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`}),F=N({busy:`true`,extraCells:`

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
    {/* … five more Skeleton cells, one for each result that is loading … */}`,status:`Zoekresultaten voor ‘woningbouw’ worden geladen`}),I=N({busy:`false`,extraCells:`

    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Card>
        {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
        <Card.Image alt="" aspectRatio="16:9" src="${f}" />
        <Card.Heading level={3}>
          <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
        <Paragraph>Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* … five more Cards, in the same cells the Skeletons occupied … */}`,status:`6 resultaten voor ‘woningbouw’ gevonden`,statusCell:`
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`}),L={parameters:{docs:{source:{code:P,language:`tsx`}}}},R={args:{initialPhase:`loading`},parameters:{docs:{source:{code:F,language:`tsx`}}}},z={args:{initialPhase:`loaded`},parameters:{docs:{source:{code:I,language:`tsx`}}}},B=[`Default`,`Loading`,`Loaded`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: idleSource,
        language: 'tsx'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}export{V as n,E as t};