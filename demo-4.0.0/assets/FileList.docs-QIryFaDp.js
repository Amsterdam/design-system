import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,l as a,n as o,s,u as c}from"./blocks-BG-q98mP.js";import{n as l,t as u}from"./DesignTokensTable-CJgajNVN.js";import{t as d}from"./mdx-react-shim-9Tyt82po.js";import{WithInput as f,n as p,t as m}from"./FileList.stories-BYNmmDed.js";var h,g=e((()=>{h=`/**
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
`})),_,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# File List

An overview of files, showing their name, type, size, and a preview.
`})),y,b,x=e((()=>{y={"file-list":{gap:{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},file:{"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},details:{color:{$value:`{ams.color.text.secondary}`,$type:`color`}},preview:{width:{$value:`clamp(2.5rem, 10vw, 5rem)`,$type:`dimension`}}}}},b={ams:y}}));function S(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:m}),`
`,(0,w.jsx)(s,{children:_}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`using-a-file-input`,children:`Using a file input`}),`
`,(0,w.jsxs)(t.p,{children:[`To connect a File Input to a File List, use the `,(0,w.jsx)(t.code,{children:`onChange`}),` event to update the
list of files and use `,(0,w.jsx)(t.code,{children:`onDelete`}),` when removing a file from the list.`]}),`
`,(0,w.jsx)(o,{of:f}),`
`,(0,w.jsx)(c,{code:h,language:`jsx`}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),p(),g(),v(),x(),l()}))();export{C as default};