import{h as x,j as e,f as n,i as k,k as P,S,G as t}from"./index.esm-FhJvLEyp.js";const w={title:"Containers/Header",component:x},r={},a={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},o={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"English"}),e.jsx(n.Link,{href:"#",icon:k,children:"Inloggen Mijn Amsterdam"}),e.jsx(n.Button,{icon:P,showOnMobile:!0,children:"Menu"})]})}},s={decorators:[f=>e.jsx(S,{children:e.jsx(t,{children:e.jsx(t.Cell,{fullWidth:!0,children:e.jsx(f,{})})})})],args:{title:"Aan de Amsterdamse grachten",menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Souvenirs"}),e.jsx(n.Link,{href:"#",children:"English"}),e.jsx(n.Link,{href:"#",icon:k,children:"Inloggen Mijn Amsterdam"}),e.jsx(n.Button,{icon:P,showOnMobile:!0,children:"Menu"})]})}};var i,g,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,c,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,h,M;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#" icon={LoginIcon}>
          Inloggen Mijn Amsterdam
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
  }
}`,...(M=(h=o.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var p,L,j;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <PageMenu.Link href="#">Souvenirs</PageMenu.Link>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#" icon={LoginIcon}>
          Inloggen Mijn Amsterdam
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const A=["Default","WithLogoVariant","WithHeaderMenu","WithBoth"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithBoth:s,WithHeaderMenu:o,WithLogoVariant:a,__namedExportsOrder:A,default:w},Symbol.toStringTag,{value:"Module"}));export{E as H,a as W,o as a,s as b};
