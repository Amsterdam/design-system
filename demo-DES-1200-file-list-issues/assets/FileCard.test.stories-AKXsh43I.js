import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{c as r,nt as i,p as a,tt as o}from"./index.esm-CQOylnIm.js";import{c as s,l as c,o as l,s as u}from"./FileCard.stories-CjR_CPF_.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{i(),c(),d=t(),l(),f=n(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={...u,title:`Components/Forms/File Card`},h=()=>{},g=()=>{},_=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,v=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,y=`https://picsum.photos/id/64/128/128`,b=(0,f.jsx)(r,{onClick:g,variant:`tertiary`,children:`Download`}),x={render:e=>(0,f.jsxs)(a,{children:[(0,f.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,f.jsx)(s,{...e,onDelete:h}),(0,f.jsx)(s,{...e}),(0,f.jsx)(s,{...e,actions:b}),(0,f.jsx)(s,{...e,actions:b,onDelete:h}),(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,onDelete:h,previewUrl:y,type:`image/jpeg`}),(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,previewUrl:y,type:`image/jpeg`}),(0,f.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,f.jsx)(s,{...e,name:_,onDelete:h}),(0,f.jsx)(s,{...e,name:v,onDelete:h}),(0,f.jsx)(`p`,{children:`In a narrow container, where the actions move below the name`}),(0,f.jsx)(`div`,{style:{maxInlineSize:`20rem`},children:(0,f.jsx)(s,{...e,actions:b,name:v,onDelete:h})}),(0,f.jsx)(`p`,{children:`Without a size or a type, so without metadata`}),(0,f.jsx)(s,{name:`besluit.pdf`,onDelete:h}),(0,f.jsx)(`p`,{children:`In an Unordered List`}),(0,f.jsxs)(o,{markers:!1,children:[(0,f.jsx)(o.Item,{children:(0,f.jsx)(s,{...e,onDelete:h})}),(0,f.jsx)(o.Item,{children:(0,f.jsx)(s,{...e,name:`pasfoto.jpg`,onDelete:h,previewUrl:y,type:`image/jpeg`})}),(0,f.jsx)(o.Item,{children:(0,f.jsx)(s,{...e,name:_,onDelete:h})}),(0,f.jsx)(o.Item,{children:(0,f.jsx)(s,{...e,name:v,onDelete:h})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},S=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],C=()=>{let[e,t]=(0,d.useState)(S);return(0,f.jsx)(o,{markers:!1,children:e.map(e=>(0,f.jsx)(o.Item,{children:(0,f.jsx)(s,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},w={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await p(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await p(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await p(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await p(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,f.jsx)(C,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},T=[`Test`,`FocusAfterDelete`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      <p>In a narrow container, where the actions move below the name</p>
      <div style={{
      maxInlineSize: '20rem'
    }}>
        <FileCard {...args} actions={actions} name={nameWithoutSpaces} onDelete={remove} />
      </div>
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as FocusAfterDelete,x as Test,T as __namedExportsOrder,m as default};