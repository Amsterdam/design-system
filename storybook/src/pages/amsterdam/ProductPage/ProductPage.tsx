/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Accordion,
  Breadcrumb,
  Button,
  Grid,
  Heading,
  Link,
  LinkList,
  OrderedList,
  Paragraph,
  Spotlight,
  TableOfContents,
  UnorderedList,
} from '@amsterdam/design-system-react'
import './product-page.css'

export const ProductPage = () => (
  <>
    <Grid paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid as="main" id="main" paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-m" level={1}>
          Gratis laptop of tablet basisschool
        </Heading>
        <Paragraph className="ams-mb-xl" size="large">
          U krijgt eenmalig per huishouden per 5 schooljaren een gratis laptop of tablet op de basisschool.
        </Paragraph>
        <Heading className="ams-mb-s" id="zo-werkt-het" level={2}>
          Zo werkt het
        </Heading>
        <Paragraph className="ams-mb-xl">
          Kijk voor alle regelingen voor Amsterdammers met weinig geld op{' '}
          <Link href="https://www.amsterdam.nl/werk-inkomen/hulp-bij-laag-inkomen/">
            Hulp bij laag inkomen (Pak Je Kans)
          </Link>
          .
        </Paragraph>
        <Heading className="ams-mb-s" id="voorwaarden" level={2}>
          Voorwaarden
        </Heading>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>U moet in Amsterdam of Weesp wonen.</UnorderedList.Item>
          <UnorderedList.Item>
            U moet een{' '}
            <Link href="https://www.amsterdam.nl/werk-inkomen/hulp-bij-laag-inkomen/laag-inkomen-weinig-vermogen/">
              laag inkomen en weinig vermogen
            </Link>{' '}
            hebben.
          </UnorderedList.Item>
          <UnorderedList.Item>U ontvangt kinderbijslag of pleegoudervergoeding voor uw kind.</UnorderedList.Item>
          <UnorderedList.Item>
            Uw kind moet eerst een{' '}
            <Link href="https://www.amsterdam.nl/werk-inkomen/hulp-bij-laag-inkomen/regelingen-alfabet/gratis-laptop-tablet-basisschool/computerles-basisschool/">
              computerles
            </Link>{' '}
            doen. Daarna krijgt u een code om in de webshop een laptop of tablet uit te kiezen.
          </UnorderedList.Item>
          <UnorderedList.Item>
            Uw kind krijgt eenmalig op de basisschool een gratis laptop of tablet.
          </UnorderedList.Item>
          <UnorderedList.Item>Uw kind gaat naar de basisschool.</UnorderedList.Item>
          <UnorderedList.Item>Uw kind is nu 10, 11 of 12 jaar.</UnorderedList.Item>
          <UnorderedList.Item>Uw kind moet bij u in huis wonen.</UnorderedList.Item>
        </UnorderedList>
        <Heading className="ams-mb-s" id="kosten" level={2}>
          Kosten
        </Heading>
        <Paragraph className="ams-mb-m">
          Na de aanvraag krijgt u binnen 8 weken een reactie. U krijgt per regeling een brief. We vertellen u dan of u
          recht hebt op de regeling of niet. Het kan dus even duren voor u van ons hoort.
        </Paragraph>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>Normale aanvraag: € 100</UnorderedList.Item>
          <UnorderedList.Item>Spoedaanvraag: € 100</UnorderedList.Item>
        </UnorderedList>
        <Heading className="ams-mb-s" id="aanvragen" level={2}>
          Aanvragen
        </Heading>
        <Paragraph className="ams-mb-m">
          Text voor online aanvragen - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis aliquam
          lectus, eu faucibus metus. Donec in rutrum leo. Suspendisse potenti. Donec non risus sit amet lacus laoreet
          cursus a aliquet libero. In placerat orci ante,
        </Paragraph>
        <Button className="ams-mb-l" variant="primary">
          Online aanvragen
        </Button>
        <Accordion className="ams-mb-xl" headingLevel={3}>
          <Accordion.Section label="Aanvragen op het stadsloket">
            <Paragraph>
              Ad architecto consequatur deserunt dolor dolore, dolores, eligendi error et expedita hic impedit nisi
              nostrum numquam, placeat quasi quo rerum soluta sunt vitae voluptates?
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section expanded label="Aanvragen per post">
            <UnorderedList>
              <UnorderedList.Item>Check om te ontdekken welke regelingen u hier kunt aanvragen.</UnorderedList.Item>
              <UnorderedList.Item>Check om te ontdekken welke regelingen u hier kunt aanvragen.</UnorderedList.Item>
            </UnorderedList>
          </Accordion.Section>
        </Accordion>
        <Heading className="ams-mb-s" id="wat-u-nodig-hebt" level={2}>
          Wat u nodig hebt
        </Heading>
        <OrderedList className="ams-mb-xl">
          <OrderedList.Item>Check om te ontdekken welke regelingen u hier kunt aanvragen.</OrderedList.Item>
          <OrderedList.Item>Kies welke regelingen u wilt aanvragen voor u en uw gezinsleden.</OrderedList.Item>
          <OrderedList.Item>Hierna moet u inloggen met uw DigiD.</OrderedList.Item>
        </OrderedList>
        <Heading className="ams-mb-s" id="digid" level={2}>
          DigiD
        </Heading>
        <Paragraph className="ams-mb-m">
          Na de aanvraag krijgt u binnen 8 weken een reactie. U krijgt per regeling een brief. We vertellen u dan of u
          recht hebt op de regeling of niet. Het kan dus even duren voor u van ons hoort.
        </Paragraph>
        <Accordion className="ams-mb-xl" headingLevel={3}>
          <Accordion.Section label="Geen DigiD?">
            <Paragraph className="ams-mb-m">
              Ad architecto consequatur deserunt dolor dolore, dolores, eligendi error et expedita hic impedit nisi
              nostrum numquam, placeat quasi quo rerum soluta sunt vitae voluptates?
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section expanded label="Geen DigiD?">
            <UnorderedList>
              <UnorderedList.Item>
                Ga naar <Link href="https://www.digid.nl">www.digid.nl</Link> om er een aan te vragen.
              </UnorderedList.Item>
              <UnorderedList.Item>
                Lees eerst de{' '}
                <Link href="https://assets.amsterdam.nl/publish/pages/911413/toelichting_gratis_laptop_of_tablet_basisschool_scholieren_van_10_11_en_12_jaar_schooljaar_2023-.pdf">
                  toelichting (PDF, 119 kB)
                </Link>{' '}
                en download het{' '}
                <Link href="https://assets.amsterdam.nl/publish/pages/911413/aanvraag_gratis_pc_basisschool_2023-2024.pdf">
                  aanvraagformulier (PDF, 141 kB)
                </Link>
                .
              </UnorderedList.Item>
            </UnorderedList>
          </Accordion.Section>
        </Accordion>
        <Heading className="ams-mb-s" id="betalen" level={2}>
          Betalen
        </Heading>
        <Paragraph className="ams-mb-m">
          Asperiores autem culpa, cum deserunt distinctio dolores dolorum exercitationem labore libero mollitia non
          obcaecati pariatur qui quisquam reiciendis repellat ullam.{' '}
        </Paragraph>
        <Button className="ams-mb-xl" variant="primary">
          Betalen
        </Button>
        <Heading className="ams-mb-s" id="zo-lang-duurt-het" level={2}>
          Zo lang duurt het
        </Heading>
        <Paragraph className="ams-mb-xl">
          Blanditiis ea ipsum maiores optio quo sapiente, unde ut. Ducimus eius eum ex impedit ipsam ipsum?{' '}
        </Paragraph>
        <Heading className="ams-mb-s" id="bijzonderheden" level={2}>
          Bijzonderheden
        </Heading>
        <Paragraph className="ams-mb-xl">
          Consequatur deleniti dolor ea, error, eum excepturi fuga fugiat fugit harum inventore laboriosam laudantium
          odio quam quidem quod reprehenderit, saepe sapiente sunt suscipit tenetur vitae voluptate voluptates
          voluptatum? Dicta dolor eos est harum ipsa ipsum labore rem totam ut vel!
        </Paragraph>
        <Heading className="ams-mb-s" id="bijzonderheden" level={2}>
          Contact
        </Heading>
        <Paragraph className="ams-mb-m">
          Hebt u een vraag en kunt u het antwoord niet vinden? Neem dan contact met ons op via{' '}
          <Link href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/Contactformulier.aspx/Contactformulier">
            het contactformulier
          </Link>
          .
        </Paragraph>
        <Heading className="ams-mb-s" id="bijzonderheden" level={3} size="level-5">
          Hulp nodig bij het aanvragen?
        </Heading>
        <Paragraph className="ams-mb-m">
          Ga naar een <Link href="https://www.buurtteamamsterdam.nl">buurtteam</Link>.
        </Paragraph>
        <Heading className="ams-mb-s" id="bijzonderheden" level={3} size="level-5">
          Bellen
        </Heading>
        <Paragraph>
          <Link href="tel:+31612341234">06 1234 1234</Link>
        </Paragraph>
        <Paragraph className="ams-mb-xl">Maandag tot en met donderdag van 09.00 - 17.00 uur</Paragraph>
        <Heading className="ams-mb-s" id="meer-informatie" level={2}>
          Meer informatie (knw relaties)
        </Heading>
        <LinkList>
          <LinkList.Link href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</LinkList.Link>
          <LinkList.Link href="#">Aspernatur cupiditate illo officiis provident quae quidem voluptatum?</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell className="ams-order--narrow-before" span={{ narrow: 4, medium: 2, wide: 3 }}>
        <TableOfContents heading="Op deze pagina">
          <TableOfContents.List>
            <TableOfContents.Link href="#zo-werkt-het" label="Zo werkt het" />
            <TableOfContents.Link href="#voorwaarden" label="Voorwaarden" />
            <TableOfContents.Link href="#kosten" label="Kosten" />
            <TableOfContents.Link href="#aanvragen" label="Aanvragen" />
            <TableOfContents.Link href="#wat-u-nodig-hebt" label="Wat u nodig hebt" />
            <TableOfContents.Link href="#digid" label="DigiD" />
            <TableOfContents.Link href="#betalen" label="Betalen" />
            <TableOfContents.Link href="#zo-lang-duurt-het" label="Zo lang duurt het" />
            <TableOfContents.Link href="#bijzonderheden" label="Bijzonderheden" />
            <TableOfContents.Link href="#meer-informatie" label="Meer informatie" />
          </TableOfContents.List>
        </TableOfContents>
      </Grid.Cell>
    </Grid>
    <Spotlight className="ams-mb-2xl">
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-s" color="inverse" level={2}>
            Zie ook – taxonomie
          </Heading>
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Dolorum laborum libero perspiciatis quaerat quis suscipit, voluptates.
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Commodi excepturi non placeat sed ut? Nulla, totam.
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Atque culpa delectus ducimus harum labore quia, velit.
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Ea enim est neque nisi perferendis perspiciatis velit?
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">
              Aut debitis, illum ipsam laborum molestiae qui soluta!
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  </>
)
