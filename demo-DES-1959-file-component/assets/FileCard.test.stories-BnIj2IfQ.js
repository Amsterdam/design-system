import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{p as r,rt as i}from"./index.esm-BGcEkOJC.js";import{i as a,n as o,r as s,t as c}from"./FileList-DIsE74VF.js";import{o as l,s as u}from"./FileCard.stories-B-xFxRTW.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),a(),o(),d=t(),l(),f=n(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={...u,title:`Components/Forms/File Card`},h=()=>{},g=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,_=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,v=`https://picsum.photos/id/64/128/128`,y={render:e=>(0,f.jsxs)(r,{children:[(0,f.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,f.jsx)(s,{...e,onDelete:h}),(0,f.jsx)(s,{...e}),(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,onDelete:h,previewUrl:v,type:`image/jpeg`}),(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,previewUrl:v,type:`image/jpeg`}),(0,f.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,f.jsx)(s,{...e,name:g,onDelete:h}),(0,f.jsx)(s,{...e,name:_,onDelete:h}),(0,f.jsx)(`p`,{children:`Without a size or a type, so without details`}),(0,f.jsx)(s,{name:`besluit.pdf`,onDelete:h}),(0,f.jsx)(`p`,{children:`Within a File List`}),(0,f.jsxs)(c,{children:[(0,f.jsx)(c.Item,{children:(0,f.jsx)(s,{...e,onDelete:h})}),(0,f.jsx)(c.Item,{children:(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,onDelete:h,previewUrl:v,type:`image/jpeg`})}),(0,f.jsx)(c.Item,{children:(0,f.jsx)(s,{...e,name:g,onDelete:h})}),(0,f.jsx)(c.Item,{children:(0,f.jsx)(s,{...e,name:_,onDelete:h})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},b=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],x=()=>{let[e,t]=(0,d.useState)(b);return(0,f.jsx)(c,{children:e.map(e=>(0,f.jsx)(c.Item,{children:(0,f.jsx)(s,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},S={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await p(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await p(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await p(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await p(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,f.jsx)(x,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Column>
      <p>On its own, with and without a preview and actions</p>
      <FileCard {...args} onDelete={remove} />
      <FileCard {...args} />
      <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
      <FileCard {...args} name="pasfoto.jpg" previewUrl={previewUrl} type="image/jpeg" />
      <p>Names that do not fit on one row</p>
      <FileCard {...args} name={longName} onDelete={remove} />
      <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
      <p>Without a size or a type, so without details</p>
      <FileCard name="besluit.pdf" onDelete={remove} />
      <p>Within a File List</p>
      <FileList>
        <FileList.Item>
          <FileCard {...args} onDelete={remove} />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name={longName} onDelete={remove} />
        </FileList.Item>
        <FileList.Item>
          <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
        </FileList.Item>
      </FileList>
    </Column>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder tweede.pdf'
    }));
    await expect(canvas.queryByText('tweede.pdf')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Verwijder derde.pdf'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verwijder derde.pdf'
    }));
    await expect(canvas.queryByText('derde.pdf')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Verwijder eerste.pdf'
    })).toHaveFocus();
  },
  render: () => <RemovableFileList />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...S.parameters?.docs?.source}}},C=[`Test`,`FocusAfterDelete`]})))()}w();export{S as FocusAfterDelete,y as Test,C as __namedExportsOrder,m as default};