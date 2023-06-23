import React, { useMemo } from 'react'
import type { FunctionComponent, PropsWithChildren } from 'react'

function isReactFunctionCom<Tprops>(
  element: React.ReactNode,
): element is React.ReactElement<Tprops, FunctionComponent> {
  return React.isValidElement(element)
}

// We're validating against an index. Maxiumum children are 8.
const breadcrumbLimit = 8

export const Breadcrumb = ({ children }: PropsWithChildren) => {
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
    <nav className="amsterdam-breadcrumbs">
      <ol className="amsterdam-breadcrumbs-list">{filteredBreadcrumbItems}</ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="amsterdam-breadcrumb">
      <a className="amsterdam-breadcrumb-link" href="#">
        {children}
      </a>
    </li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'
Breadcrumb.item = BreadcrumbItem
