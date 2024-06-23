import { Icon, Tabs } from '@amsterdam/design-system-react'
import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { menuLevel2 } from './config'

type SubmenuProps = {
  activeTab?: number
}

export const Submenu = ({ activeTab }: SubmenuProps) => (
  <Tabs activeTab={activeTab}>
    <Tabs.List className="ams-docs-amopis-tabs-vertical">
      {menuLevel2.map((label, index) => (
        <Tabs.Button key={label} tab={index}>
          <Icon size="level-6" svg={ChevronRightIcon} />
          {label}
        </Tabs.Button>
      ))}
    </Tabs.List>
    {menuLevel2.map((label, index) => (
      <Tabs.Panel key={label} tab={index} style={{ display: 'none' }} />
    ))}
  </Tabs>
)
