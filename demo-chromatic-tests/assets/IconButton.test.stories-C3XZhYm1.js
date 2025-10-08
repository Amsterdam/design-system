import{j as s,e as r}from"./iframe-BY5DnIrk.js";import{I as a}from"./IconButton-cupH_aFG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C6U4dxSv.js";const h={title:"Components/Buttons/Icon Button",component:a,args:{label:"Test button"}},d=["heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","large","small"],i=["default","disabled","hovered","contrast","inverse"],c=["contrast","inverse"],o={parameters:{pseudo:{hover:".hover"}},render:t=>s.jsx("table",{children:s.jsx("tbody",{children:d.map(n=>s.jsx("tr",{children:i.map(e=>s.jsx("td",{children:s.jsx(a,{...t,className:e==="hovered"?"hover":void 0,color:c.includes(e)?e:void 0,disabled:e==="disabled",size:n,svg:r})},`${e}-${n}`))},n))})}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: '.hover'
    }
  },
  render: args => <table>
      <tbody>
        {sizes.map(size => <tr key={size}>
            {variants.map(variant => <td key={\`\${variant}-\${size}\`}>
                <IconButton {...args} className={variant === 'hovered' ? 'hover' : undefined} color={colorVariants.includes(variant) ? variant as IconButtonProps['color'] : undefined} disabled={variant === 'disabled'} size={size} svg={Icons.CloseIcon} />
              </td>)}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...o.parameters?.docs?.source}}};const u=["Test"];export{o as Test,u as __namedExportsOrder,h as default};
