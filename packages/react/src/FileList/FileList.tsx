/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FileListFile } from './FileListFile'

export type FileListProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FileListRoot = forwardRef(
  ({ children, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-file-list', className)}>
      {children}
    </div>
  ),
)

FileListRoot.displayName = 'FileList'

export const FileList = Object.assign(FileListRoot, { File: FileListFile })
