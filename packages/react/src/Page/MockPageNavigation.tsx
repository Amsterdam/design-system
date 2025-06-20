import type { AnchorHTMLAttributes, FC, SVGProps } from 'react'

type MockPageNavigationRootProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>

export const MockPageNavigationRoot = ({ children }: MockPageNavigationRootProps) => (
  <div className="ams-mock-page-navigation">{children}</div>
)

type MockPageNavigationLinkProps = {
  href?: string
  icon: FC<SVGProps<SVGSVGElement>>
  label: string
}

export const MockPageNavigationLink = ({ href, icon, label }: MockPageNavigationLinkProps) => {
  const Icon = icon

  return (
    <a className="ams-mock-page-navigation-link" href={href}>
      <Icon fill="white" width={24} />
      {label}
    </a>
  )
}

export const MockPageNavigation = Object.assign(MockPageNavigationRoot, { Link: MockPageNavigationLink })
