import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./react-dom-fsbZDdoj.js";import{t as i}from"./jsx-runtime-ATHzeHXA.js";import{D as a,_ as o,b as s,c,et as l,p as u,tt as d,z as f}from"./index.esm-CwOO2Do2.js";import{i as p,n as m,r as h,t as g}from"./FileCard-DsP_-ZbJ.js";var _,v,y,b,x;function S(){return(S=e((()=>{d(),m(),_=n(),v=r(),y=i(),b=e=>e.map(e=>({file:e,id:crypto.randomUUID(),previewUrl:e.type.startsWith(`image/`)?URL.createObjectURL(e):``})),x=()=>{let e=(0,_.useRef)(null),t=(0,_.useRef)(null),[n,r]=(0,_.useState)([]),[i,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>()=>n.forEach(({previewUrl:e})=>e&&URL.revokeObjectURL(e)),[n]);let d=()=>{c(!1),r(b(Array.from(e.current?.files??[])))},p=i=>{let a=n.filter(e=>e.id!==i);if(e.current){let t=new DataTransfer;a.forEach(({file:e})=>t.items.add(e)),e.current.files=t.files}(0,v.flushSync)(()=>{r(a),c(a.length===0)}),a.length===0&&t.current?.focus()};return(0,y.jsxs)(u,{children:[(0,y.jsxs)(o,{children:[(0,y.jsx)(a,{htmlFor:`file-input`,children:`Bijlagen`}),(0,y.jsx)(s,{id:`file-input`,multiple:!0,onChange:d,ref:e})]}),n.length>0&&(0,y.jsx)(l,{markers:!1,children:n.map(({file:e,id:t,previewUrl:n})=>(0,y.jsx)(l.Item,{children:(0,y.jsx)(g,{name:e.name,onDelete:()=>p(t),previewUrl:n||void 0,size:e.size,type:e.type})},t))}),i&&(0,y.jsx)(f,{ref:t,tabIndex:-1,children:`Alle bijlagen zijn verwijderd.`})]})}})))()}var C=t({Default:()=>O,InAnUnorderedList:()=>M,Translated:()=>P,WithCustomActions:()=>j,WithFileInput:()=>N,WithPreview:()=>k,WithoutActions:()=>A,__namedExportsOrder:()=>F,default:()=>D}),w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{d(),m(),p(),S(),w=i(),T=()=>{},E=()=>{},D={title:`Components/Forms/File Card`,component:g,args:{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`},argTypes:{actions:{control:!1},formatDetailsText:{control:!1},onDelete:{control:!1},size:{control:{min:0,type:`number`}}}},O={args:{onDelete:T}},k={args:{name:`pasfoto.jpg`,onDelete:T,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`}},A={},j={args:{actions:(0,w.jsx)(c,{onClick:E,variant:`tertiary`,children:`Download`}),onDelete:T}},M={args:{onDelete:T},render:e=>(0,w.jsxs)(l,{markers:!1,children:[(0,w.jsx)(l.Item,{children:(0,w.jsx)(g,{...e})}),(0,w.jsx)(l.Item,{children:(0,w.jsx)(g,{...e,name:`pasfoto.jpg`,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`})}),(0,w.jsx)(l.Item,{children:(0,w.jsx)(g,{...e,name:`aanvraag-2026-03-11-definitief.docx`,size:72e3,type:`application/msword`})})]})},N={parameters:{docs:{canvas:{sourceState:`none`},codePanel:!1}},render:()=>(0,w.jsx)(x,{})},P={args:{onDelete:T},render:e=>(0,w.jsxs)(u,{children:[(0,w.jsx)(g,{...e,lang:`nl`}),(0,w.jsx)(g,{...e,deleteButtonLabel:`Delete`,formatDetailsText:h,lang:`en`,name:`passport.pdf`})]})},F=[`Default`,`WithPreview`,`WithoutActions`,`WithCustomActions`,`InAnUnorderedList`,`WithFileInput`,`Translated`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: 'https://picsum.photos/id/64/128/128',
    size: 248000,
    type: 'image/jpeg'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button onClick={download} variant="tertiary">
        Download
      </Button>,
    onDelete: remove
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <UnorderedList markers={false}>
      <UnorderedList.Item>
        <FileCard {...args} />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="pasfoto.jpg" previewUrl="https://picsum.photos/id/64/128/128" size={248000} type="image/jpeg" />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/msword" />
      </UnorderedList.Item>
    </UnorderedList>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      codePanel: false
    }
  },
  render: () => <FileInputWithFileCards />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <Column>
      <FileCard {...args} lang="nl" />
      <FileCard {...args} deleteButtonLabel="Delete" formatDetailsText={formatFileDetailsTextEn} lang="en" name="passport.pdf" />
    </Column>
}`,...P.parameters?.docs?.source}}}})))()}export{N as a,I as c,S as d,j as i,D as l,M as n,k as o,P as r,A as s,C as t,x as u};