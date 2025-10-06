import{f as p,j as i,r as C,e as b}from"./iframe-CoOGSQqs.js";import{i as h}from"./Icon-BvKYcyE8.js";import{I as m}from"./IconButton-3dQdnbXW.js";const{expect:l,fn:y}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Buttons/Icon Button",component:m,args:{disabled:!1,label:"Sluiten",size:void 0},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...h]},svg:{control:{type:"select"},mapping:p,options:Object.keys(p)}}},t={},o={args:{color:"contrast"}},s={args:{color:"inverse"}},v=["heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","large","small"],u=["default","disabled","hovered","contrast","inverse"],S=["contrast","inverse"],r={args:{label:"Sluiten",onClick:y()},argTypes:{onClick:{action:"clicked"}},parameters:{pseudo:{hover:".hover"}},play:async({args:a,canvas:n,userEvent:e})=>{l(a.onClick).not.toHaveBeenCalled();for(const g of v)for(const d of u){const c=`${d}-${g}`;if(d==="disabled"){const f=await n.findByTestId(c);await l(f).toBeDisabled()}else await e.click(await n.findByTestId(c)),await l(a.onClick).toHaveBeenCalledWith({variantSize:c})}},render:a=>i.jsx("table",{children:i.jsx("tbody",{children:v.map(n=>i.jsx("tr",{children:i.jsx("td",{children:u.map(e=>C.createElement(m,{...a,className:e==="hovered"?"hover":void 0,color:S.includes(e)?e:void 0,"data-testid":`${e}-${n}`,disabled:e==="disabled",key:`${e}-${n}`,onClick:()=>a.onClick?.({variantSize:`${e}-${n}`}),size:n,svg:b}))})},n))})}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sluiten',
    onClick: fn()
  },
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
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    expect(args.onClick).not.toHaveBeenCalled();
    for (const size of sizes) {
      for (const variant of variants) {
        const variantSize = \`\${variant}-\${size}\`;
        if (variant === 'disabled') {
          const element = await canvas.findByTestId(variantSize);
          await expect(element).toBeDisabled();
        } else {
          await userEvent.click(await canvas.findByTestId(variantSize));
          await expect(args.onClick).toHaveBeenCalledWith({
            variantSize
          });
        }
      }
    }
  },
  render: args => <table>
      <tbody>
        {sizes.map(size => <tr key={size}>
            <td>
              {variants.map(variant => <IconButton {...args} className={variant === 'hovered' ? 'hover' : undefined} color={colorVariants.includes(variant) ? variant as IconButtonProps['color'] : undefined} data-testid={\`\${variant}-\${size}\`} disabled={variant === 'disabled'} key={\`\${variant}-\${size}\`}
          // @ts-expect-error: We can pass arguments to the fn function from storybook/test. Only the typing gets wrong as we need to pass it via the args of the story.
          // The component onClick only accepts a MouseEventHandler without arguments.
          onClick={() => args.onClick?.({
            variantSize: \`\${variant}-\${size}\`
          })} size={size} svg={Icons.CloseIcon} />)}
            </td>
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...r.parameters?.docs?.source}}};const z=["Default","ContrastColour","InverseColour","TestCases"],x=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:t,InverseColour:s,TestCases:r,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{o as C,x as I,s as a};
