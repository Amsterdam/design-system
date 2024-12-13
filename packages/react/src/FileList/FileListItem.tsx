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
import { formatFileSize } from '../common/formatFileSize'
import { formatFileType } from '../common/formatFileType'

export type FileListItemProps = {
  file: File
  onRemove?: () => void
} & HTMLAttributes<HTMLLIElement>

export const FileListItem = forwardRef(
  ({ file, onRemove, className, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} ref={ref} className={clsx('ams-file-list__file', className)}>
      <div className="ams-file-list__file-preview">
        {file.type.includes('image') ? (
          <img src={URL.createObjectURL(file)} alt={file.name} />
        ) : (
          <Icon svg={DocumentIcon} size="level-3" square />
        )}
      </div>
      <div className="ams-file-list__file-info">
        {file.name}
        <div className="ams-file-input__file-details">
          ({formatFileType(file.type)}, {formatFileSize(file.size)})
        </div>
      </div>
      {onRemove && (
        <div>
          <Button variant="tertiary" onClick={() => onRemove()}>
            Verwijder
          </Button>
        </div>
      )}
    </li>
  ),
)

FileListItem.displayName = 'FileList.Item'
