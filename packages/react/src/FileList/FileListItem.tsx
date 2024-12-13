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
  onDelete?: () => void
} & HTMLAttributes<HTMLLIElement>

export const FileListItem = forwardRef(
  ({ file, onDelete, className, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} ref={ref} className={clsx('ams-file-list__item', className)}>
      <div className="ams-file-list__item-preview">
        {file.type.includes('image') ? (
          <img src={URL.createObjectURL(file)} alt={file.name} />
        ) : (
          <Icon svg={DocumentIcon} size="level-3" square />
        )}
      </div>
      <div className="ams-file-list__item-info">
        {file.name}
        <div className="ams-file-input__item-details">
          ({formatFileType(file.type)}, {formatFileSize(file.size)})
        </div>
      </div>
      {onDelete && (
        <div>
          <Button variant="tertiary" onClick={() => onDelete()}>
            Verwijder
          </Button>
        </div>
      )}
    </li>
  ),
)

FileListItem.displayName = 'FileList.Item'
