import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{nt as n,v as r}from"./index.esm-259b1KZl.js";import{c as i,l as a,o,s}from"./KnownDateInput.stories-DvDpcfgA.js";var c,l,u,d;function f(){return(f=e((()=>{n(),a(),o(),c=t(),l={...s,title:`Components/Forms/Known Date Input`},u={render:()=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,c.jsx)(r,{legend:`Wanneer ben je geboren?`,children:(0,c.jsxs)(i,{children:[(0,c.jsx)(i.Day,{defaultValue:16}),(0,c.jsx)(i.Month,{defaultValue:8}),(0,c.jsx)(i.Year,{defaultValue:2e3})]})}),(0,c.jsx)(r,{invalid:!0,legend:`Wanneer ben je geboren?`,children:(0,c.jsxs)(i,{children:[(0,c.jsx)(i.Day,{defaultValue:16}),(0,c.jsx)(i.Month,{defaultValue:8}),(0,c.jsx)(i.Year,{invalid:!0})]})}),(0,c.jsx)(r,{legend:`Wanneer ben je geboren?`,style:{maxInlineSize:`calc(2 * var(--ams-known-date-input-input-inline-size) + 2 * var(--ams-known-date-input-column-gap))`},children:(0,c.jsxs)(i,{children:[(0,c.jsx)(i.Day,{defaultValue:16}),(0,c.jsx)(i.Month,{defaultValue:8}),(0,c.jsx)(i.Year,{defaultValue:2e3})]})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},d=[`Test`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  /*
   * A generated matrix would show only the container: the fields that carry the widths and the invalid
   * state are composed inside it. What is worth a picture is the width of each field, an invalid input,
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
      {/* Room for a day and a month side by side, but not the year, which drops onto a second row. */}
      <FieldSet legend="Wanneer ben je geboren?" style={{
      maxInlineSize: 'calc(2 * var(--ams-known-date-input-input-inline-size) + 2 * var(--ams-known-date-input-column-gap))'
    }}>
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year defaultValue={2000} />
        </KnownDateInput>
      </FieldSet>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Test,d as __namedExportsOrder,l as default};