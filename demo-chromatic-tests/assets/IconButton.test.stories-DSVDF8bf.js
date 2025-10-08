import{j as n,e as d}from"./iframe-CWw67oni.js";import{I as t}from"./IconButton-D0r6JDLN.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BUv0Au03.js";const h={title:"Components/Buttons/Icon Button",component:t,args:{label:"Sluiten"}},i=["heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","large","small"],c=["default","disabled","hovered","contrast","inverse"],l=["contrast","inverse"],a={argTypes:{onClick:{action:"clicked"}},parameters:{pseudo:{hover:".hover"}},render:o=>n.jsx("table",{children:n.jsx("tbody",{children:i.map(s=>n.jsx("tr",{children:c.map(e=>{const r=`${e}-${s}`;return n.jsx("td",{children:n.jsx(t,{...o,className:e==="hovered"?"hover":void 0,color:l.includes(e)?e:void 0,"data-testid":r,disabled:e==="disabled",size:s,svg:d})},`${e}-${s}`)})},s))})}),tags:["!dev","!autodocs"]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  },
  parameters: {
    pseudo: {
      hover: '.hover'
    }
  },
  render: args => <table>
      <tbody>
        {sizes.map(size => <tr key={size}>
            {variants.map(variant => {
          const variantSize = \`\${variant}-\${size}\`;
          return <td key={\`\${variant}-\${size}\`}>
                  <IconButton {...args} className={variant === 'hovered' ? 'hover' : undefined} color={colorVariants.includes(variant) ? variant as IconButtonProps['color'] : undefined} data-testid={variantSize} disabled={variant === 'disabled'} size={size} svg={Icons.CloseIcon} />
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...a.parameters?.docs?.source}}};const g=["TestCases"];export{a as TestCases,g as __namedExportsOrder,h as default};
