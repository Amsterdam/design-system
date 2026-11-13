import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{n as r,t as i}from"./renderComponentVariants-CEKhpxhi.js";import{n as a,t as o}from"./FileList-BZ6GOR7C.js";import{n as s,r as c}from"./FileList.stories-BwtAHLLc.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a(),l=t(),i(),s(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={...c,title:`Components/Forms/File List`},p={args:{children:(0,u.jsx)(o.Item,{file:new File([`sample1`],`sample1.txt`,{type:`text/plain`})})},render:(e,t)=>r(o,{args:e},t),tags:[`!dev`,`!autodocs`,`!manifest`]},m=[new File([`first`],`first.txt`,{type:`text/plain`}),new File([`second`],`second.txt`,{type:`text/plain`}),new File([`third`],`third.txt`,{type:`text/plain`})],h=()=>{let[e,t]=(0,l.useState)(m);return(0,u.jsx)(o,{children:e.map(e=>(0,u.jsx)(o.Item,{file:e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))},e.name))})},g={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder second.txt`})),await d(e.queryByText(`second.txt`)).not.toBeInTheDocument(),await d(e.getByRole(`button`,{name:`Verwijder third.txt`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder third.txt`})),await d(e.queryByText(`third.txt`)).not.toBeInTheDocument(),await d(e.getByRole(`button`,{name:`Verwijder first.txt`})).toHaveFocus()},render:()=>(0,u.jsx)(h,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},_=[`Test`,`FocusAfterDelete`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <FileList.Item file={new File(['sample1'], 'sample1.txt', {
      type: 'text/plain'
    })} />
  },
  render: (args, context) => renderComponentVariants(FileList, {
    args
  }, context),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder second.txt'
    }));
    await expect(canvas.queryByText('second.txt')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Verwijder third.txt'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder third.txt'
    }));
    await expect(canvas.queryByText('third.txt')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Verwijder first.txt'
    })).toHaveFocus();
  },
  render: () => <RemovableFileList />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as FocusAfterDelete,p as Test,_ as __namedExportsOrder,f as default};