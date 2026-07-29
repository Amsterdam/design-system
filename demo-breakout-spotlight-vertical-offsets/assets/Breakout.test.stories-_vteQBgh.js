import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{H as n,P as r,X as i}from"./index.esm-D9GcTMZo.js";import{n as a,t as o}from"./renderComponentVariants-D0xTikF9.js";import{Ct as s,Tt as c,t as l,yn as u}from"./src-Bh102WqT.js";import d,{n as f}from"./Breakout.stories-D5YCeRwZ.js";var p,m,h,g,_;e((()=>{i(),l(),c(),o(),f(),p=t(),m={...d,title:`Components/Layout/Breakout`},h=[void 0,...s],g={args:{children:[(0,p.jsx)(u.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:(0,p.jsx)(n,{color:`green`})},1),(0,p.jsx)(u.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:(0,p.jsx)(`p`,{children:`Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.`})},2),(0,p.jsx)(u.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},rowSpan:2,rowStart:1,children:(0,p.jsx)(`img`,{alt:``,src:`https://picsum.photos/id/122/200/300`})},3)]},render:(e,t)=>(0,p.jsxs)(p.Fragment,{children:[a(u,{args:e},t),(0,p.jsx)(`div`,{className:`_ams-tests-stack`,children:h.map(e=>(0,p.jsxs)(u,{gapVertical:e,paddingVertical:`2x-large`,children:[(0,p.jsx)(u.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:2,rowStart:1,children:(0,p.jsx)(n,{color:`green`})}),(0,p.jsx)(u.Cell,{colSpan:`all`,rowStart:1,children:(0,p.jsx)(r,{color:`inverse`,children:`gapVertical: ${e??`x-large (default)`}`})}),(0,p.jsx)(u.Cell,{colSpan:`all`,rowStart:2,children:(0,p.jsx)(r,{color:`inverse`,children:`De Spotlight reikt precies tot de gap boven en onder deze tekst.`})})]},e??`default`))})]}),tags:[`!dev`,`!autodocs`]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
              <Paragraph color="inverse">{\`gapVertical: \${gap ?? 'x-large (default)'}\`}</Paragraph>
            </Breakout.Cell>
            <Breakout.Cell colSpan="all" rowStart={2}>
              <Paragraph color="inverse">De Spotlight reikt precies tot de gap boven en onder deze tekst.</Paragraph>
            </Breakout.Cell>
          </Breakout>)}
      </div>
    </>,
  tags: ['!dev', '!autodocs']
}`,...g.parameters?.docs?.source}}},_=[`Test`]}))();export{g as Test,_ as __namedExportsOrder,m as default};