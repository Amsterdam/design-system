import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{c as r,et as i,p as a,tt as o}from"./index.esm-CwOO2Do2.js";import{n as s,t as c}from"./FileCard-DsP_-ZbJ.js";import{c as l,d as u,l as d,u as f}from"./FileCard.stories-BmANjcq5.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{o(),s(),p=t(),l(),u(),m=n(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={...d,title:`Components/Forms/File Card`},_=()=>{},v=()=>{},y=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,b=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,x=`https://picsum.photos/id/64/128/128`,S=(0,m.jsx)(r,{onClick:v,variant:`tertiary`,children:`Download`}),C={render:e=>(0,m.jsxs)(a,{children:[(0,m.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,m.jsx)(c,{...e,onDelete:_}),(0,m.jsx)(c,{...e}),(0,m.jsx)(c,{...e,actions:S}),(0,m.jsx)(c,{...e,actions:S,onDelete:_}),(0,m.jsx)(c,{...e,name:`pasfoto.jpg`,onDelete:_,previewUrl:x,type:`image/jpeg`}),(0,m.jsx)(c,{...e,name:`pasfoto.jpg`,previewUrl:x,type:`image/jpeg`}),(0,m.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,m.jsx)(c,{...e,name:y,onDelete:_}),(0,m.jsx)(c,{...e,name:b,onDelete:_}),(0,m.jsx)(`p`,{children:`Without a size or a type, so without details`}),(0,m.jsx)(c,{name:`besluit.pdf`,onDelete:_}),(0,m.jsx)(`p`,{children:`In an Unordered List`}),(0,m.jsxs)(i,{markers:!1,children:[(0,m.jsx)(i.Item,{children:(0,m.jsx)(c,{...e,onDelete:_})}),(0,m.jsx)(i.Item,{children:(0,m.jsx)(c,{...e,name:`pasfoto.jpg`,onDelete:_,previewUrl:x,type:`image/jpeg`})}),(0,m.jsx)(i.Item,{children:(0,m.jsx)(c,{...e,name:y,onDelete:_})}),(0,m.jsx)(i.Item,{children:(0,m.jsx)(c,{...e,name:b,onDelete:_})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},w=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],T=()=>{let[e,t]=(0,p.useState)(w);return(0,m.jsx)(i,{markers:!1,children:e.map(e=>(0,m.jsx)(i.Item,{children:(0,m.jsx)(c,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},E={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await h(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await h(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await h(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await h(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,m.jsx)(T,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},D={play:async({canvas:e,userEvent:t})=>{await t.upload(e.getByLabelText(`Bijlagen`),[new File([`een`],`een.pdf`,{type:`application/pdf`}),new File([`twee`],`twee.pdf`,{type:`application/pdf`})]),await t.click(e.getByRole(`button`,{name:`Verwijder twee.pdf`})),await h(e.getByRole(`button`,{name:`Verwijder een.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder een.pdf`})),await h(e.getByText(`Alle bijlagen zijn verwijderd.`)).toHaveFocus()},render:()=>(0,m.jsx)(f,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},O=[`Test`,`FocusAfterDelete`,`FocusWhenEmptied`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Column>
      <p>On its own, with and without a preview and actions</p>
      <FileCard {...args} onDelete={remove} />
      <FileCard {...args} />
      <FileCard {...args} actions={actions} />
      <FileCard {...args} actions={actions} onDelete={remove} />
      <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
      <FileCard {...args} name="pasfoto.jpg" previewUrl={previewUrl} type="image/jpeg" />
      <p>Names that do not fit on one row</p>
      <FileCard {...args} name={longName} onDelete={remove} />
      <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
      <p>Without a size or a type, so without details</p>
      <FileCard name="besluit.pdf" onDelete={remove} />
      <p>In an Unordered List</p>
      <UnorderedList markers={false}>
        <UnorderedList.Item>
          <FileCard {...args} onDelete={remove} />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name={longName} onDelete={remove} />
        </UnorderedList.Item>
        <UnorderedList.Item>
          <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
        </UnorderedList.Item>
      </UnorderedList>
    </Column>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  render: () => <RemovableFileCards />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
  render: () => <FileInputWithFileCards />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...D.parameters?.docs?.source}}}})))()}k();export{E as FocusAfterDelete,D as FocusWhenEmptied,C as Test,O as __namedExportsOrder,g as default};