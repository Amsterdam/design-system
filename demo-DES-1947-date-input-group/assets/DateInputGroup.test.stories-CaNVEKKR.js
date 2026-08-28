import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{O as n,et as r,nt as i,v as a}from"./index.esm-_Ol-Z9VZ.js";import{a as o,i as s,o as c,s as l}from"./DateInputGroup.stories-dCR_8v7x.js";var u,d,f,p;function m(){return(m=e((()=>{i(),l(),s(),u=t(),d={...o,title:`Components/Forms/Date Input Group`},f={render:()=>(0,u.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,u.jsx)(a,{legend:`Wanneer ben je geboren?`,children:(0,u.jsxs)(c,{children:[(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-1`,inFieldSet:!0,children:`Dag`}),(0,u.jsx)(r,{defaultValue:16,id:`test-1`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-2`,inFieldSet:!0,children:`Maand`}),(0,u.jsx)(r,{defaultValue:8,id:`test-2`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{wide:!0,children:[(0,u.jsx)(n,{htmlFor:`test-3`,inFieldSet:!0,children:`Jaar`}),(0,u.jsx)(r,{defaultValue:2e3,id:`test-3`,inputMode:`numeric`})]})]})}),(0,u.jsx)(a,{invalid:!0,legend:`Wanneer ben je geboren?`,children:(0,u.jsxs)(c,{children:[(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-4`,inFieldSet:!0,children:`Dag`}),(0,u.jsx)(r,{defaultValue:16,id:`test-4`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-5`,inFieldSet:!0,children:`Maand`}),(0,u.jsx)(r,{defaultValue:8,id:`test-5`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{wide:!0,children:[(0,u.jsx)(n,{htmlFor:`test-6`,inFieldSet:!0,children:`Jaar`}),(0,u.jsx)(r,{id:`test-6`,inputMode:`numeric`,invalid:!0})]})]})}),(0,u.jsx)(`div`,{style:{maxInlineSize:`14rem`},children:(0,u.jsx)(a,{legend:`Wanneer ben je geboren?`,children:(0,u.jsxs)(c,{children:[(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-7`,inFieldSet:!0,children:`Dag`}),(0,u.jsx)(r,{defaultValue:16,id:`test-7`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-8`,inFieldSet:!0,children:`Maand`}),(0,u.jsx)(r,{defaultValue:8,id:`test-8`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{wide:!0,children:[(0,u.jsx)(n,{htmlFor:`test-9`,inFieldSet:!0,children:`Jaar`}),(0,u.jsx)(r,{defaultValue:2e3,id:`test-9`,inputMode:`numeric`})]})]})})}),(0,u.jsx)(a,{legend:`Wanneer ben je geboren?`,children:(0,u.jsxs)(c,{children:[(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-10`,inFieldSet:!0,children:`Dag`}),(0,u.jsx)(r,{defaultValue:16,id:`test-10`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{children:[(0,u.jsx)(n,{htmlFor:`test-11`,inFieldSet:!0,children:`Maand`}),(0,u.jsx)(r,{defaultValue:8,id:`test-11`,inputMode:`numeric`})]}),(0,u.jsxs)(c.Field,{wide:!0,children:[(0,u.jsx)(n,{htmlFor:`test-12`,inFieldSet:!0,children:`Jaar`}),(0,u.jsx)(r,{defaultValue:2e3,id:`test-12`,inputMode:`numeric`,size:12})]})]})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  /*
   * A generated matrix would be empty: the group takes only the fields composed inside it, and its one
   * choice sits on DateInputGroup.Field. What is worth a picture is the width of each field, the invalid
   * state of the inputs, the wrap onto a second row, and the author-set \`size\` the group leaves alone —
   * none of which show up until a group holds labelled Text Inputs.
   */
  render: () => <div className="_ams-tests-stack">
      <FieldSet legend="Wanneer ben je geboren?">
        <DateInputGroup>
          <DateInputGroup.Field>
            <Label htmlFor="test-1" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-1" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field>
            <Label htmlFor="test-2" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-2" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field wide>
            <Label htmlFor="test-3" inFieldSet>
              Jaar
            </Label>
            <TextInput defaultValue={2000} id="test-3" inputMode="numeric" />
          </DateInputGroup.Field>
        </DateInputGroup>
      </FieldSet>
      <FieldSet invalid legend="Wanneer ben je geboren?">
        <DateInputGroup>
          <DateInputGroup.Field>
            <Label htmlFor="test-4" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-4" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field>
            <Label htmlFor="test-5" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-5" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field wide>
            <Label htmlFor="test-6" inFieldSet>
              Jaar
            </Label>
            <TextInput id="test-6" inputMode="numeric" invalid />
          </DateInputGroup.Field>
        </DateInputGroup>
      </FieldSet>
      {/* Too narrow for three fields side by side, so the year drops onto a second row. */}
      <div style={{
      maxInlineSize: '14rem'
    }}>
        <FieldSet legend="Wanneer ben je geboren?">
          <DateInputGroup>
            <DateInputGroup.Field>
              <Label htmlFor="test-7" inFieldSet>
                Dag
              </Label>
              <TextInput defaultValue={16} id="test-7" inputMode="numeric" />
            </DateInputGroup.Field>
            <DateInputGroup.Field>
              <Label htmlFor="test-8" inFieldSet>
                Maand
              </Label>
              <TextInput defaultValue={8} id="test-8" inputMode="numeric" />
            </DateInputGroup.Field>
            <DateInputGroup.Field wide>
              <Label htmlFor="test-9" inFieldSet>
                Jaar
              </Label>
              <TextInput defaultValue={2000} id="test-9" inputMode="numeric" />
            </DateInputGroup.Field>
          </DateInputGroup>
        </FieldSet>
      </div>
      {/* The last field sets \`size\` itself, which the group leaves in charge of the width. */}
      <FieldSet legend="Wanneer ben je geboren?">
        <DateInputGroup>
          <DateInputGroup.Field>
            <Label htmlFor="test-10" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-10" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field>
            <Label htmlFor="test-11" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-11" inputMode="numeric" />
          </DateInputGroup.Field>
          <DateInputGroup.Field wide>
            <Label htmlFor="test-12" inFieldSet>
              Jaar
            </Label>
            <TextInput defaultValue={2000} id="test-12" inputMode="numeric" size={12} />
          </DateInputGroup.Field>
        </DateInputGroup>
      </FieldSet>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p=[`Test`]})))()}m();export{f as Test,p as __namedExportsOrder,d as default};