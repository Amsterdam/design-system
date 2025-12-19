import{r as k,j as e,c as y,Q as u,V as a,H as g,G as t,P as p,W as P,X as o,Y as m}from"./iframe-WtA_bcEj.js";import{W as _}from"./WithMultipleQuestions-B69BMpol.js";import{H as b}from"./HomePage-DLe3g2Bu.js";import{D as F}from"./NavigationPage.stories-BE_nIXFC.js";import{P as N}from"./ProductPage-BSNwTYfF.js";const i=k.forwardRef(({backgroundColor:n,children:s,className:r,withMenu:M,...x},j)=>e.jsx("div",{...x,className:y("ams-page",M&&"ams-page--with-menu",r),ref:j,style:{backgroundColor:n,boxShadow:`0 0 0 50vw ${n}`},children:s}));i.displayName="Page";try{i.displayName="Page",i.__docgenInfo={description:"",displayName:"Page",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"BackgroundColor"}},withMenu:{defaultValue:null,description:"",name:"withMenu",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"Components/Containers/Page",component:i,args:{lang:"nl"},argTypes:{lang:{table:{disable:!0}},withMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}}},parameters:{layout:"fullscreen"}},f=()=>e.jsx(t,{paddingBottom:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(g,{level:1,children:"Page Body"})})}),l={args:{children:[e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(f,{})},"main"),e.jsxs(a,{children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Spotlight,{children:e.jsx(t,{paddingVertical:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(p,{color:"inverse",children:"Page Footer"})})})}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]}},d={args:{children:e.jsx(f,{}),lang:"nl",withMenu:!0},globals:{theme:"Compact"},render:({children:n,...s})=>e.jsxs(i,{...s,children:[e.jsx(P,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(u,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(o,{children:e.jsx(o.Link,{href:"#",icon:e.jsx(m,{}),children:"Menu item"})})}),e.jsx(o,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(o.Link,{href:"#",icon:e.jsx(m,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:n}),e.jsxs(a,{className:"ams-page__area--footer",children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]})]})},W=()=>e.jsx(p,{children:"Internal home page"}),h={form:_,home:b,internal:W,navigation:F,product:N},c={args:{backgroundColor:"#fcfcfc",content:"home",style:{backgroundColor:"#fcfcfc"}},argTypes:{backgroundColor:{control:"color",type:"string"},content:{control:{type:"radio"},label:"template",mapping:h,options:["home",...Object.keys(h).filter(n=>n!=="home")],table:{disable:!1}}},render:({content:n,...s})=>{const r=typeof n=="string"?h[n]:n;return n==="internal"?e.jsxs(i,{...s,children:[e.jsx(P,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(u,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(o,{children:e.jsx(o.Link,{href:"#",icon:e.jsx(m,{}),children:"Menu item"})})}),e.jsx(o,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(o.Link,{href:"#",icon:e.jsx(m,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:typeof r=="function"?e.jsx(r,{}):r}),e.jsxs(a,{className:"ams-page__area--footer",children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]})]}):e.jsxs(i,{...s,children:[e.jsx(u,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:typeof r=="function"?e.jsx(r,{}):r},"main"),e.jsxs(a,{children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(a.Spotlight,{children:e.jsx(t,{paddingVertical:"x-large",children:e.jsx(t.Cell,{span:"all",children:e.jsx(p,{color:"inverse",children:"Page Footer"})})})}),e.jsx(a.Menu,{children:e.jsx(a.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#fcfcfc',
    content: 'home',
    style: {
      backgroundColor: '#fcfcfc'
    }
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      type: 'string'
    },
    content: {
      control: {
        type: 'radio'
      },
      label: 'template',
      mapping: template,
      options: ['home', ...Object.keys(template).filter(item => item !== 'home')],
      table: {
        disable: false
      }
    }
  },
  render: ({
    content,
    ...args
  }) => {
    const Content = typeof content === 'string' ? template[content] : content;
    if (content === 'internal') {
      return <Page {...args}>
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
            {typeof Content === 'function' ? <Content /> : Content}
          </main>
          <PageFooter className="ams-page__area--footer">
            <Heading className="ams-visually-hidden" level={2}>
              Over deze website
            </Heading>
            <PageFooter.Menu>
              <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
            </PageFooter.Menu>
          </PageFooter>
        </Page>;
    }
    return <Page {...args}>
        <PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />
        <main id="inhoud" key="main">
          {typeof Content === 'function' ? <Content /> : Content}
        </main>
        <PageFooter key="footer">
          <Heading className="ams-visually-hidden" level={2}>
            Over deze website
          </Heading>
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
        </PageFooter>
      </Page>;
  }
}`,...c.parameters?.docs?.source}}};const C=["Default","WithMenu","WithBackgroundColour"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:l,WithBackgroundColour:c,WithMenu:d,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{i as P,d as W,B as a,c as b,v as m};
