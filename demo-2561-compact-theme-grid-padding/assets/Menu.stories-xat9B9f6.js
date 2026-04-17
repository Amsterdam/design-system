import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-Wx6hiPly.js";import{t as i}from"./jsx-runtime-GmyBfqKJ.js";import{E as a,F as o,I as s,k as c,l,n as u,p as d}from"./index.esm-6Mm6hKCe.js";import{A as f,T as p,t as m,w as h}from"./src-68USa8Eo.js";var g=n({Default:()=>w,Link:()=>T,__namedExportsOrder:()=>E,default:()=>C}),_,v,y,b,x,S,C,w,T,E,D=e((()=>{s(),m(),p(),_=t(r()),v=i(),y=t(r()),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,v.jsx)(a,{}),text:`Dashboard`},{href:`#`,icon:(0,v.jsx)(d,{}),text:`Projecten`},{href:`#`,icon:(0,v.jsx)(l,{}),text:`Rapportages`},{href:`#`,icon:(0,v.jsx)(u,{}),text:`Analyses`},{href:`#`,icon:(0,v.jsx)(c,{}),text:`Instellingen`}],S=e=>{let[,t]=b();return(0,_.useEffect)(()=>{if(typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${h.wide})`);t({inWideWindow:e.matches});let n=e=>t({inWideWindow:e.matches});return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[t]),(0,v.jsx)(e,{})},C={title:`Components/Navigation/Menu`,component:f,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${h.wide}.`,table:{category:`Derived`}}},decorators:[S],parameters:{themes:{themeOverride:`Compact`}}},f.Link,w={args:{children:x.map(({text:e,...t})=>(0,y.createElement)(f.Link,{...t,key:e},e))}},T={args:{children:x[0].text,href:`#`,icon:`PieChartFillIcon`},argTypes:{accessibleName:{table:{disable:!0}},children:{control:`text`,table:{disable:!1}},icon:{control:{labels:{undefined:`none`},type:`select`},mapping:o,options:[void 0,...Object.keys(o)]},inWideWindow:{table:{disable:!0}}},decorators:[e=>(0,v.jsx)(f,{inWideWindow:!0,style:{display:`inline-flex`,margin:0,paddingBlock:`var(--ams-menu-padding-block)`,paddingInline:`var(--ams-menu-padding-block)`},children:(0,v.jsx)(e,{})})],render:({children:e,...t})=>{let{accessibleName:n,inWideWindow:r,...i}=t;return(0,v.jsx)(f.Link,{...i,children:e})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems[0].text,
    href: '#',
    // @ts-expect-error Storybook uses the name of the icon as the value for the control.
    icon: 'PieChartFillIcon'
  },
  argTypes: {
    // @ts-expect-error Storybook displays this prop of Menu for Link because the meta for Menu is the default export.
    accessibleName: {
      table: {
        disable: true
      }
    },
    children: {
      control: 'text',
      table: {
        disable: false
      }
    },
    icon: {
      control: {
        labels: {
          undefined: 'none'
        },
        type: 'select'
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)]
    },
    // Storybook displays this prop of Menu for Link because the meta for Menu is the default export.
    inWideWindow: {
      table: {
        disable: true
      }
    }
  },
  decorators: [Story => <Menu inWideWindow style={{
    display: 'inline-flex',
    margin: 0,
    paddingBlock: 'var(--ams-menu-padding-block)',
    paddingInline: 'var(--ams-menu-padding-block)'
  }}>
        <Story />
      </Menu>],
  render: ({
    children,
    ...args
  }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    // @ts-expect-error TypeScript does not infer the correct type here
    const {
      accessibleName,
      inWideWindow,
      ...linkArgs
    } = args;
    return <Menu.Link {...linkArgs}>{children}</Menu.Link>;
    /* eslint-enable @typescript-eslint/no-unused-vars */
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Link`]}));D();export{w as Default,T as Link,E as __namedExportsOrder,C as default,D as n,g as t};