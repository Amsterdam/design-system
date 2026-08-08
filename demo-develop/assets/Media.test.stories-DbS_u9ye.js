import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,r,t as i}from"./Avatar-Cdl-9z-y.js";import{n as a,t as o}from"./Image-CGZ86DI4.js";import{n as s,t as c}from"./Figure-CaKB3CTU.js";import{n as l,t as u}from"./ImageSlider-B3urc9JE.js";import{n as d,r as f,t as p}from"./Logo-DPu6Kd-n.js";import{n as m,t as h}from"./loFiMeta-DTKUndwq.js";var g,_,v,y,b;function x(){return(x=e((()=>{r(),s(),a(),l(),d(),h(),g=t(),_={...m,title:`Modes/Lo-fi/Media`},v=[{alt:`Bridge`,src:`https://picsum.photos/id/122/1280/720`},{alt:`Bunker`,src:`https://picsum.photos/id/101/1280/720`},{alt:`Chairs`,src:`https://picsum.photos/id/153/1280/720`}],y={render:()=>(0,g.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,g.jsx)(o,{alt:``,src:`https://picsum.photos/id/122/1280/720`}),(0,g.jsxs)(c,{children:[(0,g.jsx)(o,{alt:``,src:`https://picsum.photos/id/101/1280/720`}),(0,g.jsx)(c.Caption,{children:`Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.`})]}),(0,g.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,g.jsx)(i,{imageSrc:`https://picsum.photos/id/64/128/128`,label:`Iris Bakker`}),n.map(e=>(0,g.jsx)(i,{color:e,label:`Iris Bakker`},e))]}),(0,g.jsx)(`div`,{className:`_ams-tests-grid`,children:f.map(e=>(0,g.jsx)(p,{brand:e},e))}),(0,g.jsx)(u,{images:v})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source},description:{story:`The photo-hiding trick, which is the most fragile thing in the mode: Lo-fi never removes an image,
it shifts it out of view with \`object-position: -100vw 0\` (or \`background-position\` for the Image
Slider thumbnails) and lets a tokenised placeholder show through underneath. Any photo that
reappears here is a component painting its own image layer instead of the tokenised one.

Each surface hides its image differently, so they all need to be on the sheet: Image draws the
cross placeholder, Avatar falls back to its highlight background, and the slider thumbnails shift
an inline \`background-image\` that no stylesheet can reach.`,...y.parameters?.docs?.description}}},b=[`Test`]})))()}x();export{y as Test,b as __namedExportsOrder,_ as default};