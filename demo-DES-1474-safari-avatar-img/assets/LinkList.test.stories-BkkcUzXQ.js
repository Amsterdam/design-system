import{j as o}from"./iframe-DUoUjqpV.js";import{l,a as m,L as n}from"./LinkList-BfjeYBlH.js";import{m as p}from"./LinkList.stories-DgS8AIO-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BziGIqlJ.js";import"./exampleContent-DRope23M.js";const v={...p,title:"Components/Navigation/Link List"},r=["Link 1","Link 2","Link 3"],i={render:t=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ams-space-s)"},children:l.map(a=>m.map(s=>o.jsx(n,{style:s==="inverse"?{backgroundColor:"var(--ams-color-highlight-azure)"}:void 0,...t,children:r.map(e=>o.jsx(n.Link,{className:r.indexOf(e)===r.length-1?"hover":void 0,color:s,href:"#",size:a,children:e},e))},s)))}),tags:["!dev","!autodocs"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ams-space-s)'
  }}>
      {linkListLinkSizes.map(size => {
      return linkListLinkColors.map(color => {
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
}`,...i.parameters?.docs?.source}}};const h=["Test"];export{i as Test,h as __namedExportsOrder,v as default};
