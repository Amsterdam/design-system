import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{E as r,G as i,P as a}from"./index.esm-AHCPMkhr.js";import{E as o,P as s,X as c,v as l,y as u}from"./index.esm-B4Ud-Z7D.js";import{J as d,t as f}from"./src-C_F1uAYO.js";import{i as p,t as m}from"./decorators-DhvHj6S8.js";import{n as h,t as g}from"./useIsCompactTheme-CXOL5n3U.js";import{n as _,t as v}from"./PageFooterContent-CV-yEWmS.js";var y=t({CustomContent:()=>C,CustomMenuHeading:()=>w,Default:()=>S,__namedExportsOrder:()=>T,default:()=>x}),b,x,S,C,w,T,E=e((()=>{c(),i(),f(),m(),g(),_(),b=n(),x={title:`Components/Containers/Page Footer`,component:d,decorators:[p]},S={render:e=>{let t=h();return(0,b.jsx)(d,{...e,children:(0,b.jsx)(v,{cellAppearance:t?`transparent`:void 0})})}},C={render:e=>{let t=h()?`transparent`:void 0;return(0,b.jsxs)(d,{...e,children:[(0,b.jsx)(d.Spotlight,{children:(0,b.jsxs)(l,{paddingVertical:`x-large`,children:[(0,b.jsxs)(l.Cell,{appearance:t,span:4,children:[(0,b.jsx)(u,{className:`ams-mb-s`,color:`inverse`,level:2,size:`level-3`,children:`Contact`}),(0,b.jsx)(s,{className:`ams-mb-m`,color:`inverse`,children:`Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.`}),(0,b.jsxs)(o,{children:[(0,b.jsx)(o.Link,{color:`inverse`,href:`mailto:redactie.os@amsterdam.nl`,icon:(0,b.jsx)(r,{}),children:`E-mail`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`tel:+31202510333`,icon:(0,b.jsx)(a,{}),children:`020 251 0333`})]})]}),(0,b.jsxs)(l.Cell,{appearance:t,span:4,children:[(0,b.jsx)(u,{className:`ams-mb-s`,color:`inverse`,level:2,size:`level-3`,children:`Panels en enquêtes`}),(0,b.jsx)(s,{className:`ams-mb-m`,color:`inverse`,children:`Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?`}),(0,b.jsxs)(o,{children:[(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,rel:`external`,children:`Meedoen aan onderzoek`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,rel:`external`,children:`Panel Amsterdam`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,rel:`external`,children:`Stadspaspanel Amsterdam`})]})]}),(0,b.jsxs)(l.Cell,{appearance:t,span:4,children:[(0,b.jsx)(u,{className:`ams-mb-s`,color:`inverse`,level:2,size:`level-3`,children:`Onderzoek en Statistiek`}),(0,b.jsxs)(o,{children:[(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,children:`Over Onderzoek en Statistiek`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,children:`Veelgestelde vragen`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,children:`Termen en categorieën`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,rel:`external`,children:`Nieuwsbrief`}),(0,b.jsx)(o.Link,{color:`inverse`,href:`#`,children:`Vacatures`})]})]})]})}),(0,b.jsxs)(d.Menu,{children:[(0,b.jsx)(d.MenuLink,{href:`#`,children:`Privacy`}),(0,b.jsx)(d.MenuLink,{href:`#`,children:`Toegankelijkheid`})]})]})}},w={args:{children:(0,b.jsxs)(d.Menu,{heading:`Support links`,children:[(0,b.jsx)(d.MenuLink,{href:`#`,children:`About this website`}),(0,b.jsx)(d.MenuLink,{href:`#`,children:`Privacy`}),(0,b.jsx)(d.MenuLink,{href:`#`,children:`Cookies`}),(0,b.jsx)(d.MenuLink,{href:`#`,children:`Web archive`})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const compact = useIsCompactTheme();
    return <PageFooter {...args}>
        <PageFooterContent cellAppearance={compact ? 'transparent' : undefined} />
      </PageFooter>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const cellAppearance = useIsCompactTheme() ? 'transparent' : undefined;
    return <PageFooter {...args}>
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell appearance={cellAppearance} span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Contact
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="mailto:redactie.os@amsterdam.nl" icon={<MailIcon />}>
                  E-mail
                </LinkList.Link>
                <LinkList.Link color="inverse" href="tel:+31202510333" icon={<PhoneIcon />}>
                  020 251 0333
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell appearance={cellAppearance} span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Panels en enquêtes
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="#" rel="external">
                  Meedoen aan onderzoek
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" rel="external">
                  Panel Amsterdam
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" rel="external">
                  Stadspaspanel Amsterdam
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell appearance={cellAppearance} span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Onderzoek en Statistiek
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Over Onderzoek en Statistiek
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Veelgestelde vragen
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Termen en categorieën
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" rel="external">
                  Nieuwsbrief
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Vacatures
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageFooter.Menu heading="Support links">
        <PageFooter.MenuLink href="#">About this website</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Web archive</PageFooter.MenuLink>
      </PageFooter.Menu>
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`CustomContent`,`CustomMenuHeading`]}));E();export{C as CustomContent,w as CustomMenuHeading,S as Default,T as __namedExportsOrder,x as default,E as n,y as t};