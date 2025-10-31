/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { Button } from '../Button'
import { formatFileSize } from '../common/formatFileSize'
import { formatFileType } from '../common/formatFileType'
import { Icon } from '../Icon'

export type FileListItemProps = {
  file: File
  onDelete?: () => void
} & HTMLAttributes<HTMLLIElement>

export const FileListItem = forwardRef(
  ({ className, file, onDelete, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} className={clsx('ams-file-list__item', className)} ref={ref}>
      <div className="ams-file-list__item-preview">
        {file.type.startsWith('image/') ? (
          <img alt={file.name} src={URL.createObjectURL(file)} />
        ) : (
          <Icon size="heading-3" square svg={DocumentIcon} />
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
          <Button onClick={() => onDelete()} variant="tertiary">
            Verwijder
          </Button>
        </div>
      )}
    </li>
  ),
)

FileListItem.displayName = 'FileList.Item'
