/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  AnchorHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Paragraph } from '../Paragraph'

export const TopTaskLinkTitle = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-top-task-link__title', className)}>
      {children}
    </span>
  ),
)

TopTaskLinkTitle.displayName = 'TopTaskLinkTitle'

export const TopTaskLinkDescription = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <Paragraph
      {...restProps}
      size="small"
      ref={ref}
      className={clsx('amsterdam-top-task-link__description', className)}
    >
      {children}
    </Paragraph>
  ),
)

TopTaskLinkDescription.displayName = 'TopTaskLinkDescription'

interface TopTaskLinkComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & RefAttributes<HTMLAnchorElement>
  > {
  Title: typeof TopTaskLinkTitle
  Description: typeof TopTaskLinkDescription
}

export const TopTaskLink = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a {...restProps} ref={ref} className={clsx('amsterdam-top-task-link', className)}>
      {children}
    </a>
  ),
) as TopTaskLinkComponent

TopTaskLink.Title = TopTaskLinkTitle
TopTaskLink.Description = TopTaskLinkDescription

TopTaskLink.displayName = 'TopTaskLink'
TopTaskLink.Title.displayName = 'TopTaskLink.Title'
TopTaskLink.Description.displayName = 'TopTaskLink.Description'
