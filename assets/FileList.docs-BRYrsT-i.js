import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,d as r,f as i,l as a,m as o,n as s,u as c,v as l}from"./iframe-B4pGrrTF.js";import{n as u,t as d}from"./DesignTokensTable-DgKd7JFV.js";import{t as f}from"./mdx-react-shim-Dmm61GVv.js";import{WithInput as p,n as m,t as h}from"./FileList.stories-CtVNPQdZ.js";var g,_,v=e((()=>{g={"file-list":{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},_={ams:g}})),y,b=e((()=>{y=`/**
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
`}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(n,{of:h}),`
`,(0,C.jsx)(c,{}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use a File List to display the files a user has selected or uploaded, showing each file’s name, type, size, and a preview.`}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`using-a-file-input`,children:`Using a file input`}),`
`,(0,C.jsxs)(t.p,{children:[`To connect a File Input to a File List, use the `,(0,C.jsx)(t.code,{children:`onChange`}),` event to update the
list of files and use `,(0,C.jsx)(t.code,{children:`onDelete`}),` when removing a file from the list.`]}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(r,{code:y,language:`jsx`}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select files to add to the File List.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:_})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),o(),u(),v(),b(),m()}))();export{S as default};