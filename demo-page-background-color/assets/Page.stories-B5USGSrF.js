import{r as j,j as e,c as y,Q as m,V as n,H as g,G as r,P as h,W as k,X as c,Y as p}from"./iframe-BSonbQeR.js";import{W as b}from"./WithMultipleQuestions-D6rY3zb9.js";import{H as F}from"./HomePage-Dp5ZWjR-.js";import{D as _}from"./NavigationPage.stories-BCZQRZtV.js";import{P as v}from"./ProductPage-B8rAc_it.js";const o=j.forwardRef(({backgroundColor:a,children:t,className:i,withMenu:f,...x},M)=>e.jsx("div",{...x,className:y("ams-page",f&&"ams-page--with-menu",i),ref:M,style:{backgroundColor:a,boxShadow:`0 0 0 50vw ${a}`},children:t}));o.displayName="Page";try{o.displayName="Page",o.__docgenInfo={description:"",displayName:"Page",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"BackgroundColor"}},withMenu:{defaultValue:null,description:"",name:"withMenu",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"Components/Containers/Page",component:o,args:{lang:"nl"},argTypes:{lang:{table:{disable:!0}},withMenu:{description:"This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.",table:{readonly:!0}}},parameters:{layout:"fullscreen"}},P=()=>e.jsx(r,{paddingBottom:"x-large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(g,{level:1,children:"Page Body"})})}),s={args:{children:[e.jsx(m,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:e.jsx(P,{})},"main"),e.jsxs(n,{children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(n.Spotlight,{children:e.jsx(r,{paddingVertical:"x-large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(h,{color:"inverse",children:"Page Footer"})})})}),e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]}},l={args:{children:e.jsx(P,{}),lang:"nl",withMenu:!0},globals:{theme:"Compact"},render:({children:a,...t})=>e.jsxs(o,{...t,children:[e.jsx(k,{className:"ams-page__area--skip-link",href:"#inhoud",children:"Direct naar inhoud"}),e.jsx(m,{brandName:"Page Header",className:"ams-page__area--header",noMenuButtonOnWideWindow:!0,children:e.jsx(c,{children:e.jsx(c.Link,{href:"#",icon:e.jsx(p,{}),children:"Menu item"})})}),e.jsx(c,{className:"ams-page__area--menu",inWideWindow:!0,children:e.jsx(c.Link,{href:"#",icon:e.jsx(p,{}),children:"Menu item"})}),e.jsx("main",{className:"ams-page__area--body",id:"inhoud",children:a}),e.jsxs(n,{className:"ams-page__area--footer",children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer Menu"})})]})]})},u={form:b,home:F,navigation:_,product:v},d={args:{backgroundColor:"#f8f8f8",content:"home",style:{backgroundColor:"#f8f8f8"}},argTypes:{backgroundColor:{control:"color",type:"string"},content:{control:{type:"radio"},label:"template",mapping:u,options:["home",...Object.keys(u).filter(a=>a!=="home")],table:{disable:!1}}},render:({content:a,...t})=>{const i=typeof a=="string"?u[a]:a;return e.jsxs(o,{...t,children:[e.jsx(m,{brandName:"Page Header",noMenuButtonOnWideWindow:!0},"header"),e.jsx("main",{id:"inhoud",children:typeof i=="function"?e.jsx(i,{}):i},"main"),e.jsxs(n,{children:[e.jsx(g,{className:"ams-visually-hidden",level:2,children:"Over deze website"}),e.jsx(n.Spotlight,{children:e.jsx(r,{paddingVertical:"x-large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(h,{color:"inverse",children:"Page Footer"})})})}),e.jsx(n.Menu,{children:e.jsx(n.MenuLink,{href:"/",children:"Page Footer Menu"})})]},"footer")]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#f8f8f8',
    content: 'home',
    style: {
      backgroundColor: '#f8f8f8'
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
}`,...d.parameters?.docs?.source}}};const N=["Default","WithMenu","WithBackgroundColour"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithBackgroundColour:d,WithMenu:l,__namedExportsOrder:N,default:C},Symbol.toStringTag,{value:"Module"}));export{o as P,l as W,O as a,d as b,C as m};
