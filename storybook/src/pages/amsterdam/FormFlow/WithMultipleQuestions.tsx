/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Button,
  Field,
  Grid,
  Heading,
  Label,
  Page,
  PageHeader,
  Paragraph,
  StandaloneLink,
  TextInput,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon } from '@amsterdam/design-system-react-icons'

import { FormFooter } from './components/FormFooter'

export const WithMultipleQuestions = () => {
  return (
    <Page>
      <PageHeader className="ams-mb-xl" />
      <Grid className="ams-mb-s">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <StandaloneLink href="#" icon={ChevronBackwardIcon}>
            Vorige vraag
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
      <Grid as="main" className="ams-mb-2xl">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
            <Heading aria-hidden id="form-header" level={2} size="level-5">
              Afspraak maken
            </Heading>
            <Paragraph>Stap 2 van 3: Uw gegevens</Paragraph>
          </header>
          <Heading className="ams-mb-m" level={1} size="level-3">
            Contactgegevens
          </Heading>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <Field>
              <Label htmlFor="email-input" optional>
                E-mailadres
              </Label>
              <TextInput
                autoComplete="email"
                autoCorrect="off"
                className="ams-mb-m"
                id="email-input"
                name="email"
                size={30} // Based on this recommendation: https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
                spellCheck="false"
                type="email"
              />
            </Field>
            <Field className="ams-mb-l">
              <Label htmlFor="tel-input" optional>
                Telefoonnummer
              </Label>
              <TextInput autoComplete="tel" className="ams-mb-m" id="tel-input" name="phone" size={15} type="tel" />
            </Field>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
      <FormFooter />
    </Page>
  )
}
