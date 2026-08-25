import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{p as r,rt as i}from"./index.esm-Ctu72FTR.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./FileList-C3I-_rrD.js";var d=t({Default:()=>h,InAFileList:()=>v,Translated:()=>y,WithPreview:()=>g,WithoutActions:()=>_,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),o(),s(),c(),f=n(),p=()=>{},m={title:`Components/Forms/File Card`,component:l,args:{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`},argTypes:{formatDetailsText:{control:!1},onDelete:{control:!1},size:{control:{min:0,type:`number`}}}},h={args:{onDelete:p}},g={args:{name:`pasfoto.jpg`,onDelete:p,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`}},_={},v={args:{onDelete:p},render:e=>(0,f.jsxs)(u,{children:[(0,f.jsx)(u.Item,{children:(0,f.jsx)(l,{...e})}),(0,f.jsx)(u.Item,{children:(0,f.jsx)(l,{...e,name:`pasfoto.jpg`,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`})}),(0,f.jsx)(u.Item,{children:(0,f.jsx)(l,{...e,name:`aanvraag-2026-03-11-definitief.docx`,size:72e3,type:`application/msword`})})]})},y={args:{onDelete:p},render:e=>(0,f.jsxs)(r,{children:[(0,f.jsx)(l,{...e,lang:`nl`}),(0,f.jsx)(l,{...e,deleteButtonLabel:`Delete`,formatDetailsText:a,lang:`en`,name:`passport.pdf`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: 'https://picsum.photos/id/64/128/128',
    size: 248000,
    type: 'image/jpeg'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <FileList>
      <FileList.Item>
        <FileCard {...args} />
      </FileList.Item>
      <FileList.Item>
        <FileCard {...args} name="pasfoto.jpg" previewUrl="https://picsum.photos/id/64/128/128" size={248000} type="image/jpeg" />
      </FileList.Item>
      <FileList.Item>
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/msword" />
      </FileList.Item>
    </FileList>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <Column>
      <FileCard {...args} lang="nl" />
      <FileCard {...args} deleteButtonLabel="Delete" formatDetailsText={formatFileDetailsTextEn} lang="en" name="passport.pdf" />
    </Column>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithPreview`,`WithoutActions`,`InAFileList`,`Translated`]})))()}export{_ as a,g as i,v as n,x as o,y as r,m as s,d as t};