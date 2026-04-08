import{n as e}from"./chunk-zsgVPwQN.js";import{Lt as t}from"./iframe-BtpTZUY5.js";import{B as n,R as r,V as i,t as a,z as o}from"./src-KQNitiF4.js";import s,{n as c}from"./LinkList.stories-D6PDw22M.js";var l,u,d,f,p;e((()=>{a(),o(),c(),l=t(),u={...s,title:`Components/Navigation/Link List`},d=[`Link 1`,`Link 2`,`Link 3`],f={render:e=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--ams-space-s)`},children:[void 0,...i].map(t=>[void 0,...n].map(n=>(0,l.jsx)(r,{style:n===`inverse`?{backgroundColor:`var(--ams-color-highlight-azure)`}:void 0,...e,children:d.map(e=>(0,l.jsx)(r.Link,{className:d.indexOf(e)===d.length-1?`hover`:void 0,color:n,href:`#`,size:t,children:e},e))},n)))}),tags:[`!dev`,`!autodocs`]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Test`]}))();export{f as Test,p as __namedExportsOrder,u as default};