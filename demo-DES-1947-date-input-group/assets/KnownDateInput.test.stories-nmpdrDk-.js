import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{nt as n,v as r}from"./index.esm-C2x89at7.js";import{a as i,c as a,o,s}from"./KnownDateInput.stories-DNnDRAmm.js";var c,l,u,d;function f(){return(f=e((()=>{n(),a(),i(),c=t(),l={...o,title:`Components/Forms/Known Date Input`},u={render:()=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,c.jsx)(r,{legend:`Wanneer ben je geboren?`,children:(0,c.jsxs)(s,{children:[(0,c.jsx)(s.Day,{defaultValue:16}),(0,c.jsx)(s.Month,{defaultValue:8}),(0,c.jsx)(s.Year,{defaultValue:2e3})]})}),(0,c.jsx)(r,{invalid:!0,legend:`Wanneer ben je geboren?`,children:(0,c.jsxs)(s,{children:[(0,c.jsx)(s.Day,{defaultValue:16}),(0,c.jsx)(s.Month,{defaultValue:8}),(0,c.jsx)(s.Year,{invalid:!0})]})}),(0,c.jsx)(`div`,{style:{maxInlineSize:`14rem`},children:(0,c.jsx)(r,{legend:`Wanneer ben je geboren?`,children:(0,c.jsxs)(s,{children:[(0,c.jsx)(s.Day,{defaultValue:16}),(0,c.jsx)(s.Month,{defaultValue:8}),(0,c.jsx)(s.Year,{defaultValue:2e3})]})})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  /*
   * A generated matrix would show only the container: the parts that carry the widths and the invalid
   * state are composed inside it. What is worth a picture is the width of each part, an invalid input,
   * and the wrap onto a second row.
   */
  render: () => <div className="_ams-tests-stack">
      <FieldSet legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year defaultValue={2000} />
        </KnownDateInput>
      </FieldSet>
      <FieldSet invalid legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year invalid />
        </KnownDateInput>
      </FieldSet>
      {/* Too narrow for three parts side by side, so the year drops onto a second row. */}
      <div style={{
      maxInlineSize: '14rem'
    }}>
        <FieldSet legend="Wanneer ben je geboren?">
          <KnownDateInput>
            <KnownDateInput.Day defaultValue={16} />
            <KnownDateInput.Month defaultValue={8} />
            <KnownDateInput.Year defaultValue={2000} />
          </KnownDateInput>
        </FieldSet>
      </div>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...u.parameters?.docs?.source}}},d=[`Test`]})))()}f();export{u as Test,d as __namedExportsOrder,l as default};