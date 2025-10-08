import{j as s,e as d}from"./iframe-BMBTRY8P.js";import{I as n}from"./IconButton-DINNRQxo.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DsFFMiic.js";const h={title:"Components/Buttons/Icon Button",component:n,args:{label:"Test button"}},i=["heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","large","small"],c=["default","disabled","hovered","contrast","inverse"],l=["contrast","inverse"],t={parameters:{pseudo:{hover:".hover"}},render:o=>s.jsx("table",{children:s.jsx("tbody",{children:i.map(a=>s.jsx("tr",{children:c.map(e=>{const r=`${e}-${a}`;return s.jsx("td",{children:s.jsx(n,{...o,className:e==="hovered"?"hover":void 0,color:l.includes(e)?e:void 0,"data-testid":r,disabled:e==="disabled",size:a,svg:d})},`${e}-${a}`)})},a))})}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["TestCases"];export{t as TestCases,g as __namedExportsOrder,h as default};
