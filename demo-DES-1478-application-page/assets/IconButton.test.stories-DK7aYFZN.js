import{j as e,e as d}from"./iframe-CeM-5kIc.js";import{i as c}from"./Icon-Ux5P9hU5.js";import{i as r,I as l}from"./IconButton-BUYky3X6.js";import{m as u}from"./IconButton.stories-CA3Xe_WH.js";import"./preload-helper-PPVm8Dsz.js";const I={...u,title:"Components/Buttons/Icon Button"},m=["default","disabled","hovered",...r],n={parameters:{pseudo:{hover:".hover"}},render:s=>e.jsx("table",{children:e.jsx("tbody",{children:c.map(t=>e.jsx("tr",{children:m.map(o=>{const a=i=>r.includes(i);return e.jsx("td",{children:e.jsx(l,{...s,className:o==="hovered"?"hover":void 0,color:a(o)?o:void 0,disabled:o==="disabled",size:t,svg:d})},`${o}-${t}`)})},t))})}),tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: '.hover'
    }
  },
  render: args => {
    return <table>
        <tbody>
          {iconSizes.map(size => <tr key={size}>
              {variants.map(variant => {
            const isIconButtonColor = (variant: string): variant is IconButtonColor => iconButtonColors.includes(variant as IconButtonColor);
            return <td key={\`\${variant}-\${size}\`}>
                    <IconButton {...args} className={variant === 'hovered' ? 'hover' : undefined} color={isIconButtonColor(variant) ? variant : undefined} disabled={variant === 'disabled'} size={size} svg={Icons.CloseIcon} />
                  </td>;
          })}
            </tr>)}
        </tbody>
      </table>;
  },
  tags: ['!dev', '!autodocs']
}`,...n.parameters?.docs?.source}}};const C=["Test"];export{n as Test,C as __namedExportsOrder,I as default};
