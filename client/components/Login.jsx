import { Button, Grid, TextField, Typography } from "@material-ui/core"
import React from "react"

export default function Login() {
  return (
    <Grid container justify='center' alignItems='center' direction='column' style={{ minHeight: '100vh' }} spacing={5}>
      <Grid item>
        <Typography variant='h5' color='primary' />
      </Grid>
      <Grid item style={{ border: '1pm solid black' }}>
        <Fields />
      </Grid>
    </Grid>

  )
}

const Fields = () => (
  <Grid container direction='column' alighItems='center'
    justifyContent='center'>
    <TextField variant='outlined' label='Email'
      fullWidth
      style={{ marginBottom: '2em' }}
    />
    <TextField variant='outlined' label='Password' fullWidth
      style={{ marginBottom: '2em' }} />
    <Button size='large' variant='contained' color='primary'>
      LOGIN
    </Button>
  </Grid>
)