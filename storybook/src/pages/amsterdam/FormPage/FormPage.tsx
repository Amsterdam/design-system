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
    <Grid paddingBottom="medium" paddingTop="small">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb>
        <Heading className="ams-mb--md">Contact</Heading>
        <form id="main" className="ams-gap--md" onSubmit={(e) => e.preventDefault()}>
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription" size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen.
            </Paragraph>
            <TextArea
              id="body"
              aria-describedby="bodyDescription"
              rows={4}
              onChange={(e) => setTextareaLength(e.target.value.length)}
            />
            <CharacterCount length={textareaLength} maxLength={1000} />
          </Field>
          <FieldSet aria-describedby="contactDetailsDescription" legend="Wat zijn uw gegevens?">
            <Column gap="small">
              <Paragraph id="contactDetailsDescription">
                Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.
              </Paragraph>
              <Field>
                <Label htmlFor="initials">Voorletters</Label>
                <TextInput id="initials" name="initials" />
              </Field>
              <Field>
                <Label htmlFor="familyName">Achternaam</Label>
                <TextInput id="familyName" name="familyName" autoComplete="family-name" />
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
                <TextInput id="email" name="email" autoComplete="email" />
              </Field>
              <Row wrap>
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
                  <TextInput id="phone" name="phone" autoComplete="tel" />
                </Field>
              </Row>
            </Column>
          </FieldSet>
          <Alert severity="info">
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
