import{j as t,e as o}from"./iframe-BMBTRY8P.js";import{B as s}from"./Button-CkEhmT5D.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DsFFMiic.js";const l={title:"Components/Buttons/Button",component:s},d=["primary","secondary","tertiary"],i=["default","disabled","hover","icon"],a={parameters:{pseudo:{hover:[".hover"]}},render:()=>t.jsx("table",{children:t.jsx("tbody",{children:d.map(n=>t.jsx("tr",{children:i.map(e=>{const r=`${n}-${e}`;return t.jsx("td",{children:t.jsx(s,{className:e==="hover"?"hover":void 0,"data-testid":r,disabled:e==="disabled",icon:e==="icon"?t.jsx(o,{}):void 0,variant:n,children:r})},r)})},n))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['.hover']
    }
  },
  render: () => <table>
      <tbody>
        {variants.map(variant => <tr key={variant}>
            {states.map(state => {
          const variantState = \`\${variant}-\${state}\`;
          return <td key={variantState}>
                  <Button className={state === 'hover' ? 'hover' : undefined} data-testid={variantState} disabled={state === 'disabled'} icon={state === 'icon' ? <CloseIcon /> : undefined} variant={variant as ButtonProps['variant']}>
                    {variantState}
                  </Button>
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...a.parameters?.docs?.source}}};const u=["Test"];export{a as Test,u as __namedExportsOrder,l as default};
