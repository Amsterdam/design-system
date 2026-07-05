import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{m as n,t as r}from"./src-BBykPVYj.js";import i,{n as a}from"./TableOfContents.stories--jqf8aAN.js";var o,s,c,l,u;e((()=>{r(),a(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={...i,title:`Components/Navigation/Table of Contents`},l={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/Salaristoelagen/}),r=e.getByRole(`link`,{name:`Functioneringstoelage`});await s(r).not.toBeVisible(),await t.click(n),await s(r).toBeVisible()},render:()=>(0,o.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,o.jsx)(n,{heading:`Op deze pagina`,children:(0,o.jsxs)(n.List,{children:[(0,o.jsx)(n.Link,{href:`#section-1`,label:`Zo werkt het`}),(0,o.jsx)(n.Link,{href:`#section-2`,label:`Voorwaarden`}),(0,o.jsx)(n.Link,{"aria-current":`page`,href:`#section-3`,label:`Aanvragen`}),(0,o.jsx)(n.Link,{href:`#section-4`,label:`Zie ook`})]})}),(0,o.jsx)(n,{collapsible:!0,heading:`Inhoudsopgave`,children:(0,o.jsxs)(n.List,{children:[(0,o.jsx)(n.Link,{href:`#s1`,label:`Inleiding`}),(0,o.jsx)(n.Link,{defaultExpanded:!0,href:`#s2`,label:`Vaststellen en waarderen van functies`,children:(0,o.jsxs)(n.List,{children:[(0,o.jsx)(n.Link,{href:`#s2-1`,label:`Algemeen`}),(0,o.jsx)(n.Link,{defaultExpanded:!0,href:`#s2-2`,label:`Waardering van functies`,children:(0,o.jsxs)(n.List,{children:[(0,o.jsx)(n.Link,{"aria-current":`page`,href:`#s2-2-1`,label:`Methode`}),(0,o.jsx)(n.Link,{href:`#s2-2-2`,label:`Procedure`})]})}),(0,o.jsx)(n.Link,{href:`#s2-3`,label:`Herwaardering`,children:(0,o.jsx)(n.List,{children:(0,o.jsx)(n.Link,{href:`#s2-3-1`,label:`Aanleiding`})})})]})}),(0,o.jsx)(n.Link,{href:`#s3`,label:`Salaristoelagen`,children:(0,o.jsx)(n.List,{children:(0,o.jsx)(n.Link,{href:`#s3-1`,label:`Functioneringstoelage`})})})]})})]}),tags:[`!dev`,`!autodocs`]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const toggle = canvas.getByRole('button', {
      name: /Salaristoelagen/
    });
    const nestedLink = canvas.getByRole('link', {
      name: 'Functioneringstoelage'
    });

    // The nested list is hidden with \`display: none\` until its toggle is clicked, so this asserts the
    // real CSS show/hide contract that the class-name-only unit tests cannot reach.
    await expect(nestedLink).not.toBeVisible();
    await userEvent.click(toggle);
    await expect(nestedLink).toBeVisible();
  },
  render: () => <div className="_ams-tests-stack">
      <TableOfContents heading="Op deze pagina">
        <TableOfContents.List>
          <TableOfContents.Link href="#section-1" label="Zo werkt het" />
          <TableOfContents.Link href="#section-2" label="Voorwaarden" />
          <TableOfContents.Link aria-current="page" href="#section-3" label="Aanvragen" />
          <TableOfContents.Link href="#section-4" label="Zie ook" />
        </TableOfContents.List>
      </TableOfContents>
      <TableOfContents collapsible heading="Inhoudsopgave">
        <TableOfContents.List>
          <TableOfContents.Link href="#s1" label="Inleiding" />
          <TableOfContents.Link defaultExpanded href="#s2" label="Vaststellen en waarderen van functies">
            <TableOfContents.List>
              <TableOfContents.Link href="#s2-1" label="Algemeen" />
              <TableOfContents.Link defaultExpanded href="#s2-2" label="Waardering van functies">
                <TableOfContents.List>
                  <TableOfContents.Link aria-current="page" href="#s2-2-1" label="Methode" />
                  <TableOfContents.Link href="#s2-2-2" label="Procedure" />
                </TableOfContents.List>
              </TableOfContents.Link>
              <TableOfContents.Link href="#s2-3" label="Herwaardering">
                <TableOfContents.List>
                  <TableOfContents.Link href="#s2-3-1" label="Aanleiding" />
                </TableOfContents.List>
              </TableOfContents.Link>
            </TableOfContents.List>
          </TableOfContents.Link>
          <TableOfContents.Link href="#s3" label="Salaristoelagen">
            <TableOfContents.List>
              <TableOfContents.Link href="#s3-1" label="Functioneringstoelage" />
            </TableOfContents.List>
          </TableOfContents.Link>
        </TableOfContents.List>
      </TableOfContents>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...l.parameters?.docs?.source}}},u=[`Test`]}))();export{l as Test,u as __namedExportsOrder,c as default};