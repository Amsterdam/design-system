/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { IconProps } from '../Icon'
import { ImageProps } from '../Image'

export type FileListFileProps = {
  thumbnail?: ImageProps['src']
  icon: IconProps['svg']
  removable?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FileListFile = forwardRef(
  ({ children, className, ...restProps }: FileListFileProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-file-list', className)}>
      {children}
    </div>
  ),
)

FileListFile.displayName = 'FileList.File'
