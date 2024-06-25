import {
  Alert,
  Breadcrumb,
  Button,
  Column,
  Field,
  FieldSet,
  FormFieldCharacterCounter,
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
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={(e) => e.preventDefault()}>
          <Heading>Contact</Heading>
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription" size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen.
            </Paragraph>
            <TextArea
              aria-describedby="bodyDescription"
              id="body"
              onChange={(e) => setTextareaLength(e.target.value.length)}
              rows={4}
            />
            <FormFieldCharacterCounter length={textareaLength} maxLength={1000} />
          </Field>
          <FieldSet aria-describedby="contactgegevensDescription" legend="Wat zijn uw gegevens?">
            <Column gap="small" style={{ clear: 'both' }}>
              <Paragraph id="contactgegevensDescription">
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
              <Field>
                <Label htmlFor="woonplaats">Woonplaats</Label>
                <Radio name="woonplaats" value="amsterdam">
                  Amsterdam
                </Radio>
                <Radio name="woonplaats" value="weesp">
                  Weesp
                </Radio>
                <Radio name="woonplaats" value="anders">
                  Anders
                </Radio>
              </Field>
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <TextInput autoComplete="email" id="email" name="email" />
              </Field>
              <Row>
                <Field>
                  <Label htmlFor="country">Landnummer</Label>
                  <Select name="country">
                    <option value="+31">Nederland +31</option>
                    <option value="+32">Belgie +32</option>
                    <option value="+33">Frankrijk +33</option>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <TextInput autoComplete="phone" id="phone" name="phone" />
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
          <div className="ams-form-navigation">
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}
