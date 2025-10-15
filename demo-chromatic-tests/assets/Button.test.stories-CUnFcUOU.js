import{j as t,e as s}from"./iframe-gDAtt-yt.js";import{b as o,B as d}from"./Button-Cz1w-CYX.js";import{m as i}from"./Button.stories-CnJ1Pprw.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-B0Mk6HL4.js";const b={...i},c=["default","disabled","hover","icon"],a={parameters:{pseudo:{hover:[".hover"]}},render:()=>t.jsx("table",{children:t.jsx("tbody",{children:o.map(n=>t.jsx("tr",{children:c.map(e=>{const r=`${n}-${e}`;return t.jsx("td",{children:t.jsx(d,{className:e==="hover"?"hover":void 0,disabled:e==="disabled",icon:e==="icon"?t.jsx(s,{}):void 0,variant:n,children:r})},r)})},n))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const h=["Test"];export{a as Test,h as __namedExportsOrder,b as default};
