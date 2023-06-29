import React, { forwardRef, useMemo } from 'react'
import type { ForwardedRef, FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react'

function isReactFunctionCom<Tprops>(
  element: React.ReactNode,
): element is React.ReactElement<Tprops, FunctionComponent> {
  return React.isValidElement(element)
}

interface BreadcrumbComponent
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLElement>> & React.RefAttributes<HTMLElement>
  > {
  Item: typeof BreadcrumbItem
}

// We're validating against an index. Maxiumum children are 8.
const breadcrumbLimit = 8

export const Breadcrumb = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>, ref: ForwardedRef<HTMLElement>) => {
    const allowedBreadcrumbItems = useMemo(() => {
      return React.Children.toArray(children).filter((child, index) => {
        if (isReactFunctionCom(child) && child.type.displayName !== 'BreadcrumbItem') {
          // TODO: Do we want to log this as a warning?
          console.warn(`Breadcrumb: ${child.type.displayName ?? child.type} is not a valid child`)
          return false
        }

        return index < breadcrumbLimit
      })
    }, [children])

    return (
      <nav {...restProps} className="amsterdam-breadcrumb" ref={ref}>
        <ol className="amsterdam-breadcrumb-list">{allowedBreadcrumbItems}</ol>
      </nav>
    )
  },
) as BreadcrumbComponent

Breadcrumb.displayName = 'Breadcrumb'

interface BreadcrumbItemProps extends PropsWithChildren {
  href: string
}

// TODO: We might wanna wrap this in a forwardRef as well.
const BreadcrumbItem = ({ children, href }: BreadcrumbItemProps) => {
  return (
    <li className="amsterdam-breadcrumb-item">
      <a className="amsterdam-breadcrumb-link" href={href}>
        {children}
      </a>
    </li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumb.Item = BreadcrumbItem
