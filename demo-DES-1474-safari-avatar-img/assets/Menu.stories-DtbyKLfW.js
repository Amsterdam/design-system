import{r as d,j as e,c as p,g as u,Q as b,V as k,W as x,X as w,Y as _}from"./iframe-DUEA43bp.js";import{B as m}from"./useIsAfterBreakpoint-C-DaLXQD.js";import{I as v}from"./Icon-9ee5fdDj.js";const h=d.forwardRef(({children:n,className:i,color:s,icon:a,...t},c)=>e.jsx("li",{children:e.jsxs("a",{...t,className:p("ams-menu__link",s&&`ams-menu__link--${s}`,i),ref:c,children:[e.jsx(v,{className:"ams-menu__icon",svg:a}),n]})}));h.displayName="Menu.Link";try{Menu.Link.displayName="Menu.Link",Menu.Link.__docgenInfo={description:"",displayName:"Menu.Link",props:{color:{defaultValue:null,description:`Changes the text colour for readability on a light or dark background.
@deprecated The menu has a dark background now, so this is no longer needed.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!0,type:{name:"Function | ReactNode"}}}}}catch{}const g=d.forwardRef(({accessibleName:n="Hoofdnavigatie",children:i,className:s,inWideWindow:a,...t},c)=>{const y=a?"nav":"div";return e.jsxs(y,{...t,"aria-labelledby":a?"primary-navigation":void 0,className:p("ams-menu",a&&"ams-menu--in-wide-window",s),ref:c,children:[a&&e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:n}),e.jsx("ul",{className:"ams-menu__list",children:i})]})});g.displayName="Menu";const r=Object.assign(g,{Link:h});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{accessibleName:{defaultValue:{value:"Hoofdnavigatie"},description:"A name for this menu, which screen readers will announce.\nOnly applies to the `inWideWindow` appearance: otherwise, the menu is in the Page Header, which ensures accessibility itself.",name:"accessibleName",required:!1,type:{name:"string"}},inWideWindow:{defaultValue:null,description:"Hides the component on narrow windows.",name:"inWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,f=[{href:"#",icon:e.jsx(b,{}),text:"Dashboard"},{href:"#",icon:e.jsx(k,{}),text:"Projecten"},{href:"#",icon:e.jsx(x,{}),text:"Rapportages"},{href:"#",icon:e.jsx(w,{}),text:"Analyses"},{href:"#",icon:e.jsx(_,{}),text:"Instellingen"}],W=n=>{const[,i]=M();return d.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const s=window.matchMedia(`(min-width: ${m.wide})`);i({inWideWindow:s.matches});const a=t=>i({inWideWindow:t.matches});return s.addEventListener("change",a),()=>s.removeEventListener("change",a)},[i]),e.jsx(n,{})},j={title:"Components/Navigation/Menu",component:r,args:{inWideWindow:!1},argTypes:{inWideWindow:{control:{disable:!0},description:`This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${m.wide}.`,table:{category:"Derived"}}},decorators:[W]};r.Link;const o={args:{children:f.map(({text:n,...i})=>d.createElement(r.Link,{...i,key:n},n))}},l={args:{children:f[0].text,href:"#",icon:"PieChartFillIcon"},argTypes:{accessibleName:{table:{disable:!0}},children:{control:"text",table:{disable:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:u,options:[void 0,...Object.keys(u)]},inWideWindow:{table:{disable:!0}}},decorators:[n=>e.jsx(r,{inWideWindow:!0,style:{display:"inline-flex",margin:0,paddingBlock:"var(--ams-menu-padding-block)",paddingInline:"var(--ams-menu-padding-block)"},children:e.jsx(n,{})})],render:({children:n,...i})=>{const{accessibleName:s,inWideWindow:a,...t}=i;return e.jsx(r.Link,{...t,children:n})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
