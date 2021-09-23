import React from 'react'
import HeaderBar from './HeaderBar'
import { Box, Button, Grid, makeStyles } from '@material-ui/core'

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

export default function LandingPage() {
  const classes = useStyles()
  return (
    <>
      <HeaderBar />
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
              test
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
              test
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.button} display='flex' justifyContent='center'>
        <Button variant='contained' color='primary' href='#'>
          Start
        </Button>
      </Box>
    </>
  )
}