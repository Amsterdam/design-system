import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-BzXtO1z6.js";import{B as o,q as s}from"./index.esm-BwInuVoJ.js";import{C as c,J as l,N as u,R as d,S as f,V as p,rt as m,z as h}from"./index.esm-D5Yk3Ew4.js";import{f as g,o as _}from"./argTypes-Diu0Wtb4.js";var v,y,b;function x(){return(x=e((()=>{a(),v=n(),y=r(),b=(0,v.forwardRef)(({children:e,className:t,withMenu:n,...r},a)=>(0,y.jsx)(`div`,{...r,className:i(`ams-page`,n&&`ams-page--with-menu`,t),ref:a,children:e})),b.displayName=`Page`;try{b.displayName=`Page`,b.__docgenInfo={description:`Contains the entire website.`,displayName:`Page`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/Page/Page.tsx`,methods:[],props:{withMenu:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/Page/Page.tsx`,name:`TypeLiteral`}],description:"Whether the page contains a Menu component.\nThis requires the following class names on the appropriate children:\n  - `ams-page__area--skip-link`\n  - `ams-page__area--header`\n  - `ams-page__area--menu`\n  - `ams-page__area--body`\n  - `ams-page__area--footer`",name:`withMenu`,required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}`}}}catch{}})))()}var S=t({Default:()=>D,WithExpandableMenu:()=>k,WithMenu:()=>O,__namedExportsOrder:()=>A,default:()=>w}),C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m(),s(),x(),g(),C=r(),w={title:`Components/Containers/Page`,component:b,argTypes:{withMenu:_(`This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.`)},parameters:{layout:`fullscreen`}},T=()=>(0,C.jsx)(f,{paddingVertical:`x-large`,children:(0,C.jsx)(f.Cell,{span:`all`,children:(0,C.jsx)(c,{level:1,children:`Page Body`})})}),E=({children:e,...t},n=!1)=>(0,C.jsxs)(b,{...t,children:[(0,C.jsx)(l,{className:`ams-page__area--skip-link`,href:`#inhoud`,children:`Direct naar inhoud`}),(0,C.jsx)(h,{brandName:`Page Header`,className:`ams-page__area--header`,noMenuButtonOnWideWindow:!0,children:(0,C.jsx)(u,{children:(0,C.jsx)(u.Link,{href:`#`,icon:(0,C.jsx)(o,{}),children:`Menu item`})})}),(0,C.jsx)(u,{className:`ams-page__area--menu`,expandable:n,inWideWindow:!0,children:(0,C.jsx)(u.Link,{href:`#`,icon:(0,C.jsx)(o,{}),children:`Menu item`})}),(0,C.jsx)(`main`,{className:`ams-page__area--body`,id:`inhoud`,children:e}),(0,C.jsx)(d,{className:`ams-page__area--footer`,children:(0,C.jsx)(d.Menu,{children:(0,C.jsx)(d.MenuLink,{href:`/`,children:`Page Footer Menu`})})})]}),D={args:{children:[(0,C.jsx)(h,{brandName:`Page Header`,noMenuButtonOnWideWindow:!0},`header`),(0,C.jsx)(`main`,{id:`inhoud`,children:(0,C.jsx)(T,{})},`main`),(0,C.jsxs)(d,{children:[(0,C.jsx)(d.Spotlight,{children:(0,C.jsx)(f,{paddingVertical:`x-large`,children:(0,C.jsx)(f.Cell,{appearance:`transparent`,span:`all`,children:(0,C.jsx)(p,{color:`inverse`,children:`Page Footer`})})})}),(0,C.jsx)(d.Menu,{children:(0,C.jsx)(d.MenuLink,{href:`/`,children:`Page Footer Menu`})})]},`footer`)]}},O={args:{children:(0,C.jsx)(T,{}),withMenu:!0},parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},render:e=>E(e)},k={...O,render:e=>E(e,!0)},A=[`Default`,`WithMenu`,`WithExpandableMenu`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />, <main id="inhoud" key="main">
        <PageBody />
      </main>, <PageFooter key="footer">
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell appearance="transparent" span="all">
              <Paragraph color="inverse">Page Footer</Paragraph>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer Menu</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PageBody />,
    withMenu: true
  },
  parameters: {
    // A Menu should only be used in Compact Mode. These options limit the theme toolbar to Compact Mode
    // and its Lo-fi variant.
    themes: {
      options: ['Compact', 'Compact Lo-fi']
    }
  },
  render: args => renderPageWithMenu(args)
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...WithMenu,
  render: args => renderPageWithMenu(args, true)
}`,...k.parameters?.docs?.source}}}})))()}export{x as a,b as i,j as n,w as r,S as t};