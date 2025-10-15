import{j as e,e as i}from"./iframe-gDAtt-yt.js";import{i as c}from"./Icon-B0Mk6HL4.js";import{i as s,I as l}from"./IconButton-DujN58XV.js";import{m as u}from"./IconButton.stories-C-GF_eL6.js";import"./preload-helper-PPVm8Dsz.js";const g={...u},m=["default","disabled","hovered",...s],r={parameters:{pseudo:{hover:".hover"}},render:t=>e.jsx("table",{children:e.jsx("tbody",{children:c.map(n=>e.jsx("tr",{children:m.map(o=>{const a=d=>s.includes(d);return e.jsx("td",{children:e.jsx(l,{...t,className:o==="hovered"?"hover":void 0,color:a(o)?o:void 0,disabled:o==="disabled",size:n,svg:i})},`${o}-${n}`)})},n))})}),tags:["!dev","!autodocs"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const x=["Test"];export{r as Test,x as __namedExportsOrder,g as default};
