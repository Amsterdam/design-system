import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{G as i,d as a,g as o,j as s,k as c}from"./index.esm-BKoBEYTi.js";import{n as l,t as u}from"./TabNavigation-C4_RZm1b.js";var d=t({Default:()=>_,Vertical:()=>v,WithIcons:()=>b,WithManyLinks:()=>S,__namedExportsOrder:()=>C,default:()=>h}),f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),l(),f=n(),p=r(),m=(e,t)=>{let[n,r]=(0,f.useState)(t??e[0]);return{current:n,handleClick:(e,t)=>{e.preventDefault(),r(t)}}},h={title:`Components/Navigation/Tab Navigation`,component:u,argTypes:{orientation:{control:{labels:{undefined:`horizontal (default)`},type:`inline-radio`},options:[void 0,`vertical`]}},subcomponents:{"TabNavigation.Link":u.Link}},g=[`Gegevens`,`Aanslagen`,`Documenten`,`Acties`],_={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=m(g);return(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.List,{children:g.map(e=>(0,p.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},v={args:{orientation:`vertical`},parameters:{docs:{source:{code:`<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=m(g);return(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.List,{children:g.map(e=>(0,p.jsx)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:e},e))})})}},y=[{icon:s,label:`Gegevens`},{icon:o,label:`Aanslagen`},{icon:a,label:`Documenten`},{icon:c,label:`Acties`}],b={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=m(y.map(({label:e})=>e));return(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.List,{children:y.map(({icon:e,label:r})=>(0,p.jsx)(u.Link,{"aria-current":t===r?`page`:void 0,href:`#${r.toLowerCase()}`,icon:e,onClick:e=>n(e,r),children:r},r))})})}},x=[`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`],S={parameters:{docs:{source:{code:`<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/one">Tab one</TabNavigation.Link>
    <TabNavigation.Link href="/two">Tab two</TabNavigation.Link>
    <TabNavigation.Link href="/three">Tab three</TabNavigation.Link>
    {/* … */}
    <TabNavigation.Link href="/twelve">Tab twelvs</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,language:`tsx`}}},render:e=>{let{current:t,handleClick:n}=m(x);return(0,p.jsx)(u,{...e,children:(0,p.jsx)(u.List,{children:x.map(e=>(0,p.jsxs)(u.Link,{"aria-current":t===e?`page`:void 0,href:`#${e.toLowerCase()}`,onClick:t=>n(t,e),children:[`Tab `,e]},e))})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Vertical`,`WithIcons`,`WithManyLinks`]})))()}export{w as a,S as i,v as n,h as o,b as r,d as t};