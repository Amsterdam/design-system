/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { formatFileSize, formatFileType } from '../common'

export type FileListProps = {
  files: FileList
  // eslint-disable-next-line no-unused-vars
  onDelete?: (index: number) => void
} & HTMLAttributes<HTMLDivElement>

export const FileList = forwardRef(
  ({ files, onDelete, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-file-list', className)}>
      {Array.from(files).map((file, index) => (
        <div key={index} className="ams-file-list__file">
          <div className="ams-file-list__file-preview">
            {file.type.includes('image') ? (
              <img src={URL.createObjectURL(file)} alt={file.name} />
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
          {onDelete && (
            <div>
              <Button variant="tertiary" onClick={() => onDelete(index)}>
                Verwijder
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  ),
)

FileList.displayName = 'FileList'
