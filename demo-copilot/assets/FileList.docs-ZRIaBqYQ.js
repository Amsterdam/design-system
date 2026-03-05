import{j as e}from"./iframe-D9fpJekQ.js";import{useMDXComponents as s}from"./index-BQytez4m.js";import{M as o,e as l,f as a,i as r,m}from"./blocks-DycSpFL3.js";import{a as p,W as f}from"./FileList.stories-Bt-Lwv2-.js";import{D as c}from"./DesignTokensTable-BSA7KgWE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGnZ0DjM.js";import"./Icon-D9BzOJOe.js";import"./Button-D5GDcWNZ.js";import"./BorderSample-B2d8ZRrm.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-D0T1YKWn.js";import"./ColorSample-BuOwAzK0.js";import"./SpaceSample-CqwW0z98.js";import"./TypographySample-C8x684tC.js";const u=`/**
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
`,d=`<!-- @license CC0-1.0 -->

# File List

An overview of files, showing their name, type, size, and a preview.
`,h={"file-list":{gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},file:{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.small.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"line-height":{$value:"{ams.typography.body-text.small.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},details:{color:{$value:"{ams.color.text.secondary}",$type:"color"}},preview:{width:{$value:"clamp(2.5rem, 10vw, 5rem)",$type:"dimension"}}}}},x={ams:h};function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:p}),`
`,e.jsx(l,{children:d}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"using-a-file-input",children:"Using a file input"}),`
`,e.jsxs(n.p,{children:["To connect a File Input to a File List, use the ",e.jsx(n.code,{children:"onChange"}),` event to update the
list of files and use `,e.jsx(n.code,{children:"onDelete"})," when removing a file from the list."]}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(m,{code:u,language:"jsx"}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:x})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
