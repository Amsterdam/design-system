import{j as o}from"./iframe-ZT1ZFgwQ.js";import{m as i,F as l}from"./FileList.stories-CL2lTI4R.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DzYgoSyb.js";import"./Button-DG9Hv6Lq.js";const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,x={...i,title:"Components/Forms/File List"},t=r(),e={args:{children:[o.jsx(l.Item,{"data-testid":"file-item",file:new File(["sample1"],"sample1.txt",{lastModified:Date.now(),type:"text/plain"}),onDelete:()=>t()},"1")]},play:async({canvas:a,userEvent:s})=>{await s.click(a.getByRole("button")),await n(t).toHaveBeenCalled()},tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<FileList.Item data-testid="file-item" file={new File(['sample1'], 'sample1.txt', {
      lastModified: Date.now(),
      type: 'text/plain'
    })} key="1" onDelete={() => testFn()} />]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(testFn).toHaveBeenCalled();
  },
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const f=["Test"];export{e as Test,f as __namedExportsOrder,x as default};
