import { Icon, Tabs } from '@amsterdam/design-system-react'
import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { menu } from './config'

type SubmenuProps = {
  activeTab?: number
}

export const Submenu = ({ activeTab }: SubmenuProps) => (
  <Tabs activeTab={activeTab}>
    <Tabs.List className="ams-application-tabs-vertical">
      {menu.level2.map((label, index) => (
        <Tabs.Button key={label} tab={index}>
          <Icon size="level-6" svg={ChevronRightIcon} />
          {label}
        </Tabs.Button>
      ))}
    </Tabs.List>
    {menu.level2.map((label, index) => (
      <Tabs.Panel key={label} tab={index} style={{ display: 'none' }} />
    ))}
  </Tabs>
)
