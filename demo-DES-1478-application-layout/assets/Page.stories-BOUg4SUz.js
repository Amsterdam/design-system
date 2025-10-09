import{r as P,j as e,c as x,K as g,M as n,H as u,G as l,N as i,O as j,Q as M,V as f}from"./iframe-CNtOXSn4.js";const s=P.forwardRef(({children:a,className:t,layout:d,...p},h)=>e.jsx("div",{...p,className:x("ams-page",d&&`ams-page--${d}`,t),ref:h,children:a}));s.displayName="Page";try{s.displayName="Page",s.__docgenInfo={description:"",displayName:"Page",props:{layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"application"'}]}}}}}catch{}const F={title:"Components/Containers/Page",component:s,args:{className:"ams-docs-page"},argTypes:{className:{table:{disable:!0}},layout:{control:{labels:{undefined:"website (default)"}},options:[void 0,"application"]}},parameters:{layout:"fullscreen"}},m=()=>e.jsx(l,{paddingBottom:"x-large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(u,{level:1,children:"Page Body"})})}),r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(g,{brandName:"Page Header",noMenuButtonOnWideWindow:!0}),e.jsx("main",{id:"inhoud",children:e.jsx(m,{})}),e.jsx(n,{children:e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer"})})})]})}},c=a=>e.jsxs(i,{...a,children:[e.jsx(i.Link,{color:"inverse",href:"#",icon:e.jsx(j,{}),children:"Menu item 1"}),e.jsx(i.Link,{color:"inverse",href:"#",icon:e.jsx(M,{}),children:"Menu item 2"}),e.jsx(i.Link,{color:"inverse",href:"#",icon:e.jsx(f,{}),children:"Voorbereidingswerkzaamheden"})]}),o={args:{children:e.jsx(m,{}),lang:"nl",layout:"application"},globals:{},render:({children:a,...t})=>e.jsxs(s,{...t,children:[e.jsx(c,{}),e.jsx(g,{brandName:"Page Header",noMenuButtonOnWideWindow:!0,children:e.jsx(c,{narrow:!0})}),e.jsx("main",{id:"inhoud",children:a}),e.jsxs(n,{children:[e.jsx(u,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer"})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <PageHeader brandName="Page Header" noMenuButtonOnWideWindow />
        <main id="inhoud">
          <PageBody />
        </main>
        <PageFooter>
          <PageFooter.Menu>
            <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
          </PageFooter.Menu>
        </PageFooter>
      </>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageBody />,
    lang: 'nl',
    layout: 'application'
  },
  globals: {
    // TODO theme: 'Compact',
  },
  render: ({
    children,
    ...args
  }) => <Page {...args}>
      <MenuWithItems />
      <PageHeader brandName="Page Header" noMenuButtonOnWideWindow>
        <MenuWithItems narrow />
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
}`,...o.parameters?.docs?.source}}};const y=["Default","ForApplications"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ForApplications:o,__namedExportsOrder:y,default:F},Symbol.toStringTag,{value:"Module"}));export{o as F,b as P};
