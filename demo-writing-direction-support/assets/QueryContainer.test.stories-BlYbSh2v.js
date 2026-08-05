import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{$ as n,L as r}from"./index.esm-B5ul1v-t.js";import{a as i,i as a,n as o,r as s}from"./QueryContainer.stories-KuN_DkfM.js";var c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),c=t(),l={...s,title:`Utilities/CSS/Query Container`},u={render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`style`,{children:`
        ._ams-colored-box {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (inline-size >= 20rem) {
            background-color: var(--ams-color-highlight-lime);
          }
        }
      `}),(0,c.jsx)(`div`,{className:`_ams-tests-stack`,children:[`16rem`,`24rem`].map(e=>(0,c.jsx)(a,{className:`ams-query-container-inline-size`,style:{inlineSize:e},children:(0,c.jsx)(`div`,{className:`_ams-colored-box`,children:(0,c.jsx)(r,{children:`This yellow background becomes lime if the query container is wider than 20rem.`})})},e))})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <style>{\`
        ._ams-colored-box {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (inline-size >= 20rem) {
            background-color: var(--ams-color-highlight-lime);
          }
        }
      \`}</style>
      <div className="_ams-tests-stack">
        {/* Below and above the 20rem threshold, so both sides of the container query are covered.
            The story omits the resize affordance of the presentation story: its outline and scrollbars
            would show up in the snapshot without saying anything about the utility. */}
        {['16rem', '24rem'].map(inlineSize => <QueryContainer className="ams-query-container-inline-size" key={inlineSize} style={{
        inlineSize
      }}>
            <div className="_ams-colored-box">
              <Paragraph>This yellow background becomes lime if the query container is wider than 20rem.</Paragraph>
            </div>
          </QueryContainer>)}
      </div>
    </>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...u.parameters?.docs?.source}}},d=[`Test`]})))()}f();export{u as Test,d as __namedExportsOrder,l as default};