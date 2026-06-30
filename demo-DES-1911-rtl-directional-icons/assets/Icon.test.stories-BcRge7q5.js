import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{n,t as r}from"./renderComponentVariants-CKomsdHg.js";import{An as i,t as a}from"./src-BuXbq3ju.js";import{n as o,t as s}from"./src-BJG9m3s4.js";import c,{n as l}from"./Icon.stories-xNDMu9G3.js";var u,d,f,p,m;e((()=>{s(),a(),r(),l(),u=t(),d={...c,title:`Components/Media/Icon`},f=Object.keys(o).sort((e,t)=>e.localeCompare(t)),p={render:(e,t)=>(0,u.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,u.jsx)(`p`,{children:`Variants of Icon component`}),n(i,{args:e},t),(0,u.jsx)(`p`,{children:`All icons`}),(0,u.jsx)(`div`,{className:`_ams-tests-grid`,children:f.map(e=>(0,u.jsx)(i,{size:`heading-2`,svg:o[e]},e))}),(0,u.jsx)(`p`,{children:`All icons in RTL`}),(0,u.jsx)(`div`,{className:`_ams-tests-grid`,dir:`rtl`,children:f.map(e=>(0,u.jsx)(i,{size:`heading-2`,svg:o[e]},e))})]}),tags:[`!dev`,`!autodocs`]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args, context) => <div className="_ams-tests-stack">
      <p>Variants of Icon component</p>
      {renderComponentVariants(Icon, {
      args
    }, context)}
      <p>All icons</p>
      <div className="_ams-tests-grid">
        {iconNames.map(name => <Icon key={name} size="heading-2" svg={Icons[name]} />)}
      </div>
      <p>All icons in RTL</p>
      <div className="_ams-tests-grid" dir="rtl">
        {iconNames.map(name => <Icon key={name} size="heading-2" svg={Icons[name]} />)}
      </div>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...p.parameters?.docs?.source}}},m=[`Test`]}))();export{p as Test,m as __namedExportsOrder,d as default};