import {
  Column,
  Grid,
  Heading,
  Link,
  LinkList,
  Paragraph,
  Spotlight,
  UnorderedList,
} from '@amsterdam/design-system-react'
import type { ArticlePageProps } from './ArticlePage'

type ArticleBodyProps = Pick<ArticlePageProps, 'lead' | 'paragraph1' | 'spotlightHeading' | 'spotlightLinkLabel'>

export const ArticleBody = ({ lead, paragraph1, spotlightHeading, spotlightLinkLabel }: ArticleBodyProps) => (
  <>
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph className="ams-mb--md" size="large">
          {lead}
        </Paragraph>
        <Paragraph>{paragraph1}</Paragraph>
      </Grid.Cell>
    </Grid>
    <Spotlight as="section" color="purple">
      <Grid paddingTop="medium" paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading inverseColor level={2}>
              {spotlightHeading}
            </Heading>
            <UnorderedList inverseColor>
              <UnorderedList.Item>
                Vraag uw paspoort of ID-kaart aan bij een Stadsloket in Amsterdam.
              </UnorderedList.Item>
              <UnorderedList.Item>
                U kunt elke dag langskomen van 9.00 uur tot 17.00 uur en op donderdag tot 20.00 uur.
              </UnorderedList.Item>
              <UnorderedList.Item>Op amsterdam.nl/paspoort staat wat u mee moet nemen.</UnorderedList.Item>
              <UnorderedList.Item>
                Laat aan het loket bij uw aanvraag weten dat u kiest voor gratis bezorgen.
              </UnorderedList.Item>
              <UnorderedList.Item>
                Als uw paspoort of ID-kaart klaar is, krijgt u een e-mail en sms-bericht met inloggegevens. Met deze
                inloggegevens kunt u zelf inplannen wanneer u uw reisdocument bezorgd wilt hebben.
              </UnorderedList.Item>
            </UnorderedList>
            <Paragraph inverseColor>
              <Link href="https://amsterdam.nl/paspoort/" inverseColor>
                {spotlightLinkLabel}
              </Link>
            </Paragraph>
          </Column>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Column>
          <section>
            <Heading className="ams-mb--xs" level={2}>
              Wanneer bezorgen we
            </Heading>
            <Paragraph>
              We bezorgen op werkdagen en zaterdag tussen 8.00 en 18.00 uur. De ene week bezorgen wij op dinsdag en
              donderdag ook tot 21.00 uur en de andere week op woensdag tot 21.00 uur.
            </Paragraph>
          </section>
          <section>
            <Heading className="ams-mb--xs" level={2}>
              Tekenen voor ontvangst
            </Heading>
            <Paragraph>
              Zorg dat u thuis bent om uw paspoort of ID-kaart te ontvangen. Bij bezorging voor meerdere personen moeten
              alle personen aanwezig zijn. Ook kinderen vanaf 12 jaar moeten tekenen voor ontvangst. Tot 12 jaar tekent
              de ouder of wettelijk vertegenwoordiger van het kind.
            </Paragraph>
          </section>
          <section>
            <Heading className="ams-mb--xs" level={2}>
              Bezorgen met waarde-transport
            </Heading>
            <Paragraph>
              De gemeente laat uw paspoort of ID-kaart bezorgen met een waarde-transport. Op{' '}
              <Link href="https://mijnafspraak.nl/">mijnafspraak.nl</Link> ziet u wie er langskomt. De pasfoto van de
              medewerker is vanaf 8.00 uur zichtbaar. De bezorger controleert bij aankomst uw identiteit en geeft u het
              nieuwe reisdocument. U geeft uw oude reisdocument aan de bezorger. De bezorger maakt uw oude reisdocument
              ongeldig waar u bij bent. Daarna mag u het zelf houden of meegeven aan de bezorger, die het vernietigt.
            </Paragraph>
          </section>
          <section>
            <Heading className="ams-mb--xs" level={2}>
              Wanneer kan bezorgen niet?
            </Heading>
            <UnorderedList>
              <UnorderedList.Item>Bij een spoedaanvraag.</UnorderedList.Item>
              <UnorderedList.Item>
                Als u een geldig visum in uw paspoort hebt dat u nog wilt gebruiken.
              </UnorderedList.Item>
              <UnorderedList.Item>Als u het oude reisdocument kwijt bent.</UnorderedList.Item>
              <UnorderedList.Item>Als u op een van de Waddeneilanden woont. Daar bezorgen we niet.</UnorderedList.Item>
            </UnorderedList>
          </section>
          <section>
            <Heading className="ams-mb--xs" level={2}>
              Meer weten
            </Heading>
            <LinkList>
              <LinkList.Link href="https://amsterdam.nl/paspoort/">amsterdam.nl/paspoort</LinkList.Link>
            </LinkList>
          </section>
        </Column>
      </Grid.Cell>
    </Grid>
  </>
)
