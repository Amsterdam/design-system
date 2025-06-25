/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AppNavigation } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  BuildingIcon,
  CogwheelFillIcon,
  CogwheelIcon,
  DocumentCheckMarkIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HandshakeIcon,
  HouseCanalFillIcon,
  QuestionMarkCircleIcon,
  RulerIcon,
  SearchIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'
import { Layout } from '../common/Layout'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Application/Details',
  component: DetailsPage,
} satisfies Meta<typeof DetailsPage>

export default meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
}

export const WithSubNavigationPopover: StoryObj = {
  decorators: [
    (Story) => (
      <Layout
        navItems={
          <>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten" popoverTarget="projecten-menu">
              <AppNavigation.Menu id="projecten-menu" popover="auto">
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link
                  href="#projecten/nader-onderzoek"
                  icon={DocumentCheckMarkIcon}
                  key="3"
                  label="Nader onderzoek"
                />
                <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
                <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
                <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
                <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
              </AppNavigation.Menu>
            </AppNavigation.Button>
            <AppNavigation.Button icon={DocumentsFillIcon} key={3} label="Rapportages" popoverTarget="rapportages-menu">
              <AppNavigation.Menu id="rapportages-menu" popover="auto">
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link
                  href="#projecten/nader-onderzoek"
                  icon={DocumentCheckMarkIcon}
                  key="3"
                  label="Nader onderzoek"
                />
              </AppNavigation.Menu>
            </AppNavigation.Button>
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>
        }
      >
        <Story />
      </Layout>
    ),
  ],
}

export const Expandable: StoryObj = {
  decorators: [
    (Story) => (
      <Layout
        expandable
        navItems={
          <>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>
        }
      >
        <Story />
      </Layout>
    ),
  ],
}

// export const ExpandableWithSubNavigation: StoryObj = {
//   decorators: [
//     (Story) => (
//       <Layout
//         expandable
//         navItems={
//           <>
//             <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
//             <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten">
//               <AppNavigation.Menu>
//                 <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
//                 <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
//                 <AppNavigation.Link
//                   href="#projecten/nader-onderzoek"
//                   icon={DocumentCheckMarkIcon}
//                   key="3"
//                   label="Nader onderzoek"
//                 />
//                 <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
//                 <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
//                 <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
//                 <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
//               </AppNavigation.Menu>
//             </AppNavigation.Button>
//             <AppNavigation.Button icon={DocumentsFillIcon} key={3} label="Rapportages">
//               <AppNavigation.Menu>
//                 <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
//                 <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
//                 <AppNavigation.Link
//                   href="#projecten/nader-onderzoek"
//                   icon={DocumentCheckMarkIcon}
//                   key="3"
//                   label="Nader onderzoek"
//                 />
//               </AppNavigation.Menu>
//             </AppNavigation.Button>
//             <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
//             <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
//           </>
//         }
//       >
//         <Story />
//       </Layout>
//     ),
//   ],
// }

export const ExpandedWithSubNavigation: StoryObj = {
  decorators: [
    (Story) => (
      <Layout
        navExpanded
        navItems={
          <>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten">
              <AppNavigation.Menu>
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link
                  href="#projecten/nader-onderzoek"
                  icon={DocumentCheckMarkIcon}
                  key="3"
                  label="Nader onderzoek"
                />
                <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
                <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
                <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
                <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
              </AppNavigation.Menu>
            </AppNavigation.Link>
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages">
              <AppNavigation.Menu>
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link
                  href="#projecten/nader-onderzoek"
                  icon={DocumentCheckMarkIcon}
                  key="3"
                  label="Nader onderzoek"
                />
              </AppNavigation.Menu>
            </AppNavigation.Link>
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>
        }
      >
        <Story />
      </Layout>
    ),
  ],
}
