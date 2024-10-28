/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useEffect, useId, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'
import { Icon } from '../Icon'

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

    const prettyBytes = (num: number, precision = 3) => {
      const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      if (num === 0) return '0 B'

      const exponent = Math.floor(Math.log10(num) / 3)
      const size = (num / Math.pow(1000, exponent)).toPrecision(precision)

      return `${size}${UNITS[exponent]}`
    }

    const prettyType = (type: string) => {
      switch (type) {
        case 'image/gif':
          return 'gif'
        case 'image/jpeg':
          return 'jpg'
        case 'image/png':
          return 'png'
        case 'application/pdf':
          return 'PDF'
        case 'application/msword':
          return 'Word'
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          return 'Word'
        case 'application/vnd.ms-excel':
          return 'Excel'
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          return 'Excel'
        case 'application/vnd.ms-powerpoint':
          return 'PowerPoint'
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
          return 'PowerPoint'
        default:
          return type
      }
    }

    return (
      <>
        <input
          {...restProps}
          id={showFiles ? fileInputId : undefined}
          ref={inputRef}
          className={clsx('ams-file-input', showFiles && 'ams-file-input--has-preview', className)}
          type="file"
        />
        {showFiles && (
          <div ref={previewRef} className="ams-file-input__preview">
            {files && files.length > 0
              ? Array.from(files).map((file) => (
                  <div className="ams-file-input__file">
                    <div className="ams-file-input__file-preview">
                      {file.type.includes('image') ? (
                        <img src={URL.createObjectURL(file)} alt={file.name} width={50} height="auto" />
                      ) : (
                        <Icon svg={DocumentIcon} size="level-3" square />
                      )}
                    </div>
                    <div className="ams-file-input__file-title">
                      {file.name}
                      <div className="ams-file-input__file-details">
                        ({prettyType(file.type)} {prettyBytes(file.size)} )
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}
      </>
    )
  },
)

FileInput.displayName = 'FileInput'
