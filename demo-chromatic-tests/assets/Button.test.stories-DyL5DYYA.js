import{j as t,e as s}from"./iframe-DcGXUi--.js";import{B as o,b as d}from"./Button-ByK5F49f.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-m14i8R6q.js";const p={title:"Components/Buttons/Button",component:o,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,variant:"primary"}},i=["default","disabled","hover","icon"],a={parameters:{pseudo:{hover:[".hover"]}},render:()=>t.jsx("table",{children:t.jsx("tbody",{children:d.map(n=>t.jsx("tr",{children:i.map(e=>{const r=`${n}-${e}`;return t.jsx("td",{children:t.jsx(o,{className:e==="hover"?"hover":void 0,disabled:e==="disabled",icon:e==="icon"?t.jsx(s,{}):void 0,variant:n,children:r})},r)})},n))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['.hover']
    }
  },
  render: () => <table>
      <tbody>
        {buttonVariants.map(variant => <tr key={variant}>
            {states.map(state => {
          const variantState = \`\${variant}-\${state}\`;
          return <td key={variantState}>
                  <Button className={state === 'hover' ? 'hover' : undefined} disabled={state === 'disabled'} icon={state === 'icon' ? <CloseIcon /> : undefined} variant={variant as ButtonProps['variant']}>
                    {variantState}
                  </Button>
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...a.parameters?.docs?.source}}};const u=["Test"];export{a as Test,u as __namedExportsOrder,p as default};
