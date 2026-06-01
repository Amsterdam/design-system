import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t,I as n,X as r}from"./iframe-eAZaP25R.js";import{t as i,y as a}from"./src-ThoLlEej.js";import o,{n as s}from"./ProgressList.stories-D9XpnYxZ.js";var c,l,u,d;e((()=>{r(),i(),s(),c=t(),l={...o,title:`Components/Containers/Progress List`},u={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/Toggled/});await t.click(n)},render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ams-space-l)`,gridTemplateColumns:`repeat(3, 24rem)`},children:[(0,c.jsxs)(a,{headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`Completed`,status:`completed`,children:(0,c.jsx)(n,{children:`This completed step is always visible.`})}),(0,c.jsx)(a.Step,{heading:`Current`,status:`current`,children:(0,c.jsx)(n,{children:`This current step is always visible.`})}),(0,c.jsx)(a.Step,{heading:`Upcoming`,children:(0,c.jsx)(n,{children:`This upcoming step is always visible.`})})]}),(0,c.jsxs)(a,{headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`Completed`,status:`completed`,children:(0,c.jsx)(n,{children:`Content for completed step.`})}),(0,c.jsxs)(a.Step,{hasSubsteps:!0,heading:`Current`,status:`current`,children:[(0,c.jsx)(n,{children:`Content for current step.`}),(0,c.jsxs)(a.Substeps,{children:[(0,c.jsx)(a.Substep,{status:`completed`,children:(0,c.jsx)(n,{children:`Substep one`})}),(0,c.jsx)(a.Substep,{status:`current`,children:(0,c.jsx)(n,{children:`Substep two`})}),(0,c.jsx)(a.Substep,{children:(0,c.jsx)(n,{children:`Substep three`})})]})]}),(0,c.jsx)(a.Step,{heading:`Upcoming`,children:(0,c.jsx)(n,{children:`Content for upcoming step.`})})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`Completed`,status:`completed`,children:(0,c.jsx)(n,{children:`This step is collapsed by default.`})}),(0,c.jsx)(a.Step,{heading:`Current`,status:`current`,children:(0,c.jsx)(n,{children:`This step is expanded by default.`})}),(0,c.jsx)(a.Step,{heading:`Upcoming`,children:(0,c.jsx)(n,{children:`This step is expanded by default.`})})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`2024`,status:`completed`,children:(0,c.jsx)(n,{children:`Content for 2024.`})}),(0,c.jsx)(a.Step,{heading:`2025`,status:`completed`,children:(0,c.jsx)(n,{children:`Content for 2025.`})}),(0,c.jsx)(a.Step,{defaultCollapsed:!0,heading:`2026`,children:(0,c.jsx)(n,{children:`Content for 2026.`})})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{defaultCollapsed:!1,heading:`Forced open`,status:`completed`,children:(0,c.jsx)(n,{children:`This completed step is forced open.`})}),(0,c.jsx)(a.Step,{heading:`Default`,status:`completed`,children:(0,c.jsx)(n,{children:`This completed step is collapsed by default.`})}),(0,c.jsx)(a.Step,{heading:`Current`,status:`current`,children:(0,c.jsx)(n,{children:`This current step is expanded by default.`})}),(0,c.jsx)(a.Step,{defaultCollapsed:!0,heading:`Forced closed`,children:(0,c.jsx)(n,{children:`This upcoming step is forced closed.`})})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`2026`,status:`completed`,children:(0,c.jsx)(n,{children:`Content for 2026.`})}),(0,c.jsxs)(a.Step,{hasSubsteps:!0,heading:`2027`,status:`current`,children:[(0,c.jsx)(n,{children:`Content for 2027.`}),(0,c.jsxs)(a.Substeps,{children:[(0,c.jsx)(a.Substep,{status:`completed`,children:(0,c.jsx)(n,{children:`Februari: De Clercqstraat`})}),(0,c.jsx)(a.Substep,{status:`current`,children:(0,c.jsx)(n,{children:`Juni: Raadhuisstraat`})}),(0,c.jsx)(a.Substep,{children:(0,c.jsx)(n,{children:`Oktober: Nieuwezijds Voorburgwal`})})]})]}),(0,c.jsx)(a.Step,{heading:`2028`,children:(0,c.jsx)(n,{children:`Content for 2028.`})})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`2026`,status:`completed`,children:(0,c.jsx)(n,{children:`Content for 2026.`})}),(0,c.jsx)(a.Step,{heading:`2027`,status:`current`,children:(0,c.jsx)(n,{children:`Content for 2027.`})}),(0,c.jsxs)(a.Step,{defaultCollapsed:!0,hasSubsteps:!0,heading:`2028`,children:[(0,c.jsx)(n,{children:`Content for 2028.`}),(0,c.jsxs)(a.Substeps,{children:[(0,c.jsx)(a.Substep,{status:`completed`,children:(0,c.jsx)(n,{children:`Substep one`})}),(0,c.jsx)(a.Substep,{children:(0,c.jsx)(n,{children:`Substep two`})})]})]})]}),(0,c.jsxs)(a,{collapsible:!0,headingLevel:3,children:[(0,c.jsx)(a.Step,{heading:`Toggled`,status:`completed`,children:(0,c.jsx)(n,{children:`This step was collapsed, then clicked open.`})}),(0,c.jsx)(a.Step,{heading:`Current`,status:`current`,children:(0,c.jsx)(n,{children:`This step is expanded by default.`})})]})]}),tags:[`!dev`,`!autodocs`]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      {/* Default (not collapsible): no buttons, no chevrons, all content visible */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>This completed step is always visible.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This current step is always visible.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>This upcoming step is always visible.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Not collapsible with substeps */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>Content for completed step.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="Current" status="current">
          <Paragraph>Content for current step.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Substep one</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <Paragraph>Substep two</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Substep three</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>Content for upcoming step.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible: mix of collapsed (completed) and expanded steps */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>This step is collapsed by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, all collapsed: connector hiding, heading spacing, :has() negative margin */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2024" status="completed">
          <Paragraph>Content for 2024.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="2025" status="completed">
          <Paragraph>Content for 2025.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="2026">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, defaultCollapsed overrides: completed forced open, upcoming forced closed */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step defaultCollapsed={false} heading="Forced open" status="completed">
          <Paragraph>This completed step is forced open.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Default" status="completed">
          <Paragraph>This completed step is collapsed by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This current step is expanded by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="Forced closed">
          <Paragraph>This upcoming step is forced closed.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible with expanded substeps: indicators not clipped by overflow-y: clip */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <Paragraph>Content for 2027.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Februari: De Clercqstraat</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <Paragraph>Juni: Raadhuisstraat</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Oktober: Nieuwezijds Voorburgwal</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="2028">
          <Paragraph>Content for 2028.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, collapsed last step with substeps: connector hidden */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="2027" status="current">
          <Paragraph>Content for 2027.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed hasSubsteps heading="2028">
          <Paragraph>Content for 2028.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Substep one</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Substep two</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible toggle: Chromatic captures the final state after clicking open */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="Toggled" status="completed">
          <Paragraph>This step was collapsed, then clicked open.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
      </ProgressList>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...u.parameters?.docs?.source}}},d=[`Test`]}))();export{u as Test,d as __namedExportsOrder,l as default};