/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, Image, Overlap, Paragraph } from '@amsterdam/design-system-react'
import type { ArticlePageProps } from './ArticlePage'

type ArticleHeaderProps = Pick<ArticlePageProps, 'heading' | 'imageSrc'>

export const ArticleHeader = ({ heading, imageSrc }: ArticleHeaderProps) => (
  <header>
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={1}>
          {heading}
        </Heading>
        <Paragraph size="small">7 juni 2024</Paragraph>
      </Grid.Cell>
    </Grid>
    <Overlap>
      <Image alt="" aspectRatio="16:5" loading="lazy" src={imageSrc} />
    </Overlap>
  </header>
)
