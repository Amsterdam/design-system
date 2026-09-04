import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,i as r,n as i,r as a,t as o}from"./LinkList-CGW_BbeA.js";import{o as s,s as c}from"./LinkList.stories-B6T9hGxb.js";var l,u,d,f,p;function m(){return(m=e((()=>{i(),a(),s(),l=t(),u={...c,title:`Components/Navigation/Link List`},d=[`Link 1`,`Link 2`,`Link 3`],f={render:e=>(0,l.jsx)(`div`,{className:`_ams-tests-stack`,children:[void 0,...n].map(t=>[void 0,...r].map(n=>(0,l.jsx)(o,{style:n===`inverse`?{backgroundColor:`var(--ams-color-highlight-azure)`}:void 0,...e,children:d.map(e=>(0,l.jsx)(o.Link,{className:d.indexOf(e)===d.length-1?`hover`:void 0,color:n,href:`#`,size:t,children:e},e))},n)))}),tags:[`!dev`,`!autodocs`,`!manifest`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p=[`Test`]})))()}m();export{f as Test,p as __namedExportsOrder,u as default};