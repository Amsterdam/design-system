/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Breadcrumb,
  CallToActionLink,
  Grid,
  Heading,
  Link,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'

export const ProductPage = () => (
  <>
    <Grid paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Stadspas</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid as="main" id="main" paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading className="ams-mb-xl" level={1}>
          Gratis laptop of tablet voor de basisschool aanvragen
        </Heading>
        <Paragraph className="ams-mb-2xl" size="large">
          U krijgt per huishouden 1 keer per 5 schooljaren een gratis laptop of tablet op de basisschool.
        </Paragraph>

        <Heading className="ams-mb-s" level={2}>
          Voorwaarden
        </Heading>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>U woont in Amsterdam of Weesp.</UnorderedList.Item>
          <UnorderedList.Item>
            U heeft een <Link href="#">laag inkomen en weinig vermogen</Link>.
          </UnorderedList.Item>
          <UnorderedList.Item>U ontvangt kinderbijslag of pleegoudervergoeding voor uw kind.</UnorderedList.Item>
          <UnorderedList.Item>Uw kind gaat naar de basisschool.</UnorderedList.Item>
          <UnorderedList.Item>Uw kind is nu 10, 11 of 12 jaar.</UnorderedList.Item>
          <UnorderedList.Item>Uw kind woont bij u in huis.</UnorderedList.Item>
          <UnorderedList.Item>
            Uw huishouden heeft de afgelopen 4 schooljaren geen gratis laptop of tablet voor een kind op de basisschool
            gehad.
          </UnorderedList.Item>
          <UnorderedList.Item>Uw kind doet eerst een computercursus.</UnorderedList.Item>
        </UnorderedList>

        <Heading className="ams-mb-s" level={2}>
          Aanvragen
        </Heading>
        <Paragraph className="ams-mb-m">
          Doe de check en kijk of u in aanmerking komt voor een gratis laptop of tablet voor uw kind of andere
          regelingen.
        </Paragraph>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>Ontdek welke regelingen u hier kunt aanvragen.</UnorderedList.Item>
          <UnorderedList.Item>Kies welke regelingen u wilt aanvragen voor u en uw gezinsleden.</UnorderedList.Item>
          <UnorderedList.Item>Hierna moet u inloggen met uw DigiD.</UnorderedList.Item>
        </UnorderedList>
        <CallToActionLink className="ams-mb-xl" href="#">
          Start de check en vraag aan
        </CallToActionLink>

        <Heading className="ams-mb-s" level={2}>
          Geen DigiD?
        </Heading>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>
            Ga naar <Link href="#">www.digid.nl</Link> en vraag uw DigID aan.
          </UnorderedList.Item>
          <UnorderedList.Item>
            Lees eerst{' '}
            <Link download href="#">
              Toelichting Gratis laptop of tablet basisschool Schooljaar 2024-2025.pdf
            </Link>{' '}
            en{' '}
            <Link download href="#">
              Aanvraag gratis laptop of tablet basisschool schooljaar 2024-2025.pdf
            </Link>
            .
          </UnorderedList.Item>
          <UnorderedList.Item>
            Of: bel <Link href="tel:+31202526000">020 252 6000</Link> en vraag een formulier aan per post.
          </UnorderedList.Item>
        </UnorderedList>

        <Heading className="ams-mb-s" level={2}>
          Vragen?
        </Heading>
        <UnorderedList className="ams-mb-xl">
          <UnorderedList.Item>Bel ons op 020 252 6000.</UnorderedList.Item>
          <UnorderedList.Item>Hulp nodig bij het aanvragen? Ga naar Buurtteam Amsterdam.</UnorderedList.Item>
        </UnorderedList>

        <Heading className="ams-mb-s" level={2}>
          Zo lang duurt het
        </Heading>
        <Paragraph className="ams-mb-xl">
          Na de aanvraag krijgt u binnen 8 weken een reactie. We vertellen u dan of u recht hebt op de regeling of niet.
          Het kan dus even duren voor u van ons hoort.
        </Paragraph>

        <Heading className="ams-mb-s" level={2}>
          Zonder computerles geen laptop
        </Heading>
        <Paragraph className="ams-mb-xl">
          Als uw kind recht heeft op een laptop, moet het een computerles volgen. De les is verplicht, ook als uw kind
          in het verleden al zo'n les heeft gedaan.
        </Paragraph>

        <Heading className="ams-mb-s" level={2}>
          Maak binnen 2 weken een afspraak
        </Heading>
        <Paragraph className="ams-mb-m">
          U krijgt een brief met een aanmeldcode om aan te melden en een afspraak te maken. Bewaar deze brief goed. Ga
          naar <Link href="#">Aanmelden Cyberschool</Link>. Vul de aanmeldcode in en kies zelf uw stadsdeel, datum en
          tijd. U hebt een e-mailadres of telefoonnummer nodig. U krijgt een bevestiging van uw afspraak.
        </Paragraph>
        <Paragraph className="ams-mb-xl">
          Als u geen afspraak maakt, deelt de gemeente u in. U krijgt dan wel een uitnodiging. Na de computerles krijgt
          u een code om in de webshop een laptop of tablet uit te kiezen.
        </Paragraph>

        <Heading className="ams-mb-s" level={2}>
          Afspraak aanpassen
        </Heading>
        <Paragraph>
          Pas uw afspraak aan als u niet kunt of als u de les gemist heeft. Bel hiervoor met Cybersoek:{' '}
          <Link href="tel:+31206934582">020 6934 582</Link>.
        </Paragraph>
      </Grid.Cell>
    </Grid>
  </>
)
