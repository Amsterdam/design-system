import{r as l,j as e,c as m,a as p,ae as k,af as x,ag as _,ah as v,V as M}from"./iframe-DlOpQdHZ.js";import{u as W,B as h}from"./useViewportHasMinWidth-C5dsBO3J.js";import{I as j}from"./Icon-B5xyRDZ8.js";const g=l.forwardRef(({children:n,className:a,color:i,icon:s,...t},c)=>e.jsx("li",{children:e.jsxs("a",{...t,className:m("ams-menu__link",i&&`ams-menu__link--${i}`,a),ref:c,children:[e.jsx(j,{className:"ams-menu__icon",svg:s}),n]})}));g.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"The icon to display for the menu icon. Use the filled variant.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const f=l.forwardRef(({accessibleName:n="Hoofdnavigatie",children:a,className:i,inWideWindow:s,...t},c)=>{const b=s?"nav":"div",w=W("wide"),u=s&&w?"primary-navigation":void 0;return e.jsxs(b,{...t,"aria-labelledby":u,className:m("ams-menu",s&&"ams-menu--in-wide-window",i),ref:c,children:[u&&e.jsx("h2",{"aria-hidden":"true",className:"ams-visually-hidden",id:u,children:n}),e.jsx("ul",{className:"ams-menu__list",children:a})]})});f.displayName="Menu";const r=Object.assign(f,{Link:g});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,y=[{href:"#",icon:e.jsx(k,{}),text:"Dashboard"},{href:"#",icon:e.jsx(x,{}),text:"Projecten"},{href:"#",icon:e.jsx(_,{}),text:"Rapportages"},{href:"#",icon:e.jsx(v,{}),text:"Analyses"},{href:"#",icon:e.jsx(M,{}),text:"Instellingen"}],I=n=>{const[,a]=L();return l.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const i=window.matchMedia(`(min-width: ${h.wide})`);a({inWideWindow:i.matches});const s=t=>a({inWideWindow:t.matches});return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[a]),e.jsx(n,{})},N={title:"Components/Navigation/Menu",component:r,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${h.wide}.`,table:{category:"Derived"}}},decorators:[I],parameters:{themes:{themeOverride:"Compact"}}};r.Link;const o={args:{children:y.map(({text:n,...a})=>l.createElement(r.Link,{...a,key:n},n))}},d={args:{children:y[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:p,options:[void 0,...Object.keys(p)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{display:"inline-flex",margin:0,paddingBlock:"var(--ams-menu-padding-block)",paddingInline:"var(--ams-menu-padding-block)"},children:e.jsx(n,{})})],render:({children:n,...a})=>{const{accessibleName:i,inWideWindow:s,...t}=a;return e.jsx(r.Link,{...t,children:n})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const S=["Default","Link"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Link:d,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{d as L,r as M,A as a,N as m};
