import{r as u,j as e,c as p,f as m,O as _,Q as b,V as w,W as k,X as x}from"./iframe-CdSoLAil.js";import{I as v}from"./Icon-DmvVfwW4.js";const h=u.forwardRef(({children:n,className:a,color:t,icon:s,...o},c)=>e.jsx("li",{children:e.jsxs("a",{...o,className:p("ams-menu__link",t&&`ams-menu__link--${t}`,a),ref:c,children:[e.jsx(v,{className:"ams-menu__icon",svg:s}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const g=u.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:t,inWideWindow:s,...o},c)=>{const i=s?"div":"nav";return e.jsxs(i,{...o,"aria-labelledby":s?"primary-navigation":void 0,className:p("ams-menu",s&&"ams-menu--in-wide-window",t),ref:c,children:[s&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});g.displayName="Menu";const r=Object.assign(g,{Link:h});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,f=[{href:"#",icon:e.jsx(_,{}),text:"Dashboard"},{href:"#",icon:e.jsx(b,{}),text:"Projecten"},{href:"#",icon:e.jsx(w,{}),text:"Rapportages"},{href:"#",icon:e.jsx(k,{}),text:"Analyses"},{href:"#",icon:e.jsx(x,{}),text:"Instellingen"}],y=72.5,j=n=>{const[,a]=M(),t=u.useRef(null);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const s=window.matchMedia(`(min-width: ${y}rem)`),o=i=>{t.current!==i&&(t.current=i,a({inWideWindow:i}))};o(s.matches);const c=i=>o(i.matches);return s.addEventListener("change",c),()=>s.removeEventListener("change",c)},[a]),e.jsx(n,{})},L={title:"Components/Navigation/Menu",component:r,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated. Is \`true\` when the viewport is wider than ${y}rem.`,table:{category:"Derived"}}},decorators:[j]};r.Link;const l={render:n=>e.jsx(r,{...n,children:f.map(({text:a,...t})=>u.createElement(r.Link,{...t,key:a},a))})},d={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:m,options:[void 0,...Object.keys(m)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{paddingBlockStart:"var(--ams-menu-padding-block)"},children:e.jsx(n,{})})],render:({children:n,...a})=>e.jsx(r.Link,{...a,children:n})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      {menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
          {text}
        </Menu.Link>)}
    </Menu>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems[0].text,
    href: '#',
    icon: 'PieChartFillIcon'
  },
  argTypes: {
    // @ts-expect-error Storybook displays this prop of Menu for Link – not sure why.
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
    // Storybook displays this prop of Menu for Link – not sure why.
    inWideWindow: {
      table: {
        disable: true
      }
    }
  },
  decorators: [Story => <Menu inWideWindow style={{
    paddingBlockStart: 'var(--ams-menu-padding-block)'
  }}>
        <Story />
      </Menu>],
  render: ({
    children,
    ...args
  }) => <Menu.Link {...args}>{children}</Menu.Link>
}`,...d.parameters?.docs?.source}}};const I=["Default","Link"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Link:d,__namedExportsOrder:I,default:L},Symbol.toStringTag,{value:"Module"}));export{d as L,S as M};
