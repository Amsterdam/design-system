import {
  Breadcrumb,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  Paragraph,
  Row,
  Tabs,
} from '@amsterdam/design-system-react'
import { EditDocumentIcon, EmailIcon } from '@amsterdam/design-system-react-icons'
import '../common/amopis.scss'
import { Submenu } from '../common/Submenu'
import { menu } from '../common/config'

export const DetailsPage = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span="all">
      <Breadcrumb>
        <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
      </Breadcrumb>
      <Heading className="ams-mb--sm" level={1}>
        Kerngegevens
      </Heading>
      <Heading level={2}>Brug 423 opwaardering (Berlagebrug) – ams20192715</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
      <Tabs>
        <Tabs.List>
          {menu.level3.map(({ label }, index) => (
            <Tabs.Button key={label} tab={index}>
              {label}
            </Tabs.Button>
          ))}
        </Tabs.List>
      </Tabs>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 2, wide: 2 }} start={1}>
      <div className="ams-application-white-background">
        <Submenu />
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
      <div className="ams-application-white-background" style={{ padding: '1rem' }}>
        <Column>
          <Row align="between" alignVertical="baseline">
            <Heading level={3}>Kerngegevens</Heading>
            <LinkList>
              <LinkList.Link href="#" icon={EditDocumentIcon}>
                Wijzig kerngegevens
              </LinkList.Link>
            </LinkList>
          </Row>
          <section>
            <Heading className="ams-mb--sm" level={4}>
              Opdrachtgevers
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Ambtelijk opdrachtgever</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Marise Ent</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Bestuurlijk Opdrachtgever Stad</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Melanie van der Horst</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
            </DescriptionList>
          </section>
          <section>
            <Heading className="ams-mb--sm" level={4}>
              Opdrachtnemers
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Accounthouder</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Paul Brouwer</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Opdrachtnemer</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Erik Bakker</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Klaas Helmers</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Marjolein Boomer</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Carina Cairo</span>
                  <EmailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
            </DescriptionList>
          </section>
          <section>
            <Heading className="ams-mb--sm" level={4}>
              Basisgegevens
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Gebied</DescriptionList.Term>
              <DescriptionList.Description>Gemeente Amsterdam</DescriptionList.Description>
              <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
              <DescriptionList.Description>Amsterdam</DescriptionList.Description>
              <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
              <DescriptionList.Description>Amsterdam</DescriptionList.Description>
              <DescriptionList.Term>Status</DescriptionList.Term>
              <DescriptionList.Description>Actief</DescriptionList.Description>
              <DescriptionList.Term>Projectsoort</DescriptionList.Term>
              <DescriptionList.Description>Programma Bruggen</DescriptionList.Description>
            </DescriptionList>
          </section>
        </Column>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
      <div className="ams-application-white-background" style={{ padding: '1rem' }}>
        <Column gap="small">
          <div>
            <Image alt="" src="https://picsum.photos/900/720?random=1" />
            <Paragraph>
              Impressie Brug 423 &nbsp; <Link variant="inline">Afbeelding wijzigen</Link>
            </Paragraph>
          </div>
          <div>
            <Image alt="" src="https://picsum.photos/900/720?random=2" />
            <Paragraph>
              Locatie Brug 423 &nbsp; <Link variant="inline">Bekijk op datapunt.nl</Link>
            </Paragraph>
          </div>
        </Column>
      </div>
    </Grid.Cell>
  </Grid>
)
