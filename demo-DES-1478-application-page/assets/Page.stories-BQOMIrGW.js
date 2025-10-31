import{r as P,j as e,c as _,M as u,N as a,O as M,Q as o,V as l,H as g,G as c}from"./iframe-D_5a-D79.js";const s=P.forwardRef(({children:i,className:t,layout:d,...p},h)=>e.jsx("div",{...p,className:_("ams-page",d&&`ams-page--${d}`,t),ref:h,children:i}));s.displayName="Page";try{s.displayName="Page",s.__docgenInfo={description:"",displayName:"Page",props:{layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"application"'}]}}}}}catch{}const x={title:"Components/Containers/Page",component:s,args:{lang:"nl"},argTypes:{className:{table:{disable:!0}},layout:{control:{labels:{undefined:"website (default)"}},options:[void 0,"application"],table:{readonly:!0}}},parameters:{layout:"fullscreen"}},m=()=>e.jsx(c,{paddingBottom:"x-large",children:e.jsx(c.Cell,{span:"all",children:e.jsx(g,{level:1,children:"Page Body"})})}),n={args:{children:[e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(m,{})},"main"),e.jsx(a,{children:e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})},"footer")]}},r={args:{children:e.jsx(m,{}),lang:"nl",layout:"application"},globals:{theme:"Compact"},render:({children:i,...t})=>e.jsxs(s,{...t,children:[e.jsx(M,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(u,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(o,{children:e.jsx(o.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})})}),e.jsx(o,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(o.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:i}),e.jsxs(a,{className:"ams-page__area--footer",children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageBody />,
    lang: 'nl',
    layout: 'application'
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
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
}`,...r.parameters?.docs?.source}}};const j=["Default","WithSideMenu"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithSideMenu:r,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{s as P,r as W,y as a,x as m};
