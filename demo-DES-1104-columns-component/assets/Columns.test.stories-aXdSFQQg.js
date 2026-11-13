import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{a as r,c as i,l as a,o,s}from"./Columns.stories-CG85UA-h.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{a(),r(),c=n(),l=t(),u={...o,title:`Components/Layout/Columns`},d=(0,c.jsx)(`ul`,{children:[`Afval`,`Bestuur en organisatie`,`Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en ruimte voor scheidsrechters en EHBO`,`Burgerzaken`,`Leefomgeving`,`Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine`,`Ondernemen`,`Parkeren`,`Wonen, bouwen en verbouwen`].map(e=>(0,c.jsx)(`li`,{children:e},e))}),f={render:e=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,c.jsx)(s,{...e,children:d}),i.map(t=>(0,l.createElement)(s,{...e,count:t,key:t},d)),(0,c.jsx)(s,{...e,count:{narrow:1,medium:2,wide:3},children:d})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},p=[`Test`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  /*
   * Built by hand, because a generated matrix cannot produce the object form of \`count\`.
   * Chromatic snapshots a wide window: a number writes a \`-medium\` class, so the object shows the \`-wide\` one.
   */
  render: args => <div className="_ams-tests-stack">
      <Columns {...args}>{list}</Columns>
      {columnsCounts.map(count => <Columns {...args} count={count} key={count}>
          {list}
        </Columns>)}
      <Columns {...args} count={{
      narrow: 1,
      medium: 2,
      wide: 3
    }}>
        {list}
      </Columns>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Test,p as __namedExportsOrder,u as default};