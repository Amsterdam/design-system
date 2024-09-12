import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DemoArticleProps = HTMLAttributes<HTMLDivElement>

export const DemoArticle = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<DemoArticleProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className="utrecht-event">
      {children}
    </div>
  ),
)

DemoArticle.displayName = 'DemoArticle'
