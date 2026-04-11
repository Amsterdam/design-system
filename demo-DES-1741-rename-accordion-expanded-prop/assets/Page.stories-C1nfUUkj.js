import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{D as n,K as r,M as i,N as a,Ot as o,j as s,jt as c,v as l,xt as u,y as d,z as f}from"./iframe-BYseULga.js";import{T as p,t as m}from"./src-9a5QeehB.js";var h=t({Default:()=>y,WithMenu:()=>b,__namedExportsOrder:()=>x,default:()=>_}),g,_,v,y,b,x,S=e((()=>{r(),o(),m(),g=c(),_={title:`Components/Containers/Page`,component:p,argTypes:{withMenu:{description:`This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.`,table:{readonly:!0}}},decorators:[e=>(0,g.jsx)(`div`,{lang:`nl`,children:(0,g.jsx)(e,{})})],parameters:{layout:`fullscreen`}},v=()=>(0,g.jsx)(l,{paddingVertical:`x-large`,children:(0,g.jsx)(l.Cell,{span:`all`,children:(0,g.jsx)(d,{level:1,children:`Page Body`})})}),y={args:{children:[(0,g.jsx)(i,{brandName:`Page Header`,noMenuButtonOnWideWindow:!0},`header`),(0,g.jsx)(`main`,{id:`inhoud`,children:(0,g.jsx)(v,{})},`main`),(0,g.jsxs)(s,{children:[(0,g.jsx)(s.Spotlight,{children:(0,g.jsx)(l,{paddingVertical:`x-large`,children:(0,g.jsx)(l.Cell,{appearance:`transparent`,span:`all`,children:(0,g.jsx)(a,{color:`inverse`,children:`Page Footer`})})})}),(0,g.jsx)(s.Menu,{children:(0,g.jsx)(s.MenuLink,{href:`/`,children:`Page Footer Menu`})})]},`footer`)]}},b={args:{children:(0,g.jsx)(v,{}),withMenu:!0},globals:{theme:`Compact`},render:({children:e,...t})=>(0,g.jsxs)(p,{...t,children:[(0,g.jsx)(f,{className:`ams-page__area--skip-link`,href:`#inhoud`,children:`Direct naar inhoud`}),(0,g.jsx)(i,{brandName:`Page Header`,className:`ams-page__area--header`,noMenuButtonOnWideWindow:!0,children:(0,g.jsx)(n,{children:(0,g.jsx)(n.Link,{href:`#`,icon:(0,g.jsx)(u,{}),children:`Menu item`})})}),(0,g.jsx)(n,{className:`ams-page__area--menu`,inWideWindow:!0,children:(0,g.jsx)(n.Link,{href:`#`,icon:(0,g.jsx)(u,{}),children:`Menu item`})}),(0,g.jsx)(`main`,{className:`ams-page__area--body`,id:`inhoud`,children:e}),(0,g.jsx)(s,{className:`ams-page__area--footer`,children:(0,g.jsx)(s.Menu,{children:(0,g.jsx)(s.MenuLink,{href:`/`,children:`Page Footer Menu`})})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithMenu`]}));S();export{y as Default,b as WithMenu,x as __namedExportsOrder,_ as default,S as n,h as t};