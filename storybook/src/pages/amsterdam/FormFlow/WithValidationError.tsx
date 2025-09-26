/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Button,
  Column,
  ErrorMessage,
  Grid,
  Heading,
  InvalidFormAlert,
  Page,
  PageHeader,
  Paragraph,
  Radio,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon } from '@amsterdam/design-system-react-icons'

import { FieldSetWithHeading } from './components/FieldSetWithHeading'
import { FormFooter } from './components/FormFooter'

export const WithValidationError = () => (
  <Page>
    <PageHeader className="ams-mb-xl" />
    <Grid className="ams-mb-s">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <StandaloneLink href="#" icon={ChevronBackwardIcon}>
          Vorige vraag
        </StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Grid as="main" paddingBottom="2x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <InvalidFormAlert
          className="ams-mb-m"
          errors={[{ id: '#passport-id-driving-license', label: 'Geef aan waar u voor wilt langskomen.' }]}
          headingLevel={2}
        />
        <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
          <Heading aria-hidden id="form-header" level={2} size="level-4">
            Afspraak maken
          </Heading>
          <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
        </header>
        <form noValidate onSubmit={(e) => e.preventDefault()}>
          <FieldSetWithHeading
            aria-describedby="error"
            aria-required="true"
            className="ams-mb-l"
            invalid
            legend="Kies waar u voor wilt langskomen op het Stadsloket"
            role="radiogroup"
          >
            <ErrorMessage className="ams-mb-s" id="error">
              Geef aan waar u voor wilt langskomen.
            </ErrorMessage>
            <Column gap="x-small">
              <Radio
                aria-required="true"
                id="passport-id-driving-license"
                invalid
                name="reasonForVisit"
                value="passport-id-driving-license"
              >
                Paspoort / ID / Rijbewijs
              </Radio>
              <Radio aria-required="true" invalid name="reasonForVisit" value="permits">
                Vergunningen
              </Radio>
              <Radio aria-required="true" invalid name="reasonForVisit" value="social-counter">
                Sociaal loket
              </Radio>
            </Column>
          </FieldSetWithHeading>
          <Button type="submit">Volgende vraag</Button>
        </form>
      </Grid.Cell>
    </Grid>
    <FormFooter />
  </Page>
)
