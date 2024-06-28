import { Grid, Header, Paragraph } from '@amsterdam/design-system-react'

export function SiteHeader() {
  return (
    <Grid>
      <Grid.Cell span="all">
        <Header
          appName="Amopis"
          links={
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <div className="ams-docs-amopis-user-badge">
                <Paragraph inverseColor size="small" title="Goedemorgen Kees Herder">
                  KH
                </Paragraph>
              </div>
            </div>
          }
          logoLink="amopis"
          logoLinkTitle="Naar de homepage van Amopis"
        />
      </Grid.Cell>
    </Grid>
  )
}
