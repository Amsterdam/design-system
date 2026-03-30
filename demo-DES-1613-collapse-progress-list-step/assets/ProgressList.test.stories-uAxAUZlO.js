import{j as e}from"./iframe-B4x5V7Sy.js";import{m as d}from"./ProgressList.stories-C0kVKFYG.js";import{P as s}from"./ProgressList-BuYyPEOr.js";import"./preload-helper-PPVm8Dsz.js";import"./exampleContent-0liIz4uv.js";import"./useKeyboardFocus-CO72QOjh.js";import"./Icon-zcjoj390.js";import"./Heading-CyEXAjCE.js";import"./getHeadingTag-Dv1eMqvl.js";const L={...d,title:"Components/Containers/Progress List"},t={play:async({canvas:r,userEvent:p})=>{const i=r.getByRole("button",{name:/Toggled/});await p.click(i)},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--ams-space-l)",gridTemplateColumns:"repeat(3, 24rem)"},children:[e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{heading:"Completed",status:"completed",children:e.jsx("p",{children:"This step is collapsed by default."})}),e.jsx(s.Step,{heading:"Current",status:"current",children:e.jsx("p",{children:"This step is expanded by default."})}),e.jsx(s.Step,{heading:"Upcoming",children:e.jsx("p",{children:"This step is expanded by default."})})]}),e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{heading:"2024",status:"completed",children:e.jsx("p",{children:"Content for 2024."})}),e.jsx(s.Step,{heading:"2025",status:"completed",children:e.jsx("p",{children:"Content for 2025."})}),e.jsx(s.Step,{defaultCollapsed:!0,heading:"2026",children:e.jsx("p",{children:"Content for 2026."})})]}),e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{defaultCollapsed:!1,heading:"Forced open",status:"completed",children:e.jsx("p",{children:"This completed step is forced open."})}),e.jsx(s.Step,{heading:"Default",status:"completed",children:e.jsx("p",{children:"This completed step is collapsed by default."})}),e.jsx(s.Step,{heading:"Current",status:"current",children:e.jsx("p",{children:"This current step is expanded by default."})}),e.jsx(s.Step,{defaultCollapsed:!0,heading:"Forced closed",children:e.jsx("p",{children:"This upcoming step is forced closed."})})]}),e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{heading:"2026",status:"completed",children:e.jsx("p",{children:"Content for 2026."})}),e.jsxs(s.Step,{hasSubsteps:!0,heading:"2027",status:"current",children:[e.jsx("p",{children:"Content for 2027."}),e.jsxs(s.Substeps,{children:[e.jsx(s.Substep,{status:"completed",children:e.jsx("p",{children:"Februari: De Clercqstraat"})}),e.jsx(s.Substep,{status:"current",children:e.jsx("p",{children:"Juni: Raadhuisstraat"})}),e.jsx(s.Substep,{children:e.jsx("p",{children:"Oktober: Nieuwezijds Voorburgwal"})})]})]}),e.jsx(s.Step,{heading:"2028",children:e.jsx("p",{children:"Content for 2028."})})]}),e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{heading:"2026",status:"completed",children:e.jsx("p",{children:"Content for 2026."})}),e.jsx(s.Step,{heading:"2027",status:"current",children:e.jsx("p",{children:"Content for 2027."})}),e.jsxs(s.Step,{defaultCollapsed:!0,hasSubsteps:!0,heading:"2028",children:[e.jsx("p",{children:"Content for 2028."}),e.jsxs(s.Substeps,{children:[e.jsx(s.Substep,{status:"completed",children:e.jsx("p",{children:"Substep one"})}),e.jsx(s.Substep,{children:e.jsx("p",{children:"Substep two"})})]})]})]}),e.jsxs(s,{headingLevel:3,children:[e.jsx(s.Step,{heading:"Toggled",status:"completed",children:e.jsx("p",{children:"This step was collapsed, then clicked open."})}),e.jsx(s.Step,{heading:"Current",status:"current",children:e.jsx("p",{children:"This step is expanded by default."})})]})]}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Test"];export{t as Test,x as __namedExportsOrder,L as default};
