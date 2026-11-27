import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{n as i,r as a}from"./iframe-CXEeNaf-.js";import{f as o,q as s}from"./index.esm-BFt5QAke.js";import{c,et as l,p as u,tt as d}from"./index.esm-C5k-2JQL.js";import{n as f,t as p}from"./example-photo-01-128x128-D2dujOHS.js";import{r as m,t as h}from"./Icon-bfPpDuLh.js";import{r as g,t as _}from"./Button-BtW0uHve.js";import{a as v,i as y,n as b,r as x,t as S}from"./formatFileMetadataText-B5Eed3mf.js";import{n as C,t as w}from"./example-photo-27-BJaywGPU.js";var T,E,D;function O(){return(O=e((()=>{s(),a(),T=n(),g(),m(),v(),x(),E=r(),D=(0,T.forwardRef)(({actions:e,className:t,deleteButtonLabel:n=`Verwijder`,formatMetadataText:r=b,name:a,onDelete:s,previewUrl:c,size:l,type:u,...d},f)=>{let p=r({size:l,type:u}),m=(0,T.useRef)(null);return(0,T.useLayoutEffect)(()=>()=>{let e=m.current;e&&e===document.activeElement&&y(e)},[]),(0,E.jsxs)(`div`,{...d,className:i(`ams-file-card`,t),ref:f,children:[(0,E.jsx)(`div`,{className:`ams-file-card__preview`,children:c?(0,E.jsx)(`img`,{alt:``,className:`ams-file-card__image`,src:c}):(0,E.jsx)(h,{size:`heading-3`,square:!0,svg:o})}),(0,E.jsxs)(`div`,{className:`ams-file-card__info`,children:[(0,E.jsx)(`div`,{className:`ams-file-card__name`,children:a}),p&&(0,E.jsx)(`div`,{className:`ams-file-card__metadata`,children:p})]}),(e||s)&&(0,E.jsxs)(`div`,{className:`ams-file-card__actions`,children:[e,s&&(0,E.jsxs)(_,{"data-file-card-delete-button":!0,onClick:s,ref:m,variant:`tertiary`,children:[n,(0,E.jsx)(`span`,{className:`ams-visually-hidden`,children:` ${a}`})]})]})]})}),D.displayName=`FileCard`;try{D.displayName=`FileCard`,D.__docgenInfo={description:`Presents one file with its type and size, and the actions available for it.`,displayName:`FileCard`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/FileCard/FileCard.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"A slot for action buttons or links, e.g. to download or edit the file.\nInclude the file name in each action's accessible name with `ams-visually-hidden`.\nA delete button is built-in and added when an `onDelete` handler is provided.",name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},deleteButtonLabel:{defaultValue:{value:`Verwijder`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The visible label of the delete button.
The name of the file is appended for screen readers, so do not include it.`,name:`deleteButtonLabel`,required:!1,tags:{default:`'Verwijder'`},type:{name:`string`}},formatMetadataText:{defaultValue:{value:`formatFileMetadataText('nl-NL')`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`Returns the text with the type and size of the file, displayed below its name.
Formatters for Dutch and English are available as exports.`,name:`formatMetadataText`,required:!1,tags:{default:`formatFileMetadataTextNl`},type:{name:`FormatFileMetadataText`}},name:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The name of the file, as the user knows it.
It is displayed, and added to the accessible name of the delete button.
Pass a readable name when the stored name of the file is technical.`,name:`name`,required:!0,tags:{},type:{name:`string`}},onDelete:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`A function to run when the user removes the file.
Adds a delete button after any custom actions.`,name:`onDelete`,required:!1,tags:{},type:{name:`(() => void)`}},previewUrl:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The address of an image to display instead of the generic document icon.`,name:`previewUrl`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The size of the file in bytes.`,name:`size`,required:!1,tags:{},type:{name:`number`}},type:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"The type of the file, as passed to `formatMetadataText`.\nThe default formatter expects a media type, e.g. `application/pdf`.",name:`type`,required:!1,tags:{},type:{name:`string`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-forms-file-card--docs File Card docs at Amsterdam Design System}`}}}catch{}})))()}var k=t({InAnUnorderedList:()=>R,Translated:()=>z,WithCustomActions:()=>F,WithDeleteButton:()=>P,WithPreview:()=>L,WithoutActions:()=>I,__namedExportsOrder:()=>B,default:()=>N}),A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),O(),x(),f(),C(),A=r(),j=()=>{},M=()=>{},N={title:`Components/Forms/File Card`,component:D,args:{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`},argTypes:{actions:{control:!1},formatMetadataText:{control:!1},onDelete:{control:!1},size:{control:{min:0,type:`number`}}}},P={args:{onDelete:j}},F={args:{onDelete:j},render:e=>(0,A.jsx)(D,{...e,actions:(0,A.jsxs)(c,{onClick:M,variant:`tertiary`,children:[`Download`,(0,A.jsxs)(`span`,{className:`ams-visually-hidden`,children:[` `,e.name]})]})})},I={},L={args:{name:`pasfoto.jpg`,onDelete:j,previewUrl:p,size:248e3,type:`image/jpeg`}},R={args:{onDelete:j},render:e=>(0,A.jsxs)(l,{markers:!1,children:[(0,A.jsx)(l.Item,{children:(0,A.jsx)(D,{...e})}),(0,A.jsx)(l.Item,{children:(0,A.jsx)(D,{...e,name:`foto.jpg`,previewUrl:w,size:248e3,type:`image/jpeg`})}),(0,A.jsx)(l.Item,{children:(0,A.jsx)(D,{...e,name:`aanvraag-2026-03-11-definitief.docx`,size:72e3,type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`})})]})},z={args:{onDelete:j},render:e=>(0,A.jsxs)(u,{children:[(0,A.jsx)(D,{...e,lang:`nl`}),(0,A.jsx)(D,{...e,deleteButtonLabel:`Delete`,formatMetadataText:S,lang:`en`,name:`passport.pdf`})]})},B=[`WithDeleteButton`,`WithCustomActions`,`WithoutActions`,`WithPreview`,`InAnUnorderedList`,`Translated`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <FileCard {...args} actions={<Button onClick={download} variant="tertiary">
          Download<span className="ams-visually-hidden"> {args.name}</span>
        </Button>} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: examplePhoto01Square,
    size: 248000,
    type: 'image/jpeg'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <UnorderedList markers={false}>
      <UnorderedList.Item>
        <FileCard {...args} />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="foto.jpg" previewUrl={examplePhoto27} size={248000} type="image/jpeg" />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
      </UnorderedList.Item>
    </UnorderedList>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <Column>
      <FileCard {...args} lang="nl" />
      <FileCard {...args} deleteButtonLabel="Delete" formatMetadataText={formatFileMetadataTextEn} lang="en" name="passport.pdf" />
    </Column>
}`,...z.parameters?.docs?.source}}}})))()}export{P as a,V as c,O as d,F as i,N as l,R as n,L as o,z as r,I as s,k as t,D as u};