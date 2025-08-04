/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Alert,
  Breadcrumb,
  Button,
  CharacterCount,
  Column,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Paragraph,
  Radio,
  Row,
  Select,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
import { useState } from 'react'

export const FormPage = () => {
  const [textareaLength, setTextareaLength] = useState(0)

  return (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb>
        <Heading className="ams-mb-m" level={1}>
          Contact
        </Heading>
        <form className="ams-gap-xl" id="main" onSubmit={(e) => e.preventDefault()}>
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen.
            </Paragraph>
            <TextArea
              aria-describedby="bodyDescription"
              id="body"
              onChange={(e) => setTextareaLength(e.target.value.length)}
              rows={4}
            />
            <CharacterCount length={textareaLength} maxLength={1000} />
          </Field>
          <FieldSet aria-describedby="contactDetailsDescription" legend="Wat zijn uw gegevens?">
            <Column gap="x-large">
              <Paragraph id="contactDetailsDescription">
                Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.
              </Paragraph>
              <Field>
                <Label htmlFor="initials">Voorletters</Label>
                <TextInput id="initials" name="initials" />
              </Field>
              <Field>
                <Label htmlFor="familyName">Achternaam</Label>
                <TextInput autoComplete="family-name" id="familyName" name="familyName" />
              </Field>
              <FieldSet legend="Woonplaats">
                <Radio name="city" value="amsterdam">
                  Amsterdam
                </Radio>
                <Radio name="city" value="weesp">
                  Weesp
                </Radio>
                <Radio name="city" value="anders">
                  Anders
                </Radio>
              </FieldSet>
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <TextInput autoComplete="email" id="email" name="email" />
              </Field>
              <Row gap="x-large" wrap>
                <Field>
                  <Label htmlFor="countryCode">Landnummer</Label>
                  <Select id="countryCode" name="countryCode">
                    <Select.Option value="+31">Nederland +31</Select.Option>
                    <Select.Option value="+32">België +32</Select.Option>
                    <Select.Option value="+33">Frankrijk +33</Select.Option>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <TextInput autoComplete="tel" id="phone" name="phone" />
                </Field>
              </Row>
            </Column>
          </FieldSet>
          <Alert heading="Waarom vragen we om deze gegevens?" headingLevel={2}>
            <Paragraph>
              We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze
              dienstverlening.
            </Paragraph>
          </Alert>
          <div>
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}
