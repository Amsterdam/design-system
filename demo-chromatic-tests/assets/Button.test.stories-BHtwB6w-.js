import{j as t,e as s}from"./iframe-BY5DnIrk.js";import{B as o}from"./Button-DMdWxLuE.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C6U4dxSv.js";const l={title:"Components/Buttons/Button",component:o},d=["primary","secondary","tertiary"],i=["default","disabled","hover","icon"],a={parameters:{pseudo:{hover:[".hover"]}},render:()=>t.jsx("table",{children:t.jsx("tbody",{children:d.map(n=>t.jsx("tr",{children:i.map(e=>{const r=`${n}-${e}`;return t.jsx("td",{children:t.jsx(o,{className:e==="hover"?"hover":void 0,disabled:e==="disabled",icon:e==="icon"?t.jsx(s,{}):void 0,variant:n,children:r})},r)})},n))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                  <Button className={state === 'hover' ? 'hover' : undefined} disabled={state === 'disabled'} icon={state === 'icon' ? <CloseIcon /> : undefined} variant={variant as ButtonProps['variant']}>
                    {variantState}
                  </Button>
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...a.parameters?.docs?.source}}};const u=["Test"];export{a as Test,u as __namedExportsOrder,l as default};
