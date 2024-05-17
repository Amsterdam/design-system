import { Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { exampleHeading, exampleParagraph } from '../../components/shared/exampleContent'

export type AmsterdamArticleContentProps = {}

export const AmsterdamArticleContent = () => {
  return (
    <Grid paddingVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Column gap="medium">
          <Paragraph size="large">{exampleParagraph()}</Paragraph>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2}>{exampleHeading()}</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
