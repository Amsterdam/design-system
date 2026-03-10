import{r as p,j as e,c as P,M as c,N as a,G as t,P as M,Q as x,T as s,V as l,H as j}from"./iframe-VrVcUjvb.js";const i=p.forwardRef(({children:n,className:d,withMenu:u,...m},h)=>e.jsx("div",{...m,className:P("ams-page",u&&"ams-page--with-menu",d),ref:h,children:n}));i.displayName="Page";try{i.displayName="Page",i.__docgenInfo={description:"",displayName:"Page",props:{withMenu:{defaultValue:null,description:"",name:"withMenu",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Components/Containers/Page",component:i,argTypes:{withMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}}},decorators:[n=>e.jsx("div",{lang:"nl",children:e.jsx(n,{})})],parameters:{layout:"fullscreen"}},g=()=>e.jsx(t,{paddingBottom:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(j,{level:1,children:"Page Body"})})}),r={args:{children:[e.jsx(c,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(g,{})},"main"),e.jsxs(a,{children:[e.jsx(a.Spotlight,{children:e.jsx(t,{paddingVertical:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(M,{color:"inverse",children:"Page Footer"})})})}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]}},o={args:{children:e.jsx(g,{}),withMenu:!0},globals:{theme:"Compact"},render:({children:n,...d})=>e.jsxs(i,{...d,children:[e.jsx(x,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(c,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(s,{children:e.jsx(s.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})})}),e.jsx(s,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(s.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:n}),e.jsx(a,{className:"ams-page__area--footer",children:e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["Default","WithMenu"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithMenu:o,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{i as P,o as W,F as a,_ as m};
