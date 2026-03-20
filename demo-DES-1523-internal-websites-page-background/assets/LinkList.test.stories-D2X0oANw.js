import{j as o}from"./iframe-Xd7uzhxY.js";import{l,a as d,L as n}from"./LinkList-C2MIAZmZ.js";import{m}from"./LinkList.stories-CDUpNLyI.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DzB_OTi7.js";import"./exampleContent-D2tKGi5u.js";const f={...m,title:"Components/Navigation/Link List"},r=["Link 1","Link 2","Link 3"],i={render:t=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ams-space-s)"},children:[void 0,...l].map(a=>[void 0,...d].map(e=>o.jsx(n,{style:e==="inverse"?{backgroundColor:"var(--ams-color-highlight-azure)"}:void 0,...t,children:r.map(s=>o.jsx(n.Link,{className:r.indexOf(s)===r.length-1?"hover":void 0,color:e,href:"#",size:a,children:s},s))},e)))}),tags:["!dev","!autodocs"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ams-space-s)'
  }}>
      {[undefined, ...linkListLinkSizes].map(size => {
      return [undefined, ...linkListLinkColors].map(color => {
        return <LinkList key={color} style={color === 'inverse' ? {
          backgroundColor: 'var(--ams-color-highlight-azure)'
        } : undefined} {...args}>
              {options.map(option => <LinkList.Link className={options.indexOf(option) === options.length - 1 ? 'hover' : undefined} color={color} href="#" key={option} size={size}>
                  {option}
                </LinkList.Link>)}
            </LinkList>;
      });
    })}
    </div>,
  tags: ['!dev', '!autodocs']
}`,...i.parameters?.docs?.source}}};const g=["Test"];export{i as Test,g as __namedExportsOrder,f as default};
