import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{n,t as r}from"./renderComponentVariants-B6bPZSY5.js";import{An as i,t as a}from"./src-CT6c9PnZ.js";import{n as o,t as s}from"./src-BJG9m3s4.js";import c,{n as l}from"./Icon.stories-BxXxK0i6.js";var u,d,f,p,m,h;e((()=>{s(),a(),r(),l(),u=t(),d={...c,title:`Components/Media/Icon`},f=Object.keys(o).sort((e,t)=>e.localeCompare(t)),p=f.filter(e=>o[e]({}).props[`data-directional`]===`true`),m={render:(e,t)=>(0,u.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,u.jsx)(`p`,{children:`Variants of Icon component`}),n(i,{args:e},t),(0,u.jsx)(`p`,{children:`All icons`}),(0,u.jsx)(`div`,{className:`_ams-tests-grid`,children:f.map(e=>(0,u.jsx)(i,{size:`heading-2`,svg:o[e]},e))}),(0,u.jsx)(`p`,{children:`Directional icons in RTL`}),(0,u.jsx)(`div`,{className:`_ams-tests-grid`,dir:`rtl`,children:p.map(e=>(0,u.jsx)(i,{size:`heading-2`,svg:o[e]},e))})]}),tags:[`!dev`,`!autodocs`]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args, context) => <div className="_ams-tests-stack">
      <p>Variants of Icon component</p>
      {renderComponentVariants(Icon, {
      args
    }, context)}
      <p>All icons</p>
      <div className="_ams-tests-grid">
        {iconNames.map(name => <Icon key={name} size="heading-2" svg={Icons[name]} />)}
      </div>
      <p>Directional icons in RTL</p>
      <div className="_ams-tests-grid" dir="rtl">
        {directionalIconNames.map(name => <Icon key={name} size="heading-2" svg={Icons[name]} />)}
      </div>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...m.parameters?.docs?.source}}},h=[`Test`]}))();export{m as Test,h as __namedExportsOrder,d as default};