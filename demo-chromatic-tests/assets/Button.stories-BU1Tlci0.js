import{f as C,j as e,e as a,G as p,C as v}from"./iframe-BudgzWKU.js";import{B as t}from"./Button-xFzL344v.js";const{expect:h,fn:x}=__STORYBOOK_MODULE_TEST__,b={title:"Components/Buttons/Button",component:t,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:C,options:[void 0,...Object.keys(C)]},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},o={play:async({canvas:r,userEvent:y})=>{await y.click(r.getByText("Versturen"))}},s={args:{children:"Annuleren",variant:"secondary"}},i={args:{children:"Terug",variant:"tertiary"}},c={args:{children:"Sluiten",icon:e.jsx(a,{})}},l={args:{children:"Sluiten",icon:e.jsx(a,{}),iconBefore:!0}},d={args:{children:"Sluiten",icon:e.jsx(a,{}),iconOnly:!0,variant:"tertiary"}},u={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]},m={args:{onClick:x()},parameters:{pseudo:{hover:[".hover"]}},play:async({args:r,canvas:y,userEvent:g})=>{h(r.onClick).not.toHaveBeenCalled();for(let n=0;n<=7;n++)await g.click(y.getByTestId(`test-button-${n}`)),h(r.onClick).toHaveReturnedTimes(n<4?n+1:4)},render:r=>e.jsxs(p,{children:[e.jsx(p.Cell,{span:4,children:e.jsxs(v,{children:[e.jsx(t,{"data-testid":"test-button-0",onClick:r.onClick,variant:"primary",children:"Primary"}),e.jsx(t,{"data-testid":"test-button-1",onClick:r.onClick,variant:"secondary",children:"Secondary"}),e.jsx(t,{"data-testid":"test-button-2",onClick:r.onClick,variant:"tertiary",children:"Tertiary"}),e.jsx(t,{"data-testid":"test-button-3",icon:e.jsx(a,{}),onClick:r.onClick,variant:"primary",children:"Close"})]})}),e.jsx(p.Cell,{span:4,children:e.jsxs(v,{children:[e.jsx(t,{"data-testid":"test-button-4",disabled:!0,onClick:r.onClick,variant:"primary",children:"Primary Disabled"}),e.jsx(t,{"data-testid":"test-button-5",disabled:!0,onClick:r.onClick,variant:"secondary",children:"Secondary Disabled"}),e.jsx(t,{"data-testid":"test-button-6",disabled:!0,onClick:r.onClick,variant:"tertiary",children:"Tertiary Disabled"}),e.jsx(t,{"data-testid":"test-button-7",disabled:!0,icon:e.jsx(a,{}),onClick:r.onClick,variant:"primary",children:"Close Disabled"})]})}),e.jsx(p.Cell,{span:4,children:e.jsxs(v,{children:[e.jsx(t,{className:"hover",variant:"primary",children:"Primary hover"}),e.jsx(t,{className:"hover",variant:"secondary",children:"Secondary hover"}),e.jsx(t,{className:"hover",variant:"tertiary",children:"Tertiary hover"}),e.jsx(t,{className:"hover",icon:e.jsx(a,{}),variant:"primary",children:"Close hover"})]})})]}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Versturen'));
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    for (let idx = 0; idx <= 7; idx++) {
      await userEvent.click(canvas.getByTestId(\`test-button-\${idx}\`));
      expect(args.onClick).toHaveReturnedTimes(idx < 4 ? idx + 1 : 4);
    }
  },
  render: args => <Grid>
      <Grid.Cell span={4}>
        <Column>
          <Button data-testid="test-button-0" onClick={args.onClick} variant="primary">
            Primary
          </Button>
          <Button data-testid="test-button-1" onClick={args.onClick} variant="secondary">
            Secondary
          </Button>
          <Button data-testid="test-button-2" onClick={args.onClick} variant="tertiary">
            Tertiary
          </Button>
          <Button data-testid="test-button-3" icon={<CloseIcon />} onClick={args.onClick} variant="primary">
            Close
          </Button>
        </Column>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Column>
          <Button data-testid="test-button-4" disabled onClick={args.onClick} variant="primary">
            Primary Disabled
          </Button>
          <Button data-testid="test-button-5" disabled onClick={args.onClick} variant="secondary">
            Secondary Disabled
          </Button>
          <Button data-testid="test-button-6" disabled onClick={args.onClick} variant="tertiary">
            Tertiary Disabled
          </Button>
          <Button data-testid="test-button-7" disabled icon={<CloseIcon />} onClick={args.onClick} variant="primary">
            Close Disabled
          </Button>
        </Column>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Column>
          <Button className="hover" variant="primary">
            Primary hover
          </Button>
          <Button className="hover" variant="secondary">
            Secondary hover
          </Button>
          <Button className="hover" variant="tertiary">
            Tertiary hover
          </Button>
          <Button className="hover" icon={<CloseIcon />} variant="primary">
            Close hover
          </Button>
        </Column>
      </Grid.Cell>
    </Grid>,
  tags: ['!dev', '!autodocs']
}`,...m.parameters?.docs?.source}}};const k=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping","TestCases"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,Secondary:s,Tertiary:i,TestCases:m,TextWrapping:u,WithIcon:c,WithIconBefore:l,WithIconOnly:d,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{S as B,o as P,s as S,i as T,c as W,l as a,d as b,u as c};
