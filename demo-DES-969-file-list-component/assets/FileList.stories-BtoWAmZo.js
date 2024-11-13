import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{v as R,w as v}from"./index.esm-nImK0sTL.js";import{r as f}from"./index-B-o1Wr-g.js";import{y as j}from"./index.esm-5uBNoYvV.js";import{c as L}from"./clsx-B-dksMZM.js";import{I}from"./Icon-D1obyjGa.js";import{B as D}from"./Button-CLCAbUHj.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const u=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"text/plain":return"txt";case"application/pdf":return"pdf";case"application/msword":return"Word";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":return"Excel";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":return"PowerPoint";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return e}};try{u.displayName="formatFileType",u.__docgenInfo={description:"",displayName:"formatFileType",props:{}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T=(e,n=3)=>{const s=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(e===0)return"0 B";const r=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,r)).toPrecision(n)}${s[r]}`},p=f.forwardRef(({files:e,onDelete:n,className:s,...r},c)=>t.jsx("div",{...r,ref:c,className:L("ams-file-list",s),children:Array.from(e).map((i,l)=>t.jsxs("div",{className:"ams-file-list__file",children:[t.jsx("div",{className:"ams-file-list__file-preview",children:i.type.includes("image")?t.jsx("img",{src:URL.createObjectURL(i),alt:i.name,width:50,height:"auto"}):t.jsx(I,{svg:j,size:"level-3",square:!0})}),t.jsxs("div",{className:"ams-file-list__file-name",children:[i.name,t.jsxs("div",{className:"ams-file-input__file-details",children:["(",u(i.type),", ",T(i.size),")"]})]}),n&&t.jsx(D,{variant:"tertiary",onClick:()=>n(l),children:"Verwijder"})]},l))}));p.displayName="FileList";try{p.displayName="FileList",p.__docgenInfo={description:"",displayName:"FileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"FileList"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const B=()=>{const e=f.useRef(null),[n,s]=f.useState(null),r=()=>{e.current&&s(e.current.files)},c=i=>{if(n){const l=new DataTransfer;Array.from(n).forEach((w,y)=>{y!==i&&l.items.add(w)}),e.current&&(e.current.files=l.files),s(l.files)}};return t.jsxs(t.Fragment,{children:[t.jsx(R,{multiple:!0,ref:e,onChange:r}),n&&t.jsx(v,{files:n,onDelete:c})]})},m=new DataTransfer;m.items.add(new File(["sample1"],"sample1.txt",{type:"text/plain",lastModified:Date.now()}));m.items.add(new File(["sample2"],"sample2.txt",{type:"text/plain",lastModified:Date.now()}));const E=m.files,N={title:"Components/Forms/File List",component:p,args:{files:E},argTypes:{files:{table:{disable:!0}}}},a={},o={parameters:{docs:{source:{code:`
  export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFilesChange = () => {
    if (inputRef.current) {
      setFiles(inputRef.current.files)
    }
  }

  const handleFileRemove = (index: number) => {
    if (files) {
      const newFiles = new DataTransfer()
      Array.from(files).forEach((file, i) => {
        if (i !== index) newFiles.items.add(file)
      })
      if (inputRef.current) {
        inputRef.current.files = newFiles.files
      }
      setFiles(newFiles.files)
    }
  }

  return (
    <>
      <FileInput multiple ref={inputRef} onChange={handleFilesChange} />
      {files && <FileList files={files} onDelete={handleFileRemove} />}
    </>
  )
}
`}}},render:()=>t.jsx(B,{})};var d,F,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(F=a.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var x,g,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
  export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFilesChange = () => {
    if (inputRef.current) {
      setFiles(inputRef.current.files)
    }
  }

  const handleFileRemove = (index: number) => {
    if (files) {
      const newFiles = new DataTransfer()
      Array.from(files).forEach((file, i) => {
        if (i !== index) newFiles.items.add(file)
      })
      if (inputRef.current) {
        inputRef.current.files = newFiles.files
      }
      setFiles(newFiles.files)
    }
  }

  return (
    <>
      <FileInput multiple ref={inputRef} onChange={handleFilesChange} />
      {files && <FileList files={files} onDelete={handleFileRemove} />}
    </>
  )
}
\`
      }
    }
  },
  render: () => <FileInputWithFileList />
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const C=["Default","WithInput"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithInput:o,__namedExportsOrder:C,default:N},Symbol.toStringTag,{value:"Module"}));export{O as F,o as W};
