import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./react-dom-fsbZDdoj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{D as i,_ as a,b as o,c as s,et as c,p as l,tt as u,z as d}from"./index.esm-DE9uihif.js";import{c as f,l as p,s as m,u as h}from"./FileCard.stories-88AdgIx8.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{u(),h(),g=t(),_=n(),v=r(),y=e=>{e&&URL.revokeObjectURL(e)},b=e=>e.map(e=>({file:e,id:crypto.randomUUID(),previewUrl:e.type.startsWith(`image/`)?URL.createObjectURL(e):``})),x=()=>{let e=(0,g.useRef)(null),t=(0,g.useRef)(null),[n,r]=(0,g.useState)([]),[s,u]=(0,g.useState)(!1),f=(0,g.useRef)([]);(0,g.useEffect)(()=>{f.current=n},[n]),(0,g.useEffect)(()=>()=>{f.current.forEach(({previewUrl:e})=>y(e))},[]);let m=()=>{u(!1),n.forEach(({previewUrl:e})=>y(e)),r(b(Array.from(e.current?.files??[])))},h=i=>{let a=n.find(e=>e.id===i),o=n.filter(e=>e.id!==i);if(y(a?.previewUrl??``),e.current){let t=new DataTransfer;o.forEach(({file:e})=>t.items.add(e)),e.current.files=t.files}(0,_.flushSync)(()=>{r(o),u(o.length===0)}),o.length===0&&t.current?.focus()};return(0,v.jsxs)(l,{children:[(0,v.jsxs)(a,{children:[(0,v.jsx)(i,{htmlFor:`file-input`,children:`Bijlagen`}),(0,v.jsx)(o,{id:`file-input`,multiple:!0,onChange:m,ref:e})]}),n.length>0&&(0,v.jsx)(c,{markers:!1,children:n.map(({file:e,id:t,previewUrl:n})=>(0,v.jsx)(c.Item,{children:(0,v.jsx)(p,{name:e.name,onDelete:()=>h(t),previewUrl:n||void 0,size:e.size,type:e.type})},t))}),s&&(0,v.jsx)(d,{ref:t,tabIndex:-1,children:`Alle bijlagen zijn verwijderd.`})]})}})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{u(),h(),C=t(),m(),S(),w=r(),{expect:T}=__STORYBOOK_MODULE_TEST__,E={...f,title:`Components/Forms/File Card`},D=()=>{},O=()=>{},k=`aanvraag omgevingsvergunning Nieuwezijds Voorburgwal 147 definitieve versie 11 maart 2026.pdf`,A=`aanvraag-omgevingsvergunning-nieuwezijds-voorburgwal-147-definitief-2026-03-11.pdf`,j=`https://picsum.photos/id/64/128/128`,M=(0,w.jsx)(s,{onClick:O,variant:`tertiary`,children:`Download`}),N={render:e=>(0,w.jsxs)(l,{children:[(0,w.jsx)(`p`,{children:`On its own, with and without a preview and actions`}),(0,w.jsx)(p,{...e,onDelete:D}),(0,w.jsx)(p,{...e}),(0,w.jsx)(p,{...e,actions:M}),(0,w.jsx)(p,{...e,actions:M,onDelete:D}),(0,w.jsx)(p,{...e,name:`pasfoto.jpg`,onDelete:D,previewUrl:j,type:`image/jpeg`}),(0,w.jsx)(p,{...e,name:`pasfoto.jpg`,previewUrl:j,type:`image/jpeg`}),(0,w.jsx)(`p`,{children:`Names that do not fit on one row`}),(0,w.jsx)(p,{...e,name:k,onDelete:D}),(0,w.jsx)(p,{...e,name:A,onDelete:D}),(0,w.jsx)(`p`,{children:`In a narrow container, where the actions move below the name`}),(0,w.jsx)(`div`,{style:{maxInlineSize:`20rem`},children:(0,w.jsx)(p,{...e,actions:M,name:A,onDelete:D})}),(0,w.jsx)(`p`,{children:`Without a size or a type, so without metadata`}),(0,w.jsx)(p,{name:`besluit.pdf`,onDelete:D}),(0,w.jsx)(`p`,{children:`In an Unordered List`}),(0,w.jsxs)(c,{markers:!1,children:[(0,w.jsx)(c.Item,{children:(0,w.jsx)(p,{...e,onDelete:D})}),(0,w.jsx)(c.Item,{children:(0,w.jsx)(p,{...e,name:`pasfoto.jpg`,onDelete:D,previewUrl:j,type:`image/jpeg`})}),(0,w.jsx)(c.Item,{children:(0,w.jsx)(p,{...e,name:k,onDelete:D})}),(0,w.jsx)(c.Item,{children:(0,w.jsx)(p,{...e,name:A,onDelete:D})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},P=[{name:`eerste.pdf`,size:1536e3,type:`application/pdf`},{name:`tweede.pdf`,size:248e3,type:`application/pdf`},{name:`derde.pdf`,size:72e3,type:`application/pdf`}],F=()=>{let[e,t]=(0,C.useState)(P);return(0,w.jsx)(c,{markers:!1,children:e.map(e=>(0,w.jsx)(c.Item,{children:(0,w.jsx)(p,{...e,onDelete:()=>t(t=>t.filter(({name:t})=>t!==e.name))})},e.name))})},I={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Verwijder tweede.pdf`})),await T(e.queryByText(`tweede.pdf`)).not.toBeInTheDocument(),await T(e.getByRole(`button`,{name:`Verwijder derde.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder derde.pdf`})),await T(e.queryByText(`derde.pdf`)).not.toBeInTheDocument(),await T(e.getByRole(`button`,{name:`Verwijder eerste.pdf`})).toHaveFocus()},render:()=>(0,w.jsx)(F,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},L={play:async({canvas:e,userEvent:t})=>{await t.upload(e.getByLabelText(`Bijlagen`),[new File([`een`],`een.pdf`,{type:`application/pdf`}),new File([`twee`],`twee.pdf`,{type:`application/pdf`})]),await t.click(e.getByRole(`button`,{name:`Verwijder twee.pdf`})),await T(e.getByRole(`button`,{name:`Verwijder een.pdf`})).toHaveFocus(),await t.click(e.getByRole(`button`,{name:`Verwijder een.pdf`})),await T(e.getByText(`Alle bijlagen zijn verwijderd.`)).toHaveFocus()},render:()=>(0,w.jsx)(x,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},R={play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=URL.revokeObjectURL,i=[];URL.revokeObjectURL=e=>{i.push(e),r(e)};try{await n.upload(e.getByLabelText(`Bijlagen`),[new File([`een`],`eerste.png`,{type:`image/png`}),new File([`twee`],`tweede.png`,{type:`image/png`})]);let r=Array.from(t.querySelectorAll(`img`)),a=r[0]?.getAttribute(`src`),o=r[1]?.getAttribute(`src`);await n.click(e.getByRole(`button`,{name:`Verwijder eerste.png`})),await T(e.queryByText(`eerste.png`)).not.toBeInTheDocument(),await T(i).toContain(a),await T(i).not.toContain(o),await T(t.querySelector(`img`)).toHaveAttribute(`src`,o)}finally{URL.revokeObjectURL=r}},render:()=>(0,w.jsx)(x,{}),tags:[`!dev`,`!autodocs`,`!manifest`]},z=[`Test`,`FocusAfterDelete`,`FocusWhenEmptied`,`PreviewRemovalLifecycle`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const originalRevokeObjectURL = URL.revokeObjectURL;
    const revokedUrls: string[] = [];
    URL.revokeObjectURL = (url: string) => {
      revokedUrls.push(url);
      originalRevokeObjectURL(url);
    };
    try {
      await userEvent.upload(canvas.getByLabelText('Bijlagen'), [new File(['een'], 'eerste.png', {
        type: 'image/png'
      }), new File(['twee'], 'tweede.png', {
        type: 'image/png'
      })]);
      const previewsBeforeRemoval = Array.from(canvasElement.querySelectorAll('img'));
      const firstPreviewUrl = previewsBeforeRemoval[0]?.getAttribute('src');
      const secondPreviewUrl = previewsBeforeRemoval[1]?.getAttribute('src');
      await userEvent.click(canvas.getByRole('button', {
        name: 'Verwijder eerste.png'
      }));
      await expect(canvas.queryByText('eerste.png')).not.toBeInTheDocument();
      await expect(revokedUrls).toContain(firstPreviewUrl);
      await expect(revokedUrls).not.toContain(secondPreviewUrl);
      await expect(canvasElement.querySelector('img')).toHaveAttribute('src', secondPreviewUrl);
    } finally {
      URL.revokeObjectURL = originalRevokeObjectURL;
    }
  },
  render: () => <FileInputWithFileCards />,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...R.parameters?.docs?.source}}}})))()}B();export{I as FocusAfterDelete,L as FocusWhenEmptied,R as PreviewRemovalLifecycle,N as Test,z as __namedExportsOrder,E as default};