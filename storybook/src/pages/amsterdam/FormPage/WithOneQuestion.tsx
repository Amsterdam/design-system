/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Button,
  Column,
  Grid,
  Heading,
  Link,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  Radio,
} from '@amsterdam/design-system-react'
import { FieldSetWithHeading } from './components/FieldSetWithHeading'

export const WithOneQuestion = () => {
  return (
    <Page>
      <PageHeader className="ams-mb-xl" />
      <Grid as="main" className="ams-mb-2xl">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-5">
              Afspraak maken
            </Heading>
            <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
          </header>
          <form className="ams-mb-l" onSubmit={(e) => e.preventDefault()}>
            <FieldSetWithHeading
              aria-required="true"
              className="ams-mb-l"
              legend="Kies waar u voor wilt langskomen op het Stadsloket"
              role="radiogroup"
            >
              <Column gap="x-small">
                <Radio aria-required="true" name="reasonForVisit" value="passport-id-driving-license">
                  Paspoort / ID / Rijbewijs
                </Radio>
                <Radio aria-required="true" name="reasonForVisit" value="permits">
                  Vergunningen
                </Radio>
                <Radio aria-required="true" name="reasonForVisit" value="social-counter">
                  Sociaal loket
                </Radio>
              </Column>
            </FieldSetWithHeading>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
      <PageFooter>
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={4}>
              <Column gap="small">
                <Heading color="inverse" level={2} size="level-4">
                  Contact
                </Heading>
                <Paragraph color="inverse">Lukt het niet om een afspraak te maken?</Paragraph>
                <Paragraph color="inverse">
                  Bel het telefoonnummer{' '}
                  <Link color="inverse" href="tel:14020">
                    14 020
                  </Link>
                  .
                </Paragraph>
                <Paragraph color="inverse">Maandag tot en met vrijdag van 08.00 tot 18.00 uur.</Paragraph>
              </Column>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
