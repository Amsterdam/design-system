import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,R as i}from"./index.esm-Cyk4q9Yv.js";import{F as a,M as o,N as s,O as c,V as l,Y as u,b as d,y as f}from"./index.esm-CdKwZNWS.js";import{q as p,t as m}from"./src-DCJX5pAk.js";import{d as h,o as g}from"./argTypes-CX0Ca9AC.js";var _=e({Default:()=>x,WithMenu:()=>S,__namedExportsOrder:()=>C,default:()=>y}),v,y,b,x,S,C,w=t((()=>{u(),r(),m(),h(),v=n(),y={title:`Components/Containers/Page`,component:p,argTypes:{withMenu:g(`This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.`)},parameters:{layout:`fullscreen`}},b=()=>(0,v.jsx)(f,{paddingVertical:`x-large`,children:(0,v.jsx)(f.Cell,{span:`all`,children:(0,v.jsx)(d,{level:1,children:`Page Body`})})}),x={args:{children:[(0,v.jsx)(s,{brandName:`Page Header`,noMenuButtonOnWideWindow:!0},`header`),(0,v.jsx)(`main`,{id:`inhoud`,children:(0,v.jsx)(b,{})},`main`),(0,v.jsxs)(o,{children:[(0,v.jsx)(o.Spotlight,{children:(0,v.jsx)(f,{paddingVertical:`x-large`,children:(0,v.jsx)(f.Cell,{appearance:`transparent`,span:`all`,children:(0,v.jsx)(a,{color:`inverse`,children:`Page Footer`})})})}),(0,v.jsx)(o.Menu,{children:(0,v.jsx)(o.MenuLink,{href:`/`,children:`Page Footer Menu`})})]},`footer`)]}},S={args:{children:(0,v.jsx)(b,{}),withMenu:!0},globals:{theme:`Compact`},render:({children:e,...t})=>(0,v.jsxs)(p,{...t,children:[(0,v.jsx)(l,{className:`ams-page__area--skip-link`,href:`#inhoud`,children:`Direct naar inhoud`}),(0,v.jsx)(s,{brandName:`Page Header`,className:`ams-page__area--header`,noMenuButtonOnWideWindow:!0,children:(0,v.jsx)(c,{children:(0,v.jsx)(c.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Menu item`})})}),(0,v.jsx)(c,{className:`ams-page__area--menu`,inWideWindow:!0,children:(0,v.jsx)(c.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Menu item`})}),(0,v.jsx)(`main`,{className:`ams-page__area--body`,id:`inhoud`,children:e}),(0,v.jsx)(o,{className:`ams-page__area--footer`,children:(0,v.jsx)(o.Menu,{children:(0,v.jsx)(o.MenuLink,{href:`/`,children:`Page Footer Menu`})})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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