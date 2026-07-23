import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{n,t as r}from"./iframe-ChUMF-JA.js";import{sn as i,t as a}from"./src-DwxBVFXV.js";import{i as o,t as s}from"./types-Upr6OxRk.js";import c,{n as l}from"./AspectRatio.stories-W3xT9aQ_.js";var u,d,f,p;e((()=>{a(),o(),n(),l(),u=t(),d={...c,title:`Utilities/CSS/Aspect Ratio`},f={render:()=>(0,u.jsx)(`div`,{className:`_ams-tests-grid`,style:{alignItems:`flex-start`},children:s.map(e=>(0,u.jsx)(`div`,{className:`_ams-container`,style:{inlineSize:`10rem`},children:(0,u.jsx)(`div`,{className:r(`_ams-item`,i(e))})},e))}),tags:[`!dev`,`!autodocs`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="_ams-tests-grid" style={{
    alignItems: 'flex-start'
  }}>
      {/* A fixed inline size keeps the ratios comparable: the block size comes from the class alone.
          Aligning to the start stops the row from stretching every container to the tallest ratio. */}
      {aspectRatioOptions.map(aspectRatio => <div className="_ams-container" key={aspectRatio} style={{
      inlineSize: '10rem'
    }}>
          <div className={clsx('_ams-item', generateAspectRatioClass(aspectRatio))} />
        </div>)}
    </div>,
  tags: ['!dev', '!autodocs']
}`,...f.parameters?.docs?.source}}},p=[`Test`]}))();export{f as Test,p as __namedExportsOrder,d as default};