import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-GmyBfqKJ.js";import{F as r,J as i,W as a,x as o}from"./index.esm-BnpK1b4i.js";import{o as s,t as c}from"./src-DQ2K8n2Q.js";import{l,m as u,t as d}from"./exampleContent-up3wPRrW.js";var f=t({Default:()=>v,PreventTabsFromChanging:()=>S,WithInitialTab:()=>y,WithWideContent:()=>b,__namedExportsOrder:()=>C,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{i(),c(),u(),p=n(),m=1e3,h=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${m}ms delay…`);let t=performance.now();for(;performance.now()-t<m;);return e},g=[{body:l(),label:`Gegevens`},{body:l(),label:`Aanslagen`},{body:(0,p.jsxs)(p.Fragment,{children:[`(This tab panel simulates a load time of `,m,` milliseconds.)`,(0,p.jsx)(h,{})]}),label:`Documenten`},{body:l(),label:`Acties`}],_={title:`Components/Containers/Tabs`,component:s,args:{children:[(0,p.jsx)(s.List,{children:g.map(({label:e})=>(0,p.jsx)(s.Button,{"aria-controls":e,children:e},e))},`tabsList`),g.map(({body:e,label:t})=>(0,p.jsxs)(s.Panel,{id:t,children:[(0,p.jsx)(o,{className:`ams-mb-xs`,level:3,children:t}),(0,p.jsx)(r,{children:e})]},t))]},argTypes:{onTabChange:{action:`clicked`,description:`Provides the id of the activated tab.`}}},v={},y={args:{activeTab:`Acties`}},b={args:{children:[(0,p.jsx)(s.List,{children:d.map(e=>(0,p.jsx)(s.Button,{"aria-controls":e,children:e},e))},`tabsList`),d.map(e=>(0,p.jsx)(s.Panel,{id:e,children:(0,p.jsxs)(a,{children:[(0,p.jsx)(a.Caption,{children:(0,p.jsxs)(o,{level:3,children:[`Voorbeeld van een tabel voor `,e===`Weesp`?`stadsgebied`:`stadsdeel`,` `,e]})}),(0,p.jsx)(a.Header,{children:(0,p.jsxs)(a.Row,{children:[(0,p.jsx)(a.HeaderCell,{}),Array.from({length:12},(e,t)=>(0,p.jsx)(a.HeaderCell,{children:`Kolom`},`headercell-${t}`))]})}),(0,p.jsx)(a.Body,{children:Array.from({length:3},(e,t)=>(0,p.jsxs)(a.Row,{children:[(0,p.jsx)(a.HeaderCell,{scope:`row`,children:`Rij`}),Array.from({length:12},(e,n)=>(0,p.jsxs)(a.Cell,{style:{textAlign:`end`},children:[(t+1)*(n+1),`.000`]},n))]},t))})]})},e))]}},x=g.filter(({label:e})=>e!==`Documenten`),S={args:{children:[(0,p.jsx)(s.List,{children:x.map(({label:e})=>(0,p.jsx)(s.Button,{"aria-controls":e,onClick:e=>{window.confirm(`You have unsaved changes. Do you want to leave?`)||e.preventDefault()},children:e},e))},`tabsList`),x.map(({body:e,label:t})=>(0,p.jsxs)(s.Panel,{id:t,children:[(0,p.jsx)(o,{className:`ams-mb-xs`,level:3,children:t}),(0,p.jsx)(r,{children:e})]},t))]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map(name => <Tabs.Button aria-controls={name} key={name}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map(name => <Tabs.Panel id={name} key={name}>
          <Table>
            <Table.Caption>
              <Heading level={3}>
                Voorbeeld van een tabel voor {name === 'Weesp' ? 'stadsgebied' : 'stadsdeel'} {name}
              </Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                {Array.from({
              length: 12
            }, (_, index) => <Table.HeaderCell key={\`headercell-\${index}\`}>Kolom</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({
            length: 3
          }, (_, rowIndex) => <Table.Row key={rowIndex}>
                  <Table.HeaderCell scope="row">Rij</Table.HeaderCell>
                  {Array.from({
              length: 12
            }, (_, columnIndex) => <Table.Cell key={columnIndex} style={{
              textAlign: 'end'
            }}>
                      {(rowIndex + 1) * (columnIndex + 1)}.000
                    </Table.Cell>)}
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Tabs.Panel>)]
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {tabsContentWithoutSlowPanel.map(({
        label
      }) => <Tabs.Button aria-controls={label} key={label} onClick={e => {
        // eslint-disable-next-line no-alert
        const confirmLeave = window.confirm('You have unsaved changes. Do you want to leave?');
        if (!confirmLeave) {
          e.preventDefault();
        }
      }}>
            {label}
          </Tabs.Button>)}
      </Tabs.List>, tabsContentWithoutSlowPanel.map(({
      body,
      label
    }) => <Tabs.Panel id={label} key={label}>
          <Heading className="ams-mb-xs" level={3}>
            {label}
          </Heading>
          <Paragraph>{body}</Paragraph>
        </Tabs.Panel>)]
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithInitialTab`,`WithWideContent`,`PreventTabsFromChanging`]}));w();export{v as Default,S as PreventTabsFromChanging,y as WithInitialTab,b as WithWideContent,C as __namedExportsOrder,_ as default,w as n,f as t};