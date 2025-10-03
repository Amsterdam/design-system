import{f as x,j as n,e as a}from"./iframe-BEwbHx7-.js";import{B as m}from"./Button-CJnokKfq.js";const{expect:y,fn:b}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Buttons/Button",component:m,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,onClick:b(),variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:x,options:[void 0,...Object.keys(x)]},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}},play:async({args:r,canvas:e})=>{e.queryByRole("button")?.click(),y(r.onClick).toBeCalled()}},o={},t={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Sluiten",icon:n.jsx(a,{})}},c={args:{children:"Sluiten",icon:n.jsx(a,{}),iconBefore:!0}},d={args:{children:"Sluiten",icon:n.jsx(a,{}),iconOnly:!0,variant:"tertiary"}},l={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>n.jsx("div",{style:{maxWidth:"16rem"},children:n.jsx(r,{})})]},h=["primary","secondary","tertiary","icon"],B=["default","disabled"],p={args:{onClick:b()},parameters:{pseudo:{hover:[".hover"]}},play:async({args:r,canvas:e,userEvent:g})=>{y(r.onClick).not.toHaveBeenCalled();for(const C of B)for(let u=0;u<h.length;u++){const v=h[u];await g.click(e.getByTestId(C==="default"?v:`${C}-${v}`)),y(r.onClick).toHaveReturnedTimes(v==="disabled"?4:u+1)}},render:r=>n.jsx("table",{children:n.jsx("tbody",{children:h.map(e=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(m,{"data-testid":e,onClick:r.onClick,...e==="icon"?{icon:n.jsx(a,{})}:{},variant:e==="icon"?"primary":e,children:e==="icon"?"With Icon":e.charAt(0).toUpperCase()+e.slice(1)})}),n.jsx("td",{children:n.jsx(m,{"data-testid":`disabled-${e}`,disabled:!0,onClick:r.onClick,...e==="icon"?{icon:n.jsx(a,{})}:{},variant:e==="icon"?"primary":e,children:e==="icon"?"With Icon disabled":`${e.charAt(0).toUpperCase()+e.slice(1)} disabled`},`disabled-${e}`)}),n.jsx("td",{children:n.jsx(m,{className:"hover",...e==="icon"?{icon:n.jsx(a,{})}:{},variant:e==="icon"?"primary":e,children:e==="icon"?"With Icon hovered":`${e.charAt(0).toUpperCase()+e.slice(1)} hovered`},`hovered-${e}`)})]},e))})}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  },
  parameters: {
    pseudo: {
      hover: ['.hover']
    }
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    expect(args.onClick).not.toHaveBeenCalled();
    for (const row of rowsToTest) {
      for (let idx = 0; idx < variants.length; idx++) {
        const variant = variants[idx];
        await userEvent.click(canvas.getByTestId(row === 'default' ? variant : \`\${row}-\${variant}\`));
        expect(args.onClick).toHaveReturnedTimes(variant === 'disabled' ? 4 : idx + 1);
      }
    }
  },
  render: args => <table>
      <tbody>
        {variants.map(variant => <tr key={variant}>
            <td>
              <Button data-testid={variant} onClick={args.onClick} {...variant === 'icon' ? {
            icon: <CloseIcon />
          } : {}} variant={variant === 'icon' ? 'primary' : variant as ButtonProps['variant']}>
                {variant === 'icon' ? 'With Icon' : variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            </td>
            <td>
              <Button data-testid={\`disabled-\${variant}\`} disabled key={\`disabled-\${variant}\`} onClick={args.onClick} {...variant === 'icon' ? {
            icon: <CloseIcon />
          } : {}} variant={variant === 'icon' ? 'primary' : variant as ButtonProps['variant']}>
                {variant === 'icon' ? 'With Icon disabled' : \`\${variant.charAt(0).toUpperCase() + variant.slice(1)} disabled\`}
              </Button>
            </td>
            <td>
              <Button className="hover" key={\`hovered-\${variant}\`} {...variant === 'icon' ? {
            icon: <CloseIcon />
          } : {}} variant={variant === 'icon' ? 'primary' : variant as ButtonProps['variant']}>
                {variant === 'icon' ? 'With Icon hovered' : \`\${variant.charAt(0).toUpperCase() + variant.slice(1)} hovered\`}
              </Button>
            </td>
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...p.parameters?.docs?.source}}};const S=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping","TestCases"],T=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,Secondary:t,Tertiary:s,TestCases:p,TextWrapping:l,WithIcon:i,WithIconBefore:c,WithIconOnly:d,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{T as B,o as P,t as S,s as T,i as W,c as a,d as b,l as c};
