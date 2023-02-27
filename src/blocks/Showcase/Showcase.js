import * as React from 'react'
import { Grid } from '@mui/material'
import ShowcaseItem from 'components/ShowcaseItem'

function Showcase(props) {
  const { content } = props
  return (
    <section>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 15 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
        maxWidth="xl"
      >
        {content.map((item, idx) => (
          <Grid item xs={6} sm={6} md={3} key={idx}>
            <ShowcaseItem {...item} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Showcase
