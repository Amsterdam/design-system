import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-BG4KOiPz.js";import{n,t as r}from"./example-photo-01-128x128-D2dujOHS.js";import{n as i,r as a,t as o}from"./Avatar-h4e_XrqO.js";import{n as s,t as c}from"./Image-BGV3PBxX.js";import{n as l,t as u}from"./Figure-Cw7wqxjs.js";import{n as d,t as f}from"./ImageSlider-PFlHHW2-.js";import{n as p,r as m,t as h}from"./Logo-DFB1GAXi.js";import{n as g,t as _}from"./example-photo-02-BUk7ClGW.js";import{n as v,t as y}from"./example-photo-03-B0zrQahh.js";import{n as b,t as x}from"./example-photo-06-CHAxqzny.js";import{n as S,t as C}from"./loFiMeta-BuNtY3PB.js";var w,T,E,D,O;function k(){return(k=e((()=>{a(),l(),s(),d(),p(),n(),g(),v(),b(),C(),w=t(),T={...S,title:`Modes/Lo-fi/Media`},E=[{alt:`Bridge`,src:y},{alt:`Bunker`,src:_},{alt:`Chairs`,src:x}],D={render:()=>(0,w.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,w.jsx)(c,{alt:``,src:y}),(0,w.jsxs)(u,{children:[(0,w.jsx)(c,{alt:``,src:_}),(0,w.jsx)(u.Caption,{children:`Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.`})]}),(0,w.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,w.jsx)(o,{imageSrc:r,label:`Iris Bakker`}),i.map(e=>(0,w.jsx)(o,{color:e,label:`Iris Bakker`},e))]}),(0,w.jsx)(`div`,{className:`_ams-tests-grid`,children:m.map(e=>(0,w.jsx)(h,{brand:e},e))}),(0,w.jsx)(f,{images:E})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},O=[`Test`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="_ams-tests-stack" style={{
    maxInlineSize: '44rem'
  }}>
      <Image alt="" src={examplePhoto03} />

      <Figure>
        <Image alt="" src={examplePhoto02} />
        <Figure.Caption>
          Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.
        </Figure.Caption>
      </Figure>

      <div className="_ams-tests-grid">
        <Avatar imageSrc={examplePhoto01Square} label="Iris Bakker" />
        {avatarColors.map(color => <Avatar color={color} key={color} label="Iris Bakker" />)}
      </div>

      <div className="_ams-tests-grid">
        {logoBrands.map(brand => <Logo brand={brand} key={brand} />)}
      </div>

      <ImageSlider images={sliderImages} />
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...D.parameters?.docs?.source},description:{story:`The photo-hiding trick, which is the most fragile thing in the mode: Lo-fi never removes an image,
it shifts it out of view with \`object-position: -100vw 0\` (or \`background-position\` for the Image
Slider thumbnails) and lets a tokenised placeholder show through underneath. Any photo that
reappears here is a component painting its own image layer instead of the tokenised one.

Each surface hides its image differently, so they all need to be on the sheet: Image draws the
cross placeholder, Avatar falls back to its highlight background, and the slider thumbnails shift
an inline \`background-image\` that no stylesheet can reach.`,...D.parameters?.docs?.description}}}})))()}k();export{D as Test,O as __namedExportsOrder,T as default};