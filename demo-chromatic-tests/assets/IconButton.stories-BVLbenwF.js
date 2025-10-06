import{f as v,j as t,e as C}from"./iframe-C8wbfc6d.js";import{i as h}from"./Icon-B_QEBXCC.js";import{I as g}from"./IconButton-u6YVvMHk.js";const{expect:l,fn:y}=__STORYBOOK_MODULE_TEST__,b={title:"Components/Buttons/Icon Button",component:g,args:{disabled:!1,label:"Sluiten",size:void 0},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...h]},svg:{control:{type:"select"},mapping:v,options:Object.keys(v)}}},o={},s={args:{color:"contrast"}},r={args:{color:"inverse"}},u=["heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","large","small"],m=["default","disabled","hovered","contrast","inverse"],z=["contrast","inverse"],i={args:{onClick:y()},argTypes:{onClick:{action:"clicked"}},parameters:{pseudo:{hover:".hover"}},play:async({args:a,canvas:n,userEvent:e})=>{l(a.onClick).not.toHaveBeenCalled();for(const c of u)for(const p of m){const d=`${p}-${c}`;if(p==="disabled"){const f=await n.findByTestId(d);await l(f).toBeDisabled()}else await e.click(await n.findByTestId(d)),await l(a.onClick).toHaveBeenCalledWith({variantSize:d})}},render:a=>t.jsx("table",{children:t.jsx("tbody",{children:u.map(n=>t.jsx("tr",{children:m.map(e=>{const c=`${e}-${n}`;return t.jsx("td",{children:t.jsx(g,{...a,className:e==="hovered"?"hover":void 0,color:z.includes(e)?e:void 0,"data-testid":c,disabled:e==="disabled",onClick:()=>a.onClick?.({variantSize:c}),size:n,svg:C})},`${e}-${n}`)})},n))})}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
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
            {variants.map(variant => {
          const variantSize = \`\${variant}-\${size}\`;
          return <td key={\`\${variant}-\${size}\`}>
                  <IconButton {...args} className={variant === 'hovered' ? 'hover' : undefined} color={colorVariants.includes(variant) ? variant as IconButtonProps['color'] : undefined} data-testid={variantSize} disabled={variant === 'disabled'}
            // @ts-expect-error: We can pass arguments to the fn function from storybook/test. Only the typing gets wrong as we need to pass it via the args of the story.
            // The component onClick only accepts a MouseEventHandler without arguments.
            onClick={() => args.onClick?.({
              variantSize
            })} size={size} svg={Icons.CloseIcon} />
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...i.parameters?.docs?.source}}};const k=["Default","ContrastColour","InverseColour","TestCases"],x=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:s,Default:o,InverseColour:r,TestCases:i,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{s as C,x as I,r as a};
