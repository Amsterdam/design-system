import{f as s,j as e,e as u}from"./iframe-DcGXUi--.js";import{i as r}from"./Icon-m14i8R6q.js";import{I as a,i}from"./IconButton-BLJEU4di.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Buttons/Icon Button",component:a,args:{disabled:!1,label:"Sluiten",size:void 0},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...r]},svg:{control:{type:"select"},mapping:s,options:Object.keys(s)}}},p=["default","disabled","hovered",...i],n={parameters:{pseudo:{hover:".hover"}},render:d=>e.jsx("table",{children:e.jsx("tbody",{children:r.map(t=>e.jsx("tr",{children:p.map(o=>{const c=l=>i.includes(l);return e.jsx("td",{children:e.jsx(a,{...d,className:o==="hovered"?"hover":void 0,color:c(o)?o:void 0,disabled:o==="disabled",size:t,svg:u})},`${o}-${t}`)})},t))})}),tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["Test"];export{n as Test,h as __namedExportsOrder,g as default};
