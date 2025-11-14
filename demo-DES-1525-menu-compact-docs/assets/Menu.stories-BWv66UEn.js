import{r as d,j as e,c as p,g as u,_ as b,$ as k,a0 as x,a1 as _,W as w}from"./iframe-BZluX4x9.js";import{B as m}from"./useIsAfterBreakpoint-BtUX0WoV.js";import{I as v}from"./Icon-DfGWdGcD.js";const h=d.forwardRef(({children:n,className:a,color:s,icon:i,...t},c)=>e.jsx("li",{children:e.jsxs("a",{...t,className:p("ams-menu__link",s&&`ams-menu__link--${s}`,a),ref:c,children:[e.jsx(v,{className:"ams-menu__icon",svg:i}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"The icon to display for the menu icon. Use the filled variant.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const g=d.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:s,inWideWindow:i,...t},c)=>{const y=i?"nav":"div";return e.jsxs(y,{...t,"aria-labelledby":i?"primary-navigation":void 0,className:p("ams-menu",i&&"ams-menu--in-wide-window",s),ref:c,children:[i&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});g.displayName="Menu";const r=Object.assign(g,{Link:h});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,f=[{href:"#",icon:e.jsx(b,{}),text:"Dashboard"},{href:"#",icon:e.jsx(k,{}),text:"Projecten"},{href:"#",icon:e.jsx(x,{}),text:"Rapportages"},{href:"#",icon:e.jsx(_,{}),text:"Analyses"},{href:"#",icon:e.jsx(w,{}),text:"Instellingen"}],W=n=>{const[,a]=M();return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const s=window.matchMedia(`(min-width: ${m.wide})`);a({inWideWindow:s.matches});const i=t=>a({inWideWindow:t.matches});return s.addEventListener("change",i),()=>s.removeEventListener("change",i)},[a]),e.jsx(n,{})},j={title:"Components/Navigation/Menu",component:r,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${m.wide}.`,table:{category:"Derived"}}},decorators:[W],parameters:{themes:{themeOverride:"Compact"}}};r.Link;const o={args:{children:f.map(({text:n,...a})=>d.createElement(r.Link,{...a,key:n},n))}},l={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{display:"inline-flex",margin:0,paddingBlock:"var(--ams-menu-padding-block)",paddingInline:"var(--ams-menu-padding-block)"},children:e.jsx(n,{})})],render:({children:n,...a})=>{const{accessibleName:s,inWideWindow:i,...t}=a;return e.jsx(r.Link,{...t,children:n})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    // @ts-expect-error Typescript does not infer the correct type here
    const {
      accessibleName,
      inWideWindow,
      ...linkArgs
    } = args;
    return <Menu.Link {...linkArgs}>{children}</Menu.Link>;
    /* eslint-enable @typescript-eslint/no-unused-vars */
  }
}`,...l.parameters?.docs?.source}}};const L=["Default","Link"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Link:l,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{l as L,r as M,O as a,j as m};
