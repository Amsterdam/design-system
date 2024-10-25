/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'
import { Icon } from '../Icon'
import { Paragraph } from '../Paragraph'

export type FileInputProps = {
  showFiles?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ showFiles, className, ...restProps }, ref: ForwardedRef<HTMLInputElement>) => {
    const fileInputId = useId()
    const previewRef = useRef<HTMLDivElement>(null)
    const [files, setFiles] = useState<FileList | null>(null)

    const inputRef = useRef<HTMLInputElement | null>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const updateFilesPreview = () => {
      if (inputRef.current) {
        setFiles(inputRef.current.files)
      }
    }

    useEffect(() => {
      if (showFiles && inputRef.current) {
        inputRef.current.addEventListener('change', updateFilesPreview)
        return () => {
          inputRef.current?.removeEventListener('change', updateFilesPreview)
        }
      }
      return () => window.removeEventListener('change', updateFilesPreview)
    }, [showFiles])

    const prettyBytes = (num: number, precision = 3, addSpace = true) => {
      const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      if (Math.abs(num) < 1) {
        return num + (addSpace ? ' ' : '') + UNITS[0]
      }

      const exponent = Math.min(Math.floor(Math.log10(Math.abs(num)) / 3), UNITS.length - 1)
      const n = Number((Math.abs(num) / 1000 ** exponent).toPrecision(precision))

      return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent]
    }

    return (
      <>
        {showFiles && (
          <label htmlFor={fileInputId} className="ams-file-input__label">
            <Paragraph>Selecteer of sleep uw bestanden hier</Paragraph>
          </label>
        )}
        <input
          {...restProps}
          id={showFiles ? fileInputId : undefined}
          ref={inputRef}
          className={clsx('ams-file-input', showFiles && 'ams-file-input--has-preview', className)}
          type="file"
        />
        {showFiles && (
          <div ref={previewRef} className="ams-file-input__preview">
            {files && files.length > 0 ? (
              Array.from(files).map((file, index) => (
                <div className="ams-file-input__file">
                  <div className="ams-file-input__thumb">
                    {file.type.includes('image') ? (
                      <img src={URL.createObjectURL(file)} alt={file.name} width={100} height="auto" />
                    ) : (
                      <Icon svg={DocumentIcon} size="level-5" square />
                    )}
                  </div>
                  <Paragraph key={index}>
                    {file.name}
                    <br />
                    {prettyBytes(file.size)} ({file.type})
                  </Paragraph>
                </div>
              ))
            ) : (
              <Paragraph>Geen bestanden geselecteerd</Paragraph>
            )}
          </div>
        )}
      </>
    )
  },
)

FileInput.displayName = 'FileInput'
