import{r as p,j as e,c as h,ah as _,P as s,U as t,G as m,H as k}from"./iframe-DhHivbDR.js";import{i as I,b as N}from"./exampleContent-Du2yH2Fl.js";import{I as f}from"./Icon-Cy2gK4Kb.js";import{H as U}from"./Heading-CdI6Gd7B.js";const y={headingLevel:2},b=p.createContext(y),j=p.forwardRef(({children:n,className:d,hasSubsteps:a,heading:g,status:o,...x},v)=>{const{headingLevel:w}=p.useContext(b);return e.jsxs("li",{"aria-current":o==="current"?"step":void 0,className:h(d,"ams-progress-list__step",a&&"ams-progress-list__step--has-substeps",o&&`ams-progress-list__step--${o}`),ref:v,...x,children:[e.jsxs("div",{className:"ams-progress-list__indicator",children:[e.jsx("div",{className:"ams-progress-list__marker",children:e.jsx("span",{className:"ams-progress-list__marker-shape",children:o==="current"&&e.jsx(f,{color:"inverse",svg:_})})}),e.jsx("span",{className:"ams-progress-list__connector"})]}),e.jsxs("div",{className:"ams-progress-list__content",children:[e.jsx(U,{className:"ams-progress-list__heading",level:w,children:g}),n]})]})});j.displayName="ProgressList.Step";try{ProgressList.Step.displayName="ProgressList.Step",ProgressList.Step.__docgenInfo={description:"",displayName:"ProgressList.Step",props:{hasSubsteps:{defaultValue:null,description:"Whether the step contains a list of substeps. This is needed to draw the connecting lines correctly.",name:"hasSubsteps",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"The heading text for this step.",name:"heading",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"The current progress state of the step.",name:"status",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"completed"'}]}}}}}catch{}const S=p.forwardRef(({children:n,className:d,status:a,...g},o)=>e.jsxs("li",{"aria-current":a==="current"?"step":void 0,className:h("ams-progress-list-substeps__step",a&&`ams-progress-list-substeps__step--${a}`,d),ref:o,...g,children:[e.jsxs("div",{className:"ams-progress-list-substeps__indicator",children:[e.jsx("div",{className:"ams-progress-list-substeps__marker",children:e.jsx("span",{className:"ams-progress-list-substeps__marker-shape"})}),e.jsx("span",{className:"ams-progress-list-substeps__connector"})]}),e.jsx("div",{className:"ams-progress-list-substeps__content",children:n})]}));S.displayName="ProgressList.Substep";try{ProgressList.Substep.displayName="ProgressList.Substep",ProgressList.Substep.__docgenInfo={description:"",displayName:"ProgressList.Substep",props:{status:{defaultValue:null,description:"The current progress state of the substep.",name:"status",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"completed"'}]}}}}}catch{}const P=p.forwardRef(({children:n,className:d,...a},g)=>e.jsx("ol",{...a,className:h("ams-progress-list-substeps",d),ref:g,children:n}));P.displayName="ProgressList.Substeps";try{ProgressList.Substeps.displayName="ProgressList.Substeps",ProgressList.Substeps.__docgenInfo={description:"",displayName:"ProgressList.Substeps",props:{}}}catch{}const L=p.forwardRef(({children:n,className:d,headingLevel:a,...g},o)=>e.jsx(b.Provider,{value:{headingLevel:a},children:e.jsx("ol",{...g,className:h("ams-progress-list",`ams-progress-list--heading-${a}`,d),ref:o,children:n})})),r=Object.assign(L,{Step:j,Substep:S,Substeps:P});L.displayName="ProgressList";try{r.displayName="ProgressList",r.__docgenInfo={description:"",displayName:"ProgressList",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Progress List’s Headings within the document.
There is no default value; determine the correct level for this instance.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}const i=Array.from({length:6},()=>N()),z=I().slice(0,2).map(n=>e.jsx(t.Item,{children:n},n)),R={title:"Components/Containers/Progress List",component:r,args:{children:[e.jsx(r.Step,{heading:"2025",status:"completed",children:e.jsx(s,{children:i[0]})},0),e.jsxs(r.Step,{heading:"2026",status:"current",children:[e.jsx(s,{className:"ams-mb-m",children:i[1]}),e.jsx(t,{children:z})]},1),e.jsx(r.Step,{heading:"2027",children:e.jsx(s,{children:i[2]})},2)],headingLevel:3}},l={},u={args:{children:[e.jsxs(r.Step,{hasSubsteps:!0,heading:"2026",status:"current",children:[e.jsx(s,{children:i[0]}),e.jsxs(r.Substeps,{children:[e.jsx(r.Substep,{status:"completed",children:e.jsx(s,{children:i[1]})}),e.jsxs(r.Substep,{status:"current",children:[e.jsx(s,{className:"ams-mb-m",children:i[2]}),e.jsx(s,{children:i[3]})]}),e.jsx(r.Substep,{children:e.jsx(s,{children:i[4]})})]})]},1),e.jsx(r.Step,{heading:"2027",children:e.jsx(s,{children:i[5]})},2)]}},c={args:{children:[e.jsx(r.Step,{heading:"2020",status:"completed",children:e.jsx(t,{children:e.jsx(t.Item,{children:"Start participatie inrichting"})})},0),e.jsx(r.Step,{heading:"2021",status:"completed",children:e.jsxs(t,{children:[e.jsx(t.Item,{children:"Start herinrichting Nieuwezijds Voorburgwal Zuid"}),e.jsx(t.Item,{children:"Besluitvorming over ontwerp en geld Nieuwezijds Voorburgwal Noord"}),e.jsx(t.Item,{children:"Besluitvorming over ontwerpen en geld bruggen en straten"}),e.jsx(t.Item,{children:"Voorbereidend werk bruggen Raadhuisstraat – Mercatorplein (hulpbruggen en kabels en leidingen)"})]})},1),e.jsx(r.Step,{heading:"2022",status:"completed",children:e.jsxs(t,{children:[e.jsx(t.Item,{children:"Herinrichting Nieuwezijds Voorburgwal Zuid klaar"}),e.jsx(t.Item,{children:"Herinrichting Nieuwezijds Voorburgwal Noord begint"}),e.jsx(t.Item,{children:"Raadhuisstraat – Rozengracht: werk aan kabels en leidingen"}),e.jsx(t.Item,{children:"De Clercqstraat: start vernieuwing brug 108, Da Costagracht"}),e.jsx(t.Item,{children:"Bevestiging kunst en afbouw hulpbruggen"})]})},2),e.jsx(r.Step,{heading:"2023 – april 2024",status:"completed",children:e.jsxs(t,{children:[e.jsx(t.Item,{children:"Uitwerken aangepaste opgave door hoge inflatie en stijgende kosten. Ook blijkt uit nieuw onderzoek dat het vernieuwen van 7 bruggen niet nodig is. Deze bruggen gaan we herstellen"}),e.jsx(t.Item,{children:"Maken van nieuwe ontwerpen bruggen en straten"}),e.jsx(t.Item,{children:"Participatie over de inrichting van de servicestroken op de stoep"}),e.jsx(t.Item,{children:"December 2023: herinrichting Nieuwezijds Voorburgwal Noord klaar"}),e.jsx(t.Item,{children:"24 april 2024: gemeenteraad akkoord met aangepaste opgave"})]})},3),e.jsx(r.Step,{hasSubsteps:!0,heading:"Mei 2024 – 2028",status:"current",children:e.jsxs(r.Substeps,{children:[e.jsx(r.Substep,{status:"current",children:e.jsx(s,{children:"Mei 2024 – zomer 2025: herinrichting kruispunt Admiraal de Ruijterweg/Jan Evertsenstraat"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Mei 2024 – oktober 2025: herinrichting kruispunt Marnixstraat/ Rozengracht"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"September 2024 – februari 2025: aanbrengen verbeteringen de De Clercqstraat"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"September 2024 – eind 2025: herstellen brug 135 over de Bilderdijkgracht (met verwijderen hulpbrug)"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"September 2024 – zomer 2026: herstellen brug 167 over de Singelgracht"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Oktober 2024 – in 2028: vernieuwen brug over de Lijnbaansgracht en stukje Rozengracht"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Begin 2025 – voorjaar 2026: aanbrengen verbeteringen Jan Evertsenstraat"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Begin 2025 – eind 2025: herstellen brug over de Admiralengracht (met verwijderen hulpbrug)"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Februari 2025 – zomer 2026: herstellen bruggen over het Singel (brug 8), de Herengracht (brug 22), Keizersgracht (brug 106) en Prinsengracht (brug 63)"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Februari 2025 – najaar 2026: aanbrengen verbeteringen Raadhuisstraat"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Februari 2025 – voorjaar 2026: aanbrengen verbeteringen Rozengracht"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"Oktober 2025 – voorjaar 2027: herinrichting Westermarkt"})}),e.jsx(r.Substep,{children:e.jsx(s,{children:"In 2027: verwijderen hulpbruggen naast de bruggen over het Singel (brug 8), de Herengracht (brug 22), Keizersgracht (brug 106) en Prinsengracht (brug 63)"})})]})},4)]},decorators:[n=>e.jsx(m,{children:e.jsxs(m.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(k,{className:"ams-mb-s",level:2,children:"Wanneer"}),e.jsx(s,{className:"ams-mb-xl",children:"We verwachten het hele project in 2029 af te ronden."}),e.jsx(n,{})]})})]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step hasSubsteps heading="2026" key={1} status="current">
        <Paragraph>{paragraphs[0]}</Paragraph>
        <ProgressList.Substeps>
          <ProgressList.Substep status="completed">
            <Paragraph>{paragraphs[1]}</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="current">
            <Paragraph className="ams-mb-m">{paragraphs[2]}</Paragraph>
            <Paragraph>{paragraphs[3]}</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>{paragraphs[4]}</Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>, <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[5]}</Paragraph>
      </ProgressList.Step>]
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2020" key={0} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start participatie inrichting</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2021" key={1} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start herinrichting Nieuwezijds Voorburgwal Zuid</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerp en geld Nieuwezijds Voorburgwal Noord</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerpen en geld bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>
            Voorbereidend werk bruggen Raadhuisstraat – Mercatorplein (hulpbruggen en kabels en leidingen)
          </UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2022" key={2} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Zuid klaar</UnorderedList.Item>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Noord begint</UnorderedList.Item>
          <UnorderedList.Item>Raadhuisstraat – Rozengracht: werk aan kabels en leidingen</UnorderedList.Item>
          <UnorderedList.Item>De Clercqstraat: start vernieuwing brug 108, Da Costagracht</UnorderedList.Item>
          <UnorderedList.Item>Bevestiging kunst en afbouw hulpbruggen</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2023 – april 2024" key={3} status="completed">
        <UnorderedList>
          <UnorderedList.Item>
            Uitwerken aangepaste opgave door hoge inflatie en stijgende kosten. Ook blijkt uit nieuw onderzoek dat het
            vernieuwen van 7 bruggen niet nodig is. Deze bruggen gaan we herstellen
          </UnorderedList.Item>
          <UnorderedList.Item>Maken van nieuwe ontwerpen bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>Participatie over de inrichting van de servicestroken op de stoep</UnorderedList.Item>
          <UnorderedList.Item>December 2023: herinrichting Nieuwezijds Voorburgwal Noord klaar</UnorderedList.Item>
          <UnorderedList.Item>24 april 2024: gemeenteraad akkoord met aangepaste opgave</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step hasSubsteps heading="Mei 2024 – 2028" key={4} status="current">
        <ProgressList.Substeps>
          <ProgressList.Substep status="current">
            <Paragraph>
              Mei 2024 – zomer 2025: herinrichting kruispunt Admiraal de Ruijterweg/Jan Evertsenstraat
            </Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Mei 2024 – oktober 2025: herinrichting kruispunt Marnixstraat/ Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>September 2024 – februari 2025: aanbrengen verbeteringen de De Clercqstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>
              September 2024 – eind 2025: herstellen brug 135 over de Bilderdijkgracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>September 2024 – zomer 2026: herstellen brug 167 over de Singelgracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Oktober 2024 – in 2028: vernieuwen brug over de Lijnbaansgracht en stukje Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Begin 2025 – voorjaar 2026: aanbrengen verbeteringen Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>
              Begin 2025 – eind 2025: herstellen brug over de Admiralengracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>
              Februari 2025 – zomer 2026: herstellen bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Februari 2025 – najaar 2026: aanbrengen verbeteringen Raadhuisstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Februari 2025 – voorjaar 2026: aanbrengen verbeteringen Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Oktober 2025 – voorjaar 2027: herinrichting Westermarkt</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>
              In 2027: verwijderen hulpbruggen naast de bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>]
  },
  decorators: [Story => <Grid>
        <Grid.Cell span={{
      narrow: 4,
      medium: 6,
      wide: 7
    }} start={{
      narrow: 1,
      medium: 2,
      wide: 3
    }}>
          <Heading className="ams-mb-s" level={2}>
            Wanneer
          </Heading>
          <Paragraph className="ams-mb-xl">We verwachten het hele project in 2029 af te ronden.</Paragraph>
          <Story />
        </Grid.Cell>
      </Grid>]
}`,...c.parameters?.docs?.source}}};const V=["Default","WithSubsteps","ConstructionProject"],D=Object.freeze(Object.defineProperty({__proto__:null,ConstructionProject:c,Default:l,WithSubsteps:u,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{c as C,r as P,u as W,D as a,R as m};
