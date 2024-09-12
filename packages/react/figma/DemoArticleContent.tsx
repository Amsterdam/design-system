import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DemoArticlePropsHeader = HTMLAttributes<HTMLDivElement>

export const DemoArticleContent = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<DemoArticlePropsHeader>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className="utrecht-event">
      {children}
    </div>
  ),
)

DemoArticleContent.displayName = 'DemoArticleContent'
