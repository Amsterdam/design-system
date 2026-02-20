/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Button,
  CallToActionLink,
  Column,
  ErrorMessage,
  Field,
  FieldSet,
  Grid,
  Heading,
  InvalidFormAlert,
  Label,
  OrderedList,
  Page,
  PageHeader,
  Paragraph,
  Radio,
  StandaloneLink,
  TextInput,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon } from '@amsterdam/design-system-react-icons'

import { Layout } from '../common/Layout'
import { FormFooter } from './components/FormFooter'

const meta = {
  title: 'Pages/Public/Form Flow',
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Layout>
      <Grid as="main" id="inhoud" paddingBottom="2x-large" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" level={1}>
            Waar u dit formulier voor gebruikt
          </Heading>
          <Paragraph size="large">
            Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading className="ams-mb-s" level={2}>
            De stappen in dit formulier
          </Heading>
          <OrderedList className="ams-mb-l">
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
  ),
} satisfies Meta

export default meta

export const LandingPage: StoryObj = {}

export const WithOneQuestion: StoryObj = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Page>
      {/* Keep the Page Header as simple as possible, to avoid distractions and to prevent users from accidentally navigating away from the form flow. */}
      <PageHeader className="ams-mb-xl" />
      {/* The back link is in its own Grid, because it should be outside of the main section. */}
      <Grid className="ams-mb-xl">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
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
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
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
            <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
          </header>
          {/*
           * Do not use HTML5 form validation, because it is not consistent across browsers and devices,
           * and often gives the user too little information.
           * Preferably validate user input on the server and return it to the client.
           * If that is not possible, use client-side validation.
           * For more info, see: https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            {/* See the docs on specific form components on https://designsystem.amsterdam for more information on how to use them */}
            <FieldSet
              aria-required="true"
              className="ams-mb-xl"
              legend="Kies waar u voor wilt langskomen op het Stadsloket"
              // When a page consists of a single question, its label or legend should be treated as the main page heading (`h1`).
              legendIsPageHeading
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
                <Radio aria-required="true" name="reasonForVisit" value="other">
                  Overig
                </Radio>
              </Column>
            </FieldSet>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
      <FormFooter />
    </Page>
  ),
}

export const WithMultipleQuestions: StoryObj = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Page>
      {/* Keep the Page Header as simple as possible, to avoid distractions and to prevent users from accidentally navigating away from the form flow. */}
      <PageHeader className="ams-mb-xl" />
      {/* The back link is in its own Grid, because it should be outside of the main section. */}
      <Grid className="ams-mb-xl">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
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
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
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
                id="email-input"
                name="email"
                size={30} // Based on this recommendation: https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
                spellCheck="false"
                type="email"
              />
            </Field>
            <Field className="ams-mb-xl">
              <Label htmlFor="tel-input" optional>
                Telefoonnummer
              </Label>
              <TextInput
                autoComplete="tel"
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
  ),
}

export const WithValidationError: StoryObj = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Page>
      {/* Keep the Page Header as simple as possible, to avoid distractions and to prevent users from accidentally navigating away from the form flow. */}
      <PageHeader className="ams-mb-xl" />
      {/* The back link is in its own Grid, because it should be outside of the main section. */}
      <Grid className="ams-mb-xl">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
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
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          {/*
           * Notifying a user of errors is threefold:
           * - We add the error count to the document title, so it is the first thing a screen reader user hears.
           * - We show the Invalid Form Alert at the top of the main container.
           * - We add error messages next to the relevant form fields.
           * For more info, see: https://designsystem.amsterdam/?path=/docs/components-forms-invalid-form-alert--docs
           */}
          <InvalidFormAlert
            className="ams-mb-m"
            errors={[{ id: '#passport-id-driving-license', label: 'Geef aan waar u voor wilt langskomen.' }]}
            headingLevel={2}
          />
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
            <Paragraph>Stap 1 van 3: Afspraak</Paragraph>
          </header>
          {/*
           * Do not use HTML5 form validation, because it is not consistent across browsers and devices,
           * and often gives the user too little information.
           * Preferably validate user input on the server and return it to the client.
           * If that is not possible, use client-side validation.
           * For more info, see: https://nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie/#gebruik-geen-html-formuliervalidatie
           */}
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            {/* See the docs on specific form components on https://designsystem.amsterdam for more information on how to use them */}
            <FieldSet
              // Make sure you only link the error message to the field set when the error message is in the DOM.
              // Referencing a non-existent element can cause errors in accessibility evaluation tools.
              aria-describedby="error"
              aria-required="true"
              className="ams-mb-xl"
              invalid
              legend="Kies waar u voor wilt langskomen op het Stadsloket"
              // When a page consists of a single question, its label or legend should be treated as the main page heading (`h1`).
              legendIsPageHeading
              role="radiogroup"
            >
              <ErrorMessage id="error">Geef aan waar u voor wilt langskomen.</ErrorMessage>
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
                <Radio aria-required="true" invalid name="reasonForVisit" value="other">
                  Overig
                </Radio>
              </Column>
            </FieldSet>
            <Button type="submit">Volgende vraag</Button>
          </form>
        </Grid.Cell>
      </Grid>
      <FormFooter />
    </Page>
  ),
}
