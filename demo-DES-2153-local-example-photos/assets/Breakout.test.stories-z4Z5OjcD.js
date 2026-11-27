import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-BG4KOiPz.js";import{q as n,tt as r}from"./index.esm-C5k-2JQL.js";import{r as i,t as a}from"./Breakout-18Pnv-xC.js";import{i as o,n as s}from"./Grid-NEa0Ty86.js";import{i as c,r as l}from"./Breakout.stories-CHpjk24U.js";var u;function d(){return(d=e((()=>{u=new URL(`example-photo-03-200x300-CyHdSrXC.jpg`,import.meta.url).href})))()}var f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),o(),d(),l(),f=t(),p={...c,title:`Components/Layout/Breakout`},m=[void 0,...s],h={args:{children:[(0,f.jsx)(a.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:(0,f.jsx)(n,{color:`green`})},1),(0,f.jsx)(a.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:(0,f.jsx)(`p`,{children:`Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.`})},2),(0,f.jsx)(a.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},rowSpan:2,rowStart:1,children:(0,f.jsx)(`img`,{alt:``,src:u})},3)]},render:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`p`,{children:`A figure and a Spotlight breaking out`}),(0,f.jsx)(a,{...e}),(0,f.jsx)(`p`,{children:`Each row gap, cancelled by its own offset`}),(0,f.jsx)(`div`,{className:`_ams-tests-stack`,children:m.map(e=>(0,f.jsxs)(a,{gapVertical:e,paddingVertical:`2x-large`,children:[(0,f.jsx)(a.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:2,rowStart:1,children:(0,f.jsx)(n,{color:`green`})}),(0,f.jsx)(a.Cell,{colSpan:`all`,rowStart:1,children:(0,f.jsx)(`p`,{style:{color:`white`},children:`gapVertical: ${e??`x-large (default)`}`})}),(0,f.jsx)(a.Cell,{colSpan:`all`,rowStart:2,children:(0,f.jsx)(`p`,{style:{color:`white`},children:`De Spotlight reikt precies tot de gap boven en onder deze tekst.`})})]},e??`default`))})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},g=[`Test`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={{
      narrow: 2,
      medium: 2,
      wide: 1
    }} rowStart={2}>
        <Spotlight color="green" />
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      narrow: 4,
      medium: 8,
      wide: 6
    }} colStart={1} key={2} rowStart={{
      narrow: 3,
      medium: 3,
      wide: 2
    }}>
        <p>Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.</p>
      </Breakout.Cell>, <Breakout.Cell colSpan={{
      narrow: 4,
      medium: 8,
      wide: 6
    }} colStart={{
      narrow: 1,
      medium: 1,
      wide: 7
    }} key={3} rowSpan={2} rowStart={1}>
        <img alt="" src={examplePhoto03SmallPortrait} />
      </Breakout.Cell>]
  },
  /*
   * One composition rather than every variant of every prop. A Breakout takes the gaps, paddings and tags of a
   * Grid, which snapshots all of them, so only what a Breakout does with them is worth a picture of its own:
   * a figure that widens past its columns, and a Spotlight that reaches exactly into the gap around it.
   */
  render: args => <>
      <p>A figure and a Spotlight breaking out</p>
      <Breakout {...args} />
      <p>Each row gap, cancelled by its own offset</p>
      <div className="_ams-tests-stack">
        {gaps.map(gap =>
      // The vertical padding is the largest one, so each Spotlight escapes into its own Breakout
      // instead of into the one above or below it.
      <Breakout gapVertical={gap} key={gap ?? 'default'} paddingVertical="2x-large">
            <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={1}>
              <Spotlight color="green" />
            </Breakout.Cell>
            <Breakout.Cell colSpan="all" rowStart={1}>
              <p style={{
            color: 'white'
          }}>{\`gapVertical: \${gap ?? 'x-large (default)'}\`}</p>
            </Breakout.Cell>
            <Breakout.Cell colSpan="all" rowStart={2}>
              <p style={{
            color: 'white'
          }}>De Spotlight reikt precies tot de gap boven en onder deze tekst.</p>
            </Breakout.Cell>
          </Breakout>)}
      </div>
    </>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Test,g as __namedExportsOrder,p as default};