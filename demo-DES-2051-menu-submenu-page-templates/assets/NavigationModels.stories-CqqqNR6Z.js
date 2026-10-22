import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,C as i,S as a,V as o,j as s,rt as c}from"./index.esm-CnYzjL_F.js";import{a as l,i as u,n as d,r as f,t as p}from"./commonMeta-3QaFz_rz.js";import{f as m,g as h}from"./exampleContent-DRei7MoO.js";var g=t({AlwaysWideCollapsibleSubmenus:()=>C,AlwaysWideOpenSubmenus:()=>S,NarrowWithSectionOverview:()=>E,NarrowWithTableOfContents:()=>T,WidenedByUser:()=>w,__namedExportsOrder:()=>D,default:()=>x}),_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c(),h(),d(),u(),_=n(),v=m(),y=m(),b=l.find(({id:e})=>e===`rapportages`),x={...p,title:`Pages/Internal/Navigation Models`,parameters:f(`Experimental internal navigation models that use the same links and page body, and differ in navigation only.`,{currentPageId:`rapportages-vergunninghouders`}),render:()=>(0,_.jsxs)(a,{paddingVertical:`x-large`,children:[(0,_.jsx)(a.Cell,{appearance:`transparent`,span:`all`,children:(0,_.jsx)(i,{level:1,children:`Vergunninghouders 2026/2027`})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:5,wide:8},children:(0,_.jsx)(o,{children:v})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:3,wide:4},children:(0,_.jsx)(o,{children:y})})]})},S={parameters:{navigation:{headerMenu:{navigationDepth:2},wideMenu:{expanded:!0,navigationDepth:2}}}},C={parameters:{navigation:{headerMenu:{collapsibleSubmenus:!0,navigationDepth:2},wideMenu:{collapsibleSubmenus:!0,expanded:!0,navigationDepth:2}}}},w={parameters:{chromatic:{modes:{"1160px":{viewport:1160},"1920px":{viewport:1920}}},navigation:{headerMenu:{collapsibleSubmenus:!0,navigationDepth:2},wideMenu:{collapsibleSubmenus:!0,expandable:!0,expandForCurrentSubmenu:!0,navigationDepth:2}}}},T={parameters:{currentSectionId:`rapportages`},render:()=>(0,_.jsxs)(a,{paddingVertical:`x-large`,children:[(0,_.jsx)(a.Cell,{appearance:`transparent`,span:`all`,children:(0,_.jsx)(i,{level:1,children:`Vergunninghouders 2026/2027`})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:3,wide:4},children:(0,_.jsx)(r,{heading:b?.text,children:(0,_.jsx)(r.List,{children:b?.submenu?.map(({href:e,id:t,text:n})=>(0,_.jsx)(r.Link,{"aria-current":t===`rapportages-vergunninghouders`?`page`:void 0,href:e,label:n},t))})})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:5,wide:8},children:(0,_.jsx)(o,{children:v})})]})},E={parameters:{currentPageId:`rapportages`},render:()=>(0,_.jsxs)(a,{paddingVertical:`x-large`,children:[(0,_.jsx)(a.Cell,{appearance:`transparent`,span:`all`,children:(0,_.jsx)(i,{level:1,children:b?.text})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:5,wide:8},children:(0,_.jsx)(s,{children:b?.submenu?.map(({href:e,id:t,text:n})=>(0,_.jsx)(s.Link,{href:e,children:n},t))})})]})},D=[`AlwaysWideOpenSubmenus`,`AlwaysWideCollapsibleSubmenus`,`WidenedByUser`,`NarrowWithTableOfContents`,`NarrowWithSectionOverview`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      headerMenu: {
        navigationDepth: 2
      },
      wideMenu: {
        expanded: true,
        navigationDepth: 2
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      headerMenu: {
        collapsibleSubmenus: true,
        navigationDepth: 2
      },
      wideMenu: {
        collapsibleSubmenus: true,
        expanded: true,
        navigationDepth: 2
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes: {
        '1160px': {
          viewport: 1160
        },
        '1920px': {
          viewport: 1920
        }
      }
    },
    navigation: {
      headerMenu: {
        collapsibleSubmenus: true,
        navigationDepth: 2
      },
      wideMenu: {
        collapsibleSubmenus: true,
        expandable: true,
        expandForCurrentSubmenu: true,
        navigationDepth: 2
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    currentSectionId: 'rapportages'
  },
  render: () => <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Vergunninghouders 2026/2027</Heading>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 3,
      wide: 4
    }}>
        {/* The heading names the section, which gives this navigation a name of its own next to the Menu. */}
        <TableOfContents heading={currentSection?.text}>
          <TableOfContents.List>
            {currentSection?.submenu?.map(({
            href,
            id,
            text
          }) => <TableOfContents.Link aria-current={id === 'rapportages-vergunninghouders' ? 'page' : undefined} href={href} key={id} label={text} />)}
          </TableOfContents.List>
        </TableOfContents>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 5,
      wide: 8
    }}>
        <Paragraph>{summary}</Paragraph>
      </Grid.Cell>
    </Grid>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    currentPageId: 'rapportages'
  },
  render: () => <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>{currentSection?.text}</Heading>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 5,
      wide: 8
    }}>
        <LinkList>
          {currentSection?.submenu?.map(({
          href,
          id,
          text
        }) => <LinkList.Link href={href} key={id}>
              {text}
            </LinkList.Link>)}
        </LinkList>
      </Grid.Cell>
    </Grid>
}`,...E.parameters?.docs?.source}}}})))()}export{O as n,g as t};