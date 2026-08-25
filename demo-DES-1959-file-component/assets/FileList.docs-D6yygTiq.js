import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,h as i,i as a,n as o,p as s,u as c}from"./blocks-BQKRe05W.js";import{t as l}from"./jsx-runtime-ATHzeHXA.js";import{i as u,r as d}from"./react-Dyi61YEg.js";import{n as f,t as p}from"./DesignTokensTable-CUgHy4tD.js";import{n as m,r as h,t as g}from"./FileList.stories-DcNX-EbX.js";import{n as _,r as v}from"./FileListItem.stories-BPetitUk.js";var y,b;function x(){return(x=e((()=>{y={"file-list":{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},file:{"font-family":{$deprecated:"Use `ams.file-card.font-family` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$deprecated:"Use `ams.file-card.font-size` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$deprecated:"Use `ams.file-card.font-weight` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$deprecated:"Use `ams.file-card.gap` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$deprecated:"Use `ams.file-card.line-height` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},details:{color:{$deprecated:"Use `ams.file-card.details.color` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.details.color}`,$extensions:{"nl.amsterdam.type":`color`}}},preview:{width:{$deprecated:"Use `ams.file-card.preview.width` instead. Will be removed on or after 2027-04-01.",$value:`{ams.file-card.preview.width}`,$extensions:{"nl.amsterdam.type":`dimension`}}}}}},b={ams:y}})))()}var S;function C(){return(C=e((()=>{S=`/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Field, FileCard, FileInput, FileList, Label, Paragraph } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const emptiedRef = useRef<HTMLParagraphElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [emptied, setEmptied] = useState(false)

  // A File Card only displays the address, so releasing it belongs to whoever creates it.
  // This runs for the previous set whenever the selection changes, and once more on unmount.
  useEffect(() => () => previewUrls.forEach((url) => url && URL.revokeObjectURL(url)), [previewUrls])

  const selectFiles = (selected: File[]) => {
    setFiles(selected)
    setPreviewUrls(selected.map((file) => (file.type.startsWith('image/') ? URL.createObjectURL(file) : '')))
  }

  const changeFiles = () => {
    setEmptied(false)
    selectFiles(Array.from(inputRef.current?.files ?? []))
  }

  const removeFile = (index: number) => {
    const remaining = files.filter((_, position) => position !== index)

    // Keep the field in step with the list, so it never states a selection this page no longer shows.
    if (inputRef.current) {
      const selection = new DataTransfer()

      remaining.forEach((file) => selection.items.add(file))
      inputRef.current.files = selection.files
    }

    // Commit the removal before moving focus, so focus does not land while the button it came from
    // is still in the tree.
    flushSync(() => {
      selectFiles(remaining)
      setEmptied(remaining.length === 0)
    })

    // A File Card moves focus to the delete button beside it, but it cannot know where focus should go
    // when the last file leaves and the list disappears with it. Focus goes to this page’s own account
    // of what happened, rather than back to the field, whose wording the browser generates and does not
    // everywhere keep up to date for a screen reader.
    if (remaining.length === 0) {
      emptiedRef.current?.focus()
    }
  }

  return (
    <>
      <Field>
        <Label htmlFor="file-input">Bijlagen</Label>
        <FileInput id="file-input" multiple onChange={changeFiles} ref={inputRef} />
      </Field>
      {files.length > 0 && (
        <FileList>
          {files.map((file, index) => (
            <FileList.Item key={file.name}>
              <FileCard
                name={file.name}
                onDelete={() => removeFile(index)}
                previewUrl={previewUrls[index] || undefined}
                size={file.size}
                type={file.type}
              />
            </FileList.Item>
          ))}
        </FileList>
      )}
      {emptied && (
        <Paragraph ref={emptiedRef} tabIndex={-1}>
          Alle bijlagen zijn verwijderd.
        </Paragraph>
      )}
    </>
  )
}
`})))()}function w(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...u(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
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
`,(0,E.jsxs)(i.p,{children:[`Renders the `,(0,E.jsx)(i.code,{children:`li`}),` element for one file, around whatever is put inside it.
Place a `,(0,E.jsx)(i.a,{href:`/docs/components-forms-file-card--docs`,children:`File Card`}),` there, which displays the file and its actions.`]}),`
`,(0,E.jsx)(o,{of:_}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsxs)(i.p,{children:[`The `,(0,E.jsx)(i.code,{children:`file`}),` and `,(0,E.jsx)(i.code,{children:`onDelete`}),` props are deprecated and will be removed on or after 2027-04-01.
They still work, and warn in the development build, but they render a File Card without a preview: the thumbnail they used to display came from an object URL that was never released.
Pass `,(0,E.jsx)(i.code,{children:`previewUrl`}),` to a File Card of your own to display one again.`]}),`
`,(0,E.jsx)(i.pre,{children:(0,E.jsx)(i.code,{className:`language-diff`,children:`- <FileList.Item file={file} onDelete={remove} />
+ <FileList.Item>
+   <FileCard name={file.name} onDelete={remove} size={file.size} type={file.type} />
+ </FileList.Item>
`})}),`
`,(0,E.jsx)(i.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(i.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(i.p,{children:`Use a File List to display several files as a list, so that screen readers announce how many there are.
A single file needs no list: use a File Card on its own.`}),`
`,(0,E.jsx)(i.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(i.h3,{id:`using-a-file-input`,children:`Using a file input`}),`
`,(0,E.jsxs)(i.p,{children:[`To connect a File Input to a File List, use the `,(0,E.jsx)(i.code,{children:`onChange`}),` event to update the list of files, and `,(0,E.jsx)(i.code,{children:`onDelete`}),` to remove one.
The object URL for a preview is created as the selection changes and released in an effect clean-up, so no address outlives the file it points at.`]}),`
`,(0,E.jsx)(i.p,{children:`Removing the last file empties the list, which is the one case a File Card cannot handle for itself.
This example sends focus to a line of its own that says the files are gone.
Sending it back to the field instead is unreliable.
The wording beside the browse button is generated by the browser, and not every browser updates what a screen reader reads there when the selection changes in code.
One that does not will announce the file that has just been removed.`}),`
`,(0,E.jsx)(o,{of:m}),`
`,(0,E.jsx)(r,{code:S,language:`jsx`}),`
`,(0,E.jsx)(i.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(i.p,{children:`A File List is a column of File Cards with even space between them.
Everything about how one file is displayed – the preview column, the name, the details below it – belongs to the File Card and is documented there.`}),`
`,(0,E.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(i.p,{children:[`A File List renders `,(0,E.jsx)(i.code,{children:`ul`}),` and `,(0,E.jsx)(i.code,{children:`li`}),` elements, so screen readers announce it as a list and report how many files it holds.`]}),`
`,(0,E.jsx)(i.p,{children:`Removing a file moves focus to the delete button of the file next to it, which is what keeps someone working through the list with a keyboard from losing their place.
That behaviour lives in the File Card, and its documentation covers the case this component cannot handle: the last file leaving, which takes the list with it.`}),`
`,(0,E.jsx)(i.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(i.ul,{children:[`
`,(0,E.jsxs)(i.li,{children:[(0,E.jsx)(i.a,{href:`/docs/components-forms-file-card--docs`,children:`File Card`}),` – displays one file, within this list or on its own.`]}),`
`,(0,E.jsxs)(i.li,{children:[(0,E.jsx)(i.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select files to add to the File List.`]}),`
`]}),`
`,(0,E.jsx)(i.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(p,{tokens:b})]})}function T(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=l(),d(),i(),f(),x(),C(),h(),v()})))()}D();export{T as default};