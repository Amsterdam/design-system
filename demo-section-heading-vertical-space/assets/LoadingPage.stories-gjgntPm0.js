import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{B as i,H as a,I as o,Q as s,b as c,l,x as u}from"./index.esm-BNFC_lWv.js";import{n as d,t as f}from"./commonMeta-D5NaG95k.js";var p=t({Default:()=>w,Loaded:()=>E,Loading:()=>T,__namedExportsOrder:()=>D,default:()=>y}),m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{s(),m=n(),d(),h=r(),g=`woningbouw`,_=[{description:`Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`,heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/id/1015/640/360`},{description:`De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.`,heading:`Meer betaalbare woningen in Noord`,imageSrc:`https://picsum.photos/id/1016/640/360`},{description:`Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.`,heading:`Woningbouwplannen Havenstad`,imageSrc:`https://picsum.photos/id/1029/640/360`},{description:`Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.`,heading:`Sneller een sociale huurwoning`,imageSrc:`https://picsum.photos/id/1039/640/360`},{description:`Subsidies en advies om uw huis te isoleren en van het gas af te gaan.`,heading:`Verduurzaam uw woning`,imageSrc:`https://picsum.photos/id/1043/640/360`},{description:`Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.`,heading:`Nieuwbouw in de Sluisbuurt`,imageSrc:`https://picsum.photos/id/1044/640/360`}],v={narrow:4,medium:4,wide:4},y={...f,title:`Pages/Public/Loading Page`,args:{initialPhase:`idle`},argTypes:{initialPhase:{table:{disable:!0}}},render:({initialPhase:e})=>{let[t,n]=(0,m.useState)(e),[r,s]=(0,m.useState)(g),d=(0,m.useRef)(null);(0,m.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]);let f=e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`search`);typeof t==`string`&&t.trim()&&s(t.trim()),d.current&&clearTimeout(d.current),n(`loading`),d.current=setTimeout(()=>n(`loaded`),3e3)},p=t===`loading`?`Zoekresultaten voor ‘${r}’ worden geladen`:t===`loaded`?`${_.length} resultaten voor ‘${r}’ gevonden`:``;return(0,h.jsxs)(`main`,{id:`inhoud`,children:[(0,h.jsx)(c,{paddingTop:`large`,children:(0,h.jsxs)(c.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:6},children:[(0,h.jsx)(u,{level:1,children:`Zoeken op amsterdam.nl`}),(0,h.jsxs)(i,{onSubmit:f,children:[(0,h.jsx)(i.Input,{defaultValue:g,label:`Zoek op de website`,name:`search`}),(0,h.jsx)(i.Button,{})]})]})}),(0,h.jsxs)(c,{"aria-busy":t===`loading`,paddingBottom:`2x-large`,paddingTop:`2x-large`,children:[(0,h.jsxs)(c.Cell,{span:`all`,children:[(0,h.jsx)(`p`,{className:`ams-visually-hidden`,role:`status`,children:p}),t===`idle`&&(0,h.jsx)(o,{children:`Klik op de zoekknop om de resultaten te laden.`}),t===`loaded`&&(0,h.jsx)(u,{level:2,size:`level-3`,children:`${_.length} resultaten voor ‘${r}’`})]}),t===`loading`&&_.map((e,t)=>(0,h.jsx)(c.Cell,{span:v,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(a.Image,{}),(0,h.jsx)(a.Heading,{}),(0,h.jsx)(a.Paragraph,{lines:2})]})},t)),t===`loaded`&&_.map(e=>(0,h.jsx)(c.Cell,{span:v,children:(0,h.jsxs)(l,{children:[(0,h.jsx)(l.Image,{alt:``,aspectRatio:`16:9`,src:e.imageSrc}),(0,h.jsx)(l.Heading,{level:3,children:(0,h.jsx)(l.Link,{href:`#`,children:e.heading})}),(0,h.jsx)(o,{children:e.description})]})},e.heading))]})]})}},b=({busy:e,extraCells:t=``,status:n,statusCell:r=``})=>`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
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
</main>`,x=b({busy:`false`,status:``,statusCell:`
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`}),S=b({busy:`true`,extraCells:`

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
    {/* … five more Skeleton cells, one for each result that is loading … */}`,status:`Zoekresultaten voor ‘woningbouw’ worden geladen`}),C=b({busy:`false`,extraCells:`

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
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`}),w={parameters:{docs:{source:{code:x,language:`tsx`}}}},T={args:{initialPhase:`loading`},parameters:{docs:{source:{code:S,language:`tsx`}}}},E={args:{initialPhase:`loaded`},parameters:{docs:{source:{code:C,language:`tsx`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: idleSource,
        language: 'tsx'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Loading`,`Loaded`]})))()}export{O as n,p as t};