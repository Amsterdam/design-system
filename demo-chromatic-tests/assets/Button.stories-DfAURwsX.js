import{f as h,j as e,e as m}from"./iframe-CEbChPk6.js";import{B as b}from"./Button-BOc3IY4T.js";const{expect:g,fn:B}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Buttons/Button",component:b,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,onClick:B(),variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:h,options:[void 0,...Object.keys(h)]},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},o={},s={args:{children:"Annuleren",variant:"secondary"}},i={args:{children:"Terug",variant:"tertiary"}},c={args:{children:"Sluiten",icon:e.jsx(m,{})}},d={args:{children:"Sluiten",icon:e.jsx(m,{}),iconBefore:!0}},l={args:{children:"Sluiten",icon:e.jsx(m,{}),iconOnly:!0,variant:"tertiary"}},p={args:{children:"Vergunningsaanvraag verzenden"},decorators:[n=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(n,{})})]},f=["primary","secondary","tertiary"],S=["default","disabled","hover","icon"],u={args:{onClick:B()},parameters:{pseudo:{hover:[".hover"]}},play:async({args:n,canvas:a,userEvent:t})=>{g(n.onClick).not.toHaveBeenCalled();for(const r of f)for(const y of S){const v=`${r}-${y}`;if(y==="disabled"){const x=await a.findByTestId(v);await g(x).toBeDisabled()}else await t.click(await a.findByTestId(v)),await g(n.onClick).toHaveBeenCalledWith({variantState:v})}},render:n=>e.jsx("table",{children:e.jsx("tbody",{children:f.map(a=>e.jsx("tr",{children:S.map(t=>{const r=`${a}-${t}`;return e.jsx("td",{children:e.jsx(b,{className:t==="hover"?"hover":void 0,"data-testid":r,disabled:t==="disabled",icon:t==="icon"?e.jsx(m,{}):void 0,onClick:()=>n.onClick({variantState:r}),variant:a,children:r})},r)})},a))})}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    for (const variant of variants) {
      for (const state of states) {
        const variantState = \`\${variant}-\${state}\`;
        if (state === 'disabled') {
          const element = await canvas.findByTestId(variantState);
          await expect(element).toBeDisabled();
        } else {
          await userEvent.click(await canvas.findByTestId(variantState));
          await expect(args.onClick).toHaveBeenCalledWith({
            variantState
          });
        }
      }
    }
  },
  render: args => <table>
      <tbody>
        {variants.map(variant => <tr key={variant}>
            {states.map(state => {
          const variantState = \`\${variant}-\${state}\`;
          return <td key={variantState}>
                  <Button className={state === 'hover' ? 'hover' : undefined} data-testid={variantState} disabled={state === 'disabled'} icon={state === 'icon' ? <CloseIcon /> : undefined}
            // @ts-expect-error: We can pass arguments to the fn function from storybook/test. Only the typing gets wrong as we need to pass it via the args of the story.
            // The component onClick only accepts a MouseEventHandler without arguments.
            onClick={() => args.onClick({
              variantState
            })} variant={variant as ButtonProps['variant']}>
                    {variantState}
                  </Button>
                </td>;
        })}
          </tr>)}
      </tbody>
    </table>,
  tags: ['!dev', '!autodocs']
}`,...u.parameters?.docs?.source}}};const T=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping","TestCases"],I=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,Secondary:s,Tertiary:i,TestCases:u,TextWrapping:p,WithIcon:c,WithIconBefore:d,WithIconOnly:l,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{I as B,o as P,s as S,i as T,c as W,d as a,l as b,p as c};
