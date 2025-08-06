import React from 'react'

import {
  Heading,
  Field,
  Label,
  TextInput,
  DateInput,
  Select,
  ActionGroup,
  Button,
  Grid,
  Breadcrumb,
  TextArea,
} from '@amsterdam/design-system-react'
// import 'react-quill/dist/quill.snow.css'
// import 'react-toastify/dist/ReactToastify.css'

import styles from './styles.module.css'

// import './quill.css'
// import RichTextEditor from '../components/RichTextEditor/RichTextEditor'

export default function FormPage() {
  return (
    <>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Personen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bart Bartsen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Nieuw Gezinsbezoek</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>

      <main id="main">
        <Grid paddingVertical="large" as="article">
          <Grid.Cell span={{ narrow: 4, medium: 7, wide: 8 }}>
            <header>
              <Heading level={1} className="ams-mb-m">
                Aanmeldformulier Gezinsdossier
              </Heading>
            </header>

            <Field className="ams-mb-l">
              <Label htmlFor="input2">Projectleider</Label>
              <Select className={styles.select}>
                <Select.Option value="1">Joey</Select.Option>
                <Select.Option value="2">Ruben</Select.Option>
                <Select.Option value="3">Niels</Select.Option>
              </Select>
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input2">Overlast stadsdeel</Label>
              <Select className={styles.select}>
                <Select.Option id="Centrum" value="Centrum">
                  Centrum
                </Select.Option>
                <Select.Option id="West" value="West">
                  West
                </Select.Option>
                <Select.Option id="Nieuw-West" value="Nieuw-West">
                  Nieuw-West
                </Select.Option>
                <Select.Option id="Oost" value="Oost">
                  Oost
                </Select.Option>
                <Select.Option id="Zuid" value="Zuid">
                  Zuid
                </Select.Option>
                <Select.Option id="Zuidoost" value="Zuidoost">
                  Zuidoost
                </Select.Option>
                <Select.Option id="Noord" value="Noord">
                  Noord
                </Select.Option>
                <Select.Option id="Weesp" value="Weesp">
                  Weesp
                </Select.Option>
              </Select>
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input2">Reden aanmelding</Label>
              <Select className={styles.select}>
                <Select.Option>Maak een keuze</Select.Option>
                <Select.Option id="Afpersing" value="Afpersing">
                  Afpersing
                </Select.Option>
                <Select.Option id="Drill rap" value="Drill rap">
                  Drill rap
                </Select.Option>
                <Select.Option id="Drugs &amp; Drank overlast" value="Drugs &amp; Drank overlast">
                  Drugs &amp; Drank overlast
                </Select.Option>
                <Select.Option id="Drugs dealen" value="Drugs dealen">
                  Drugs dealen
                </Select.Option>
                <Select.Option
                  id="Geluidsoverlast (verstoring openbare orde)"
                  value="Geluidsoverlast (verstoring openbare orde)"
                >
                  Geluidsoverlast (verstoring openbare orde)
                </Select.Option>
                <Select.Option id="Hinderlijk gedrag" value="Hinderlijk gedrag">
                  Hinderlijk gedrag
                </Select.Option>
                <Select.Option id="Inpandige overlast" value="Inpandige overlast">
                  Inpandige overlast
                </Select.Option>
                <Select.Option id="Intimiderend/agressief gedrag" value="Intimiderend/agressief gedrag">
                  Intimiderend/agressief gedrag
                </Select.Option>
                <Select.Option id="Lachgas" value="Lachgas">
                  Lachgas
                </Select.Option>
                <Select.Option id="Nazorg" value="Nazorg">
                  Nazorg
                </Select.Option>
                <Select.Option id="Pesten" value="Pesten">
                  Pesten
                </Select.Option>
                <Select.Option id="ROSA aanpak" value="ROSA aanpak">
                  ROSA aanpak
                </Select.Option>
                <Select.Option id="Social Media slachtoffer of dader" value="Social Media slachtoffer of dader">
                  Social Media slachtoffer of dader
                </Select.Option>
                <Select.Option
                  id="Uitschelden/geen gehoor geven gezagsdragers of toezichthouders"
                  value="Uitschelden/geen gehoor geven gezagsdragers of toezichthouders"
                >
                  Uitschelden/geen gehoor geven gezagsdragers of toezichthouders
                </Select.Option>
                <Select.Option id="Vandalisme (vervuiling en vernieling)" value="Vandalisme (vervuiling en vernieling)">
                  Vandalisme (vervuiling en vernieling)
                </Select.Option>
                <Select.Option id="Vuurwerk" value="Vuurwerk">
                  Vuurwerk
                </Select.Option>
                <Select.Option id="Wapenbezit" value="Wapenbezit">
                  Wapenbezit
                </Select.Option>
                <Select.Option
                  id="Zorgelijk gedrag (afglijden/nieuwe aanwas)"
                  value="Zorgelijk gedrag (afglijden/nieuwe aanwas)"
                >
                  Zorgelijk gedrag (afglijden/nieuwe aanwas)
                </Select.Option>
                <Select.Option id="Anders" value="Anders">
                  Anders
                </Select.Option>
              </Select>
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input1" optional>
                Datum & tijdstip melding
              </Label>
              <DateInput type="datetime-local" />
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input1">Gespreksverslag</Label>
              {/* <RichTextEditor id="input1" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
              <TextArea id="input1" />
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input2" optional>
                Wie is meegegaan?
              </Label>
              <TextInput id="input2" className={styles.name} />
            </Field>

            <Field className="ams-mb-l">
              <Label htmlFor="input2">Wijze gesprek</Label>
              <Select className={styles.select}>
                <Select.Option value="1">Thuis</Select.Option>
                <Select.Option value="2">Kantoor</Select.Option>
                <Select.Option value="3">Hotspot</Select.Option>
              </Select>
            </Field>

            <div className="ams-mb-l">
              <Field className="ams-mb-l">
                <Label htmlFor="input2">Leefgebied Thuis</Label>
                {/* <RichTextEditor id="input2" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input2" />
              </Field>

              <Field className="ams-mb-l">
                <Label htmlFor="input3">Leefgebied School</Label>
                {/* <RichTextEditor id="input3" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input3" />
              </Field>

              <Field className="ams-mb-l">
                <Label htmlFor="input4">Leefgebied Hulpverlening</Label>
                {/* <RichTextEditor id="input4" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input4" />
              </Field>

              <Field className="ams-mb-l">
                <Label htmlFor="input5" className="ams-mb-s">
                  Leefgebied Justitie
                </Label>
                {/* <RichTextEditor id="input5" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input5" />
              </Field>

              <Field className="ams-mb-l">
                <Label htmlFor="input6">Leefgebied Vrijetijdsbesteding</Label>
                {/* <RichTextEditor id="input6" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input6" />
              </Field>

              <Field className="ams-mb-l">
                <Label htmlFor="input7">Leefgebied Straat</Label>
                {/* <RichTextEditor id="input7" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
                <TextArea id="input7" />
              </Field>
            </div>

            <Field className="ams-mb-xl">
              <Label htmlFor="input8">Afspraken en vervolgstappen</Label>
              {/* <RichTextEditor id="input8" data-testid="" value="" onChange={() => {}} onBlur={() => {}} /> */}
              <TextArea id="input8" />
            </Field>

            <ActionGroup className="ams-mb-l">
              <Button>Opslaan</Button>
              <Button variant="tertiary">Annuleren</Button>
            </ActionGroup>
          </Grid.Cell>
        </Grid>
      </main>
    </>
  )
}
