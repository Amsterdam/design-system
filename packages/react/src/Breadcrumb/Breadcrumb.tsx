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
    const filteredBreadcrumbItems = useMemo(() => {
      return React.Children.toArray(children).filter((child, index) => {
        if (!isReactFunctionCom(child) || index >= breadcrumbLimit) return false

        if (child.type.displayName !== 'BreadcrumbItem') {
          console.warn(`Breadcrumb: ${child.type.displayName ?? child.type} is not a valid child`)
          return false
        }

        return true
      })
    }, [children])

    return (
      <nav {...restProps} className="amsterdam-breadcrumbs" ref={ref}>
        <ol className="amsterdam-breadcrumbs-list">{filteredBreadcrumbItems}</ol>
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
    <li className="amsterdam-breadcrumb">
      <a className="amsterdam-breadcrumb-link" href={href}>
        {children}
      </a>
    </li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumb.Item = BreadcrumbItem
