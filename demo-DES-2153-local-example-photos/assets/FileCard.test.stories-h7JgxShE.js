import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{b as r,c as i,et as a,p as o,tt as s}from"./index.esm-BFuEIccm.js";import{n as c,t as l}from"./example-photo-01-128x128-D2dujOHS.js";import{c as u,d,l as f,u as p}from"./FileCard.stories-DVy2THoO.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{s(),d(),m=t(),c(),u(),h=n(),{expect:g}=__STORYBOOK_MODULE_TEST__,_={...f,title:`Components/Forms/File Card`},v=()=>{},y=()=>{},b=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,x=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,S=l,C=e=>(0,h.jsxs)(i,{onClick:y,variant:`tertiary`,children:[`Download`,(0,h.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e]})]}),w={render:e=>(0,h.jsxs)(o,{children:[(0,h.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,h.jsx)(p,{...e,onDelete:v}),(0,h.jsx)(p,{...e}),(0,h.jsx)(p,{...e,actions:C(e.name)}),(0,h.jsx)(p,{...e,actions:C(e.name),onDelete:v}),(0,h.jsx)(p,{...e,name:`pasfoto.jpg`,onDelete:v,previewUrl:S,type:`image/jpeg`}),(0,h.jsx)(p,{...e,name:`pasfoto.jpg`,previewUrl:S,type:`image/jpeg`}),(0,h.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,h.jsx)(p,{...e,name:b,onDelete:v}),(0,h.jsx)(p,{...e,name:x,onDelete:v}),(0,h.jsx)(`p`,{children:`In a narrow container, where the actions move below the name`}),(0,h.jsx)(r,{children:(0,h.jsx)(r.Cell,{span:{narrow:2,medium:3,wide:4},children:(0,h.jsx)(p,{...e,actions:C(x),name:x,onDelete:v})})}),(0,h.jsx)(`p`,{children:`Without a size or a type, so without metadata`}),(0,h.jsx)(p,{name:`besluit.pdf`,onDelete:v}),(0,h.jsx)(`p`,{children:`In an Unordered List`}),(0,h.jsxs)(a,{markers:!1,children:[(0,h.jsx)(a.Item,{children:(0,h.jsx)(p,{...e,onDelete:v})}),(0,h.jsx)(a.Item,{children:(0,h.jsx)(p,{...e,name:`pasfoto.jpg`,onDelete:v,previewUrl:S,type:`image/jpeg`})}),(0,h.jsx)(a.Item,{children:(0,h.jsx)(p,{...e,name:b,onDelete:v})}),(0,h.jsx)(a.Item,{children:(0,h.jsx)(p,{...e,name:x,onDelete:v})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},T=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],E=()=>{let[e,t]=(0,m.useState)(T);return(0,h.jsx)(a,{markers:!1,children:e.map(e=>(0,h.jsx)(a.Item,{children:(0,h.jsx)(p,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},D={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await g(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await g(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await g(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await g(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,h.jsx)(E,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},O=[`Test`,`FocusAfterDelete`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Column>
      <p>On its own, with and without a preview and actions</p>
      <FileCard {...args} onDelete={remove} />
      <FileCard {...args} />
      <FileCard {...args} actions={actions(args.name)} />
      <FileCard {...args} actions={actions(args.name)} onDelete={remove} />
      <FileCard {...args} name="pasfoto.jpg" onDelete={remove} previewUrl={previewUrl} type="image/jpeg" />
      <FileCard {...args} name="pasfoto.jpg" previewUrl={previewUrl} type="image/jpeg" />
      <p>Names that do not fit on one row</p>
      <FileCard {...args} name={longName} onDelete={remove} />
      <FileCard {...args} name={nameWithoutSpaces} onDelete={remove} />
      <p>In a narrow container, where the actions move below the name</p>
      <Grid>
        <Grid.Cell span={{
        narrow: 2,
        medium: 3,
        wide: 4
      }}>
          <FileCard {...args} actions={actions(nameWithoutSpaces)} name={nameWithoutSpaces} onDelete={remove} />
        </Grid.Cell>
      </Grid>
      <p>Without a size or a type, so without metadata</p>
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as FocusAfterDelete,w as Test,O as __namedExportsOrder,_ as default};