import{r as h,j as e,c as P,Q as c,V as a,G as t,P as M,W as x,X as s,Y as l,H as _}from"./iframe-BjjnHdFQ.js";const o=h.forwardRef(({children:i,className:d,withMenu:u,...m},p)=>e.jsx("div",{...m,className:P("ams-page",u&&"ams-page--with-menu",d),ref:p,children:i}));o.displayName="Page";try{o.displayName="Page",o.__docgenInfo={description:"",displayName:"Page",props:{withMenu:{defaultValue:null,description:"",name:"withMenu",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Components/Containers/Page",component:o,args:{lang:"nl"},argTypes:{lang:{table:{disable:!0}},withMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}}},parameters:{layout:"fullscreen"}},g=()=>e.jsx(t,{paddingBottom:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(_,{level:1,children:"Page Body"})})}),n={args:{children:[e.jsx(c,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(g,{})},"main"),e.jsxs(a,{children:[e.jsx(a.Spotlight,{children:e.jsx(t,{paddingVertical:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(M,{color:"inverse",children:"Page Footer"})})})}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]}},r={args:{children:e.jsx(g,{}),lang:"nl",withMenu:!0},globals:{theme:"Compact"},render:({children:i,...d})=>e.jsxs(o,{...d,children:[e.jsx(x,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(c,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(s,{children:e.jsx(s.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})})}),e.jsx(s,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(s.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:i}),e.jsx(a,{className:"ams-page__area--footer",children:e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span="all">
              <Paragraph color="inverse">Page Footer</Paragraph>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageBody />,
    lang: 'nl',
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
}`,...r.parameters?.docs?.source}}};const f=["Default","WithMenu"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithMenu:r,__namedExportsOrder:f,default:j},Symbol.toStringTag,{value:"Module"}));export{o as P,r as W,F as a,j as m};
