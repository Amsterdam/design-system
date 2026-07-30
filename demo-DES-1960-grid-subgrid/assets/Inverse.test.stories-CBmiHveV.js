import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{F as n,G as r,U as i}from"./index.esm-AHCPMkhr.js";import{C as a,Gn as o,J as s,Jn as c,T as l,Tn as u,ht as d,n as f,nt as p,t as m,un as h,w as g,x as _}from"./src-rnIWbVX3.js";import{n as v,t as y}from"./loFiMeta-D7BuTyKp.js";var b,x,S,C;e((()=>{r(),m(),g(),y(),b=t(),x={...v,title:`Modes/Lo-fi/Inverse`},S={render:()=>(0,b.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,b.jsx)(a,{children:(0,b.jsxs)(`div`,{className:`_ams-tests-stack`,style:{padding:`var(--ams-space-xl)`},children:[(0,b.jsx)(c,{color:`inverse`,level:2,children:`Zuidoost viert 750 jaar Amsterdam`}),(0,b.jsx)(h,{color:`inverse`,children:`Vraag subsidie aan voor uw initiatief. Aanvragen kan tot en met 1 oktober.`}),(0,b.jsxs)(f,{color:`inverse`,children:[(0,b.jsx)(f.Item,{children:`Voor bewoners en ondernemers.`}),(0,b.jsx)(f.Item,{children:`Maximaal 5.000 euro per initiatief.`})]}),(0,b.jsx)(u,{color:`inverse`,children:`De buurt is van iedereen die er woont, werkt en langskomt.`}),(0,b.jsx)(o,{color:`inverse`,size:`heading-2`,svg:i}),(0,b.jsx)(d,{children:(0,b.jsx)(d.Link,{color:`inverse`,href:`#`,children:`Bekijk de voorwaarden`})}),(0,b.jsx)(_,{color:`inverse`,href:`#`,children:`Vraag subsidie aan`})]})}),(0,b.jsx)(`div`,{className:`_ams-tests-grid`,children:l.map(e=>(0,b.jsx)(a,{color:e,children:(0,b.jsx)(`div`,{style:{padding:`var(--ams-space-m)`},children:(0,b.jsx)(h,{color:`inverse`,children:e})})},e))}),(0,b.jsxs)(s,{children:[(0,b.jsx)(s.Spotlight,{children:(0,b.jsx)(h,{color:`inverse`,children:`Adressen en openingstijden`})}),(0,b.jsxs)(s.Menu,{children:[(0,b.jsx)(s.MenuLink,{href:`#`,children:`Over deze site`}),(0,b.jsx)(s.MenuLink,{href:`#`,children:`Privacy`}),(0,b.jsx)(s.MenuLink,{href:`#`,children:`Cookies op deze site`})]})]}),(0,b.jsxs)(p,{inWideWindow:!0,children:[(0,b.jsx)(p.Link,{href:`#`,icon:n,children:`Dashboard`}),(0,b.jsx)(p.Link,{href:`#`,icon:n,children:`Projecten`}),(0,b.jsx)(p.Link,{className:`hover`,href:`#`,icon:n,children:`Rapportages`})]})]}),tags:[`!dev`,`!autodocs`]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs']
}`,...S.parameters?.docs?.source},description:{story:`Lo-fi turns every inverse surface pale, so \`color="inverse"\` — white text meant for a dark
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
goes dark.`,...S.parameters?.docs?.description}}},C=[`Test`]}))();export{S as Test,C as __namedExportsOrder,x as default};