import{f as v,j as n,G as u,C as p,r as m,e as t}from"./iframe-BlUYFdm-.js";import{i as x}from"./Icon-BzXaKO6l.js";import{I as o}from"./IconButton-DeJsRtLU.js";const{expect:C,fn:b}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Buttons/Icon Button",component:o,args:{disabled:!1,label:"Sluiten",size:void 0},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},disabled:{description:"Prevents interaction. Avoid if possible."},size:{control:{labels:{undefined:"default"},type:"select"},options:[void 0,...x]},svg:{control:{type:"select"},mapping:v,options:Object.keys(v)}}},i={},l={args:{color:"contrast"}},c={args:{color:"inverse"}},g=["small","large","heading-0","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6"],d={args:{label:"Sluiten",onClick:b()},parameters:{pseudo:{hover:".hover"}},play:async({args:s,canvas:e,userEvent:a})=>{C(s.onClick).not.toHaveBeenCalled();for(let r=0;r<=19;r++)await a.click(e.getByTestId(`icon-button-${r}`)),C(s.onClick).toHaveBeenCalledTimes(r<10?r+1:10)},render:s=>n.jsxs(u,{children:[n.jsx(u.Cell,{span:1,children:n.jsxs(p,{alignHorizontal:"center",children:[g.map((e,a)=>m.createElement(o,{...s,"data-testid":`icon-button-${a}`,key:e,size:e,svg:t})),n.jsx(o,{...s,"data-testid":"icon-button-9",svg:t})]})}),n.jsx(u.Cell,{span:1,children:n.jsxs(p,{alignHorizontal:"center",children:[g.map((e,a)=>m.createElement(o,{...s,"data-testid":`icon-button-${a+10}`,disabled:!0,key:`${e}-disabled`,size:e,svg:t})),n.jsx(o,{...s,"data-testid":"icon-button-19",disabled:!0,svg:t})]})}),n.jsx(u.Cell,{span:1,children:n.jsxs(p,{alignHorizontal:"center",children:[g.map(e=>m.createElement(o,{className:"hover",...s,key:`${e}-hover`,size:e,svg:t})),n.jsx(o,{className:"hover",...s,svg:t})]})})]}),tags:["!dev","!autodocs"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sluiten',
    onClick: fn()
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
    for (let idx = 0; idx <= 19; idx++) {
      await userEvent.click(canvas.getByTestId(\`icon-button-\${idx}\`));
      expect(args.onClick).toHaveBeenCalledTimes(idx < 10 ? idx + 1 : 10);
    }
  },
  render: args => <Grid>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map((size, idx) => <IconButton {...args} data-testid={\`icon-button-\${idx}\`} key={size} size={size} svg={Icons.CloseIcon} />)}
          <IconButton {...args} data-testid="icon-button-9" svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map((size, idx) => <IconButton {...args} data-testid={\`icon-button-\${idx + 10}\`} disabled key={\`\${size}-disabled\`} size={size} svg={Icons.CloseIcon} />)}
          <IconButton {...args} data-testid="icon-button-19" disabled svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map(size => <IconButton className="hover" {...args} key={\`\${size}-hover\`} size={size} svg={Icons.CloseIcon} />)}
          <IconButton className="hover" {...args} svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
    </Grid>,
  tags: ['!dev', '!autodocs']
}`,...d.parameters?.docs?.source}}};const h=["Default","ContrastColour","InverseColour","TestCases"],B=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:l,Default:i,InverseColour:c,TestCases:d,__namedExportsOrder:h,default:I},Symbol.toStringTag,{value:"Module"}));export{l as C,B as I,c as a};
