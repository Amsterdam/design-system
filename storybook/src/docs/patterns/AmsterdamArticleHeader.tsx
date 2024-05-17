import { AspectRatio, Grid, Heading, Image, Overlap } from '@amsterdam/design-system-react'

export type AmsterdamArticleHeaderProps = {
  src: string
  alt: string
}

export const AmsterdamArticleHeader = ({ src, alt }: AmsterdamArticleHeaderProps) => {
  return (
    <header>
      <Grid paddingVertical="small">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading>Amsterdam Article Header</Heading>
        </Grid.Cell>
      </Grid>
      {src && (
        <Overlap>
          <AspectRatio ratio="2x-wide">
            <Image src={src} alt={alt ? alt : ''} loading="lazy" />
          </AspectRatio>
        </Overlap>
      )}
    </header>
  )
}
