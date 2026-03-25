import{j as s,P as e,U as p}from"./iframe-Cb4QWKRO.js";import{e as o,a as u}from"./exampleContent-0liIz4uv.js";import{P as r}from"./ProgressList-BEwuCrfO.js";const a=Array.from({length:6},()=>o()),g=u().slice(0,2).map(i=>s.jsx(p.Item,{children:i},i)),h={title:"Components/Containers/Progress List",component:r,args:{children:[s.jsx(r.Step,{heading:"2025",status:"completed",children:s.jsx(e,{children:a[0]})},0),s.jsxs(r.Step,{heading:"2026",status:"current",children:[s.jsx(e,{className:"ams-mb-m",children:a[1]}),s.jsx(p,{children:g})]},1),s.jsx(r.Step,{heading:"2027",children:s.jsx(e,{children:a[2]})},2)],headingLevel:3}},t={},n={args:{children:[s.jsx(r.Step,{heading:"2026",status:"completed",children:s.jsx(e,{children:a[0]})},1),s.jsxs(r.Step,{hasSubsteps:!0,heading:"2027",status:"current",children:[s.jsx(e,{children:a[1]}),s.jsxs(r.Substeps,{children:[s.jsx(r.Substep,{status:"completed",children:s.jsx(e,{children:"Februari: De Clercqstraat en Jan Evertsenstraat"})}),s.jsx(r.Substep,{status:"completed",children:s.jsx(e,{children:"April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat"})}),s.jsx(r.Substep,{status:"current",children:s.jsx(e,{children:"Juni: Raadhuisstraat, Westermarkt en Rozengracht"})}),s.jsx(r.Substep,{children:s.jsx(e,{children:"Augustus: Kruispunt Marnixstraat-Rozengracht"})}),s.jsx(r.Substep,{children:s.jsx(e,{children:"Oktober: Nieuwezijds Voorburgwal"})})]})]},2),s.jsx(r.Step,{heading:"2028",children:s.jsx(e,{children:a[2]})},3)]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
      </ProgressList.Step>]
  }
}`,...n.parameters?.docs?.source}}};const c=["Default","WithSubsteps"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithSubsteps:n,__namedExportsOrder:c,default:h},Symbol.toStringTag,{value:"Module"}));export{m as P,n as W,h as m};
