import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,h as i,i as a,n as o,p as s,u as c}from"./blocks-BQKRe05W.js";import{t as l}from"./jsx-runtime-ATHzeHXA.js";import{i as u,r as d}from"./react-Dyi61YEg.js";import{n as f,t as p}from"./DesignTokensTable-C7akAg1Z.js";import{n as m,r as h,t as g}from"./FileList.stories-CMxUQrIr.js";import{n as _,r as v}from"./FileListItem.stories-DT5vHU_g.js";var y,b;function x(){return(x=e((()=>{y={"file-list":{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},b={ams:y}})))()}var S;function C(){return(C=e((()=>{S=`/**
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
`})))()}function w(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(c,{of:g}),`
`,(0,E.jsx)(s,{}),`
`,(0,E.jsx)(t,{of:g}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i.p,{children:`This component has no props to configure.`}),`
`,(0,E.jsx)(i.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsx)(i.h3,{id:`item`,children:`Item`}),`
`,(0,E.jsxs)(i.p,{children:[`Represents a selected `,(0,E.jsx)(i.code,{children:`file`}),`.
Provide an `,(0,E.jsx)(i.code,{children:`onDelete`}),` callback to let users remove it from the list.`]}),`
`,(0,E.jsx)(o,{of:_}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(i.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(i.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(i.p,{children:`Use a File List to display the files a user has selected or uploaded, showing each file’s name, type, size, and a preview.`}),`
`,(0,E.jsx)(i.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(i.h3,{id:`using-a-file-input`,children:`Using a file input`}),`
`,(0,E.jsxs)(i.p,{children:[`To connect a File Input to a File List, use the `,(0,E.jsx)(i.code,{children:`onChange`}),` event to update the
list of files and use `,(0,E.jsx)(i.code,{children:`onDelete`}),` when removing a file from the list.`]}),`
`,(0,E.jsx)(o,{of:m}),`
`,(0,E.jsx)(r,{code:S,language:`jsx`}),`
`,(0,E.jsx)(i.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(i.p,{children:`Every item is one row: a preview of fixed width, then the name and details, then the delete button.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down the list.`}),`
`,(0,E.jsx)(i.p,{children:`A name too long for its row is cut off with an ellipsis on a single line rather than wrapped.
Rows then stay the same height whatever has been uploaded, which keeps a list of several files scannable.`}),`
`,(0,E.jsx)(i.p,{children:`The file type and size sit below the name in their own colour, so the name stays the thing you read first.`}),`
`,(0,E.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(i.p,{children:[`A File List renders `,(0,E.jsx)(i.code,{children:`ul`}),` and `,(0,E.jsx)(i.code,{children:`li`}),` elements, so screen readers announce it as a list and report how many files it holds.`]}),`
`,(0,E.jsx)(i.p,{children:`Cutting off a long name is visual only.
The whole name is in the markup and is announced in full, so nothing is lost to someone who cannot see where the row ends.`}),`
`,(0,E.jsx)(i.p,{children:`The preview of an image file repeats the file name as its alternative text, so that name is announced twice: once for the thumbnail and once for the text beside it.`}),`
`,(0,E.jsx)(i.p,{children:`Every delete button is labelled ‘Verwijder’, in Dutch and without the name of the file it removes.
Someone reviewing the buttons of the page out of context hears the same word for each of them, and the label cannot be configured.
Until it can, prefer a File List short enough to keep each button next to the file it belongs to.`}),`
`,(0,E.jsx)(i.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(i.ul,{children:[`
`,(0,E.jsxs)(i.li,{children:[(0,E.jsx)(i.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select files to add to the File List.`]}),`
`]}),`
`,(0,E.jsx)(i.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(p,{tokens:b})]})}function T(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=l(),d(),i(),f(),x(),C(),h(),v()})))()}D();export{T as default};