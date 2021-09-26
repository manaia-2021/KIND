import React from 'react'
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#e8edea',
      marginTop: '80px',
      height: '700px',
      border: '1px solid black'
    },
    button: {
      marginTop: '20px'
    }
  }
})

export default function LandingPage () {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
              <Typography variant="h3">
            What is a carbon footprint?
              </Typography>
              <Typography variant="h6">
The term carbon footprint crops up a lot these days. What exactly does it actually mean?

Carbon footprint is a horribly abused phrase, so it’s worth spelling out exactly what it means.

When talking about climate change, footprint is a metaphor for the total impact that something has. And carbon is a shorthand for all the different greenhouse gases that contribue to global warming.

The term carbon footprint, therefore, is a shorthand to describe the best estimate that we can get of the full climate change impact of something. That something could be anything – an activity, an item, a lifestyle, a company, a country or even the whole world.
              </Typography>
              <Typography variant="h5">
                Here at KIND we want to enable you to make the right choices and to have fun while doing it.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
              {/* 825w x 700h image */}
              <img src='/What-is-a-carbon-footprint-825x700.png' alt='KIND' />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.button} display='flex' justifyContent='center'>
        <Button variant='contained' color='primary' href='/categories'>
          Start
        </Button>
      </Box>
    </>
  )
}
