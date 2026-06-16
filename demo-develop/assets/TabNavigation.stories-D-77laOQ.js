import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{Dt as a,Tt as o,Vt as s,ft as c,st as l}from"./iframe-CoKO0O_Q.js";import{f as u,t as d}from"./src-DnDYnxod.js";var f=e({Default:()=>v,Vertical:()=>y,WithIcons:()=>x,WithManyLinks:()=>C,__namedExportsOrder:()=>w,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{s(),d(),p=n(r()),m=i(),h=(e,t)=>{let[n,r]=(0,p.useState)(t??e[0]);return{current:n,handleClick:(e,t)=>{e.preventDefault(),r(t)}}},g={title:`Components/Navigation/Tab Navigation`,component:u,argTypes:{orientation:{control:{type:`inline-radio`},options:[`horizontal`,`vertical`]}}},_=[`Gegevens`,`Aanslagen`,`Documenten`,`Acties`],v={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(_);return(0,m.jsx)(u,{...e,children:(0,m.jsx)(u.List,{children:_.map(e=>(0,m.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},y={args:{orientation:`vertical`},parameters:{docs:{source:{code:`<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(_);return(0,m.jsx)(u,{...e,children:(0,m.jsx)(u.List,{children:_.map(e=>(0,m.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},b=[{icon:a,label:`Gegevens`},{icon:c,label:`Aanslagen`},{icon:l,label:`Documenten`},{icon:o,label:`Acties`}],x={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(b.map(({label:e})=>e));return(0,m.jsx)(u,{...e,children:(0,m.jsx)(u.List,{children:b.map(({icon:e,label:r})=>(0,m.jsx)(u.Link,{"aria-current":t===r?`page`:void 0,href:`#${r.toLowerCase()}`,icon:e,onClick:e=>n(e,r),children:r},r))})})}},S=[`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`],C={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/one">Tab one</TabNavigation.Link>
    <TabNavigation.Link href="/two">Tab two</TabNavigation.Link>
    <TabNavigation.Link href="/three">Tab three</TabNavigation.Link>
    {/* … */}
    <TabNavigation.Link href="/twelve">Tab twelvs</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=h(S);return(0,m.jsx)(u,{...e,children:(0,m.jsx)(u.List,{children:S.map(e=>(0,m.jsxs)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:[`Tab `,e]},e))})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Vertical`,`WithIcons`,`WithManyLinks`]}));T();export{v as Default,y as Vertical,x as WithIcons,C as WithManyLinks,w as __namedExportsOrder,g as default,T as n,f as t};