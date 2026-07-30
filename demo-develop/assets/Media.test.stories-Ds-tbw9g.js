import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{An as n,Mn as r,Mt as i,bt as a,ct as o,jn as s,on as c,ot as l,st as u,t as d}from"./src-C4LTOWe4.js";import{n as f,t as p}from"./loFiMeta-D7BuTyKp.js";var m,h,g,_,v;e((()=>{d(),r(),u(),p(),m=t(),h={...f,title:`Modes/Lo-fi/Media`},g=[{alt:`Bridge`,src:`https://picsum.photos/id/122/1280/720`},{alt:`Bunker`,src:`https://picsum.photos/id/101/1280/720`},{alt:`Chairs`,src:`https://picsum.photos/id/153/1280/720`}],_={render:()=>(0,m.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,m.jsx)(c,{alt:``,src:`https://picsum.photos/id/122/1280/720`}),(0,m.jsxs)(i,{children:[(0,m.jsx)(c,{alt:``,src:`https://picsum.photos/id/101/1280/720`}),(0,m.jsx)(i.Caption,{children:`Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.`})]}),(0,m.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,m.jsx)(n,{imageSrc:`https://picsum.photos/id/64/128/128`,label:`Iris Bakker`}),s.map(e=>(0,m.jsx)(n,{color:e,label:`Iris Bakker`},e))]}),(0,m.jsx)(`div`,{className:`_ams-tests-grid`,children:o.map(e=>(0,m.jsx)(l,{brand:e},e))}),(0,m.jsx)(a,{images:g})]}),tags:[`!dev`,`!autodocs`]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="_ams-tests-stack" style={{
    maxInlineSize: '44rem'
  }}>
      <Image alt="" src="https://picsum.photos/id/122/1280/720" />

      <Figure>
        <Image alt="" src="https://picsum.photos/id/101/1280/720" />
        <Figure.Caption>
          Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.
        </Figure.Caption>
      </Figure>

      <div className="_ams-tests-grid">
        <Avatar imageSrc="https://picsum.photos/id/64/128/128" label="Iris Bakker" />
        {avatarColors.map(color => <Avatar color={color} key={color} label="Iris Bakker" />)}
      </div>

      <div className="_ams-tests-grid">
        {logoBrands.map(brand => <Logo brand={brand} key={brand} />)}
      </div>

      <ImageSlider images={sliderImages} />
    </div>,
  tags: ['!dev', '!autodocs']
}`,..._.parameters?.docs?.source},description:{story:`The photo-hiding trick, which is the most fragile thing in the mode: Lo-fi never removes an image,
it shifts it out of view with \`object-position: -100vw 0\` (or \`background-position\` for the Image
Slider thumbnails) and lets a tokenised placeholder show through underneath. Any photo that
reappears here is a component painting its own image layer instead of the tokenised one.

Each surface hides its image differently, so they all need to be on the sheet: Image draws the
cross placeholder, Avatar falls back to its highlight background, and the slider thumbnails shift
an inline \`background-image\` that no stylesheet can reach.`,..._.parameters?.docs?.description}}},v=[`Test`]}))();export{_ as Test,v as __namedExportsOrder,h as default};