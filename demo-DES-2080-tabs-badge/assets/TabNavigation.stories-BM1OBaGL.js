import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{M as i,f as a,j as o,q as s,v as c}from"./index.esm-BFt5QAke.js";import{r as l,t as u}from"./Badge-BxEWgWPO.js";import{n as d,t as f}from"./TabNavigation-FUKTLDTq.js";var p=t({Badges:()=>E,Default:()=>y,Vertical:()=>b,WithIcons:()=>S,WithManyLinks:()=>w,__namedExportsOrder:()=>D,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{s(),l(),d(),m=n(),h=r(),g=(e,t)=>{let[n,r]=(0,m.useState)(t??e[0]);return{current:n,handleClick:(e,t)=>{e.preventDefault(),r(t)}}},_={title:`Components/Navigation/Tab Navigation`,component:f,argTypes:{orientation:{control:{labels:{undefined:`horizontal (default)`},type:`inline-radio`},options:[void 0,`vertical`]}},subcomponents:{"TabNavigation.Link":f.Link}},v=[`Gegevens`,`Aanslagen`,`Documenten`,`Acties`],y={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=g(v);return(0,h.jsx)(f,{...e,children:(0,h.jsx)(f.List,{children:v.map(e=>(0,h.jsx)(f.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},b={args:{orientation:`vertical`},parameters:{docs:{source:{code:`<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=g(v);return(0,h.jsx)(f,{...e,children:(0,h.jsx)(f.List,{children:v.map(e=>(0,h.jsx)(f.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},x=[{icon:i,label:`Gegevens`},{icon:c,label:`Aanslagen`},{icon:a,label:`Documenten`},{icon:o,label:`Acties`}],S={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=g(x.map(({label:e})=>e));return(0,h.jsx)(f,{...e,children:(0,h.jsx)(f.List,{children:x.map(({icon:e,label:r})=>(0,h.jsx)(f.Link,{"aria-current":t===r?`page`:void 0,href:`#${r.toLowerCase()}`,icon:e,onClick:e=>n(e,r),children:r},r))})})}},C=[`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`],w={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/one">Tab one</TabNavigation.Link>
    <TabNavigation.Link href="/two">Tab two</TabNavigation.Link>
    <TabNavigation.Link href="/three">Tab three</TabNavigation.Link>
    {/* … */}
    <TabNavigation.Link href="/twelve">Tab twelvs</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=g(C);return(0,h.jsx)(f,{...e,children:(0,h.jsx)(f.List,{children:C.map(e=>(0,h.jsxs)(f.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:[`Tab `,e]},e))})})}},T=[[`Gegevens`,(0,h.jsx)(u,{color:`lime`,label:`34`},1)],[`Aanslagen`,(0,h.jsx)(u,{color:`azure`,label:`99+`},2)],[`Documenten`,(0,h.jsx)(u,{label:`New`},3)],[`Acties`,(0,h.jsx)(u,{color:`red`,label:`!`},4)]],E={parameters:{docs:{source:{code:`const badgedLabels = [
  ['Gegevens', <Badge color="lime" label="34" />],
  ['Aanslagen', <Badge color="azure" label="99+" />],
  ['Documenten', <Badge label="New" />],
  ['Acties', <Badge color="red" label="!" />],
]

<TabNavigation orientation="vertical">
  <TabNavigation.List>
    {badgedLabels.map(([label, badge]) => (
      <TabNavigation.Link
        aria-current={label === 'Gegevens' ? 'page' : undefined}
        href={'#' + label.toLowerCase()}
        key={label}
      >
        {label} {badge}
      </TabNavigation.Link>
    ))}
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let t=T.map(([e])=>e),{current:n,handleClick:r}=g(t);return(0,h.jsx)(f,{...e,children:(0,h.jsx)(f.List,{children:T.map(([e,t])=>(0,h.jsxs)(f.Link,{"aria-current":n===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>r(t,e),children:[e,` `,t]},e))})})}},D=[`Default`,`Vertical`,`WithIcons`,`WithManyLinks`,`Badges`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/one">Tab one</TabNavigation.Link>
    <TabNavigation.Link href="/two">Tab two</TabNavigation.Link>
    <TabNavigation.Link href="/three">Tab three</TabNavigation.Link>
    {/* … */}
    <TabNavigation.Link href="/twelve">Tab twelvs</TabNavigation.Link>
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
    } = useTabNavigation(twelve);
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {twelve.map(name => <TabNavigation.Link aria-current={current === name ? 'page' : undefined} href={\`#\${name.toLowerCase()}\`} key={name} onClick={e => handleClick(e, name)}>
              Tab {name}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const badgedLabels = [
  ['Gegevens', <Badge color="lime" label="34" />],
  ['Aanslagen', <Badge color="azure" label="99+" />],
  ['Documenten', <Badge label="New" />],
  ['Acties', <Badge color="red" label="!" />],
]

<TabNavigation orientation="vertical">
  <TabNavigation.List>
    {badgedLabels.map(([label, badge]) => (
      <TabNavigation.Link
        aria-current={label === 'Gegevens' ? 'page' : undefined}
        href={'#' + label.toLowerCase()}
        key={label}
      >
        {label} {badge}
      </TabNavigation.Link>
    ))}
  </TabNavigation.List>
</TabNavigation>\`,
        language: 'tsx'
      }
    }
  },
  render: args => {
    const labels = badgedLabels.map(([label]) => label);
    const {
      current,
      handleClick
    } = useTabNavigation(labels);
    return <TabNavigation {...args}>
        <TabNavigation.List>
          {badgedLabels.map(([label, badge]) => <TabNavigation.Link aria-current={current === label ? 'page' : undefined} href={\`#\${label.toLowerCase()}\`} key={label} onClick={e => handleClick(e, label)}>
              {label} {badge}
            </TabNavigation.Link>)}
        </TabNavigation.List>
      </TabNavigation>;
  }
}`,...E.parameters?.docs?.source}}}})))()}export{w as a,S as i,p as n,O as o,b as r,_ as s,E as t};