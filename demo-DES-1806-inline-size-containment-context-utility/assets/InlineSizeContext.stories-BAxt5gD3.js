import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{F as n,Vt as r,Y as i}from"./iframe-cGflhH8R.js";var a,o,s=e((()=>{a=r(),o=e=>(0,a.jsx)(`div`,{...e})})),c=t({Default:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f,p=e((()=>{i(),s(),l=r(),u={title:`Utilities/CSS/Inline Size Context`,component:o},d={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:`
        .ams-inline-size-context-demo {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-inline-size-context (min-inline-size: 300px) {
            background-color: var(--ams-color-highlight-azure);
          }
        }
      `}),(0,l.jsx)(o,{className:`ams-inline-size-context _ams-resize-horizontal`,style:{inlineSize:`200px`},children:(0,l.jsx)(`div`,{className:`ams-inline-size-context-demo`,children:(0,l.jsx)(n,{children:`Below 300 px, the background is yellow. At 300 px and above, it is azure.`})})})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <style>{\`
        .ams-inline-size-context-demo {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-inline-size-context (min-inline-size: 300px) {
            background-color: var(--ams-color-highlight-azure);
          }
        }
      \`}</style>
      <InlineSizeContext className="ams-inline-size-context _ams-resize-horizontal" style={{
      inlineSize: '200px'
    }}>
        <div className="ams-inline-size-context-demo">
          <Paragraph>Below 300 px, the background is yellow. At 300 px and above, it is azure.</Paragraph>
        </div>
      </InlineSizeContext>
    </>
}`,...d.parameters?.docs?.source}}},f=[`Default`]}));p();export{d as Default,f as __namedExportsOrder,u as default,p as n,c as t};