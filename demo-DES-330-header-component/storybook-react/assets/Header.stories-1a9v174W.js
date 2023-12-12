import{h as x,j as e,f as n,i as j,k as P,S,G as s}from"./index.esm--wSFonfT.js";const w={title:"Containers/Header",component:x},r={},a={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},o={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Contact"}),e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(n.Link,{href:"#",icon:j,children:"Zoeken"}),e.jsx(n.Button,{icon:P,showOnMobile:!0,children:"Menu"})]})}},t={decorators:[f=>e.jsx(S,{children:e.jsx(s,{children:e.jsx(s.Cell,{fullWidth:!0,children:e.jsx(f,{})})})})],args:{title:"Aan de Amsterdamse grachten",menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Contact"}),e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(n.Link,{href:"#",icon:j,children:"Zoeken"}),e.jsx(n.Button,{icon:P,showOnMobile:!0,children:"Menu"})]})}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,h,M;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
  }
}`,...(M=(h=o.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var k,p,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <Screen>
        <Grid>
          <Grid.Cell fullWidth>
            <Story />
          </Grid.Cell>
        </Grid>
      </Screen>],
  args: {
    title: 'Aan de Amsterdamse grachten',
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
  }
}`,...(L=(p=t.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};const A=["Default","WithLogoVariant","WithHeaderMenu","WithBoth"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithBoth:t,WithHeaderMenu:o,WithLogoVariant:a,__namedExportsOrder:A,default:w},Symbol.toStringTag,{value:"Module"}));export{G as H,a as W,o as a,t as b};
