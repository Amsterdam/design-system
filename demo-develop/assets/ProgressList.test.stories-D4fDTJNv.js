import{n as e}from"./chunk-BneVvdWh.js";import{At as t}from"./iframe-DTXPeajc.js";import{t as n,v as r}from"./src-DpQNvDDE.js";import i,{n as a}from"./ProgressList.stories-CXWmxiGy.js";var o,s,c,l;e((()=>{n(),a(),o=t(),s={...i,title:`Components/Containers/Progress List`},c={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/Toggled/});await t.click(n)},render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ams-space-l)`,gridTemplateColumns:`repeat(3, 24rem)`},children:[(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{heading:`Completed`,status:`completed`,children:(0,o.jsx)(`p`,{children:`This step is collapsed by default.`})}),(0,o.jsx)(r.Step,{heading:`Current`,status:`current`,children:(0,o.jsx)(`p`,{children:`This step is expanded by default.`})}),(0,o.jsx)(r.Step,{heading:`Upcoming`,children:(0,o.jsx)(`p`,{children:`This step is expanded by default.`})})]}),(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{heading:`2024`,status:`completed`,children:(0,o.jsx)(`p`,{children:`Content for 2024.`})}),(0,o.jsx)(r.Step,{heading:`2025`,status:`completed`,children:(0,o.jsx)(`p`,{children:`Content for 2025.`})}),(0,o.jsx)(r.Step,{defaultCollapsed:!0,heading:`2026`,children:(0,o.jsx)(`p`,{children:`Content for 2026.`})})]}),(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{defaultCollapsed:!1,heading:`Forced open`,status:`completed`,children:(0,o.jsx)(`p`,{children:`This completed step is forced open.`})}),(0,o.jsx)(r.Step,{heading:`Default`,status:`completed`,children:(0,o.jsx)(`p`,{children:`This completed step is collapsed by default.`})}),(0,o.jsx)(r.Step,{heading:`Current`,status:`current`,children:(0,o.jsx)(`p`,{children:`This current step is expanded by default.`})}),(0,o.jsx)(r.Step,{defaultCollapsed:!0,heading:`Forced closed`,children:(0,o.jsx)(`p`,{children:`This upcoming step is forced closed.`})})]}),(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{heading:`2026`,status:`completed`,children:(0,o.jsx)(`p`,{children:`Content for 2026.`})}),(0,o.jsxs)(r.Step,{hasSubsteps:!0,heading:`2027`,status:`current`,children:[(0,o.jsx)(`p`,{children:`Content for 2027.`}),(0,o.jsxs)(r.Substeps,{children:[(0,o.jsx)(r.Substep,{status:`completed`,children:(0,o.jsx)(`p`,{children:`Februari: De Clercqstraat`})}),(0,o.jsx)(r.Substep,{status:`current`,children:(0,o.jsx)(`p`,{children:`Juni: Raadhuisstraat`})}),(0,o.jsx)(r.Substep,{children:(0,o.jsx)(`p`,{children:`Oktober: Nieuwezijds Voorburgwal`})})]})]}),(0,o.jsx)(r.Step,{heading:`2028`,children:(0,o.jsx)(`p`,{children:`Content for 2028.`})})]}),(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{heading:`2026`,status:`completed`,children:(0,o.jsx)(`p`,{children:`Content for 2026.`})}),(0,o.jsx)(r.Step,{heading:`2027`,status:`current`,children:(0,o.jsx)(`p`,{children:`Content for 2027.`})}),(0,o.jsxs)(r.Step,{defaultCollapsed:!0,hasSubsteps:!0,heading:`2028`,children:[(0,o.jsx)(`p`,{children:`Content for 2028.`}),(0,o.jsxs)(r.Substeps,{children:[(0,o.jsx)(r.Substep,{status:`completed`,children:(0,o.jsx)(`p`,{children:`Substep one`})}),(0,o.jsx)(r.Substep,{children:(0,o.jsx)(`p`,{children:`Substep two`})})]})]})]}),(0,o.jsxs)(r,{headingLevel:3,children:[(0,o.jsx)(r.Step,{heading:`Toggled`,status:`completed`,children:(0,o.jsx)(`p`,{children:`This step was collapsed, then clicked open.`})}),(0,o.jsx)(r.Step,{heading:`Current`,status:`current`,children:(0,o.jsx)(`p`,{children:`This step is expanded by default.`})})]})]}),tags:[`!dev`,`!autodocs`]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: /Toggled/
    });
    await userEvent.click(button);
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--ams-space-l)',
    gridTemplateColumns: 'repeat(3, 24rem)'
  }}>
      {/* Default: mix of collapsed (completed) and expanded steps */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <p>This step is collapsed by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* All collapsed: connector hiding, heading spacing, :has() negative margin */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2024" status="completed">
          <p>Content for 2024.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="2025" status="completed">
          <p>Content for 2025.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="2026">
          <p>Content for 2026.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* defaultCollapsed overrides: completed forced open, upcoming forced closed */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step defaultCollapsed={false} heading="Forced open" status="completed">
          <p>This completed step is forced open.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Default" status="completed">
          <p>This completed step is collapsed by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This current step is expanded by default.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="Forced closed">
          <p>This upcoming step is forced closed.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Expanded substeps: indicators not clipped by overflow-y: clip */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <p>Content for 2026.</p>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <p>Content for 2027.</p>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <p>Februari: De Clercqstraat</p>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <p>Juni: Raadhuisstraat</p>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <p>Oktober: Nieuwezijds Voorburgwal</p>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="2028">
          <p>Content for 2028.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsed last step with substeps: connector hidden */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <p>Content for 2026.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="2027" status="current">
          <p>Content for 2027.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed hasSubsteps heading="2028">
          <p>Content for 2028.</p>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <p>Substep one</p>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <p>Substep two</p>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
      </ProgressList>

      {/* Toggle: Chromatic captures the final state after clicking open */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Toggled" status="completed">
          <p>This step was collapsed, then clicked open.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
      </ProgressList>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...c.parameters?.docs?.source}}},l=[`Test`]}))();export{c as Test,l as __namedExportsOrder,s as default};