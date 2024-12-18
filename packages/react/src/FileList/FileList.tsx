/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FileListItem } from './FileListItem'

export type FileListProps = {} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const FileListRoot = forwardRef(
  ({ children, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ul {...restProps} ref={ref} className={clsx('ams-file-list', className)}>
      {children}
    </ul>
  ),
)

FileListRoot.displayName = 'FileList'

export const FileList = Object.assign(FileListRoot, {
  Item: FileListItem,
})
