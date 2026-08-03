import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{F as n,G as r,U as i}from"./index.esm-BKoBEYTi.js";import{r as a,t as o}from"./Heading-Dhdo5JrR.js";import{r as s,t as c}from"./Icon-GDLD-xRo.js";import{n as l,t as u}from"./Blockquote-CFmC7465.js";import{n as d,t as f}from"./Paragraph-B8PurMkA.js";import{n as p,t as m}from"./LinkList-DZG8a4Qv.js";import{n as h,t as g}from"./Menu-v4D_2jLa.js";import{n as _,t as v}from"./PageFooter-HRu71iSQ.js";import{n as y,r as b,t as x}from"./Spotlight-BtDY9j40.js";import{n as S,t as C}from"./StandaloneLink-Bkf4H6TI.js";import{n as w,t as T}from"./UnorderedList-BKEVnFLo.js";import{n as E,t as D}from"./loFiMeta-DTKUndwq.js";var O,k,A,j;function M(){return(M=e((()=>{r(),l(),a(),s(),p(),h(),_(),d(),y(),S(),w(),D(),O=t(),k={...E,title:`Modes/Lo-fi/Inverse`},A={render:()=>(0,O.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,O.jsx)(x,{children:(0,O.jsxs)(`div`,{className:`_ams-tests-stack`,style:{padding:`var(--ams-space-xl)`},children:[(0,O.jsx)(o,{color:`inverse`,level:2,children:`Zuidoost viert 750 jaar Amsterdam`}),(0,O.jsx)(f,{color:`inverse`,children:`Vraag subsidie aan voor uw initiatief. Aanvragen kan tot en met 1 oktober.`}),(0,O.jsxs)(T,{color:`inverse`,children:[(0,O.jsx)(T.Item,{children:`Voor bewoners en ondernemers.`}),(0,O.jsx)(T.Item,{children:`Maximaal 5.000 euro per initiatief.`})]}),(0,O.jsx)(u,{color:`inverse`,children:`De buurt is van iedereen die er woont, werkt en langskomt.`}),(0,O.jsx)(c,{color:`inverse`,size:`heading-2`,svg:i}),(0,O.jsx)(m,{children:(0,O.jsx)(m.Link,{color:`inverse`,href:`#`,children:`Bekijk de voorwaarden`})}),(0,O.jsx)(C,{color:`inverse`,href:`#`,children:`Vraag subsidie aan`})]})}),(0,O.jsx)(`div`,{className:`_ams-tests-grid`,children:b.map(e=>(0,O.jsx)(x,{color:e,children:(0,O.jsx)(`div`,{style:{padding:`var(--ams-space-m)`},children:(0,O.jsx)(f,{color:`inverse`,children:e})})},e))}),(0,O.jsxs)(v,{children:[(0,O.jsx)(v.Spotlight,{children:(0,O.jsx)(f,{color:`inverse`,children:`Adressen en openingstijden`})}),(0,O.jsxs)(v.Menu,{children:[(0,O.jsx)(v.MenuLink,{href:`#`,children:`Over deze site`}),(0,O.jsx)(v.MenuLink,{href:`#`,children:`Privacy`}),(0,O.jsx)(v.MenuLink,{href:`#`,children:`Cookies op deze site`})]})]}),(0,O.jsxs)(g,{inWideWindow:!0,children:[(0,O.jsx)(g.Link,{href:`#`,icon:n,children:`Dashboard`}),(0,O.jsx)(g.Link,{href:`#`,icon:n,children:`Projecten`}),(0,O.jsx)(g.Link,{className:`hover`,href:`#`,icon:n,children:`Rapportages`})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="_ams-tests-stack">
      <Spotlight>
        <div className="_ams-tests-stack" style={{
        padding: 'var(--ams-space-xl)'
      }}>
          <Heading color="inverse" level={2}>
            Zuidoost viert 750 jaar Amsterdam
          </Heading>
          <Paragraph color="inverse">
            Vraag subsidie aan voor uw initiatief. Aanvragen kan tot en met 1 oktober.
          </Paragraph>
          <UnorderedList color="inverse">
            <UnorderedList.Item>Voor bewoners en ondernemers.</UnorderedList.Item>
            <UnorderedList.Item>Maximaal 5.000 euro per initiatief.</UnorderedList.Item>
          </UnorderedList>
          <Blockquote color="inverse">De buurt is van iedereen die er woont, werkt en langskomt.</Blockquote>
          <Icon color="inverse" size="heading-2" svg={WarningFillIcon} />
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Bekijk de voorwaarden
            </LinkList.Link>
          </LinkList>
          <StandaloneLink color="inverse" href="#">
            Vraag subsidie aan
          </StandaloneLink>
        </div>
      </Spotlight>

      <div className="_ams-tests-grid">
        {spotlightColors.map(color => <Spotlight color={color} key={color}>
            <div style={{
          padding: 'var(--ams-space-m)'
        }}>
              <Paragraph color="inverse">{color}</Paragraph>
            </div>
          </Spotlight>)}
      </div>

      <PageFooter>
        <PageFooter.Spotlight>
          <Paragraph color="inverse">Adressen en openingstijden</Paragraph>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>

      {/* \`inWideWindow\` is required: a bare Menu is \`display: none\` outside a Page Header’s nav. */}
      <Menu inWideWindow>
        <Menu.Link href="#" icon={PieChartFillIcon}>
          Dashboard
        </Menu.Link>
        <Menu.Link href="#" icon={PieChartFillIcon}>
          Projecten
        </Menu.Link>
        <Menu.Link className="hover" href="#" icon={PieChartFillIcon}>
          Rapportages
        </Menu.Link>
      </Menu>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...A.parameters?.docs?.source},description:{story:`Lo-fi turns every inverse surface pale, so \`color="inverse"\` — white text meant for a dark
background — is flipped to near-black across eight component token sets at once. Each of those
sets is overridden separately, so one that is missed keeps painting white on pale grey and
disappears. Every inverse-capable text component sits on the first Spotlight for that reason.

The colour row below it is deliberately content-free: \`ams.color.highlight.*\` collapses onto one
grey, so all six Spotlights must look identical. Repeating the full inventory in each colour would
have made the sheet four times taller for the same single bit of information.

The Menu is the counter-example and the reason this sheet is not Spotlight-only. It keeps a dark
background in Lo-fi while consuming the same inverse link tokens, so the blanket flip would have
given it near-black on near-black; \`menu.lo-fi.tokens.json\` re-whitens its links. The Menu below is
the regression test for that exception — its labels must stay readable while everything above them
goes dark.`,...A.parameters?.docs?.description}}},j=[`Test`]})))()}M();export{A as Test,j as __namedExportsOrder,k as default};