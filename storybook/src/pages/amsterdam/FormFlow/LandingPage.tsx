/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CallToActionLink, Grid, Heading, OrderedList, Paragraph } from '@amsterdam/design-system-react'

import { Layout } from '../common/Layout'

export const LandingPage = () => (
  <Layout>
    <Grid as="main" className="ams-mb-2xl" id="main" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-xl" level={1}>
          Waar u dit formulier voor gebruikt
        </Heading>
        <Paragraph className="ams-mb-xl" size="large">
          Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
        </Paragraph>

        <Heading className="ams-mb-s" level={2} size="level-3">
          De stappen in dit formulier
        </Heading>
        <OrderedList className="ams-mb-xl">
          <OrderedList.Item>
            <strong>Afspraak</strong> - Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak wilt
            hebben. En wanneer.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Uw gegevens</strong> - Vul uw contactgegevens in.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Controleren</strong> - Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.
          </OrderedList.Item>
        </OrderedList>
        <CallToActionLink href="#">Start het formulier</CallToActionLink>
      </Grid.Cell>
    </Grid>
  </Layout>
)
