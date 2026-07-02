import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-BTu_umhU.js";import{t as i}from"./jsx-runtime-BCDDjCIb.js";import{J as a,P as o,q as s}from"./index.esm-qiINkqrm.js";import{F as c,N as l,P as u,t as d}from"./src-CBMTSMgy.js";import{l as f,m as p,p as m}from"./exampleContent-CFoxZuYq.js";var h=e({Collapsible:()=>S,Controlled:()=>C,Default:()=>x,WithSubsteps:()=>w,__namedExportsOrder:()=>T,default:()=>b}),g,_,v,y,b,x,S,C,w,T,E=t((()=>{a(),d(),u(),g=n(r()),p(),_=i(),v=Array.from({length:6},()=>f()),y=m().slice(0,2).map(e=>(0,_.jsx)(s.Item,{children:e},e)),b={title:`Components/Containers/Progress List`,component:l,args:{children:[(0,_.jsx)(l.Step,{heading:`Aanvraag ingediend`,status:`completed`,children:(0,_.jsx)(o,{children:`Uw aanvraag is op 2 januari 2026 ontvangen.`})},0),(0,_.jsx)(l.Step,{heading:`In behandeling`,status:`current`,children:(0,_.jsx)(o,{children:`Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.`})},1),(0,_.jsx)(l.Step,{heading:`Besluit`,children:(0,_.jsx)(o,{children:`U ontvangt het besluit binnen 8 weken na uw aanvraag.`})},2),(0,_.jsx)(l.Step,{heading:`Uitvoering`,children:(0,_.jsx)(o,{children:`Na een positief besluit starten de werkzaamheden volgens planning.`})},3)],headingLevel:3},argTypes:{collapsible:{control:{type:`boolean`}},completedAccessibleText:{control:{type:`text`}},currentAccessibleText:{control:{type:`text`}},headingLevel:{control:`radio`,options:c}}},x={},S={args:{children:[(0,_.jsx)(l.Step,{heading:`2025`,status:`completed`,children:(0,_.jsx)(o,{children:v[0]})},0),(0,_.jsxs)(l.Step,{heading:`2026`,status:`current`,children:[(0,_.jsx)(o,{className:`ams-mb-m`,children:v[1]}),(0,_.jsx)(s,{children:y})]},1),(0,_.jsx)(l.Step,{heading:`2027`,children:(0,_.jsx)(o,{children:v[2]})},2)],collapsible:!0}},C={parameters:{docs:{source:{code:`const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

<ProgressList collapsible headingLevel={3}>
  <ProgressList.Step
    collapsed={expandedIndex !== 0}
    heading="Aanvraag ingediend"
    onToggle={(expanded) => setExpandedIndex(expanded ? 0 : null)}
    status="completed"
  >
    <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    collapsed={expandedIndex !== 1}
    heading="In behandeling"
    onToggle={(expanded) => setExpandedIndex(expanded ? 1 : null)}
    status="current"
  >
    <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    collapsed={expandedIndex !== 2}
    heading="Besluit"
    onToggle={(expanded) => setExpandedIndex(expanded ? 2 : null)}
  >
    <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
  </ProgressList.Step>
</ProgressList>`,language:`tsx`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/Aanvraag ingediend/}))},render:()=>{let[e,t]=(0,g.useState)(1);return(0,_.jsxs)(l,{collapsible:!0,headingLevel:3,children:[(0,_.jsx)(l.Step,{collapsed:e!==0,heading:`Aanvraag ingediend`,onToggle:e=>t(e?0:null),status:`completed`,children:(0,_.jsx)(o,{children:`Uw aanvraag is op 2 januari 2026 ontvangen.`})}),(0,_.jsx)(l.Step,{collapsed:e!==1,heading:`In behandeling`,onToggle:e=>t(e?1:null),status:`current`,children:(0,_.jsx)(o,{children:`Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.`})}),(0,_.jsx)(l.Step,{collapsed:e!==2,heading:`Besluit`,onToggle:e=>t(e?2:null),children:(0,_.jsx)(o,{children:`U ontvangt het besluit binnen 8 weken na uw aanvraag.`})})]})}},w={args:{children:[(0,_.jsx)(l.Step,{heading:`2026`,status:`completed`,children:(0,_.jsx)(o,{children:v[0]})},1),(0,_.jsxs)(l.Step,{hasSubsteps:!0,heading:`2027`,status:`current`,children:[(0,_.jsx)(o,{children:v[1]}),(0,_.jsxs)(l.Substeps,{children:[(0,_.jsx)(l.Substep,{status:`completed`,children:(0,_.jsx)(o,{children:`Februari: De Clercqstraat en Jan Evertsenstraat`})}),(0,_.jsx)(l.Substep,{status:`completed`,children:(0,_.jsx)(o,{children:`April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat`})}),(0,_.jsx)(l.Substep,{status:`current`,children:(0,_.jsx)(o,{children:`Juni: Raadhuisstraat, Westermarkt en Rozengracht`})}),(0,_.jsx)(l.Substep,{children:(0,_.jsx)(o,{children:`Augustus: Kruispunt Marnixstraat-Rozengracht`})}),(0,_.jsx)(l.Substep,{children:(0,_.jsx)(o,{children:`Oktober: Nieuwezijds Voorburgwal`})})]})]},2),(0,_.jsx)(l.Step,{heading:`2028`,children:(0,_.jsx)(o,{children:v[2]})},3)],collapsible:!0}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2025" key={0} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>, <ProgressList.Step heading="2026" key={1} status="current">
        <Paragraph className="ams-mb-m">{paragraphs[1]}</Paragraph>
        <UnorderedList>{unorderedList}</UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>],
    collapsible: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

<ProgressList collapsible headingLevel={3}>
  <ProgressList.Step
    collapsed={expandedIndex !== 0}
    heading="Aanvraag ingediend"
    onToggle={(expanded) => setExpandedIndex(expanded ? 0 : null)}
    status="completed"
  >
    <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    collapsed={expandedIndex !== 1}
    heading="In behandeling"
    onToggle={(expanded) => setExpandedIndex(expanded ? 1 : null)}
    status="current"
  >
    <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    collapsed={expandedIndex !== 2}
    heading="Besluit"
    onToggle={(expanded) => setExpandedIndex(expanded ? 2 : null)}
  >
    <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
  </ProgressList.Step>
</ProgressList>\`,
        language: 'tsx'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Aanvraag ingediend/
    }));
  },
  render: () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(1);
    return <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step collapsed={expandedIndex !== 0} heading="Aanvraag ingediend" onToggle={expanded => setExpandedIndex(expanded ? 0 : null)} status="completed">
          <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step collapsed={expandedIndex !== 1} heading="In behandeling" onToggle={expanded => setExpandedIndex(expanded ? 1 : null)} status="current">
          <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step collapsed={expandedIndex !== 2} heading="Besluit" onToggle={expanded => setExpandedIndex(expanded ? 2 : null)}>
          <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
        </ProgressList.Step>
      </ProgressList>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2026" key={1} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>, <ProgressList.Step hasSubsteps heading="2027" key={2} status="current">
        <Paragraph>{paragraphs[1]}</Paragraph>
        <ProgressList.Substeps>
          <ProgressList.Substep status="completed">
            <Paragraph>Februari: De Clercqstraat en Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="completed">
            <Paragraph>April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="current">
            <Paragraph>Juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Augustus: Kruispunt Marnixstraat-Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Oktober: Nieuwezijds Voorburgwal</Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>, <ProgressList.Step heading="2028" key={3}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>],
    collapsible: true
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Collapsible`,`Controlled`,`WithSubsteps`]}));E();export{S as Collapsible,C as Controlled,x as Default,w as WithSubsteps,T as __namedExportsOrder,b as default,E as n,h as t};