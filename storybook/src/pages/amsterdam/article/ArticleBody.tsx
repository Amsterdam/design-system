import {
  AspectRatio,
  Column,
  Grid,
  Heading,
  Image,
  Overlap,
  Paragraph,
  Spotlight,
} from '@amsterdam/design-system-react'
import { exampleHeading, exampleParagraph } from '../../../components/shared/exampleContent'

export type ArticleContentProps = {}

export const ArticleBody = () => (
  <>
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
    <Overlap>
      <Spotlight
        color="purple"
        style={{
          background:
            'linear-gradient(to bottom, white, white 60%,  var(--ams-spotlight-purple-background-color) 60%,  var(--ams-spotlight-purple-background-color))',
        }}
      >
        <Grid paddingVertical="large">
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <AspectRatio ratio="x-wide">
              <Image src="https://picsum.photos/1280/1024" alt="Placeholder" loading="lazy" cover />
            </AspectRatio>
          </Grid.Cell>
        </Grid>
      </Spotlight>
    </Overlap>
    <Grid paddingVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Column gap="medium">
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Column>
      </Grid.Cell>
    </Grid>
  </>
)
