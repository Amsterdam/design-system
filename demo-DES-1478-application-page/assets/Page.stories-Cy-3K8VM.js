import{r as M,j as e,c as P,M as c,N as a,O as _,Q as i,V as d,H as u,G as l}from"./iframe-Nv5xrOgP.js";const s=M.forwardRef(({children:o,className:t,hasMenu:m,...h},p)=>e.jsx("div",{...h,className:P("ams-page",m&&"ams-page--has-menu",t),ref:p,children:o}));s.displayName="Page";try{s.displayName="Page",s.__docgenInfo={description:"",displayName:"Page",props:{hasMenu:{defaultValue:null,description:"",name:"hasMenu",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Components/Containers/Page",component:s,args:{lang:"nl"},argTypes:{className:{table:{disable:!0}},hasMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}},lang:{table:{disable:!0}}},parameters:{layout:"fullscreen"}},g=()=>e.jsx(l,{paddingBottom:"x-large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(u,{level:1,children:"Page Body"})})}),n={args:{children:[e.jsx(c,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(g,{})},"main"),e.jsx(a,{children:e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})},"footer")]}},r={args:{children:e.jsx(g,{}),hasMenu:!0,lang:"nl"},globals:{theme:"Compact"},render:({children:o,...t})=>e.jsxs(s,{...t,children:[e.jsx(_,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(c,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(i,{children:e.jsx(i.Link,{href:"#",icon:e.jsx(d,{}),children:"Menu item"})})}),e.jsx(i,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(i.Link,{href:"#",icon:e.jsx(d,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:o}),e.jsxs(a,{className:"ams-page__area--footer",children:[e.jsx(u,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    hasMenu: true,
    lang: 'nl'
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
}`,...r.parameters?.docs?.source}}};const j=["Default","WithMenu"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithMenu:r,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{s as P,r as W,k as a,x as m};
