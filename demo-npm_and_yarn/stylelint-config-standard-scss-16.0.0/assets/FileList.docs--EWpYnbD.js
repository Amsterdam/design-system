import{j as e}from"./iframe-D3FpZvBr.js";import{useMDXComponents as s}from"./index-CDc_mH-w.js";import{M as l,c as r,P as o,f as a,S as f}from"./blocks-DHAx2Aah.js";import{F as c,W as m}from"./FileList.stories-CjZW5nr4.js";import"./index-DwhgtYhx.js";import"./Icon-DDojY7jR.js";import"./Button-CVvVBiqt.js";const u=`/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileInput, FileList } from '@amsterdam/design-system-react'
import { useRef, useState } from 'react'

export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileList | null>(null)

  const changeFiles = () => {
    if (inputRef.current) {
      setFiles(inputRef.current.files)
    }
  }

  const removeFile = (index: number) => {
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
      <FileInput multiple onChange={changeFiles} ref={inputRef} />
      {files && (
        <FileList>
          {Array.from(files).map((file, index) => (
            <FileList.Item file={file} key={file.name} onDelete={() => removeFile(index)} />
          ))}
        </FileList>
      )}
    </>
  )
}
`,p=`<!-- @license CC0-1.0 -->

# File List

An overview of files, showing their name, type, size, and a preview.
`;/*@license CC0-1.0*/function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"using-a-file-input",children:"Using a file input"}),`
`,e.jsxs(n.p,{children:["To connect a File Input to a File List, use the ",e.jsx(n.code,{children:"onChange"}),` event to update the
list of files and use `,e.jsx(n.code,{children:"onDelete"})," when removing a file from the list."]}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(f,{code:u,language:"jsx"})]})}function w(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{w as default};
