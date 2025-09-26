import { Column, Grid, Heading, Link, PageFooter, Paragraph } from '@amsterdam/design-system-react'

export const FormFooter = () => (
  <PageFooter>
    {/* Keep the Page Footer as simple as possible, to avoid distractions and to prevent users from accidentally navigating away from the form flow. */}
    <PageFooter.Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={4}>
          <Column gap="small">
            {/* Add contact information to the footer in a form, so users will know who to contact when they have trouble filling out the form.   */}
            <Heading color="inverse" level={2} size="level-3">
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
)
