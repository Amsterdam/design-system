/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, Image, Overlap, Paragraph } from '@amsterdam/design-system-react'
import type { ArticlePageProps } from './ArticlePage'

type ArticleHeaderProps = Pick<ArticlePageProps, 'heading' | 'imageSrc'>

export const ArticleHeader = ({ heading, imageSrc }: ArticleHeaderProps) => (
  <header>
    <Grid paddingBottom="2x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>
          {heading}
        </Heading>
        <Paragraph className="ams-mb-m">7 juni 2024</Paragraph>
        <Paragraph size="large">
          Niet meer naar het Stadsloket, maar thuis of op het werk uw nieuwe paspoort ontvangen. In juni en juli kan
          dat. Deze zomer bezorgt de gemeente reisdocumenten gratis aan huis. We doen dat om de drukte in de
          Stadsloketten te verminderen. En u hoeft maar 1 keer naar het Stadsloket.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Overlap>
      <Image alt="" aspectRatio="16:5" loading="lazy" src={imageSrc} />
    </Overlap>
  </header>
)
