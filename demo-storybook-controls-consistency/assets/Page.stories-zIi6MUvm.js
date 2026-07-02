import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,R as i}from"./index.esm-Cyk4q9Yv.js";import{B as a,D as o,J as s,M as c,P as l,j as u,v as d,y as f}from"./index.esm-D8eqIj5U.js";import{q as p,t as m}from"./src-C1A9rIMv.js";import{l as h,r as g}from"./argTypes-J67b33k4.js";var _=e({Default:()=>x,WithMenu:()=>S,__namedExportsOrder:()=>C,default:()=>y}),v,y,b,x,S,C,w=t((()=>{s(),r(),m(),h(),v=n(),y={title:`Components/Containers/Page`,component:p,argTypes:{withMenu:g(`This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.`)},parameters:{layout:`fullscreen`}},b=()=>(0,v.jsx)(d,{paddingVertical:`x-large`,children:(0,v.jsx)(d.Cell,{span:`all`,children:(0,v.jsx)(f,{level:1,children:`Page Body`})})}),x={args:{children:[(0,v.jsx)(c,{brandName:`Page Header`,noMenuButtonOnWideWindow:!0},`header`),(0,v.jsx)(`main`,{id:`inhoud`,children:(0,v.jsx)(b,{})},`main`),(0,v.jsxs)(u,{children:[(0,v.jsx)(u.Spotlight,{children:(0,v.jsx)(d,{paddingVertical:`x-large`,children:(0,v.jsx)(d.Cell,{appearance:`transparent`,span:`all`,children:(0,v.jsx)(l,{color:`inverse`,children:`Page Footer`})})})}),(0,v.jsx)(u.Menu,{children:(0,v.jsx)(u.MenuLink,{href:`/`,children:`Page Footer Menu`})})]},`footer`)]}},S={args:{children:(0,v.jsx)(b,{}),withMenu:!0},globals:{theme:`Compact`},render:({children:e,...t})=>(0,v.jsxs)(p,{...t,children:[(0,v.jsx)(a,{className:`ams-page__area--skip-link`,href:`#inhoud`,children:`Direct naar inhoud`}),(0,v.jsx)(c,{brandName:`Page Header`,className:`ams-page__area--header`,noMenuButtonOnWideWindow:!0,children:(0,v.jsx)(o,{children:(0,v.jsx)(o.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Menu item`})})}),(0,v.jsx)(o,{className:`ams-page__area--menu`,inWideWindow:!0,children:(0,v.jsx)(o.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Menu item`})}),(0,v.jsx)(`main`,{className:`ams-page__area--body`,id:`inhoud`,children:e}),(0,v.jsx)(u,{className:`ams-page__area--footer`,children:(0,v.jsx)(u.Menu,{children:(0,v.jsx)(u.MenuLink,{href:`/`,children:`Page Footer Menu`})})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithMenu`]}));w();export{x as Default,S as WithMenu,C as __namedExportsOrder,y as default,w as n,_ as t};