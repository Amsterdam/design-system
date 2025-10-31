import{j as e}from"./iframe-D_5a-D79.js";import{useMDXComponents as s}from"./index-_6aTF-qB.js";import{M as l,f as r,P as o,i as a,S as f}from"./blocks-B4_Xoq1y.js";import{a as m,W as c}from"./FileList.stories-fKIzTfyV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oI8l2B0E.js";import"./Icon-8-gmbVcf.js";import"./Button-DFxs-dKk.js";const u=`/**
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
`,e.jsx(l,{of:m}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"using-a-file-input",children:"Using a file input"}),`
`,e.jsxs(n.p,{children:["To connect a File Input to a File List, use the ",e.jsx(n.code,{children:"onChange"}),` event to update the
list of files and use `,e.jsx(n.code,{children:"onDelete"})," when removing a file from the list."]}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(f,{code:u,language:"jsx"})]})}function R(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{R as default};
