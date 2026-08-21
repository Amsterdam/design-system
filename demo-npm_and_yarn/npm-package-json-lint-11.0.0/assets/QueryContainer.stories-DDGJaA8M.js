import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,nt as i}from"./index.esm-ugSuYeT4.js";var a,o;function s(){return(s=e((()=>{a=n(),o=e=>(0,a.jsx)(`div`,{...e})})))()}var c=t({InlineSize:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{i(),s(),l=n(),u={title:`Utilities/CSS/Query Container`,component:o},d={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:`
        ._ams-colored-box {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (inline-size >= 20rem) {
            background-color: var(--ams-color-highlight-lime);
          }
        }
      `}),(0,l.jsx)(o,{className:`ams-query-container-inline-size _ams-resize-horizontal`,style:{inlineSize:`16rem`},children:(0,l.jsx)(`div`,{className:`_ams-colored-box`,children:(0,l.jsx)(r,{children:`This yellow background becomes lime if the query container is wider than 20rem.`})})})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <QueryContainer className="ams-query-container-inline-size _ams-resize-horizontal" style={{
      inlineSize: '16rem'
    }}>
        <div className="_ams-colored-box">
          <Paragraph>This yellow background becomes lime if the query container is wider than 20rem.</Paragraph>
        </div>
      </QueryContainer>
    </>
}`,...d.parameters?.docs?.source}}},f=[`InlineSize`]})))()}export{s as a,o as i,p as n,u as r,c as t};