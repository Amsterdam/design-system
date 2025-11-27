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

export const WithMultipleQuestions = () => (
  <Page>
    {/* Keep the Page Header as simple as possible, to avoid distractions and to prevent users from accidentally navigating away from the form flow. */}
    <PageHeader className="ams-mb-xl" />
    {/* The back link is in its own Grid, because it should be outside of the main section. */}
    <Grid className="ams-mb-s">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        {/*
         * We add a back link to allow users to navigate between form pages, without having to worry about losing their progress.
         * Using the browser back button should also work without losing progress, but users do not always trust it (for some applications, rightfully so).
         * For more info, see: https://design-system.service.gov.uk/components/back-link/
         *
         * We use a link here instead of a button, because multiple submit buttons in a form can cause unexpected behavior.
         * For more info, see: https://adamsilver.io/blog/forms-with-multiple-submit-buttons-are-problematic/
         */}
        <StandaloneLink href="#" icon={ChevronBackwardIcon}>
          Vorige vraag
        </StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Grid as="main" paddingBottom="2x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        {/*
         * We use a header here that is labelled by an aria-hidden heading, so that we communicate a labelled
         * section to screen readers, without adding an unnecessary heading to the heading hierarchy.
         * Furthermore, if CSS fails to load, we still have a clearly labelled section.
         */}
        <header aria-labelledby="form-header" className="ams-mb-m ams-gap-xs">
          <Heading aria-hidden id="form-header" level={2} size="level-4">
            Afspraak maken
          </Heading>
          {/*
           * Start by testing your form without a progress indicator to see if it’s simple enough that users do not need one.
           * If you do, use a simple one like this one.
           * For more info, see: https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators
           */}
          <Paragraph>Stap 2 van 3: Uw gegevens</Paragraph>
        </header>
        <Heading className="ams-mb-m" level={1} size="level-3">
          Contactgegevens
        </Heading>
        {/*
         * Do not use HTML5 form validation, because it is not consistent across browsers and devices,
         * and often gives the user too little information.
         * Preferably validate user input on the server and return it to the client.
         * If that is not possible, use client-side validation.
         * For more info, see: https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
         */}
        <form noValidate onSubmit={(e) => e.preventDefault()}>
          {/* See the docs on specific form components on https://designsystem.amsterdam for more information on how to use them */}
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
            <TextInput
              autoComplete="tel"
              className="ams-mb-m"
              id="tel-input"
              name="phone"
              size={15} // Phone numbers have a maximum length of 15 characters, as per E.164 standard: https://en.wikipedia.org/wiki/E.164
              type="tel"
            />
          </Field>
          <Button type="submit">Volgende vraag</Button>
        </form>
      </Grid.Cell>
    </Grid>
    <FormFooter />
  </Page>
)
