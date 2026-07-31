import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{U as n,Z as r}from"./index.esm-CLgVET2p.js";import{n as i,t as a}from"./renderComponentVariants-Cm5fiVgC.js";import{i as o,n as s}from"./Grid-8w-movI1.js";import{n as c,t as l}from"./Breakout-CLKZ3R-o.js";import{i as u,r as d}from"./Breakout.stories-Du6FhFie.js";var f,p,m,h,g;function _(){return(_=e((()=>{r(),c(),o(),a(),d(),f=t(),p={...u,title:`Components/Layout/Breakout`},m=[void 0,...s],h={args:{children:[(0,f.jsx)(l.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:(0,f.jsx)(n,{color:`green`})},1),(0,f.jsx)(l.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:(0,f.jsx)(`p`,{children:`Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.`})},2),(0,f.jsx)(l.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},rowSpan:2,rowStart:1,children:(0,f.jsx)(`img`,{alt:``,src:`https://picsum.photos/id/122/200/300`})},3)]},render:(e,t)=>(0,f.jsxs)(f.Fragment,{children:[i(l,{args:e},t),(0,f.jsx)(`div`,{className:`_ams-tests-stack`,children:m.map(e=>(0,f.jsxs)(l,{gapVertical:e,paddingVertical:`2x-large`,children:[(0,f.jsx)(l.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:2,rowStart:1,children:(0,f.jsx)(n,{color:`green`})}),(0,f.jsx)(l.Cell,{colSpan:`all`,rowStart:1,children:(0,f.jsx)(`p`,{style:{color:`white`},children:`gapVertical: ${e??`x-large (default)`}`})}),(0,f.jsx)(l.Cell,{colSpan:`all`,rowStart:2,children:(0,f.jsx)(`p`,{style:{color:`white`},children:`De Spotlight reikt precies tot de gap boven en onder deze tekst.`})})]},e??`default`))})]}),tags:[`!dev`,`!autodocs`]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        <img alt="" src="https://picsum.photos/id/122/200/300" />
      </Breakout.Cell>]
  },
  render: (args, context) => <>
      {renderComponentVariants(Breakout, {
      args
    }, context)}
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
  tags: ['!dev', '!autodocs']
}`,...h.parameters?.docs?.source}}},g=[`Test`]})))()}_();export{h as Test,g as __namedExportsOrder,p as default};