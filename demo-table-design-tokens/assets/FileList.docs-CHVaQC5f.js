import{j as e}from"./iframe-DxFJ3SCQ.js";import{useMDXComponents as s}from"./index-CdbzGJT0.js";import{M as l,f as o,P as a,i as r,S as m}from"./blocks-DPfOuimJ.js";import{a as f,W as p}from"./FileList.stories-DOigeGQZ.js";import{D as c}from"./DesignTokensTable-CKsYRah6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnyXa-QK.js";import"./Icon-C8rLjmkz.js";import"./Button-DJUqXRXT.js";const u=`/**
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
`,h=`<!-- @license CC0-1.0 -->

# File List

An overview of files, showing their name, type, size, and a preview.
`,d={"file-list":{gap:{value:"{ams.space.m}"},"padding-block":{value:"{ams.space.m}"},file:{"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.small.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},gap:{value:"{ams.space.s}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"},details:{color:{value:"{ams.color.text.secondary}"}},preview:{width:{value:"clamp(2.5rem, 10vw, 5rem)"}}}}},x={ams:d};function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:f}),`
`,e.jsx(o,{children:h}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"using-a-file-input",children:"Using a file input"}),`
`,e.jsxs(n.p,{children:["To connect a File Input to a File List, use the ",e.jsx(n.code,{children:"onChange"}),` event to update the
list of files and use `,e.jsx(n.code,{children:"onDelete"})," when removing a file from the list."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(m,{code:u,language:"jsx"}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:x})]})}function D(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{D as default};
