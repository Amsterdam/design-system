import{j as o}from"./iframe-DztCyeCK.js";import{m as n,F as i}from"./FileList.stories-CI7_XRKs.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-_-z84NuK.js";import"./Button-BQBhVf0e.js";const{expect:l,fn:r}=__STORYBOOK_MODULE_TEST__,x={...n,title:"Components/Forms/File List"},t=r(),e={args:{children:[o.jsx(i.Item,{file:new File(["sample1"],"sample1.txt",{lastModified:Date.now(),type:"text/plain"}),onDelete:()=>t()},"1")]},play:async({canvas:a,userEvent:s})=>{await s.click(a.getByRole("button")),await l(t).toHaveBeenCalled()},tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<FileList.Item file={new File(['sample1'], 'sample1.txt', {
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
}`,...e.parameters?.docs?.source}}};const F=["Test"];export{e as Test,F as __namedExportsOrder,x as default};
