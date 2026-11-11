import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{b as r,c as i,et as a,p as o,tt as s}from"./index.esm-DiqwBXdh.js";import{c,d as l,l as u,u as d}from"./FileCard.stories-VSHn7Xkn.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{s(),l(),f=t(),c(),p=n(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={...u,title:`Components/Forms/File Card`},g=()=>{},_=()=>{},v=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,y=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,b=`https://picsum.photos/id/64/128/128`,x=e=>(0,p.jsxs)(i,{onClick:_,variant:`tertiary`,children:[`Download`,(0,p.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e]})]}),S={render:e=>(0,p.jsxs)(o,{children:[(0,p.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,p.jsx)(d,{...e,onDelete:g}),(0,p.jsx)(d,{...e}),(0,p.jsx)(d,{...e,actions:x(e.name)}),(0,p.jsx)(d,{...e,actions:x(e.name),onDelete:g}),(0,p.jsx)(d,{...e,name:`pasfoto.jpg`,onDelete:g,previewUrl:b,type:`image/jpeg`}),(0,p.jsx)(d,{...e,name:`pasfoto.jpg`,previewUrl:b,type:`image/jpeg`}),(0,p.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,p.jsx)(d,{...e,name:v,onDelete:g}),(0,p.jsx)(d,{...e,name:y,onDelete:g}),(0,p.jsx)(`p`,{children:`In a narrow container, where the actions move below the name`}),(0,p.jsx)(r,{children:(0,p.jsx)(r.Cell,{span:{narrow:2,medium:3,wide:4},children:(0,p.jsx)(d,{...e,actions:x(y),name:y,onDelete:g})})}),(0,p.jsx)(`p`,{children:`Without a size or a type, so without metadata`}),(0,p.jsx)(d,{name:`besluit.pdf`,onDelete:g}),(0,p.jsx)(`p`,{children:`In an Unordered List`}),(0,p.jsxs)(a,{markers:!1,children:[(0,p.jsx)(a.Item,{children:(0,p.jsx)(d,{...e,onDelete:g})}),(0,p.jsx)(a.Item,{children:(0,p.jsx)(d,{...e,name:`pasfoto.jpg`,onDelete:g,previewUrl:b,type:`image/jpeg`})}),(0,p.jsx)(a.Item,{children:(0,p.jsx)(d,{...e,name:v,onDelete:g})}),(0,p.jsx)(a.Item,{children:(0,p.jsx)(d,{...e,name:y,onDelete:g})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},C=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],w=()=>{let[e,t]=(0,f.useState)(C);return(0,p.jsx)(a,{markers:!1,children:e.map(e=>(0,p.jsx)(a.Item,{children:(0,p.jsx)(d,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},T={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await m(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await m(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await m(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await m(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,p.jsx)(w,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},E=[`Test`,`FocusAfterDelete`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as FocusAfterDelete,S as Test,E as __namedExportsOrder,h as default};