import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Lt as r,Pt as i,at as a,bn as o,bt as s,tt as c,vt as l}from"./iframe-5SBc8JlN.js";import{s as u,t as d}from"./src-B8xZJWmt.js";import{m as f,t as p}from"./exampleContent-BwA2seBs.js";var m=n({Default:()=>b,Vertical:()=>x,WithIcons:()=>C,WithManyLinks:()=>w,__namedExportsOrder:()=>T,default:()=>v});function h(e,t){let[n,r]=(0,g.useState)(t??e[0]);return{current:n,handleClick:(e,t)=>{e.preventDefault(),r(t)}}}var g,_,v,y,b,x,S,C,w,T,E=e((()=>{i(),d(),g=t(o()),f(),_=r(),v={title:`Components/Navigation/Tab Navigation`,component:u,argTypes:{orientation:{control:{type:`inline-radio`},options:[`horizontal`,`vertical`]}},decorators:[(e,t)=>(0,_.jsx)(`div`,{style:{maxWidth:t.args.orientation===`vertical`?`16rem`:void 0},children:e()})]},y=[`Gegevens`,`Aanslagen`,`Documenten`,`Acties`],b={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(y);return(0,_.jsx)(u,{...e,children:(0,_.jsx)(u.List,{children:y.map(e=>(0,_.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},x={args:{orientation:`vertical`},parameters:{docs:{source:{code:`<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(y);return(0,_.jsx)(u,{...e,children:(0,_.jsx)(u.List,{children:y.map(e=>(0,_.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},S=[{icon:s,label:`Gegevens`},{icon:a,label:`Aanslagen`},{icon:c,label:`Documenten`},{icon:l,label:`Acties`}],C={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(S.map(({label:e})=>e));return(0,_.jsx)(u,{...e,children:(0,_.jsx)(u.List,{children:S.map(({icon:e,label:r})=>(0,_.jsx)(u.Link,{"aria-current":t===r?`page`:void 0,href:`#${r.toLowerCase()}`,icon:e,onClick:e=>n(e,r),children:r},r))})})}},w={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/centrum">Centrum</TabNavigation.Link>
    <TabNavigation.Link href="/westpoort">Westpoort</TabNavigation.Link>
    <TabNavigation.Link href="/west">West</TabNavigation.Link>
    {/* … */}
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(p);return(0,_.jsx)(u,{...e,children:(0,_.jsx)(u.List,{children:p.map(e=>(0,_.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>\`,
        language: 'tsx'
      }
    }
  },
  render: args => {
    const {
      current,
      handleClick
    } = useTabNavigation(labels);
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {labels.map(label => <TabNavigation.Link aria-current={current === label ? 'page' : undefined} href={\`#\${label.toLowerCase()}\`} key={label} onClick={e => handleClick(e, label)}>
              {label}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      source: {
        code: \`<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>\`,
        language: 'tsx'
      }
    }
  },
  render: args => {
    const {
      current,
      handleClick
    } = useTabNavigation(labels);
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {labels.map(label => <TabNavigation.Link aria-current={current === label ? 'page' : undefined} href={\`#\${label.toLowerCase()}\`} key={label} onClick={e => handleClick(e, label)}>
              {label}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>\`,
        language: 'tsx'
      }
    }
  },
  render: args => {
    const {
      current,
      handleClick
    } = useTabNavigation(labelsWithIcons.map(({
      label
    }) => label));
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {labelsWithIcons.map(({
          icon,
          label
        }) => <TabNavigation.Link aria-current={current === label ? 'page' : undefined} href={\`#\${label.toLowerCase()}\`} icon={icon} key={label} onClick={e => handleClick(e, label)}>
              {label}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/centrum">Centrum</TabNavigation.Link>
    <TabNavigation.Link href="/westpoort">Westpoort</TabNavigation.Link>
    <TabNavigation.Link href="/west">West</TabNavigation.Link>
    {/* … */}
  </TabNavigation.List>
</TabNavigation>\`,
        language: 'tsx'
      }
    }
  },
  render: args => {
    const {
      current,
      handleClick
    } = useTabNavigation(cityParts);
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {cityParts.map(name => <TabNavigation.Link aria-current={current === name ? 'page' : undefined} href={\`#\${name.toLowerCase()}\`} key={name} onClick={e => handleClick(e, name)}>
              {name}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Vertical`,`WithIcons`,`WithManyLinks`]}));E();export{b as Default,x as Vertical,C as WithIcons,w as WithManyLinks,T as __namedExportsOrder,v as default,E as n,m as t};