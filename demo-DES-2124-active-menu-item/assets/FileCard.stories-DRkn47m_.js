import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{n as i,r as a}from"./iframe-DGBl4cjt.js";import{f as o,q as s}from"./index.esm-BKXztnhd.js";import{c,et as l,p as u,tt as d}from"./index.esm-0oLqgL31.js";import{r as f,t as p}from"./Icon-BYZhqft3.js";import{r as m,t as h}from"./Button-CNFew79D.js";import{a as g,i as _,n as v,r as y,t as b}from"./formatFileMetadataText-B5Eed3mf.js";var x,S,C;function w(){return(w=e((()=>{s(),a(),x=n(),m(),f(),g(),y(),S=r(),C=(0,x.forwardRef)(({actions:e,className:t,deleteButtonLabel:n=`Verwijder`,formatMetadataText:r=v,name:a,onDelete:s,previewUrl:c,size:l,type:u,...d},f)=>{let m=r({size:l,type:u}),g=(0,x.useRef)(null);return(0,x.useLayoutEffect)(()=>()=>{let e=g.current;e&&e===document.activeElement&&_(e)},[]),(0,S.jsxs)(`div`,{...d,className:i(`ams-file-card`,t),ref:f,children:[(0,S.jsx)(`div`,{className:`ams-file-card__preview`,children:c?(0,S.jsx)(`img`,{alt:``,className:`ams-file-card__image`,src:c}):(0,S.jsx)(p,{size:`heading-3`,square:!0,svg:o})}),(0,S.jsxs)(`div`,{className:`ams-file-card__info`,children:[(0,S.jsx)(`div`,{className:`ams-file-card__name`,children:a}),m&&(0,S.jsx)(`div`,{className:`ams-file-card__metadata`,children:m})]}),(e||s)&&(0,S.jsxs)(`div`,{className:`ams-file-card__actions`,children:[e,s&&(0,S.jsxs)(h,{"data-file-card-delete-button":!0,onClick:s,ref:g,variant:`tertiary`,children:[n,(0,S.jsx)(`span`,{className:`ams-visually-hidden`,children:` ${a}`})]})]})]})}),C.displayName=`FileCard`;try{C.displayName=`FileCard`,C.__docgenInfo={description:`Presents one file with its type and size, and the actions available for it.`,displayName:`FileCard`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/FileCard/FileCard.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"A slot for action buttons or links, e.g. to download or edit the file.\nInclude the file name in each action's accessible name with `ams-visually-hidden`.\nA delete button is built-in and added when an `onDelete` handler is provided.",name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},deleteButtonLabel:{defaultValue:{value:`Verwijder`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The visible label of the delete button.
The name of the file is appended for screen readers, so do not include it.`,name:`deleteButtonLabel`,required:!1,tags:{default:`'Verwijder'`},type:{name:`string`}},formatMetadataText:{defaultValue:{value:`formatFileMetadataText('nl-NL')`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`Returns the text with the type and size of the file, displayed below its name.
Formatters for Dutch and English are available as exports.`,name:`formatMetadataText`,required:!1,tags:{default:`formatFileMetadataTextNl`},type:{name:`FormatFileMetadataText`}},name:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The name of the file, as the user knows it.
It is displayed, and added to the accessible name of the delete button.
Pass a readable name when the stored name of the file is technical.`,name:`name`,required:!0,tags:{},type:{name:`string`}},onDelete:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`A function to run when the user removes the file.
Adds a delete button after any custom actions.`,name:`onDelete`,required:!1,tags:{},type:{name:`(() => void)`}},previewUrl:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The address of an image to display instead of the generic document icon.`,name:`previewUrl`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The size of the file in bytes.`,name:`size`,required:!1,tags:{},type:{name:`number`}},type:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"The type of the file, as passed to `formatMetadataText`.\nThe default formatter expects a media type, e.g. `application/pdf`.",name:`type`,required:!1,tags:{},type:{name:`string`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-forms-file-card--docs File Card docs at Amsterdam Design System}`}}}catch{}})))()}var T=t({InAnUnorderedList:()=>P,Translated:()=>F,WithCustomActions:()=>j,WithDeleteButton:()=>A,WithPreview:()=>N,WithoutActions:()=>M,__namedExportsOrder:()=>I,default:()=>k}),E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{d(),w(),y(),E=r(),D=()=>{},O=()=>{},k={title:`Components/Forms/File Card`,component:C,args:{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`},argTypes:{actions:{control:!1},formatMetadataText:{control:!1},onDelete:{control:!1},size:{control:{min:0,type:`number`}}}},A={args:{onDelete:D}},j={args:{onDelete:D},render:e=>(0,E.jsx)(C,{...e,actions:(0,E.jsxs)(c,{onClick:O,variant:`tertiary`,children:[`Download`,(0,E.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e.name]})]})})},M={},N={args:{name:`pasfoto.jpg`,onDelete:D,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`}},P={args:{onDelete:D},render:e=>(0,E.jsxs)(l,{markers:!1,children:[(0,E.jsx)(l.Item,{children:(0,E.jsx)(C,{...e})}),(0,E.jsx)(l.Item,{children:(0,E.jsx)(C,{...e,name:`pasfoto.jpg`,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`})}),(0,E.jsx)(l.Item,{children:(0,E.jsx)(C,{...e,name:`aanvraag-2026-03-11-definitief.docx`,size:72e3,type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`})})]})},F={args:{onDelete:D},render:e=>(0,E.jsxs)(u,{children:[(0,E.jsx)(C,{...e,lang:`nl`}),(0,E.jsx)(C,{...e,deleteButtonLabel:`Delete`,formatMetadataText:b,lang:`en`,name:`passport.pdf`})]})},I=[`WithDeleteButton`,`WithCustomActions`,`WithoutActions`,`WithPreview`,`InAnUnorderedList`,`Translated`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <FileCard {...args} actions={<Button onClick={download} variant="tertiary">
          Download<span className="ams-visually-hidden"> {args.name}</span>
        </Button>} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: 'https://picsum.photos/id/64/128/128',
    size: 248000,
    type: 'image/jpeg'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
      </UnorderedList.Item>
    </UnorderedList>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <Column>
      <FileCard {...args} lang="nl" />
      <FileCard {...args} deleteButtonLabel="Delete" formatMetadataText={formatFileMetadataTextEn} lang="en" name="passport.pdf" />
    </Column>
}`,...F.parameters?.docs?.source}}}})))()}export{A as a,L as c,w as d,j as i,k as l,P as n,N as o,F as r,M as s,T as t,C as u};