import{j as t,e as o}from"./iframe-BCdq_638.js";import{b as d,B as i}from"./Button-B1-JrVoY.js";import{m as c}from"./Button.stories-BXEuAory.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BD6xmkcx.js";const h={...c,title:"Components/Buttons/Button"},m=["default","disabled","hover","icon"],a={parameters:{pseudo:{hover:[".hover"]}},render:s=>t.jsx("table",{children:t.jsx("tbody",{children:d.map(n=>t.jsx("tr",{children:m.map(e=>{const r=`${n}-${e}`;return t.jsx("td",{children:t.jsx(i,{...s,className:e==="hover"?"hover":void 0,disabled:e==="disabled",icon:e==="icon"?t.jsx(o,{}):void 0,variant:n,children:r})},r)})},n))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ['.hover']
    }
  },
  render: args => <table>
      <tbody>
        {buttonVariants.map(variant => <tr key={variant}>
            {states.map(state => {
          const variantState = \`\${variant}-\${state}\`;
          return <td key={variantState}>
                  <Button {...args} className={state === 'hover' ? 'hover' : undefined} disabled={state === 'disabled'} icon={state === 'icon' ? <CloseIcon /> : undefined} variant={variant as ButtonProps['variant']}>
                    {variantState}
                  </Button>
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...a.parameters?.docs?.source}}};const x=["Test"];export{a as Test,x as __namedExportsOrder,h as default};
