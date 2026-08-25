import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./renderComponentVariants-BsvLUBvO.js";import{i,n as a,r as o,t as s}from"./FileList-D2Alnw4S.js";import{a as c,i as l,o as u,r as d}from"./FileList.stories-dbw8cNwL.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{i(),a(),r(),u(),d(),f=t(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={...l,title:`Components/Forms/File List`},h={args:{children:(0,f.jsx)(s.Item,{children:(0,f.jsx)(o,{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`})})},render:(e,t)=>n(s,{args:e},t),tags:[`!dev`,`!autodocs`,`!manifest`]},g={play:async({canvas:e,userEvent:t})=>{await t.upload(e.getByLabelText(`Bijlagen`),[new File([`een`],`een.pdf`,{type:`application/pdf`}),new File([`twee`],`twee.pdf`,{type:`application/pdf`})]),await t.click(e.getByRole(`button`,{name:`Verwijder twee.pdf`})),await p(e.getByRole(`button`,{name:`Verwijder een.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder een.pdf`})),await p(e.getByText(`Alle bijlagen zijn verwijderd.`)).toHaveFocus()},render:()=>(0,f.jsx)(c,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <FileList.Item>
        <FileCard name="paspoort.pdf" size={1536000} type="application/pdf" />
      </FileList.Item>
  },
  render: (args, context) => renderComponentVariants(FileList, {
    args
  }, context),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.upload(canvas.getByLabelText('Bijlagen'), [new File(['een'], 'een.pdf', {
      type: 'application/pdf'
    }), new File(['twee'], 'twee.pdf', {
      type: 'application/pdf'
    })]);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder twee.pdf'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Verwijder een.pdf'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder een.pdf'
    }));
    await expect(canvas.getByText('Alle bijlagen zijn verwijderd.')).toHaveFocus();
  },
  render: () => <FileInputWithFileList />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...g.parameters?.docs?.source}}},_=[`Test`,`FocusWhenEmptied`]})))()}v();export{g as FocusWhenEmptied,h as Test,_ as __namedExportsOrder,m as default};