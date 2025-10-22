import{r as u,j as e,c as p,f as m,O as b,Q as _,V as k,W as x,X as v}from"./iframe-CAAVQ-0I.js";import{I as w}from"./Icon-DTZKz0Wr.js";const h=u.forwardRef(({children:n,className:a,color:s,icon:i,...o},l)=>e.jsx("li",{children:e.jsxs("a",{...o,className:p("ams-menu__link",s&&`ams-menu__link--${s}`,a),ref:l,children:[e.jsx(w,{className:"ams-menu__icon",svg:i}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const g=u.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:s,inWideWindow:i,...o},l)=>{const t=i?"nav":"div";return e.jsxs(t,{...o,"aria-labelledby":i?"primary-navigation":void 0,className:p("ams-menu",i&&"ams-menu--in-wide-window",s),ref:l,children:[i&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});g.displayName="Menu";const r=Object.assign(g,{Link:h});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,f=[{href:"#",icon:e.jsx(b,{}),text:"Dashboard"},{href:"#",icon:e.jsx(_,{}),text:"Projecten"},{href:"#",icon:e.jsx(k,{}),text:"Rapportages"},{href:"#",icon:e.jsx(x,{}),text:"Analyses"},{href:"#",icon:e.jsx(v,{}),text:"Instellingen"}],y=72.5,j=n=>{const[,a]=M(),s=u.useRef(null);return u.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const i=window.matchMedia(`(min-width: ${y}rem)`),o=t=>{s.current!==t&&(s.current=t,a({inWideWindow:t}))};o(i.matches);const l=t=>o(t.matches);return i.addEventListener("change",l),()=>i.removeEventListener("change",l)},[a]),e.jsx(n,{})},I={title:"Components/Navigation/Menu",component:r,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${y}rem.`,table:{category:"Derived"}}},decorators:[j]};r.Link;const c={args:{children:f.map(({text:n,...a})=>u.createElement(r.Link,{...a,key:n},n))}},d={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:m,options:[void 0,...Object.keys(m)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{display:"inline-flex",margin:0,paddingBlock:"var(--ams-menu-padding-block)",paddingInline:"var(--ams-menu-padding-block)"},children:e.jsx(n,{})})],render:({children:n,...a})=>e.jsx(r.Link,{...a,children:n})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems[0].text,
    href: '#',
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
  }) => <Menu.Link {...args}>{children}</Menu.Link>
}`,...d.parameters?.docs?.source}}};const L=["Default","Link"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Link:d,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{d as L,S as M};
