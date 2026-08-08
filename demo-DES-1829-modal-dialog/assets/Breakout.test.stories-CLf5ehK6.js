import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{J as n,nt as r}from"./index.esm-Z7FBLW0y.js";import{r as i,t as a}from"./Breakout-BWV-zD4X.js";import{i as o,n as s}from"./Grid-B82ClXCy.js";import{i as c,r as l}from"./Breakout.stories-B1B5vYP_.js";var u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),o(),l(),u=t(),d={...c,title:`Components/Layout/Breakout`},f=[void 0,...s],p={args:{children:[(0,u.jsx)(a.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:{narrow:2,medium:2,wide:1},rowStart:2,children:(0,u.jsx)(n,{color:`green`})},1),(0,u.jsx)(a.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:1,rowStart:{narrow:3,medium:3,wide:2},children:(0,u.jsx)(`p`,{children:`Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.`})},2),(0,u.jsx)(a.Cell,{colSpan:{narrow:4,medium:8,wide:6},colStart:{narrow:1,medium:1,wide:7},rowSpan:2,rowStart:1,children:(0,u.jsx)(`img`,{alt:``,src:`https://picsum.photos/id/122/200/300`})},3)]},render:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`A figure and a Spotlight breaking out`}),(0,u.jsx)(a,{...e}),(0,u.jsx)(`p`,{children:`Each row gap, cancelled by its own offset`}),(0,u.jsx)(`div`,{className:`_ams-tests-stack`,children:f.map(e=>(0,u.jsxs)(a,{gapVertical:e,paddingVertical:`2x-large`,children:[(0,u.jsx)(a.Cell,{colSpan:`all`,has:`spotlight`,rowSpan:2,rowStart:1,children:(0,u.jsx)(n,{color:`green`})}),(0,u.jsx)(a.Cell,{colSpan:`all`,rowStart:1,children:(0,u.jsx)(`p`,{style:{color:`white`},children:`gapVertical: ${e??`x-large (default)`}`})}),(0,u.jsx)(a.Cell,{colSpan:`all`,rowStart:2,children:(0,u.jsx)(`p`,{style:{color:`white`},children:`De Spotlight reikt precies tot de gap boven en onder deze tekst.`})})]},e??`default`))})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Test`]})))()}h();export{p as Test,m as __namedExportsOrder,d as default};