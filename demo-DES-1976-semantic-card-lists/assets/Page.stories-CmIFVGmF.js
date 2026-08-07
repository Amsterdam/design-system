import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-DnvffH3i.js";import{G as o,R as s}from"./index.esm-BKoBEYTi.js";import{$ as c,A as l,F as u,L as d,P as f,S as p,W as m,x as h}from"./index.esm-7LzSxihE.js";import{d as g,o as _}from"./argTypes-CTYEle7b.js";var v,y,b;function x(){return(x=e((()=>{a(),v=n(),y=r(),b=(0,v.forwardRef)(({children:e,className:t,withMenu:n,...r},a)=>(0,y.jsx)(`div`,{...r,className:i(`ams-page`,n&&`ams-page--with-menu`,t),ref:a,children:e})),b.displayName=`Page`;try{b.displayName=`Page`,b.__docgenInfo={description:`Contains the entire website.`,displayName:`Page`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/Page/Page.tsx`,methods:[],props:{withMenu:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/Page/Page.tsx`,name:`TypeLiteral`}],description:"Whether the page contains a Menu component.\nThis requires the following class names on the appropriate children:\n  - `ams-page__area--skip-link`\n  - `ams-page__area--header`\n  - `ams-page__area--menu`\n  - `ams-page__area--body`\n  - `ams-page__area--footer`",name:`withMenu`,required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}`}}}catch{}})))()}var S=t({Default:()=>E,WithMenu:()=>D,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O;function k(){return(k=e((()=>{c(),o(),x(),g(),C=r(),w={title:`Components/Containers/Page`,component:b,argTypes:{withMenu:_(`This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.`)},parameters:{layout:`fullscreen`}},T=()=>(0,C.jsx)(h,{paddingVertical:`x-large`,children:(0,C.jsx)(h.Cell,{span:`all`,children:(0,C.jsx)(p,{level:1,children:`Page Body`})})}),E={args:{children:[(0,C.jsx)(u,{brandName:`Page Header`,noMenuButtonOnWideWindow:!0},`header`),(0,C.jsx)(`main`,{id:`inhoud`,children:(0,C.jsx)(T,{})},`main`),(0,C.jsxs)(f,{children:[(0,C.jsx)(f.Spotlight,{children:(0,C.jsx)(h,{paddingVertical:`x-large`,children:(0,C.jsx)(h.Cell,{appearance:`transparent`,span:`all`,children:(0,C.jsx)(d,{color:`inverse`,children:`Page Footer`})})})}),(0,C.jsx)(f.Menu,{children:(0,C.jsx)(f.MenuLink,{href:`/`,children:`Page Footer Menu`})})]},`footer`)]}},D={args:{children:(0,C.jsx)(T,{}),withMenu:!0},globals:{theme:`Compact`},render:({children:e,...t})=>(0,C.jsxs)(b,{...t,children:[(0,C.jsx)(m,{className:`ams-page__area--skip-link`,href:`#inhoud`,children:`Direct naar inhoud`}),(0,C.jsx)(u,{brandName:`Page Header`,className:`ams-page__area--header`,noMenuButtonOnWideWindow:!0,children:(0,C.jsx)(l,{children:(0,C.jsx)(l.Link,{href:`#`,icon:(0,C.jsx)(s,{}),children:`Menu item`})})}),(0,C.jsx)(l,{className:`ams-page__area--menu`,inWideWindow:!0,children:(0,C.jsx)(l.Link,{href:`#`,icon:(0,C.jsx)(s,{}),children:`Menu item`})}),(0,C.jsx)(`main`,{className:`ams-page__area--body`,id:`inhoud`,children:e}),(0,C.jsx)(f,{className:`ams-page__area--footer`,children:(0,C.jsx)(f.Menu,{children:(0,C.jsx)(f.MenuLink,{href:`/`,children:`Page Footer Menu`})})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell appearance="transparent" span="all">
              <Paragraph color="inverse">Page Footer</Paragraph>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageBody />,
    withMenu: true
  },
  globals: {
    theme: 'Compact'
  },
  render: ({
    children,
    ...args
  }) => <Page {...args}>
      <SkipLink className="ams-page__area--skip-link" href="#inhoud">
        Direct naar inhoud
      </SkipLink>
      <PageHeader brandName="Page Header" className="ams-page__area--header" noMenuButtonOnWideWindow>
        <Menu>
          <Menu.Link href="#" icon={<SettingsFillIcon />}>
            Menu item
          </Menu.Link>
        </Menu>
      </PageHeader>
      <Menu className="ams-page__area--menu" inWideWindow>
        <Menu.Link href="#" icon={<SettingsFillIcon />}>
          Menu item
        </Menu.Link>
      </Menu>
      <main className="ams-page__area--body" id="inhoud">
        {children}
      </main>
      <PageFooter className="ams-page__area--footer">
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithMenu`]})))()}export{x as a,b as i,k as n,w as r,S as t};