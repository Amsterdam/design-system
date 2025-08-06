import { PageFooter, Heading, Paragraph } from '@amsterdam/design-system-react'

import styles from './styles.module.css'

export const AppFooter = () => {
  return (
    <PageFooter>
      <Heading className="ams-visually-hidden" level={2}>
        Over deze website
      </Heading>
      <PageFooter.Menu>
        <PageFooter.MenuLink href="#">Hulp</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Feedback</PageFooter.MenuLink>
        <Paragraph size="small" className={styles.disclaimer}>
          Dit document bevat vertrouwelijke informatie en is uitsluitend bestemd voor geadresseerde(n).
        </Paragraph>
      </PageFooter.Menu>
    </PageFooter>
  )
}
