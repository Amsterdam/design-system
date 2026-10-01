import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./react-dom-fsbZDdoj.js";import{t as i}from"./jsx-runtime-ATHzeHXA.js";import{n as a,r as o}from"./iframe-pA1z6QrA.js";import{K as s,d as c}from"./index.esm-Cf2AflXd.js";import{D as l,_ as u,b as d,c as f,et as p,p as m,tt as h,z as g}from"./index.esm-Bo8IW-yX.js";import{r as _,t as v}from"./Icon-Bnb64qFK.js";import{r as y,t as b}from"./Button-BD_Grlqz.js";import{a as x,i as S,n as C,r as w,t as T}from"./formatFileDetailsText-DS96rr5Z.js";var E,D,O;function k(){return(k=e((()=>{s(),o(),E=n(),y(),_(),x(),w(),D=i(),O=(0,E.forwardRef)(({actions:e,className:t,deleteButtonLabel:n=`Verwijder`,formatDetailsText:r=C,name:i,onDelete:o,previewUrl:s,size:l,type:u,...d},f)=>{let p=r({size:l,type:u}),m=(0,E.useRef)(null),h=(0,E.useCallback)(e=>{e===null&&m.current&&m.current===document.activeElement&&S(m.current),m.current=e},[]);return(0,D.jsxs)(`div`,{...d,className:a(`ams-file-card`,t),ref:f,children:[(0,D.jsx)(`div`,{className:`ams-file-card__preview`,children:s?(0,D.jsx)(`img`,{alt:``,className:`ams-file-card__image`,src:s}):(0,D.jsx)(v,{size:`heading-3`,square:!0,svg:c})}),(0,D.jsxs)(`div`,{className:`ams-file-card__info`,children:[(0,D.jsx)(`div`,{className:`ams-file-card__name`,children:i}),p&&(0,D.jsx)(`div`,{className:`ams-file-card__details`,children:p})]}),(e||o)&&(0,D.jsxs)(`div`,{className:`ams-file-card__actions`,children:[e,o&&(0,D.jsxs)(b,{className:`ams-file-card__delete-button`,onClick:o,ref:h,variant:`tertiary`,children:[n,(0,D.jsx)(`span`,{className:`ams-visually-hidden`,children:` ${i}`})]})]})]})}),O.displayName=`FileCard`;try{O.displayName=`FileCard`,O.__docgenInfo={description:`Presents one file with its type and size, and the actions available for it.`,displayName:`FileCard`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/FileCard/FileCard.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"A slot for action buttons or links, e.g. to download or edit the file.\nA delete button is built-in and added when an `onDelete` handler is provided.",name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},deleteButtonLabel:{defaultValue:{value:`Verwijder`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The visible label of the delete button.
The name of the file is appended for screen readers.`,name:`deleteButtonLabel`,required:!1,tags:{default:`'Verwijder'`},type:{name:`string`}},formatDetailsText:{defaultValue:{value:`formatFileDetailsText('nl-NL')`},declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`Returns the text with the type and size of the file, displayed below its name.
Formatters for Dutch and English are available as exports.`,name:`formatDetailsText`,required:!1,tags:{default:`formatFileDetailsTextNl`},type:{name:`FormatFileDetailsText`}},name:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The name of the file.`,name:`name`,required:!0,tags:{},type:{name:`string`}},onDelete:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`A function to run when the user removes the file.
Adds a delete button after any custom actions.`,name:`onDelete`,required:!1,tags:{},type:{name:`(() => void)`}},previewUrl:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The address of an image to display instead of the generic document icon.`,name:`previewUrl`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:`The size of the file in bytes.`,name:`size`,required:!1,tags:{},type:{name:`number`}},type:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/FileCard/FileCard.tsx`,name:`TypeLiteral`}],description:"The media type of the file, e.g. `application/pdf`.",name:`type`,required:!1,tags:{},type:{name:`string`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-forms-file-card--docs File Card docs at Amsterdam Design System}`}}}catch{}})))()}var A,j,M,N,P,F;function I(){return(I=e((()=>{h(),k(),A=n(),j=r(),M=i(),N=e=>{e&&URL.revokeObjectURL(e)},P=e=>e.map(e=>({file:e,id:crypto.randomUUID(),previewUrl:e.type.startsWith(`image/`)?URL.createObjectURL(e):``})),F=()=>{let e=(0,A.useRef)(null),t=(0,A.useRef)(null),[n,r]=(0,A.useState)([]),[i,a]=(0,A.useState)(!1),o=(0,A.useRef)([]);(0,A.useEffect)(()=>{o.current=n},[n]),(0,A.useEffect)(()=>()=>{o.current.forEach(({previewUrl:e})=>N(e))},[]);let s=()=>{a(!1),n.forEach(({previewUrl:e})=>N(e)),r(P(Array.from(e.current?.files??[])))},c=i=>{let o=n.find(e=>e.id===i),s=n.filter(e=>e.id!==i);if(N(o?.previewUrl??``),e.current){let t=new DataTransfer;s.forEach(({file:e})=>t.items.add(e)),e.current.files=t.files}(0,j.flushSync)(()=>{r(s),a(s.length===0)}),s.length===0&&t.current?.focus()};return(0,M.jsxs)(m,{children:[(0,M.jsxs)(u,{children:[(0,M.jsx)(l,{htmlFor:`file-input`,children:`Bijlagen`}),(0,M.jsx)(d,{id:`file-input`,multiple:!0,onChange:s,ref:e})]}),n.length>0&&(0,M.jsx)(p,{markers:!1,children:n.map(({file:e,id:t,previewUrl:n})=>(0,M.jsx)(p.Item,{children:(0,M.jsx)(O,{name:e.name,onDelete:()=>c(t),previewUrl:n||void 0,size:e.size,type:e.type})},t))}),i&&(0,M.jsx)(g,{ref:t,tabIndex:-1,children:`Alle bijlagen zijn verwijderd.`})]})}})))()}var L=t({Default:()=>H,InAnUnorderedList:()=>K,Translated:()=>J,WithCustomActions:()=>G,WithFileInput:()=>q,WithPreview:()=>U,WithoutActions:()=>W,__namedExportsOrder:()=>Y,default:()=>V}),R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{h(),k(),w(),I(),R=i(),z=()=>{},B=()=>{},V={title:`Components/Forms/File Card`,component:O,args:{name:`paspoort.pdf`,size:1536e3,type:`application/pdf`},argTypes:{actions:{control:!1},formatDetailsText:{control:!1},onDelete:{control:!1},size:{control:{min:0,type:`number`}}}},H={args:{onDelete:z}},U={args:{name:`pasfoto.jpg`,onDelete:z,previewUrl:`https://picsum.photos/id/64/128/128`,size:248e3,type:`image/jpeg`}},W={},G={args:{actions:(0,R.jsx)(f,{onClick:B,variant:`tertiary`,children:`Download`}),onDelete:z}},K={args:{onDelete:z},render:e=>(0,R.jsxs)(p,{markers:!1,children:[(0,R.jsx)(p.Item,{children:(0,R.jsx)(O,{...e})}),(0,R.jsx)(p.Item,{children:(0,R.jsx)(O,{...e,name:`pasfoto.jpg`,previewUrl:`https://picsum.photos/id/64/128/256`,size:248e3,type:`image/jpeg`})}),(0,R.jsx)(p.Item,{children:(0,R.jsx)(O,{...e,name:`aanvraag-2026-03-11-definitief.docx`,size:72e3,type:`application/msword`})})]})},q={parameters:{docs:{canvas:{sourceState:`none`},codePanel:!1}},render:()=>(0,R.jsx)(F,{})},J={args:{onDelete:z},render:e=>(0,R.jsxs)(m,{children:[(0,R.jsx)(O,{...e,lang:`nl`}),(0,R.jsx)(O,{...e,deleteButtonLabel:`Delete`,formatDetailsText:T,lang:`en`,name:`passport.pdf`})]})},Y=[`Default`,`WithPreview`,`WithoutActions`,`WithCustomActions`,`InAnUnorderedList`,`WithFileInput`,`Translated`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pasfoto.jpg',
    onDelete: remove,
    previewUrl: 'https://picsum.photos/id/64/128/128',
    size: 248000,
    type: 'image/jpeg'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button onClick={download} variant="tertiary">
        Download
      </Button>,
    onDelete: remove
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <UnorderedList markers={false}>
      <UnorderedList.Item>
        <FileCard {...args} />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="pasfoto.jpg" previewUrl="https://picsum.photos/id/64/128/256" size={248000} type="image/jpeg" />
      </UnorderedList.Item>
      <UnorderedList.Item>
        <FileCard {...args} name="aanvraag-2026-03-11-definitief.docx" size={72000} type="application/msword" />
      </UnorderedList.Item>
    </UnorderedList>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      codePanel: false
    }
  },
  render: () => <FileInputWithFileCards />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: remove
  },
  render: args => <Column>
      <FileCard {...args} lang="nl" />
      <FileCard {...args} deleteButtonLabel="Delete" formatDetailsText={formatFileDetailsTextEn} lang="en" name="passport.pdf" />
    </Column>
}`,...J.parameters?.docs?.source}}}})))()}export{q as a,X as c,I as d,O as f,G as i,V as l,K as n,U as o,k as p,J as r,W as s,L as t,F as u};