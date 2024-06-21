import { AspectRatio, Grid, Heading, Image, Overlap, Paragraph } from '@amsterdam/design-system-react'
import type { ArticleProps } from './Article'

type ArticleHeaderProps = Pick<ArticleProps, 'heading' | 'imageSrc'>

export const ArticleHeader = ({ heading, imageSrc }: ArticleHeaderProps) => (
  <header>
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb--sm">{heading}</Heading>
        <Paragraph size="small">7 juni 2024</Paragraph>
      </Grid.Cell>
    </Grid>
    <Overlap>
      <AspectRatio ratio="2x-wide">
        <Image alt="" loading="lazy" src={imageSrc} />
      </AspectRatio>
    </Overlap>
  </header>
)
