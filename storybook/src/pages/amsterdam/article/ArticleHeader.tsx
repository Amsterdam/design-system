import { AspectRatio, Grid, Heading, Image, Overlap } from '@amsterdam/design-system-react'

export type ArticleHeaderProps = {
  imageAlt: string
  imageSrc: string
  heading: string
}

export const ArticleHeader = ({ imageAlt, imageSrc, heading }: ArticleHeaderProps) => (
  <header>
    <Grid paddingVertical="small">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading>{heading}</Heading>
      </Grid.Cell>
    </Grid>
    <Overlap>
      <AspectRatio ratio="2x-wide">
        <Image alt={imageAlt} loading="lazy" src={imageSrc} />
      </AspectRatio>
    </Overlap>
  </header>
)
