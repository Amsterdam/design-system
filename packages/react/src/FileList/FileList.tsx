/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { formatFileSize, formatFileType } from '../common'

export type FileListProps = {
  files: FileList
  removeable?: boolean
} & HTMLAttributes<HTMLDivElement>

export const FileList = forwardRef(
  ({ files, removeable = true, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [fileList, setFileList] = useState(Array.from(files))

    const removeFile = (index: number) => {
      setFileList((prevFiles) => prevFiles.filter((_, i) => i !== index))
    }

    return (
      <div {...restProps} ref={ref} className={clsx('ams-file-list', className)}>
        {fileList.map((file, index) => (
          <div key={index} className="ams-file-list__file">
            <div className="ams-file-list__file-preview">
              {file.type.includes('image') ? (
                <img src={URL.createObjectURL(file)} alt={file.name} width={50} height="auto" />
              ) : (
                <Icon svg={DocumentIcon} size="level-3" square />
              )}
            </div>
            <div className="ams-file-list__file-name">
              {file.name}
              <div className="ams-file-input__file-details">
                ({formatFileType(file.type)}, {formatFileSize(file.size)})
              </div>
            </div>
            {removeable && (
              <Button variant="tertiary" onClick={() => removeFile(index)}>
                Verwijder
              </Button>
            )}
          </div>
        ))}
      </div>
    )
  },
)

FileList.displayName = 'FileList'
