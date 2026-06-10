import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-B0hLoJaV.js";import{B as n,H as r,V as i,t as a,z as o}from"./src-VMDJOoIy.js";import s,{n as c}from"./LinkList.stories-CtC9ucmI.js";var l,u,d,f,p;e((()=>{a(),n(),c(),l=t(),u={...s,title:`Components/Navigation/Link List`},d=[`Link 1`,`Link 2`,`Link 3`],f={render:e=>(0,l.jsx)(`div`,{className:`_ams-tests-stack`,children:[void 0,...r].map(t=>[void 0,...i].map(n=>(0,l.jsx)(o,{style:n===`inverse`?{backgroundColor:`var(--ams-color-highlight-azure)`}:void 0,...e,children:d.map(e=>(0,l.jsx)(o.Link,{className:d.indexOf(e)===d.length-1?`hover`:void 0,color:n,href:`#`,size:t,children:e},e))},n)))}),tags:[`!dev`,`!autodocs`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="_ams-tests-stack">
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
}`,...f.parameters?.docs?.source}}},p=[`Test`]}))();export{f as Test,p as __namedExportsOrder,u as default};