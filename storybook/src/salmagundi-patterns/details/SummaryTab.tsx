import {
  Alert,
  Column,
  DescriptionList,
  Heading,
  Paragraph,
  Table,
  TableOfContents,
} from '@amsterdam/design-system-react'
import clsx from 'clsx'
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function SummaryTab() {
  const [alertVisible, setAlertVisible] = useState(true)

  return (
    <>
      {alertVisible && (
        <Alert
          className="ams-mb-xl"
          closeable
          heading="Let op"
          headingLevel={2}
          onClose={() => setAlertVisible(false)}
          severity="warning"
        >
          <Paragraph>Dit is hoe je een alert toont</Paragraph>
        </Alert>
      )}
      <div className={styles.summaryTab}>
        <div className={styles.summaryTabToc}>
          <TableOfContents heading="Op deze pagina">
            <TableOfContents.List>
              <TableOfContents.Link href="#section-1" label="Gegevens betrokkene" />
              <TableOfContents.Link href="#section-2" label="Aanmelding" />
              <TableOfContents.Link href="#section-3" label="Veiligheid & politie" />
              <TableOfContents.Link href="#section-4" label="Hulpverlening">
                <TableOfContents.List>
                  <TableOfContents.Link href="#section-4-1" label="Thuiszorg" />
                  <TableOfContents.Link href="#section-4-2" label="De Zware Jongens" />
                </TableOfContents.List>
              </TableOfContents.Link>
            </TableOfContents.List>
          </TableOfContents>
        </div>
        <div className={styles.summaryTabData}>
          <Column gap="x-large">
            <div id="section-1">
              <Heading className="ams-mb-m" level={2}>
                Gegevens betrokkene
              </Heading>
              <DescriptionList className={clsx(styles.gegevens)} termsWidth="medium">
                <DescriptionList.Term>Naam</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Bart Bartsen ♂</DescriptionList.Description>
                <DescriptionList.Term>Woonstadsdeel</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>West</DescriptionList.Description>
                <DescriptionList.Term>Begeleider</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Oom Agent</DescriptionList.Description>
                <DescriptionList.Term>Extra informatie</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus arcu non erat placerat, non egestas
                  tortor consequat. Sed maximus fermentum justo, eu efficitur massa ornare nec. Quisque volutpat
                  vehicula tempus. Morbi placerat semper varius. Sed efficitur, arcu at bibendum fermentum, augue lacus
                  congue libero, ac gravida nulla mauris ac ex.
                </DescriptionList.Description>
              </DescriptionList>
            </div>
            <div id="section-2">
              <Heading className="ams-mb-m" level={2}>
                Aanmelding
              </Heading>
              <DescriptionList className={clsx(styles.gegevens)} termsWidth="medium">
                <DescriptionList.Term>Datum indienen</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>03-12-2024 11:07</DescriptionList.Description>
                <DescriptionList.Term>Projectleider</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Mark van Dijk</DescriptionList.Description>
                <DescriptionList.Term>Reden aanmelding</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Hinderlijk gedrag</DescriptionList.Description>
                <DescriptionList.Term>Overlast stadsdeel</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Centrum</DescriptionList.Description>
                <DescriptionList.Term>Datum & tijdstip melding</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>2 dec 22 uur</DescriptionList.Description>
                <DescriptionList.Term>Locatie melding</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Dam</DescriptionList.Description>
                <DescriptionList.Term>Toelichting aanmelding</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>
                  Racen met zijn F1 bolide
                </DescriptionList.Description>
              </DescriptionList>
            </div>
            <div id="section-3">
              <Heading className="ams-mb-m" level={2}>
                Veiligheid & politie
              </Heading>
              <DescriptionList className={clsx(styles.gegevens)} termsWidth="medium">
                <DescriptionList.Term>Is de betrokkene bekend bij de politie?</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Ja</DescriptionList.Description>
                <DescriptionList.Term>Agressief gedrag?</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Onbekend</DescriptionList.Description>
                <DescriptionList.Term>Gaat er een politieagent of hulpverlener mee op huisbezoek?</DescriptionList.Term>
                <DescriptionList.Description className={styles.dd}>Ja</DescriptionList.Description>
              </DescriptionList>
              <Table className={clsx(styles.table, 'ams-mb-2xl')}>
                <Table.Caption>Betrokken agenten</Table.Caption>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Max</Table.Cell>
                    <Table.Cell>Jeugdagent</Table.Cell>
                    <Table.Cell>0612345678</Table.Cell>
                    <Table.Cell>max@geheimagent.nl</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Rob</Table.Cell>
                    <Table.Cell>Jeugdagent</Table.Cell>
                    <Table.Cell>0612345678</Table.Cell>
                    <Table.Cell>rob@geheimagent.nl</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            <div id="section-4">
              <Heading className="ams-mb-m" level={2}>
                Hulpverlening
              </Heading>
              <div className={styles.hulpverlening} id="section-4-1">
                <Heading level={3}>Thuiszorg</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus arcu non erat placerat, non egestas
                  tortor consequat. Sed maximus fermentum justo, eu efficitur massa ornare nec. Quisque volutpat
                  vehicula tempus. Morbi placerat semper varius. Sed efficitur, arcu at bibendum fermentum, augue lacus
                  congue libero, ac gravida nulla mauris ac ex.
                </Paragraph>
                <Table className={clsx(styles.table, 'ams-mb-m')}>
                  <Table.Caption>Contactpersonen</Table.Caption>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell className={styles.nowrap}>Willy Wortel</Table.Cell>
                      <Table.Cell>Jeugwerker</Table.Cell>
                      <Table.Cell>0612345678</Table.Cell>
                      <Table.Cell>willy@duckstad.nl</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className={styles.nowrap}>Katrien Duck</Table.Cell>
                      <Table.Cell>Sociaal werker</Table.Cell>
                      <Table.Cell>0612345678</Table.Cell>
                      <Table.Cell>Katrien@duckstad.nl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <div className={styles.hulpverlening} id="section-4-2">
                <Heading level={3}>De Zware Jongens</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus arcu non erat placerat, non egestas
                  tortor consequat. Sed maximus fermentum justo, eu efficitur massa ornare nec.
                </Paragraph>
                <Table className={clsx(styles.table, 'ams-mb-m')}>
                  <Table.Caption>Contactpersonen</Table.Caption>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Willy Wortel</Table.Cell>
                      <Table.Cell>Jeugwerker</Table.Cell>
                      <Table.Cell>0612345678</Table.Cell>
                      <Table.Cell>willy@duckstad.nl</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Katrien Duck</Table.Cell>
                      <Table.Cell>Sociaal werker</Table.Cell>
                      <Table.Cell>0612345678</Table.Cell>
                      <Table.Cell>Katrien@duckstad.nl</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
          </Column>
        </div>
      </div>
    </>
  )
}
