import{r as P,j as e,c as M,K as u,M as n,N as s,O as l,H as g,G as c}from"./iframe-C1YDCPUn.js";const o=P.forwardRef(({children:i,className:t,layout:d,...h},p)=>e.jsx("div",{...h,className:M("ams-page",d&&`ams-page--${d}`,t),ref:p,children:i}));o.displayName="Page";try{o.displayName="Page",o.__docgenInfo={description:"",displayName:"Page",props:{layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"application"'}]}}}}}catch{}const x={title:"Components/Containers/Page",component:o,args:{lang:"nl"},argTypes:{className:{table:{disable:!0}},layout:{control:{labels:{undefined:"website (default)"}},options:[void 0,"application"],table:{readonly:!0}}},parameters:{layout:"fullscreen"}},m=()=>e.jsx(c,{paddingBottom:"x-large",children:e.jsx(c.Cell,{span:"all",children:e.jsx(g,{level:1,children:"Page Body"})})}),a={args:{children:[e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(m,{})},"main"),e.jsx(n,{children:e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer"})})},"footer")]}},r={args:{children:e.jsx(m,{}),lang:"nl",layout:"application"},globals:{theme:"Compact"},render:({children:i,...t})=>e.jsxs(o,{...t,children:[e.jsx(s,{inWideWindow:!0,children:e.jsx(s.Link,{color:"inverse",href:"#",icon:e.jsx(l,{}),children:"Menu item"})}),e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0,children:e.jsx(s,{children:e.jsx(s.Link,{color:"inverse",href:"#",icon:e.jsx(l,{}),children:"Menu item"})})}),e.jsx("main",{id:"inhoud",children:i}),e.jsxs(n,{children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      <Menu inWideWindow>
        <Menu.Link color="inverse" href="#" icon={<SettingsFillIcon />}>
          Menu item
        </Menu.Link>
      </Menu>
      <PageHeader brandName="Page Header" noMenuButtonOnWideWindow>
        <Menu>
          <Menu.Link color="inverse" href="#" icon={<SettingsFillIcon />}>
            Menu item
          </Menu.Link>
        </Menu>
      </PageHeader>
      <main id="inhoud">{children}</main>
      <PageFooter>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
}`,...r.parameters?.docs?.source}}};const j=["Default","WithSideMenu"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithSideMenu:r,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{y as P,r as W};
