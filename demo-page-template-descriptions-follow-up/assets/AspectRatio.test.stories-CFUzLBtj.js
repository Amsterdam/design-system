import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,r}from"./iframe-KLSLj0jj.js";import{n as i,t as a}from"./generateAspectRatioClass-DCYqhXk3.js";import{i as o,t as s}from"./types-C0F630hP.js";import{n as c,r as l}from"./AspectRatio.stories-DOPfSWVM.js";var u,d,f,p;function m(){return(m=e((()=>{i(),o(),r(),c(),u=t(),d={...l,title:`Utilities/CSS/Aspect Ratio`},f={render:()=>(0,u.jsx)(`div`,{className:`_ams-tests-grid`,style:{alignItems:`flex-start`},children:s.map(e=>(0,u.jsx)(`div`,{className:`_ams-container`,style:{inlineSize:`10rem`},children:(0,u.jsx)(`div`,{className:n(`_ams-item`,a(e))})},e))}),tags:[`!dev`,`!autodocs`,`!manifest`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p=[`Test`]})))()}m();export{f as Test,p as __namedExportsOrder,d as default};