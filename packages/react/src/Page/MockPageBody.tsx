import type { HTMLAttributes } from 'react'

type MockPageBodyProps = {
  as?: 'div' | 'main'
} & HTMLAttributes<HTMLDivElement>

export const MockPageBody = ({ as: Tag = 'div', children }: MockPageBodyProps) => (
  <Tag className="ams-mock-page-body">{children}</Tag>
)
