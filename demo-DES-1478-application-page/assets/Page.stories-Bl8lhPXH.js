import{r as M,j as e,c as P,M as u,N as a,H as d,O as _,Q as o,V as l,G as c}from"./iframe-FijalPYf.js";const s=M.forwardRef(({children:i,className:t,withMenu:g,...h},p)=>e.jsx("div",{...h,className:P("ams-page",g&&"ams-page--with-menu",t),ref:p,children:i}));s.displayName="Page";try{s.displayName="Page",s.__docgenInfo={description:"",displayName:"Page",props:{withMenu:{defaultValue:null,description:"",name:"withMenu",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Components/Containers/Page",component:s,args:{lang:"nl"},argTypes:{className:{table:{disable:!0}},lang:{table:{disable:!0}},withMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}}},parameters:{layout:"fullscreen"}},m=()=>e.jsx(c,{paddingBottom:"x-large",children:e.jsx(c.Cell,{span:"all",children:e.jsx(d,{level:1,children:"Page Body"})})}),n={args:{children:[e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(m,{})},"main"),e.jsxs(a,{children:[e.jsx(d,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})]},"footer")]}},r={args:{children:e.jsx(m,{}),lang:"nl",withMenu:!0},globals:{theme:"Compact"},render:({children:i,...t})=>e.jsxs(s,{...t,children:[e.jsx(_,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(u,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(o,{children:e.jsx(o.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})})}),e.jsx(o,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(o.Link,{href:"#",icon:e.jsx(l,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:i}),e.jsxs(a,{className:"ams-page__area--footer",children:[e.jsx(d,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
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
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
}`,...r.parameters?.docs?.source}}};const j=["Default","WithMenu"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithMenu:r,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{s as P,r as W,y as a,x as m};
